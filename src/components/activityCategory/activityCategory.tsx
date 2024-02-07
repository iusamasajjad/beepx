export const ActivityCategory = () => {
  return (
    <div className="border-b border-gray-800 pt-3">
      <div className="flex gap-4 px-4">
        <div className="flex gap-1 border-b border-yellow-400 pb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.7084 7.62506C15.7834 4.60006 12.9667 2.8584 10 2.8584C8.51669 2.8584 7.07502 3.29173 5.75835 4.10007C4.44169 4.91673 3.25835 6.1084 2.29169 7.62506C1.45835 8.9334 1.45835 11.0584 2.29169 12.3667C4.21669 15.4001 7.03335 17.1334 10 17.1334C11.4834 17.1334 12.925 16.7001 14.2417 15.8917C15.5584 15.0751 16.7417 13.8834 17.7084 12.3667C18.5417 11.0667 18.5417 8.9334 17.7084 7.62506ZM10 13.3667C8.13335 13.3667 6.63335 11.8584 6.63335 10.0001C6.63335 8.14173 8.13335 6.6334 10 6.6334C11.8667 6.6334 13.3667 8.14173 13.3667 10.0001C13.3667 11.8584 11.8667 13.3667 10 13.3667Z"
              fill="#EFD22E"
            />
            <path
              d="M10 7.6167C8.69167 7.6167 7.625 8.68337 7.625 10C7.625 11.3084 8.69167 12.375 10 12.375C11.3083 12.375 12.3833 11.3084 12.3833 10C12.3833 8.6917 11.3083 7.6167 10 7.6167Z"
              fill="#EFD22E"
            />
          </svg>
          <p className="text-yellow-400">OVERVIEW</p>
        </div>
        <div className="flex gap-1 pb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M13.4917 1.6665H6.50835C3.47502 1.6665 1.66669 3.47484 1.66669 6.50817V13.4832C1.66669 16.5248 3.47502 18.3332 6.50835 18.3332H13.4834C16.5167 18.3332 18.325 16.5248 18.325 13.4915V6.50817C18.3334 3.47484 16.525 1.6665 13.4917 1.6665ZM14.3834 8.29984L12.4584 10.7832C12.2167 11.0915 11.875 11.2915 11.4834 11.3332C11.0917 11.3832 10.7084 11.2748 10.4 11.0332L8.87502 9.83317C8.81669 9.78317 8.75002 9.78317 8.71669 9.7915C8.68335 9.7915 8.62502 9.80817 8.57502 9.87484L6.59169 12.4498C6.46669 12.6082 6.28335 12.6915 6.10002 12.6915C5.96669 12.6915 5.83335 12.6498 5.71669 12.5582C5.44169 12.3498 5.39169 11.9582 5.60002 11.6832L7.58335 9.10817C7.82502 8.79984 8.16669 8.59984 8.55835 8.54984C8.94169 8.49984 9.33335 8.60817 9.64169 8.84984L11.1667 10.0498C11.225 10.0998 11.2834 10.0998 11.325 10.0915C11.3584 10.0915 11.4167 10.0748 11.4667 10.0082L13.3917 7.52484C13.6 7.24984 14 7.19984 14.2667 7.4165C14.5417 7.6415 14.5917 8.03317 14.3834 8.29984Z"
              fill="white"
            />
          </svg>
          <p className="text-gray-400">ACTIVITY</p>
        </div>
        <div className="flex gap-1 pb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.9417 9.0584L16.675 7.79173C16.4583 7.57507 16.2833 7.15007 16.2833 6.85007V5.05007C16.2833 4.31673 15.6833 3.71673 14.95 3.71673H13.1583C12.8583 3.71673 12.4333 3.54173 12.2167 3.32507L10.95 2.0584C10.4333 1.54173 9.58334 1.54173 9.06667 2.0584L7.78334 3.32507C7.575 3.54173 7.15 3.71673 6.84167 3.71673H5.05C4.31667 3.71673 3.71667 4.31673 3.71667 5.05007V6.84173C3.71667 7.14173 3.54167 7.56673 3.325 7.7834L2.05834 9.05007C1.54167 9.56673 1.54167 10.4167 2.05834 10.9334L3.325 12.2001C3.54167 12.4167 3.71667 12.8417 3.71667 13.1417V14.9334C3.71667 15.6667 4.31667 16.2667 5.05 16.2667H6.84167C7.14167 16.2667 7.56667 16.4417 7.78334 16.6584L9.05 17.9251C9.56667 18.4417 10.4167 18.4417 10.9333 17.9251L12.2 16.6584C12.4167 16.4417 12.8417 16.2667 13.1417 16.2667H14.9333C15.6667 16.2667 16.2667 15.6667 16.2667 14.9334V13.1417C16.2667 12.8417 16.4417 12.4167 16.6583 12.2001L17.925 10.9334C18.4667 10.4251 18.4667 9.57507 17.9417 9.0584ZM6.66667 7.50007C6.66667 7.04173 7.04167 6.66673 7.5 6.66673C7.95834 6.66673 8.33334 7.04173 8.33334 7.50007C8.33334 7.9584 7.96667 8.3334 7.5 8.3334C7.04167 8.3334 6.66667 7.9584 6.66667 7.50007ZM7.94167 12.9417C7.81667 13.0667 7.65834 13.1251 7.5 13.1251C7.34167 13.1251 7.18334 13.0667 7.05834 12.9417C6.81667 12.7001 6.81667 12.3001 7.05834 12.0584L12.0583 7.0584C12.3 6.81673 12.7 6.81673 12.9417 7.0584C13.1833 7.30007 13.1833 7.70007 12.9417 7.94173L7.94167 12.9417ZM12.5 13.3334C12.0333 13.3334 11.6583 12.9584 11.6583 12.5001C11.6583 12.0417 12.0333 11.6667 12.4917 11.6667C12.95 11.6667 13.325 12.0417 13.325 12.5001C13.325 12.9584 12.9583 13.3334 12.5 13.3334Z"
              fill="white"
            />
          </svg>
          <p className="text-gray-400">OFFERS</p>
        </div>
      </div>
    </div>
  )
}
