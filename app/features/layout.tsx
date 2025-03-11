export const metadata = {
    title: 'Spanel Features - Powerful Web Hosting Control Panel',
    description: 'Explore the powerful features of Spanel, the modern alternative to cPanel.',
  };
  
  export default function FeaturesLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <>{children}</>; // No Header & Footer, just children
  }
  