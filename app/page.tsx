import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`text-white flex items-center justify-center text-3xl my-[20%] ${inter.className}`}>
        Search what you want
    </main>
  )
}
