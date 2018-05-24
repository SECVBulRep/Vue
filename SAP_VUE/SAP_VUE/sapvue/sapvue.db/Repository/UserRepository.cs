using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using Microsoft.Data.Sqlite;
using sapvue.db.Entities;

namespace sapvue.db.Repository
{
    public class UserRepository : BaseRepository, IUserRepository
    {

        public bool Delete(User article)
        {
            throw new System.NotImplementedException();
        }

        public bool Add(User article)
        {
            throw new System.NotImplementedException();
        }
        
        public List<User> Select()
        {
            List<User> result = null;
            using (var connection = new SqliteConnection(connectionStringBuilder.ConnectionString))
            {
                connection.Open();
                result = connection.Query<User>("SELECT Id,Email,Password FROM Users").ToList();
            }
            return result;
        }


    }
}