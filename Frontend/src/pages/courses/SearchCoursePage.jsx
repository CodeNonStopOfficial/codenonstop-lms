import React from "react";
import { useSearchParams } from "react-router";

const SearchCoursePage = () => {
  const [category] = useSearchParams();
  const slug = category.get("category");
  return (
    <section className="min-h-screen max-w-full">
      <div>
        <h1>
          {slug
            .replace(/[^a-zA-Z0-9]/g, " ")
            .replace(/\s+/g, " ")
            .trim()
            .replace(/\b\w/g, (c) => c.toUpperCase())}
        </h1>
      </div>
    </section>
  );
};

export default SearchCoursePage;
