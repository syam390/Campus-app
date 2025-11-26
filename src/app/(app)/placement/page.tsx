"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Flame, Upload, FileText, BrainCircuit } from "lucide-react";

export default function PlacementPage() {
  const [isAnalyzed, setIsAnalyzed] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setIsAnalyzed(false); // Reset on new file
    }
  };

  const handleAnalyze = () => {
    if(fileName) {
        setIsAnalyzed(true);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">Placement Prep</h1>
        <p className="text-muted-foreground">Improve your resume and ace the interview!</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Resume Analysis</CardTitle>
          <CardDescription>Upload your resume (PDF) and get AI feedback.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="relative">
                <label htmlFor="resume-upload" className="relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                        <p className="mb-2 text-sm text-muted-foreground">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground">PDF only (MAX. 5MB)</p>
                    </div>
                    <Input id="resume-upload" type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".pdf" onChange={handleFileChange} />
                </label>
            </div>
          {fileName && (
             <div className="flex items-center p-2 rounded-md border bg-muted/30">
                <FileText className="size-5 text-muted-foreground" />
                <p className="ml-2 text-sm font-medium truncate">{fileName}</p>
             </div>
          )}
          <Button onClick={handleAnalyze} disabled={!fileName} className="w-full">
            {isAnalyzed ? "Analyze Again" : "Analyze"}
          </Button>
        </CardContent>
      </Card>

      {isAnalyzed && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><FileText className="size-5 text-primary"/> ATS Score</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center gap-4">
                    <div className="relative size-32">
                        <svg className="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-muted" strokeWidth="2"></circle>
                            <g className="origin-center -rotate-90 transform">
                                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-primary" strokeWidth="2" strokeDasharray="100" strokeDashoffset="100-78"></circle>
                            </g>
                        </svg>
                        <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <span className="text-center text-3xl font-bold text-foreground">78</span>
                        </div>
                    </div>
                    <p className="text-sm text-center text-muted-foreground">Good! Add a few more keywords to get to 90+.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Flame className="size-5 text-destructive"/> Gemini's Roast</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                    <p>"Your 'Hobbies' section says 'binge-watching'. The company wants the next performer, not the next Netflix show."</p>
                    <p>"'MS Paint' in skills? Bro, move on from 1998."</p>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><BrainCircuit className="size-5 text-accent-foreground"/> Company-Specific Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label htmlFor="company-name">Company Name</Label>
                        <Input id="company-name" placeholder="e.g. 'Google'" />
                    </div>
                    <Button variant="secondary" className="w-full">Generate Questions</Button>
                    <div className="space-y-3 text-sm pt-2">
                        <p>1. You used Python in your project. How would you handle it at Google's scale?</p>
                        <p>2. You wrote "team player", but what do you do when there's a conflict in the team?</p>
                    </div>
                </CardContent>
            </Card>
        </div>
      )}
    </div>
  );
}
