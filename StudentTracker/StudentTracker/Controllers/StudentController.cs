using Microsoft.AspNetCore.Mvc;
using StudentTracker.Entities;
using StudentTracker.Manager.Interfaces;
using StudentTracker.Models;

namespace StudentTracker.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentController : ControllerBase
    {

        private readonly ILogger<StudentController> _logger;

        private readonly IStudentManager _studentManager;

        public StudentController(ILogger<StudentController> logger,IStudentManager studentManager)
        {
            _logger = logger;
            _studentManager = studentManager;
        }

        [HttpGet("GetAllStudents")]
        public Task<IList<Student>> GetAllStudents()
        {
            return _studentManager.GetAllStudents();
        }

        [HttpGet("GetStudentEnrolments")]
        public Task<IList<Enrolment>> GetStudentEnrolments([FromQuery]Guid id)
        {
            return _studentManager.GetStudentEnrolments(id);
        }

        [HttpPost("UpdateStudent")]
        public Task<bool?> GetStudentEnrolments([FromBody]StudentRequestModel student)
        {
            return _studentManager.UpdateStudent(student);
        }
    }
}
