'use client'

import React, { useRef, useState, useEffect } from "react"

export default function BuyandWin() {
    const options = ['ยาย', 'ดา', 'อจ.', 'นช'];
    const today = new Date();
    const months = ["มค", "กพ", "มีค", "เมย", "พค", "มิย", "กค", "สค", "กย", "ตค", "พย", "ธค",]

    const [currentName, setCurrentName] = useState("ยาย");
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
    const [bgColor, setBgColor] = useState("bg-white");
    useEffect(() => {
        setBgColor(({
            'ยาย': "bg-pink-200",
            'ดา': "bg-green-200",
            'อจ.': "bg-yellow-200",
            'นช': "bg-blue-200"
        })[currentName] || "bg-white")
    }, [currentName])

    const [buy1, setBuy1] = useState(0);
    const [buy2, setBuy2] = useState(0);
    const [buy3, setBuy3] = useState(0);
    const [buy4, setBuy4] = useState(0);
    const [buy5, setBuy5] = useState(0);
    const [buy6, setBuy6] = useState(0);
    const [buy7, setBuy7] = useState(0);
    const [buy8, setBuy8] = useState(0);
    const [buy9, setBuy9] = useState(0);

    useEffect(() => {
        const Particular = localStorage.getItem(currentName + "2sumเฉพาะกิจ");
        setBuy1(Particular || 0);
        const Special = localStorage.getItem(currentName + "2sumพิเศษ");
        setBuy2(Special || 0);
        const Normal = localStorage.getItem(currentName + "2sumปกติ");
        setBuy3(Normal || 0);
        const vip = localStorage.getItem(currentName + "2sumVIP");
        setBuy4(vip || 0);
        const laoevo = localStorage.getItem(currentName + "2sumลาวพัฒนา");
        setBuy5(laoevo || 0);
        const laoharmony = localStorage.getItem(currentName + "2sumลาวสามัคคี");
        setBuy6(laoharmony || 0);
        const Gov = localStorage.getItem(currentName + "2sumรัฐบาล");
        setBuy7(Gov || 0);
        const Saving = localStorage.getItem(currentName + "2sumออมสิน");
        setBuy8(Saving || 0);
        const Agriculture = localStorage.getItem(currentName + "2sumธกส");
        setBuy9(Agriculture || 0);
    }, [currentName])

    const winRefs = useRef([]);

    const [win11, setWin11] = useState(0);
    const [win12, setWin12] = useState(0);
    const [win13, setWin13] = useState(0);
    const [win1, setWin1] = useState(0);
    useEffect(() => {
        setWin1(Number(win11) + Number(win12) + Number(win13))
    }, [win11, win12, win13])

    const [win21, setWin21] = useState(0);
    const [win22, setWin22] = useState(0);
    const [win23, setWin23] = useState(0);
    const [win2, setWin2] = useState(0);
    useEffect(() => {
        setWin2(Number(win21) + Number(win22) + Number(win23))
    }, [win21, win22, win23])

    const [win31, setWin31] = useState(0);
    const [win32, setWin32] = useState(0);
    const [win33, setWin33] = useState(0);
    const [win3, setWin3] = useState(0);
    useEffect(() => {
        setWin3(Number(win31) + Number(win32) + Number(win33))
    }, [win31, win32, win33])

    const [win41, setWin41] = useState(0);
    const [win42, setWin42] = useState(0);
    const [win43, setWin43] = useState(0);
    const [win4, setWin4] = useState(0);
    useEffect(() => {
        setWin4(Number(win41) + Number(win42) + Number(win43))
    }, [win41, win42, win43])

    const [win51, setWin51] = useState(0);
    const [win52, setWin52] = useState(0);
    const [win53, setWin53] = useState(0);
    const [win5, setWin5] = useState(0);
    useEffect(() => {
        setWin5(Number(win51) + Number(win52) + Number(win53))
    }, [win51, win52, win53])

    const [win61, setWin61] = useState(0);
    const [win62, setWin62] = useState(0);
    const [win63, setWin63] = useState(0);
    const [win6, setWin6] = useState(0);
    useEffect(() => {
        setWin6(Number(win61) + Number(win62) + Number(win63))
    }, [win61, win62, win63])

    const [win71, setWin71] = useState(0);
    const [win72, setWin72] = useState(0);
    const [win73, setWin73] = useState(0);
    const [win7, setWin7] = useState(0);
    useEffect(() => {
        setWin7(Number(win71) + Number(win72) + Number(win73))
    }, [win71, win72, win73])

    const [win81, setWin81] = useState(0);
    const [win82, setWin82] = useState(0);
    const [win83, setWin83] = useState(0);
    const [win8, setWin8] = useState(0);
    useEffect(() => {
        setWin8(Number(win81) + Number(win82) + Number(win83))
    }, [win81, win82, win83])

    const [win91, setWin91] = useState(0);
    const [win92, setWin92] = useState(0);
    const [win93, setWin93] = useState(0);
    const [win9, setWin9] = useState(0);
    useEffect(() => {
        setWin9(Number(win91) + Number(win92) + Number(win93))
    }, [win91, win92, win93])

    useEffect(() => {
        const saved = localStorage.getItem(currentName + "3");
        setData(JSON.parse(saved));
    }, [currentName])

    useEffect(() => {
        if (fetched) {
            localStorage.setItem(currentName + "3", JSON.stringify({
                "win11": win11,
                "win12": win12,
                "win13": win13,
                "win21": win21,
                "win22": win22,
                "win23": win23,
                "win31": win31,
                "win32": win32,
                "win33": win33,
                "win41": win41,
                "win42": win42,
                "win43": win43,
                "win51": win51,
                "win52": win52,
                "win53": win53,
                "win61": win61,
                "win62": win62,
                "win63": win63,
                "win71": win71,
                "win72": win72,
                "win73": win73,
                "win81": win81,
                "win82": win82,
                "win83": win83,
                "win91": win91,
                "win92": win92,
                "win93": win93,
            }));
        }
    }, [win11, win12, win13, win21, win22, win23, win31, win32, win33, win41, win42, win43, win51, win52, win53, win61, win62, win63, win71, win72, win73, win81, win82, win83, win91, win92, win93])

    function setData(saved) {
        setWin11(saved?.win11 || 0);
        setWin12(saved?.win12 || 0);
        setWin13(saved?.win13 || 0);
        setWin21(saved?.win21 || 0);
        setWin22(saved?.win22 || 0);
        setWin23(saved?.win23 || 0);
        setWin31(saved?.win31 || 0);
        setWin32(saved?.win32 || 0);
        setWin33(saved?.win33 || 0);
        setWin41(saved?.win41 || 0);
        setWin42(saved?.win42 || 0);
        setWin43(saved?.win43 || 0);
        setWin51(saved?.win51 || 0);
        setWin52(saved?.win52 || 0);
        setWin53(saved?.win53 || 0);
        setWin61(saved?.win61 || 0);
        setWin62(saved?.win62 || 0);
        setWin63(saved?.win63 || 0);
        setWin71(saved?.win71 || 0);
        setWin72(saved?.win72 || 0);
        setWin73(saved?.win73 || 0);
        setWin81(saved?.win81 || 0);
        setWin82(saved?.win82 || 0);
        setWin83(saved?.win83 || 0);
        setWin91(saved?.win91 || 0);
        setWin92(saved?.win92 || 0);
        setWin93(saved?.win93 || 0);
    }

    const [finalResult, setFinalResult] = useState(0);
    useEffect(() => {
        setFinalResult((Number(win1) + Number(win3) + Number(win5) + Number(win7) + Number(win8) + Number(win9)) - (Number(buy1) + Number(buy3) + Number(buy5) + Number(buy7) + Number(buy8) + Number(buy9)))
    }, [buy1, buy3, buy5, buy7, buy8, buy9, win1, win3, win5, win7, win8, win9])

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
                            onClick={() => setShowOptions(!showOptions)}
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
                    <p className="w-full text-end border-2">เฉพาะกิจ</p>
                    <input type="number" className="w-full text-end border-2 bg-pink-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setBuy1(e.target.value)} value={buy1} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin11(e.target.value)} value={win11} ref={el => (winRefs.current[11] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[21].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin12(e.target.value)} value={win12} ref={el => (winRefs.current[12] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[22].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin13(e.target.value)} value={win13} ref={el => (winRefs.current[13] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[23].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-green-100 text-lg" value={win1} readOnly/>
                    <p className="w-full text-end border-2">พิเศษ</p>
                    <input type="number" className="w-full text-end border-2 bg-pink-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setBuy2(e.target.value)} value={buy2} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin21(e.target.value)} value={win21} ref={el => (winRefs.current[21] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[31].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin22(e.target.value)} value={win22} ref={el => (winRefs.current[22] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[32].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin23(e.target.value)} value={win23} ref={el => (winRefs.current[23] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[33].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-green-100 text-lg" value={win2} readOnly/>
                    <p className="w-full text-end border-2">ปกติ</p>
                    <input type="number" className="w-full text-end border-2 bg-pink-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setBuy3(e.target.value)} value={buy3} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin31(e.target.value)} value={win31} ref={el => (winRefs.current[31] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[41].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin32(e.target.value)} value={win32} ref={el => (winRefs.current[32] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[42].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin33(e.target.value)} value={win33} ref={el => (winRefs.current[33] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[43].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-green-100 text-lg" value={win3} readOnly/>
                    <p className="w-full text-end border-2">VIP</p>
                    <input type="number" className="w-full text-end border-2 bg-pink-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setBuy4(e.target.value)} value={buy4} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin41(e.target.value)} value={win41} ref={el => (winRefs.current[41] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[51].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin42(e.target.value)} value={win42} ref={el => (winRefs.current[42] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[52].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin43(e.target.value)} value={win43} ref={el => (winRefs.current[43] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[53].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-green-100 text-lg" value={win4} readOnly/>
                    <p className="w-full text-end border-2">ลาวพัฒนา</p>
                    <input type="number" className="w-full text-end border-2 bg-pink-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setBuy5(e.target.value)} value={buy5} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin51(e.target.value)} value={win51} ref={el => (winRefs.current[51] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[61].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin52(e.target.value)} value={win52} ref={el => (winRefs.current[52] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[62].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin53(e.target.value)} value={win53} ref={el => (winRefs.current[53] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[63].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-green-100 text-lg" value={win5} readOnly/>
                    <p className="w-full text-end border-2">ลาวสามัคคี</p>
                    <input type="number" className="w-full text-end border-2 bg-pink-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setBuy6(e.target.value)} value={buy6} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin61(e.target.value)} value={win61} ref={el => (winRefs.current[61] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[71].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin62(e.target.value)} value={win62} ref={el => (winRefs.current[62] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[72].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin63(e.target.value)} value={win63} ref={el => (winRefs.current[63] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[73].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-green-100 text-lg" value={win6} readOnly/>
                    <p className="w-full text-end border-2">รัฐบาล</p>
                    <input type="number" className="w-full text-end border-2 bg-pink-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setBuy7(e.target.value)} value={buy7} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin71(e.target.value)} value={win71} ref={el => (winRefs.current[71] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[81].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin72(e.target.value)} value={win72} ref={el => (winRefs.current[72] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[82].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin73(e.target.value)} value={win73} ref={el => (winRefs.current[73] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[83].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-green-100 text-lg" value={win7} readOnly/>
                    <p className="w-full text-end border-2">ออมสิน</p>
                    <input type="number" className="w-full text-end border-2 bg-pink-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setBuy8(e.target.value)} value={buy8} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin81(e.target.value)} value={win81} ref={el => (winRefs.current[81] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[91].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin82(e.target.value)} value={win82} ref={el => (winRefs.current[82] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[92].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin83(e.target.value)} value={win83} ref={el => (winRefs.current[83] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[93].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-green-100 text-lg" value={win8} readOnly/>
                    <p className="w-full text-end border-2">ธกส</p>
                    <input type="number" className="w-full text-end border-2 bg-pink-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setBuy9(e.target.value)} value={buy9} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin91(e.target.value)} value={win91} ref={el => (winRefs.current[91] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[11].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin92(e.target.value)} value={win92} ref={el => (winRefs.current[92] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[12].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-teal-100 text-lg" onClick={(e) => e.target.select()} onChange={(e) => setWin93(e.target.value)} value={win93} ref={el => (winRefs.current[93] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[13].focus()} />
                    <input type="number" className="w-full text-end border-2 bg-green-100 text-lg" value={win9} readOnly/>
                    <p className="w-full text-end border-2">{today.getDate()}/{months[today.getMonth()]}</p>
                    <p className="border-x-2 text-center bg-pink-100 text-lg">{Number(buy1) + Number(buy2) + Number(buy3) + Number(buy4) + Number(buy5) + Number(buy6) + Number(buy7) + Number(buy8) + Number(buy9)}</p>
                    <p className="border-x-2 text-center bg-green-200 text-lg col-span-4">{Number(win1) + Number(win2) + Number(win3) + Number(win4) + Number(win5) + Number(win6) + Number(win7) + Number(win8) + Number(win9)}</p>
                    <p className="w-full text-end border-2 font-bold py-4" onClick={() => {localStorage.clear(); window.location.reload(false);}}>{finalResult < 0 ? "ขาดทุน" : finalResult > 0 ? "กำไร" : "สุทธิ"}</p>
                    <p className={`text-center font-bold text-lg py-4 ${bgColor}`}>{finalResult}</p>
                </div>
            </div>
        </div>
    )
}
