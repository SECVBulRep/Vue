using System;
using System.Text;
using Microsoft.Data.Sqlite;

namespace sapvue.db.Repository
{
    public class BaseRepository
    {
        protected readonly SqliteConnectionStringBuilder connectionStringBuilder;

        public BaseRepository()
        {
            connectionStringBuilder = new SqliteConnectionStringBuilder { DataSource = "testdb" };
        }
    }
}
