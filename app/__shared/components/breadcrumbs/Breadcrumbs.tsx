import { Breadcrumb } from "../../types";
import Link from "next/link";
import clsx from "clsx";

const Breadcrumbs = ({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) => {
  const last = breadcrumbs.length - 1;
  return (
    <nav aria-label="Breadcrumb">
      <ol
        role="list"
        className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        {breadcrumbs.map((breadcrumb, idx) => {
          return (
            <li key={breadcrumb.id}>
              <div className="flex items-center">
                <Link
                  href={breadcrumb.href}
                  aria-current={idx === last ? "page" : undefined}
                  className={clsx({
                    "text-sm font-medium text-gray-500 hover:text-gray-600":
                      idx === last,
                    "mr-2 text-sm font-medium text-gray-900": idx !== last,
                  })}
                >
                  {breadcrumb.name}
                </Link>
                {idx !== last && (
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
