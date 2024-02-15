import { Button } from '@/components/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/sheet';
import { IconMenu2 } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';
import { useEffect, useRef } from 'react';

const navigation = [
  { name: 'About', to: '/about' },
  { name: 'Chores', to: '/chores' },
  { name: 'Contact Us', to: '/contact-us' },
];

export function Header() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: 1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          headerRef.current?.classList.remove('shadow');
        } else {
          headerRef.current?.classList.add('shadow');
        }
      });
    }, options);

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => observer.disconnect();
  }, [wrapperRef]);

  return (
    <>
      <div ref={wrapperRef} />
      <header
        ref={headerRef}
        className="sticky top-0 z-50 bg-white bg-opacity-[98%] transition-shadow duration-500"
      >
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-x-6 px-4"
          aria-label="Global"
        >
          <Logo />
          <DesktopNavigationMenu />
          <AuthButtons />
          <MobileNavigationMenu />
        </nav>
      </header>
    </>
  );
}

function Logo() {
  return (
    <Link to="/">
      <span className="sr-only">Jonsa</span>
      <img className="h-8 w-auto" src="./household-logo.png" alt="" />
    </Link>
  );
}

function AuthButtons() {
  return (
    <div className="flex gap-x-2">
      <Button asChild variant="outline">
        <Link to="/chores">Login</Link>
      </Button>

      <Button asChild>
        <Link to="/chores">Sign Up</Link>
      </Button>
    </div>
  );
}

function DesktopNavigationMenu() {
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.to}
          className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-500"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

function MobileNavigationMenu() {
  return (
    <div className="flex lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <IconMenu2 className="h-6 w-6" aria-hidden="true" />
          </button>
        </SheetTrigger>

        <SheetContent className="bg-white">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to ?? ''}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
