import { ReactNode, useEffect } from "react";
import { useAuth } from "../../contexts/userAuthContext";

interface CheckAuthenticationProps {
  children: ReactNode;
  onError?: () => void;
  onSuccess?: () => void;
}

const CheckAuthentication: React.FC<CheckAuthenticationProps> = ({
  children,
  onError,
  onSuccess,
}: CheckAuthenticationProps) => {
  const { isAuthenticated, checkIfUserIsAuth } = useAuth();

  useEffect(() => {
    checkIfUserIsAuth({ onSuccess: onSuccess, onError: onError });
  }, [isAuthenticated]);

  return children;
};

export default CheckAuthentication;
