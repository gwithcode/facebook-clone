"use client";

import { ReactNode } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "../styles/theme";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline /> {/* sets body background, typography resets */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
