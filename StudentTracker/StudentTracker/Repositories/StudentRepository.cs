using Microsoft.EntityFrameworkCore;
using StudentTracker.Entities;
using StudentTracker.Repositories.Context;
using StudentTracker.Repositories.Interfaces;
using System.Threading.Tasks;

namespace StudentTracker.Repositories
{
    public class StudentRepository : IStudentRepository
    {
        private readonly DataContext _dataContext;
        public StudentRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<IList<Student>> GetAllStudents()
        {
            return await _dataContext.Students.ToListAsync();
        }

        public async Task<Student?> GetStudent(Guid Id)
        {
            var student = await _dataContext.Students.FindAsync(Id);
            if (student == null) {
                return null;
            }
            return student;
        }

        public async Task<bool?> AddStudent(Student student)
        {
            await _dataContext.Students.AddAsync(student);

            var saved = await _dataContext.SaveChangesAsync();

            return saved > 0;
        }

        public async Task<bool?> UpdateStudent(Student student)
        {
            var studentToUpdate = await _dataContext.Students.FindAsync(student.Id);

            if (studentToUpdate != null)
            {
                studentToUpdate.FirstName = student.FirstName;
                studentToUpdate.LastName = student.LastName;
                studentToUpdate.Email = student.Email;
                studentToUpdate.ProfileImage = student.ProfileImage;
                studentToUpdate.IdNumber = student.IdNumber;

                var updated = await _dataContext.SaveChangesAsync();

                return updated > 0;
            }

            return false;
        }

        public async Task<bool?> UpdateStudentEnrolment(Enrolment enrolment)
        {
            var enrolmentToUpdate = await _dataContext.Enrolments.FindAsync(enrolment.Id);

            if (enrolmentToUpdate != null)
            {
                enrolmentToUpdate.EnrolmentDate = enrolment.EnrolmentDate;
                enrolmentToUpdate.Qualification =enrolment.Qualification;
                enrolmentToUpdate.Institution =enrolment.Institution;
                enrolmentToUpdate.AverageToDate =enrolment.AverageToDate;

                var updated = await _dataContext.SaveChangesAsync();

                return updated > 0;
            }

            return false;
        }

        public async Task<IList<Enrolment>?> GetStudentEnrolments(Guid Id)
        {
            return await _dataContext.Enrolments.Where(s => s.StudentId == Id).ToListAsync();
        }
    }
}
