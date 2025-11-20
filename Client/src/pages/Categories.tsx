import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Wrench,
  HardHat,
  Package,
  Zap,
  Construction,
  ArrowRight,
} from "lucide-react";

interface CategoryData {
  name: string;
  icon: any;
  description: string;
  productCount?: number;
  gradient: string;
}

// Category configuration - all data in one place
const CATEGORY_CONFIG: CategoryData[] = [
  {
    name: "Electrical Components",
    icon: Zap,
    description: "Comprehensive electrical solutions including wiring, switches, circuit breakers, and lighting components for industrial and commercial applications.",
    gradient: "from-yellow-500/20 via-amber-500/20 to-orange-500/20",
  },
  {
    name: "Tools & Equipment",
    icon: Wrench,
    description: "Professional-grade tools and equipment for construction, maintenance, and industrial operations.",
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
  },
  {
    name: "Industrial Supplies",
    icon: Package,
    description: "Essential industrial supplies including tapes, adhesives, lubricants, and cleaning solutions for manufacturing and maintenance.",
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
  },
  {
    name: "Construction Materials",
    icon: Construction,
    description: "High-quality construction materials including pipes, fittings, and building consumables for all types of projects.",
    gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
  },
  {
    name: "Safety Equipment",
    icon: Shield,
    description: "Complete range of safety solutions including fire protection tools and workplace safety supplies.",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
  },
  {
    name: "PPE",
    icon: HardHat,
    description: "Personal Protective Equipment including helmets, gloves, safety shoes, and protective clothing for worker safety.",
    gradient: "from-indigo-500/20 via-purple-500/20 to-pink-500/20",
  },
  {
    name: "Other",
    icon: Package,
    description: "Additional products and specialized supplies to meet your unique industrial and construction needs.",
    gradient: "from-gray-500/20 via-slate-500/20 to-zinc-500/20",
  },
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/services?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <Header />

      {/* Spacer for header */}
      <div className="pt-28"></div>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Browse Our Product Categories
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of industrial supplies, safety
            equipment, and construction materials. Find exactly what you need
            for your project.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CATEGORY_CONFIG.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={category.name}
                  className="group cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-border/50 hover:border-primary/30 overflow-hidden"
                  onClick={() => handleCategoryClick(category.name)}
                >
                  <CardHeader className="pb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    >
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {category.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      View Products
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Can't Find What You're Looking For?"
        description="Contact us directly and our team will help you find the right products for your specific needs."
      />

      <Footer />
    </div>
  );
};

export default Categories;
