using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace VITS.Services.Tasks.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        // GET: api/Tasks
        [HttpGet]
        public IEnumerable<string> Get()
        {
            string userUpn = "userUpn";
            if (User.Claims.Any())
            {
                var upn = ((ClaimsIdentity)(User.Identity)).Claims.Where(c => c.Type == ClaimTypes.Upn).FirstOrDefault();
                userUpn = null != upn ? upn.Value : "Claim for user not found!";
            }
            return new string[] { "value1", "value2", userUpn };
        }

        // GET: api/Tasks/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Tasks
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Tasks/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
