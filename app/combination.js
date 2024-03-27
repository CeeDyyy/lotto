'use client'

import React, { useRef, useState } from "react"

export default function Combination() {
    const digits = 6
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

    const [ordering, setOrdering] = useState(['order-1 border-l-2 border-t-2', 'order-2 border-x-2 border-t-2', 'order-3 border-r-2 border-t-2', 'order-4 border-l-2 border-y-2', 'order-5 border-x-2 border-y-2', 'order-6 border-r-2 border-y-2']);

    return (
        <div className="m-2 flex flex-col justify-center">
            <div className="mb-2 grid grid-cols-2 justify-items-center divide-x">
                <button className="w-full py-2 hover:bg-gray-100" onClick={() => setOrdering(['order-1 border-l-2 border-t-2', 'order-4 border-l-2 border-y-2', 'order-5 border-x-2 border-y-2', 'order-6 border-r-2 border-y-2', 'order-3 border-r-2 border-t-2', 'order-2 border-x-2 border-t-2'])}>วนซ้าย</button>
                <button className="w-full py-2 hover:bg-gray-100" onClick={() => setOrdering(['order-1 border-l-2 border-t-2', 'order-2 border-x-2 border-t-2', 'order-3 border-r-2 border-t-2', 'order-6 border-r-2 border-y-2', 'order-5 border-x-2 border-y-2', 'order-4 border-l-2 border-y-2'])}>วนขวา</button>
            </div>
            <div className="mx-auto grid grid-cols-3 w-80">
                {[...Array(digits)].map((_, index) =>
                    <input
                        ref={el => (digitRefs.current[index] = el)}
                        type="number"
                        value={code[index] ? code[index] : ""}
                        onChange={(e) => setCodeArray(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e.key)}
                        onFocus={(e) => e.target.select()}
                        placeholder="X"
                        className={`
                        ${index === 0 && ordering[0]} 
                        ${index === 1 && ordering[1]} 
                        ${index === 2 && ordering[2]} 
                        ${index === 3 && ordering[3]} 
                        ${index === 4 && ordering[4]} 
                        ${index === 5 && ordering[5]} 
                        text-3xl bg-yellow-100 placeholder-gray-400 text-center font-normal w-full py-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-gray-400
                        `}
                        key={index}
                    />
                )}
            </div>
            <div className="flex">
                <button onClick={() => typeIndex < 5 ? setTypeIndex(typeIndex + 1) : setTypeIndex(0)} className="w-24">{type[typeIndex]}</button>
                <div className="mt-6 mx-auto grid grid-cols-4 h-[60vh] text-2xl">
                    <div className="text-end grid">
                        <p>1</p>
                        <p className="collapse">2</p>
                        <p className="collapse">3</p>
                        <p className="collapse">4</p>
                        <p className="collapse">5</p>
                        <p className="collapse">6</p>
                        <p className="collapse">7</p>
                        <p className="collapse">8</p>
                        <p className="collapse">9</p>
                        <p>10</p>
                        <p className="collapse">x</p>
                        <p className="collapse">x</p>
                    </div>
                    <div className="text-center border-x-2 border-gray-400 bg-yellow-50 grid">
                        <p>{code[0]}{code[1]}{code[2]}</p>
                        <p>{code[0]}{code[1]}{code[3]}</p>
                        <p>{code[0]}{code[1]}{code[4]}</p>
                        <p>{code[0]}{code[1]}{code[5]}</p>
                        <p>{code[1]}{code[2]}{code[3]}</p>
                        <p>{code[1]}{code[2]}{code[4]}</p>
                        <p>{code[1]}{code[2]}{code[5]}</p>
                        <p>{code[2]}{code[3]}{code[4]}</p>
                        <p>{code[2]}{code[3]}{code[5]}</p>
                        <p>{code[2]}{code[3]}{code[0]}</p>
                        <p className="collapse">x</p>
                        <p className="collapse">x</p>
                    </div>
                    <div className="text-center border-x-2 border-gray-400 bg-yellow-50 grid">
                        <p>{code[3]}{code[4]}{code[5]}</p>
                        <p>{code[3]}{code[4]}{code[0]}</p>
                        <p>{code[3]}{code[4]}{code[1]}</p>
                        <p>{code[4]}{code[5]}{code[0]}</p>
                        <p>{code[4]}{code[5]}{code[1]}</p>
                        <p>{code[4]}{code[5]}{code[2]}</p>
                        <p>{code[5]}{code[0]}{code[2]}</p>
                        <p>{code[5]}{code[0]}{code[3]}</p>
                        <p>{code[2]}{code[4]}{code[0]}</p>
                        <p>{code[3]}{code[1]}{code[5]}</p>
                        <input type="number" className="w-14 ring-2" />
                        <input type="number" className="w-14 ring-2" />
                    </div>
                    <div className="grid">
                        <p>11</p>
                        <p className="collapse">2</p>
                        <p className="collapse">3</p>
                        <p className="collapse">4</p>
                        <p className="collapse">5</p>
                        <p className="collapse">6</p>
                        <p className="collapse">7</p>
                        <p className="collapse">8</p>
                        <p className="collapse">9</p>
                        <p>20</p>
                        <p className="collapse">x</p>
                        <p className="collapse">x</p>
                    </div>
                </div>
            </div>
        </div>
    )
}