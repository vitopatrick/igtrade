import NewsCards from "@/components/news-cards/NewsCards";
// import Newsletter from "@/components/news-cards/NewsLetter";
// import { news } from "@/mock/data";

const MarketNews = async () => {
  const request = await fetch(
    "https://finnhub.io/api/v1/news?category=general&token=cpolhppr01qj9etva440cpolhppr01qj9etva44g"
  );

  const response = await request.json();

  const news = response.slice(0, 6);

  return (
    <>
      {/* news Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-[5%]">
        {news.map((article: any, index: number) => (
          <NewsCards article={article} key={index} />
        ))}
      </div>
      {/* <Newsletter /> */}
    </>
  );
};

export default MarketNews;
