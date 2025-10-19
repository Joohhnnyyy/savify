-- Enable Row Level Security on all tables
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_login_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE financial_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE expenses ENABLE ROW LEVEL SECURITY;
ALTER TABLE investments ENABLE ROW LEVEL SECURITY;
ALTER TABLE investment_advice ENABLE ROW LEVEL SECURITY;
ALTER TABLE tax_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE tax_planning ENABLE ROW LEVEL SECURITY;
ALTER TABLE financial_insights ENABLE ROW LEVEL SECURITY;
ALTER TABLE budgets ENABLE ROW LEVEL SECURITY;
ALTER TABLE financial_goals ENABLE ROW LEVEL SECURITY;

-- User profiles policies
CREATE POLICY "Users can view own profile" ON user_profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON user_profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON user_profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

-- User login sessions policies
CREATE POLICY "Users can view own login sessions" ON user_login_sessions
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own login sessions" ON user_login_sessions
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own login sessions" ON user_login_sessions
    FOR UPDATE USING (auth.uid() = user_id);

-- Financial accounts policies
CREATE POLICY "Users can view own financial accounts" ON financial_accounts
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own financial accounts" ON financial_accounts
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own financial accounts" ON financial_accounts
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own financial accounts" ON financial_accounts
    FOR DELETE USING (auth.uid() = user_id);

-- Expenses policies
CREATE POLICY "Users can view own expenses" ON expenses
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own expenses" ON expenses
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own expenses" ON expenses
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own expenses" ON expenses
    FOR DELETE USING (auth.uid() = user_id);

-- Investments policies
CREATE POLICY "Users can view own investments" ON investments
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own investments" ON investments
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own investments" ON investments
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own investments" ON investments
    FOR DELETE USING (auth.uid() = user_id);

-- Investment advice policies
CREATE POLICY "Users can view own investment advice" ON investment_advice
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own investment advice" ON investment_advice
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own investment advice" ON investment_advice
    FOR UPDATE USING (auth.uid() = user_id);

-- Tax documents policies
CREATE POLICY "Users can view own tax documents" ON tax_documents
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own tax documents" ON tax_documents
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own tax documents" ON tax_documents
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own tax documents" ON tax_documents
    FOR DELETE USING (auth.uid() = user_id);

-- Tax planning policies
CREATE POLICY "Users can view own tax planning" ON tax_planning
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own tax planning" ON tax_planning
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own tax planning" ON tax_planning
    FOR UPDATE USING (auth.uid() = user_id);

-- Financial insights policies
CREATE POLICY "Users can view own financial insights" ON financial_insights
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own financial insights" ON financial_insights
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own financial insights" ON financial_insights
    FOR UPDATE USING (auth.uid() = user_id);

-- Budgets policies
CREATE POLICY "Users can view own budgets" ON budgets
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own budgets" ON budgets
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own budgets" ON budgets
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own budgets" ON budgets
    FOR DELETE USING (auth.uid() = user_id);

-- Financial goals policies
CREATE POLICY "Users can view own financial goals" ON financial_goals
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own financial goals" ON financial_goals
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own financial goals" ON financial_goals
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own financial goals" ON financial_goals
    FOR DELETE USING (auth.uid() = user_id);

-- Admin policies (for users with admin role)
CREATE POLICY "Admins can view all user profiles" ON user_profiles
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM user_profiles 
            WHERE id = auth.uid() AND user_role = 'admin'
        )
    );

CREATE POLICY "Admins can view all login sessions" ON user_login_sessions
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM user_profiles 
            WHERE id = auth.uid() AND user_role = 'admin'
        )
    );

-- Create function to handle user profile creation on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.user_profiles (id, email, full_name)
    VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically create user profile on signup
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();