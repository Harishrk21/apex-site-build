import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CoachProfileProps {
  photo?: string;
  name: string;
  certifications: string[];
  yearsOfExperience: number;
  bio: string;
}

const CoachProfile = ({ photo, name, certifications, yearsOfExperience, bio }: CoachProfileProps) => {
  const navigate = useNavigate();

  return (
    <Card className="border-none shadow-wellness-lg">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {photo && (
            <div className="flex-shrink-0">
              <img
                src={photo}
                alt={name}
                className="w-48 h-48 rounded-full object-cover border-4 border-primary/20"
              />
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-4">{name}</h3>
            
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="w-5 h-5 text-primary" />
                <span className="font-semibold">{yearsOfExperience}+ Years Experience</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-2 text-lg">Certifications:</h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">{bio}</p>

            <Button
              onClick={() => navigate("/book-consultation")}
              size="lg"
              className="gradient-wellness shadow-wellness-lg"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Book a Call with the Coach
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoachProfile;

