"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";
import { SITE } from "@/lib/site";
import { Container } from "./ui/Container";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/promociones", label: "Promociones" },
  { href: "/casos", label: "Casos" },
  { href: "/contacto", label: "Contacto" },
  { href: "/cotizar", label: "Cotizar" },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-steel-500/20 bg-white/95 dark:bg-carbon-900/95 backdrop-blur-md">
      <Container>
        <nav className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-bold text-xl text-gray-900 dark:text-steel-200 hover:text-amber-cta transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-cta focus-visible:ring-offset-2 rounded"
          >
            {SITE.name}
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-cta rounded ${
                  pathname === link.href
                    ? "text-amber-cta"
                    : "text-gray-600 dark:text-steel-400 hover:text-amber-cta"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-steel-400 hover:text-amber-cta hover:bg-carbon-700/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-cta"
              aria-label={theme === "dark" ? "Modo claro" : "Modo oscuro"}
            >
              {theme === "dark" ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-steel-400 hover:text-amber-cta"
              aria-label={theme === "dark" ? "Modo claro" : "Modo oscuro"}
            >
              {theme === "dark" ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg text-steel-400 hover:text-amber-cta"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
              {open ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden py-4 border-t border-steel-500/20">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    pathname === link.href
                      ? "text-amber-cta bg-amber-cta/10"
                      : "text-steel-400 hover:text-amber-cta hover:bg-carbon-700/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
