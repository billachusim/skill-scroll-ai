import { Heart, Users, Star, Clock } from "lucide-react";
import { Course } from "@/data/courses";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      onClick={() => navigate(`/course/${course.id}`)}
      className="relative overflow-hidden bg-card border-border cursor-pointer transition-all hover:scale-[1.02] hover:shadow-glow-primary"
    >
      <div className="aspect-video relative overflow-hidden bg-gradient-primary">
        <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50">
          {course.image === "ai-prompting" && "🤖"}
          {course.image === "vibe-coding" && "💻"}
          {course.image === "data-analysis" && "📊"}
          {course.image === "lovable" && "💜"}
          {course.image === "replit" && "🔧"}
          {course.image === "react" && "⚛️"}
          {course.image === "typescript" && "📘"}
          {course.image === "nodejs" && "🟢"}
          {course.image === "uiux" && "🎨"}
          {course.image === "git" && "🔀"}
          {course.image === "python" && "🐍"}
          {course.image === "sql" && "🗄️"}
          {course.image === "tailwind" && "🎨"}
          {course.image === "nextjs" && "▲"}
          {course.image === "docker" && "🐳"}
          {course.image === "aws" && "☁️"}
          {course.image === "javascript" && "📜"}
          {course.image === "mongodb" && "🍃"}
          {course.image === "api" && "🔌"}
          {course.image === "figma" && "🎨"}
          {course.image === "vue" && "💚"}
          {course.image === "firebase" && "🔥"}
          {course.image === "svelte" && "🧡"}
          {course.image === "graphql" && "💗"}
          {course.image === "redux" && "💜"}
          {course.image === "testing" && "🧪"}
          {course.image === "webpack" && "📦"}
          {course.image === "accessibility" && "♿"}
          {course.image === "stripe" && "💳"}
          {course.image === "ml" && "🤖"}
          {course.image === "shopify" && "🛍️"}
          {course.image === "wordpress" && "📝"}
          {course.image === "react-native" && "📱"}
          {course.image === "flutter" && "🦋"}
          {course.image === "electron" && "⚡"}
          {course.image === "rust" && "🦀"}
          {course.image === "golang" && "🐹"}
          {course.image === "kubernetes" && "☸️"}
          {course.image === "cicd" && "🔄"}
          {course.image === "blockchain" && "⛓️"}
          {course.image === "security" && "🔒"}
          {course.image === "seo" && "🔍"}
          {course.image === "ai-marketing" && "📢"}
          {course.image === "ai-content" && "✍️"}
          {course.image === "video-editing" && "🎬"}
          {course.image === "blender" && "🎲"}
          {course.image === "unity" && "🎮"}
          {course.image === "unreal" && "🎮"}
          {course.image === "product-management" && "📋"}
          {course.image === "startup" && "🚀"}
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-lg leading-tight line-clamp-2">
            {course.title}
          </h3>
          {course.price === 0 && (
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-success text-white shrink-0">
              FREE
            </span>
          )}
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {course.description}
        </p>
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{course.studentsCount.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-warning text-warning" />
            <span>{course.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Heart className="w-4 h-4" />
            <span className="text-sm">{course.likes.toLocaleString()}</span>
          </div>
          <div className="font-bold text-lg">
            {course.price === 0 ? (
              <span className="text-success">FREE</span>
            ) : (
              <span>₦{course.price.toLocaleString()}</span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
