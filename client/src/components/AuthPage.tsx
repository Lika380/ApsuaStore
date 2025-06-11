import React, { useState } from "react";
import { LoginModal } from "./LoginModal";
import { RegisterModal } from "./RegisterModal";

interface AuthPageProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {isLogin ? (
          <>
            <LoginModal
              isOpen={true}
              onClose={onClose}
              onSwitchToRegister={() => setIsLogin(false)}
            />
          </>
        ) : (
          <>
            <RegisterModal
              isOpen={true}
              onClose={onClose}
              onSwitchToLogin={() => setIsLogin(true)}
            />
          </>
        )}
      </div>
    </div>
  );
};
