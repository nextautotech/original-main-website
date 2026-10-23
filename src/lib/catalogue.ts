import whatsapp from '@/assets/whatsapp.jpg';
import instagram from '@/assets/instagram.jpg';
import messenger from '@/assets/messenger.jpg';
import calendar from '@/assets/calendar.jpg';
import rcs from '@/assets/rcs.jpg';
import commerce from '@/assets/commerce.jpg';
import reviews from '@/assets/reviews.jpg';
import tally from '@/assets/tally.jpg';
import shopify from '@/assets/shopify.jpg';
import realEstate from '@/assets/real-estate.jpg';
import education from '@/assets/education.jpg';
import manufacturing from '@/assets/manufacturing.jpg';
import d2c from '@/assets/d2c.jpg';
import healthcare from '@/assets/healthcare.jpg';
import saas from '@/assets/saas.jpg';

export const industries = [
  { name: 'Real Estate', description: 'Capture, qualify and follow up with every property enquiry.', image: realEstate },
  { name: 'Education', description: 'Guide enquiries, schedule counselling and send timely updates.', image: education },
  { name: 'Manufacturing', description: 'Share vouchers, ledgers and order information automatically.', image: manufacturing },
  { name: 'D2C / Shopify', description: 'Recover carts, confirm orders and keep buyers informed.', image: d2c },
  { name: 'Healthcare', description: 'Book appointments, reduce no-shows and collect reviews.', image: healthcare },
  { name: 'Software / SaaS', description: 'Qualify leads, book demos and support customers around the clock.', image: saas },
];
export const services = [
  { slug: 'whatsapp-business-api', name: 'WhatsApp Business API', tagline: 'The foundation every other automation connects to', description: 'Make WhatsApp the dependable hub for sales, marketing, operations, accounts and support. Keep conversations and customer journeys moving together in one connected system.', image: whatsapp, brand: 'whatsapp', industries: industries.map(i => i.name), features: [
    ['Bulk Messaging','Send promotional and informational messages to your entire customer base through the official Meta API.'],['CRM & Sales Automation','Keep every enquiry organized, visible and moving forward without missed follow-ups.'],['Chatbots & AI Agents','Handle customer questions automatically, 24/7, without adding support staff.'],['Auto Follow-Up Workflows','Let the system follow up with leads and customers automatically.'],['WhatsApp Forms','Collect customer details, orders or feedback directly inside WhatsApp.'],['Automation Builder','Build no-code journeys tailored to your exact business process.'],['Web Chat Widget','Bring WhatsApp chat onto your website and capture leads where they already are.'],['Lead Source Integration','Connect Meta Ads, Google and your website into one WhatsApp pipeline.'],['API & Webhook Connectivity','Connect WhatsApp with your current tools for a truly integrated setup.'] ] },
  { slug: 'instagram-automation', name: 'Instagram Automation', tagline: 'Turn every DM and comment into a lead, 24/7', description: 'Respond to your Instagram audience when interest is highest. Automate replies and move conversations from comments into direct messages.', image: instagram, brand: 'instagram', industries: ['D2C / Shopify','Real Estate','Education','Healthcare'], features: [['DM Auto-Replies','Respond instantly to Instagram DMs and capture leads even when your team is offline.'],['Comment-to-DM Automation','Reply to post or reel comments and move interested customers into a direct conversation.']] },
  { slug: 'facebook-messenger-automation', name: 'Facebook Messenger Automation', tagline: 'Never miss a lead from your Facebook page again', description: 'Meet customers where they reach you on Facebook. Capture enquiries from Messenger and turn public engagement into private conversations.', image: messenger, brand: 'messenger', industries: ['D2C / Shopify','Real Estate','Education','Healthcare'], features: [['DM Auto-Replies','Capture and qualify Messenger leads instantly, even outside business hours.'],['Comment-to-DM Automation','Turn post and ad comments into private sales conversations automatically.']] },
  { slug: 'calendar-bookings', name: 'Calendar Bookings', tagline: 'Let customers book themselves in — no back-and-forth calls', description: 'Give customers a simple way to find a time that works, while confirmations and reminders take care of the follow-through.', image: calendar, brand: 'calendar', industries: ['Healthcare','Real Estate','Education','Software / SaaS'], features: [['Self-Service Appointment Booking','Customers choose an available slot directly through your calendar link.'],['Instant Booking Confirmation','Send confirmation the moment a slot is booked, with no manual follow-up.'],['Rescheduling & Reminders','Reduce no-shows with automatic reminders and easy self-service rescheduling.']] },
  { slug: 'rcs-messaging', name: 'RCS Messaging', tagline: 'Richer than SMS, more engaging than plain text', description: 'Bring your brand into the message with visual, interactive conversations built for modern Android messaging.', image: rcs, brand: 'rcs', industries: ['Real Estate','D2C / Shopify','Education','Manufacturing'], features: [['Bulk RCS Messaging','Send rich, branded and verified Android messages to your customer base at once.'],['Image & CTA-Rich Messages','Put images and clickable calls to action directly inside each message.']] },
  { slug: 'whatsapp-commerce', name: 'WhatsApp Commerce', tagline: 'A complete storefront inside WhatsApp — browse, buy, pay', description: 'Turn a conversation into a seamless shopping journey, from product discovery to payment and order updates.', image: commerce, brand: 'whatsapp', industries: ['D2C / Shopify','Manufacturing','Real Estate'], features: [['WhatsApp Catalogue Listing','Showcase your product range directly inside the chat.'],['End-to-End Sale on WhatsApp','Let customers discover, select and buy in one conversation.'],['Order Management','Track and update orders directly through WhatsApp.'],['Payment Collection','Collect payments in chat and reduce drop-off from app switching.']] },
  { slug: 'ai-google-reviews', name: 'AI Google Reviews', tagline: 'Make leaving a review a 2-click action, not a chore', description: 'Make it easier for happy customers to share their experience and help your business earn more meaningful feedback.', image: reviews, brand: 'google', industries: ['Real Estate','Healthcare','Education','D2C / Shopify'], features: [['AI-Suggested Reviews','Give customers ready-to-use review suggestions instantly.'],['One-Tap Select & Publish','Customers pick a suggestion and move straight to your Google listing.'],['Higher Completion Rate','Remove the writing effort that causes customers to abandon reviews.']] },
  { slug: 'tally-accounting-automation', name: 'Tally Accounting Automation', tagline: 'Faster collections, zero manual voucher sharing', description: 'Bring accounting updates into the conversations your customers already use, reducing manual chasing and repeated requests.', image: tally, brand: 'tally', industries: ['Manufacturing','D2C / Shopify','Real Estate','Education'], features: [['Purchase/Sale Voucher Delivery','Send vouchers on WhatsApp as soon as they are recorded in Tally.'],['Payment Reminders','Automatically remind customers about pending payments.'],['Ledger Statement on Demand','Give customers instant access to their ledger statement on WhatsApp.'],['Payment Receipts','Deliver receipts immediately after payment for cleaner shared records.']] },
  { slug: 'shopify-store-automation', name: 'Shopify Store Automation', tagline: 'Keep customers informed and bring them back to buy again', description: 'Connect your Shopify store with WhatsApp to give buyers timely order updates and re-engage them with relevant campaigns.', image: shopify, brand: 'shopify', industries: ['D2C / Shopify'], features: [['Order Notifications','Confirm orders instantly on WhatsApp and build buyer confidence.'],['Shipping & Delivery Updates','Send automatic updates at every stage and reduce order-status questions.'],['COD Confirmations','Confirm cash-on-delivery orders to reduce fake orders and RTO losses.'],['Abandoned Checkout Reminders','Bring customers back to carts they left behind.'],['New Launch Campaigns','Notify customers instantly when products or collections launch.'],['Order-History-Based Campaigns','Send more relevant offers based on what customers actually bought.']] },
] as const;

