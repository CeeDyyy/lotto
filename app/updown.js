'use client'

import React, { useState } from "react"

export default function UpDown() {

    return (
        <div className="flex justify-center">
            <div className="flex text-2xl divide-x-2 divide-black">
                <OneUpDown />
                <OneUpDown />
            </div>
        </div>
    )
}

function OneUpDown() {
    const name = ["ยาย", "ดา", "อจ.", "นช", "_"]
    const [nameIndex, setNameIndex] = useState(0)
    const [up1, setUp1] = useState("");
    const [up2, setUp2] = useState("");
    const [up3, setUp3] = useState("");
    const [up4, setUp4] = useState("");
    const [up5, setUp5] = useState("");
    const [up6, setUp6] = useState("");
    const [up7, setUp7] = useState("");
    const [up8, setUp8] = useState("");
    const [up9, setUp9] = useState("");
    const [up10, setUp10] = useState("");
    const [down1, setDown1] = useState("");
    const [down2, setDown2] = useState("");
    const [down3, setDown3] = useState("");
    const [down4, setDown4] = useState("");
    const [down5, setDown5] = useState("");
    const [down6, setDown6] = useState("");
    const [down7, setDown7] = useState("");
    const [down8, setDown8] = useState("");
    const [down9, setDown9] = useState("");
    const [down10, setDown10] = useState("");
    const [runLeft, setRunLeft] = useState("");
    const [swipeLeft, setSwipeLeft] = useState("");
    const [runRight, setRunRight] = useState("");
    const [swipeRight, setSwipeRight] = useState("");

    return (
        <div className="grid grid-cols-3">
            <div className="border-x-2">
                <button onClick={() => nameIndex < 4 ? setNameIndex(nameIndex + 1) : setNameIndex(0)} className="pt-1 w-full">{name[nameIndex]}</button>
                <input type="number" className="w-full text-end border-2" />
                <input type="number" className="w-full text-end border-2" />
                <input type="number" className="w-full text-end border-2" />
                <input type="number" className="w-full text-end border-2" />
                <input type="number" className="w-full text-end border-2" />
                <input type="number" className="w-full text-end border-2" />
                <input type="number" className="w-full text-end border-2" />
                <input type="number" className="w-full text-end border-2" />
                <input type="number" className="w-full text-end border-2" />
                <input type="number" className="w-full text-end border-2" />
                <input type="number" className="w-full text-end border-2" />
                <input type="number" className="w-full text-end border-2" />
                <p className="text-end collapse">x</p>
                <p className="pt-2 text-end">รวม</p>
            </div>
            <div className="border-x-2">
                <p className="pt-1">บ</p>
                <input type="number" className="w-full text-end border-2" onChange={(e) => setUp1(e.target.value)} />
                <input type="number" className="w-full text-end border-2" onChange={(e) => setUp2(e.target.value)} />
                <input type="number" className="w-full text-end border-2" onChange={(e) => setUp3(e.target.value)} />
                <input type="number" className="w-full text-end border-2" onChange={(e) => setUp4(e.target.value)} />
                <input type="number" className="w-full text-end border-2" onChange={(e) => setUp5(e.target.value)} />
                <input type="number" className="w-full text-end border-2" onChange={(e) => setUp6(e.target.value)} />
                <input type="number" className="w-full text-end border-2" onChange={(e) => setUp7(e.target.value)} />
                <input type="number" className="w-full text-end border-2" onChange={(e) => setUp8(e.target.value)} />
                <input type="number" className="w-full text-end border-2" onChange={(e) => setUp9(e.target.value)} />
                <input type="number" className="w-full text-end border-2" onChange={(e) => setUp10(e.target.value)} />
                <input type="number" className="w-full text-end border-2" onChange={(e) => setRunLeft(e.target.value)} />
                <input type="number" className="w-full text-end border-2" onChange={(e) => setSwipeLeft(e.target.value)} />
                <p className="pt-1">{Number(up1) + Number(up2) + Number(up3) + Number(up4) + Number(up5) + Number(up6) + Number(up7) + Number(up8) + Number(up9) + Number(up10) + Number(runLeft) + Number(swipeLeft)}</p>
                <p className="pt-1">{Number(up1) + Number(up2) + Number(up3) + Number(up4) + Number(up5) + Number(up6) + Number(up7) + Number(up8) + Number(up9) + Number(up10) + Number(runLeft) + Number(swipeLeft) + Number(down1) + Number(down2) + Number(down3) + Number(down4) + Number(down5) + Number(down6) + Number(down7) + Number(down8) + Number(down9) + Number(down10) + Number(runRight) + Number(swipeRight)}</p>
            </div>
            <div className="border-x-2">
                <p className="pt-1">ล</p>
                <input type="number" className="w-full text-end border-2" onChange={(e) => setDown1(e.target.value)} />
                <input type="number" className="w-full text-end border-2" onChange={(e) => setDown2(e.target.value)} />
                <input type="number" className="w-full text-end border-2" onChange={(e) => setDown3(e.target.value)} />
                <input type="number" className="w-full text-end border-2" onChange={(e) => setDown4(e.target.value)} />
                <input type="number" className="w-full text-end border-2" onChange={(e) => setDown5(e.target.value)} />
                <input type="number" className="w-full text-end border-2" onChange={(e) => setDown6(e.target.value)} />
                <input type="number" className="w-full text-end border-2" onChange={(e) => setDown7(e.target.value)} />
                <input type="number" className="w-full text-end border-2" onChange={(e) => setDown8(e.target.value)} />
                <input type="number" className="w-full text-end border-2" onChange={(e) => setDown9(e.target.value)} />
                <input type="number" className="w-full text-end border-2" onChange={(e) => setDown10(e.target.value)} />
                <input type="number" className="w-full text-end border-2" onChange={(e) => setRunRight(e.target.value)} />
                <input type="number" className="w-full text-end border-2" onChange={(e) => setSwipeRight(e.target.value)} />
                <p className="pt-1">{Number(down1) + Number(down2) + Number(down3) + Number(down4) + Number(down5) + Number(down6) + Number(down7) + Number(down8) + Number(down9) + Number(down10) + Number(runRight) + Number(swipeRight)}</p>
            </div>
        </div>
    )
}