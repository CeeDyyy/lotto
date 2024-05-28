'use client'

import React, { useRef, useState } from "react"

export default function CombinationFourToTwo() {
    const digits = 4
    const digitRefs = useRef([]);
    const [code, setCode] = useState([])
    const type = ["3 ตัว คิม", "3 ตัว ปุ้มปุ้ย", "ลาว คิม", "ลาว ปุ้มปุ้ย", "3 ตัว ญา", "ลาว ญา"]
    const [typeIndex, setTypeIndex] = useState(0)

    function setCodeArray(index, value) {
        var arr = [...code]

        if (~index) {
            arr[index] = value.at(-1)
            setCode(arr)
            value.at(-1) !== undefined && (digits > (index + 1) ? digitRefs.current[index + 1].focus() : null)
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

    return (
        <div className="m-2 flex flex-col justify-center">\
            <div className="mx-auto grid grid-cols-4 w-80">
                {[...Array(digits)].map((_, index) =>
                    <input
                        ref={el => (digitRefs.current[index] = el)}
                        type="number"
                        value={code[index] ? code[index] : ""}
                        onChange={(e) => setCodeArray(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e.key)}
                        onFocus={(e) => e.target.select()}
                        placeholder="X"
                        className="border text-3xl bg-yellow-100 placeholder-gray-400 text-center font-normal w-full py-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-gray-400"
                        key={index}
                    />
                )}
            </div>
            <div className="flex">
                <button onClick={() => typeIndex < 5 ? setTypeIndex(typeIndex + 1) : setTypeIndex(0)} className="w-24">{type[typeIndex]}</button>
                <div className="mt-6 mx-auto grid grid-cols-4 h-[60vh] text-2xl">   
                    <div className="text-center border-x-2 border-gray-400 bg-yellow-50 grid">
                        <p>{code[0]}{code[1]}</p>
                        <p>{code[0]}{code[2]}</p>
                        <p>{code[0]}{code[3]}</p>
                        <p>{code[1]}{code[2]}</p>
                        <p>{code[1]}{code[3]}</p>
                        <p>{code[2]}{code[3]}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}