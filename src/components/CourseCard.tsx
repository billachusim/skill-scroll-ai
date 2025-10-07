import { Heart, Users, Star, Clock } from "lucide-react";
import { Course } from "@/data/courses";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface CourseCardProps {
  course: Course;
  fullScreen?: boolean;
}

export const CourseCard = ({ course, fullScreen = false }: CourseCardProps) => {
  const navigate = useNavigate();

  if (fullScreen) {
    return (
      <div 
        onClick={() => navigate(`/course/${course.id}`)}
        className="h-full w-full cursor-pointer flex flex-col bg-card"
      >
        {/* Large Video/Image Section */}
        <div className="flex-1 relative overflow-hidden bg-gradient-primary">
          {course.video ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={course.video} type="video/mp4" />
            </video>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-60">
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
          )}
          {course.price === 0 && (
            <div className="absolute top-4 right-4 z-10">
              <span className="text-sm font-bold px-3 py-1.5 rounded-full bg-success text-white shadow-lg">
                FREE
              </span>
            </div>
          )}
        </div>
        
        {/* Content Section */}
        <div className="p-6 space-y-4 bg-card border-t border-border">
          <h2 className="font-bold text-2xl leading-tight">
            {course.title}
          </h2>
          
          <p className="text-muted-foreground line-clamp-2">
            {course.description}
          </p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>{course.studentsCount.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-warning text-warning" />
              <span>{course.rating}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Heart className="w-5 h-5" />
              <span className="text-base">{course.likes.toLocaleString()}</span>
            </div>
            <div className="font-bold text-2xl">
              {course.price === 0 ? (
                <span className="text-success">FREE</span>
              ) : (
                <span>₦{course.price.toLocaleString()}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Card 
      onClick={() => navigate(`/course/${course.id}`)}
      className="relative overflow-hidden bg-card border-border cursor-pointer transition-all hover:scale-[1.02] hover:shadow-glow-primary"
    >
      <div className="aspect-video relative overflow-hidden bg-gradient-primary">
        {course.video ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={course.video} type="video/mp4" />
          </video>
        ) : (
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
        )}
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
