import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sophie Laurent",
    role: "Beginner Investor",
    initials: "SL",
    text: "BNP Paribas made investing accessible for someone like me who was just starting out. Their guidance gave me the confidence to take my first steps into wealth building.",
  },
  {
    name: "Alexandre Dubois",
    role: "HNW Investor",
    initials: "AD",
    text: "The level of sophistication in portfolio management is exceptional. My private banker understands the complexity of my assets and delivers strategic advice that aligns with my long-term vision.",
  },
  {
    name: "Marie-Claire Beaumont",
    role: "Retiree",
    initials: "MB",
    text: "After retirement, I needed a partner I could trust to preserve my wealth. BNP's tailored approach ensures my assets are protected while generating steady income for my lifestyle.",
  },
  {
    name: "Thomas Mercier",
    role: "Entrepreneur",
    initials: "TM",
    text: "Selling my company was just the beginning. BNP helped me structure my newfound wealth intelligently, optimizing taxes and creating a diversified portfolio for the next chapter.",
  },
  {
    name: "Julien Moreau",
    role: "First Time Investor",
    initials: "JM",
    text: "I was overwhelmed by all the investment options available. The team at BNP took time to educate me and built a portfolio that matches my goals and risk tolerance perfectly.",
  },
  {
    name: "Camille Rousseau",
    role: "Impact Investor",
    initials: "CR",
    text: "The Give Back Program is extraordinary. Not only am I growing my wealth, but I'm making a real difference. Being able to match my investments with meaningful impact initiatives makes BNP the perfect partner.",
  },
];

const ClientTestimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg">
            Trusted by investors across all wealth journeys
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem 
                key={index} 
                id={
                  testimonial.role === "Entrepreneur" 
                    ? "entrepreneur-testimonial" 
                    : testimonial.role === "Impact Investor"
                    ? "impact-investor-testimonial"
                    : undefined
                }
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Quote className="h-8 w-8 text-primary mb-4" />
                    <p className="text-muted-foreground mb-6 flex-grow italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
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

export default ClientTestimonials;
