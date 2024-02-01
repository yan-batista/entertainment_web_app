// AuthProvider.tsx
import React, { createContext, useContext, useState } from "react";
import { checkAuth } from "../services/userRequests";

// Define the type for authentication context
type AuthContextType = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  checkIfUserIsAuth: (options: checkAuthParams) => Promise<void>;
};

interface checkAuthParams {
  onSuccess?: () => void;
  onError?: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const checkIfUserIsAuth = async (options: checkAuthParams) => {
    const { onSuccess, onError } = options;

    try {
      await checkAuth();
      login();
      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      logout();
      if (onError) {
        onError();
      }
    }
  };

  const authContextValue: AuthContextType = {
    isAuthenticated,
    login,
    logout,
    checkIfUserIsAuth,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};
