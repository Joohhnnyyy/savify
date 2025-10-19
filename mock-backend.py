#!/usr/bin/env python3
"""
Simple mock backend for testing Financial AI System frontend integration
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Dict, Any
import uvicorn
import json
import os
from datetime import datetime

# Load environment variables
from dotenv import load_dotenv
load_dotenv("Financial-AI-System-V2-main/backend/.env")

# Import GROQ for real AI responses
try:
    from groq import Groq
    GROQ_AVAILABLE = True
    groq_client = Groq(api_key=os.getenv("GROQ_API_KEY"))
except ImportError:
    GROQ_AVAILABLE = False
    print("⚠️  GROQ not available, using mock responses")

app = FastAPI(title="Financial AI System Mock API", version="1.0.0")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class ExpenditureEntry(BaseModel):
    amount: float
    category: str
    description: str
    date: str

class ChatRequest(BaseModel):
    message: str
    user_context: Optional[str] = None
    expenditure_data: Optional[List[ExpenditureEntry]] = None

class ChatResponse(BaseModel):
    response: str
    query_type: str
    data: Optional[Dict[str, Any]] = None

class FullAnalysisRequest(BaseModel):
    expenditure_data: List[ExpenditureEntry]
    user_context: Optional[str] = None

# Mock responses
MOCK_RESPONSES = {
    "budget": "Based on your spending patterns, I recommend creating a 50/30/20 budget: 50% for needs, 30% for wants, and 20% for savings and debt repayment.",
    "investment": "For beginners, I suggest starting with low-cost index funds or ETFs. Consider a diversified portfolio with 70% stocks and 30% bonds, adjusted based on your age and risk tolerance.",
    "tax": "Common tax deductions include mortgage interest, charitable donations, state and local taxes, and business expenses. Keep detailed records of all deductible expenses.",
    "savings": "Aim to save at least 20% of your income. Start with an emergency fund of 3-6 months of expenses, then focus on retirement savings and other financial goals.",
    "default": "I'm here to help with your financial questions! Feel free to ask about budgeting, investments, taxes, savings, or any other financial topics."
}

def generate_ai_response(message: str, expenditure_data: Optional[List[ExpenditureEntry]] = None) -> ChatResponse:
    """Generate AI response using GROQ API or fallback to mock responses"""
    
    # Initialize data variable
    data = None
    
    if GROQ_AVAILABLE:
        try:
            # Prepare context for AI
            context = f"User message: {message}\n"
            if expenditure_data:
                total_spent = sum(exp.amount for exp in expenditure_data)
                categories = {}
                for exp in expenditure_data:
                    categories[exp.category] = categories.get(exp.category, 0) + exp.amount
                
                context += f"\nUser's spending data:\n"
                context += f"Total spent: ${total_spent:.2f}\n"
                context += f"Categories: {categories}\n"
                context += f"Number of transactions: {len(expenditure_data)}\n"
            
            # Create AI prompt
            prompt = f"""You are a professional financial advisor AI. Provide well-structured, actionable financial advice with proper formatting.

{context}

Please provide a comprehensive financial analysis with the following structure:
1. **Spending Analysis** - Analyze the spending patterns and key insights
2. **Key Recommendations** - Provide 3-5 specific, actionable recommendations using bullet points
3. **Next Steps** - Suggest concrete actions the user can take

Format your response with:
- Clear section headers using **bold text**
- Bullet points for lists and recommendations
- Proper paragraph breaks for readability
- Professional tone with specific numbers and percentages when relevant

