import { useParams, useNavigate } from "react-router-dom";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Clock, Users, Star, Heart, Download, ExternalLink, Play, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLiked, setIsLiked] = useState(false);
  
  const course = courses.find((c) => c.id === id);

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

  const handleEnroll = () => {
    if (course.price === 0) {
      // For free courses, add to user's courses
      const enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses") || "[]");
      if (!enrolledCourses.includes(course.id)) {
        enrolledCourses.push(course.id);
        localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
        toast({
          title: "Enrolled successfully! 🎉",
          description: "You can now start learning.",
        });
        navigate(`/training/${course.id}`);
      } else {
        navigate(`/training/${course.id}`);
      }
    } else {
      // For paid courses, show auth prompt
      toast({
        title: "Sign in required",
        description: "Please sign in to purchase this course.",
      });
      navigate("/auth");
    }
  };

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: "Course added to your cart.",
    });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </div>
      </header>

      {/* Course Hero */}
      <div className="aspect-video relative overflow-hidden bg-gradient-primary">
        <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-50">
          {course.image === "ai-prompting" && "🤖"}
          {course.image === "vibe-coding" && "💻"}
          {course.image === "data-analysis" && "📊"}
          {/* Add similar mapping for all courses */}
        </div>
      </div>

      {/* Course Content */}
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Title and Stats */}
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-2">
            <h1 className="text-3xl font-bold">{course.title}</h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsLiked(!isLiked)}
              className={isLiked ? "text-red-500" : ""}
            >
              <Heart className={`w-6 h-6 ${isLiked ? "fill-current" : ""}`} />
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{course.studentsCount.toLocaleString()} students</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-warning text-warning" />
              <span>{course.rating} rating</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>{course.likes.toLocaleString()} likes</span>
            </div>
          </div>

          <p className="text-muted-foreground">{course.description}</p>

          {/* Price and Actions */}
          <Card className="p-4 bg-card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm text-muted-foreground">Price</div>
                <div className="text-3xl font-bold">
                  {course.price === 0 ? (
                    <span className="text-success">FREE</span>
                  ) : (
                    <span>₦{course.price.toLocaleString()}</span>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button
                onClick={handleEnroll}
                className="flex-1 bg-gradient-primary hover:opacity-90"
              >
                <Play className="w-4 h-4 mr-2" />
                {course.price === 0 ? "Start Learning" : "Enroll Now"}
              </Button>
              {course.price > 0 && (
                <Button
                  onClick={handleAddToCart}
                  variant="outline"
                  size="icon"
                >
                  <ShoppingCart className="w-4 h-4" />
                </Button>
              )}
            </div>
          </Card>
        </div>

        {/* AI Tutor Info */}
        <Card className="p-4">
          <h3 className="font-semibold mb-2">Your AI Tutor</h3>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center text-2xl">
              🤖
            </div>
            <div>
              <div className="font-medium">{course.tutor.name}</div>
              <div className="text-sm text-muted-foreground">{course.tutor.title}</div>
            </div>
          </div>
        </Card>

        {/* What You'll Learn */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3">What you'll learn</h3>
          <ul className="space-y-2">
            {course.learningOutcomes.map((outcome, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <span className="text-primary mt-0.5">✓</span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Curriculum */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3">Course Curriculum</h3>
          <ul className="space-y-2">
            {course.curriculum.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-sm p-2 rounded hover:bg-muted">
                <span className="text-muted-foreground">{index + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Resources */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Download className="w-5 h-5" />
            Resources & Materials
          </h3>
          <ul className="space-y-2">
            {course.resources.map((resource, index) => (
              <li key={index} className="flex items-center justify-between p-2 rounded hover:bg-muted">
                <span className="text-sm">{resource}</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </li>
            ))}
          </ul>
        </Card>

        {/* Category */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Category:</span>
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-muted">
            {course.category}
          </span>
        </div>
      </main>
    </div>
  );
};
