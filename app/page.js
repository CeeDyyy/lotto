'use client'

import React, { useState } from "react"
import Combination from "./combination";
import CombinationOfTwo from "./combinationoftwo";
import Switch from "./switch";
import SetXBaht from "./setxbaht";
import UpDown from "./updown";
import BuyandWin from "./buyandwin";

export default function Home() {
  const [page, setPage] = useState("combination")


  return (
    <div className="flex flex-col justify-center">
      <div className="flex-auto grid grid-cols-3 divide-x rounded-lg shadow">
        <button
          onClick={() => setPage("combination")}
          className={`py-3 rounded-l-lg ${page === "combination"
            ? "bg-gray-200"
            : "bg-white hover:bg-gray-100 active:bg-gray-300"
            } duration-300`}
        >
          สูตร 1
        </button>
        <button
          onClick={() => setPage("updown")}
          className={`py-3 ${page === "updown"
            ? "bg-gray-100"
            : "bg-white hover:bg-gray-100 active:bg-gray-300"
            } duration-300`}
        >
          สูตร 2
        </button>
        <button
          onClick={() => setPage("buyandwin")}
          className={`py-3 ${page === "buyandwin"
            ? "bg-gray-100"
            : "bg-white hover:bg-gray-100 active:bg-gray-300"
            } duration-300`}
        >
          สูตร 3
        </button>
      </div>

      <div className={page === 'combination' ? "block" : "hidden"}>
        <Combination />
      </div>
      <div className={page === 'two' ? "block" : "hidden"}>
        <CombinationOfTwo />
      </div>
      <div className={page === 'updown' ? "block" : "hidden"}>
        <UpDown />
      </div>
      <div className={page === 'switch' ? "block" : "hidden"}>
        <Switch />
      </div>
      <div className={page === 'setxbaht' ? "block" : "hidden"}>
        <SetXBaht />
      </div>
      <div className={page === 'buyandwin' ? "block" : "hidden"}>
        <BuyandWin />
      </div>
    </div>
  )
}
