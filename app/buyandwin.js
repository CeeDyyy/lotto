'use client'

import React, { useState, useEffect } from "react"

export default function BuyandWin() {
    const name = ["ยาย", "ดา", "อจ.", "นช", "_"]
    const [nameIndex, setNameIndex] = useState(0)
    const [buy1, setBuy1] = useState("");
    const [buy2, setBuy2] = useState("");
    const [buy3, setBuy3] = useState("");
    const [buy4, setBuy4] = useState("");
    const [buy5, setBuy5] = useState("");
    const [buy6, setBuy6] = useState("");
    const [win1, setWin1] = useState("");
    const [win2, setWin2] = useState("");
    const [win3, setWin3] = useState("");
    const [win4, setWin4] = useState("");
    const [win5, setWin5] = useState("");
    const [win6, setWin6] = useState("");
    const [finalResult, setFinalResult] = useState("");
    const [resultContent, setResultContent] = useState("สุทธิ")

    useEffect(() => {
        setFinalResult((Number(win1) + Number(win2) + Number(win3) + Number(win4) + Number(win5) + Number(win6)) - (Number(buy1) + Number(buy2) + Number(buy3) + Number(buy4) + Number(buy5) + Number(buy6)))
    }, [buy1, buy2, buy3, buy4, buy5, buy6, win1, win2, win3, win4, win5, win6])

    useEffect(() => {
        setResultContent(finalResult < 0 ? "ขาดทุน" : finalResult > 0 ? "กำไร" : "สุทธิ")
    }, [finalResult])

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-3">
                <div className="border-x-2">
                    <button onClick={() => nameIndex < 4 ? setNameIndex(nameIndex + 1) : setNameIndex(0)} className="pt-1 w-full">{name[nameIndex]}</button>
                    <select className="pt-0.5 w-full text-end border-2">
                        <option>เฉพาะกิจ</option>
                        <option>รัฐบาล</option>
                    </select>
                    <br />
                    <select className="pt-0.5 w-full text-end border-2">
                        <option>พิเศษ</option>
                        <option>ออมสิน</option>
                    </select>
                    <br />
                    <select className="pt-0.5 w-full text-end border-2">
                        <option>ปกติ</option>
                        <option>ธกส</option>
                    </select>
                    <br />
                    <p className="pt-0.5 w-full text-end border-2">VIP</p>
                    <p className="pt-0.5 w-full text-end border-2">ลาวพัฒนา</p>
                    <p className="pt-0.5 w-full text-end border-2">ลาวสามัคคี</p>
                    <p className="pt-0.5 collapse">x</p>
                    <p className="pt-0.5 w-full text-end border-2">{resultContent}</p>
                </div>
                <div className="border-x-2">
                    <p className="pt-1 w-full text-center">ยอดซื้อ</p>
                    <input type="number" className="w-full text-end border-2" onChange={(e) => setBuy1(e.target.value)} />
                    <input type="number" className="w-full text-end border-2" onChange={(e) => setBuy2(e.target.value)} />
                    <input type="number" className="w-full text-end border-2" onChange={(e) => setBuy3(e.target.value)} />
                    <input type="number" className="w-full text-end border-2" onChange={(e) => setBuy4(e.target.value)} />
                    <input type="number" className="w-full text-end border-2" onChange={(e) => setBuy5(e.target.value)} />
                    <input type="number" className="w-full text-end border-2" onChange={(e) => setBuy6(e.target.value)} />
                    <p className="pt-1">{Number(buy1) + Number(buy2) + Number(buy3) + Number(buy4) + Number(buy5) + Number(buy6)}</p>
                    <p className="pt-1">{finalResult}</p>
                </div>
                <div className="border-x-2">
                    <p className="pt-1 w-full text-center">ยอดรับ</p>
                    <input type="number" className="w-full text-end border-2" onChange={(e) => setWin1(e.target.value)} />
                    <input type="number" className="w-full text-end border-2" onChange={(e) => setWin2(e.target.value)} />
                    <input type="number" className="w-full text-end border-2" onChange={(e) => setWin3(e.target.value)} />
                    <input type="number" className="w-full text-end border-2" onChange={(e) => setWin4(e.target.value)} />
                    <input type="number" className="w-full text-end border-2" onChange={(e) => setWin5(e.target.value)} />
                    <input type="number" className="w-full text-end border-2" onChange={(e) => setWin6(e.target.value)} />
                    <p className="pt-1">{Number(win1) + Number(win2) + Number(win3) + Number(win4) + Number(win5) + Number(win6)}</p>
                </div>
            </div>
        </div>
    )
}
