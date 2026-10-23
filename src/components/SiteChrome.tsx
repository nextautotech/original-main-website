import { Link } from '@tanstack/react-router';
import { ArrowUpRight, ChevronDown, Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { industries, industrySlugs, services } from '@/lib/catalogue';
import logo from '@/assets/next-autotech-logo.jpeg.asset.json';

export function Header() {
 const [open,setOpen] = useState(false);
 const close=()=>setOpen(false);
 return <header className="site-header"><div className="shell header-inner">
 <Link to="/" className="logo-link" aria-label="Next Autotech home" onClick={close}><img src={logo.url} alt="Next Autotech" width="46" height="46"/><span><strong>NEXT</strong><small>AUTOTECH</small></span></Link>
 <nav className={open ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
 <Link to="/" activeOptions={{exact:true}} onClick={close}>Home</Link>
 <div className="nav-group"><Link to="/services" onClick={close}>Products <ChevronDown size={13}/></Link><div className="nav-dropdown">{services.map(s=><Link key={s.slug} to="/services/$slug" params={{slug:s.slug}} onClick={close}>{s.name}</Link>)}</div></div>
 <div className="nav-group"><Link to="/features" onClick={close}>Features <ChevronDown size={13}/></Link><div className="nav-dropdown"><Link to="/features" onClick={close}>All features</Link><Link to="/services/$slug" params={{slug:'whatsapp-business-api'}} onClick={close}>Chatbots &amp; workflows</Link><Link to="/services/$slug" params={{slug:'calendar-bookings'}} onClick={close}>Appointment scheduling</Link></div></div>
 <div className="nav-group"><Link to="/industries" onClick={close}>Industries <ChevronDown size={13}/></Link><div className="nav-dropdown">{industries.map((industry,i)=><Link key={industry.name} to="/industries/$slug" params={{slug:industrySlugs[i] ?? 'real-estate'}} onClick={close}>{industry.name}</Link>)}</div></div>
 <Link to="/integrations" onClick={close}>Integrations</Link>
 <div className="nav-group"><Link to="/faq" onClick={close}>Resources <ChevronDown size={13}/></Link><div className="nav-dropdown"><Link to="/faq" onClick={close}>FAQs</Link><Link to="/about" onClick={close}>About Us</Link><Link to="/privacy-policy" onClick={close}>Privacy Policy</Link><Link to="/terms-and-conditions" onClick={close}>Terms &amp; Conditions</Link></div></div>
 <Link to="/contact" search={{service:undefined}} onClick={close}>Contact Us</Link>
 </nav>
 <div className="header-actions"><Button asChild variant="premium" size="lg"><a href="https://app.nextautotech.com/" target="_blank" rel="noopener noreferrer">Login <ArrowUpRight/></a></Button><Button className="menu-button" variant="ghost" size="icon" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</Button></div>
 </div></header>
}
export function Footer(){return <footer className="site-footer"><div className="shell footer-grid"><div className="footer-intro"><Link to="/" className="logo-link footer-logo"><img src={logo.url} alt="" width="46" height="46"/><span><strong>NEXT</strong><small>AUTOTECH</small></span></Link><p>The Future of Your Business</p><p>Business automation, connected.</p></div><div><h3>Company</h3><Link to="/about">About Us</Link><Link to="/contact" search={{service:undefined}}>Contact Us</Link><h3>Resources</h3><Link to="/faq">FAQs</Link><Link to="/integrations">Integrations</Link></div><div><h3>Products &amp; Services</h3>{services.map(s=><Link key={s.slug} to="/services/$slug" params={{slug:s.slug}}>{s.name}</Link>)}</div><div><h3>Industries</h3>{industries.map((item,i)=><Link key={item.name} to="/industries/$slug" params={{slug:industrySlugs[i] ?? 'real-estate'}}>{item.name}</Link>)}</div><div><h3>Contact</h3><a href="tel:+916378610058"><Phone size={15}/> 63786 10058</a><a href="tel:+918529686622"><Phone size={15}/> 85296 86622</a><a href="mailto:admin@nextautotech.in"><Mail size={15}/> admin@nextautotech.in</a><p className="footer-address"><MapPin size={15}/> First Floor, 412, Sumer Nagar, OMK Omwati’s Kitchen, Mansarovar, Jaipur, Rajasthan – 302020</p></div></div><div className="shell footer-bottom"><span>© 2026 Next Autotech. All rights reserved.</span><div><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms-and-conditions">Terms &amp; Conditions</Link></div></div></footer>}
