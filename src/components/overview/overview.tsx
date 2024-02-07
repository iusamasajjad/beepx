import Image from "next/image"
import heroImage from "./hero-image.png"
import coin from "./coin.png"
import graph from "./graph.png"
import { Button } from "../ui/button"

const styling = {
  backgroundImage: `url('${heroImage.src}')`,
}
export const Overview = () => {
  return (
    <div className="px-4 py-6">
      <div className="flex gap-4">
        <div style={styling} className="w-[40%]">
          {/* <Image src={heroImage} alt="hero" /> */}
        </div>
        <div className="w-[60%]">
          <div className="border px-3 py-3 border-green-400">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.83 8.6998L15.3 4.1698C14.35 3.2198 13.04 2.7098 11.7 2.7798L6.7 3.0198C4.7 3.1098 3.11 4.6998 3.01 6.6898L2.77 11.6898C2.71 13.0298 3.21 14.3398 4.16 15.2898L8.69 19.8198C10.55 21.6798 13.57 21.6798 15.44 19.8198L19.83 15.4298C21.7 13.5798 21.7 10.5598 19.83 8.6998ZM9.5 12.3798C7.92 12.3798 6.62 11.0898 6.62 9.4998C6.62 7.9098 7.92 6.6198 9.5 6.6198C11.08 6.6198 12.38 7.9098 12.38 9.4998C12.38 11.0898 11.08 12.3798 9.5 12.3798ZM17.53 13.5298L13.53 17.5298C13.38 17.6798 13.19 17.7498 13 17.7498C12.81 17.7498 12.62 17.6798 12.47 17.5298C12.18 17.2398 12.18 16.7598 12.47 16.4698L16.47 12.4698C16.76 12.1798 17.24 12.1798 17.53 12.4698C17.82 12.7598 17.82 13.2398 17.53 13.5298Z"
                  fill="white"
                />
              </svg>
              <p className="text-gray-400 text-sm">Listed for</p>
            </div>
            <div className="flex items-center py-3 gap-3">
              <Image src={coin} alt="coing" />
              <p className="text-sm">114.95</p>
              <p className="text-gray-400 text-xs">($11,435.23)</p>
            </div>
            <div className="flex gap-3">
              <Button className="uppercase w-1/2" size="lg" variant="green">
                Buy Now
              </Button>
              <Button className="uppercase w-1/2" size="lg" variant="yellow">
                Place Offer
              </Button>
            </div>
          </div>
          <div className="flex justify-between px-4 py-5">
            <p className="text-gray-400 text-sm">Current Top Offer</p>
            <p className="text-sm">79.38</p>
          </div>
          {/* Details */}
          <div className="border-b border-gray-800 py-3">
            <h1 className="text-2xl uppercase">Details</h1>
          </div>
          <div className="flex justify-between items-center pt-4">
            <p className="text-gray-400 text-sm">Mint</p>
            <div className="flex items-center gap-3">
              {/* copy-svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M10.9792 9.31475H9.4421C8.18127 9.31475 7.15419 8.29475 7.15419 7.02683V5.48975C7.15419 5.19933 6.92044 4.9585 6.62294 4.9585H4.37752C2.74127 4.9585 1.41669 6.021 1.41669 7.91933V12.6227C1.41669 14.521 2.74127 15.5835 4.37752 15.5835H8.5496C10.1859 15.5835 11.5104 14.521 11.5104 12.6227V9.846C11.5104 9.5485 11.2696 9.31475 10.9792 9.31475Z"
                  fill="white"
                />
                <path
                  d="M12.6225 1.4165H11.2271H10.455H8.45039C6.84956 1.4165 5.55331 2.4365 5.49664 4.25692C5.53914 4.25692 5.57456 4.24984 5.61706 4.24984H7.62164H8.39373H9.78914C11.4254 4.24984 12.75 5.31234 12.75 7.21067V8.60609V10.5257V11.9211C12.75 11.9636 12.7429 11.999 12.7429 12.0344C14.3225 11.9848 15.5833 10.9365 15.5833 9.08775V7.69234V5.77275V4.37734C15.5833 2.479 14.2587 1.4165 12.6225 1.4165Z"
                  fill="white"
                />
                <path
                  d="M8.48581 5.06465C8.26622 4.84507 7.89081 4.99382 7.89081 5.2984V7.15423C7.89081 7.9334 8.54956 8.5709 9.35706 8.5709C9.85997 8.57798 10.5612 8.57798 11.1633 8.57798C11.4679 8.57798 11.6237 8.22382 11.4112 8.01132C10.6391 7.23923 9.26497 5.85798 8.48581 5.06465Z"
                  fill="white"
                />
              </svg>
              {/* signal-svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M13.5221 8.91811C13.4087 8.91811 13.2954 8.8827 13.1962 8.80478C10.3417 6.60186 6.65124 6.60186 3.79666 8.80478C3.56291 8.98186 3.22999 8.93936 3.05291 8.7127C2.87583 8.47895 2.91833 8.14603 3.14499 7.96895C6.39624 5.45436 10.5967 5.45436 13.8408 7.96895C14.0746 8.14603 14.1171 8.47895 13.9329 8.7127C13.8408 8.84728 13.685 8.91811 13.5221 8.91811Z"
                  fill="#EFD22E"
                />
                <path
                  d="M15.5833 6.45311C15.47 6.45311 15.3567 6.4177 15.2575 6.33978C11.1492 3.16645 5.84376 3.16645 1.74251 6.33978C1.50876 6.51686 1.17584 6.47436 0.998755 6.24769C0.814589 6.02103 0.857088 5.68103 1.09084 5.50395C5.58876 2.02603 11.4042 2.02603 15.9092 5.50395C16.1429 5.68103 16.1854 6.01394 16.0013 6.24769C15.9021 6.38228 15.7392 6.45311 15.5833 6.45311Z"
                  fill="#EFD22E"
                />
                <path
                  d="M12.1904 11.5034C12.0771 11.5034 11.9637 11.468 11.8646 11.3901C9.82457 9.81049 7.18249 9.81049 5.1354 11.3901C4.90165 11.5672 4.56874 11.5247 4.39165 11.298C4.21457 11.0642 4.25707 10.7313 4.48374 10.5542C6.9204 8.67007 10.0725 8.67007 12.5092 10.5542C12.7429 10.7313 12.7854 11.0642 12.6012 11.298C12.5021 11.4326 12.3462 11.5034 12.1904 11.5034Z"
                  fill="#EFD22E"
                />
                <path
                  d="M10.3417 14.096C10.2283 14.096 10.115 14.0606 10.0158 13.9827C9.095 13.2673 7.89791 13.2673 6.97708 13.9827C6.74333 14.1598 6.41041 14.1173 6.23333 13.8906C6.05625 13.6568 6.09875 13.3239 6.32541 13.1468C7.64291 12.1268 9.34291 12.1268 10.6604 13.1468C10.8942 13.3239 10.9367 13.6568 10.7525 13.8906C10.6604 14.0181 10.5046 14.096 10.3417 14.096Z"
                  fill="#EFD22E"
                />
              </svg>
              <p className="text-sm">9iwbS</p>
            </div>
          </div>
          <div className="flex justify-between items-center pt-2">
            <p className="text-gray-400 text-sm">Owner</p>
            <div className="flex items-center gap-3">
              {/* copy-svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M10.9792 9.31475H9.4421C8.18127 9.31475 7.15419 8.29475 7.15419 7.02683V5.48975C7.15419 5.19933 6.92044 4.9585 6.62294 4.9585H4.37752C2.74127 4.9585 1.41669 6.021 1.41669 7.91933V12.6227C1.41669 14.521 2.74127 15.5835 4.37752 15.5835H8.5496C10.1859 15.5835 11.5104 14.521 11.5104 12.6227V9.846C11.5104 9.5485 11.2696 9.31475 10.9792 9.31475Z"
                  fill="white"
                />
                <path
                  d="M12.6225 1.4165H11.2271H10.455H8.45039C6.84956 1.4165 5.55331 2.4365 5.49664 4.25692C5.53914 4.25692 5.57456 4.24984 5.61706 4.24984H7.62164H8.39373H9.78914C11.4254 4.24984 12.75 5.31234 12.75 7.21067V8.60609V10.5257V11.9211C12.75 11.9636 12.7429 11.999 12.7429 12.0344C14.3225 11.9848 15.5833 10.9365 15.5833 9.08775V7.69234V5.77275V4.37734C15.5833 2.479 14.2587 1.4165 12.6225 1.4165Z"
                  fill="white"
                />
                <path
                  d="M8.48581 5.06465C8.26622 4.84507 7.89081 4.99382 7.89081 5.2984V7.15423C7.89081 7.9334 8.54956 8.5709 9.35706 8.5709C9.85997 8.57798 10.5612 8.57798 11.1633 8.57798C11.4679 8.57798 11.6237 8.22382 11.4112 8.01132C10.6391 7.23923 9.26497 5.85798 8.48581 5.06465Z"
                  fill="white"
                />
              </svg>
              <p className="text-sm">75bGM</p>
            </div>
          </div>
          <div className="flex justify-between items-center pt-2">
            <p className="text-gray-400 text-sm">Metadata</p>
            <div className="flex items-center gap-3">
              <p className="text-sm">26 / 09 / 2023</p>
              <p className="text-sm">06 : 12 : 31</p>
            </div>
          </div>
          <div className="flex justify-between items-center pt-2">
            <p className="text-gray-400 text-sm">Token Standard</p>
            <div className="flex items-center gap-3">
              <p className="text-sm">NFT</p>
            </div>
          </div>
          <div className="flex justify-between items-center pt-2">
            <p className="text-gray-400 text-sm">Royalties</p>
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M12.0416 15.5835H4.95831C4.6679 15.5835 4.42706 15.3427 4.42706 15.0522C4.42706 14.7618 4.6679 14.521 4.95831 14.521H12.0416C12.3321 14.521 12.5729 14.7618 12.5729 15.0522C12.5729 15.3427 12.3321 15.5835 12.0416 15.5835Z"
                  fill="#EFD22E"
                />
                <path
                  d="M14.4146 3.90982L11.5812 5.93566C11.2058 6.20482 10.6675 6.04191 10.5046 5.60982L9.1658 2.03982C8.93914 1.42357 8.06789 1.42357 7.84122 2.03982L6.49539 5.60274C6.33247 6.04191 5.80122 6.20482 5.42581 5.92857L2.59247 3.90274C2.02581 3.50607 1.27497 4.06566 1.50872 4.72441L4.45539 12.9765C4.55456 13.2598 4.82372 13.444 5.12122 13.444H11.8716C12.1691 13.444 12.4383 13.2527 12.5375 12.9765L15.4841 4.72441C15.725 4.06566 14.9741 3.50607 14.4146 3.90982ZM10.2708 10.4477H6.72914C6.43872 10.4477 6.19789 10.2069 6.19789 9.91649C6.19789 9.62607 6.43872 9.38524 6.72914 9.38524H10.2708C10.5612 9.38524 10.8021 9.62607 10.8021 9.91649C10.8021 10.2069 10.5612 10.4477 10.2708 10.4477Z"
                  fill="#EFD22E"
                />
              </svg>
              <p className="text-sm">3.00%</p>
            </div>
          </div>
          {/* Attributes */}
          <div className="border-b border-gray-800 pt-5 py-3">
            <h2 className="text-2xl uppercase">ATTRIBUTES (10)</h2>
          </div>
          <div className="flex flex-wrap">
            <div className="m-3 bg-[#0f0f0f] p-3">
              <p className="text-gray-400 text-sm">Background</p>
              <p className="py-2">White</p>
              <div className="flex gap-5 items-center">
                <Button variant="yellowLight" size="sm">
                  15.94%
                </Button>
                <div className="flex gap-1">
                  <p className="text-sm">17.89</p>
                  <Image src={coin} alt="coin" />
                </div>
              </div>
            </div>
            <div className="m-3 bg-[#0f0f0f] p-3">
              <p className="text-gray-400 text-sm">back Accessory</p>
              <p className="py-2">None</p>
              <div className="flex gap-5 items-center">
                <div className="bg-[#163f28] text-green-400 p-1">15.94%</div>
                <div className="flex gap-1">
                  <p className="text-sm">17.89</p>
                  <Image src={coin} alt="coin" />
                </div>
              </div>
            </div>
            <div className="m-3 bg-[#0f0f0f] p-3">
              <p className="text-gray-400 text-sm">Base</p>
              <p className="py-2">Base</p>
              <div className="flex gap-5 items-center">
                <div className="bg-[#3f3f3f] text-white p-1">15.94%</div>
                <div className="flex gap-1">
                  <p className="text-sm">17.89</p>
                  <Image src={coin} alt="coin" />
                </div>
              </div>
            </div>
            <div className="m-3 bg-[#0f0f0f] p-3">
              <p className="text-gray-400 text-sm">Earring</p>
              <p className="py-2">None</p>
              <div className="flex gap-5 items-center">
                <div className="bg-[#163f28] text-green-400 p-1">15.94%</div>
                <div className="flex gap-1">
                  <p className="text-sm">17.89</p>
                  <Image src={coin} alt="coin" />
                </div>
              </div>
            </div>
            <div className="m-3 bg-[#0f0f0f] p-3">
              <p className="text-gray-400 text-sm">Body</p>
              <p className="py-2">Hooded Robe</p>
              <div className="flex gap-5 items-center">
                <div className="bg-[#3f1716] text-red-400 p-1 text-sm">
                  15.94%
                </div>
                <div className="flex gap-1 text-sm">
                  <p>17.89</p>
                  <Image src={coin} alt="coin" />
                </div>
              </div>
            </div>
            <div className="m-3 bg-[#0f0f0f] p-3">
              <p className="text-gray-400 text-sm">Eyes</p>
              <p className="py-2">Two</p>
              <div className="flex gap-5 items-center">
                <div className="bg-[#163f28] text-sm text-green-400 p-1">
                  15.94%
                </div>
                <div className="flex gap-1">
                  <p className="text-sm">17.89</p>
                  <Image src={coin} alt="coin" />
                </div>
              </div>
            </div>
            <div className="m-3 bg-[#0f0f0f] p-3">
              <p className="text-gray-400 text-sm">Front Accessory</p>
              <p className="py-2">None</p>
              <div className="flex gap-5 items-center">
                <div className="bg-[#3f1716] text-sm text-red-400 p-1">
                  15.94%
                </div>
                <div className="flex gap-1">
                  <p className="text-sm">17.89</p>
                  <Image src={coin} alt="coin" />
                </div>
              </div>
            </div>
            <div className="m-3 bg-[#0f0f0f] p-3">
              <p className="text-gray-400 text-sm">Headgear</p>
              <p className="py-2">Forest Horns</p>
              <div className="flex gap-5 items-center">
                <Button className="text-sm" variant="yellowLight" size="sm">
                  15.94%
                </Button>
                <div className="flex gap-1">
                  <p className="text-sm">17.89</p>
                  <Image src={coin} alt="coin" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="m-3 w-[48%] bg-[#0f0f0f] p-3">
              <p className="text-gray-400 text-sm">Faceplate</p>
              <p className="py-2">None</p>
              <div className="flex justify-between items-center">
                <Button className="bg-[#3f1716] text-sm text-red-400" size="sm">
                  15.94%
                </Button>
                <div className="flex gap-1">
                  <p className="text-sm">17.89</p>
                  <Image src={coin} alt="coin" />
                </div>
              </div>
            </div>
            <div className="m-3 w-[48%] bg-[#0f0f0f] p-3">
              <p className="text-gray-400 text-sm">Faction</p>
              <p className="py-2">Mage</p>
              <div className="flex justify-between items-center">
                <Button className="bg-[#3f3f3f] text-sm text-white" size="sm">
                  15.94%
                </Button>
                <div className="flex gap-1">
                  <p className="text-sm">17.89</p>
                  <Image src={coin} alt="coin" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sale history */}
      <div className="border-b border-gray-800 pt-5 pb-2">
        <h1 className="text-white">SALE HISTORY</h1>
      </div>
      <div className="pt-3">
        <Image src={graph} alt="graph" />
      </div>
    </div>
  )
}
