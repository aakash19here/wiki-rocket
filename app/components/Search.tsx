"use client"

import { useRouter} from "next/navigation"
import { useState , FormEvent} from "react"

export default function Search() {
  const [search , setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
    router.push(`/${search}/`)
}

  return (
    <form className="w-50 flex justify-center md:justify-between" onSubmit={handleSubmit}>
        <input
            type="text"
            className="bg-white p-2 w-80 text-base rounded-md outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
        />
        <button className="p-2 text-xl rounded-xl ml-2 font-bold">
            🔍
        </button>
    </form>
  )
}
