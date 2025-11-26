import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Leaf, Footprints, Utensils, Award } from "lucide-react";

const leaderboardData = [
  { rank: 1, hostel: "Shivalik", points: 2500, trend: "up" },
  { rank: 2, hostel: "Nilgiri", points: 2350, trend: "down" },
  { rank: 3, hostel: "Aravali", points: 2200, trend: "up" },
  { rank: 4, hostel: "Vindhya", points: 2150, trend: "stable" },
  { rank: 5, hostel: "Satpura", points: 1900, trend: "down" },
];

export default function EcoPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">Eco Tracker</h1>
        <p className="text-muted-foreground">Know your carbon footprint and make the campus green.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 grid gap-8">
            <Card>
                <CardHeader>
                    <CardTitle>Carbon Footprint Calculator</CardTitle>
                    <CardDescription>Enter details of your daily activities.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label className="flex items-center gap-2"><Utensils className="size-4" /> Mess Food</Label>
                        <RadioGroup defaultValue="veg" className="flex gap-4">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="veg" id="veg" />
                                <Label htmlFor="veg">Veg</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="non-veg" id="non-veg" />
                                <Label htmlFor="non-veg">Non-Veg</Label>
                            </div>
                        </RadioGroup>
                    </div>

                     <div className="space-y-2">
                        <Label className="flex items-center gap-2"><Footprints className="size-4" /> Today's Travel</Label>
                        <div className="grid grid-cols-2 gap-4">
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Mode of travel?" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="walk">Walk</SelectItem>
                                    <SelectItem value="cycle">Cycle</SelectItem>
                                    <SelectItem value="ebike">E-bike</SelectItem>
                                    <SelectItem value="scooter">Scooter/Bike</SelectItem>
                                    <SelectItem value="car">Car</SelectItem>
                                </SelectContent>
                            </Select>
                            <Input type="number" placeholder="How many km?" />
                        </div>
                    </div>
                    <Button className="w-full">Calculate</Button>
                </CardContent>
            </Card>
             <Card className="bg-accent/50">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-lg font-medium">Your Score</CardTitle>
                    <Leaf className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-4xl font-bold">15 <span className="text-sm font-normal text-muted-foreground">kg CO2</span></div>
                    <p className="text-xs text-muted-foreground mt-1">based on today's entries</p>
                </CardContent>
            </Card>
        </div>
        
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Award className="size-5 text-primary" /> Hostel Leaderboard</CardTitle>
            <CardDescription>See which hostel is the most eco-friendly.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Rank</TableHead>
                  <TableHead>Hostel</TableHead>
                  <TableHead className="text-right">Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboardData.map((item) => (
                  <TableRow key={item.hostel}>
                    <TableCell className="font-medium">{item.rank}</TableCell>
                    <TableCell>{item.hostel}</TableCell>
                    <TableCell className="text-right">{item.points}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
