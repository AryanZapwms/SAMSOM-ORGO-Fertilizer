import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'mr';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// English translations
const translations = {
  en: {
    // Navigation
    'nav.benefits': 'Benefits',
    'nav.ourStory': 'Our Story',
    'nav.specifications': 'Specifications',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.tagline': '100% Organic Earth-Friendly',
    'hero.title': 'Nourish Your',
    'hero.titleHighlight': 'Plants Naturally',
    'hero.description': 'Premium organic vermicompost crafted for sustainable growth and vibrant indoor gardens. Give your leafy friends the nutrients they deserve.',
    'hero.learnMore': 'Learn More',
    'hero.contactUs': 'Contact Us',
    
    // Target Audience
    'target.title': 'Perfect Organic Vermicompost Fertilizer for:',
    'target.description': 'Our premium vermicompost is scientifically formulated to provide optimal nutrition for all types of plants, ensuring healthier growth and higher yields across different growing environments.',
    'target.veg': 'Vegetables',
    'target.fruits': 'Fruits',
    'target.flowers': 'Flowers',
    'target.lawns': 'Lawns',
    'target.nurseries': 'Nurseries',
    'target.pots': 'Pots',
    
    // Benefits Summary (Section)
    'benefits.title': 'Why Choose Nourish?',
    'benefits.description': 'We believe in working with nature, not against it. Our vermicompost is designed to rejuvenate your soil from the inside out.',
    'benefits.viewAll': 'View all benefits',
    'benefits.organic.title': '100% Organic',
    'benefits.organic.desc': 'Pure natural ingredients sourced sustainably, containing zero synthetic additives or fillers.',
    'benefits.soil.title': 'Soil Health',
    'benefits.soil.desc': 'Enriches the microbiome and improves water retention for long-term plant vitality.',
    'benefits.chemical.title': 'Chemical-Free',
    'benefits.chemical.desc': 'Completely safe for your pets and children. No harmful residues or toxic odors.',
    'benefits.growth.title': 'Growth Boost',
    'benefits.growth.desc': 'See visible results in weeks with faster root development and greener foliage.',
    
    // Detailed Benefits
    'detailed.title': 'Comprehensive Benefits of Vermicompost',
    'detailed.description': 'Unlike chemical fertilizers that provide temporary nutrition, vermicompost improves overall soil health and delivers long-term benefits for sustainable plant growth.',
    'detailed.fertility.title': 'Improves Soil Fertility',
    'detailed.fertility.desc': 'Enriches soil with essential macro and micronutrients that are released slowly, ensuring continuous nourishment without nutrient loss or soil degradation.',
    'detailed.structure.title': 'Enhances Soil Structure',
    'detailed.structure.desc': 'Increases soil porosity for better air circulation and root penetration. Improves water-holding capacity in sandy soils and reduces compaction in clay soils.',
    'detailed.microbial.title': 'Boosts Microbial Activity',
    'detailed.microbial.desc': 'Introduces beneficial microorganisms that break down organic matter, convert nutrients into plant-available forms, and suppress harmful pathogens.',
    'detailed.moisture.title': 'Improves Moisture Retention',
    'detailed.moisture.desc': 'Organic matter content helps soil retain water longer, reducing irrigation needs and protecting plants during dry conditions.',
    'detailed.healthy.title': 'Promotes Healthy Growth',
    'detailed.healthy.desc': 'Contains natural plant growth regulators (auxins, cytokinins) that stimulate root development and improve nutrient uptake.',
    'detailed.pollution.title': 'Reduces Soil Pollution',
    'detailed.pollution.desc': 'Restores soil health without toxic residues, improves organic carbon levels, and prevents soil erosion caused by chemical fertilizers.',
    'detailed.sustainable.title': 'Sustainable Agriculture',
    'detailed.sustainable.desc': 'Helps recycle organic waste, reduces environmental impact, and promotes eco-friendly farming practices.',
    'detailed.universal.title': 'Universal Application',
    'detailed.universal.desc': 'Safe for all crops, horticulture, home gardens, nurseries, lawns, and potted plants. Does not burn plants at any growth stage.',
    'detailed.cta.title': 'Why Choose Samson Orgo Fertilizer?',
    'detailed.cta.desc1': 'Our organic vermicompost is produced exclusively from cow dung using Eisenia Fetida earthworms. Rich in humus, NPK, micronutrients, and beneficial soil microbes including nitrogen-fixing and phosphate-solubilizing bacteria.',
    'detailed.cta.desc2': 'Scientifically proven to satisfy all parameters required for both growth promotion and plant protection. An excellent fit for farmers seeking sustainable, high-yield solutions.',
    'detailed.premium': 'Premium Quality',
    'detailed.lab': 'Lab Certified & Verified',
    
    // Product Showcase
    'product.title': 'What is Vermicompost?',
    'product.secret': 'Our Secret?',
    'product.microbes': 'Healthy Microbes.',
    'product.descMain': 'Our premium vermicompost is harvested from red wigglers fed a balanced diet of organic fruit and vegetable scraps. The result is "black gold" — a nutrient powerhouse that plants crave.',
    'product.bullet1': 'Slow-release nutrients prevent fertilizer burn',
    'product.bullet2': 'Natural pest and disease resistance',
    'product.bullet3': 'Odorless and easy to apply indoors',
    'product.viewRange': 'View Product Range',
    
    // Testimonials
    'testimonial.title': 'Loved by Plant Parents',
    'testimonial.quote': '"I was about to give up on my Fiddle Leaf Fig. After just two applications of Nourish, I saw three new leaves sprout! It\'s actually magic for plants."',
    'testimonial.author': 'Sarah Jenkins',
    'testimonial.role': 'Verified Plant Enthusiast',
    
    // Technical Specs
    'specs.title': 'Technical Specifications',
    'specs.description': 'Our vermicompost meets stringent quality standards with optimal parameters for superior plant growth and soil health.',
    'specs.physical': 'Physical Parameters',
    'specs.chemical': 'Chemical Parameters',
    'specs.biological': 'Biological Parameters',
    'specs.micro.title': 'Complete Micronutrient Profile',
    'specs.micro.desc': 'Rich in essential micronutrients for comprehensive plant nutrition',
    'specs.cert.title': 'Certified Quality Assurance',
    'specs.cert.desc': 'Our vermicompost is scientifically tested and certified by authorized agricultural laboratories in India, ensuring it meets all parameters required for both growth promotion and plant protection.',
    'specs.cert1': 'Free from toxic chemicals',
    'specs.cert2': 'Low heavy metal content',
    'specs.cert3': 'No weed seeds or pathogens',
    'specs.cert.organic': 'Certified Organic',
    'specs.cert.inst': 'Vasantdada Sugar Institute',
    'specs.cert.loc': 'Pune, India',
    
    // Footer
    'footer.description': 'Cultivating a greener future through premium organic waste transformation. Helping your indoor jungle thrive naturally.',
    'footer.quickLinks': 'Quick Links',
    'footer.shopAll': 'Shop All Products',
    'footer.wholesale': 'Wholesale Inquiry',
    'footer.careGuide': 'Plant Care Guide',
    'footer.subscription': 'Subscription Box',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterText': 'Get plant care tips and exclusive offers.',
    'footer.emailPlaceholder': 'Your Email',
    'footer.copyright': '© {year} Nourish Plants. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    
    // About Page (Expanded)
    'about.hero.title': 'Our Story',
    'about.hero.desc': 'Cultivating a greener future through premium organic waste transformation',
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'To revolutionize agriculture by providing scientifically-proven organic solutions that respect nature\'s rhythm while delivering exceptional plant growth and soil health.',
    'about.vision.title': 'Our Vision',
    'about.vision.desc': 'To become India\'s most trusted brand for certified organic fertilizers, promoting sustainable agriculture and helping communities grow healthier food in harmony with nature.',
    'about.whatIs.title': 'What is Vermicompost?',
    'about.whatIs.p1': 'Vermicompost is a nutrient-rich, organic fertilizer and soil conditioner produced by the natural decomposition of organic materials (cow dung, food scraps, yard waste) using earthworms, typically red wigglers, and microorganisms.',
    'about.whatIs.p2': 'Often called "black gold," this humus-like material improves soil structure, enhances water retention, and provides essential, balanced nutrients for stronger plant growth and higher yields.',
    'about.whyInSoil.title': 'Why Vermicompost is Used in Soil',
    'about.whyInSoil.item1.title': 'Improves Soil Fertility',
    'about.whyInSoil.item1.desc': 'Enriches soil with essential macro and micronutrients that are released slowly, ensuring continuous nourishment without nutrient loss.',
    'about.whyInSoil.item2.title': 'Enhances Soil Structure',
    'about.whyInSoil.item2.desc': 'Increases soil porosity for better air circulation and root penetration. Improves water-holding capacity in all soil types.',
    'about.whyInSoil.item3.title': 'Boosts Microbial Activity',
    'about.whyInSoil.item3.desc': 'Introduces beneficial microorganisms that break down organic matter and suppress harmful pathogens.',
    'about.whyInSoil.item4.title': 'Improves Moisture Retention',
    'about.whyInSoil.item4.desc': 'Organic matter content helps soil retain water longer, reducing irrigation needs by up to 40%.',
    'about.whyInSoil.item5.title': 'Reduces Soil Pollution',
    'about.whyInSoil.item5.desc': 'Restores soil health without toxic residues, improves organic carbon levels, and prevents soil erosion.',
    'about.whyInSoil.item6.title': 'Universal Application',
    'about.whyInSoil.item6.desc': 'Safe for all crops, horticulture, home gardens, nurseries, lawns, and potted plants at any growth stage.',
    'about.samson.title': 'Why Choose Samson Orgo Fertilizer?',
    'about.samson.p1': 'Our organic vermicompost is produced exclusively from cow dung using Eisenia Fetida earthworms. Rich in humus, NPK, micronutrients, and beneficial soil microbes including nitrogen-fixing and phosphate-solubilizing bacteria.',
    'about.samson.p2': 'Scientifically proven to satisfy all parameters required for both growth promotion and plant protection. An excellent fit for farmers seeking sustainable, high-yield solutions.',
    'about.cert.title': 'Certified Quality',
    'about.cta': 'Back to Home',

    // Contact Page (Expanded)
    'contact.hero.title': 'Contact Us',
    'contact.hero.desc': 'Get in touch with our team for inquiries, support, or partnership opportunities',
    'contact.info.title': 'Get in Touch',
    'contact.info.location.title': 'Our Location',
    'contact.info.location.address': '123 Organic Lane, Greenfield, CA 90210, Maharashtra, India',
    'contact.info.phone.title': 'Phone Number',
    'contact.info.email.title': 'Email Address',
    'contact.info.hours.title': 'Business Hours',
    'contact.info.hours.week': 'Monday - Friday: 9:00 AM - 6:00 PM',
    'contact.info.hours.sat': 'Saturday: 10:00 AM - 4:00 PM',
    'contact.info.hours.sun': 'Sunday: Closed',
    'contact.info.social': 'Follow Us',
    'contact.form.title': 'Send us a Message',
    'contact.form.success': 'Thank you for your message! We\'ll get back to you within 24-48 hours.',
    'contact.form.error': 'Something went wrong. Please try again or email us directly at hello@nourishplants.com',
    'contact.form.name': 'Full Name *',
    'contact.form.email': 'Email Address *',
    'contact.form.phone': 'Phone Number',
    'contact.form.subject': 'Subject *',
    'contact.form.message': 'Your Message *',
    'contact.form.placeholderName': 'Enter your full name',
    'contact.form.placeholderEmail': 'Enter your email address',
    'contact.form.placeholderPhone': 'Enter your phone number',
    'contact.form.placeholderMessage': 'Please describe your inquiry in detail...',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending Message...',
    'contact.form.subjects.select': 'Select a subject',
    'contact.form.subjects.product': 'Product Inquiry',
    'contact.form.subjects.wholesale': 'Wholesale Orders',
    'contact.form.subjects.support': 'Technical Support',
    'contact.form.subjects.partnership': 'Partnership Opportunity',
    'contact.form.subjects.feedback': 'Feedback & Suggestions',
    'contact.form.subjects.other': 'Other',
    'contact.faq.title': 'Frequently Asked Questions',
    'contact.faq.q1': 'How soon will I receive a response?',
    'contact.faq.a1': 'We typically respond within 24-48 hours during business days. For urgent inquiries, please call our support line.',
    'contact.faq.q2': 'Do you offer wholesale pricing?',
    'contact.faq.a2': 'Yes, we offer competitive wholesale pricing for bulk orders. Please select \'Wholesale Orders\' in the subject field above.',
    'contact.faq.q3': 'What is your shipping policy?',
    'contact.faq.a3': 'We ship across India with delivery times of 3-7 business days depending on location. International shipping is also available.',
    'contact.faq.q4': 'Can I visit your facility?',
    'contact.faq.a4': 'Yes, we welcome visitors by appointment. Please contact us to schedule a visit to our organic farm and production facility.',

    // Navbar
    'language.current': 'Language',
    'language.code': 'en',
  },
  
  mr: {
    // Navigation - मराठी
    'nav.benefits': 'फायदे',
    'nav.ourStory': 'आमची कथा',
    'nav.specifications': 'तपशील',
    'nav.contact': 'संपर्क',
    
    // Hero Section
    'hero.tagline': '१००% सेंद्रिय पृथ्वी-स्नेही',
    'hero.title': 'तुमच्या',
    'hero.titleHighlight': 'वनस्पतींना नैसर्गिक पोषण द्या',
    'hero.description': 'टिकाऊ वाढ आणि जीवंत इनडोअर बागांसाठी तयार केलेले प्रीमियम सेंद्रिय वर्मीकंपोस्ट. तुमच्या हिरव्या मित्रांना त्यांना हवे असलेले पोषण द्या.',
    'hero.learnMore': 'अधिक जाणून घ्या',
    'hero.contactUs': 'आमच्याशी संपर्क साधा',
    
    // Target Audience
    'target.title': 'साठी परिपूर्ण सेंद्रिय वर्मीकंपोस्ट खत:',
    'target.description': 'आमचे प्रीमियम वर्मीकंपोस्ट शास्त्रीय दृष्टिकोनातून तयार केले गेले आहे जेणेकरून सर्व प्रकारच्या वनस्पतींना योग्य पोषण मिळेल, ज्यामुळे वाढ निरोगी होते आणि उत्पादन वाढते.',
    'target.veg': 'भाज्या',
    'target.fruits': 'फळे',
    'target.flowers': 'फुले',
    'target.lawns': 'लॉन्स',
    'target.nurseries': 'रोपवाटिका (Nurseries)',
    'target.pots': 'कुंड्या (Pots)',
    
    // Benefits Summary
    'benefits.title': 'नूरिश का निवडा?',
    'benefits.description': 'आम्ही निसर्गाच्या विरोधात नाही, तर निसर्गासोबत काम करण्यावर विश्वास ठेवतो. आमचे वर्मीकंपोस्ट तुमच्या मातीचे आरोग्य आतून सुधारण्यासाठी बनवले आहे.',
    'benefits.viewAll': 'सर्व फायदे पहा',
    'benefits.organic.title': '१००% सेंद्रिय',
    'benefits.organic.desc': 'पूर्णपणे नैसर्गिक घटकांपासून बनवलेले, कोणत्याही रासायनिक भेसळीशिवाय.',
    'benefits.soil.title': 'मातीचे आरोग्य',
    'benefits.soil.desc': 'मातीतील सूक्ष्मजीवांचे प्रमाण वाढवते आणि पाणी धरून ठेवण्याची क्षमता सुधारते.',
    'benefits.chemical.title': 'केमिकल-मुक्त',
    'benefits.chemical.desc': 'तुमच्या पाळीव प्राण्यांसाठी आणि मुलांसाठी पूर्णपणे सुरक्षित. कोणताही हानिकारक वास नाही.',
    'benefits.growth.title': 'उत्तम वाढ',
    'benefits.growth.desc': 'काही आठवड्यांतच पानांचा हिरवागारपणा आणि मुळांच्या वाढीत बदल दिसून येईल.',

    // Detailed Benefits
    'detailed.title': 'वर्मीकंपोस्टचे सविस्तर फायदे',
    'detailed.description': 'रासायनिक खते तात्पुरते पोषण देतात, पण वर्मीकंपोस्ट मातीचे आरोग्य सुधारून दीर्घकालीन फायदे देते.',
    'detailed.fertility.title': 'मातीची सुपीकता वाढवते',
    'detailed.fertility.desc': 'मातीला आवश्यक पोषक घटक हळूहळू आणि सतत पुरवते, ज्यामुळे मातीचा दर्जा घसरत नाही.',
    'detailed.structure.title': 'मातीची रचना चांगली करते',
    'detailed.structure.desc': 'माती भुसभुशीत करते ज्यामुळे हवा खेळती राहते आणि मुळांना वाढायला जागा मिळते.',
    'detailed.microbial.title': 'सूक्ष्मजीवांची वाढ करते',
    'detailed.microbial.desc': 'उपयुक्त जिवाणूंची संख्या वाढवते जे सेंद्रिय पदार्थांचे खतात रूपांतर करतात.',
    'detailed.moisture.title': 'पाणी धरून ठेवण्याची क्षमता',
    'detailed.moisture.desc': 'माती पाणी जास्त काळ धरून ठेवते, ज्यामुळे पाण्याची गरज कमी होते.',
    'detailed.healthy.title': 'निरोगी वाढीस प्रोत्साहन',
    'detailed.healthy.desc': 'यात नैसर्गिक ग्रोथ रेग्युलेटर्स असतात जे मुळांच्या वाढीला चालना देतात.',
    'detailed.pollution.title': 'प्रदूषण कमी करते',
    'detailed.pollution.desc': 'कोणत्याही विषारी अंशांशिवाय माती पुन्हा जिवंत करते आणि धूप थांबवते.',
    'detailed.sustainable.title': 'शाश्वत शेती',
    'detailed.sustainable.desc': 'सेंद्रिय कचऱ्याचा पुनर्वापर करून पर्यावरणाचे रक्षण करते.',
    'detailed.universal.title': 'सर्व वनस्पतींसाठी उपयुक्त',
    'detailed.universal.desc': 'शेती, बागकाम, रोपवाटिका आणि कुंडीतील झाडांसाठी पूर्णपणे सुरक्षित.',
    'detailed.cta.title': 'सॅमसन ऑर्गो फर्टिलायझर का निवडावे?',
    'detailed.cta.desc1': 'आमचे सेंद्रिय वर्मीकंपोस्ट फक्त गाईच्या शेणापासून \'आयसेनिया फेटिडा\' गांडुळांचा वापर करून तयार केले जाते. यात एनपीके (NPK) आणि सूक्ष्म पोषक घटक भरपूर प्रमाणात असतात.',
    'detailed.cta.desc2': 'हे खत सरकारी प्रयोगशाळेतून प्रमाणित आहे आणि झाडांच्या वाढीसाठी व संरक्षणासाठी उत्तम आहे. शाश्वत शेतीसाठी हा एक उत्तम पर्याय आहे.',
    'detailed.premium': 'प्रीमियम गुणवत्ता',
    'detailed.lab': 'लॅब प्रमाणित आणि सत्यापित',

    // Product Showcase
    'product.title': 'वर्मीकंपोस्ट म्हणजे काय?',
    'product.secret': 'आमचे गुपित?',
    'product.microbes': 'निरोगी सूक्ष्मजीव.',
    'product.descMain': 'आमचे प्रीमियम वर्मीकंपोस्ट अशा गांडुळांपासून तयार केले जाते ज्यांना सेंद्रिय फळे आणि भाज्यांचा आहार दिला जातो. हा वनस्पतींसाठी एक पोषक खजिना आहे.',
    'product.bullet1': 'मंद गतीचे पोषण झाडांना जळण्यापासून वाचवते',
    'product.bullet2': 'कीड आणि रोगांविरुद्ध नैसर्गिक प्रतिकारशक्ती',
    'product.bullet3': 'बिनवासाचे आणि घरात वापरण्यास सोपे',
    'product.viewRange': 'उत्पादने पहा',

    // Testimonials
    'testimonial.title': 'ग्राहकांचे अनुभव',
    'testimonial.quote': '"माझे फायडल लीफ फिग झाड जवळजवळ वाळले होते. नूरिश वापरल्यापासून त्याला नवीन पालवी फुटली आहे! हे झाडांसाठी खरोखर जादू आहे."',
    'testimonial.author': 'सारा जेन्किन्स',
    'testimonial.role': 'सत्यापित प्लांट प्रेमी',

    // Technical Specs
    'specs.title': 'तांत्रिक तपशील',
    'specs.description': 'आमचे वर्मीकंपोस्ट उच्च दर्जाचे असून झाडांच्या वाढीसाठी आवश्यक सर्व तांत्रिक निकषांवर उरते.',
    'specs.physical': 'भौतिक निकष (Physical)',
    'specs.chemical': 'रासायनिक निकष (Chemical)',
    'specs.biological': 'जैविक निकष (Biological)',
    'specs.micro.title': 'सूक्ष्म पोषक घटकांचे प्रमाण',
    'specs.micro.desc': 'झाडांच्या सर्वांगीण पोषणासाठी आवश्यक असलेले सर्व सूक्ष्म पोषक घटक.',
    'specs.cert.title': 'प्रमाणित गुणवत्ता',
    'specs.cert.desc': 'आमचे खत भारतातील मान्यताप्राप्त कृषी प्रयोगशाळांद्वारे तपासले आणि प्रमाणित केले गेले आहे.',
    'specs.cert1': 'विषारी रसायनांपासून मुक्त',
    'specs.cert2': 'कमी जड धातूंचे प्रमाण',
    'specs.cert3': 'तण बिया किंवा रोगजनकांपासून मुक्त',
    'specs.cert.organic': 'प्रमाणित सेंद्रिय',
    'specs.cert.inst': 'वसंतदादा शुगर इन्स्टिट्यूट',
    'specs.cert.loc': 'पुणे, भारत',

    // Footer
    'footer.description': 'सेंद्रिय कचऱ्याचे रूपांतर करून हरित भविष्याची निर्मिती. तुमच्या झाडांना नैसर्गिकरित्या वाढण्यास मदत करणे.',
    'footer.quickLinks': 'द्रुत दुवे',
    'footer.shopAll': 'सर्व उत्पादने',
    'footer.wholesale': 'घाऊक चौकशी',
    'footer.careGuide': 'झाडांची काळजी मार्गदर्शक',
    'footer.subscription': 'सबस्क्रिप्शन बॉक्स',
    'footer.newsletter': 'वृत्तपत्रिका',
    'footer.newsletterText': 'झाडांच्या काळजीबद्दल टिप्स आणि विशेष ऑफर्स मिळवा.',
    'footer.emailPlaceholder': 'तुमचा ईमेल',
    'footer.copyright': '© {year} नूरिश प्लांट्स. सर्व हक्क राखीव.',
    'footer.privacy': 'गोपनीयता धोरण',
    'footer.terms': 'सेवा अटी',
    
    // About Page (Expanded) - मराठी
    'about.hero.title': 'आमची कथा',
    'about.hero.desc': 'प्रीमियम सेंद्रिय कचरा व्यवस्थापनाद्वारे हरित भविष्याची निर्मिती',
    'about.mission.title': 'आमचे ध्येय',
    'about.mission.desc': 'निसर्गाच्या लयाचा आदर करत आणि झाडांना उत्कृष्ट पोषण देत सेंद्रिय शेतीमध्ये क्रांती घडवून आणणे.',
    'about.vision.title': 'आमची दृष्टी',
    'about.vision.desc': 'भारतातील प्रमाणित सेंद्रिय खतांचा सर्वात विश्वासू ब्रँड बनणे, शाश्वत शेतीला प्रोत्साहन देणे आणि निसर्गाच्या सोबतीने निरोगी अन्न पिकवण्यास मदत करणे.',
    'about.whatIs.title': 'वर्मीकंपोस्ट म्हणजे काय?',
    'about.whatIs.p1': 'वर्मीकंपोस्ट हे एक पोषक तत्वांनी युक्त सेंद्रिय खत आहे जे गांडुळे (विशेषतः लाल गांडुळे) आणि सूक्ष्मजीवांच्या मदतीने सेंद्रिय पदार्थांच्या (गाईचे शेण, अन्नाचा कचरा) नैसर्गिक विघटनातून तयार केले जाते.',
    'about.whatIs.p2': 'याला अनेकदा "काळे सोने" म्हटले जाते. हे मातीची रचना सुधारते, पाण्याचा निचरा आणि साठवणूक क्षमता वाढवते आणि झाडांच्या जोमदार वाढीसाठी आवश्यक पोषण देते.',
    'about.whyInSoil.title': 'मातीमध्ये वर्मीकंपोस्ट का वापरले जाते?',
    'about.whyInSoil.item1.title': 'मातीची सुपीकता वाढवते',
    'about.whyInSoil.item1.desc': 'मातीला आवश्यक पोषक घटक हळूहळू आणि सतत पुरवते, ज्यामुळे पोषक तत्वांचा ऱ्हास होत नाही.',
    'about.whyInSoil.item2.title': 'मातीची रचना सुधारते',
    'about.whyInSoil.item2.desc': 'माती भुसभुशीत करते ज्यामुळे हवा खेळती राहते आणि मुळांना वाढायला जागा मिळते. सर्व प्रकारच्या मातीसाठी उपयुक्त.',
    'about.whyInSoil.item3.title': 'सूक्ष्मजीवांची वाढ',
    'about.whyInSoil.item3.desc': 'उपयुक्त जिवाणूंची संख्या वाढवते जे सेंद्रिय पदार्थांचे रूपांतर करतात आणि रोगांपासून संरक्षण करतात.',
    'about.whyInSoil.item4.title': 'ओलावा टिकवून धरते',
    'about.whyInSoil.item4.desc': 'माती पाणी जास्त काळ धरून ठेवते, ज्यामुळे पाण्याची गरज ४०% पर्यंत कमी होऊ शकते.',
    'about.whyInSoil.item5.title': 'प्रदूषण कमी करते',
    'about.whyInSoil.item5.desc': 'विषारी अंशांशिवाय माती पुन्हा जिवंत करते आणि जमिनीची धूप थांबवते.',
    'about.whyInSoil.item6.title': 'सर्वत्र उपयुक्त',
    'about.whyInSoil.item6.desc': 'शेती, फळबागा, घरगुती बागा, रोपवाटिका आणि कुंड्यांसाठी पूर्णपणे सुरक्षित.',
    'about.samson.title': 'सॅमसन ऑर्गो फर्टिलायझर का निवडावे?',
    'about.samson.p1': 'आमचे सेंद्रिय वर्मीकंपोस्ट फक्त गाईच्या शेणापासून \'आयसेनिया फेटिडा\' गांडुळांचा वापर करून तयार केले जाते. यात बुरशी (humus), एनपीके आणि उपयुक्त सूक्ष्मजीव भरपूर प्रमाणात असतात.',
    'about.samson.p2': 'हे खत शास्त्रीयदृष्ट्या प्रमाणित असून झाडांच्या वाढीसाठी आणि संरक्षणासाठी परिपूर्ण आहे. शाश्वत शेतीसाठी हा एक उत्तम पर्याय आहे.',
    'about.cert.title': 'प्रमाणित गुणवत्ता',
    'about.cta': 'मुख्य पृष्ठावर जा',

    // Contact Page (Expanded) - मराठी
    'contact.hero.title': 'संपर्क साधा',
    'contact.hero.desc': 'चौकशी, समर्थन किंवा भागीदारीच्या संधींसाठी आमच्या टीमशी संपर्क साधा',
    'contact.info.title': 'संपर्क माहिती',
    'contact.info.location.title': 'आमचा पत्ता',
    'contact.info.location.address': '१२३ सेंद्रिय लेन, ग्रीनफिल्ड, महाराष्ट्र, भारत',
    'contact.info.phone.title': 'फोन नंबर',
    'contact.info.email.title': 'ईमेल पत्ता',
    'contact.info.hours.title': 'कामाची वेळ',
    'contact.info.hours.week': 'सोमवार - शुक्रवार: सकाळी ९ ते संध्याकाळी ६',
    'contact.info.hours.sat': 'शनिवार: सकाळी १० ते दुपारी ४',
    'contact.info.hours.sun': 'रविवार: सुट्टी',
    'contact.info.social': 'सोशल मीडियावर फॉलो करा',
    'contact.form.title': 'आम्हाला संदेश पाठवा',
    'contact.form.success': 'तुमच्या संदेशाबद्दल धन्यवाद! आम्ही २४-४८ तासांच्या आत तुमच्याशी संपर्क साधू.',
    'contact.form.error': 'काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा किंवा आम्हाला थेट ईमेल करा.',
    'contact.form.name': 'पूर्ण नाव *',
    'contact.form.email': 'ईमेल पत्ता *',
    'contact.form.phone': 'फोन नंबर',
    'contact.form.subject': 'विषय *',
    'contact.form.message': 'तुमचा संदेश *',
    'contact.form.placeholderName': 'तुमचे पूर्ण नाव टाका',
    'contact.form.placeholderEmail': 'तुमचा ईमेल पत्ता टाका',
    'contact.form.placeholderPhone': 'तुमचा फोन नंबर टाका',
    'contact.form.placeholderMessage': 'तुमची विचारणा सविस्तर सांगा...',
    'contact.form.send': 'संदेश पाठवा',
    'contact.form.sending': 'संदेश पाठवत आहे...',
    'contact.form.subjects.select': 'विषय निवडा',
    'contact.form.subjects.product': 'उत्पादन चौकशी',
    'contact.form.subjects.wholesale': 'घाऊक ऑर्डर',
    'contact.form.subjects.support': 'तांत्रिक मदत',
    'contact.form.subjects.partnership': 'भागीदारीची संधी',
    'contact.form.subjects.feedback': 'प्रतिक्रिया आणि सूचना',
    'contact.form.subjects.other': 'इतर',
    'contact.faq.title': 'सतत विचारले जाणारे प्रश्न',
    'contact.faq.q1': 'मला किती वेळात प्रतिसाद मिळेल?',
    'contact.faq.a1': 'आम्ही सहसा कामाच्या दिवसात २४-४८ तासांत प्रतिसाद देतो. तातडीच्या चौकशीसाठी कृपया आम्हाला कॉल करा.',
    'contact.faq.q2': 'तुम्ही घाऊक दरात खत देता का?',
    'contact.faq.a2': 'हो, आम्ही घाऊक दरात खत पुरवतो. कृपया वरील फॉर्ममध्ये \'घाऊक ऑर्डर\' निवडा.',
    'contact.faq.q3': 'तुमची डिलिव्हरी पॉलिसी काय आहे?',
    'contact.faq.a3': 'आम्ही संपूर्ण भारतात ३-७ दिवसांत डिलिव्हरी देतो. आंतरराष्ट्रीय डिलिव्हरी देखील उपलब्ध आहे.',
    'contact.faq.q4': 'मी तुमच्या उत्पादन केंद्राला भेट देऊ शकतो का?',
    'contact.faq.a4': 'हो, तुम्ही पूर्वपरवानगी घेऊन आमच्या केंद्राला भेट देऊ शकता. भेटीची वेळ निश्चित करण्यासाठी आमच्याशी संपर्क साधा.',

    // Navbar
    'language.current': 'भाषा',
    'language.code': 'mr',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'mr' : 'en');
  };

  const t = (key: string): string => {
    const langTranslations: Record<string, string> = translations[language];
    const translation = langTranslations[key];
    
    // Handle dynamic values
    if (key === 'footer.copyright' && translation) {
      return translation.replace('{year}', new Date().getFullYear().toString());
    }
    
    return translation || key; // Return the key if translation not found
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};