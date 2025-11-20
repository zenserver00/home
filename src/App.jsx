import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Users, Server, Gamepad2, MessageCircle, Copy, ExternalLink, Shield, Clock, Globe } from 'lucide-react'
import './App.css'

// Import images
import zenLogo from './assets/zen_server_logo.png'
import zenHero from './assets/zen_server_hero.png'
import zenCommunity from './assets/zen_server_community.png'
import multiplayerImage from './assets/search_images/Zjt7uvF5jEMn.jpg'
import darkThemeImage from './assets/search_images/JGYpAlK33vK4.jpg'
import crossplayImage from './assets/search_images/mwbR42sucG3G.jpg'

function App() {
  const [copied, setCopied] = useState(false)
  const [onlineCount, setOnlineCount] = useState(1)

  const beserverAddress = "zenserver.ddo.jp"
  const serverAddress = "zenserver.ddo.jp:19132"
  const discordLink = "https://discord.gg/StjyQaMHAe"

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    // Simulate online count updates
    const interval = setInterval(() => {
      setOnlineCount(prev => prev + Math.floor(Math.random() * 3) - 1)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-green-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={zenLogo} alt="Zen Server" className="h-10 w-auto" />
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-green-400 transition-colors">ホーム</a>
            <a href="#about" className="hover:text-green-400 transition-colors">サーバー紹介</a>
            <a href="#join" className="hover:text-green-400 transition-colors">参加方法</a>
            <a href="#rules" className="hover:text-green-400 transition-colors">利用規約</a>
            <a href="#gallery" className="hover:text-green-400 transition-colors">ギャラリー</a>
          </nav>
          <Button 
            onClick={() => window.open(discordLink, '_blank')}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Discord
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={zenHero} 
            alt="Zen Server Hero" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-green-400 bg-clip-text text-transparent">
            ZEN SERVER
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            究極のMinecraftクロスプレイ体験へようこそ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-500/30">
              <Users className="w-4 h-4 mr-2" />
              オンライン: {onlineCount}人
            </Badge>
            <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-500/30">
              <Server className="w-4 h-4 mr-2" />
              24/7稼働
            </Badge>
            <Badge variant="secondary" className="bg-purple-600/20 text-purple-400 border-purple-500/30">
              <Globe className="w-4 h-4 mr-2" />
              クロスプレイ対応
            </Badge>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              onClick={() => document.getElementById('join').scrollIntoView({ behavior: 'smooth' })}
            >
              <Gamepad2 className="w-5 h-5 mr-2" />
              今すぐ参加
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-green-500 text-green-400 hover:bg-green-500/10 px-8 py-3"
              onClick={() => window.open(discordLink, '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Discordに参加
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">サーバー紹介</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Zenサーバーは、Java版とBedrock版の両方のプレイヤーが一緒に楽しめる
              最高のMinecraftクロスプレイ体験を提供します
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-800/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-white">クロスプレイ対応</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Java版、Bedrock版、モバイル版など、あらゆるプラットフォームから参加可能
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">24/7稼働</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  高性能サーバーで安定した24時間稼働。いつでも冒険を楽しめます
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">安全な環境</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  厳格なルールと優秀なモデレーターチームで、安全で楽しい環境を提供
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <img 
              src={zenCommunity} 
              alt="Community" 
              className="mx-auto rounded-lg shadow-2xl max-w-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">参加方法</h2>
            <p className="text-xl text-gray-300">
              簡単な手順でZenサーバーに参加できます
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Java Edition */}
            <Card className="bg-gray-800/50 border-orange-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <img src={crossplayImage} alt="Java Edition" className="w-8 h-8 mr-3 rounded" />
                  Java Edition
                </CardTitle>
                <CardDescription className="text-gray-300">
                  PC版Minecraftからの参加方法
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="text-sm text-gray-400 mb-2">サーバーアドレス:</p>
                  <div className="flex items-center justify-between bg-gray-700/50 p-3 rounded">
                    <code className="text-green-400 font-mono">{serverAddress}</code>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={() => copyToClipboard(serverAddress)}
                      className="text-gray-400 hover:text-white"
                    >
                      {copied ? "コピー済み!" : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p>1. Minecraftを起動</p>
                  <p>2. 「マルチプレイ」を選択</p>
                  <p>3. 「サーバーを追加」をクリック</p>
                  <p>4. 上記のアドレスを入力</p>
                  <p>5. 「完了」をクリックして参加</p>
                </div>
              </CardContent>
            </Card>

            {/* Bedrock Edition */}
            <Card className="bg-gray-800/50 border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <img src={crossplayImage} alt="Bedrock Edition" className="w-8 h-8 mr-3 rounded" />
                  Bedrock Edition
                </CardTitle>
                <CardDescription className="text-gray-300">
                  統合版・モバイル版からの参加方法
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="text-sm text-gray-400 mb-2">サーバーアドレス:</p>
                  <div className="flex items-center justify-between bg-gray-700/50 p-3 rounded">
                    <code className="text-blue-400 font-mono">{beserverAddress}</code>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={() => copyToClipboard(beserverAddress)}
                      className="text-gray-400 hover:text-white"
                    >
                      {copied ? "コピー済み!" : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">ポート: 7471</p>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p>1. Minecraftを起動</p>
                  <p>2. 「遊ぶ」を選択</p>
                  <p>3. 「サーバー」タブを選択</p>
                  <p>4. 「サーバーを追加」をタップ</p>
                  <p>5. 上記の情報を入力して参加</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">ギャラリー</h2>
            <p className="text-xl text-gray-300">
              サーバー内の美しい建築物とコミュニティの様子
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src={multiplayerImage} 
                alt="Multiplayer Scene" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold">コミュニティイベント</h3>
                  <p className="text-gray-300 text-sm">みんなで楽しむマルチプレイ</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src={darkThemeImage} 
                alt="Dark Theme Build" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold">サバイバル重視サーバー</h3>
                  <p className="text-gray-300 text-sm">サバイバルに特化した世界</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src={zenHero} 
                alt="Modern City" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold">経済重視サーバー</h3>
                  <p className="text-gray-300 text-sm">現実世界に近い世界</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">利用規約</h2>
            <p className="text-xl text-gray-300">
              すべてのプレイヤーが楽しめる環境を維持するためのルール
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-800/50 border-red-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-red-400" />
                  サーバールール
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">基本ルール</h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>他のプレイヤーを尊重し、親切に接してください</li>
                    <li>グリーフィング（他人の建築物の破壊）は禁止です</li>
                    <li>チート、ハック、不正なMODの使用は禁止です</li>
                    <li>スパム、荒らし行為は禁止です</li>
                    <li>適切でない言葉遣いや差別的発言は禁止です</li>
                  </ul>
                </div>

                <Separator className="bg-gray-700" />

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">建築ルール</h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>他人の土地に無断で建築しないでください</li>
                    <li>公共エリアでの大規模建築は事前に相談してください</li>
                    <li>不適切な内容の建築物は禁止です</li>
                    <li>サーバーに負荷をかける巨大な装置は制限があります</li>
                  </ul>
                </div>

                <Separator className="bg-gray-700" />

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">ペナルティ</h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>軽微な違反: 経済サーバーの牢屋で一定時間過ごしてもらう</li>
                    <li>繰り返す違反: 警告</li>
                    <li>重大な違反: 一時的なBAN（1日〜1週間）</li>
                    <li>悪質な違反: 永久BAN</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-green-500/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src={zenLogo} alt="Zen Server" className="h-12 w-auto mb-4" />
              <p className="text-gray-400">
                最高のMinecraftクロスプレイ体験を提供するZenサーバー
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">リンク</h3>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-green-400 transition-colors">ホーム</a>
                <a href="#about" className="block text-gray-400 hover:text-green-400 transition-colors">サーバー紹介</a>
                <a href="#join" className="block text-gray-400 hover:text-green-400 transition-colors">参加方法</a>
                <a href="#rules" className="block text-gray-400 hover:text-green-400 transition-colors">利用規約</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">コミュニティ</h3>
              <div className="space-y-3">
                <Button 
                  variant="ghost" 
                  className="justify-start p-0 h-auto text-gray-400 hover:text-green-400"
                  onClick={() => window.open(discordLink, '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Discord
                </Button>
                <div className="flex items-center text-gray-400">
                  <Server className="w-4 h-4 mr-2" />
                  サーバーアドレス(java版): {serverAddress}
                  サーバーアドレス(統合版): {beserverAddress}
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="bg-gray-800 my-8" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Zen Server. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

