import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

const guides = [
  {
    title: "How to invest my 1 million euros?",
    description: "Expert strategies for managing significant wealth and maximizing returns."
  },
  {
    title: "How do I diversify my portfolio?",
    description: "Essential techniques for spreading risk across different asset classes."
  },
  {
    title: "Large Capital investment: what to do?",
    description: "Strategic approaches for deploying substantial capital effectively."
  },
  {
    title: "How to start investing?",
    description: "A beginner's guide to taking your first steps in wealth building."
  },
  {
    title: "Where to invest 2025?",
    description: "Market insights and opportunities for the year ahead."
  },
  {
    title: "BNP Guide to sustainable investment",
    description: "Align your investments with environmental and social values."
  }
];

const GuidesCarousel = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Investment Guides</h2>
          <p className="text-xl text-muted-foreground">
            Expert insights to help you make informed decisions
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {guides.map((guide, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">{guide.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{guide.description}</p>
                    <a href="#" className="inline-flex items-center text-primary hover:underline font-medium">
                      Read guide <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default GuidesCarousel;
