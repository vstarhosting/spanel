export const metadata = {
    title: 'Spanel Pricing - Affordable Hosting Control Panel',
    description: 'Check out our pricing plans for Spanel, the best cPanel alternative.',
  };
  
  export default function PricingLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <>{children}</>; // No Header & Footer, just children
  }
  