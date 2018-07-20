using Microsoft.Data.Sqlite;

namespace CertChecker.Db.Repository
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
