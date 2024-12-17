'use client'

import React, { useRef, useState, useEffect, useReducer } from "react"

export default function Win() {
    const options = ['อจ.', 'ดา', 'ยาย', 'นช', 'ขอนแก่น'];
    const [currentName, setCurrentName] = useState("อจ.");
    const [mode, setMode] = useState("จีน");
    const [bgColor, setBgColor] = useState("");
    useEffect(() => {
        setBgColor(({
            'อจ.': "bg-yellow-200",
            'ดา': "bg-green-200",
            'ยาย': "bg-pink-200",
            'นช': "bg-blue-200",
            'ขอนแก่น': "bg-purple-200"
        })[currentName] || "bg-white")
    }, [currentName])

    const [fetched, setFetched] = useState(false);
    useEffect(() => {
        const saved = localStorage.getItem("currentpage2");
        const jsonsaved = (JSON.parse(saved));
        setCurrentName(jsonsaved?.currentname || "อจ.");
        setMode(jsonsaved?.currentmode || "จีน");
        setFetched(true);
    }, [])
    useEffect(() => {
        if (fetched) {
            localStorage.setItem("currentpage2", JSON.stringify({
                "currentname": currentName,
                "currentmode": mode,
            }));
        }
    }, [currentName, mode])

    const [showOptions, setShowOptions] = useState(false);
    const handleOptionClick = (option) => {
        setCurrentName(option);
        setShowOptions(false);
    };

    const [sumSideLeft, setSumSideLeft] = useState("");
    const [sumSideRight, setSumSideRight] = useState("");
    useEffect(() => {
        if (fetched) localStorage.setItem(currentName + "2sum" + mode, sumSideLeft + sumSideRight);
    }, [sumSideLeft, sumSideRight])

    return (
        <div className="gird justify-items-center text-2xl">
            <div className="grid grid-cols-2 divide-x-2 divide-black">
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
                <select onChange={(e) => { setMode(e.target.value); }} value={mode} className={`w-full text-center ${bgColor}`}>
                    <option value="จีน">จีน</option>
                    <option value="ฮั่งเส็ง">ฮั่งเส็ง</option>
                    <option value="ไต้หวัน">ไต้หวัน</option>
                    <option value="ลาวTV">ลาวTV</option>
                    <option value="ลาวStar">ลาวStar</option>
                    <option value="เฉพาะกิจ">เฉพาะกิจ</option>
                    <option value="พิเศษ">พิเศษ</option>
                    <option value="ปกติ">ปกติ</option>
                    <option value="VIP">VIP</option>
                    <option value="ลาวพัฒนา">ลาวพัฒนา</option>
                    <option value="ลาวสามัคคี">ลาวสามัคคี</option>
                    <option value="ดาวโจนส์V">ดาวโจนส์V</option>
                    <option value="ดาวโจนส์">ดาวโจนส์</option>
                    <option value="รัสเซีย">รัสเซีย</option>
                    <option value="อังกฤษ">อังกฤษ</option>
                    <option value="เยอรมัน">เยอรมัน</option>
                    <option value="รัฐบาล">รัฐบาล</option>
                    <option value="ออมสิน">ออมสิน</option>
                    <option value="ธกส">ธกส</option>
                </select>
                <OneWin fetched={fetched} currentName={currentName} side="L" mode={mode} bgColor={bgColor} sumSide={sumSideLeft} setSumSide={setSumSideLeft} />
                <OneWin fetched={fetched} currentName={currentName} side="R" mode={mode} bgColor={bgColor} sumSide={sumSideRight} setSumSide={setSumSideRight} />
            </div>
            <div className="w-full flex">
                <p className="text-end font-black">รวม</p>
                <p className={`w-full font-black ${bgColor}`}>{sumSideLeft + sumSideRight}</p>
            </div>
        </div>
    )
}

