export const metadata = {
    title: "Terms & Conditions - Spanel.in",
    description: "Read the terms and conditions of Spanel.in. Spanel.in is an independent platform providing information about Spanel.io and web hosting services.",
  };
  

  export default function TermsLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <>{children}</>; // No Header & Footer, just children
  }
  
  