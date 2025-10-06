import { Home, BookOpen, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto">
        <button
          onClick={() => navigate("/")}
          className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
            isActive("/") ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs font-medium">Explore</span>
        </button>
        
        <button
          onClick={() => navigate("/my-courses")}
          className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
            isActive("/my-courses") ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <BookOpen className="w-6 h-6" />
          <span className="text-xs font-medium">My Courses</span>
        </button>
        
        <button
          onClick={() => navigate("/profile")}
          className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
            isActive("/profile") ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <User className="w-6 h-6" />
          <span className="text-xs font-medium">Profile</span>
        </button>
      </div>
    </nav>
  );
};
