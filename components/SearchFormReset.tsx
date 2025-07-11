"use client"

import { X } from "lucide-react"
import Link from "next/link"

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector(".search-form") as HTMLFormElement
        if (form) {
            form.reset()
        }
    }
    return (
        <button type='reset' onClick={reset}>
            <Link href="/" className="size-[50px] rounded-full bg-black flex justify-center items-center !important text-white">
                <X />
            </Link>
        </button>
    )
}

export default SearchFormReset
