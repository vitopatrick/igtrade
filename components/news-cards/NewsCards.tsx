import React from "react";

const NewsCards = ({ article }: any) => {
  return (
    <div className="shadow-sm border rounded-xl p-6">
      <img
        className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
        src={article.image}
        alt="Image Size 720x400"
      />
      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font uppercase">
        {article.category}
      </h3>
      <h2 className="text-lg text-gray-900 dark:text-white font-medium title-font mb-4 line-clamp-2">
        {article.headline}
      </h2>
      <p className="leading-relaxed text-base line-clamp-2 text-neutral-500">
        {article.summary}
      </p>
      <a
        href={article.url}
        target="_blank"
        className="text-purple-600 underline mt-4 inline-block"
      >
        Read More
      </a>
    </div>
  );
};

export default NewsCards;
