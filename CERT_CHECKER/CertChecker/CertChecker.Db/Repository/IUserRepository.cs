using System.Collections.Generic;
using CertChecker.Db.Entities;


namespace CertChecker.Db.Repository
{
    public interface IUserRepository
    {
        void Delete(User user);
       
        User Add(User user);

        List<User> Select();

        User Authenticate(string login, string password);
    }
}