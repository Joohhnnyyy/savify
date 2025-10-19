import { 
  collection, 
  doc, 
  addDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  Timestamp 
} from 'firebase/firestore';
import { db } from './firebase';

// Types
export interface UserProfile {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  created_at: Date;
  updated_at: Date;
}

export interface Expense {
  id: string;
  user_id: string;
  amount: number;
  category: string;
  description: string;
  transaction_date: string;
  currency: string;
  created_at: Date;
  updated_at: Date;
}

export interface Investment {
  id: string;
  user_id: string;
  symbol: string;
  shares: number;
  purchase_price: number;
  current_price?: number;
  purchase_date: string;
  created_at: Date;
  updated_at: Date;
}

export interface FinancialGoal {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  target_amount: number;
  current_amount: number;
  target_date: string;
  category: string;
  created_at: Date;
  updated_at: Date;
}

export interface Budget {
  id: string;
  user_id: string;
  category: string;
  amount: number;
  period: 'monthly' | 'yearly';
  created_at: Date;
  updated_at: Date;
}

export interface FinancialAccount {
  id: string;
  user_id: string;
  account_name: string;
  account_type: string;
  balance: number;
  currency: string;
  created_at: Date;
  updated_at: Date;
}

// User Profile Functions
export const getUserProfile = async (userId: string): Promise<UserProfile | null> => {
  try {
    const q = query(collection(db, 'user_profiles'), where('user_id', '==', userId));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      return null;
    }
    
    const doc = querySnapshot.docs[0];
    return {
      id: doc.id,
      ...doc.data(),
      created_at: doc.data().created_at?.toDate() || new Date(),
      updated_at: doc.data().updated_at?.toDate() || new Date()
    } as UserProfile;
  } catch (error) {
    console.error('Error getting user profile:', error);
    throw error;
  }
};

export const createUserProfile = async (profileData: Omit<UserProfile, 'id' | 'created_at' | 'updated_at'>): Promise<UserProfile> => {
  try {
    const now = Timestamp.now();
    const docRef = await addDoc(collection(db, 'user_profiles'), {
      ...profileData,
      created_at: now,
      updated_at: now
    });
    
    return {
      id: docRef.id,
      ...profileData,
      created_at: now.toDate(),
      updated_at: now.toDate()
    };
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }
};

// Expense Functions
export const getExpenses = async (userId: string): Promise<Expense[]> => {
  try {
    console.log('Firebase: Loading expenses for user:', userId);
    const q = query(
      collection(db, 'expenses'), 
      where('user_id', '==', userId),
      orderBy('transaction_date', 'desc')
    );
    const querySnapshot = await getDocs(q);
    
    const expenses = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      created_at: doc.data().created_at?.toDate() || new Date(),
      updated_at: doc.data().updated_at?.toDate() || new Date()
    })) as Expense[];
    
    console.log('Firebase: Loaded expenses:', expenses);
    return expenses;
  } catch (error) {
    console.error('Error getting expenses:', error);
    throw error;
  }
};

export const createExpense = async (expenseData: Omit<Expense, 'id' | 'created_at' | 'updated_at'>): Promise<Expense> => {
  try {
    console.log('Firebase: Creating expense:', expenseData);
    const now = Timestamp.now();
    const docRef = await addDoc(collection(db, 'expenses'), {
      ...expenseData,
      created_at: now,
      updated_at: now
    });
    
    const newExpense = {
      id: docRef.id,
      ...expenseData,
      created_at: now.toDate(),
      updated_at: now.toDate()
    };
    
    console.log('Firebase: Created expense:', newExpense);
    return newExpense;
  } catch (error) {
    console.error('Error creating expense:', error);
    throw error;
  }
};

export const updateExpense = async (id: string, expenseData: Partial<Omit<Expense, 'id' | 'created_at' | 'updated_at'>>): Promise<void> => {
  try {
    const docRef = doc(db, 'expenses', id);
    await updateDoc(docRef, {
      ...expenseData,
      updated_at: Timestamp.now()
    });
  } catch (error) {
    console.error('Error updating expense:', error);
    throw error;
  }
};

