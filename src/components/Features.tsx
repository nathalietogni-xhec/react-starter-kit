import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Palette, Code2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built with Vite for instant HMR and optimized builds. Experience blazing fast development.",
  },
  {
    icon: Shield,
    title: "Type Safe",
    description: "Full TypeScript support with strict typing. Catch errors before they reach production.",
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Tailwind CSS with a custom design system. Shadcn components ready to customize.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Well-structured, maintainable code following React best practices and patterns.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A solid foundation with modern tools and practices built in from day one.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="border-2 transition-all duration-300 hover:shadow-lg hover:border-accent/50 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
