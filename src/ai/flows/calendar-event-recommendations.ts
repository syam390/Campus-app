'use server';

/**
 * @fileOverview A flow that pulls events from Google Calendar and provides AI-powered recommendations for relevant campus events.
 *
 * - getCalendarEventRecommendations - A function that handles the event recommendation process.
 * - CalendarEventRecommendationsInput - The input type for the getCalendarEventRecommendations function.
 * - CalendarEventRecommendationsOutput - The return type for the getCalendarEventRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CalendarEventRecommendationsInputSchema = z.object({
  calendarEvents: z.string().describe('The list of events from the user\'s Google Calendar in JSON format.'),
  userInterests: z.string().describe('A description of the user\'s interests.'),
});
export type CalendarEventRecommendationsInput = z.infer<typeof CalendarEventRecommendationsInputSchema>;

const CalendarEventRecommendationsOutputSchema = z.object({
  recommendations: z.string().describe('A list of recommended campus events based on the user\'s calendar events and interests.'),
});
export type CalendarEventRecommendationsOutput = z.infer<typeof CalendarEventRecommendationsOutputSchema>;

export async function getCalendarEventRecommendations(input: CalendarEventRecommendationsInput): Promise<CalendarEventRecommendationsOutput> {
  return calendarEventRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'calendarEventRecommendationsPrompt',
  input: {schema: CalendarEventRecommendationsInputSchema},
  output: {schema: CalendarEventRecommendationsOutputSchema},
  prompt: `You are an AI assistant that recommends campus events to students.

  Based on the user\'s Google Calendar events and interests, provide a list of relevant campus events that the user might be interested in.

  User Interests: {{{userInterests}}}
  Calendar Events: {{{calendarEvents}}}

  Recommendations:`,
});

const calendarEventRecommendationsFlow = ai.defineFlow(
  {
    name: 'calendarEventRecommendationsFlow',
    inputSchema: CalendarEventRecommendationsInputSchema,
    outputSchema: CalendarEventRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
