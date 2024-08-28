import type { Metadata } from "next";
import { PropsWithChildren } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Absinthe Test",
  description: "Absinthe Test Project",
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