export const deleteExpense = async (id: string): Promise<void> => {
  try {
    const docRef = doc(db, 'expenses', id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Error deleting expense:', error);
    throw error;
  }
};

// Investment Functions
export const getInvestments = async (userId: string): Promise<Investment[]> => {
  try {
    const q = query(
      collection(db, 'investments'), 
      where('user_id', '==', userId),
      orderBy('purchase_date', 'desc')
    );
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      created_at: doc.data().created_at?.toDate() || new Date(),
      updated_at: doc.data().updated_at?.toDate() || new Date()
    })) as Investment[];
  } catch (error) {
    console.error('Error getting investments:', error);
    throw error;
  }
};

export const createInvestment = async (investmentData: Omit<Investment, 'id' | 'created_at' | 'updated_at'>): Promise<Investment> => {
  try {
    const now = Timestamp.now();
    const docRef = await addDoc(collection(db, 'investments'), {
      ...investmentData,
      created_at: now,
      updated_at: now
    });
    
    return {
      id: docRef.id,
      ...investmentData,
      created_at: now.toDate(),
      updated_at: now.toDate()
    };
  } catch (error) {
    console.error('Error creating investment:', error);
    throw error;
  }
};

// Financial Goals Functions
export const getFinancialGoals = async (userId: string): Promise<FinancialGoal[]> => {
  try {
    const q = query(
      collection(db, 'financial_goals'), 
      where('user_id', '==', userId),
      orderBy('target_date', 'asc')
    );
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      created_at: doc.data().created_at?.toDate() || new Date(),
      updated_at: doc.data().updated_at?.toDate() || new Date()
    })) as FinancialGoal[];
  } catch (error) {
    console.error('Error getting financial goals:', error);
    throw error;
  }
};

export const createFinancialGoal = async (goalData: Omit<FinancialGoal, 'id' | 'created_at' | 'updated_at'>): Promise<FinancialGoal> => {
  try {
    const now = Timestamp.now();
    const docRef = await addDoc(collection(db, 'financial_goals'), {
      ...goalData,
      created_at: now,
      updated_at: now
    });
    
    return {
      id: docRef.id,
      ...goalData,
      created_at: now.toDate(),
      updated_at: now.toDate()
    };
  } catch (error) {
    console.error('Error creating financial goal:', error);
    throw error;
  }
};

// Budget Functions
export const getBudgets = async (userId: string): Promise<Budget[]> => {
  try {
    const q = query(
      collection(db, 'budgets'), 
      where('user_id', '==', userId)
    );
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      created_at: doc.data().created_at?.toDate() || new Date(),
      updated_at: doc.data().updated_at?.toDate() || new Date()
    })) as Budget[];
  } catch (error) {
    console.error('Error getting budgets:', error);
    throw error;
  }
};

export const createBudget = async (budgetData: Omit<Budget, 'id' | 'created_at' | 'updated_at'>): Promise<Budget> => {
  try {
    const now = Timestamp.now();
    const docRef = await addDoc(collection(db, 'budgets'), {
      ...budgetData,
      created_at: now,
      updated_at: now
    });
    
    return {
      id: docRef.id,
      ...budgetData,
      created_at: now.toDate(),
      updated_at: now.toDate()
    };
  } catch (error) {
    console.error('Error creating budget:', error);
    throw error;
  }
};

// Financial Account Functions
export const getFinancialAccounts = async (userId: string): Promise<FinancialAccount[]> => {
  try {
    const q = query(
      collection(db, 'financial_accounts'), 
      where('user_id', '==', userId)
    );
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      created_at: doc.data().created_at?.toDate() || new Date(),
      updated_at: doc.data().updated_at?.toDate() || new Date()
    })) as FinancialAccount[];
  } catch (error) {
    console.error('Error getting financial accounts:', error);
    throw error;
  }
};

export const createFinancialAccount = async (accountData: Omit<FinancialAccount, 'id' | 'created_at' | 'updated_at'>): Promise<FinancialAccount> => {
  try {
    const now = Timestamp.now();
    const docRef = await addDoc(collection(db, 'financial_accounts'), {
      ...accountData,
      created_at: now,
      updated_at: now
    });
    
    return {
      id: docRef.id,
      ...accountData,
      created_at: now.toDate(),
      updated_at: now.toDate()
    };
  } catch (error) {
    console.error('Error creating financial account:', error);
    throw error;
  }
};