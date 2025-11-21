import { Button } from "@/components/ui/button";
import ceoImage from "@/assets/ceo-quote.jpg";

const CEOQuote = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Quote Card */}
          <div className="bg-background p-12 shadow-lg">
            <div className="mb-6">
              <span className="text-6xl font-serif text-foreground">"</span>
            </div>
            
            <p className="text-2xl text-foreground leading-relaxed mb-8">
              Our Wealth Management business is at the crossroads of many of the Group's entities and areas of expertise. Our aim is to bring all the bank's capabilities to the customer.
            </p>
            
            <div className="mb-6 text-right">
              <span className="text-6xl font-serif text-foreground">"</span>
            </div>
            
            <p className="text-sm text-muted-foreground mb-8">
              Vincent Lecomte, CEO, BNP Paribas Wealth Management
            </p>
            
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              READ THE INTERVIEW
            </Button>
          </div>

          {/* CEO Image */}
          <div className="overflow-hidden">
            <img
              src={ceoImage}
              alt="Vincent Lecomte, CEO of BNP Paribas Wealth Management"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOQuote;