function OneWin({ fetched, currentName, side, mode, setSumSide = () => { } }) {
    const today = new Date();
    const months = ["มค", "กพ", "มีค", "เมย", "พค", "มิย", "กค", "สค", "กย", "ตค", "พย", "ธค",]
    const [info1, setInfo1] = useState("");
    const [info2, setInfo2] = useState("");
    const [info3, setInfo3] = useState("");
    const [info4, setInfo4] = useState("");
    const [info5, setInfo5] = useState("");
    const [info6, setInfo6] = useState("");
    const [info7, setInfo7] = useState("");
    const [info8, setInfo8] = useState("");
    const [info9, setInfo9] = useState("");
    const [info10, setInfo10] = useState("");
    const [check1, setCheck1] = useReducer(x => !x, false);
    const [check2, setCheck2] = useReducer(x => !x, false);
    const [check3, setCheck3] = useReducer(x => !x, false);
    const [check4, setCheck4] = useReducer(x => !x, false);
    const [check5, setCheck5] = useReducer(x => !x, false);
    const [check6, setCheck6] = useReducer(x => !x, false);
    const [check7, setCheck7] = useReducer(x => !x, false);
    const [check8, setCheck8] = useReducer(x => !x, false);
    const [check9, setCheck9] = useReducer(x => !x, false);
    const [check10, setCheck10] = useReducer(x => !x, false);
    const [win1, setWin1] = useState("");
    const [win2, setWin2] = useState("");
    const [win3, setWin3] = useState("");
    const [win4, setWin4] = useState("");
    const [win5, setWin5] = useState("");
    const [win6, setWin6] = useState("");
    const [win7, setWin7] = useState("");
    const [win8, setWin8] = useState("");
    const [win9, setWin9] = useState("");
    const [win10, setWin10] = useState("");

    useEffect(() => {
        const saved = localStorage.getItem(currentName + "2" + side + mode);
        setData(JSON.parse(saved));
    }, [currentName, mode])

    useEffect(() => {
        if (fetched) {
            localStorage.setItem(currentName + "3" + side + mode, JSON.stringify({
                "check1": check1,
                "check2": check2,
                "check3": check3,
                "check4": check4,
                "check5": check5,
                "check6": check6,
                "check7": check7,
                "check8": check8,
                "check9": check9,
                "check10": check10,
                "win1": win1,
                "win2": win2,
                "win3": win3,
                "win4": win4,
                "win5": win5,
                "win6": win6,
                "win7": win7,
                "win8": win8,
                "win9": win9,
                "win10": win10
            }));
            setSumSide(Number(win1) + Number(win2) + Number(win3) + Number(win4) + Number(win5) + Number(win6) + Number(win7) + Number(win8) + Number(win9) + Number(win10))
        }
    }, [win1, win2, win3, win4, win5, win6, win7, win8, win9, win10, check1, check2, check3, check4, check5, check6, check7, check8, check9, check10])

    function setData(saved) {
        setInfo1(saved?.info1 || "");
        setInfo2(saved?.info2 || "");
        setInfo3(saved?.info3 || "");
        setInfo4(saved?.info4 || "");
        setInfo5(saved?.info5 || "");
        setInfo6(saved?.info6 || "");
        setInfo7(saved?.info7 || "");
        setInfo8(saved?.info8 || "");
        setInfo9(saved?.info9 || "");
        setInfo10(saved?.info10 || "");
    }

    const winRefs = useRef([]);

    return (
        <div className="grid grid-cols-2">
            <p className="text-lg text-center">{today.getDate() + "/" + months[today.getMonth()]}</p>
            <p className="text-center">เงินได้</p>
            <div className={`w-full text-end border-2 ${check1 ? "bg-green-200" : "bg-white"}`} onClick={() => setCheck1()}>{info1}</div>
            <input type="number" className="w-full text-end border-2 text-red-500" onClick={(e) => e.target.select()} value={win1} onChange={(e) => setWin1(e.target.value)} ref={el => (winRefs.current[1] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[2].focus()} />
            <div className={`w-full text-end border-2 ${check2 ? "bg-green-200" : "bg-white"}`} onClick={() => setCheck2()}>{info2}</div>
            <input type="number" className="w-full text-end border-2 text-red-500" onClick={(e) => e.target.select()} value={win2} onChange={(e) => setWin2(e.target.value)} ref={el => (winRefs.current[2] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[3].focus()} />
            <div className={`w-full text-end border-2 ${check3 ? "bg-green-200" : "bg-white"}`} onClick={() => setCheck3()}>{info3}</div>
            <input type="number" className="w-full text-end border-2 text-red-500" onClick={(e) => e.target.select()} value={win3} onChange={(e) => setWin3(e.target.value)} ref={el => (winRefs.current[3] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[4].focus()} />
            <div className={`w-full text-end border-2 ${check4 ? "bg-green-200" : "bg-white"}`} onClick={() => setCheck4()}>{info4}</div>
            <input type="number" className="w-full text-end border-2 text-red-500" onClick={(e) => e.target.select()} value={win4} onChange={(e) => setWin4(e.target.value)} ref={el => (winRefs.current[4] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[5].focus()} />
            <div className={`w-full text-end border-2 ${check5 ? "bg-green-200" : "bg-white"}`} onClick={() => setCheck5()}>{info5}</div>
            <input type="number" className="w-full text-end border-2 text-red-500" onClick={(e) => e.target.select()} value={win5} onChange={(e) => setWin5(e.target.value)} ref={el => (winRefs.current[5] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[6].focus()} />
            <div className={`w-full text-end border-2 ${check6 ? "bg-green-200" : "bg-white"}`} onClick={() => setCheck6()}>{info6}</div>
            <input type="number" className="w-full text-end border-2 text-red-500" onClick={(e) => e.target.select()} value={win6} onChange={(e) => setWin6(e.target.value)} ref={el => (winRefs.current[6] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[7].focus()} />
            <div className={`w-full text-end border-2 ${check7 ? "bg-green-200" : "bg-white"}`} onClick={() => setCheck7()}>{info7}</div>
            <input type="number" className="w-full text-end border-2 text-red-500" onClick={(e) => e.target.select()} value={win7} onChange={(e) => setWin7(e.target.value)} ref={el => (winRefs.current[7] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[8].focus()} />
            <div className={`w-full text-end border-2 ${check8 ? "bg-green-200" : "bg-white"}`} onClick={() => setCheck8()}>{info8}</div>
            <input type="number" className="w-full text-end border-2 text-red-500" onClick={(e) => e.target.select()} value={win8} onChange={(e) => setWin8(e.target.value)} ref={el => (winRefs.current[8] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[9].focus()} />
            <div className={`w-full text-end border-2 ${check9 ? "bg-green-200" : "bg-white"}`} onClick={() => setCheck9()}>{info9}</div>
            <input type="number" className="w-full text-end border-2 text-red-500" onClick={(e) => e.target.select()} value={win9} onChange={(e) => setWin9(e.target.value)} ref={el => (winRefs.current[9] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[10].focus()} />
            <div className={`w-full text-end border-2 ${check10 ? "bg-green-200" : "bg-white"}`} onClick={() => setCheck10()}>{info10}</div>
            <input type="number" className="w-full text-end border-2 text-red-500" onClick={(e) => e.target.select()} value={win10} onChange={(e) => setWin10(e.target.value)} ref={el => (winRefs.current[10] = el)} onKeyDown={(e) => e.key === "Enter" && winRefs.current[1].focus()} />
            <div className="text-center" onClick={() => setData("")}><p className="collapse">ล้าง</p></div>
            <p>{Number(win1) + Number(win2) + Number(win3) + Number(win4) + Number(win5) + Number(win6) + Number(win7) + Number(win8) + Number(win9) + Number(win10)}</p>
        </div>
    );
};