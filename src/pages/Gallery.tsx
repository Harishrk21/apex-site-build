import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  // Placeholder gallery items
  const galleryItems = [
    { id: 1, category: "Centre Interior", description: "Our welcoming consultation area" },
    { id: 2, category: "Community Events", description: "Monthly wellness workshop" },
    { id: 3, category: "Success Celebration", description: "Client milestone celebration" },
    { id: 4, category: "Centre Interior", description: "Product display area" },
    { id: 5, category: "Team", description: "Our certified coaches" },
    { id: 6, category: "Community Events", description: "Group fitness session" },
    { id: 7, category: "Centre Interior", description: "Private consultation room" },
    { id: 8, category: "Community Events", description: "Nutrition workshop" },
    { id: 9, category: "Success Celebration", description: "Transformation ceremony" },
  ];

  return (
    <>
      <SEO
        title="Gallery - New Life Wellness Centre Photos & Community Events | Kolathur, Chennai"
        description="Explore New Life Wellness Centre - the best wellness centre and nutrition centre in Kolathur, Chennai, Villivakkam. View our facility photos, community events, success celebrations, wellness workshops, and centre interior. Visit our wellness centre in Kolathur, Chennai."
        canonical="/gallery"
        keywords="Wellness Centre Photos Kolathur, Herbalife Centre Chennai, Community Events Villivakkam, Wellness Workshops Kolathur, Centre Interior Chennai, Wellness Centre Gallery Villivakkam, Nutrition Centre Photos Kolathur, Wellness Events Chennai"
      />

      {/* Hero */}
      <section className="py-20 gradient-wellness text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">New Life Wellness Centre Gallery - Kolathur, Chennai</h1>
          <p className="text-xl text-white/90">
            A glimpse into our wellness community at the best wellness centre and nutrition centre in Kolathur, Chennai, and Villivakkam
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Wellness Centre Space & Community in Kolathur, Chennai</h2>
            <p className="text-xl text-muted-foreground">
              Where transformation happens at New Life Wellness Centre - the best wellness and nutrition centre in Kolathur, Chennai, Villivakkam
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <Card key={item.id} className="overflow-hidden border-none shadow-wellness hover:shadow-wellness-lg transition-all duration-300 group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                  🌿
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold text-primary mb-1">{item.category}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Info */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Centre Interior",
                description: "Our modern, welcoming wellness centre designed for your comfort and privacy",
              },
              {
                title: "Community Events",
                description: "Regular workshops, fitness sessions, and wellness education programs",
              },
              {
                title: "Success Stories",
                description: "Celebrating client transformations and milestone achievements",
              },
            ].map((category, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Visit Us in Person</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Experience our welcoming wellness centre in Kolathur, Chennai
          </p>
          <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors">
            Get Directions
          </a>
        </div>
      </section>
    </>
  );
};

export default Gallery;
