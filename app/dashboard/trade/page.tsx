'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ArrowUpCircle,
  ArrowDownCircle,
  Activity,
  Clock,
  Target,
  RefreshCw,
} from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'sonner'

interface Asset {
  symbol: string
  name: string
  price: number
  change: number
  trend: 'up' | 'down'
  coinId: string
}

const TradePage = () => {
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy')
  const [selectedAsset, setSelectedAsset] = useState('BTC/USD')
  const [assets, setAssets] = useState<Asset[]>([
    {
      symbol: 'BTC/USD',
      name: 'Bitcoin',
      price: 0,
      change: 0,
      trend: 'up',
      coinId: 'bitcoin',
    },
    {
      symbol: 'ETH/USD',
      name: 'Ethereum',
      price: 0,
      change: 0,
      trend: 'up',
      coinId: 'ethereum',
    },
    {
      symbol: 'BNB/USD',
      name: 'Binance Coin',
      price: 0,
      change: 0,
      trend: 'up',
      coinId: 'binancecoin',
    },
    {
      symbol: 'SOL/USD',
      name: 'Solana',
      price: 0,
      change: 0,
      trend: 'up',
      coinId: 'solana',
    },
    {
      symbol: 'XRP/USD',
      name: 'Ripple',
      price: 0,
      change: 0,
      trend: 'up',
      coinId: 'ripple',
    },
    {
      symbol: 'ADA/USD',
      name: 'Cardano',
      price: 0,
      change: 0,
      trend: 'up',
      coinId: 'cardano',
    },
    {
      symbol: 'DOGE/USD',
      name: 'Dogecoin',
      price: 0,
      change: 0,
      trend: 'up',
      coinId: 'dogecoin',
    },
    {
      symbol: 'MATIC/USD',
      name: 'Polygon',
      price: 0,
      change: 0,
      trend: 'up',
      coinId: 'matic-network',
    },
  ])
  const [loading, setLoading] = useState(true)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)

  // Fetch real-time prices from CoinGecko API
  const fetchPrices = useCallback(async () => {
    try {
      const coinIds = assets.map((a) => a.coinId).join(',')
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coinIds}&vs_currencies=usd&include_24hr_change=true`,
      )
      const data = await response.json()

      const updatedAssets = assets.map((asset) => {
        const coinData = data[asset.coinId]
        if (coinData) {
          const change = coinData.usd_24h_change || 0
          return {
            ...asset,
            price: coinData.usd,
            change: Number(change.toFixed(2)),
            trend: change >= 0 ? ('up' as const) : ('down' as const),
          }
        }
        return asset
      })

      setAssets(updatedAssets)
      setLoading(false)
      setLastUpdate(new Date())
    } catch (error) {
      console.error('Error fetching prices:', error)
      toast.error('Failed to fetch real-time prices')
      setLoading(false)
    }
  }, [assets])

  // Fetch prices on mount and every 30 seconds
  useEffect(() => {
    fetchPrices()
    const interval = setInterval(fetchPrices, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [fetchPrices])

  const handleTrade = () => {
    toast.success(
      `${tradeType === 'buy' ? 'Buy' : 'Sell'} order placed successfully!`,
    )
  }

  const currentAsset = assets.find((a) => a.symbol === selectedAsset)

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Trading</h1>
            <p className="text-muted-foreground">
              Execute trades and manage your positions
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={fetchPrices}
          disabled={loading}
          className="gap-2"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          <span className="hidden sm:inline">Refresh</span>
        </Button>
      </div>

      {/* Last Update Indicator */}
      {lastUpdate && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span>
            Last updated: {lastUpdate.toLocaleTimeString()} • Auto-refresh every
            30s
          </span>
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Market Overview */}
        <div className="lg:col-span-2 space-y-6">
          {/* Asset Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {loading && assets.every((a) => a.price === 0) ? (
              // Loading skeleton
              <>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <Card key={i} className="border-border/50">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <div className="h-5 w-20 bg-muted animate-pulse rounded" />
                          <div className="h-4 w-16 bg-muted animate-pulse rounded" />
                        </div>
                        <div className="h-6 w-16 bg-muted animate-pulse rounded-full" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="h-8 w-32 bg-muted animate-pulse rounded" />
                    </CardContent>
                  </Card>
                ))}
              </>
            ) : (
              assets.map((asset) => (
                <Card
                  key={asset.symbol}
                  className={`border-border/50 cursor-pointer transition-all hover:scale-[1.02] ${
                    selectedAsset === asset.symbol ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedAsset(asset.symbol)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">
                          {asset.symbol}
                        </CardTitle>
                        <CardDescription className="text-xs">
                          {asset.name}
                        </CardDescription>
                      </div>
                      <Badge
                        variant={
                          asset.trend === 'up' ? 'default' : 'destructive'
                        }
                        className="gap-1"
                      >
                        {asset.trend === 'up' ? (
                          <TrendingUp className="w-3 h-3" />
                        ) : (
                          <TrendingDown className="w-3 h-3" />
                        )}
                        {asset.change > 0 ? '+' : ''}
                        {asset.change}%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      $
                      {asset.price
                        ? asset.price.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })
                        : '0.00'}
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Quick Stats */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Market Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4" />
                    <span>24h Volume</span>
                  </div>
                  <p className="text-xl font-bold">$2.4B</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Activity className="w-4 h-4" />
                    <span>Active Trades</span>
                  </div>
                  <p className="text-xl font-bold">1,247</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Target className="w-4 h-4" />
                    <span>Avg. Return</span>
                  </div>
                  <p className="text-xl font-bold text-success">+8.3%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trading Panel */}
        <div>
          <Card className="border-border/50 sticky top-6">
            <CardHeader>
              <CardTitle>Place Order</CardTitle>
              <CardDescription>
                {currentAsset?.name} • $
                {currentAsset?.price
                  ? currentAsset.price.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  : '0.00'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Trade Type Tabs */}
              <Tabs
                defaultValue="buy"
                onValueChange={(v) => setTradeType(v as 'buy' | 'sell')}
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="buy" className="gap-2">
                    <ArrowUpCircle className="w-4 h-4" />
                    Buy
                  </TabsTrigger>
                  <TabsTrigger value="sell" className="gap-2">
                    <ArrowDownCircle className="w-4 h-4" />
                    Sell
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="buy" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label>Asset</Label>
                    <Select
                      value={selectedAsset}
                      onValueChange={setSelectedAsset}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {assets.map((asset) => (
                          <SelectItem key={asset.symbol} value={asset.symbol}>
                            {asset.symbol}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Amount</Label>
                    <Input type="number" placeholder="0.00" />
                  </div>

                  <div className="space-y-2">
                    <Label>Total (USD)</Label>
                    <Input type="number" placeholder="0.00" />
                  </div>

                  <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Estimated Fee
                      </span>
                      <span className="font-medium">$2.50</span>
                    </div>
                  </div>

                  <Button
                    className="w-full h-11 bg-gradient-to-r from-primary to-purple-600"
                    onClick={handleTrade}
                  >
                    <ArrowUpCircle className="w-4 h-4 mr-2" />
                    Place Buy Order
                  </Button>
                </TabsContent>

                <TabsContent value="sell" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label>Asset</Label>
                    <Select
                      value={selectedAsset}
                      onValueChange={setSelectedAsset}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {assets.map((asset) => (
                          <SelectItem key={asset.symbol} value={asset.symbol}>
                            {asset.symbol}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Amount</Label>
                    <Input type="number" placeholder="0.00" />
                  </div>

                  <div className="space-y-2">
                    <Label>Total (USD)</Label>
                    <Input type="number" placeholder="0.00" />
                  </div>

                  <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Estimated Fee
                      </span>
                      <span className="font-medium">$2.50</span>
                    </div>
                  </div>

                  <Button
                    variant="destructive"
                    className="w-full h-11"
                    onClick={handleTrade}
                  >
                    <ArrowDownCircle className="w-4 h-4 mr-2" />
                    Place Sell Order
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default TradePage
