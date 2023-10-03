import  { createContext, useState, ReactNode, FC } from 'react';

interface User {
  id: string;
  token: string;
}

interface AuthContextValue {
  user: User | null;
  login: (token: string, id: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const MyAuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  function login(token: string, id: string) {
    setUser({ id, token }); // Set the user data
  }

  function logout() {
    setUser(null); // Clear user data
  }

  const authContextValue: AuthContextValue = {
    user,
    login,
    logout,
  };

  return (
      <AuthContext.Provider value={authContextValue}>
        {children}
      </AuthContext.Provider>
  );
};
