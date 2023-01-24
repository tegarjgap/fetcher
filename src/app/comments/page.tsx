"use client"
import { IComments } from "@/scheme/comments"
import Link from "next/link"
import { useEffect, useState } from "react"
import wretch from "wretch"

export default function Comments() {
  const [comment, setComment] = useState<IComments[]>([])

  useEffect(() => {
    wretch("https://jsonplaceholder.typicode.com/comments")
      .get()
      .json((data) => setComment(data))
  }, [])

  return (
    <>
      <div className="m-4 hover:underline">
        <Link href={"/users"}>👈🏻 Back to Users</Link>
      </div>
      {comment.map(({ id, name, email, body }) => (
        <div
          key={id}
          className="flex justify-center flex-col m-auto w-1/2 mb-4"
        >
          <h2 className="text-lg font-bold">
            {name} - {email}
          </h2>
          <p>{body}</p>
        </div>
      ))}
    </>
  )
}
