'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const bentoData = [
  { id: 1, name: "【彩り温野菜のわっぱ二段弁当】熟成A4ランク黒毛和牛ステーキわっぱ弁当", price: 3780, link: "https://obentodeli.jp/1093/menu/18656" },
  { id: 2, name: "【謹製ステーキ御膳】 熟成A4ランク黒毛和牛ステーキ御膳", price: 3780, link: "https://obentodeli.jp/1093/menu/18655" },
  { id: 3, name: "【贅沢御膳】ふっくら鰻と紅ズワイガニと駿河湾産釜揚げしらすのシーフード御膳", price: 3480, link: "https://obentodeli.jp/1093/menu/18653" },
  { id: 4, name: "【らんま特製贅沢御膳】厚切り特選牛ステーキとふっくら鰻と駿河湾産釜揚げしらす御膳", price: 3480, link: "https://obentodeli.jp/1093/menu/15811" },
  { id: 5, name: "【彩り温野菜のわっぱ二段弁当】自家製低温熟成やわらかローストビーフわっぱ弁当", price: 2700, link: "https://obentodeli.jp/1093/menu/18651" },
  { id: 6, name: "【らんま特製贅沢御膳】自家製低温熟成やわらかローストビーフ御膳", price: 2700, link: "https://obentodeli.jp/1093/menu/15810" },
  { id: 7, name: "【高級鉄板焼御膳】塩麴仕込みの厳選牛ステーキと季節の焼魚", price: 2480, link: "https://obentodeli.jp/1093/menu/15796" },
  { id: 8, name: "【高級鉄板焼御膳】牛炙り焼きと低温熟成ローストビーフ御膳", price: 2480, link: "https://obentodeli.jp/1093/menu/15809" },
  { id: 9, name: "【高級鉄板焼御膳】塩麴仕込の厳選牛ステーキ御膳", price: 2480, link: "https://obentodeli.jp/1093/menu/15808" },
  { id: 10, name: "【高級鉄板焼御膳】厚切り特選牛ステーキ御膳", price: 2480, link: "https://obentodeli.jp/1093/menu/15807" },
  { id: 11, name: "【彩り温野菜のわっぱ二段弁当】 塩麴仕込の厳選牛ステーキわっぱ弁当", price: 2480, link: "https://obentodeli.jp/1093/menu/15806" },
  { id: 12, name: "【彩り温野菜のわっぱ二段弁当】厚切り特選牛ステーキわっぱ弁当", price: 2480, link: "https://obentodeli.jp/1093/menu/15805" },
  { id: 13, name: "【高級鉄板焼御膳】塩麴仕込みの厳選牛ステーキと甘辛特製ダレの鶏香味焼ステーキ", price: 2480, link: "https://obentodeli.jp/1093/menu/15795" },
  { id: 14, name: "【高級鉄板焼御膳】濃厚デミの蘭麻特製ハンバーグ御膳", price: 2160, link: "https://obentodeli.jp/1093/menu/15803" },
  { id: 15, name: "【高級鉄板焼御膳】甘うま三元豚炙り焼き御膳", price: 2160, link: "https://obentodeli.jp/1093/menu/15802" },
  { id: 16, name: "【高級鉄板焼御膳】味わい厳選牛の炙り焼き御膳", price: 2160, link: "https://obentodeli.jp/1093/menu/15801" },
  { id: 17, name: "【彩り温野菜のわっぱ二段弁当】 味わい厳選牛の炙り焼わっぱ弁当", price: 2160, link: "https://obentodeli.jp/1093/menu/15800" },
  { id: 18, name: "【彩り温野菜のわっぱ二段弁当】 黒毛和牛ローストビーフと厳選牛炙り焼わっぱ弁当", price: 2160, link: "https://obentodeli.jp/1093/menu/15804" },
  { id: 19, name: "【彩り温野菜のわっぱ二段弁当】 やわらかローストポークの香り柚子胡椒焼わっぱ弁当", price: 1850, link: "https://obentodeli.jp/1093/menu/15799" },
  { id: 20, name: "【彩り温野菜のわっぱ二段弁当】 塩麹鶏の香り柚子胡椒焼わっぱ弁当", price: 1850, link: "https://obentodeli.jp/1093/menu/15798" },
  { id: 21, name: "【彩り温野菜のわっぱ二段弁当】甘うま三元豚炙り焼わっぱ弁当", price: 1850, link: "https://obentodeli.jp/1093/menu/15797" },
  { id: 22, name: "【彩り温野菜のわっぱ二段弁当】三元豚ステーキの金山寺味噌漬わっぱ弁当", price: 1850, link: "https://obentodeli.jp/1093/menu/15794" },
  { id: 23, name: "【彩り温野菜のわっぱ二段弁当】味わい鶏ごぼうの旨煮わっぱ弁当", price: 1850, link: "https://obentodeli.jp/1093/menu/15793" },
  { id: 24, name: "【十六穀米のボリューム弁当】厳選牛塩麹仕込みとやわらかローストポーク", price: 1850, link: "https://obentodeli.jp/1093/menu/15792" },
  { id: 25, name: "【十六穀米のボリューム弁当】厳選牛塩麹仕込みと甘辛特製ダレの鶏香味焼き", price: 1850, link: "https://obentodeli.jp/1093/menu/15791" },
  { id: 26, name: "【十六穀米のボリューム弁当】季節の魚の西京焼とやわらかローストポーク", price: 1620, link: "https://obentodeli.jp/1093/menu/15789" },
  { id: 27, name: "【十六穀米のボリューム弁当】甘辛特製ダレの鶏香味焼と季節の魚の西京焼き", price: 1620, link: "https://obentodeli.jp/1093/menu/15788" },
  { id: 28, name: "【十六穀米のボリューム弁当】やわらかローストポークと甘辛特製ダレの鶏香味焼き", price: 1620, link: "https://obentodeli.jp/1093/menu/15790" }
]

