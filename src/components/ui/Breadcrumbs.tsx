import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface Breadcrumb {
  label: string;
  path: string;
}

const Breadcrumbs = () => {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);

  useEffect(() => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const breadcrumbsArray = pathSegments.map((segment, index) => ({
      label: segment,
      path: `/${pathSegments.slice(0, index + 1).join("/")}`,
    }));
    setBreadcrumbs(breadcrumbsArray);
  }, [location]);

  return (
    <div className=" ">
      <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap">
        <Link to="/" className="text-gray-600 hover:text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>
        {breadcrumbs.map((breadcrumb, index) => (
          <div key={breadcrumb.path}>
            <span className="mx-5 text-gray-500 dark:text-gray-300">/</span>
            <Link
              to={breadcrumb.path}
              className={`text-${
                index === breadcrumbs.length - 1 ? "primary" : "gray-600"
              } hover:text-primary`}
            >
              {breadcrumb.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
