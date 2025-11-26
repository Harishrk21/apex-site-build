import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEOHelmet";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO
        title="Page Not Found - 404 | New Life Wellness Centre Kolathur, Chennai"
        description="The page you're looking for doesn't exist. Return to New Life Wellness Centre - the best wellness centre and nutrition centre in Kolathur, Chennai, Villivakkam."
        canonical="/404"
        keywords="404, Page Not Found, Wellness Centre Kolathur"
      />
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Return to Home - New Life Wellness Centre
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
