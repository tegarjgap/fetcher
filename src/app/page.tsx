"use client"
import IPost from "@/scheme/posts"
import Fetcher from "@/utils/fetcher"
import Link from "next/link"
import useSWR from "swr"
export default function Home() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    Fetcher
  )

  if (error) return <>failed to load data...</>
  if (isLoading) return <>loading...</>

  return (
    <div>
      <div className="m-4">
        <Link href={"/users"}>Check Users 👉🏻</Link>
      </div>
      {data.map((item: IPost) => (
        <div
          key={item.id}
          className="flex justify-center flex-col w-1/2 m-auto mb-5 text-justify"
        >
          <h1 className="text-lg font-bold">{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
}
