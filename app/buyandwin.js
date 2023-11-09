'use client'

import React, { useState, useEffect, useReducer } from "react"

export default function BuyandWin() {
    const today = new Date();
    const months = ["มค", "กพ", "มีค", "เมย", "พค", "มิย", "กค", "สค", "กย", "ตค", "พย", "ธค",]
    const name = ["ยาย", "ดา", "อจ.", "นช", "_"]
    const [nameIndex, setNameIndex] = useState(0)
    const type = ["เฉพาะกิจ", "รัฐบาล"]
    const [stateType, toggleType] = useReducer(x  => !x, false)
    const saving = ["พิเศษ", "ออมสิน"]
    const [stateSaving, toggleSaving] = useReducer(x => !x, false)
    const normal = ["ปกติ", "ธกส"]
    const [stateNormal, toggleNormal] = useReducer(x => !x, false)
    const [buy1, setBuy1] = useState("");
    const [buy2, setBuy2] = useState("");
    const [buy3, setBuy3] = useState("");
    const [buy4, setBuy4] = useState("");
    const [buy5, setBuy5] = useState("");
    const [buy6, setBuy6] = useState("");
    const [win11, setWin11] = useState("");
    const [win12, setWin12] = useState("");
    const [win13, setWin13] = useState("");
    const [win1, setWin1] = useState("");
    const [win21, setWin21] = useState("");
    const [win22, setWin22] = useState("");
    const [win23, setWin23] = useState("");
    const [win2, setWin2] = useState("");
    const [win31, setWin31] = useState("");
    const [win32, setWin32] = useState("");
    const [win33, setWin33] = useState("");
    const [win3, setWin3] = useState("");
    const [win41, setWin41] = useState("");
    const [win42, setWin42] = useState("");
    const [win43, setWin43] = useState("");
    const [win4, setWin4] = useState("");
    const [win51, setWin51] = useState("");
    const [win52, setWin52] = useState("");
    const [win53, setWin53] = useState("");
    const [win5, setWin5] = useState("");
    const [win61, setWin61] = useState("");
    const [win62, setWin62] = useState("");
    const [win63, setWin63] = useState("");
    const [win6, setWin6] = useState("");
    const [finalResult, setFinalResult] = useState("");
    const [resultContent, setResultContent] = useState("สุทธิ")

    useEffect(() => {
        setWin1(Number(win11) + Number(win12) + Number(win13))
    }, [win11, win12, win13])

    useEffect(() => {
        setWin2(Number(win21) + Number(win22) + Number(win23))
    }, [win21, win22, win23])

    useEffect(() => {
        setWin3(Number(win31) + Number(win32) + Number(win33))
    }, [win31, win32, win33])

    useEffect(() => {
        setWin4(Number(win41) + Number(win42) + Number(win43))
    }, [win41, win42, win43])

    useEffect(() => {
        setWin5(Number(win51) + Number(win52) + Number(win53))
    }, [win51, win52, win53])

    useEffect(() => {
        setWin6(Number(win61) + Number(win62) + Number(win63))
    }, [win61, win62, win63])

    useEffect(() => {
        setFinalResult((Number(win1) + Number(win2) + Number(win3) + Number(win4) + Number(win5) + Number(win6)) - (Number(buy1) + Number(buy2) + Number(buy3) + Number(buy4) + Number(buy5) + Number(buy6)))
    }, [buy1, buy2, buy3, buy4, buy5, buy6, win1, win2, win3, win4, win5, win6])

    useEffect(() => {
        setResultContent(finalResult < 0 ? "ขาดทุน" : finalResult > 0 ? "กำไร" : "สุทธิ")
    }, [finalResult])

    return (
        <div className="text-base">
            <div className="flex justify-center">
                <div className="grid grid-cols-6">
                    <button onClick={() => nameIndex < 4 ? setNameIndex(nameIndex + 1) : setNameIndex(0)} className="w-full">{name[nameIndex]}</button>
                    <p className="w-full text-center border-x-2 bg-pink-100">ยอดซื้อ</p>
                    <p className="w-full text-center border-x-2 col-span-3 bg-teal-100">ยอดรับ</p>
                    <p className="w-full text-center border-x-2 bg-green-200">รวมรับ</p>
                    <button onClick={() => toggleType()} className="w-full">{type[Number(stateType)]}</button>
                    <input type="number" className="w-full text-end border-2 bg-pink-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setBuy1(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin11(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin12(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin13(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-green-200 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin1(e.target.value)} value={win1} />
                    <button onClick={() => toggleSaving()} className="w-full">{saving[Number(stateSaving)]}</button>
                    <input type="number" className="w-full text-end border-2 bg-pink-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setBuy2(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin21(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin22(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin23(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-green-200 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin2(e.target.value)} value={win2} />
                    <button onClick={() => toggleNormal()} className="w-full">{normal[Number(stateNormal)]}</button>
                    <input type="number" className="w-full text-end border-2 bg-pink-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setBuy3(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin31(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin32(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin33(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-green-200 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin3(e.target.value)} value={win3} />
                    <p className="w-full text-end border-2">VIP</p>
                    <input type="number" className="w-full text-end border-2 bg-pink-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setBuy4(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin41(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin42(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin43(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-green-200 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin4(e.target.value)} value={win4} />
                    <p className="w-full text-end border-2">ลาวพัฒนา</p>
                    <input type="number" className="w-full text-end border-2 bg-pink-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setBuy5(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin51(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin52(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin53(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-green-200 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin5(e.target.value)} value={win5} />
                    <p className="w-full text-end border-2">ลาวสามัคคี</p>
                    <input type="number" className="w-full text-end border-2 bg-pink-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setBuy6(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin61(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin62(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin63(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-green-200 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin6(e.target.value)} value={win6} />
                    <p className="w-full text-start border-2">{today.getDate()}/{months[today.getMonth()]}</p>
                    <p className="border-x-2 text-center bg-pink-100 text-lg">{Number(buy1) + Number(buy2) + Number(buy3) + Number(buy4) + Number(buy5) + Number(buy6)}</p>
                    <p className="border-x-2 text-center bg-green-200 text-lg col-span-4">{Number(win1) + Number(win2) + Number(win3) + Number(win4) + Number(win5) + Number(win6)}</p>
                    <p className="w-full text-end border-2 font-bold">{resultContent}</p>
                    <p className="font-bold text-lg">{finalResult}</p>
                </div>
            </div>
        </div>
    )
}
