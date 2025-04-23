"use client";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Student } from "@/models/student";
import { Enrolment } from "@/models/enrolment";
import { randomUUID } from "crypto";

// Default values for a new student
const defaultStudent: Student = {
  id: "",
};

interface StudentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  student?: Student | null;
  onSubmit: (data: Student) => void;
}

export function StudentModal({
  open,
  onOpenChange,
  student,
  onSubmit,
}: StudentModalProps) {
  const [formData, setFormData] = useState<Student>(defaultStudent);
  const [enrolments, setEnrolments] = useState<Enrolment[]>([]);
  const isEditMode = !!student?.id;

  // Update form data when student prop changes
  useEffect(() => {
    const fetchData = async () => {
      if (student?.id !== "") {
        const res = await fetch(
          `https://localhost:7113/Student/GetStudentEnrolments?id=${student?.id}`
        );
        const result = await res.json();
        console.log("Res ", result);

        setEnrolments(result);
      }
    };

    if (student) {
      setFormData(student);
    } else {
      setFormData(defaultStudent);
    }

    fetchData();
  }, [student]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = () => {
    onSubmit(formData);
    onOpenChange(false);
    setFormData(defaultStudent);
  };

  const handleAddEnrolment = () => {
    const newEnrolment: Enrolment = {
      id: uuidv4(),
      studentId: student?.id || '',
      institution: '',
      qualification: '',
      qualificationType: '',
      enrolmentDate: '',
      averageToDate: 0
    };
  
    setEnrolments((prev) => [...prev, newEnrolment]);
  };
  const persistEnrolemts = () => {
    formData.enrolments = enrolments;
  };

  const addNewEnrolment = (enrolement: Enrolment) => {
    enrolments.push(enrolement);
    setEnrolments(enrolments);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {isEditMode ? "Edit Student" : "Add New Student"}
          </DialogTitle>
          <DialogDescription>
            {isEditMode
              ? "Update the student's information below."
              : "Fill in the details to add a new student."}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Id Number</Label>
            <Input
              id="idNumber"
              name="idNumber"
              placeholder="Doe"
              value={formData.idNumber}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="max-h-[300px] overflow-y-auto space-y-4">
            {enrolments.map((enrolment) => (
              <div key={enrolment.id}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="institution">Institution</Label>
                    <Input
                      id="institution"
                      name="institution"
                      placeholder="95%"
                      value={enrolment.institution}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="qualification">Qualification</Label>
                    <Input
                      id="qualification"
                      name="qualification"
                      placeholder="95%"
                      value={enrolment.qualification}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="qualificationType">QualificationType</Label>
                    <Input
                      id="qualificationType"
                      name="qualificationType"
                      placeholder="95%"
                      value={enrolment.qualificationType}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="enrolmentDate">EnrolmentDate</Label>
                    <Input
                      id="enrolmentDate"
                      name="enrolmentDate"
                      placeholder="95%"
                      value={enrolment.enrolmentDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="averageToDate">AverageToDate</Label>
                    <Input
                      id="averageToDate"
                      name="averageToDate"
                      placeholder="95%"
                      value={enrolment.averageToDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button type="button" onClick={handleAddEnrolment}>
            Add Enrolment
          </Button>  
        </div>
        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button type="button" onClick={handleSubmit}>
            {isEditMode ? "Update Student" : "Add Student"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
