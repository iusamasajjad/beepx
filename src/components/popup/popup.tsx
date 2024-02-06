import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import Image from "next/image"
import icon from "./icon.png"
import bitcoin from "./floorimage.png"

interface PopupProps {
  total: number
}
export const Popup = ({ total }: PopupProps) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="px-3 py-2 bg-green-400 text-sm text-black">
          buy {total} items
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center border-b pb-2">
              Execute
            </DialogTitle>
            <DialogDescription>
              <div className="flex gap-2">
                <div className="w-[70%]">
                  <p>TRANSACTIONS</p>
                  <div className="flex items-center bg-[#161616] my-2 justify-between px-2 py-2">
                    <Button variant="yellow" size="xs">
                      BUY
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
                  <div className="flex items-center bg-[#161616] my-2 justify-between px-2 py-2">
                    <Button variant="yellow" size="xs">
                      BUY
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
                  <div className="flex items-center bg-[#161616] my-2 justify-between px-2 py-2">
                    <Button variant="yellow" size="xs">
                      BUY
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
                  <div className="flex items-center bg-[#161616] my-2 justify-between px-2 py-2">
                    <Button variant="yellow" size="xs">
                      BUY
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
                        <p>Royalty</p>
                      </div>
                      <p>0.5%</p>
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
                        <p>Taker Fee</p>
                      </div>
                      <p>1.4%</p>
                    </div>
                  </div>
                  <div className="flex justify-between py-3 text-white">
                    <p>TOTAL</p>
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
            <Button variant="green" size="lg" type="submit">
              EXECUTE 4 TRANSACTIONS
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
