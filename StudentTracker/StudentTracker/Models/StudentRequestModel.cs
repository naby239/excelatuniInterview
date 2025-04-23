using StudentTracker.Entities;

namespace StudentTracker.Models
{
    public class StudentRequestModel
    {
        public Guid Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public long? IdNumber { get; set; }
        public string? ProfileImage { get; set; }
        public List<Enrolment>? Enrolments { get; set; }
    }
}
