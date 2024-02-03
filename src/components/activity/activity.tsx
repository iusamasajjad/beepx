import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import profile from "./profile.png"
import graph from "./grapph.png"
import { Button } from "../ui/button"
export const Activity = () => {
  const activityData = [
    {
      id: "1",
      time: "5",
      price: "17.89",
      seller: "48C100",
      image: profile,
    },
    {
      id: "1",
      time: "5",
      price: "17.89",
      seller: "48C100",
      image: profile,
    },
    {
      id: "1",
      time: "5",
      price: "17.89",
      seller: "48C100",
      image: profile,
    },
  ]
  return (
    <div>
      <div className="flex w-full justify-between items-center gap-1 py-3 px-3">
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17.26 9.96L14.95 12.94C14.66 13.31 14.25 13.55 13.78 13.6C13.31 13.66 12.85 13.53 12.48 13.24L10.65 11.8C10.58 11.74 10.5 11.74 10.46 11.75C10.42 11.75 10.35 11.77 10.29 11.85L7.91 14.94C7.76 15.13 7.54 15.23 7.32 15.23C7.16 15.23 7 15.18 6.86 15.07C6.53 14.82 6.47 14.35 6.72 14.02L9.1 10.93C9.39 10.56 9.8 10.32 10.27 10.26C10.73 10.2 11.2 10.33 11.57 10.62L13.4 12.06C13.47 12.12 13.54 12.12 13.59 12.11C13.63 12.11 13.7 12.09 13.76 12.01L16.07 9.03C16.32 8.7 16.8 8.64 17.12 8.9C17.45 9.17 17.51 9.64 17.26 9.96Z"
              fill="white"
              fill-opacity="0.4"
            />
          </svg>
          <p>ACTIVITY</p>
        </div>
        <div className="flex items-center gap-1">
          <p>ALL</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M14.9333 6.81665H9.74164H5.06664C4.26664 6.81665 3.86664 7.78332 4.43331 8.34998L8.74997 12.6667C9.44164 13.3583 10.5666 13.3583 11.2583 12.6667L12.9 11.025L15.575 8.34998C16.1333 7.78332 15.7333 6.81665 14.9333 6.81665Z"
              fill="white"
              fill-opacity="0.4"
            />
          </svg>
        </div>
      </div>
      <div className="px-3">
        <Table className="border-b border-gray-800">
          <TableHeader>
            <TableRow>
              <TableHead>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8.00001 1.33337C4.32668 1.33337 1.33334 4.32671 1.33334 8.00004C1.33334 11.6734 4.32668 14.6667 8.00001 14.6667C11.6733 14.6667 14.6667 11.6734 14.6667 8.00004C14.6667 4.32671 11.6733 1.33337 8.00001 1.33337ZM10.9 10.38C10.8067 10.54 10.64 10.6267 10.4667 10.6267C10.38 10.6267 10.2933 10.6067 10.2133 10.5534L8.14668 9.32004C7.63334 9.01337 7.25334 8.34004 7.25334 7.74671V5.01337C7.25334 4.74004 7.48001 4.51337 7.75334 4.51337C8.02668 4.51337 8.25334 4.74004 8.25334 5.01337V7.74671C8.25334 7.98671 8.45334 8.34004 8.66001 8.46004L10.7267 9.69337C10.9667 9.83337 11.0467 10.14 10.9 10.38Z"
                    fill="#B8B8B8"
                  />
                </svg>
              </TableHead>
              <TableHead className="text-right">ITEM</TableHead>
              <TableHead className="text-right">PRIVE</TableHead>
              <TableHead className="text-right">Seller</TableHead>
              <TableHead className="text-right">Seller</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activityData.map((tableRow, index) => (
              <TableRow key={index}>
                <TableCell className="flex items-center pt-3 gap-2">
                  {tableRow.time}m
                </TableCell>
                <TableCell className="text-right">
                  <Image src={tableRow.image} alt="profile" />
                </TableCell>
                <TableCell className="text-right">{tableRow.price}</TableCell>
                <TableCell className="text-right text-green-400">
                  {tableRow.seller}
                </TableCell>
                <TableCell className="text-right text-green-400">
                  <Button className="flex gap-1" size="sm" variant="yellowLight">
                    BUY
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div>
        <Image src={graph} alt="graph" />
      </div>
    </div>
  )
}
