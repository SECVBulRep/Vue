namespace sapvue.Models
{
    public class AuthResponse : BaseRespone
    {
        public string JwtToken { get; set; }
    }



    public class UserResponse : BaseRespone
    {
        public string User { get; set; }
    }
}