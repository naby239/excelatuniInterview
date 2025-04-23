export interface Enrolment {
    id: string; // Guid → string
    institution?: string;
    qualification?: string;
    qualificationType?: string;
    enrolmentDate?: string; // DateTime → ISO date string (or use Date if parsed)
    averageToDate?: number; // int → number
    studentId: string; // Guid → string
  }