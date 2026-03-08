'use server';
/**
 * @fileOverview Provides an instant, preliminary digital audit report for local businesses.
 *
 * - generateDigitalAuditReport - A function that generates a digital audit report.
 * - DigitalAuditReportInput - The input type for the generateDigitalAuditReport function.
 * - DigitalAuditReportOutput - The return type for the generateDigitalAuditReport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DigitalAuditReportInputSchema = z.object({
  businessName: z.string().describe('The name of the local business.'),
  businessType: z
    .string()
    .describe(
      'The type of business (e.g., Restaurant, Salon, Retail Shop, Clinic, Gym, Real Estate).' 
    ),
  websiteUrl: z
    .string()
    .url()
    .optional()
    .describe('The current website URL of the business, if available.'),
  currentDigitalPresence: z
    .string()
    .optional()
    .describe(
      'A brief description of the businesses current digital presence (e.g., social media usage, online listings, review platforms).' 
    ),
  goals: z
    .string()
    .describe(
      'What the business owner wants to achieve online (e.g., more customers, better online visibility, streamlined bookings).' 
    ),
  challenges: z
    .string()
    .optional()
    .describe('The main digital challenges or pain points the business is currently facing.'),
});
export type DigitalAuditReportInput = z.infer<typeof DigitalAuditReportInputSchema>;

const DigitalAuditReportOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the businesses current digital status and overall potential for growth.'),
  strengths: z.array(z.string()).describe('Identified strengths of the businesses current digital presence.'),
  areasForImprovement: z.array(z.string()).describe('Specific recommendations and areas where the business can improve its digital presence.'),
  bizGrowDigitalServices: z.array(z.string()).describe('How BizGrow Digital can specifically help address the identified areas for improvement with its services (e.g., Website Development, SEO Optimization, Digital Marketing, Video Design, Business Tech Solutions).'),
  callToAction: z.string().describe('A clear call to action for the business owner to connect with BizGrow Digital.'),
});
export type DigitalAuditReportOutput = z.infer<typeof DigitalAuditReportOutputSchema>;

export async function generateDigitalAuditReport(
  input: DigitalAuditReportInput
): Promise<DigitalAuditReportOutput> {
  return digitalAuditReportFlow(input);
}

const auditReportPrompt = ai.definePrompt({
  name: 'digitalAuditReportPrompt',
  input: {schema: DigitalAuditReportInputSchema},
  output: {schema: DigitalAuditReportOutputSchema},
  prompt: `You are an expert digital marketing consultant from BizGrow Digital, an agency specializing in helping local businesses grow online.

Based on the following information provided by a local business owner, generate a preliminary digital audit report. The report should highlight their current digital status, identify strengths, pinpoint clear areas for improvement, explain how BizGrow Digital's services can help, and include a strong call to action.

Be professional, friendly, and encouraging. Focus on tangible benefits and clear steps.

Business Name: {{{businessName}}}
Business Type: {{{businessType}}}
{{#if websiteUrl}}Website URL: {{{websiteUrl}}}{{/if}}
{{#if currentDigitalPresence}}Current Digital Presence: {{{currentDigitalPresence}}}{{/if}}
Goals: {{{goals}}}
{{#if challenges}}Challenges: {{{challenges}}}{{/if}}


BizGrow Digital Services to consider mentioning:
- Website Development: Professional mobile-friendly websites designed to attract customers.
- Video Design: High-quality promotional videos and social media content.
- Digital Marketing: Social media management, ads, and branding strategies.
- SEO Optimization: Rank your business higher on search engines and local maps.
- Business Tech Solutions: Online bookings, QR menus, WhatsApp automation, and digital payment systems.
`,
});

const digitalAuditReportFlow = ai.defineFlow(
  {
    name: 'digitalAuditReportFlow',
    inputSchema: DigitalAuditReportInputSchema,
    outputSchema: DigitalAuditReportOutputSchema,
  },
  async (input) => {
    const {output} = await auditReportPrompt(input);
    return output!;
  }
);
