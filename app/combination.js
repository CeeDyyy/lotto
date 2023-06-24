'use client'

import React, { useRef, useState } from "react"

export default function Combination() {
    const digits = 6
    const digitRefs = useRef([]);
    const verifyBtn = useRef()
    const [code, setCode] = useState([])

    const [allCombination, setAllCombination] = useState([])

    function setCodeArray(index, value) {
        var arr = [...code]

        if (~index) {
            arr[index] = value.at(-1)
            setCode(arr)
            value.at(-1) !== undefined && (digits > (index + 1) ? digitRefs.current[index + 1].focus() : verifyBtn.current.focus())
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

    function combination(arr) {
        let array = arr
        let results = [];

        for (let i = 0; i < array.length - 1; i++) {
            for (let j = i + 1; j < array.length; j++) {
                for (let k = j + 1; k < array.length; k++) {
                    results.push(`${array[i]} ${array[j]} ${array[k]}`);
                }
            }
        }
        // console.log(results)
        setAllCombination(results);
    }
    return (
        <div className="m-2 flex flex-col justify-center">
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
            <button
                ref={verifyBtn}
                onClick={() => combination(code)}
                onKeyDown={(e) => handleKeyDown(digits, e.key)}
                className="bg-blue-300 my-4 mx-4 rounded-full p-2 text-white"
            >
                คำนวน
            </button>
            <ul>
                {allCombination.map((d, i) => <li key={i}><span className="font-bold">{i + 1}. </span>{d}</li>)}
            </ul>
        </div>
    )
}