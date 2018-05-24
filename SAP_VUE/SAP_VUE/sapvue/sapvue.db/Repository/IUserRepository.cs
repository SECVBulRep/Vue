using System.Collections.Generic;
using sapvue.db.Entities;

namespace sapvue.db.Repository
{
    public interface IUserRepository
    {
        bool Delete(User article);
       
        bool Add(User article);

        List<User> Select();
    }
}