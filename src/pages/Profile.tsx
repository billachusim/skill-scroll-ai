import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export const Profile = () => {
  const { toast } = useToast();
  const [nickname, setNickname] = useState(localStorage.getItem("userNickname") || "");
  const [email, setEmail] = useState(localStorage.getItem("userEmail") || "");
  const [phone, setPhone] = useState(localStorage.getItem("userPhone") || "");

  const handleSave = () => {
    localStorage.setItem("userNickname", nickname);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPhone", phone);
    
    toast({
      title: "Profile updated",
      description: "Your changes have been saved.",
    });
  };

  const isProfileComplete = nickname && (email || phone);

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Profile</h1>
          <p className="text-sm text-muted-foreground">Manage your account</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center text-3xl">
              {nickname ? nickname.charAt(0).toUpperCase() : "👤"}
            </div>
            <div>
              <h2 className="text-xl font-bold">{nickname || "Set your nickname"}</h2>
              <p className="text-sm text-muted-foreground">
                {isProfileComplete ? "Profile complete" : "Complete your profile"}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nickname">Nickname</Label>
              <Input
                id="nickname"
                placeholder="Enter your nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+234 XXX XXX XXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <Button
              onClick={handleSave}
              className="w-full bg-gradient-primary"
            >
              Save Changes
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Learning Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-3xl font-bold text-primary">
                {JSON.parse(localStorage.getItem("enrolledCourses") || "[]").length}
              </div>
              <div className="text-sm text-muted-foreground">Courses Enrolled</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-3xl font-bold text-accent">0</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};
