import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Utensils } from "lucide-react";

interface MealPlan {
  time: string;
  meal: string;
  products?: string[];
}

interface PlanAccordionProps {
  dailyPlan?: MealPlan[];
  weeklyPlan?: { day: string; meals: MealPlan[] }[];
  title?: string;
}

const PlanAccordion = ({ dailyPlan, weeklyPlan, title = "Sample Plan" }: PlanAccordionProps) => {
  return (
    <Card className="border-none shadow-wellness">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {dailyPlan && (
            <AccordionItem value="daily">
              <AccordionTrigger>Daily Meal Schedule</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {dailyPlan.map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 rounded-lg bg-muted">
                      <div className="flex items-center gap-2 text-primary">
                        <Clock className="w-5 h-5" />
                        <span className="font-semibold">{item.time}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Utensils className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium">{item.meal}</span>
                        </div>
                        {item.products && item.products.length > 0 && (
                          <div className="ml-6 mt-2">
                            <p className="text-sm text-muted-foreground mb-1">Products:</p>
                            <ul className="list-disc list-inside space-y-1">
                              {item.products.map((product, i) => (
                                <li key={i} className="text-sm text-muted-foreground">{product}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          )}

          {weeklyPlan && (
            <AccordionItem value="weekly">
              <AccordionTrigger>Weekly Schedule</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6">
                  {weeklyPlan.map((dayPlan, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <h4 className="font-bold text-lg mb-3">{dayPlan.day}</h4>
                      <div className="space-y-3">
                        {dayPlan.meals.map((meal, i) => (
                          <div key={i} className="flex gap-4 p-3 rounded-lg bg-muted">
                            <span className="font-semibold text-primary min-w-[80px]">{meal.time}</span>
                            <div className="flex-1">
                              <span className="font-medium">{meal.meal}</span>
                              {meal.products && meal.products.length > 0 && (
                                <div className="mt-1">
                                  <p className="text-xs text-muted-foreground">
                                    {meal.products.join(", ")}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default PlanAccordion;

