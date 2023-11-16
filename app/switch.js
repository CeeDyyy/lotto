'use client'

import React, { useRef, useState } from "react"

export default function Combination() {
    const digits = 2
    const digitRefs = useRef([]);
    const [code, setCode] = useState([])

    function setCodeArray(index, value) {
        var arr = [...code]

        if (~index) {
            arr[index] = value.at(-1)
            setCode(arr)
            value.at(-1) !== undefined && (digits > (index + 1) ? digitRefs.current[index + 1].focus() : '')
        }
    }

    function handleKeyDown(num, key) {
        var arr = [...code]

        if (key === "Backspace") {
            num > 0 && digitRefs.current[num - 1].focus()
            arr[num - 1] = undefined
            setCode(arr)
        }
    }

    const [isSwitch, setIsSwitch] = useState(false)
    const [isUp, setIsUp] = useState(false)
    const [isDown, setIsDown] = useState(false)
    const [cost, setCost] = useState()

    return (
        <div className="m-2">
            <div className="mt-3 flex">
                {[...Array(digits)].map((_, index) =>
                    <div className="flex items-center" key={index}>
                        {index !== 0 && <p className="">-</p>}
                        <input
                            ref={el => (digitRefs.current[index] = el)}
                            type="number"
                            value={code[index] ? code[index] : ""}
                            onChange={(e) => setCodeArray(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e.key)}
                            onFocus={(e) => e.target.select()}
                            placeholder="X"
                            className="border-2 border-gray-400 bg-[#fff] placeholder-gray-400 text-center font-normal w-full py-3 rounded-[10px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                    </div>
                )}
            </div>

            <div className="mt-4">
                <input type="checkbox" id="up" name="up" checked={isUp} onChange={() => setIsUp(!isUp)} />
                <label htmlFor="up"> บน</label><br />
                <input type="checkbox" id="down" name="down" checked={isDown} onChange={() => setIsDown(!isDown)} />
                <label htmlFor="down"> ล่าง</label><br />
                <input type="checkbox" id="switch" name="switch" checked={isSwitch} onChange={() => setIsSwitch(!isSwitch)} />
                <label htmlFor="switch"> กลับเลข</label><br /><br />

                <input type="number" placeholder="บาท (฿)" className="p-2 border-2 border-blue-200 rounded-lg w-full" onChange={(e) => setCost(e.target.value)} />
            </div>

            <div className="mt-4 p-2 border-2 border-gray-600 rounded-lg">
                {isUp &&
                    <div className="text-center">
                        <p className="font-bold bg-green-200">บน</p>
                        {code[0]}{code[1]}
                        <br />
                        {isSwitch && <>{code[1]}{code[0]}</>}
                    </div>
                }
                {isDown &&
                    <div className="text-center">
                        <p className="font-bold bg-blue-200">ล่าง</p>
                        {code[0]}{code[1]}
                        <br />
                        {isSwitch && <>{code[1]}{code[0]}</>}
                    </div>
                }
                <div className="text-center">
                    <p className="font-bold bg-yellow-200">ราคา หน่วยล่ะ : {cost} บาท</p>
                    <span className="font-bold">ทั้งหมด : </span>{((isUp ? 1 : 0) + (isDown ? 1 : 0)) * (isSwitch ? 2 : 1) * cost} บาท
                </div>

            </div>
        </div>
    )
}