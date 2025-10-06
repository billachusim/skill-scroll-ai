import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";

export const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignIn = () => {
    if (!nickname || (!email && !phone)) {
      toast({
        title: "Missing information",
        description: "Please provide a nickname and either email or phone.",
        variant: "destructive",
      });
      return;
    }

    localStorage.setItem("userNickname", nickname);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPhone", phone);

    toast({
      title: "Welcome to SkillFlow! 🎉",
      description: "You're all set to start learning.",
    });

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-md p-8 space-y-6">
        <div className="text-center space-y-2">
          <img src={logo} alt="SkillFlow" className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Join SkillFlow
          </h1>
          <p className="text-muted-foreground">
            Master tech skills, one scroll at a time
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nickname">Nickname *</Label>
            <Input
              id="nickname"
              placeholder="Choose a nickname"
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

          <p className="text-xs text-muted-foreground">
            * Provide at least one contact method (email or phone)
          </p>

          <Button
            onClick={handleSignIn}
            className="w-full bg-gradient-primary"
          >
            Get Started
          </Button>

          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="w-full"
          >
            Browse as Guest
          </Button>
        </div>
      </Card>
    </div>
  );
};
