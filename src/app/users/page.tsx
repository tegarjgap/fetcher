"use client"

import { GetUserResponse } from "@/contracts/users"
import axios from "redaxios"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Users() {
  const [users, setUsers] = useState<GetUserResponse>()

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios.get<GetUserResponse>(
          "https://reqres.in/api/users",
          {
            headers: {
              Accept: "application/json",
            },
          }
        )
        setUsers(data)
      } catch (error) {
        console.error(error)
      }
    }
    getUsers()
  }, [])

  return (
    <>
      <div className="m-4">
        <Link href={"/"}>👈🏻 Back to Posts</Link>
      </div>
      {users?.data.map((item) => (
        <div
          key={item.id}
          className="flex justify-center bg-slate-300 w-1/2 m-auto"
        >
          <p>
            {item.first_name} - {item.email}
          </p>
        </div>
      ))}
    </>
  )
}
