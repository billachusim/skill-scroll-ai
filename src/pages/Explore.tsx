import { useState } from "react";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/courses";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import logo from "@/assets/logo.png";

export const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFreeOnly, setShowFreeOnly] = useState(false);

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = !showFreeOnly || course.price === 0;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="SkillFlow" className="w-10 h-10" />
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                SkillFlow
              </h1>
              <p className="text-xs text-muted-foreground">Master tech skills, one scroll at a time</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant={showFreeOnly ? "default" : "outline"}
              size="icon"
              onClick={() => setShowFreeOnly(!showFreeOnly)}
              className={showFreeOnly ? "bg-gradient-primary" : ""}
            >
              <SlidersHorizontal className="w-4 h-4" />
            </Button>
          </div>
          
          {showFreeOnly && (
            <div className="mt-2 text-xs text-muted-foreground">
              Showing free courses only
            </div>
          )}
        </div>
      </header>

      {/* Course Grid */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No courses found</p>
          </div>
        )}
      </main>
    </div>
  );
};
