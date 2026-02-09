"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider 
      attribute="class"      /* Critical: This must be 'class' */
      defaultTheme="light" 
      enableSystem={true}
    >
      {children}
    </NextThemesProvider>
  );
}