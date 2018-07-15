using sapvue.Models;

namespace CertChecker.Models
{
    public class AuthResponse : BaseRespone
    {
        public string JwtToken { get; set; }
    }
}