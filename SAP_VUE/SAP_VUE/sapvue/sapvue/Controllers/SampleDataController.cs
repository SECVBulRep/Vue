using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using sapvue.Models;

namespace sapvue.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {

        [HttpPost("auth")]
        public BaseRespone Authentifcation([FromBody] AuthModel model)
        {
            var resp = new BaseRespone {Code = "0"};
            return resp;
        }
         

        public class BaseRespone
        {
            public string Code { get; set; }
        }
    }
}