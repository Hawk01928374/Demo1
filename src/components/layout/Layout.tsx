
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileNav from './MobileNav';
import { useTheme } from '@/hooks/useTheme';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[72px] pb-[70px] md:pb-0">
        {children}
      </main>
      <div className="fixed bottom-24 right-4 md:bottom-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={toggleTheme}
        >
          {theme === 'light' ? (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          )}
        </Button>
      </div>
      <Footer />
      <MobileNav />
    </div>
  );
};

export default Layout;
