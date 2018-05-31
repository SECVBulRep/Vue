using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using sapvue.db.Repository;
using sapvue.Models;

namespace sapvue.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {


        IUserRepository repo;
        public AccountController(IUserRepository r)
        {
            repo = r;
        }



        [HttpPost("auth")]
        public async Task<AuthResponse> Authentifcation([FromBody] AuthModel model)
        {
            var resp = new AuthResponse { Code = "0" };

            var user = repo.Authenticate(model.Email, model.Password);

            if (user == null)
            {
                resp.Code = "400";
            }
            else
            {

                var claims = new List<Claim>
                {
                    new Claim(ClaimsIdentity.DefaultNameClaimType, model.Email)
                };

                ClaimsIdentity claimsIdentity =
                    new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
                        ClaimsIdentity.DefaultRoleClaimType);
                
                var now = DateTime.UtcNow;
                // создаем JWT-токен
                var jwt = new JwtSecurityToken(
                    issuer: AuthOptions.ISSUER,
                    audience: AuthOptions.AUDIENCE,
                    notBefore: now,
                    claims: claims,
                    expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
                    signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
                string encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
                resp.JwtToken = encodedJwt;
            }
            return resp;
        }


        [HttpGet("user")]
        [Authorize]
        public UserResponse LoginGet()
        {
            var resp = new UserResponse { Code = "0" };
            resp.User = User.Identity.Name;
            return resp;
        }


    }
}