export function LunchEvent() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showAll, setShowAll] = useState(false)
  const [carouselIndex, setCarouselIndex] = useState(0)

  const slides = [
    { title: "【くじ引き】\nお弁当大会✨", component: ExplanationSlide },
    { title: "お弁当一覧", component: BentoTypesSlide },
    { title: "結果発表🎉", component: ResultsSlide },
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const nextCarouselItem = () => setCarouselIndex((prev) => (prev + 1) % 5)
  const prevCarouselItem = () => setCarouselIndex((prev) => (prev - 1 + 5) % 5)

  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#D70A30] text-white p-8 pb-24">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center whitespace-pre-line p-4 rounded-lg">
        <span className="bg-[#D70A30] inline-block">{slides[currentSlide].title}</span>
      </h1>
      <div className="w-full max-w-4xl bg-white text-black p-6 rounded-lg shadow-lg">
        <CurrentSlideComponent
          showAll={showAll}
          setShowAll={setShowAll}
          bentoData={bentoData}
          carouselIndex={carouselIndex}
          nextCarouselItem={nextCarouselItem}
          prevCarouselItem={prevCarouselItem}
        />
      </div>
      <div className="fixed bottom-0 left-0 right-0 flex justify-between p-4 bg-[rgba(0,0,0,0.5)]">
        <Button onClick={prevSlide} disabled={currentSlide === 0} className="bg-white text-[#1e1e1e] hover:bg-gray-200">
          <ChevronLeft className="mr-2 h-4 w-4" /> 前へ
        </Button>
        <Button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="bg-white text-[#1e1e1e] hover:bg-gray-200">
          次へ <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

function ExplanationSlide() {
  return (
    <div className="text-xl space-y-6 text-center">
      <p className="font-bold text-xl md:text-2xl">今回の交流会は、みんなでくじを引いて高級お弁当を楽しむ企画です。</p>
      <p className='text-md md:text-lg'>全28種類の豪華なお弁当の中から、あなたの運命のお弁当が決まります！</p>
      <div className="bg-[#FF0000] text-white p-4 rounded-lg shadow-md">
        <p className="text-3xl font-bold">価格帯</p>
        <p className="text-3xl md:text-5xl font-extrabold mt-2">
          ￥1,620 〜 ￥3,780
        </p>
      </div>
      <p className="text-2xl font-semibold mt-4">どのお弁当が当たるかはお楽しみ！</p>
    </div>
  )
}

function BentoTypesSlide({ showAll, setShowAll, bentoData, carouselIndex, nextCarouselItem, prevCarouselItem }: {
  showAll: boolean
  setShowAll: (showAll: boolean) => void
  bentoData: {
    id: number
    name: string
    price: number
    link: string
  }[]
  carouselIndex: number
  nextCarouselItem: () => void
  prevCarouselItem: () => void
}) {
  const topBentos = bentoData.slice(0, 5)

  const getImageUrl = (index:number) => {
    const imageUrls = [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-WvuEJjnEw82mH5KoeomK8bYWZUxvI0.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-FTcd3kMlIooaDHKIoLg5g8feKE6uss.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-cDgXUqLd8zVM7ArlmpKjFScK5aPvgK.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-J5cAvQqgVijp2fppJ7ypXZRPeNOnKd.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-GJld96y84J3IzZeVqGOrWPKpDEPdWS.jpg"
    ]
    return imageUrls[index]
  }

  return (
    <div className="space-y-6">
      <div className="text-center relative">
        <h3 className="text-2xl font-semibold mb-4">上位5種のお弁当✨</h3>
        <div className="relative w-full h-80">
          {topBentos.map((bento, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                index === carouselIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={getImageUrl(index)} alt={bento.name} className="rounded-lg shadow-lg mb-2 mx-auto h-48 object-cover" />
              <p className="text-lg">{bento.name}</p>
              <p className="text-xl font-bold text-[#D70A30]">￥{bento.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <Button onClick={prevCarouselItem} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-white hover:bg-yellow-500 font-bold">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button onClick={nextCarouselItem} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-white hover:bg-yellow-500 font-bold">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="text-center mt-8">
        <Button onClick={() => setShowAll(!showAll)} className="bg-yellow-400 text-white hover:bg-yellow-500 font-bold">
          {showAll ? "一覧を閉じる" : "全てのお弁当を見る"}
        </Button>
      </div>
      {showAll && (
        <div className="mt-8 max-h-96 overflow-y-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>番号</TableHead>
                <TableHead>お弁当名</TableHead>
                <TableHead>価格</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bentoData.map((bento) => (
                <TableRow key={bento.id}>
                  <TableCell>{bento.id}</TableCell>
                  <TableCell>
                    <a href={bento.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {bento.name}
                    </a>
                  </TableCell>
                  <TableCell>￥{bento.price.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}

function ResultsSlide() {
  return (
    <div className="text-center space-y-6 flex justify-center items-center flex-col">
      <p className="text-md">以下のボタンをクリックして、あなたの運命のお弁当をチェックしてください。</p>
      <Button asChild className="bg-yellow-400 text-white hover:bg-yellow-500 text-xl py-4 px-8 font-bold">
        <a href="https://xn--l8j0c9d.com/JcUznyuzJTHYxjwmlhu1" target="_blank" rel="noopener noreferrer">
          あみだくじの結果を見る
        </a>
      </Button>
    </div>
  )
}