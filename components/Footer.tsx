import Link from "next/link";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { SITE } from "@/lib/site";
import { Container } from "./ui/Container";

const footerLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/promociones", label: "Promociones" },
  { href: "/casos", label: "Casos" },
  { href: "/contacto", label: "Contacto" },
  { href: "/cotizar", label: "Cotizar" },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-steel-500/20 bg-gray-100 dark:bg-carbon-900">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg text-steel-200 mb-2">{SITE.name}</h3>
            <p className="text-sm text-steel-500">{SITE.slogan}</p>
          </div>

          <div>
            <h4 className="font-semibold text-steel-300 mb-3">Enlaces</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-steel-500 hover:text-amber-cta transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-steel-300 mb-3">Contacto</h4>
            <ul className="space-y-2 text-sm text-steel-500">
              <li className="flex items-start gap-2">
                <FiMapPin className="flex-shrink-0 mt-0.5" />
                {SITE.address}
              </li>
              <li className="flex items-center gap-2">
                <FiPhone />
                <a href={`tel:${SITE.phone}`} className="hover:text-amber-cta">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiMail />
                <a href={`mailto:${SITE.email}`} className="hover:text-amber-cta">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-steel-300 mb-3">Horario</h4>
            <ul className="space-y-1 text-sm text-steel-500">
              <li className="flex items-center gap-2">
                <FiClock />
                {SITE.schedule.weekdays}
              </li>
              <li className="flex items-center gap-2 pl-6">
                {SITE.schedule.saturday}
              </li>
              <li className="flex items-center gap-2 pl-6">
                {SITE.schedule.sunday}
              </li>
            </ul>
          </div>
        </div>

        <div className="py-4 border-t border-steel-500/20 text-center text-sm text-steel-500">
          © {new Date().getFullYear()} {SITE.name}. Sitio demo ficticio.
        </div>
      </Container>
    </footer>
  );
}
