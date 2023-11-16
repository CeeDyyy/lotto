'use client'

import React, { useState, useEffect, useReducer } from "react"

export default function BuyandWin() {
    const options = ['ยาย', 'ดา', 'อจ.', 'นช'];
    const [currentName, setCurrentName] = useState("ยาย");
    const today = new Date();
    const months = ["มค", "กพ", "มีค", "เมย", "พค", "มิย", "กค", "สค", "กย", "ตค", "พย", "ธค",]
    const [type, setType] = useState("เฉพาะกิจ")
    const [saving, setSaving] = useState("พิเศษ")
    const [normal, setNormal] = useState("ปกติ")
    const [buy1, setBuy1] = useState(0);
    const [buy2, setBuy2] = useState(0);
    const [buy3, setBuy3] = useState(0);
    const [buy4, setBuy4] = useState(0);
    const [buy5, setBuy5] = useState(0);
    const [buy6, setBuy6] = useState(0);
    const [buy7, setBuy7] = useState(0);
    const [buy8, setBuy8] = useState(0);
    const [buy9, setBuy9] = useState(0);
    const [win11, setWin11] = useState(0);
    const [win12, setWin12] = useState(0);
    const [win13, setWin13] = useState(0);
    const [win1, setWin1] = useState(0);
    const [win31, setWin31] = useState(0);
    const [win32, setWin32] = useState(0);
    const [win33, setWin33] = useState(0);
    const [win3, setWin3] = useState(0);
    const [win51, setWin51] = useState(0);
    const [win52, setWin52] = useState(0);
    const [win53, setWin53] = useState(0);
    const [win5, setWin5] = useState(0);
    const [win71, setWin71] = useState(0);
    const [win72, setWin72] = useState(0);
    const [win73, setWin73] = useState(0);
    const [win7, setWin7] = useState(0);
    const [win81, setWin81] = useState(0);
    const [win82, setWin82] = useState(0);
    const [win83, setWin83] = useState(0);
    const [win8, setWin8] = useState(0);
    const [win91, setWin91] = useState(0);
    const [win92, setWin92] = useState(0);
    const [win93, setWin93] = useState(0);
    const [win9, setWin9] = useState(0);
    const [finalResult, setFinalResult] = useState(0);

    useEffect(() => {
        setWin1(Number(win11) + Number(win12) + Number(win13))
    }, [win11, win12, win13])

    useEffect(() => {
        setWin3(Number(win31) + Number(win32) + Number(win33))
    }, [win31, win32, win33])

    useEffect(() => {
        setWin5(Number(win51) + Number(win52) + Number(win53))
    }, [win51, win52, win53])

    useEffect(() => {
        setWin7(Number(win71) + Number(win72) + Number(win73))
    }, [win71, win72, win73])

    useEffect(() => {
        setWin8(Number(win81) + Number(win82) + Number(win83))
    }, [win81, win82, win83])

    useEffect(() => {
        setWin9(Number(win91) + Number(win92) + Number(win93))
    }, [win91, win92, win93])

    useEffect(() => {
        setFinalResult((Number(win1) + Number(win3) + Number(win5) + Number(win7) + Number(win8) + Number(win9)) - (Number(buy1) + Number(buy3) + Number(buy5) + Number(buy7) + Number(buy8) + Number(buy9)))
    }, [buy1, buy3, buy5, buy7, buy8, buy9, win1, win3, win5, win7, win8, win9])

    const [bgColor, setBgColor] = useState("bg-white");
    useEffect(() => {
        setBgColor(({
            'ยาย': "bg-pink-200",
            'ดา': "bg-green-200",
            'อจ.': "bg-yellow-200",
            'นช': "bg-blue-200"
        })[currentName] || "bg-white")
    }, [currentName])

    useEffect(() => {
        const Type = localStorage.getItem(currentName + "2sum" + type);
        setBuy1(Type || 0);
        const Saving = localStorage.getItem(currentName + "2sum" + saving);
        setBuy3(Saving || 0);
        const Normal = localStorage.getItem(currentName + "2sum" + normal);
        setBuy5(Normal || 0);
        const vip = localStorage.getItem(currentName + "2sum" + "VIP");
        setBuy7(vip || 0);
        const laoevo = localStorage.getItem(currentName + "2sum" + "ลาวพัฒนา");
        setBuy8(laoevo || 0);
        const laoharmony = localStorage.getItem(currentName + "2sum" + "ลาวสามัคคี");
        setBuy9(laoharmony || 0);
    }, [currentName, type, saving, normal])

    const [fetched, setFetched] = useState(false);
    useEffect(() => {
        const saved = localStorage.getItem("currentpage3");
        setCurrentName(saved || "ยาย");
        setFetched(true);
    }, [])
    useEffect(() => {
        if (fetched) {
            localStorage.setItem("currentpage3", currentName);
        }
    }, [currentName])

    const [showOptions, setShowOptions] = useState(false);
    const handleOptionClick = (option) => {
        setCurrentName(option);
        setShowOptions(false);
    };

    return (
        <div className="text-base">
            <div className="flex justify-center">
                <div className="grid grid-cols-6">
                    <div>
                        <input
                            type="text"
                            value={currentName}
                            className={`w-full text-center ${bgColor}`}
                            onClick={(e) => { setShowOptions(!showOptions); e.target.select(); }}
                            onChange={(e) => setCurrentName(e.target.value)}
                        />
                        {showOptions &&
                            <>
                                <div className="fixed top-0 left-0 h-screen w-screen" onClick={() => setShowOptions(false)} />
                                <div className="absolute py-1 px-4 bg-white">
                                    {options.map((option) => (
                                        <div key={option} onClick={() => handleOptionClick(option)}>
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            </>
                        }
                    </div>
                    <p className="w-full text-center border-x-2 bg-pink-100">ยอดซื้อ</p>
                    <p className="w-full text-center border-x-2 col-span-3 bg-teal-100">ยอดรับ</p>
                    <p className="w-full text-center border-x-2 bg-green-200">รวมรับ</p>
                    <button onClick={() => type === "เฉพาะกิจ" ? setType("รัฐบาล") : setType("เฉพาะกิจ")} className="w-full">{type}</button>
                    <input type="number" className="w-full text-end border-2 bg-pink-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setBuy1(e.target.value)} value={buy1} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin11(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin12(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin13(e.target.value)} />
                    <p className="w-full text-end border-2 bg-green-200 text-lg">{win1}</p>
                    <button onClick={() => saving === "พิเศษ" ? setSaving("ออมสิน") : setSaving("พิเศษ")} className="w-full">{saving}</button>
                    <input type="number" className="w-full text-end border-2 bg-pink-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setBuy3(e.target.value)} value={buy3} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin31(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin32(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin33(e.target.value)} />
                    <p className="w-full text-end border-2 bg-green-200 text-lg">{win3}</p>
                    <button onClick={() => normal === "ปกติ" ? setNormal("ธกส") : setNormal("ปกติ")} className="w-full">{normal}</button>
                    <input type="number" className="w-full text-end border-2 bg-pink-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setBuy5(e.target.value)} value={buy5} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin51(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin52(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin53(e.target.value)} />
                    <p className="w-full text-end border-2 bg-green-200 text-lg">{win5}</p>
                    <p className="w-full text-end border-2">VIP</p>
                    <input type="number" className="w-full text-end border-2 bg-pink-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setBuy7(e.target.value)} value={buy7} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin71(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin72(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin73(e.target.value)} />
                    <p className="w-full text-end border-2 bg-green-200 text-lg">{win7}</p>
                    <p className="w-full text-end border-2">ลาวพัฒนา</p>
                    <input type="number" className="w-full text-end border-2 bg-pink-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setBuy8(e.target.value)} value={buy8} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin81(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin82(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin83(e.target.value)} />
                    <p className="w-full text-end border-2 bg-green-200 text-lg">{win8}</p>
                    <p className="w-full text-end border-2">ลาวสามัคคี</p>
                    <input type="number" className="w-full text-end border-2 bg-pink-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setBuy9(e.target.value)} value={buy9} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin91(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin92(e.target.value)} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin93(e.target.value)} />
                    <p className="w-full text-end border-2 bg-green-200 text-lg">{win9}</p>
                    <p className="w-full text-start border-2">{today.getDate()}/{months[today.getMonth()]}</p>
                    <p className="border-x-2 text-center bg-pink-100 text-lg">{Number(buy1) + Number(buy3) + Number(buy5) + Number(buy7) + Number(buy8) + Number(buy9)}</p>
                    <p className="border-x-2 text-center bg-green-200 text-lg col-span-4">{Number(win1) + Number(win3) + Number(win5) + Number(win7) + Number(win8) + Number(win9)}</p>
                    <p className="w-full text-end border-2 font-bold">{finalResult < 0 ? "ขาดทุน" : finalResult > 0 ? "กำไร" : "สุทธิ"}</p>
                    <p className={`font-bold text-lg ${bgColor}`}>{finalResult}</p>
                </div>
            </div>
        </div>
    )
}
