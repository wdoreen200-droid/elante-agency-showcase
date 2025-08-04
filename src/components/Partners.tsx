import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { partners } from "@/data/constants";

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We collaborate with industry leaders to deliver exceptional solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner) => (
            <Card 
              key={partner.id} 
              className="group hover:shadow-card transition-all duration-300 hover:scale-105 border-border bg-card text-center"
            >
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="w-10 h-10 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <CardTitle className="text-lg font-semibold text-card-foreground">
                  {partner.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground">
                  {partner.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;