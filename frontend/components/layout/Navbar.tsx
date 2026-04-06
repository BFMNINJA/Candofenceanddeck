'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import { Fence, Layers, DoorOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const serviceLinks = [
  {
    title: 'Fences',
    href: '/fences',
    icon: Fence,
    description: 'Cedar, pressure-treated & custom privacy fences',
  },
  {
    title: 'Decks',
    href: '/decks',
    icon: Layers,
    description: 'PT, composite Trex & cedar deck builds',
  },
  {
    title: 'Gates',
    href: '/gates',
    icon: DoorOpen,
    description: 'Walk gates, double drive & iron insert designs',
  },
];

const navLinks = [
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false);
  const onScroll = React.useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);
  React.useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);
  React.useEffect(() => { onScroll(); }, [onScroll]);
  return scrolled;
}

type MobileMenuProps = React.ComponentProps<'div'> & { open: boolean };

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
  if (!open || typeof window === 'undefined') return null;
  return createPortal(
    <div
      id="mobile-menu"
      className="fixed top-[104px] right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-t border-gray-200 md:hidden"
      style={{ background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(20px)' }}
    >
      <div
        data-slot={open ? 'open' : 'closed'}
        className={cn(
          'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out',
          'size-full p-5',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);
  const pathname = usePathname();

  const isServiceActive = serviceLinks.some((l) => pathname === l.href);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 left-0 right-0 z-50 w-full border-b border-transparent transition-all duration-300 bg-white',
        scrolled && 'glass-nav shadow-sm',
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center shrink-0">
          <div className="rounded-md px-2.5 py-1">
            <Image
              src="/logo.png"
              alt="Can Do Fence & Deck"
              width={110}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {/* Home */}
          <Link
            href="/"
            className={cn(
              'text-sm px-4 py-1.5 rounded-full font-medium transition-colors duration-200',
              pathname === '/' ? 'bg-[#0055a5]/10 text-[#0055a5]' : 'text-gray-600 hover:text-[#0055a5] hover:bg-gray-100',
            )}
          >
            Home
          </Link>

          {/* Services — NavigationMenu dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(isServiceActive && 'bg-[#0055a5]/10 text-[#0055a5]')}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[360px] gap-1 p-2">
                    {serviceLinks.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              'flex flex-row gap-3 rounded-lg p-3 transition-colors duration-150',
                              'hover:bg-gray-50',
                              pathname === item.href ? 'bg-[#0055a5]/05' : '',
                            )}
                          >
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0055a5]/10 shrink-0">
                              <item.icon size={20} className="text-[#0274be]" />
                            </div>
                            <div className="flex flex-col justify-center">
                              <span className="text-sm font-semibold text-[#0f1117]">{item.title}</span>
                              <span className="text-xs text-gray-500 mt-0.5">{item.description}</span>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-100 px-3 py-2.5">
                    <p className="text-gray-400 text-xs">
                      Need help choosing?{' '}
                      <Link href="/contact" className="text-[#0274be] font-medium hover:text-[#0055a5] transition-colors">
                        Talk to us →
                      </Link>
                    </p>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Rest of links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm px-4 py-1.5 rounded-full font-medium transition-colors duration-200',
                pathname === link.href ? 'bg-[#0055a5]/10 text-[#0055a5]' : 'text-gray-600 hover:text-[#0055a5] hover:bg-gray-100',
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right spacer for balance */}
        <div className="hidden md:block w-[110px]" />

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      <MobileMenu open={open} className="flex flex-col gap-2">
        <nav className="flex flex-col gap-1 flex-1">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={cn(
              'px-4 py-3 rounded-full text-sm font-medium transition-colors duration-200',
              pathname === '/' ? 'bg-[#0055a5]/10 text-[#0055a5]' : 'text-gray-600 hover:text-[#0055a5] hover:bg-gray-50',
            )}
          >
            Home
          </Link>

          <p className="px-4 pt-3 pb-1 text-xs text-gray-400 uppercase tracking-widest font-semibold">Services</p>
          {serviceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200',
                pathname === link.href ? 'bg-[#0055a5]/10 text-[#0055a5]' : 'text-gray-600 hover:text-[#0055a5] hover:bg-gray-50',
              )}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0055a5]/10 shrink-0">
                <link.icon size={17} className="text-[#0274be]" />
              </div>
              <div>
                <div className="text-gray-800 text-sm font-medium">{link.title}</div>
                <div className="text-gray-400 text-xs">{link.description}</div>
              </div>
            </Link>
          ))}

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                'px-4 py-3 rounded-full text-sm font-medium transition-colors duration-200',
                pathname === link.href ? 'bg-[#0055a5]/10 text-[#0055a5]' : 'text-gray-600 hover:text-[#0055a5] hover:bg-gray-50',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </MobileMenu>
    </header>
  );
}
