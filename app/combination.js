'use client'

import React, { useRef, useState } from "react"

export default function Combination() {
    const digits = 6
    const digitRefs = useRef([]);
    const [code, setCode] = useState([])

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
        <div className="m-2 flex flex-col justify-center">
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
                        className={`${index === 3 && 'order-last'} ${index === 4 && 'order-5'} ${index === 5 && 'order-4'} text-3xl bg-yellow-100 placeholder-gray-400 text-center font-normal w-full py-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-gray-400 ${index === 0 && 'border-r-2 border-b-2'} ${index === 1 && 'border-x-2 border-b-2'} ${index === 2 && 'border-l-2 border-b-2'} ${index === 3 && 'border-l-2 border-t-2'} ${index === 4 && 'border-x-2 border-t-2'} ${index === 5 && 'border-r-2 border-t-2'}`}
                        key={index}
                    />
                )}
            </div>
            <div className="mt-6 mx-auto grid grid-cols-4 h-[73vh] text-3xl">
                <div className="text-end grid gap-5">
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
                </div>
                <div className="border-x-2 border-gray-400 px-4 bg-yellow-50 grid gap-5">
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
                </div>
                <div className="border-x-2 border-gray-400 px-4 bg-yellow-50 grid gap-5">
                    <p>{code[3]}{code[4]}{code[5]}</p>
                    <p>{code[3]}{code[4]}{code[0]}</p>
                    <p>{code[3]}{code[4]}{code[1]}</p>
                    <p>{code[4]}{code[5]}{code[0]}</p>
                    <p>{code[4]}{code[5]}{code[1]}</p>
                    <p>{code[4]}{code[5]}{code[2]}</p>
                    <p>{code[5]}{code[0]}{code[2]}</p>
                    <p>{code[5]}{code[0]}{code[3]}</p>
                    <p>{code[5]}{code[1]}{code[3]}</p>
                    <p>{code[0]}{code[2]}{code[4]}</p>
                </div>
                <div className="grid gap-5">
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
                </div>
            </div>
        </div>
    )
}