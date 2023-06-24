'use client'

import React, { useState } from "react"

export default function SetXBaht() {
    const [count, setCount] = useState()
    const [cost, setCost] = useState()

    return (
        <div className="m-2 flex flex-col justify-center">
            <input type="number" placeholder="จำนวนชุด" className="mt-4 p-2 border-2 border-blue-200 rounded-lg w-full" onChange={(e) => setCount(e.target.value)} />
            <input type="number" placeholder="บาท (฿)" className="mt-4 p-2 border-2 border-blue-200 rounded-lg w-full" onChange={(e) => setCost(e.target.value)} />
            <p className="mt-4"><span className="font-bold">รวม : </span><span className="text-5xl">{count * cost * 4} บาท</span></p>
        </div>
    )
}