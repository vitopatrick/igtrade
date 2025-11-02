'use client'

import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Clock } from 'lucide-react'

const NewsCards = ({ article }: any) => {
  const timeAgo = (timestamp: number) => {
    const now = Date.now() / 1000
    const diff = now - timestamp
    const hours = Math.floor(diff / 3600)
    if (hours < 24) return `${hours}h ago`
    const days = Math.floor(hours / 24)
    return `${days}d ago`
  }

  return (
    <Card className="border-border/50 hover:shadow-lg transition-all group overflow-hidden h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img
          className="h-48 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          src={article.image}
          alt={article.headline}
          onError={(e) => {
            ;(e.target as HTMLImageElement).src =
              'https://via.placeholder.com/400x300?text=No+Image'
          }}
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-primary/90 backdrop-blur-sm">
            {article.category || 'General'}
          </Badge>
        </div>
      </div>

      <CardHeader className="flex-1">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
          <Clock className="w-3 h-3" />
          <span>{timeAgo(article.datetime)}</span>
          {article.source && (
            <>
              <span>•</span>
              <span className="font-medium">{article.source}</span>
            </>
          )}
        </div>
        <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
          {article.headline}
        </CardTitle>
        <CardDescription className="line-clamp-3 mt-2">
          {article.summary}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button
            variant="outline"
            className="w-full group/btn hover:bg-primary hover:text-primary-foreground"
          >
            Read Full Article
            <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </a>
      </CardContent>
    </Card>
  )
}

export default NewsCards
