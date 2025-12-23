import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NeonBackground from "@/components/NeonBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a backend or email service
    // For now, we'll just show a success message
    toast({
      title: "Message Sent! 🎉",
      description: "Thank you for reaching out! We'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <NeonBackground />
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 flex-1 relative z-10">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-display font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">Get in</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">Touch</span>
            </h1>
            <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
              We'd love to hear from you! Suggest a cartoon or share your feedback. 💬
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 animate-bounce-in">
            <div className="glass rounded-[25px] p-8 space-y-6 shadow-neon border-2 border-primary/30 text-center hover:-translate-y-2 transition-all">
              <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-[20px] w-fit mx-auto shadow-neon">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Email Us</h3>
              <p className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                contact@toonverse.in
              </p>
            </div>

            <div className="glass rounded-[25px] p-8 space-y-6 shadow-cyan border-2 border-secondary/30 text-center hover:-translate-y-2 transition-all">
              <div className="bg-gradient-to-br from-secondary to-accent p-6 rounded-[20px] w-fit mx-auto shadow-cyan">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">Suggestions</h3>
              <p className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
                Have a cartoon request? Let us know below!
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass rounded-[30px] p-10 space-y-8 shadow-neon border-2 border-primary/30 animate-slide-up">
            <div className="space-y-3">
              <Label htmlFor="name" className="text-foreground font-bold text-sm uppercase tracking-wide">
                Your Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border-2 border-border/50 focus:border-secondary focus:shadow-cyan"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="email" className="text-foreground font-bold text-sm uppercase tracking-wide">
                Your Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border-2 border-border/50 focus:border-secondary focus:shadow-cyan"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="message" className="text-foreground font-bold text-sm uppercase tracking-wide">
                Your Message
              </Label>
              <Textarea
                id="message"
                placeholder="Suggest a cartoon, share feedback, or just say hi!"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="border-2 border-border/50 focus:border-secondary focus:shadow-cyan resize-none"
              />
            </div>

            <Button type="submit" variant="gradient" size="lg" className="w-full">
              <Send className="mr-2" />
              Send Message
            </Button>
          </form>

          <div className="glass rounded-[20px] p-6 text-center border-2 border-accent/30 animate-bounce-in">
            <p className="text-sm text-foreground font-semibold">
              💡 <strong className="text-accent">Tip:</strong> Looking for a specific cartoon? Tell us which one and we'll try to add it!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
