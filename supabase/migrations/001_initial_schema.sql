-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create custom types
CREATE TYPE user_role AS ENUM ('user', 'admin', 'premium');
CREATE TYPE expense_category AS ENUM ('food', 'transportation', 'housing', 'utilities', 'entertainment', 'healthcare', 'shopping', 'education', 'travel', 'other');
CREATE TYPE investment_type AS ENUM ('stocks', 'bonds', 'etf', 'mutual_funds', 'crypto', 'real_estate', 'commodities', 'other');
CREATE TYPE tax_document_type AS ENUM ('w2', '1099', 'tax_return', 'receipt', 'other');
CREATE TYPE insight_type AS ENUM ('spending_pattern', 'saving_opportunity', 'investment_recommendation', 'tax_optimization', 'budget_alert', 'goal_progress');

-- User profiles table (extends Supabase auth.users)
CREATE TABLE user_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    phone TEXT,
    date_of_birth DATE,
    occupation TEXT,
    annual_income DECIMAL(12,2),
    risk_tolerance INTEGER CHECK (risk_tolerance >= 1 AND risk_tolerance <= 10),
    financial_goals TEXT[],
    user_role user_role DEFAULT 'user',
    onboarding_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User login tracking
CREATE TABLE user_login_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
    login_time TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    logout_time TIMESTAMP WITH TIME ZONE,
    ip_address INET,
    user_agent TEXT,
    device_info JSONB,
    session_duration INTERVAL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Financial accounts
CREATE TABLE financial_accounts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
    account_name TEXT NOT NULL,
    account_type TEXT NOT NULL, -- checking, savings, credit_card, investment, etc.
    institution_name TEXT,
    account_number_masked TEXT,
    balance DECIMAL(12,2),
    currency TEXT DEFAULT 'USD',
    is_active BOOLEAN DEFAULT TRUE,
    last_synced TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Expenses tracking
CREATE TABLE expenses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
    account_id UUID REFERENCES financial_accounts(id) ON DELETE SET NULL,
    amount DECIMAL(10,2) NOT NULL,
    currency TEXT DEFAULT 'USD',
    category expense_category NOT NULL,
    subcategory TEXT,
    description TEXT,
    merchant_name TEXT,
    transaction_date DATE NOT NULL,
    is_recurring BOOLEAN DEFAULT FALSE,
    recurring_frequency TEXT, -- monthly, weekly, yearly, etc.
    tags TEXT[],
    receipt_url TEXT,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Investment portfolio
CREATE TABLE investments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
    account_id UUID REFERENCES financial_accounts(id) ON DELETE SET NULL,
    symbol TEXT NOT NULL,
    name TEXT NOT NULL,
    investment_type investment_type NOT NULL,
    quantity DECIMAL(15,8),
    purchase_price DECIMAL(10,2),
    current_price DECIMAL(10,2),
    purchase_date DATE,
    currency TEXT DEFAULT 'USD',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Investment advice and recommendations
CREATE TABLE investment_advice (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
    advice_type TEXT NOT NULL, -- buy, sell, hold, rebalance
    symbol TEXT,
    recommendation_text TEXT NOT NULL,
    reasoning TEXT,
    confidence_score DECIMAL(3,2) CHECK (confidence_score >= 0 AND confidence_score <= 1),
    target_allocation DECIMAL(5,2),
    expected_return DECIMAL(5,2),
    risk_level INTEGER CHECK (risk_level >= 1 AND risk_level <= 10),
    time_horizon TEXT, -- short_term, medium_term, long_term
    is_implemented BOOLEAN DEFAULT FALSE,
    implementation_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at TIMESTAMP WITH TIME ZONE
);

-- Tax planning and documents
CREATE TABLE tax_documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
    document_type tax_document_type NOT NULL,
    tax_year INTEGER NOT NULL,
    document_name TEXT NOT NULL,
    file_url TEXT,
    file_size INTEGER,
    upload_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    processed BOOLEAN DEFAULT FALSE,
    extracted_data JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tax planning advice
CREATE TABLE tax_planning (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
    tax_year INTEGER NOT NULL,
    estimated_income DECIMAL(12,2),
    estimated_tax_liability DECIMAL(12,2),
    recommended_deductions JSONB,
    tax_saving_strategies TEXT[],
    quarterly_payment_schedule JSONB,
    deadline_reminders JSONB,
    is_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- AI-generated financial insights
CREATE TABLE financial_insights (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
    insight_type insight_type NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    data_points JSONB,
    actionable_items TEXT[],
    priority_level INTEGER CHECK (priority_level >= 1 AND priority_level <= 5),
    is_read BOOLEAN DEFAULT FALSE,
    is_dismissed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at TIMESTAMP WITH TIME ZONE
);

-- Budget planning
CREATE TABLE budgets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    period_type TEXT NOT NULL, -- monthly, weekly, yearly
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    category_allocations JSONB, -- {"food": 500, "transportation": 200, ...}
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Financial goals
CREATE TABLE financial_goals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
    goal_name TEXT NOT NULL,
    target_amount DECIMAL(12,2) NOT NULL,
    current_amount DECIMAL(12,2) DEFAULT 0,
    target_date DATE,
    goal_type TEXT, -- emergency_fund, retirement, house, vacation, etc.
    priority_level INTEGER CHECK (priority_level >= 1 AND priority_level <= 5),
    is_achieved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_user_profiles_email ON user_profiles(email);
CREATE INDEX idx_user_login_sessions_user_id ON user_login_sessions(user_id);
CREATE INDEX idx_user_login_sessions_login_time ON user_login_sessions(login_time);
CREATE INDEX idx_financial_accounts_user_id ON financial_accounts(user_id);
CREATE INDEX idx_expenses_user_id ON expenses(user_id);
CREATE INDEX idx_expenses_transaction_date ON expenses(transaction_date);
CREATE INDEX idx_expenses_category ON expenses(category);
CREATE INDEX idx_investments_user_id ON investments(user_id);
CREATE INDEX idx_investments_symbol ON investments(symbol);
CREATE INDEX idx_investment_advice_user_id ON investment_advice(user_id);
CREATE INDEX idx_tax_documents_user_id ON tax_documents(user_id);
CREATE INDEX idx_tax_documents_tax_year ON tax_documents(tax_year);
CREATE INDEX idx_tax_planning_user_id ON tax_planning(user_id);
CREATE INDEX idx_financial_insights_user_id ON financial_insights(user_id);
CREATE INDEX idx_financial_insights_created_at ON financial_insights(created_at);
CREATE INDEX idx_budgets_user_id ON budgets(user_id);
CREATE INDEX idx_financial_goals_user_id ON financial_goals(user_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at triggers to relevant tables
CREATE TRIGGER update_user_profiles_updated_at BEFORE UPDATE ON user_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_financial_accounts_updated_at BEFORE UPDATE ON financial_accounts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_expenses_updated_at BEFORE UPDATE ON expenses FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_investments_updated_at BEFORE UPDATE ON investments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_tax_planning_updated_at BEFORE UPDATE ON tax_planning FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_budgets_updated_at BEFORE UPDATE ON budgets FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_financial_goals_updated_at BEFORE UPDATE ON financial_goals FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();