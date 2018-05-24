﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using sapvue.db.Entities;
using sapvue.db.Repository;


namespace sapvue.Controllers
{
    public class HomeController : Controller
    {

        IUserRepository repo;
        public HomeController(IUserRepository r)
        {
            repo = r;
        }

        public IActionResult Index()
        {
            return View();
        }

     
    }
}
