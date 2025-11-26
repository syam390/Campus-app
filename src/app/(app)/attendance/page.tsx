"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Fingerprint, Users } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AttendancePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const attendancePercentage = 82;
  const faceImage = PlaceHolderImages.find((img) => img.id === 'attendance-face');

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">Attendance</h1>
        <p className="text-muted-foreground">Apni attendance track karo aur time pe class pahucho.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Attendance</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{attendancePercentage}%</div>
            <p className="text-xs text-muted-foreground">Last updated just now</p>
            <Progress value={attendancePercentage} className="mt-4" />
          </CardContent>
        </Card>

        <Card className="flex flex-col items-center justify-center text-center p-6">
           <CardTitle className="mb-2">Mark Attendance</CardTitle>
           <CardDescription className="mb-4">Chehra scan karke aaj ki attendance lagao.</CardDescription>
           <Button onClick={() => setIsDialogOpen(true)} className="w-full">
            <Fingerprint className="mr-2 h-4 w-4" />
            Scan Face
          </Button>
        </Card>
      </div>
      
      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-2xl font-headline">Face Attendance</AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Camera ke saamne dekho aur apni aankhein jhapkao.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-center my-4 relative">
             {faceImage && (
                <Image
                    src={faceImage.imageUrl}
                    alt="Face Scan"
                    width={250}
                    height={250}
                    className="rounded-full object-cover border-4 border-primary"
                    data-ai-hint={faceImage.imageHint}
                />
             )}
             <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-[250px] h-[250px] rounded-full border-2 border-dashed border-background/50 animate-pulse"></div>
             </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div>
        <h2 className="text-2xl font-bold font-headline mb-4">Attendance History</h2>
        <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
                <p>Jald hi aa raha hai!</p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
