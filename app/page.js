'use client'

import React, { useState } from "react"
import Combination from "./combination";
import CombinationOfTwo from "./combinationoftwo";
import Switch from "./switch";
import SetXBaht from "./setxbaht";
import UpDown from "./updown";
import BuyandWin from "./buyandwin";
import Win from "./win";
import CombinationFourToTwo from "./combinationfourtotwo";

export default function Home() {
  const [page, setPage] = useState("combination")


  return (
    <div className="flex flex-col justify-center">
      <div className="flex-auto grid grid-cols-5 divide-x rounded-lg shadow">
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
          onClick={() => setPage("win")}
          className={`py-3 ${page === "win"
            ? "bg-gray-100"
            : "bg-white hover:bg-gray-100 active:bg-gray-300"
            } duration-300`}
        >
          สูตร 3
        </button>
        <button
          onClick={() => setPage("buyandwin")}
          className={`py-3 ${page === "buyandwin"
            ? "bg-gray-100"
            : "bg-white hover:bg-gray-100 active:bg-gray-300"
            } duration-300`}
        >
          สูตร 4
        </button>
        <button
          onClick={() => setPage("fourtotwo")}
          className={`py-3 rounded-l-lg ${page === "fourtotwo"
            ? "bg-gray-200"
            : "bg-white hover:bg-gray-100 active:bg-gray-300"
            } duration-300`}
        >
          สูตร 5
        </button>
      </div>

      {page === 'combination' && <Combination />}
      {page === 'two' && <CombinationOfTwo />}
      {page === 'updown' && <UpDown />}
      {page === 'switch' && <Switch />}
      {page === 'setxbaht' && <SetXBaht />}
      {page === 'buyandwin' && <BuyandWin />}
      {page === 'win' && <Win />}
      {page === 'fourtotwo' && <CombinationFourToTwo />}
    </div>
  )
}
