"use client"
import { useState } from "react"
import { Button } from "../ui/button"

export const Mint = () => {
  const [mint, setMint] = useState(true)
  const [project, setProject] = useState(false)

  return (
    <div className="border border-gray-800 py-3">
      <div className="flex border-b border-gray-800 gap-4">
        <button
          onClick={() => {
            setMint(true)
            setProject(false)
          }}
        >
          <p
            className={` px-3 ${
              mint && "text-yellow-300 border-b border-yellow-400"
            }`}
          >
            Mint
          </p>
        </button>
        <button
          onClick={() => {
            setMint(false)
            setProject(true)
          }}
        >
          <p
            className={` px-3 ${
              project && "text-yellow-300 border-b border-yellow-400"
            }`}
          >
            Project
          </p>
        </button>
      </div>
      {mint && (
        <div>
          <div className="text-center px-3">
            <p className="py-3 text-xl">SOLD OUT</p>
            <div className="w-full h-3 bg-yellow-400"></div>
            <p className="py-3">Minted 4000 of 4000</p>
          </div>
          <div>
            <p className="text-xl mt-4 text-center">Select Mint Phase</p>
          </div>
          <div className="py-3 border border-gray-800 mx-3 px-3 my-5">
            <p>Waitlist</p>
            <div className="text-center">
              <p className="py-2">Price: 0.9</p>
              <p>
                Ended <span className="text-red-600">0d 1h 52m 49s</span> ago
              </p>
            </div>
            <div className="w-full h-3 bg-gray-800 my-3">
              <div className="w-[80%] h-3 bg-yellow-400"></div>
            </div>
            <p className="text-center">Minted 3217 of 4000</p>
            <Button className="rounded w-full my-2" disabled>
              SOLD OUT
            </Button>
          </div>
          <div className="py-3 border border-gray-800 mx-3 px-3 my-5">
            <p>Waitlist</p>
            <div className="text-center">
              <p className="py-2">Price: 0.9</p>
              <p>
                Ended <span className="text-red-600">0d 1h 52m 49s</span> ago
              </p>
            </div>
            <div className="w-full h-3 bg-gray-800 my-3">
              <div className="w-[100%] h-3 bg-yellow-400"></div>
            </div>
            <p className="text-center">Minted 3217 of 4000</p>
            <Button className="rounded w-full my-2" disabled>
              SOLD OUT
            </Button>
          </div>
        </div>
      )}
      {project && (
        <div className="flex justify-center items-center py-3">
          No data found
        </div>
      )}
    </div>
  )
}
