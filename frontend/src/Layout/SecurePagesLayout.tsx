import React from "react";

interface SecurePagesLayoutProps {
  children: React.ReactNode;
}

function SecurePagesLayout({ children }: SecurePagesLayoutProps) {
  return <>{children}</>;
}

export default SecurePagesLayout;
