import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductType {
  name: string;
  benefits: string[];
  icon?: React.ReactNode;
}

interface ProductTypeBlockProps {
  types: ProductType[];
  title?: string;
}

const ProductTypeBlock = ({ types, title = "Product Categories & How They Help" }: ProductTypeBlockProps) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground">
            Discover how different Herbalife products support your wellness goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((type, index) => (
            <Card key={index} className="border-none shadow-wellness hover:shadow-wellness-lg transition-all">
              <CardHeader>
                {type.icon && (
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
                    {type.icon}
                  </div>
                )}
                <CardTitle className="text-xl">{type.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductTypeBlock;

