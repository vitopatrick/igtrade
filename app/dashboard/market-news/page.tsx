import NewsCards from '@/components/news-cards/NewsCards'
import { Newspaper, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const MarketNews = async () => {
  const request = await fetch(
    'https://finnhub.io/api/v1/news?category=general&token=cpolhppr01qj9etva440cpolhppr01qj9etva44g',
    { next: { revalidate: 300 } }, // Revalidate every 5 minutes
  )

  const response = await request.json()
  const news = response.slice(0, 9)

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Newspaper className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Market News</h1>
          <p className="text-muted-foreground">
            Stay updated with the latest financial news and market insights
          </p>
        </div>
      </div>

      {/* Featured Banner */}
      <Card className="border-border/50 bg-gradient-to-br from-primary/10 to-purple-600/10">
        <CardContent className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Live Market Updates</h3>
              <p className="text-sm text-muted-foreground">
                Real-time news from trusted financial sources
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article: any, index: number) => (
          <NewsCards article={article} key={index} />
        ))}
      </div>

      {/* Load More Section */}
      {news.length === 0 && (
        <Card className="border-border/50">
          <CardContent className="p-12 text-center">
            <Newspaper className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No news available</h3>
            <p className="text-muted-foreground">
              Check back later for the latest market updates
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default MarketNews
