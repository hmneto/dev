using System;
using System.Collections.Generic;
using System.Text;

namespace BAHM
{
    public class DB
    {
        private string connectionString = "server=localhost; userid=root; database=bahm";

        public string returnConnectionString()
        {
            return this.connectionString;
        }
    }
}
