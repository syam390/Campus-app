'use server';

/**
 * @fileOverview Analyzes a resume, providing feedback including an ATS score, 'roasts', and company-specific questions.
 *
 * - analyzeResume - A function that handles the resume analysis process.
 * - AnalyzeResumeInput - The input type for the analyzeResume function.
 * - AnalyzeResumeOutput - The return type for the analyzeResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeResumeInputSchema = z.object({
  resumeText: z.string().describe('The text content of the resume to be analyzed.'),
  companyName: z
    .string()
    .optional()
    .describe('The name of the company the resume is being tailored for.'),
});
export type AnalyzeResumeInput = z.infer<typeof AnalyzeResumeInputSchema>;

const AnalyzeResumeOutputSchema = z.object({
  atsScore: z
    .number()
    .describe('An estimated Applicant Tracking System (ATS) score for the resume.'),
  roasts: z
    .string()
    .describe('Humorous and constructive criticisms of the resume.'),
  companySpecificQuestions: z.string().describe(
    'Company-specific interview questions tailored to the resume and the specified company.'
  ),
});
export type AnalyzeResumeOutput = z.infer<typeof AnalyzeResumeOutputSchema>;

export async function analyzeResume(input: AnalyzeResumeInput): Promise<AnalyzeResumeOutput> {
  return analyzeResumeFlow(input);
}

const analyzeResumePrompt = ai.definePrompt({
  name: 'analyzeResumePrompt',
  input: {schema: AnalyzeResumeInputSchema},
  output: {schema: AnalyzeResumeOutputSchema},
  prompt: `You are a resume expert providing feedback to students.

Analyze the resume text provided and provide an ATS score, 'roasts', and company-specific questions.

Resume Text: {{{resumeText}}}

{{#if companyName}}
  Company Name: {{{companyName}}}
{{/if}}

Instructions:
1.  ATS Score: Provide an estimated ATS score (0-100) based on formatting, keywords, and overall structure.
2.  Roasts: Provide 2-3 humorous but constructive criticisms of the resume. Be slightly informal and funny.
3.  Company-Specific Questions: Generate 3-5 company-specific interview questions based on the resume and the company (if provided).  Focus on skills and experience highlighted in the resume.

Ensure that the output is formatted according to the AnalyzeResumeOutputSchema, and each field is populated with a meaningful value.
`,
});

const analyzeResumeFlow = ai.defineFlow(
  {
    name: 'analyzeResumeFlow',
    inputSchema: AnalyzeResumeInputSchema,
    outputSchema: AnalyzeResumeOutputSchema,
  },
  async input => {
    const {output} = await analyzeResumePrompt(input);
    return output!;
  }
);
