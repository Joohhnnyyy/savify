// Financial AI System API Service
const API_BASE = 'http://localhost:8000';

// Types based on the backend models
export interface ExpenditureEntry {
  amount: number;
  category: string;
  description: string;
  date: string; // ISO datetime string
}

export interface ChatRequest {
  message: string;
  user_context?: string;
  expenditure_data?: ExpenditureEntry[];
}

export interface ChatResponse {
  response: string;
  query_type: 'expenditure_analysis' | 'insights_generation' | 'tax_advice' | 
              'investment_advice' | 'revenue_analysis' | 'general_chat';
  data?: any;
}

export interface FullAnalysisRequest {
  entries: ExpenditureEntry[];
  user_context?: string;
}

// API Service Class
export class FinancialApiService {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE) {
    this.baseUrl = baseUrl;
  }

  // Generic API call method with error handling
  private async apiCall<T>(endpoint: string, data: any): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || `HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API call failed for ${endpoint}:`, error);
      throw error;
    }
  }

  // Main chat endpoint - handles all query types intelligently
  async chat(request: ChatRequest): Promise<ChatResponse> {
    return this.apiCall<ChatResponse>('/chat', request);
  }

  // Direct expenditure analysis
  async analyzeExpenditure(entries: ExpenditureEntry[]): Promise<ChatResponse> {
    return this.apiCall<ChatResponse>('/analyze-expenditure', entries);
  }

  // Complete analysis pipeline
  async fullAnalysis(request: FullAnalysisRequest): Promise<ChatResponse> {
    return this.apiCall<ChatResponse>('/full-analysis', request);
  }

  // Convenience methods for specific query types
  async askFinancialQuestion(message: string, userContext?: string): Promise<ChatResponse> {
    return this.chat({ message, user_context: userContext });
  }

  async getInvestmentAdvice(message: string, userContext?: string): Promise<ChatResponse> {
    return this.chat({ 
      message: `Investment advice: ${message}`, 
      user_context: userContext 
    });
  }

  async getTaxAdvice(message: string, userContext?: string): Promise<ChatResponse> {
    return this.chat({ 
      message: `Tax advice: ${message}`, 
      user_context: userContext 
    });
  }

  async analyzeSpendingWithInsights(
    entries: ExpenditureEntry[], 
    userContext?: string
  ): Promise<ChatResponse> {
    return this.chat({
      message: "Analyze my spending and provide insights",
      user_context: userContext,
      expenditure_data: entries
    });
  }

  // Health check
  async healthCheck(): Promise<{ message: string }> {
    try {
      const response = await fetch(`${this.baseUrl}/`);
      return await response.json();
    } catch (error) {
      throw new Error('Backend service is not available');
    }
  }
}

// Default instance
export const financialApi = new FinancialApiService();

// Utility functions
export const createExpenditureEntry = (
  amount: number,
  category: string,
  description: string,
  date?: Date
): ExpenditureEntry => ({
  amount,
  category,
  description,
  date: (date || new Date()).toISOString()
});

// Common expense categories
export const EXPENSE_CATEGORIES = [
  'food',
  'transport',
  'housing',
  'utilities',
  'entertainment',
  'healthcare',
  'shopping',
  'education',
  'travel',
  'other'
] as const;

export type ExpenseCategory = typeof EXPENSE_CATEGORIES[number];