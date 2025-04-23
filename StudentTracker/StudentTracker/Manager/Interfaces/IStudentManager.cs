using StudentTracker.Entities;
using StudentTracker.Models;

namespace StudentTracker.Manager.Interfaces
{
    public interface IStudentManager
    {
        Task<IList<Student>> GetAllStudents();
        Task<Student?> GetStudent(Guid Id);
        Task<bool?> AddStudent(Student student);
        Task<bool?> UpdateStudent(StudentRequestModel student);
        Task<IList<Enrolment>?> GetStudentEnrolments(Guid Id);
    }
}
