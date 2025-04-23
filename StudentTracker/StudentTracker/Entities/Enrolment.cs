namespace StudentTracker.Entities
{
    public class Enrolment
    {
        public Guid Id { get; set; }
        public string? Institution { get; set; }
        public string? Qualification { get; set; }
        public string? QualificationType { get; set; }
        public DateTime EnrolmentDate { get; set; }
        public int AverageToDate { get; set; }
        public Guid StudentId { get; set; }
    }
}