export const industrySlugs = ['real-estate','education','manufacturing','d2c-ecommerce','healthcare','software-saas'] as const;
export const industryUseCases = [
 ['Respond to property enquiries automatically','Qualify buyers and schedule property visits','Follow up after viewings'],
 ['Answer admission enquiries','Schedule counselling sessions','Send reminders and updates'],
 ['Share order information with customers','Send vouchers and ledger statements','Follow up on pending payments'],
 ['Send order and delivery updates','Reconnect with abandoned shoppers','Support product discovery in chat'],
 ['Confirm appointments','Send timely visit reminders','Request feedback after a visit'],
 ['Capture demo enquiries','Book product walkthroughs','Support customers across messaging channels'],
] as const;
export const integrations = [
 {name:'WhatsApp Business API',brand:'whatsapp',slug:'whatsapp-business-api',description:'Connect customer conversations with sales, support and automation workflows.'},
 {name:'Instagram',brand:'instagram',slug:'instagram-automation',description:'Turn DMs and comments into timely customer conversations.'},
 {name:'Facebook Messenger',brand:'messenger',slug:'facebook-messenger-automation',description:'Respond to Facebook enquiries and manage conversations.'},
 {name:'Google Reviews',brand:'google',slug:'ai-google-reviews',description:'Make review requests part of your customer follow-up.'},
 {name:'Shopify',brand:'shopify',slug:'shopify-store-automation',description:'Connect store events with customer updates and reminders.'},
 {name:'Tally',brand:'tally',slug:'tally-accounting-automation',description:'Share accounting updates through connected workflows.'},
 {name:'Calendar Tools',brand:'calendar',slug:'calendar-bookings',description:'Simplify bookings, confirmations and reminders.'},
 {name:'CRM Workflows',brand:'whatsapp',slug:'whatsapp-business-api',description:'Keep leads organized across your customer journey.'},
 {name:'RCS Messaging',brand:'rcs',slug:'rcs-messaging',description:'Create interactive messages on supported devices.'},
] as const;

