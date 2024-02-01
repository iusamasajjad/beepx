import Image from "next/image"
import profile from "./profile-pic.png"
import floor from "./floorimage.png"
export const Profile = () => {
  let profileData = [
    {
      floorPrice: "17.89",
      marketCap: "17.50",
      D1Change: "9.42%",
      D7Change: "67.63%",
      listed: "5%",
      D1Volume: "17.89",
      D7Volume: "17.89",
      owner: "4486",
      supply: "8888",
    },
  ]
  return (
    <div className="px-5 flex justify-between items-center py-3">
      <div className="flex gap-2">
        <Image src={profile} width={40} height={40} alt="profile-img" />
        <div>
          <p className="text-white">Leo Rosser</p>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M16.0948 3.34701C14.8649 2.77157 13.5498 2.35337 12.175 2.11523C12.0061 2.42051 11.8088 2.83111 11.6728 3.15774C10.2113 2.93795 8.76323 2.93795 7.32858 3.15774C7.1926 2.83111 6.99086 2.42051 6.82049 2.11523C5.44414 2.35337 4.12756 2.77311 2.89765 3.35006C0.416926 7.09876 -0.255559 10.7544 0.080684 14.358C1.72603 15.5867 3.32057 16.3331 4.88821 16.8216C5.27526 16.2889 5.62046 15.7226 5.91785 15.1258C5.35147 14.9106 4.809 14.645 4.29643 14.3367C4.43242 14.2359 4.56543 14.1306 4.69393 14.0222C7.82024 15.4845 11.217 15.4845 14.306 14.0222C14.436 14.1306 14.569 14.2359 14.7035 14.3367C14.1894 14.6465 13.6455 14.9121 13.0791 15.1273C13.3765 15.7226 13.7202 16.2904 14.1087 16.8231C15.6779 16.3347 17.2739 15.5883 18.9192 14.358C19.3138 10.1805 18.2453 6.55843 16.0948 3.34701ZM6.34376 12.1418C5.40528 12.1418 4.63565 11.2657 4.63565 10.1988C4.63565 9.13185 5.38884 8.25421 6.34376 8.25421C7.29871 8.25421 8.06832 9.13031 8.05188 10.1988C8.05337 11.2657 7.29871 12.1418 6.34376 12.1418ZM12.6562 12.1418C11.7177 12.1418 10.9481 11.2657 10.9481 10.1988C10.9481 9.13185 11.7012 8.25421 12.6562 8.25421C13.6111 8.25421 14.3807 9.13031 14.3643 10.1988C14.3643 11.2657 13.6111 12.1418 12.6562 12.1418Z"
                fill="white"
                fill-opacity="0.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
            >
              <path
                d="M18.5394 4.08189C17.9351 4.34924 17.2941 4.52483 16.6379 4.60286C17.3293 4.18898 17.8466 3.5379 18.0936 2.77089C17.4439 3.15688 16.7328 3.42855 15.9913 3.57409C15.3653 2.90627 14.4904 2.52783 13.5751 2.52887C11.747 2.52887 10.2643 4.01109 10.2643 5.84001C10.2643 6.09948 10.2941 6.3511 10.3497 6.59388C7.59699 6.4553 5.15834 5.13798 3.5249 3.13455C3.2308 3.63984 3.07624 4.2142 3.07702 4.79884C3.07702 5.94749 3.66172 6.96133 4.54988 7.55489C4.02412 7.53827 3.50994 7.39628 3.05022 7.14064C3.04971 7.15455 3.04971 7.16846 3.04971 7.18161C3.04971 8.78625 4.19102 10.1248 5.70611 10.4287C5.42175 10.5057 5.12845 10.5445 4.83387 10.5443C4.61993 10.5443 4.4123 10.5246 4.21049 10.4859C4.63207 11.801 5.85405 12.7584 7.30338 12.7847C6.13055 13.7052 4.68225 14.2046 3.19133 14.2024C2.92746 14.2027 2.66381 14.1871 2.40179 14.1559C3.9154 15.1289 5.67724 15.6453 7.47661 15.6434C13.567 15.6434 16.8971 10.5985 16.8971 6.2234C16.8971 6.08026 16.8936 5.93662 16.8873 5.795C17.5354 5.32671 18.0949 4.74659 18.5394 4.08189Z"
                fill="white"
                fill-opacity="0.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div>
        {profileData?.map((tableRow: any, index: number) => (
          <div className="flex gap-7 items-center" key={index}>
            <div>
              <p className="text-sm text-gray-400">Floor Price</p>
              <div className="flex gap-1 items-center">
                {tableRow.floorPrice}
                <Image width={15} height={15} src={floor} alt="floor" />
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400">Market Cap</p>
              {tableRow.marketCap}
            </div>
            <div className="text-green-400">
              <p className="text-sm text-gray-400">1DCHANGE</p>
              {tableRow.D1Change}
            </div>
            <div className="text-yellow-400">
              <p className="text-sm text-gray-400">7DCHANGE</p>
              {tableRow.D7Change}
            </div>
            <div>
              <p className="text-sm text-gray-400">LISTED</p>
              {tableRow.listed}
              <span className="text-xs text-gray-500">(447)</span>
            </div>
            <div>
              <p className="text-sm text-gray-400">1DVOLUME</p>
              <div className="flex items-center gap-1">
                {tableRow.D1Volume}
                <Image src={floor} width={15} height={15} alt="floor" />
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400">7DVOLUME</p>
              {tableRow.D7Volume}
            </div>
            <div>
              <p className="text-sm text-gray-400">OWNER</p>
              {tableRow.owner}
              <span className="text-xs text-gray-500">(50%)</span>
            </div>
            <div>
              <p className="text-sm text-gray-400">SUPPLY</p>
              {tableRow.supply}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
