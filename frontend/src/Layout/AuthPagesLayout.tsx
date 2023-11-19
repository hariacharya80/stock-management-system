import React from "react";

interface AuthPagesLayoutProps {
  children: React.ReactNode;
}

function AuthPagesLayout({ children }: AuthPagesLayoutProps) {
  return <>{children}</>;
}

export default AuthPagesLayout;