// These are discovery entries, not claims of live one-click connections.
export const leadIntegrations = [
 {slug:'facebook-lead-ads',name:'Facebook Lead Ads',category:'Lead Generation',description:'Capture leads directly from Facebook Lead Ads.',visual:'facebook',documentation:'https://developers.facebook.com/docs/marketing-api/guides/lead-ads/'},
 {slug:'webhook',name:'Webhook',category:'Data Capture',description:'Receive leads and business data through custom webhook connections.',visual:'webhook',documentation:undefined},
 {slug:'google-forms',name:'Google Forms',category:'Forms & Surveys',description:'Sync form submissions and capture leads from Google Forms.',visual:'googleforms',documentation:'https://developers.google.com/workspace/forms/api/guides'},
 {slug:'jotform',name:'Jotform',category:'Forms & Surveys',description:'Capture and organize leads from Jotform submissions.',visual:'jotform',documentation:'https://api.jotform.com/docs/'},
 {slug:'typeform',name:'Typeform',category:'Forms & Surveys',description:'Connect Typeform responses to your business workflows.',visual:'typeform',documentation:'https://www.typeform.com/developers/'},
 {slug:'zoho-crm',name:'Zoho CRM',category:'CRM & Sales',description:'Sync leads and customer information with Zoho CRM.',visual:'zoho',documentation:'https://www.zoho.com/crm/developer/docs/api/v8/'},
 {slug:'hubspot-crm',name:'HubSpot CRM',category:'CRM & Sales',description:'Connect lead data with HubSpot CRM for centralized lead management.',visual:'hubspot',documentation:'https://developers.hubspot.com/docs/api/overview'},
 {slug:'indiamart',name:'IndiaMART',category:'Lead Generation',description:'Capture and organize enquiries received through IndiaMART.',visual:'indiamart',documentation:undefined},
 {slug:'contact-form-7',name:'Contact Form 7',category:'Forms & Surveys',description:'Capture website enquiries from WordPress Contact Form 7.',visual:'contactform',documentation:'https://contactform7.com/docs/'},
 {slug:'call-history-connect',name:'Call History Connect',category:'Data Capture',description:'Import supported lead information from call history.',visual:'calls',documentation:undefined},
 {slug:'contact-book',name:'Contact Book',category:'Business Tools',description:'Import contacts from your phone contact book.',visual:'contacts',documentation:undefined},
 {slug:'ocr-app',name:'OCR App',category:'Business Tools',description:'Extract lead information from supported images and documents using OCR.',visual:'ocr',documentation:undefined},
] as const;
