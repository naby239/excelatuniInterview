using StudentTracker.Entities;

namespace StudentTracker.Repositories.Interfaces
{
    public interface IStudentRepository
    {
        Task<IList<Student>> GetAllStudents();
        Task<Student?> GetStudent(Guid Id);
        Task<bool?> AddStudent(Student student);
        Task<bool?> UpdateStudent(Student student);
        Task<IList<Enrolment>?> GetStudentEnrolments(Guid Id);
        Task<bool?> UpdateStudentEnrolment(Enrolment enrolment);

    }
}
