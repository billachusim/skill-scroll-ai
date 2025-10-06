import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Explore } from "./pages/Explore";
import { CourseDetail } from "./pages/CourseDetail";
import { MyCourses } from "./pages/MyCourses";
import { Training } from "./pages/Training";
import { Profile } from "./pages/Profile";
import { Auth } from "./pages/Auth";
import { BottomNav } from "./components/BottomNav";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Explore /><BottomNav /></>} />
          <Route path="/course/:id" element={<><CourseDetail /><BottomNav /></>} />
          <Route path="/my-courses" element={<><MyCourses /><BottomNav /></>} />
          <Route path="/training/:courseId" element={<Training />} />
          <Route path="/profile" element={<><Profile /><BottomNav /></>} />
          <Route path="/auth" element={<Auth />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
