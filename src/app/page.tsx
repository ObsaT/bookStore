"use client"
import BookList from "@/components/bookList";
import { RecoilRoot } from "recoil";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:px-28 px-0">
        <RecoilRoot>
          <BookList/>
        </RecoilRoot>
    </main>
  )
}
