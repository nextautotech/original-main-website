import { CalendarDays, MessageSquareMore, Star, ArrowUpRight } from 'lucide-react';
import { SiMessenger, SiInstagram, SiWhatsapp, SiGoogle, SiShopify } from 'react-icons/si';
export function BrandIcon({ brand, className = '' }: { brand: string; className?: string }) {
  const cls = `brand-icon ${className}`;
  if (brand === 'whatsapp') return <SiWhatsapp className={`${cls} brand-whatsapp`} aria-hidden />;
  if (brand === 'instagram') return <SiInstagram className={`${cls} brand-instagram`} aria-hidden />;
  if (brand === 'messenger') return <SiMessenger className={`${cls} brand-messenger`} aria-hidden />;
  if (brand === 'google') return <SiGoogle className={`${cls} brand-google`} aria-hidden />;
  if (brand === 'shopify') return <SiShopify className={`${cls} brand-shopify`} aria-hidden />;
  if (brand === 'calendar') return <CalendarDays className={`${cls} brand-calendar`} aria-hidden />;
  if (brand === 'rcs') return <MessageSquareMore className={`${cls} brand-rcs`} aria-hidden />;
  if (brand === 'tally') return <ArrowUpRight className={`${cls} brand-tally`} aria-hidden />;
  return <Star className={cls} aria-hidden />;
}
