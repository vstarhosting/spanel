export const metadata = {
    title: 'Privacy Policy - Spanel',
    description: 'Read our privacy policy to understand how we protect your data and privacy at Spanel.',
  };
  
  export default function PrivacyLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <>{children}</>; // No Header & Footer, just children
  }
  