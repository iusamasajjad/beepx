import { Carousel, Header, Mint } from "@/components"

const Launchpad = () => {
  return (
    <div>
      <Header profileInfo={true} button={false} />
      <div className="px-4 flex justify-between py-5">
        <div>
          <p className="text-xl">Elementerra Rabbits</p>
          <p className="text-gray-400 text-sm">
            Invest, Discover, Earn and make History with Salans’s first ever
            on-chain alcheny game in Elementerrs
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="border p-3 border-gray-800">
            <p>TRADE</p>
          </div>
          <div className="border p-3 border-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 31 31"
              fill="none"
            >
              <path
                d="M28.2656 6.94531C27.3114 7.36743 26.2994 7.64468 25.2633 7.76788C26.3549 7.11439 27.1718 6.08637 27.5616 4.8753C26.5359 5.48476 25.4131 5.9137 24.2423 6.1435C23.2539 5.08907 21.8725 4.49153 20.4273 4.49317C17.5408 4.49317 15.1996 6.8335 15.1996 9.72128C15.1996 10.131 15.2466 10.5283 15.3345 10.9116C10.9881 10.6928 7.13759 8.6128 4.55848 5.44951C4.09412 6.24733 3.85007 7.15422 3.85131 8.07733C3.85131 9.89098 4.77451 11.4918 6.17687 12.429C5.34672 12.4027 4.53486 12.1785 3.80898 11.7749C3.80818 11.7969 3.80818 11.8188 3.80818 11.8396C3.80818 14.3732 5.61024 16.4867 8.00249 16.9666C7.55351 17.0881 7.09041 17.1495 6.62528 17.1491C6.28747 17.1491 5.95964 17.118 5.64099 17.0569C6.30664 19.1334 8.23608 20.6451 10.5245 20.6866C8.67267 22.14 6.38587 22.9285 4.03179 22.9251C3.61516 22.9255 3.19887 22.9009 2.78516 22.8516C5.17506 24.388 7.95691 25.2034 10.798 25.2004C20.4145 25.2004 25.6725 17.2346 25.6725 10.3266C25.6725 10.1006 25.667 9.87382 25.657 9.65021C26.6804 8.91081 27.5638 7.99483 28.2656 6.94531Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-5 gap-5">
        <div className="w-[30%]">
          <Carousel />
        </div>
        <div className="w-[30%]">
          <Mint />
        </div>
      </div>
    </div>
  )
}
export default Launchpad
