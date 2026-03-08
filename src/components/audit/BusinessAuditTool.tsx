
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { generateDigitalAuditReport, type DigitalAuditReportOutput } from "@/ai/flows/digital-audit-report-generation";
import { Loader2, CheckCircle2, TrendingUp, Target, MessageSquare } from "lucide-react";

const formSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  businessType: z.string().min(2, "Business type is required"),
  websiteUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  goals: z.string().min(10, "Tell us a bit more about your goals"),
});

export function BusinessAuditTool() {
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<DigitalAuditReportOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      businessType: "",
      websiteUrl: "",
      goals: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const result = await generateDigitalAuditReport({
        ...values,
        currentDigitalPresence: "Unknown",
        challenges: "General visibility",
      });
      setReport(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (report) {
    return (
      <div className="space-y-6 animate-in fade-in duration-700">
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl font-headline flex items-center gap-2">
              <TrendingUp className="text-primary" />
              Digital Audit for {form.getValues("businessName")}
            </CardTitle>
            <CardDescription className="text-lg">
              {report.summary}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-headline font-bold flex items-center gap-2">
                  <CheckCircle2 className="text-green-500" /> Current Strengths
                </h4>
                <ul className="space-y-2">
                  {report.strengths.map((s, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary">•</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-headline font-bold flex items-center gap-2">
                  <Target className="text-primary" /> Areas for Improvement
                </h4>
                <ul className="space-y-2">
                  {report.areasForImprovement.map((a, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary">•</span> {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-6 bg-accent/10 rounded-xl border border-accent/20">
              <h4 className="font-headline font-bold mb-4 flex items-center gap-2">
                <MessageSquare className="text-accent" /> How BizGrow Can Help
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {report.bizGrowDigitalServices.map((s, i) => (
                  <div key={i} className="bg-background/50 p-3 rounded-lg text-sm border">
                    {s}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center pt-4">
              <p className="font-medium mb-4">{report.callToAction}</p>
              <Button size="lg" className="gradient-bg border-none" asChild>
                <a href="https://wa.me/1234567890">Talk to a Consultant on WhatsApp</a>
              </Button>
              <Button variant="ghost" className="ml-4" onClick={() => setReport(null)}>
                Start New Audit
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto border-primary/20 shadow-2xl overflow-hidden">
      <div className="h-2 gradient-bg" />
      <CardHeader>
        <CardTitle className="text-3xl font-headline">Get Your Free Digital Audit</CardTitle>
        <CardDescription>
          Our AI analyzes your business type and goals to provide a personalized growth strategy.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="businessName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Blue Ocean Cafe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="businessType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Type</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Restaurant, Salon..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="websiteUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="goals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Main Growth Goals</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="e.g. I want to get more customers via online booking and improve my Google Maps ranking." 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full h-12 text-lg gradient-bg border-none" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing Your Business...
                </>
              ) : (
                "Generate My Free Report"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
