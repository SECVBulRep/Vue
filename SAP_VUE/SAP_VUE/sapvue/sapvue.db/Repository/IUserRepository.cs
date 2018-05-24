using System.Collections.Generic;
using sapvue.db.Entities;

namespace sapvue.db.Repository
{
    public interface IUserRepository
    {
        void Create(User user);
        void Delete(int id);
        User Get(int id);
        List<User> GetUsers();
        void Update(User user);
    }
}