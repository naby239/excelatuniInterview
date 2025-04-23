import { Search } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { StudentTable } from "../components/student-table"
// or
// import { StudentTable } from "../../components/student-table"
// or whatever the correct relative path is

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2 font-semibold">
          <span className="text-lg">Student Dashboard</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm">
            Help
          </Button>
          <Button size="sm">Add Student</Button>
          <Link href="/auth">
            <Button size="sm">Login</Button>
          </Link>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <StudentTable />
      </main>
    </div>
  )
}
