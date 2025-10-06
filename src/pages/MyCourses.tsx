import { useNavigate } from "react-router-dom";
import { courses } from "@/data/courses";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const MyCourses = () => {
  const navigate = useNavigate();
  const enrolledCourseIds = JSON.parse(localStorage.getItem("enrolledCourses") || "[]");
  const enrolledCourses = courses.filter((course) => enrolledCourseIds.includes(course.id));

  // Mock progress data (in a real app, this would come from a database)
  const getProgress = (courseId: string) => {
    const progress = localStorage.getItem(`progress-${courseId}`);
    return progress ? parseInt(progress) : 0;
  };

  if (enrolledCourses.length === 0) {
    return (
      <div className="min-h-screen bg-background pb-20 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">📚</div>
          <h2 className="text-2xl font-bold mb-2">No courses yet</h2>
          <p className="text-muted-foreground mb-6">
            Start exploring and enroll in courses to begin your learning journey!
          </p>
          <Button
            onClick={() => navigate("/")}
            className="bg-gradient-primary"
          >
            Explore Courses
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">My Courses</h1>
          <p className="text-sm text-muted-foreground">Continue your learning journey</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="space-y-4">
          {enrolledCourses.map((course) => {
            const progress = getProgress(course.id);
            
            return (
              <Card
                key={course.id}
                className="p-4 cursor-pointer hover:shadow-glow-primary transition-all"
                onClick={() => navigate(`/training/${course.id}`)}
              >
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-gradient-primary flex items-center justify-center text-4xl shrink-0">
                    {course.image === "ai-prompting" && "🤖"}
                    {course.image === "vibe-coding" && "💻"}
                    {course.image === "data-analysis" && "📊"}
                    {/* Add similar mapping for all courses */}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1 line-clamp-2">{course.title}</h3>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-1">
                      {course.tutor.name}
                    </p>
                    
                    <div className="space-y-2">
                      <Progress value={progress} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {progress}% complete
                        </span>
                        <Button size="sm" className="h-7 text-xs">
                          <Play className="w-3 h-3 mr-1" />
                          Continue
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};
