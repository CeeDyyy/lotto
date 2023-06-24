'use client'

import React, { useState } from "react"
import Combination from "./combination";
import Switch from "./switch";
import SetXBaht from "./setxbaht";

export default function Home() {
  const [page, setPage] = useState("combination")


  return (
    <div className="flex flex-col justify-center">
      <div className="flex-auto grid grid-cols-2 divide-x rounded-lg shadow">
        <button
          onClick={() => setPage("combination")}
          className={`py-3 rounded-l-lg ${page === "combination"
            ? "bg-gray-200"
            : "bg-white hover:bg-gray-100 active:bg-gray-300"
            } duration-300`}
        >
          สูตร 1
        </button>
        {/* <button
          onClick={() => setPage("switch")}
          className={`py-3 ${page === "switch"
            ? "bg-gray-100"
            : "bg-white hover:bg-gray-100 active:bg-gray-300"
            } duration-300`}
        >
          สูตร 2
        </button> */}
        <button
          onClick={() => setPage("setxbaht")}
          className={`py-3 ${page === "setxbaht"
            ? "bg-gray-100"
            : "bg-white hover:bg-gray-100 active:bg-gray-300"
            } duration-300`}
        >
          สูตร 2
        </button>
      </div>

      {page === "combination" && <Combination />}
      {page === "switch" && <Switch />}
      {page === "setxbaht" && <SetXBaht />}
    </div>
  )
}