using System.Collections.Generic;
using sapvue.db.Entities;

namespace sapvue.db.Repository
{
    public interface IUserRepository
    {
        void Delete(User user);
       
        User Add(User user);

        List<User> Select();
    }
}