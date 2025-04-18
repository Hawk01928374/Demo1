
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileNav from './MobileNav';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[72px] pb-[70px] md:pb-0">
        {children}
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
};

export default Layout;
