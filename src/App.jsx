import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, MessageCircle, MapPin, Clock, Shield, Award, Users, Star, Instagram } from 'lucide-react';
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
  const observerRef = useRef(null);

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
    { value: 350, suffix: '+', label: 'Happy Customers' },
    { value: 100, suffix: '+', label: 'Dishes' },
    { value: 50, suffix: '+', label: 'Reviews' },
    { value: 10, suffix: '', label: 'Years' }
  ];

  const aboutItems = [
    { 
      icon: Shield,
      title: "Authentic Recipes",
      description: "Passed down through generations of Romanian culinary tradition"
    },
    { 
      icon: Award,
      title: "Local Ingredients",
      description: "Sourced from regional farms to ensure freshness and quality"
    },
    { 
      icon: Users,
      title: "Warm Atmosphere",
      description: "Cozy dining experience perfect for families and friends"
    },
    { 
      icon: Clock,
      title: "Family Tradition",
      description: "5+ years of culinary excellence in Domnești"
    }
  ];

  const services = [
    {
      name: "Ciorba de vaca",
      description: "Slow-braised beef soup with herbs and spices",
      price: "34 RON"
    },
    {
      name: "Ciorba de perisoare",
      description: "Chicken soup with vegetables and aromatic herbs",
      price: "33 RON"
    },
    {
      name: "Vita",
      description: "Tender beef roast served with traditional accompaniments",
      price: "89 RON"
    },
    {
      name: "Ciorbe de burta",
      description: "Slow-cooked tripe soup with fresh herbs",
      price: "44 RON"
    }
  ];

  const whyUsFeatures = [
    { 
      Icon: Shield, 
      name: "Traditional Recipes", 
      description: "Our dishes are based on family recipes that have been perfected over generations, ensuring authentic flavors you won't find anywhere else.",
      className: "col-span-3 lg:col-span-1",
      background: <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent" />
    },
    { 
      Icon: Award, 
      name: "Quality Ingredients", 
      description: "We source only the finest local produce and meats, guaranteeing every bite is made with care and commitment to excellence.",
      className: "col-span-3 lg:col-span-2",
      background: <DotPattern opacity={0.15} className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)]" />
    },
    { 
      Icon: Users, 
      name: "Family Atmosphere", 
      description: "Our cozy dining room creates a welcoming environment where families and friends can enjoy traditional meals together in comfort.",
      className: "col-span-3 lg:col-span-2",
      background: <DotPattern opacity={0.15} className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_30%,#000_100%)]" />
    },
    { 
      Icon: Clock, 
      name: "Fast Service", 
      description: "We prepare your meals quickly without compromising on quality, so you can savor authentic flavors without waiting.",
      className: "col-span-3 lg:col-span-1",
      background: <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-amber-500/10 to-transparent" />
    }
  ];

  const reviews = [
    {
      name: "Maria Ionescu",
      gender: "F",
      text: "The ciorba de vaca was incredible - rich, hearty, and exactly what I wanted. Perfect comfort food!"
    },
    {
      name: "Andrei Popescu",
      gender: "M",
      text: "Vita was cooked to perfection with the best beef I've had in years. Will definitely return."
    },
    {
      name: "Elena Stoica",
      gender: "F",
      text: "Ciorbe de burta is my favorite soup here. The flavors were so rich and authentic - loved it!"
    }
  ];

  const faqItems = [
    {
      question: "What are your opening hours?",
      answer: "We're open daily from 11:00 AM to 10:00 PM. Closed on Sundays for family time."
    },
    {
      question: "Do you offer vegetarian options?",
      answer: "Yes, our ciorbe de perisoare and some of our side dishes are suitable for vegetarians."
    },
    {
      question: "Can I make reservations?",
      answer: "Reservations are recommended especially during weekends. You can call us at +40757263744 or WhatsApp us."
    },
    {
      question: "Is your restaurant suitable for families with children?",
      answer: "Absolutely! We provide high chairs and kids' menus to ensure everyone enjoys their meal."
    },
    {
      question: "What makes your cuisine different from others?",
      answer: "Our recipes are passed down through generations, using traditional techniques and locally sourced ingredients."
    },
    {
      question: "Do you have outdoor seating?",
      answer: "Yes, we have a lovely outdoor area where you can enjoy your meal in the fresh air."
    }
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    handleResize();

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

  const getAvatarImage = (name, gender) => {
    if (gender === 'M') return `/assets/people/boy_1.jpg`;
    return `/assets/people/girl_1.jpg`;
  };

  return (
    <>
      <DemoBanner />
      <div className="relative min-h-screen bg-background text-foreground">
        {/* Navigation */}
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

        {/* Hero Section */}
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
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
            <div className="text-center">
              <div className="hero-blur hero-delay-1 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm mb-6">
                <AnimatedShinyText className="text-sm font-medium">Authentic Romanian Cuisine</AnimatedShinyText>
              </div>
              
              <h1 className="hero-blur hero-delay-2 max-w-4xl mx-auto text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent mb-6">
                Authentic Flavors Since 2019
              </h1>
              
              <p className="hero-blur hero-delay-3 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                Discover the warmth of Romanian home cooking with our traditional recipes made from locally sourced ingredients. Each dish tells a story of heritage and love.
              </p>
              
              <div className="hero-blur hero-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <ShimmerButton className="shadow-2xl" background="rgba(244,188,23, 1)">
                  <span className="text-sm font-medium text-black">Book Appointment</span>
                </ShimmerButton>
                
                <Button 
                  variant="outline" 
                  className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5"
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
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative overflow-x-clip py-24 sm:py-32">
          <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                La Virgil brings you the heart of Romanian cuisine with dishes passed down through generations. We blend traditional techniques with modern flair to create unforgettable meals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {aboutItems.map((item, index) => (
                <Card 
                  key={index} 
                  className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-amber-500/20 transition-all duration-500 card-hover"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#f4bc17" colorTo="#f4bc17" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
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

        {/* Services Section */}
        <section id="services" className="relative overflow-x-clip py-24 sm:py-32">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/[0.06] rounded-full blur-[130px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Our Menu</h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Experience the taste of Romania with our carefully crafted dishes made from fresh ingredients and time-honored recipes.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-amber-500/20 transition-all duration-500 card-hover"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#f4bc17" colorTo="#f4bc17" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-8">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-amber-50 transition-colors">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <Separator className="mb-5 bg-white/[0.06]" />
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                        {service.price}
                      </span>
                      <ShimmerButton 
                        className="shadow-2xl h-10 px-4 rounded-full" 
                        background="rgba(244,188,23, 1)"
                      >
                        <span className="text-xs font-medium text-black">Book Now</span>
                      </ShimmerButton>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why-Us Section */}
        <section id="why-us" className="relative overflow-x-clip py-24 sm:py-32">
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Why Choose La Virgil</h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                What sets us apart in the world of Romanian cuisine
              </p>
            </div>
            
            <BentoGrid className="lg:grid-rows-2">
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
        <section id="reviews" className="relative overflow-x-clip py-24 sm:py-32">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-amber-500/[0.06] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">What Our Guests Say</h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Real experiences from real people who've enjoyed our traditional Romanian cuisine
              </p>
            </div>
            
            <div className="relative flex max-w-6xl mx-auto flex-col items-center justify-center overflow-hidden">
              <Marquee pauseOnHover className="[--duration:30s]">
                {reviews.map((review, index) => (
                  <Card 
                    key={index} 
                    className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-amber-500/20 transition-all duration-500 card-hover mx-4 max-w-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#f4bc17" colorTo="#f4bc17" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative p-6">
                      <div className="flex items-center mb-4">
                        <Avatar className="w-10 h-10 mr-3">
                          <AvatarImage src={getAvatarImage(review.name, review.gender)} alt={review.name} />
                          <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="text-sm font-semibold">{review.name}</h4>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
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

        {/* FAQ Section */}
        <section id="faq" className="py-24 sm:py-32">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Everything you need to know about dining at La Virgil
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="animate-on-scroll delay-1 border-white/[0.06] rounded-xl mb-4"
                  >
                    <AccordionTrigger className="text-left text-lg hover:bg-white/[0.02] transition-colors px-6 py-4 rounded-xl">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative overflow-x-clip py-24 sm:py-32">
          <div className="absolute top-1/3 left-0 w-72 h-72 bg-amber-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Visit Us Today</h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Come experience authentic Romanian cuisine at La Virgil restaurant in Domnești.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 border border-amber-500/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Address</h3>
                        <p className="text-muted-foreground">soseaua tudor valdimirescu, domnesti, ilfov</p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 border border-amber-500/10 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Phone</h3>
                        <p className="text-muted-foreground">+40757263744</p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 border border-amber-500/10 flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Email</h3>
                        <p className="text-muted-foreground">contact@virgil.com</p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 flex items-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 flex items-center"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  
                  <ShimmerButton 
                    className="shadow-2xl h-12 px-6 rounded-full" 
                    background="rgba(244,188,23, 1)"
                  >
                    <span className="text-sm font-medium text-black">Book Appointment</span>
                  </ShimmerButton>
                </div>
              </div>
              
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
        </section>

        {/* Footer */}
        <footer className="relative pt-8 pb-32">
          <Separator className="mb-8" />
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} La Virgil. All rights reserved.
            </p>
            
            <div className="flex gap-3">
              <a href="https://instagram.com/lavirgil" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-white/[0.1] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>

        {/* Progressive Blur */}
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden sm:block"><ProgressiveBlur position="bottom" height="250px" /></div><div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:hidden"><ProgressiveBlur position="bottom" height="150px" /></div>
      </div>
    </>
  );
}
