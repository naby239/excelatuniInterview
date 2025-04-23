using StudentTracker.Entities;
using StudentTracker.Manager.Interfaces;
using StudentTracker.Models;
using StudentTracker.Repositories.Interfaces;

namespace StudentTracker.Manager
{
    public class StudentManager : IStudentManager
    {
        private readonly IStudentRepository _studentRepository;
        public StudentManager(IStudentRepository studentRepository)
        {
            _studentRepository = studentRepository;
        }

        public async Task<bool?> AddStudent(Student student)
        {
            return await _studentRepository.AddStudent(student);
        }

        public async Task<IList<Student>> GetAllStudents()
        {
            return await _studentRepository.GetAllStudents();
        }

        public Task<Student?> GetStudent(Guid Id)
        {
            return _studentRepository.GetStudent(Id);
        }

        public Task<IList<Enrolment>?> GetStudentEnrolments(Guid Id)
        {
            return _studentRepository.GetStudentEnrolments(Id);
        }

        public async Task<bool?> UpdateStudent(StudentRequestModel student)
        {
            var studentUpdate = new Student()
            {
                Email = student.Email,
                FirstName = student.FirstName,
                Id = student.Id,
                IdNumber = student.IdNumber,
                LastName = student.LastName,
                ProfileImage = student.ProfileImage
            };

            var recordUpdated = await _studentRepository.UpdateStudent(studentUpdate);

            foreach (var enrolment in student.Enrolments)
            {
                var enrolmentUpdated = await _studentRepository.UpdateStudentEnrolment(enrolment);
                if (enrolmentUpdated == null || enrolmentUpdated == false) {
                    recordUpdated = false;
                }
            }

            return recordUpdated;
        }
    }
}
