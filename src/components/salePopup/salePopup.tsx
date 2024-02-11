import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import Image from "next/image"
import icon from "./icon.png"
import bitcoin from "./floorimage.png"

import { Button } from "../ui/button"
interface SalePopupProp {
  selectedValue?: string
}
export const SalePopup = ({ selectedValue }: SalePopupProp) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger
          className="px-4 h-10 rounded-lg text-sm text-black bg-yellow-400"
        >
          List 0
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center border-b pb-2">
              Execute
            </DialogTitle>
            <DialogDescription>
              <div className="flex gap-2">
                <div className="w-[80%]">
                  <p>TRANSACTIONS</p>
                  <div className="flex items-center my-2 justify-between px-2 py-2">
                    <p className="text-white">Set price for all:</p>
                    <div className="flex items-center gap-1">
                      <Image src={bitcoin} alt="bitcoin" />
                      <input
                        className="bg-[#161616] text-white mr-1 pl-2 w-20"
                        value="0"
                        type="number"
                      />
                      <Button variant="yellow" size="xs">
                        TOP TRAIT
                      </Button>
                      <div>
                        <Button variant="yellow" size="xs">
                          FLOOR
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center bg-[#161616] my-2 justify-between px-2 py-2">
                    <Button variant="yellow" size="xs">
                      LIST
                    </Button>
                    <div className="flex items-center gap-2">
                      <Image src={icon} alt="icon" />
                      <div className="bg-yellow-400 flex gap-1 items-center px-2 text-black">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M9.59008 1.80835C8.53425 1.80835 7.58925 2.32168 7.00008 3.10918C6.41091 2.32168 5.46591 1.80835 4.41008 1.80835C2.61925 1.80835 1.16675 3.26668 1.16675 5.06918C1.16675 5.76335 1.27758 6.40502 1.47008 7.00002C2.39175 9.91668 5.23258 11.6608 6.63842 12.1392C6.83675 12.2092 7.16341 12.2092 7.36175 12.1392C8.76758 11.6608 11.6084 9.91668 12.5301 7.00002C12.7226 6.40502 12.8334 5.76335 12.8334 5.06918C12.8334 3.26668 11.3809 1.80835 9.59008 1.80835Z"
                            fill="black"
                          />
                        </svg>
                        <p>116</p>
                      </div>
                      <p>#1463</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image src={bitcoin} alt="bitcoin" />
                      <input
                        className="bg-black text-white mr-1 pl-2 w-20"
                        value="0"
                        type="number"
                      />
                      <p>0.00</p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M14.9248 8.93329H12.3498V2.93329C12.3498 1.53329 11.5914 1.24996 10.6664 2.29996L9.99977 3.05829L4.3581 9.47496C3.5831 10.35 3.9081 11.0666 5.07477 11.0666H7.64977V17.0666C7.64977 18.4666 8.4081 18.75 9.3331 17.7L9.99977 16.9416L15.6414 10.525C16.4164 9.64996 16.0914 8.93329 14.9248 8.93329Z"
                          fill="#EFD22E"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-white flex justify-end items-center gap-2 text-end pr-24">
                    <p>Buyer sees: -</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M8.00016 1.33325C4.32683 1.33325 1.3335 4.32659 1.3335 7.99992C1.3335 11.6733 4.32683 14.6666 8.00016 14.6666C11.6735 14.6666 14.6668 11.6733 14.6668 7.99992C14.6668 4.32659 11.6735 1.33325 8.00016 1.33325ZM7.50016 5.33325C7.50016 5.05992 7.72683 4.83325 8.00016 4.83325C8.2735 4.83325 8.50016 5.05992 8.50016 5.33325V8.66658C8.50016 8.93992 8.2735 9.16658 8.00016 9.16658C7.72683 9.16658 7.50016 8.93992 7.50016 8.66658V5.33325ZM8.6135 10.9199C8.58016 11.0066 8.5335 11.0733 8.4735 11.1399C8.40683 11.1999 8.3335 11.2466 8.2535 11.2799C8.1735 11.3133 8.08683 11.3333 8.00016 11.3333C7.9135 11.3333 7.82683 11.3133 7.74683 11.2799C7.66683 11.2466 7.5935 11.1999 7.52683 11.1399C7.46683 11.0733 7.42016 11.0066 7.38683 10.9199C7.3535 10.8399 7.3335 10.7533 7.3335 10.6666C7.3335 10.5799 7.3535 10.4933 7.38683 10.4133C7.42016 10.3333 7.46683 10.2599 7.52683 10.1933C7.5935 10.1333 7.66683 10.0866 7.74683 10.0533C7.90683 9.98658 8.0935 9.98658 8.2535 10.0533C8.3335 10.0866 8.40683 10.1333 8.4735 10.1933C8.5335 10.2599 8.58016 10.3333 8.6135 10.4133C8.64683 10.4933 8.66683 10.5799 8.66683 10.6666C8.66683 10.7533 8.64683 10.8399 8.6135 10.9199Z"
                        fill="white"
                        fill-opacity="0.5"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center bg-[#161616] my-2 justify-between px-2 py-2">
                    <Button variant="yellow" size="xs">
                      LIST
                    </Button>
                    <div className="flex items-center gap-2">
                      <Image src={icon} alt="icon" />
                      <div className="bg-yellow-400 flex gap-1 items-center px-2 text-black">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M9.59008 1.80835C8.53425 1.80835 7.58925 2.32168 7.00008 3.10918C6.41091 2.32168 5.46591 1.80835 4.41008 1.80835C2.61925 1.80835 1.16675 3.26668 1.16675 5.06918C1.16675 5.76335 1.27758 6.40502 1.47008 7.00002C2.39175 9.91668 5.23258 11.6608 6.63842 12.1392C6.83675 12.2092 7.16341 12.2092 7.36175 12.1392C8.76758 11.6608 11.6084 9.91668 12.5301 7.00002C12.7226 6.40502 12.8334 5.76335 12.8334 5.06918C12.8334 3.26668 11.3809 1.80835 9.59008 1.80835Z"
                            fill="black"
                          />
                        </svg>
                        <p>116</p>
                      </div>
                      <p>#1463</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image src={bitcoin} alt="bitcoin" />
                      <input
                        className="bg-black text-white mr-1 pl-2 w-20"
                        value="0"
                        type="number"
                      />
                      <p>0.00</p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M14.9248 8.93329H12.3498V2.93329C12.3498 1.53329 11.5914 1.24996 10.6664 2.29996L9.99977 3.05829L4.3581 9.47496C3.5831 10.35 3.9081 11.0666 5.07477 11.0666H7.64977V17.0666C7.64977 18.4666 8.4081 18.75 9.3331 17.7L9.99977 16.9416L15.6414 10.525C16.4164 9.64996 16.0914 8.93329 14.9248 8.93329Z"
                          fill="#EFD22E"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-white flex justify-end items-center gap-2 text-end pr-24">
                    <p>Buyer sees: -</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M8.00016 1.33325C4.32683 1.33325 1.3335 4.32659 1.3335 7.99992C1.3335 11.6733 4.32683 14.6666 8.00016 14.6666C11.6735 14.6666 14.6668 11.6733 14.6668 7.99992C14.6668 4.32659 11.6735 1.33325 8.00016 1.33325ZM7.50016 5.33325C7.50016 5.05992 7.72683 4.83325 8.00016 4.83325C8.2735 4.83325 8.50016 5.05992 8.50016 5.33325V8.66658C8.50016 8.93992 8.2735 9.16658 8.00016 9.16658C7.72683 9.16658 7.50016 8.93992 7.50016 8.66658V5.33325ZM8.6135 10.9199C8.58016 11.0066 8.5335 11.0733 8.4735 11.1399C8.40683 11.1999 8.3335 11.2466 8.2535 11.2799C8.1735 11.3133 8.08683 11.3333 8.00016 11.3333C7.9135 11.3333 7.82683 11.3133 7.74683 11.2799C7.66683 11.2466 7.5935 11.1999 7.52683 11.1399C7.46683 11.0733 7.42016 11.0066 7.38683 10.9199C7.3535 10.8399 7.3335 10.7533 7.3335 10.6666C7.3335 10.5799 7.3535 10.4933 7.38683 10.4133C7.42016 10.3333 7.46683 10.2599 7.52683 10.1933C7.5935 10.1333 7.66683 10.0866 7.74683 10.0533C7.90683 9.98658 8.0935 9.98658 8.2535 10.0533C8.3335 10.0866 8.40683 10.1333 8.4735 10.1933C8.5335 10.2599 8.58016 10.3333 8.6135 10.4133C8.64683 10.4933 8.66683 10.5799 8.66683 10.6666C8.66683 10.7533 8.64683 10.8399 8.6135 10.9199Z"
                        fill="white"
                        fill-opacity="0.5"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center bg-[#161616] my-2 justify-between px-2 py-2">
                    <Button variant="yellow" size="xs">
                      LIST
                    </Button>
                    <div className="flex items-center gap-2">
                      <Image src={icon} alt="icon" />
                      <div className="bg-[#656565] flex gap-1 items-center px-2 text-black">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M9.59008 1.80835C8.53425 1.80835 7.58925 2.32168 7.00008 3.10918C6.41091 2.32168 5.46591 1.80835 4.41008 1.80835C2.61925 1.80835 1.16675 3.26668 1.16675 5.06918C1.16675 5.76335 1.27758 6.40502 1.47008 7.00002C2.39175 9.91668 5.23258 11.6608 6.63842 12.1392C6.83675 12.2092 7.16341 12.2092 7.36175 12.1392C8.76758 11.6608 11.6084 9.91668 12.5301 7.00002C12.7226 6.40502 12.8334 5.76335 12.8334 5.06918C12.8334 3.26668 11.3809 1.80835 9.59008 1.80835Z"
                            fill="black"
                          />
                        </svg>
                        <p>116</p>
                      </div>
                      <p>#1463</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image src={bitcoin} alt="bitcoin" />
                      <input
                        className="bg-black text-white mr-1 pl-2 w-20"
                        value="0"
                        type="number"
                      />
                      <p>0.00</p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M14.9248 8.93329H12.3498V2.93329C12.3498 1.53329 11.5914 1.24996 10.6664 2.29996L9.99977 3.05829L4.3581 9.47496C3.5831 10.35 3.9081 11.0666 5.07477 11.0666H7.64977V17.0666C7.64977 18.4666 8.4081 18.75 9.3331 17.7L9.99977 16.9416L15.6414 10.525C16.4164 9.64996 16.0914 8.93329 14.9248 8.93329Z"
                          fill="#EFD22E"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-white flex justify-end items-center gap-2 text-end pr-24">
                    <p>Buyer sees: -</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M8.00016 1.33325C4.32683 1.33325 1.3335 4.32659 1.3335 7.99992C1.3335 11.6733 4.32683 14.6666 8.00016 14.6666C11.6735 14.6666 14.6668 11.6733 14.6668 7.99992C14.6668 4.32659 11.6735 1.33325 8.00016 1.33325ZM7.50016 5.33325C7.50016 5.05992 7.72683 4.83325 8.00016 4.83325C8.2735 4.83325 8.50016 5.05992 8.50016 5.33325V8.66658C8.50016 8.93992 8.2735 9.16658 8.00016 9.16658C7.72683 9.16658 7.50016 8.93992 7.50016 8.66658V5.33325ZM8.6135 10.9199C8.58016 11.0066 8.5335 11.0733 8.4735 11.1399C8.40683 11.1999 8.3335 11.2466 8.2535 11.2799C8.1735 11.3133 8.08683 11.3333 8.00016 11.3333C7.9135 11.3333 7.82683 11.3133 7.74683 11.2799C7.66683 11.2466 7.5935 11.1999 7.52683 11.1399C7.46683 11.0733 7.42016 11.0066 7.38683 10.9199C7.3535 10.8399 7.3335 10.7533 7.3335 10.6666C7.3335 10.5799 7.3535 10.4933 7.38683 10.4133C7.42016 10.3333 7.46683 10.2599 7.52683 10.1933C7.5935 10.1333 7.66683 10.0866 7.74683 10.0533C7.90683 9.98658 8.0935 9.98658 8.2535 10.0533C8.3335 10.0866 8.40683 10.1333 8.4735 10.1933C8.5335 10.2599 8.58016 10.3333 8.6135 10.4133C8.64683 10.4933 8.66683 10.5799 8.66683 10.6666C8.66683 10.7533 8.64683 10.8399 8.6135 10.9199Z"
                        fill="white"
                        fill-opacity="0.5"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center bg-[#161616] my-2 justify-between px-2 py-2">
                    <Button variant="yellow" size="xs">
                      LIST
                    </Button>
                    <div className="flex items-center gap-2">
                      <Image src={icon} alt="icon" />
                      <div className="bg-[#656565] flex gap-1 items-center px-2 text-black">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M9.59008 1.80835C8.53425 1.80835 7.58925 2.32168 7.00008 3.10918C6.41091 2.32168 5.46591 1.80835 4.41008 1.80835C2.61925 1.80835 1.16675 3.26668 1.16675 5.06918C1.16675 5.76335 1.27758 6.40502 1.47008 7.00002C2.39175 9.91668 5.23258 11.6608 6.63842 12.1392C6.83675 12.2092 7.16341 12.2092 7.36175 12.1392C8.76758 11.6608 11.6084 9.91668 12.5301 7.00002C12.7226 6.40502 12.8334 5.76335 12.8334 5.06918C12.8334 3.26668 11.3809 1.80835 9.59008 1.80835Z"
                            fill="black"
                          />
                        </svg>
                        <p>116</p>
                      </div>
                      <p>#1463</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image src={bitcoin} alt="bitcoin" />
                      <input
                        className="bg-black text-white mr-1 pl-2 w-20"
                        value="0"
                        type="number"
                      />
                      <p>0.00</p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M14.9248 8.93329H12.3498V2.93329C12.3498 1.53329 11.5914 1.24996 10.6664 2.29996L9.99977 3.05829L4.3581 9.47496C3.5831 10.35 3.9081 11.0666 5.07477 11.0666H7.64977V17.0666C7.64977 18.4666 8.4081 18.75 9.3331 17.7L9.99977 16.9416L15.6414 10.525C16.4164 9.64996 16.0914 8.93329 14.9248 8.93329Z"
                          fill="#EFD22E"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-white flex justify-end items-center gap-2 text-end pr-24">
                    <p>Buyer sees: -</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M8.00016 1.33325C4.32683 1.33325 1.3335 4.32659 1.3335 7.99992C1.3335 11.6733 4.32683 14.6666 8.00016 14.6666C11.6735 14.6666 14.6668 11.6733 14.6668 7.99992C14.6668 4.32659 11.6735 1.33325 8.00016 1.33325ZM7.50016 5.33325C7.50016 5.05992 7.72683 4.83325 8.00016 4.83325C8.2735 4.83325 8.50016 5.05992 8.50016 5.33325V8.66658C8.50016 8.93992 8.2735 9.16658 8.00016 9.16658C7.72683 9.16658 7.50016 8.93992 7.50016 8.66658V5.33325ZM8.6135 10.9199C8.58016 11.0066 8.5335 11.0733 8.4735 11.1399C8.40683 11.1999 8.3335 11.2466 8.2535 11.2799C8.1735 11.3133 8.08683 11.3333 8.00016 11.3333C7.9135 11.3333 7.82683 11.3133 7.74683 11.2799C7.66683 11.2466 7.5935 11.1999 7.52683 11.1399C7.46683 11.0733 7.42016 11.0066 7.38683 10.9199C7.3535 10.8399 7.3335 10.7533 7.3335 10.6666C7.3335 10.5799 7.3535 10.4933 7.38683 10.4133C7.42016 10.3333 7.46683 10.2599 7.52683 10.1933C7.5935 10.1333 7.66683 10.0866 7.74683 10.0533C7.90683 9.98658 8.0935 9.98658 8.2535 10.0533C8.3335 10.0866 8.40683 10.1333 8.4735 10.1933C8.5335 10.2599 8.58016 10.3333 8.6135 10.4133C8.64683 10.4933 8.66683 10.5799 8.66683 10.6666C8.66683 10.7533 8.64683 10.8399 8.6135 10.9199Z"
                        fill="white"
                        fill-opacity="0.5"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-[30%] border-l px-1">
                  <div className="border-b">
                    <p>SUMMARY</p>
                    <div className="flex text-white pt-3 justify-between">
                      <p>List for</p>
                      <p>items[4]</p>
                    </div>
                    <div className="flex justify-between my-2">
                      <div className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                        >
                          <g opacity="0.6">
                            <path
                              d="M1 1.01143L9.2 9.21143"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M5.16992 10.0112L9.99992 10.0112L9.99992 5.18123"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                        </svg>
                        <p>min</p>
                      </div>
                      <p>0.00</p>
                    </div>
                    <div className="flex justify-between my-2">
                      <div className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                        >
                          <g opacity="0.6">
                            <path
                              d="M1 1.01143L9.2 9.21143"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M5.16992 10.0112L9.99992 10.0112L9.99992 5.18123"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                        </svg>
                        <p>max</p>
                      </div>
                      <p>0.00</p>
                    </div>
                    <div className="flex justify-between my-2">
                      <div className="flex items-center gap-1">
                        <p className="text-white">Market Fee</p>
                      </div>
                      <p className="text-green-400">FREE</p>
                    </div>
                  </div>
                  <div className="flex justify-between py-3 text-white">
                    <p>You Earn</p>
                    <div className="flex items-center gap-1">
                      <Image src={bitcoin} alt="coin" />
                      <p>0.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="border-t py-3">
            <Button
              className={` text-black ${
                selectedValue === "option-one"
                  ? "bg-green-400"
                  : "bg-red-600 text-white"
              }`}
              variant="green"
              size="lg"
              type="submit"
            >
              EXECUTE 4 TRANSACTIONS
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
