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

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'Our Story' },
    { id: 'services', label: 'Menu' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const stats = [
    { value: 5, suffix: '+', label: 'Years Experience' },
    { value: 200, suffix: '+', label: 'Happy Customers' },
    { value: 15, suffix: '+', label: 'Traditional Recipes' },
    { value: 34, suffix: ' RON', label: 'Average Price' }
  ];

  const whyUsFeatures = [
    { Icon: Shield, name: "Authentic Heritage", description: "Our recipes have been perfected over generations, bringing you the true taste of Romania.", className: "col-span-3 lg:col-span-1", background: <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent" /> },
    { Icon: Award, name: "Quality Ingredients", description: "We source only the finest local produce and meats to ensure exceptional flavor in every dish.", className: "col-span-3 lg:col-span-2", background: <DotPattern opacity={0.04} className="absolute inset-0" /> },
    { Icon: Users, name: "Community Focus", description: "As a family-owned establishment, we create a welcoming atmosphere that makes every guest feel at home.", className: "col-span-3 lg:col-span-2", background: <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-amber-500/10 to-transparent" /> },
    { Icon: Clock, name: "Consistent Excellence", description: "Every meal is prepared with care and attention to detail for an unforgettable dining experience.", className: "col-span-3 lg:col-span-1", background: <DotPattern opacity={0.04} className="absolute inset-0" /> }
  ];

  const reviews = [
    {
      name: "Maria G.",
      role: "Female",
      text: "The ciorba de vaca was absolutely perfect! I've been looking for this recipe for years and finally found it here.",
      rating: 5
    },
    {
      name: "Ion B.",
      role: "Male",
      text: "Vita is so tender and full of flavor - the best beef dish I've had in Domneşti. Will definitely come back!",
      rating: 5
    },
    {
      name: "Elena D.",
      role: "Female",
      text: "The atmosphere is cozy and welcoming, just like a traditional Romanian home. The service was exceptional.",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "What are your opening hours?",
      answer: "We are open daily from 12 PM to 10 PM. Reservations recommended for evening visits."
    },
    {
      question: "Do you offer vegetarian options?",
      answer: "While our menu focuses on traditional meat dishes, we can accommodate special requests with advance notice."
    },
    {
      question: "Can I book a private event?",
      answer: "Yes! We offer private dining spaces for events and celebrations. Contact us to discuss arrangements."
    },
    {
      question: "Is your restaurant wheelchair accessible?",
      answer: "Our main dining area is accessible but please call ahead to ensure we can meet your needs."
    },
    {
      question: "Do you deliver food?",
      answer: "Currently, we focus on dine-in service but are considering delivery options in the future."
    },
    {
      question: "How can I reach La Virgil?",
      answer: "We're located at soseaua tudor valdimirescu, domnesti, ilfov. Follow our address for directions."
    }
  ];

  const services = [
    {
      name: "Ciorba de vaca",
      description: "Creamy beef soup with fresh herbs",
      price: "34 RON"
    },
    {
      name: "Ciorba de perisoare",
      description: "Lamb and vegetable soup",
      price: "33 RON"
    },
    {
      name: "Vita",
      description: "Slow-braised beef with garlic, paprika, and fresh herbs",
      price: "89 RON"
    },
    {
      name: "Ciorbe de burta",
      description: "Tender beef stomach soup with aromatic spices",
      price: "44 RON"
    }
  ];

  const valueProps = [
    {
      icon: Shield,
      title: "Traditional Recipes",
      description: "Passed down through generations"
    },
    {
      icon: MapPin,
      title: "Local Ingredients",
      description: "Sourced from regional farms"
    },
    {
      icon: Users,
      title: "Warm Hospitality",
      description: "Family-run experience"
    },
    {
      icon: Clock,
      title: "Authentic Atmosphere",
      description: "Cozy dining in historic setting"
    }
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) { 
          e.target.classList.add('visible'); 
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <DemoBanner />
      
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto mt-4">
          <div className="flex items-center justify-between h-14 px-4 sm:px-6 rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.08]">
            <a href="#" className="font-semibold text-base tracking-tight text-white">La Virgil</a>
            
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
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
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); setIsMenuOpen(false); }}
                  className="block py-2 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-40 pb-24 sm:pt-48 sm:pb-32 min-h-screen flex items-center relative overflow-x-clip">
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
            Welcome to La Virgil, where traditional recipes meet modern hospitality in the heart of Domneşti.
          </p>
          
          <div className="hero-blur hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <ShimmerButton className="shadow-2xl" background="rgba(244,188,23, 1)">
              <span className="text-sm font-medium text-black">Book a Table</span>
            </ShimmerButton>
            <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5">
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

      {/* About Section */}
      <section id="about" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              La Virgil opened its doors in 2019 with a mission to bring authentic Romanian flavors to the community of Domneşti.
            </p>
          </div>
          
          <div className="animate-on-scroll mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {valueProps.map((prop, index) => (
                <Card key={index} className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-amber-500/20 transition-all duration-500 card-hover">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <BorderBeam size={120} duration={20} delay={index * 1.5} colorFrom="#f4bc17" colorTo="#f4bc17" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 border border-amber-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(244,188,23,0.15)] transition-all duration-500">
                        <prop.icon className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-amber-50 transition-colors">{prop.title}</h3>
                        <p className="text-sm text-muted-foreground">{prop.description}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/[0.06] rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Our Menu</h2>
            <p className="text-lg text-muted-foreground">
              Discover our carefully curated selection of traditional Romanian dishes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
            {services.map((service, index) => (
              <Card key={index} className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-amber-500/20 transition-all duration-500 card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#f4bc17" colorTo="#f4bc17" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 border border-amber-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(244,188,23,0.15)] transition-all duration-500">
                      <Shield className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-amber-50 transition-colors mb-2">{service.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                      <Separator className="mb-4 bg-white/[0.06]" />
                      <div className="text-2xl font-black bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                        {service.price}
                      </div>
                    </div>
                  </div>
                  <ShimmerButton className="w-full shadow-lg" background="rgba(244,188,23, 1)">
                    <span className="text-sm font-medium text-black">Book Now</span>
                  </ShimmerButton>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why-Us Section */}
      <section id="why-us" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Why Choose La Virgil?</h2>
            <p className="text-lg text-muted-foreground">
              Here's what makes us different from other restaurants in Domneşti.
            </p>
          </div>
          
          <BentoGrid className="lg:grid-rows-2 animate-on-scroll">
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

      {/* Reviews Section */}
      <section id="reviews" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-amber-500/[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">What Our Guests Say</h2>
            <p className="text-lg text-muted-foreground">
              Real reviews from real customers who've experienced our cuisine.
            </p>
          </div>
          
          <div className="relative flex max-w-6xl mx-auto flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {reviews.map((review, index) => (
                <Card key={index} className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-amber-500/20 transition-all duration-500 card-hover max-w-sm mx-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#f4bc17" colorTo="#f4bc17" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6">{review.text}</p>
                    <div className="flex items-center">
                      <Avatar className="mr-3">
                        <AvatarImage src={`/assets/people/${review.role === 'Male' ? 'boy_1.jpg' : 'girl_1.jpg'}`} alt={review.name} />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{review.name}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about dining at La Virgil.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <Accordion type="multiple" className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/[0.06] mb-4">
                  <AccordionTrigger className="text-left hover:bg-white/[0.02] transition-colors duration-200 px-4 py-3 rounded-xl">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-amber-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Visit Us Today</h2>
            <p className="text-lg text-muted-foreground">
              Come experience authentic Romanian cuisine in the heart of Domneşti.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 animate-on-scroll">
            <div>
              <div className="space-y-6">
                {[
                  { icon: MapPin, label: "Address", value: "soseaua tudor valdimirescu, domnesti, ilfov" },
                  { icon: Phone, label: "Phone", value: "+40757263744" },
                  { icon: Mail, label: "Email", value: "contact@virgil.com" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 border border-amber-500/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
                
                <div className="pt-6">
                  <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    <a href="https://instagram.com/lavirgil" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-white/[0.05] h-10 w-10">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm">
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                    <Button variant="outline" className="w-full h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5">
                      <Instagram className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                    <ShimmerButton className="w-full shadow-lg" background="rgba(244,188,23, 1)">
                      <span className="text-sm font-medium text-black">Book Appointment</span>
                    </ShimmerButton>
                  </div>
                </div>
              </Card>
              
              <div className="mt-6 h-[350px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
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

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.05] py-8 pb-32">
        <Separator className="mb-8" />
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} La Virgil. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a href="https://instagram.com/lavirgil" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-white/[0.05] h-10 w-10">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Progressive Blur */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden sm:block"><ProgressiveBlur position="bottom" height="250px" /></div><div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:hidden"><ProgressiveBlur position="bottom" height="150px" /></div>
    </>
  );
}
