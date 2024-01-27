import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-8xl font-bold gradientBg">404</h1>
        <p className="text-4xl font-medium ">Page Not Found</p>
        <Link to="/" className="mt-4 text-xl">
          <Button> Go back home</Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
