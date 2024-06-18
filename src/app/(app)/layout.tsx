import './global.css';
import NextTopLoader from 'nextjs-toploader';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body>
        <NextTopLoader color="#f11946" showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
