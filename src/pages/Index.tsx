import BNPHeader from "@/components/BNPHeader";
import BNPHero from "@/components/BNPHero";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BNPHeader />
      <main>
        <BNPHero />
        {/* Additional content sections can be added here */}
      </main>
    </div>
  );
};

export default Index;
