
"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useMelaData } from "@/hooks/use-mela-data";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#categories", label: "Categories" },
  { href: "#stalls", label: "Stalls" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
    const { data } = useMelaData();
    const logoSrc = data?.logoUrl || "/logo.png";
  return (
    <header className="w-full bg-card/80 backdrop-blur-sm shadow-lg rounded-xl">
      <div className="container flex h-28 items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <Image src={logoSrc} alt="Nehru Group of Institutions Logo" width={80} height={80} className="h-20 w-20" />
          <div className="flex flex-col">
              <span className="text-sm font-bold leading-tight" style={{color: '#0033A0'}}>NEHRU GROUP</span>
              <span className="text-sm font-bold leading-tight" style={{color: '#41A5E1'}}>OF INSTITUTIONS</span>
              <hr className="border-t-[1.5px] border-gray-300 my-1"/>
              <div className="text-xs tracking-wider" style={{color: '#555'}}>
                TAMILNADU <span className="text-gray-400 font-bold">•</span> KERALA
              </div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-foreground/80 transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {navLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
