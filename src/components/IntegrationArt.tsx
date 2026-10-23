import { SiFacebook, SiGoogleforms, SiTypeform, SiZoho, SiHubspot } from 'react-icons/si';
import { BookUser, FileText, GitBranch, PhoneCall, ScanText, Send, Database, UserRound, Check, PanelsTopLeft, Building2, ListFilter } from 'lucide-react';
import type { leadIntegrations } from '@/lib/catalogue';

type Entry = (typeof leadIntegrations)[number];
const icons = {facebook:SiFacebook,webhook:GitBranch,googleforms:SiGoogleforms,jotform:PanelsTopLeft,typeform:SiTypeform,zoho:SiZoho,hubspot:SiHubspot,indiamart:Building2,contactform:FileText,calls:PhoneCall,contacts:BookUser,ocr:ScanText};
const labels:Record<Entry['visual'],[string,string,string]> = {
 facebook:['New lead','Property inquiry','Lead received'], webhook:['POST /leads','200 OK','Event delivered'], googleforms:['New response','Full name','Submitted'], jotform:['Contact form','Your details','Form received'], typeform:['Question 01','Tell us about you','Answer saved'], zoho:['Lead pipeline','New prospect','Qualified'], hubspot:['Contacts','New contact','In pipeline'], indiamart:['Buyer enquiry','Product request','New lead'], contactform:['Website enquiry','Email address','Message sent'], calls:['Recent calls','Inbound enquiry','Add contact'], contacts:['Address book','New contact','Saved'], ocr:['Scan document','Extract fields','Text detected']
};
export function IntegrationArt({item,compact=false}:{item:Entry;compact?:boolean}){
 const Icon=icons[item.visual]; const [top,mid,bottom]=labels[item.visual];
 return <div className={`integration-art art-${item.visual}${compact?' art-compact':''}`} aria-hidden="true">
   <span className="art-orbit art-orbit-one"/><span className="art-orbit art-orbit-two"/>
   <div className="art-icon"><Icon/></div>
   <div className="art-panel"><span className="art-panel-top"><ListFilter size={13}/>{top}</span><strong>{mid}</strong><span className="art-line"/><span className="art-line short"/><span className="art-panel-bottom"><Check size={12}/>{bottom}</span></div>
   <span className="art-float"><UserRound size={14}/><Send size={12}/></span>
 </div>
}
export function IntegrationHub(){return <div className="integration-hub" aria-label="Business tools connect through Next Autotech">
 <div className="hub-ring ring-one"/><div className="hub-ring ring-two"/>
 <span className="hub-node node-a"><SiFacebook/></span><span className="hub-node node-b"><SiGoogleforms/></span><span className="hub-node node-c"><SiZoho/></span><span className="hub-node node-d"><SiHubspot/></span><span className="hub-node node-e"><PhoneCall/></span><span className="hub-node node-f"><ScanText/></span>
 <div className="hub-center"><Database size={30}/><strong>NEXT<br/>AUTOTECH</strong><small>AUTOMATION HUB</small></div>
 </div>}