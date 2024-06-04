'use client'

import React, { useRef, useState, useEffect } from "react"

export default function UpDown() {
    const options = ['ยาย', 'ดา', 'อจ.', 'นช', 'ขอนแก่น'];
    const [currentName, setCurrentName] = useState("ยาย");
    const [mode, setMode] = useState("นิเคอิ");
    const [modeGet, setModeGet] = useState("นิเคอิ");
    const [bgColor, setBgColor] = useState("");
    useEffect(() => {
        setBgColor(({
            'ยาย': "bg-pink-200",
            'ดา': "bg-green-200",
            'อจ.': "bg-yellow-200",
            'นช': "bg-blue-200",
            'ขอนแก่น': "bg-purple-200"
        })[currentName] || "bg-white")
    }, [currentName])

    const [fetched, setFetched] = useState(false);
    useEffect(() => {
        const saved = localStorage.getItem("currentpage2");
        const jsonsaved = (JSON.parse(saved));
        setCurrentName(jsonsaved?.currentname || "ยาย");
        setMode(jsonsaved?.currentmode || "นิเคอิ");
        setModeGet(jsonsaved?.currentmode || "นิเคอิ");
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
        <div className="gird justify-items-center text-lg">
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
                <select onChange={(e) => { setMode(e.target.value); setModeGet(e.target.value); }} value={mode} className={`w-full text-center ${bgColor}`}>
                    <option value="นิเคอิ">นิเคอิ</option>
                    <option value="ฮั่งเส็ง">ฮั่งเส็ง</option>
                    <option value="จีน">ไต้หวัน</option>
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
                <OneUpDown fetched={fetched} currentName={currentName} side="L" mode={mode} modeGet={modeGet} bgColor={bgColor} sumSide={sumSideLeft} setSumSide={setSumSideLeft} />
                <OneUpDown fetched={fetched} currentName={currentName} side="R" mode={mode} modeGet={modeGet} bgColor={bgColor} sumSide={sumSideRight} setSumSide={setSumSideRight} />
            </div>
            <div className="w-full grid grid-cols-6 gap-y-8">
                <p className="text-end font-black">รวม</p>
                <p className={`col-span-5 font-black ${bgColor}`}>{sumSideLeft + sumSideRight}</p>
                <p className="col-span-3 text-end">คัดลอกจาก : </p>
                <select onChange={(e) => { setModeGet(e.target.value); }} value={modeGet} className={`col-span-3 text-center ${bgColor}`}>
                    <option value="นิเคอิ">นิเคอิ</option>
                    <option value="ฮั่งเส็ง">ฮั่งเส็ง</option>
                    <option value="จีน">ไต้หวัน</option>
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
            </div>
        </div>
    )
}

function OneUpDown({ fetched, currentName, side, mode, modeGet, setSumSide = () => { } }) {
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

    useEffect(() => {
        const saved = localStorage.getItem(currentName + "2" + side + modeGet);
        setData(JSON.parse(saved));
    }, [currentName, modeGet])

    useEffect(() => {
        if (fetched) {
            localStorage.setItem(currentName + "2" + side + mode, JSON.stringify({
                "info1": info1,
                "info2": info2,
                "info3": info3,
                "info4": info4,
                "info5": info5,
                "info6": info6,
                "info7": info7,
                "info8": info8,
                "info9": info9,
                "info10": info10,
                "up1": up1,
                "up2": up2,
                "up3": up3,
                "up4": up4,
                "up5": up5,
                "up6": up6,
                "up7": up7,
                "up8": up8,
                "up9": up9,
                "up10": up10,
                "down1": down1,
                "down2": down2,
                "down3": down3,
                "down4": down4,
                "down5": down5,
                "down6": down6,
                "down7": down7,
                "down8": down8,
                "down9": down9,
                "down10": down10
            }));
            setSumSide(Number(up1) + Number(up2) + Number(up3) + Number(up4) + Number(up5) + Number(up6) + Number(up7) + Number(up8) + Number(up9) + Number(up10) + Number(down1) + Number(down2) + Number(down3) + Number(down4) + Number(down5) + Number(down6) + Number(down7) + Number(down8) + Number(down9) + Number(down10))
        }
    }, [info1, info2, info3, info4, info5, info6, info7, info8, info9, info10, up1, up2, up3, up4, up5, up6, up7, up8, up9, up10, down1, down2, down3, down4, down5, down6, down7, down8, down9, down10])

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
        setUp1(saved?.up1 || "");
        setUp2(saved?.up2 || "");
        setUp3(saved?.up3 || "");
        setUp4(saved?.up4 || "");
        setUp5(saved?.up5 || "");
        setUp6(saved?.up6 || "");
        setUp7(saved?.up7 || "");
        setUp8(saved?.up8 || "");
        setUp9(saved?.up9 || "");
        setUp10(saved?.up10 || "");
        setDown1(saved?.down1 || "");
        setDown2(saved?.down2 || "");
        setDown3(saved?.down3 || "");
        setDown4(saved?.down4 || "");
        setDown5(saved?.down5 || "");
        setDown6(saved?.down6 || "");
        setDown7(saved?.down7 || "");
        setDown8(saved?.down8 || "");
        setDown9(saved?.down9 || "");
        setDown10(saved?.down10 || "");
    }

    const infoRefs = useRef([]);
    const upRefs = useRef([]);
    const downRefs = useRef([]);

    return (
        <div className="grid grid-cols-3">
            <p className="text-lg text-center">{today.getDate() + "/" + months[today.getMonth()]}</p>
            <p className="text-center">บ</p>
            <p className="text-center">ล</p>
            <input type="text" className="w-full text-end border-2" onClick={(e) => e.target.select()} value={info1} onChange={(e) => setInfo1(e.target.value)} ref={el => (infoRefs.current[1] = el)} onKeyDown={(e) => e.key === "Enter" && infoRefs.current[2].focus()} />
            <input type="number" className="w-full text-center border-2" onClick={(e) => e.target.select()} value={up1} onChange={(e) => setUp1(e.target.value)} ref={el => (upRefs.current[1] = el)} onKeyDown={(e) => e.key === "Enter" && upRefs.current[2].focus()} />
            <input type="number" className="w-full text-center border-2" onClick={(e) => e.target.select()} value={down1} onChange={(e) => setDown1(e.target.value)} ref={el => (downRefs.current[1] = el)} onKeyDown={(e) => e.key === "Enter" && downRefs.current[2].focus()} />
            <input type="text" className="w-full text-end border-2" onClick={(e) => e.target.select()} value={info2} onChange={(e) => setInfo2(e.target.value)} ref={el => (infoRefs.current[2] = el)} onKeyDown={(e) => e.key === "Enter" && infoRefs.current[3].focus()} />
            <input type="number" className="w-full text-center border-2" onClick={(e) => e.target.select()} value={up2} onChange={(e) => setUp2(e.target.value)} ref={el => (upRefs.current[2] = el)} onKeyDown={(e) => e.key === "Enter" && upRefs.current[3].focus()} />
            <input type="number" className="w-full text-center border-2" onClick={(e) => e.target.select()} value={down2} onChange={(e) => setDown2(e.target.value)} ref={el => (downRefs.current[2] = el)} onKeyDown={(e) => e.key === "Enter" && downRefs.current[3].focus()} />
            <input type="text" className="w-full text-end border-2" onClick={(e) => e.target.select()} value={info3} onChange={(e) => setInfo3(e.target.value)} ref={el => (infoRefs.current[3] = el)} onKeyDown={(e) => e.key === "Enter" && infoRefs.current[4].focus()} />
            <input type="number" className="w-full text-center border-2" onClick={(e) => e.target.select()} value={up3} onChange={(e) => setUp3(e.target.value)} ref={el => (upRefs.current[3] = el)} onKeyDown={(e) => e.key === "Enter" && upRefs.current[4].focus()} />
            <input type="number" className="w-full text-center border-2" onClick={(e) => e.target.select()} value={down3} onChange={(e) => setDown3(e.target.value)} ref={el => (downRefs.current[3] = el)} onKeyDown={(e) => e.key === "Enter" && downRefs.current[4].focus()} />
            <input type="text" className="w-full text-end border-2" onClick={(e) => e.target.select()} value={info4} onChange={(e) => setInfo4(e.target.value)} ref={el => (infoRefs.current[4] = el)} onKeyDown={(e) => e.key === "Enter" && infoRefs.current[5].focus()} />
            <input type="number" className="w-full text-center border-2" onClick={(e) => e.target.select()} value={up4} onChange={(e) => setUp4(e.target.value)} ref={el => (upRefs.current[4] = el)} onKeyDown={(e) => e.key === "Enter" && upRefs.current[5].focus()} />
            <input type="number" className="w-full text-center border-2" onClick={(e) => e.target.select()} value={down4} onChange={(e) => setDown4(e.target.value)} ref={el => (downRefs.current[4] = el)} onKeyDown={(e) => e.key === "Enter" && downRefs.current[5].focus()} />
            <input type="text" className="w-full text-end border-2" onClick={(e) => e.target.select()} value={info5} onChange={(e) => setInfo5(e.target.value)} ref={el => (infoRefs.current[5] = el)} onKeyDown={(e) => e.key === "Enter" && infoRefs.current[6].focus()} />
            <input type="number" className="w-full text-center border-2" onClick={(e) => e.target.select()} value={up5} onChange={(e) => setUp5(e.target.value)} ref={el => (upRefs.current[5] = el)} onKeyDown={(e) => e.key === "Enter" && upRefs.current[6].focus()} />
            <input type="number" className="w-full text-center border-2" onClick={(e) => e.target.select()} value={down5} onChange={(e) => setDown5(e.target.value)} ref={el => (downRefs.current[5] = el)} onKeyDown={(e) => e.key === "Enter" && downRefs.current[6].focus()} />
            <input type="text" className="w-full text-end border-2" onClick={(e) => e.target.select()} value={info6} onChange={(e) => setInfo6(e.target.value)} ref={el => (infoRefs.current[6] = el)} onKeyDown={(e) => e.key === "Enter" && infoRefs.current[7].focus()} />
            <input type="number" className="w-full text-center border-2" onClick={(e) => e.target.select()} value={up6} onChange={(e) => setUp6(e.target.value)} ref={el => (upRefs.current[6] = el)} onKeyDown={(e) => e.key === "Enter" && upRefs.current[7].focus()} />
            <input type="number" className="w-full text-center border-2" onClick={(e) => e.target.select()} value={down6} onChange={(e) => setDown6(e.target.value)} ref={el => (downRefs.current[6] = el)} onKeyDown={(e) => e.key === "Enter" && downRefs.current[7].focus()} />
            <input type="text" className="w-full text-end border-2" onClick={(e) => e.target.select()} value={info7} onChange={(e) => setInfo7(e.target.value)} ref={el => (infoRefs.current[7] = el)} onKeyDown={(e) => e.key === "Enter" && infoRefs.current[8].focus()} />
            <input type="number" className="w-full text-center border-2" onClick={(e) => e.target.select()} value={up7} onChange={(e) => setUp7(e.target.value)} ref={el => (upRefs.current[7] = el)} onKeyDown={(e) => e.key === "Enter" && upRefs.current[8].focus()} />
            <input type="number" className="w-full text-center border-2" onClick={(e) => e.target.select()} value={down7} onChange={(e) => setDown7(e.target.value)} ref={el => (downRefs.current[7] = el)} onKeyDown={(e) => e.key === "Enter" && downRefs.current[8].focus()} />
            <input type="text" className="w-full text-end border-2" onClick={(e) => e.target.select()} value={info8} onChange={(e) => setInfo8(e.target.value)} ref={el => (infoRefs.current[8] = el)} onKeyDown={(e) => e.key === "Enter" && infoRefs.current[9].focus()} />
            <input type="number" className="w-full text-center border-2" onClick={(e) => e.target.select()} value={up8} onChange={(e) => setUp8(e.target.value)} ref={el => (upRefs.current[8] = el)} onKeyDown={(e) => e.key === "Enter" && upRefs.current[9].focus()} />
            <input type="number" className="w-full text-center border-2" onClick={(e) => e.target.select()} value={down8} onChange={(e) => setDown8(e.target.value)} ref={el => (downRefs.current[8] = el)} onKeyDown={(e) => e.key === "Enter" && downRefs.current[9].focus()} />
            <input type="text" className="w-full text-end border-2" onClick={(e) => e.target.select()} value={info9} onChange={(e) => setInfo9(e.target.value)} ref={el => (infoRefs.current[9] = el)} onKeyDown={(e) => e.key === "Enter" && infoRefs.current[10].focus()} />
            <input type="number" className="w-full text-center border-2" onClick={(e) => e.target.select()} value={up9} onChange={(e) => setUp9(e.target.value)} ref={el => (upRefs.current[9] = el)} onKeyDown={(e) => e.key === "Enter" && upRefs.current[10].focus()} />
            <input type="number" className="w-full text-center border-2" onClick={(e) => e.target.select()} value={down9} onChange={(e) => setDown9(e.target.value)} ref={el => (downRefs.current[9] = el)} onKeyDown={(e) => e.key === "Enter" && downRefs.current[10].focus()} />
            <input type="text" className="w-full text-end border-2" onClick={(e) => e.target.select()} value={info10} onChange={(e) => setInfo10(e.target.value)} ref={el => (infoRefs.current[10] = el)} onKeyDown={(e) => e.key === "Enter" && infoRefs.current[1].focus()} />
            <input type="number" className="w-full text-center border-2" onClick={(e) => e.target.select()} value={up10} onChange={(e) => setUp10(e.target.value)} ref={el => (upRefs.current[10] = el)} onKeyDown={(e) => e.key === "Enter" && upRefs.current[1].focus()} />
            <input type="number" className="w-full text-center border-2" onClick={(e) => e.target.select()} value={down10} onChange={(e) => setDown10(e.target.value)} ref={el => (downRefs.current[10] = el)} onKeyDown={(e) => e.key === "Enter" && downRefs.current[1].focus()} />
            <div className="text-center" onClick={() => setData("")}><p className="collapse">ล้าง</p></div>
            <p>{Number(up1) + Number(up2) + Number(up3) + Number(up4) + Number(up5) + Number(up6) + Number(up7) + Number(up8) + Number(up9) + Number(up10)}</p>
            <p>{Number(down1) + Number(down2) + Number(down3) + Number(down4) + Number(down5) + Number(down6) + Number(down7) + Number(down8) + Number(down9) + Number(down10)}</p>
        </div>
    );
};