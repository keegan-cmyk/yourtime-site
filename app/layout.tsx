import "./globals.css";

export const metadata = {
  title: "Your Time — Save Your Time",
  description: "AI automation platform that replaces hours of computer work with intelligent assistants."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-dark text-white">
        {children}
      </body>
    </html>
  );
}
