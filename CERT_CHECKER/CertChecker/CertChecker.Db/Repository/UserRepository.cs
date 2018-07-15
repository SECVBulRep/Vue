using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net.Security;
using CertChecker.Db.Entities;
using Dapper;
using Microsoft.Data.Sqlite;


namespace CertChecker.Db.Repository
{
    public class UserRepository : BaseRepository, IUserRepository
    {

        public void  Delete(User article)
        {
            throw new System.NotImplementedException();
        }

        public User Add(User user)
        {
            using (IDbConnection db = new SqliteConnection(connectionStringBuilder.ConnectionString))
            {
                var sqlQuery = "INSERT INTO Users (Email,Password) VALUES(@Email, @Password); SELECT last_insert_rowid() as int;";
                int? userId = db.Query<int>(sqlQuery, user).FirstOrDefault();
                user.Id = userId.Value;
            }

            return user;
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


        public User Authenticate(string login, string  password)
        {
            return Select().SingleOrDefault(x => x.Email == login && x.Password == password);
        }


    }
}