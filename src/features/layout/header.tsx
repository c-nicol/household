import { Button } from '@/components/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/tooltip';
import { IconBrandGithub } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';
import { useEffect, useRef } from 'react';

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
          className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-x-6 px-4"
          aria-label="Global"
        >
          <HouseholdLogo />

          <div className="flex items-center gap-x-3">
            <TooltipProvider>
              <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                  <Button asChild variant="outline" className="rounded-3xl p-2">
                    <a href="https://github.com/c-nicol" target="_blank">
                      <IconBrandGithub className="h-full" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View repository</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Button variant="outline">Login</Button>
            <Button>Sign Up</Button>
          </div>
        </nav>
      </header>
    </>
  );
}

function HouseholdLogo() {
  return (
    <Link to="/" className="flex items-center gap-x-2">
      <span className="sr-only">Household</span>
      <img className="h-8 w-auto" src="./household-logo.png" alt="" />
      <span className="hidden font-bold sm:inline-block">household</span>
    </Link>
  );
}
