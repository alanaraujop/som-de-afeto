import '@/styles/globals.css';
import '@/styles/styles.css';
import { Montserrat, Playfair_Display } from 'next/font/google';
import Script from 'next/script';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700']
});

export const metadata = {
  title: 'Som de Afeto - Músicas Personalizadas para Momentos Especiais',
  description: 'Criamos músicas personalizadas para casamentos, chás de revelação, aniversários e surpresas para pessoas especiais.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${playfair.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="font-sans text-gray-800 leading-relaxed">
        {children}
        <Script src="/scripts/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
