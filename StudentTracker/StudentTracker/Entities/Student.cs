namespace StudentTracker.Entities
{
    public class Student
    {
        public Guid Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public long? IdNumber { get; set; }
        public string? ProfileImage { get; set; }
    }
}
