import { Enrolment } from "./enrolment";

export interface Student {
    id: string; // Guid in C# maps to string in TS
    firstName?: string;
    lastName?: string;
    email?: string;
    idNumber?: number; // long? in C# maps to number | undefined in TS
    profileImage?: string;
    enrolments?:Enrolment[]
  }