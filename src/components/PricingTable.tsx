import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PricingTier {
  name: string;
  duration: string;
  price: string | number;
  features: string[];
  popular?: boolean;
}

interface PricingTableProps {
  tiers: PricingTier[];
  onSelect?: (tier: PricingTier) => void;
}

const PricingTable = ({ tiers, onSelect }: PricingTableProps) => {
  const navigate = useNavigate();

  const handleSelect = (tier: PricingTier) => {
    if (onSelect) {
      onSelect(tier);
    } else {
      navigate("/book-consultation");
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {tiers.map((tier, index) => (
        <Card
          key={index}
          className={`border-none shadow-wellness relative ${
            tier.popular ? "ring-2 ring-primary scale-105" : ""
          }`}
        >
          {tier.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
          )}
          <CardHeader>
            <CardTitle className="text-2xl">{tier.name}</CardTitle>
            <div className="mt-4">
              <span className="text-4xl font-bold">{typeof tier.price === "number" ? `₹${tier.price}` : tier.price}</span>
              {typeof tier.price === "number" && (
                <span className="text-muted-foreground ml-2">/{tier.duration}</span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-2">{tier.duration}</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              onClick={() => handleSelect(tier)}
              className={`w-full ${tier.popular ? "gradient-wellness" : ""}`}
              variant={tier.popular ? "default" : "outline"}
            >
              {typeof tier.price === "string" && tier.price.includes("Contact") ? "Contact Us" : "Get Started"}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PricingTable;

