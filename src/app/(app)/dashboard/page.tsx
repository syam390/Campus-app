import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const calendarEvents = [
  {
    id: 1,
    title: "Minor Project Submission",
    date: "24 Aug 2024",
    time: "11:59 PM",
    location: "Online Portal",
    imageId: "event-tech-fest",
  },
  {
    id: 2,
    title: "Inter-Hostel Cricket Match",
    date: "26 Aug 2024",
    time: "4:00 PM",
    location: "Main Ground",
    imageId: "event-sports-day",
  },
  {
    id: 3,
    title: "College Freshers Party",
    date: "30 Aug 2024",
    time: "7:00 PM",
    location: "Auditorium",
    imageId: "event-music-night",
  },
];

const recommendedEvents = [
  {
    id: 1,
    title: "AI & ML Workshop",
    date: "2 Sep 2024",
    time: "10:00 AM",
    location: "CS Dept, Seminar Hall",
    imageId: "event-ai-workshop",
    reason: "Related to your project submission.",
  },
  {
    id: 2,
    title: "Startup Pitch Competition",
    date: "5 Sep 2024",
    time: "2:00 PM",
    location: "E-Cell, Main Building",
    imageId: "event-startup-pitch",
    reason: "Matches your interests.",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">Events & Feed</h1>
        <p className="text-muted-foreground">See what's happening in college here.</p>
      </div>

      <Tabs defaultValue="for-you">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
          <TabsTrigger value="for-you">
            <Sparkles className="mr-2 size-4" />
            For You
          </TabsTrigger>
          <TabsTrigger value="my-calendar">
            <Calendar className="mr-2 size-4" />
            My Calendar
          </TabsTrigger>
        </TabsList>
        <TabsContent value="for-you" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recommendedEvents.map((event) => {
              const image = PlaceHolderImages.find((img) => img.id === event.imageId);
              return (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="p-0 relative">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={event.title}
                        width={600}
                        height={400}
                        className="aspect-video object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                    <Badge variant="default" className="absolute top-2 right-2 bg-primary/80 backdrop-blur-sm">
                      <Sparkles className="mr-1.5 size-3.5" />
                      Recommended
                    </Badge>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg font-headline mb-2">{event.title}</CardTitle>
                     <p className="text-sm text-muted-foreground mb-3 italic">"{event.reason}"</p>
                    <div className="text-sm text-muted-foreground space-y-1.5">
                      <div className="flex items-center gap-2">
                        <Calendar className="size-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="size-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="size-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
        <TabsContent value="my-calendar" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {calendarEvents.map((event) => {
              const image = PlaceHolderImages.find((img) => img.id === event.imageId);
              return (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="p-0">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={event.title}
                        width={600}
                        height={400}
                        className="aspect-video object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg font-headline mb-2">{event.title}</CardTitle>
                    <div className="text-sm text-muted-foreground space-y-1.5">
                      <div className="flex items-center gap-2">
                        <Calendar className="size-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="size-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="size-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
