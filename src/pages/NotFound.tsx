import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NeonBackground from "@/components/NeonBackground";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative">
      <NeonBackground />
      <div className="text-center space-y-8 animate-bounce-in relative z-10 px-4">
        <div className="text-9xl md:text-[12rem] font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent drop-shadow-2xl">
          404
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">Oops! Page not found</h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-semibold max-w-md mx-auto">
          Looks like this cartoon escaped! 🏃‍♂️💨
        </p>
        <Button variant="gradient" size="lg" onClick={() => navigate("/")}>
          <Home className="mr-2" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
