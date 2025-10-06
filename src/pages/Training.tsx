import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const Training = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const course = courses.find((c) => c.id === courseId);

  useEffect(() => {
    if (!course) return;

    // Load chat history from localStorage
    const savedMessages = localStorage.getItem(`chat-${courseId}`);
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      // Initial welcome message
      const welcomeMessage: Message = {
        role: "assistant",
        content: `Welcome to ${course.title}! 🎉\n\nI'm ${course.tutor.name}, your AI tutor and ${course.tutor.title}. I'm here to guide you through this course and help you master every concept.\n\nLet's start your learning journey! What would you like to learn about first?`
      };
      setMessages([welcomeMessage]);
    }
  }, [courseId, course]);

  useEffect(() => {
    // Save messages to localStorage
    if (messages.length > 0) {
      localStorage.setItem(`chat-${courseId}`, JSON.stringify(messages));
    }
  }, [messages, courseId]);

  useEffect(() => {
    // Scroll to bottom on new messages
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Course not found</h2>
          <Button onClick={() => navigate("/")}>Go back</Button>
        </div>
      </div>
    );
  }

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: input
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response (in a real app, this would call an AI API)
    setTimeout(() => {
      const aiResponse: Message = {
        role: "assistant",
        content: `Great question! Let me help you with that.\n\n${getContextualResponse(input, course)}\n\nDo you have any follow-up questions about this topic?`
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);

      // Update progress
      const currentProgress = parseInt(localStorage.getItem(`progress-${courseId}`) || "0");
      const newProgress = Math.min(currentProgress + 5, 100);
      localStorage.setItem(`progress-${courseId}`, newProgress.toString());
    }, 1500);
  };

  const getContextualResponse = (question: string, course: any) => {
    // This is a simple mock response generator
    // In a real app, this would use an AI API with the course curriculum as context
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes("start") || lowerQuestion.includes("begin")) {
      return `Let's begin with the fundamentals! Here's what we'll cover:\n\n${course.curriculum.slice(0, 3).map((item: string, i: number) => `${i + 1}. ${item}`).join("\n")}\n\nShall we dive into the first topic?`;
    }
    
    if (lowerQuestion.includes("resource") || lowerQuestion.includes("material")) {
      return `Here are some helpful resources for this course:\n\n${course.resources.map((r: string, i: number) => `• ${r}`).join("\n")}\n\nYou can download these materials anytime from the course page.`;
    }
    
    return `That's an excellent question about ${course.title}! Based on our curriculum, this topic is covered in depth. The key concepts you need to understand are:\n\n• Core fundamentals\n• Practical applications\n• Best practices\n\nWould you like me to break down any specific aspect?`;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/my-courses")}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center text-sm">
                🤖
              </div>
              <div>
                <div className="text-sm font-medium">{course.tutor.name}</div>
                <div className="text-xs text-muted-foreground">{course.tutor.title}</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-6 space-y-4 pb-24">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                  message.role === "user"
                    ? "bg-gradient-primary text-white"
                    : "bg-card border border-border"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-2xl px-4 py-3 bg-card border border-border">
                <Loader2 className="w-5 h-5 animate-spin text-primary" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Input */}
      <div className="sticky bottom-0 bg-background border-t border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-2">
            <Input
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              disabled={isLoading}
            />
            <Button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="bg-gradient-primary"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
