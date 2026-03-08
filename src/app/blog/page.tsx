
import { Navbar } from "@/components/navigation/Navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

const posts = [
  {
    id: "seo-tips",
    title: "5 SEO Tips for Local Restaurants in 2024",
    excerpt: "Learn how to optimize your Google Maps presence and attract more hungry customers searching for your cuisine.",
    author: "Alex Rivera",
    date: "March 15, 2024",
    category: "SEO",
    imageId: "blog-seo-tips"
  },
  {
    id: "success-story-salon",
    title: "How Gloss & Glow Salon Doubled Bookings in 3 Months",
    excerpt: "A deep dive into our digital transformation journey with a local beauty parlor and the impact of WhatsApp automation.",
    author: "Sarah Jenkins",
    date: "March 10, 2024",
    category: "Success Stories",
    imageId: "blog-success-story"
  },
  {
    id: "video-marketing",
    title: "Why Short-Form Video is Essential for Retail Shops",
    excerpt: "Tips on creating engaging Reels and TikToks to showcase your latest inventory and drive foot traffic.",
    author: "Mike Chen",
    date: "March 05, 2024",
    category: "Video Marketing",
    imageId: "restaurant-success"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 container mx-auto px-4">
        <header className="max-w-3xl mb-16 space-y-4">
          <h1 className="text-5xl font-headline font-bold">Marketing Insights & <span className="gradient-text">Success Stories</span></h1>
          <p className="text-xl text-muted-foreground">
            Helping you navigate the digital landscape with expert tips and real-world results from local businesses like yours.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const img = PlaceHolderImages.find(i => i.id === post.imageId);
            return (
              <Card key={post.id} className="overflow-hidden group flex flex-col hover:shadow-xl transition-all border-none bg-secondary/30">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={img?.imageUrl || ""}
                    alt={img?.description || ""}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={img?.imageHint}
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                <CardHeader className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
                  </div>
                  <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button variant="link" className="mt-auto p-0 h-auto justify-start font-bold group/btn" asChild>
                    <Link href={`/blog/${post.id}`}>
                      Read Article <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <section className="mt-24 p-12 bg-card border rounded-3xl text-center space-y-6">
          <h2 className="text-3xl font-headline font-bold">Never Miss a Strategy</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Subscribe to our monthly newsletter for curated growth tips specifically for local business owners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow h-12 rounded-lg bg-background border px-4 focus:ring-2 focus:ring-primary outline-none"
            />
            <Button className="h-12 px-8 gradient-bg border-none">Subscribe</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
