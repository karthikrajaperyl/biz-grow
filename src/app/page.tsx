
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navigation/Navbar";
import { BusinessAuditTool } from "@/components/audit/BusinessAuditTool";
import { WhatsAppBubble } from "@/components/whatsapp/WhatsAppBubble";
import { 
  Globe, 
  Video, 
  Megaphone, 
  Search, 
  Settings, 
  Utensils, 
  ShoppingBag, 
  Sparkles, 
  Stethoscope, 
  Dumbbell, 
  Home as HomeIcon, 
  GraduationCap,
  ArrowRight,
  Check,
  Rocket
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-tech-illustration");

  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppBubble />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10 blur-3xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent" />
        </div>
        
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
              Helping Local Businesses Grow with <span className="gradient-text">Smart Digital Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
              We build websites, create marketing videos, and optimize your business online so more customers can find you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="h-14 px-8 text-lg gradient-bg border-none" asChild>
                <Link href="#audit">Get Free Business Audit</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg" asChild>
                <Link href="#services">View Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-square">
            <Image
              src={heroImage?.imageUrl || ""}
              alt={heroImage?.description || ""}
              fill
              className="object-cover rounded-3xl shadow-2xl"
              data-ai-hint={heroImage?.imageHint}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-headline font-bold">Comprehensive Growth Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to dominate your local market and reach new heights online.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Globe, 
                title: "Website Development", 
                desc: "Professional mobile-friendly websites designed to attract customers and convert visits to sales." 
              },
              { 
                icon: Video, 
                title: "Video Design", 
                desc: "High-quality promotional videos and high-converting social media content for any platform." 
              },
              { 
                icon: Megaphone, 
                title: "Digital Marketing", 
                desc: "Social media management, high-ROI ads, and professional branding strategies that stick." 
              },
              { 
                icon: Search, 
                title: "SEO Optimization", 
                desc: "Rank your business higher on search engines and dominate local maps for relevant searches." 
              },
              { 
                icon: Settings, 
                title: "Business Tech Solutions", 
                desc: "Online bookings, QR menus, WhatsApp automation, and digital payment systems to streamline operations." 
              }
            ].map((service, i) => (
              <div key={i} className="bg-card border p-8 rounded-2xl hover:shadow-xl transition-all group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <service.icon className="text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-headline font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Tool Section */}
      <section id="audit" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-[0.03]" />
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-headline font-bold">Uncover Your Growth Potential</h2>
            <p className="text-muted-foreground text-lg">Use our AI-powered tool for an instant digital health check.</p>
          </div>
          <BusinessAuditTool />
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-4xl font-headline font-bold">Industries We Help Excel</h2>
              <p className="text-muted-foreground text-lg">We specialize in tailoring digital growth strategies for local service and retail businesses.</p>
            </div>
            <Button variant="link" className="text-primary font-bold group">
              View All Industries <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { icon: Utensils, label: "Restaurants" },
              { icon: ShoppingBag, label: "Retail" },
              { icon: Sparkles, label: "Beauty & Salons" },
              { icon: Stethoscope, label: "Healthcare" },
              { icon: Dumbbell, label: "Fitness" },
              { icon: HomeIcon, label: "Real Estate" },
              { icon: GraduationCap, label: "Education" },
            ].map((ind, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-6 bg-secondary/50 rounded-xl hover:bg-primary/5 transition-colors cursor-default border group">
                <ind.icon className="h-8 w-8 mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-xs font-bold text-center uppercase tracking-wider">{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold mb-4">How We Grow Your Business</h2>
            <p className="text-muted-foreground text-lg">A systematic approach to digital success.</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-4 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-primary/20 -z-10" />
            {[
              "Business Analysis",
              "Digital Strategy",
              "Website & Content",
              "Marketing Launch",
              "Growth Tracking"
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 space-y-4">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold shadow-lg ring-8 ring-background">
                  {i + 1}
                </div>
                <h3 className="font-headline font-bold text-sm uppercase tracking-widest">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground text-lg">Packages built for every stage of your business journey.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$499",
                features: ["Basic Website", "Google Business Profile", "Mobile Responsive", "Contact Form"],
                highlight: false
              },
              {
                name: "Growth",
                price: "$999",
                features: ["Custom Website", "Local SEO Package", "Social Media Setup", "Monthly Analytics", "WhatsApp Integration"],
                highlight: true
              },
              {
                name: "Premium",
                price: "$1999",
                features: ["Premium E-commerce/Booking Site", "Full SEO & Content Strategy", "Video Ad Promotion", "Paid Ad Management", "Priority Support"],
                highlight: false
              }
            ].map((pkg, i) => (
              <div 
                key={i} 
                className={cn(
                  "relative p-8 rounded-3xl border flex flex-col h-full",
                  pkg.highlight ? "bg-card shadow-2xl scale-105 border-primary ring-4 ring-primary/10 z-10" : "bg-card/50"
                )}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full gradient-bg text-white text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-headline font-bold mb-2">{pkg.name} Package</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-headline font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground">/one-time</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3 text-sm">
                      <Check className="h-5 w-5 text-primary shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={pkg.highlight ? "default" : "outline"}
                  className={cn("w-full h-12 font-bold", pkg.highlight && "gradient-bg border-none")}
                >
                  Select {pkg.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="gradient-bg rounded-[2rem] p-12 md:p-20 text-center text-white space-y-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <h2 className="text-4xl md:text-6xl font-headline font-bold relative z-10">Ready to Grow Your Business Online?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto relative z-10">
              Join 100+ local businesses that transformed their digital presence with BizGrow Digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold" asChild>
                <Link href="#audit">Book Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold bg-white/10 text-white border-white/20 hover:bg-white/20">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/20 pt-20 pb-10 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                  <Rocket className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-headline font-bold">BizGrow Digital</span>
              </Link>
              <p className="text-muted-foreground leading-relaxed">
                Empowering small businesses with technology-driven growth solutions. Local focus, global standard.
              </p>
            </div>
            
            <div>
              <h4 className="font-headline font-bold mb-6">Services</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li><Link href="#services">Web Development</Link></li>
                <li><Link href="#services">Digital Marketing</Link></li>
                <li><Link href="#services">SEO Optimization</Link></li>
                <li><Link href="#services">Video Design</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-headline font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li><Link href="#">About Us</Link></li>
                <li><Link href="/blog">Success Stories</Link></li>
                <li><Link href="/blog">Marketing Blog</Link></li>
                <li><Link href="#">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-headline font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li>123 Tech Square, Digital City</li>
                <li>hello@bizgrow.digital</li>
                <li>+1 (555) 000-1111</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 BizGrow Digital Agency. All rights reserved.</p>
            <div className="flex gap-8">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
