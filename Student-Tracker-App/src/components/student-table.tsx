"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, SortAsc, SortDesc } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Student } from "@/models/student"
import { StudentModal } from "./student-modal"

// Sample student data

export function StudentTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const [sortField, setSortField] = useState("name")
  const [sortDirection, setSortDirection] = useState("asc")
  const [students, setStudents] = useState<Student[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [currentStudent, setCurrentStudent] = useState<Student>({id:''})

  const itemsPerPage = 5
  const totalPages = Math.ceil(students.length / itemsPerPage)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://localhost:7113/Student/GetAllStudents`
      );
      const result = await res.json();
      console.log("Res ", result);
      setStudents(result);
    };

    fetchData();
  }, []);

  // Sort students
  const sortedStudents = [...students].sort((a, b) => {
    if (sortDirection === "asc") {
      return a[sortField] > b[sortField] ? 1 : -1
    } else {
      return a[sortField] < b[sortField] ? 1 : -1
    }
  })

  // Get current page students
  const currentStudents = sortedStudents.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const renderSortIcon = (field) => {
    if (sortField !== field) return null
    return sortDirection === "asc" ? <SortAsc className="ml-2 h-4 w-4" /> : <SortDesc className="ml-2 h-4 w-4" />
  }

  const handleAddStudent = () => {
    setCurrentStudent({id:''})
    setModalOpen(true)
  }

  const handleEditStudent = (student:Student) => {
    setCurrentStudent(student)
    setModalOpen(true)
  }

  const handleSubmitStudent = (data:any) => {
    if (data.id) {
      // Edit existing student
      setStudents(students.map((student) => (student.id === data.id ? data : student)))
    } else {
      // Add new student
      const newStudent = {
        ...data,
        id: `STU${String(students.length + 1).padStart(3, "0")}`,
      }
      setStudents([...students, newStudent])
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort("name")}>
              <div className="flex items-center">First Name {renderSortIcon("name")}</div>
            </TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort("grade")}>
              <div className="flex items-center">Last Name</div>
            </TableHead>
            <TableHead className="hidden md:table-cell">Email</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentStudents.map((student) => (
            <TableRow key={student.id}>
              <TableCell className="font-medium">{student.id}</TableCell>
              <TableCell>{student.firstName}</TableCell>
              <TableCell>{student.lastName}</TableCell>
              <TableCell className="hidden md:table-cell">{student.email}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View details</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleEditStudent(student)}>Edit student</DropdownMenuItem>
                    <DropdownMenuItem>View attendance</DropdownMenuItem>
                    <DropdownMenuItem>Send message</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between px-4 py-4">
        <div className="text-sm text-muted-foreground">
          Showing <strong>{(currentPage - 1) * itemsPerPage + 1}</strong> to{" "}
          <strong>{Math.min(currentPage * itemsPerPage, students.length)}</strong> of <strong>{students.length}</strong>{" "}
          students
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <StudentModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        student={currentStudent as any}
        onSubmit={handleSubmitStudent}
      />
    </div>
    
  )
}