Keep the response informative but concise (3-4 paragraphs maximum)."""

            # Call GROQ API
            chat_completion = groq_client.chat.completions.create(
                messages=[
                    {
                        "role": "system",
                        "content": "You are a knowledgeable financial advisor. Provide helpful, practical financial advice."
                    },
                    {
                        "role": "user",
                        "content": prompt
                    }
                ],
                model="llama-3.1-8b-instant",
                temperature=0.7,
                max_tokens=500
            )
            
            ai_response = chat_completion.choices[0].message.content
            
            # Determine query type
            message_lower = message.lower()
            if any(word in message_lower for word in ["budget", "budgeting", "spend"]):
                query_type = "budget_advice"
            elif any(word in message_lower for word in ["invest", "investment", "stock", "portfolio"]):
                query_type = "investment_advice"
            elif any(word in message_lower for word in ["tax", "deduction", "irs"]):
                query_type = "tax_advice"
            elif any(word in message_lower for word in ["save", "saving", "emergency"]):
                query_type = "savings_advice"
            elif any(word in message_lower for word in ["analyze", "analysis", "pattern"]):
                query_type = "expenditure_analysis"
            else:
                query_type = "general_chat"
            
            # Prepare data for expenditure analysis
            if expenditure_data and query_type == "expenditure_analysis":
                categories = {}
                total = 0
                for exp in expenditure_data:
                    categories[exp.category] = categories.get(exp.category, 0) + exp.amount
                    total += exp.amount
                
                top_category = max(categories.items(), key=lambda x: x[1]) if categories else ("N/A", 0)
                
                data = {
                    "total_amount": total,
                    "category_breakdown": categories,
                    "transaction_count": len(expenditure_data),
                    "top_category": top_category[0]
                }
            
            return ChatResponse(
                response=ai_response,
                query_type=query_type,
                data=data
            )
            
        except Exception as e:
            print(f"❌ GROQ API Error: {e}")
            # Fallback to mock response
            return generate_mock_response(message, expenditure_data)
    else:
        # Use mock responses if GROQ is not available
        return generate_mock_response(message, expenditure_data)

def generate_mock_response(message: str, expenditure_data: Optional[List[ExpenditureEntry]] = None) -> ChatResponse:
    """Generate a mock response based on the message content"""
    message_lower = message.lower()
    
    if any(word in message_lower for word in ["budget", "budgeting", "spend"]):
        query_type = "budget_planning"
        response = MOCK_RESPONSES["budget"]
        if expenditure_data:
            total = sum(exp.amount for exp in expenditure_data)
            response += f"\n\nBased on your current expenses of ${total:.2f}, here are some specific recommendations for your situation."
    elif any(word in message_lower for word in ["invest", "stock", "portfolio"]):
        query_type = "investment_advice"
        response = MOCK_RESPONSES["investment"]
    elif any(word in message_lower for word in ["tax", "deduction", "irs"]):
        query_type = "tax_advice"
        response = MOCK_RESPONSES["tax"]
    elif any(word in message_lower for word in ["save", "saving", "emergency"]):
        query_type = "savings_advice"
        response = MOCK_RESPONSES["savings"]
    elif any(word in message_lower for word in ["analyze", "analysis", "pattern"]):
        query_type = "expenditure_analysis"
        if expenditure_data:
            categories = {}
            total = 0
            for exp in expenditure_data:
                categories[exp.category] = categories.get(exp.category, 0) + exp.amount
                total += exp.amount
            
            top_category = max(categories.items(), key=lambda x: x[1]) if categories else ("N/A", 0)
            
            response = f"Analysis of your spending:\n\n"
            response += f"• Total spent: ${total:.2f}\n"
            response += f"• Top spending category: {top_category[0]} (${top_category[1]:.2f})\n"
            response += f"• Number of transactions: {len(expenditure_data)}\n\n"
            response += "Recommendations:\n"
            response += "• Track your spending regularly\n"
            response += "• Consider reducing expenses in your top spending category\n"
            response += "• Set up automatic savings transfers"
            
            data = {
                "total_amount": total,
                "category_breakdown": categories,
                "transaction_count": len(expenditure_data),
                "top_category": top_category[0]
            }
        else:
            response = "Please add some expenses first so I can analyze your spending patterns."
            data = None
    else:
        query_type = "general_chat"
        response = MOCK_RESPONSES["default"]
        data = None
    
    return ChatResponse(
        response=response,
        query_type=query_type,
        data=data
    )

@app.get("/")
async def root():
    return {"message": "Financial AI System Mock API", "status": "running"}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now().isoformat()}

@app.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    """Main chat endpoint that handles all types of financial queries"""
    try:
        print(f"📨 Received chat request: {request.message}")
        print(f"📊 Expenditure data: {len(request.expenditure_data) if request.expenditure_data else 0} entries")
        
        response = generate_ai_response(request.message, request.expenditure_data)
        
        print(f"✅ Generated response: {response.response[:100]}...")
        return response
    except Exception as e:
        print(f"❌ Error in chat endpoint: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/analyze-expenditure", response_model=ChatResponse)
async def analyze_expenditure(request: FullAnalysisRequest):
    """Analyze expenditure data and provide insights"""
    try:
        mock_message = "Analyze my spending patterns"
        response = generate_mock_response(mock_message, request.expenditure_data)
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error analyzing expenditure: {str(e)}")

@app.post("/full-analysis", response_model=ChatResponse)
async def full_analysis(request: FullAnalysisRequest):
    """Comprehensive financial analysis"""
    try:
        if not request.expenditure_data:
            raise HTTPException(status_code=400, detail="Expenditure data is required")
        
        categories = {}
        total = 0
        monthly_data = {}
        
        for exp in request.expenditure_data:
            categories[exp.category] = categories.get(exp.category, 0) + exp.amount
            total += exp.amount
            
            # Group by month
            month = exp.date[:7]  # YYYY-MM
            monthly_data[month] = monthly_data.get(month, 0) + exp.amount
        
        avg_monthly = sum(monthly_data.values()) / len(monthly_data) if monthly_data else 0
        
        response = f"Comprehensive Financial Analysis:\n\n"
        response += f"📊 SPENDING OVERVIEW:\n"
        response += f"• Total spent: ${total:.2f}\n"
        response += f"• Average monthly spending: ${avg_monthly:.2f}\n"
        response += f"• Number of transactions: {len(request.expenditure_data)}\n\n"
        
        response += f"📈 CATEGORY BREAKDOWN:\n"
        for category, amount in sorted(categories.items(), key=lambda x: x[1], reverse=True):
            percentage = (amount / total * 100) if total > 0 else 0
            response += f"• {category.title()}: ${amount:.2f} ({percentage:.1f}%)\n"
        
        response += f"\n💡 RECOMMENDATIONS:\n"
        response += f"• Consider setting a monthly budget of ${avg_monthly * 0.9:.2f}\n"
        response += f"• Focus on reducing expenses in your top spending categories\n"
        response += f"• Set up automatic savings of at least ${avg_monthly * 0.2:.2f}/month\n"
        
        if request.user_context:
            response += f"\n👤 PERSONALIZED ADVICE:\n"
            response += f"Based on your profile ({request.user_context}), consider consulting with a financial advisor for personalized investment strategies."
        
        data = {
            "total_amount": total,
            "category_breakdown": categories,
            "monthly_average": avg_monthly,
            "transaction_count": len(request.expenditure_data),
            "monthly_data": monthly_data
        }
        
        return ChatResponse(
            response=response,
            query_type="full_analysis",
            data=data
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error in full analysis: {str(e)}")

if __name__ == "__main__":
    print("🚀 Starting Financial AI System Mock Backend...")
    print("📍 API will be available at: http://localhost:8000")
    print("📚 API Documentation: http://localhost:8000/docs")
    uvicorn.run(app, host="0.0.0.0", port=8000)