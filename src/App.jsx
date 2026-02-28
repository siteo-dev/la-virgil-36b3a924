import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, MapPin, Mail, Clock, Shield, Award, Users, Star, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Marquee } from '@/components/magicui/marquee';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { ShineBorder } from '@/components/magicui/shine-border';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { ProgressiveBlur } from '@/components/magicui/progressive-blur';
import { cn } from '@/lib/utils';
import DemoBanner from './DemoBanner';
import LightRays from './LightRays';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Menu' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    handleResize();

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) { 
          e.target.classList.add('visible'); 
          setActiveSection(e.target.id); 
          observer.unobserve(e.target); 
        } 
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  const stats = [
    { value: 350, suffix: '+', label: 'Happy Customers' },
    { value: 100, suffix: '%', label: 'Fresh Ingredients' },
    { value: 5, suffix: '+', label: 'Years of Excellence' },
    { value: 24, suffix: '/7', label: 'Support Available' }
  ];

  const aboutItems = [
    { 
      icon: Shield,
      title: "Authentic Recipes", 
      description: "Passed down through generations" 
    },
    { 
      icon: MapPin,
      title: "Local Ingredients", 
      description: "Sourced from regional farms" 
    },
    { 
      icon: Users,
      title: "Cozy Atmosphere", 
      description: "Perfect for families and friends" 
    },
    { 
      icon: Clock,
      title: "Homemade Feel", 
      description: "Every dish tells a story" 
    }
  ];

  const servicesItems = [
    {
      name: "Ciorba de vaca",
      description: "Slow-braised beef soup with fresh herbs and vegetables",
      price: "34 RON"
    },
    {
      name: "Ciorba de perisoare",
      description: "Tender pork bone soup with aromatic spices",
      price: "33 RON"
    },
    {
      name: "Vita",
      description: "Rich slow-cooked beef stew served with crusty bread",
      price: "89 RON"
    },
    {
      name: "Ciorbe de burta",
      description: "Hearty tripe soup with traditional seasonings",
      price: "44 RON"
    }
  ];

  const whyUsFeatures = [
    { 
      Icon: Shield, 
      name: "Quality Ingredients", 
      description: "We source only the finest local produce and meats for every dish",
      className: "col-span-3 lg:col-span-1" 
    },
    { 
      Icon: Award, 
      name: "Authentic Recipes", 
      description: "Our family recipes have been perfected over generations",
      className: "col-span-3 lg:col-span-2" 
    },
    { 
      Icon: Users, 
      name: "Customer Experience", 
      description: "Every guest receives personalized attention in our warm atmosphere",
      className: "col-span-3 lg:col-span-2" 
    },
    { 
      Icon: Clock, 
      name: "Fresh Preparation", 
      description: "All dishes are prepared daily using traditional cooking methods",
      className: "col-span-3 lg:col-span-1" 
    }
  ];

  const reviews = [
    {
      name: "Maria I.",
      gender: "F",
      text: "The ciorba de vaca was incredible! Warm, comforting, and exactly what I needed after a long day."
    },
    {
      name: "Andrei M.",
      gender: "M",
      text: "Vita stew was cooked to perfection. The portion size was generous and the flavors were rich and authentic."
    },
    {
      name: "Elena S.",
      gender: "F",
      text: "Best traditional Romanian food in Domneşti. The staff made us feel like family during our visit."
    }
  ];

  const faqItems = [
    {
      question: "What are your opening hours?",
      answer: "We are open Monday through Sunday from 12 PM to 10 PM."
    },
    {
      question: "Do you offer vegetarian options?",
      answer: "While most dishes include meat, we can accommodate special requests upon advance notice."
    },
    {
      question: "Can I book a table for large groups?",
      answer: "Yes, we welcome group bookings. Please call ahead to reserve your preferred date and time."
    },
    {
      question: "How do I order takeout or delivery?",
      answer: "You can place orders through our website or by calling us directly at +40757263744."
    },
    {
      question: "Do you have gluten-free options?",
      answer: "We can prepare some dishes without gluten upon request, but please inform us in advance."
    },
    {
      question: "Are reservations required?",
      answer: "While walk-ins are welcome, we recommend making a reservation for larger groups or special occasions."
    }
  ];

  const contactItems = [
    { 
      icon: MapPin,
      title: "Address",
      content: "soseaua tudor valdimirescu, domnesti, ilfov"
    },
    { 
      icon: Phone,
      title: "Phone",
      content: "+40757263744"
    },
    { 
      icon: Mail,
      title: "Email",
      content: "contact@virgil.com"
    }
  ];

  return (
    <>
      <DemoBanner />
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto mt-4">
          <div className="flex items-center justify-between h-14 px-4 sm:px-6 rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.08]">
            <a href="#" className="font-semibold text-base tracking-tight text-white">La Virgil</a>
            
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white rounded-full hover:bg-white/[0.05] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/[0.08] p-4">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="block py-2 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      <section 
        id="hero" 
        className="pt-40 pb-24 sm:pt-48 sm:pb-32 min-h-screen flex items-center relative overflow-x-clip"
      >
        <div className="absolute inset-0 z-0">
          <LightRays 
            raysOrigin="top-center" 
            raysColor="#f4bc17" 
            raysSpeed={1} 
            lightSpread={isMobile ? 2 : 0.5} 
            rayLength={isMobile ? 3 : 1} 
            followMouse={true} 
            mouseInfluence={0.05} 
            noiseAmount={0} 
            distortion={0} 
            pulsating={false} 
            fadeDistance={1} 
            saturation={1} 
          />
        </div>
        
        <DotPattern opacity={0.15} className="absolute inset-0 z-0" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <div className="hero-blur hero-delay-1 mb-6">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
              <AnimatedShinyText className="text-sm font-medium">Authentic Romanian Cuisine</AnimatedShinyText>
            </div>
          </div>
          
          <h1 className="hero-blur hero-delay-2 max-w-4xl mx-auto text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent mb-6">
            Authentic Romanian Flavors
          </h1>
          
          <p className="hero-blur hero-delay-3 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Welcome to La Virgil, where traditional recipes meet modern dining. Our cozy restaurant in Domneşti serves hearty, home-style Romanian dishes made with love and locally-sourced ingredients.
          </p>
          
          <div className="hero-blur hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <ShimmerButton className="shadow-2xl btn-hover" background="rgba(244,188,23, 1)">
              <span className="text-sm font-medium text-black">Book Appointment</span>
            </ShimmerButton>
            
            <Button 
              variant="outline" 
              className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
          
          <div className="hero-blur hero-delay-5 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className={cn("text-center", i > 0 && "sm:border-l sm:border-white/10 sm:pl-12")}>
                <NumberTicker 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  className="text-4xl font-black bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(244,188,23,0.6)]" 
                />
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        id="about" 
        className="relative overflow-x-clip py-24 sm:py-32 lg:py-40"
      >
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Crafting Culinary Memories Since 2019
            </h2>
            <p className="text-lg text-muted-foreground">
              La Virgil brings the warmth of traditional Romanian cooking to your table. Our family-run restaurant combines time-honored recipes with contemporary presentation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 animate-on-scroll">
            {aboutItems.map((item, index) => (
              <Card 
                key={index} 
                className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-amber-500/20 transition-all duration-500 card-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={120} duration={20} delay={index * 1.5} colorFrom="#f4bc17" colorTo="#f4bc17" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 border border-amber-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(244,188,23,0.15)] transition-all duration-500">
                      <item.icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-amber-50 transition-colors">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section 
        id="services" 
        className="relative overflow-x-clip py-24 sm:py-32 lg:py-40"
      >
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/[0.06] rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Our Signature Dishes
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover our carefully curated selection of traditional Romanian comfort foods.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 animate-on-scroll">
            {servicesItems.map((service, index) => (
              <Card 
                key={index} 
                className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-amber-500/20 transition-all duration-500 card-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#f4bc17" colorTo="#f4bc17" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start gap-5 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 border border-amber-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(244,188,23,0.15)] transition-all duration-500">
                      <Shield className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-amber-50 transition-colors mb-2">{service.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                      <Separator className="mb-5 bg-white/[0.06]" />
                      <div className="text-2xl font-black bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                        {service.price}
                      </div>
                    </div>
                  </div>
                  <ShimmerButton 
                    className="w-full shadow-lg btn-hover" 
                    background="rgba(244,188,23, 1)"
                  >
                    <span className="text-sm font-medium text-black">Book Now</span>
                  </ShimmerButton>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section 
        id="why-us" 
        className="relative overflow-x-clip py-24 sm:py-32 lg:py-40"
      >
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Why Choose La Virgil?
            </h2>
            <p className="text-lg text-muted-foreground">
              What sets us apart in the culinary landscape of Domneşti
            </p>
          </div>
          
          <BentoGrid className="lg:grid-rows-2 mb-16 animate-on-scroll">
            {whyUsFeatures.map((feature, index) => (
              <BentoCard 
                key={index} 
                className={cn(feature.className, "hover:border-amber-500/20")} 
                background={feature.background}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 border border-amber-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(244,188,23,0.15)] transition-all duration-500">
                    <feature.Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-amber-50 transition-colors">{feature.name}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </BentoCard>
            ))}
          </BentoGrid>
        </div>
      </section>

      <section 
        id="reviews" 
        className="relative overflow-x-clip py-24 sm:py-32 lg:py-40"
      >
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-amber-500/[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              What Our Guests Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from real people who've enjoyed our traditional cuisine
            </p>
          </div>
          
          <div className="relative flex max-w-6xl mx-auto flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {reviews.map((review, index) => (
                <Card 
                  key={index} 
                  className="mx-4 w-[300px] sm:w-[350px] max-w-sm bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-amber-500/20 transition-all duration-500 card-hover"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="w-10 h-10 mr-3">
                        <AvatarImage src={`/assets/people/${review.gender === 'M' ? 'boy_1.jpg' : 'girl_1.jpg'}`} alt={review.name} />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{review.text}</p>
                  </div>
                </Card>
              ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
          </div>
        </div>
      </section>

      <section 
        id="faq" 
        className="relative overflow-x-clip py-24 sm:py-32 lg:py-40"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about dining at La Virgil
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/[0.06] mb-4">
                  <AccordionTrigger className="text-left hover:bg-white/[0.02] transition-colors duration-200 py-4 px-6 rounded-xl">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section 
        id="contact" 
        className="relative overflow-x-clip py-24 sm:py-32 lg:py-40"
      >
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-amber-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Visit Us Today
            </h2>
            <p className="text-lg text-muted-foreground">
              Come experience the warmth of Romanian hospitality at La Virgil restaurant in Domneşti.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 animate-on-scroll">
            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <Card 
                  key={index} 
                  className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm rounded-2xl overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 border border-amber-500/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.content}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
              
              <div className="flex gap-4 pt-2">
                <ShimmerButton 
                  className="shadow-lg btn-hover" 
                  background="rgba(244,188,23, 1)"
                >
                  <span className="text-sm font-medium text-black">Call Now</span>
                </ShimmerButton>
                
                <Button 
                  variant="outline" 
                  className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden">
              <div className="h-[500px] rounded-2xl overflow-hidden">
                <iframe
                  src={"https://www.google.com/maps?q=" + encodeURIComponent("soseaua tudor valdimirescu, domnesti, ilfov") + "&output=embed"}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.05] py-8 pb-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <Separator className="mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} La Virgil Restaurant. All rights reserved.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/lavirgil" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-amber-500/10 transition-colors">
                <Instagram className="w-5 h-5 text-amber-400" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden sm:block"><ProgressiveBlur position="bottom" height="250px" /></div><div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:hidden"><ProgressiveBlur position="bottom" height="150px" /></div>
    </>
  );
}
