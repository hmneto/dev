using MySql.Data.MySqlClient;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


using System.Text.Json;
namespace webAPI
{
    public class Clientes
    {
        public int Id { get; set; }
        public string Nome { get; set; }

        MySqlConnection MyConnection = new MySqlConnection("Server=192.168.99.100; Port=3308; Uid=devuser; Pwd=devpass; Database=test_db;");


        public String InserirCliente()
        {
            //Conexão SQLSERVER
            //SqlConnection sqlConnection = null;
            //private string stringConnection = "Integrated Security=SSPI;Persist Security Info=False;Initial Catalog=banco;Data Source=HMNETON-NOTE";
            //private string stringSql = string.Empty;


            
            try
            {
                this.MyConnection.Open();
                MySqlCommand MyCommand = new MySqlCommand("insert into clientes (nome) value (@nome)",this.MyConnection);
                MyCommand.Parameters.AddWithValue("nome", this.Nome);
                MyCommand.ExecuteNonQuery();
                this.MyConnection.Close();
                return "sucesso";

            }
            catch(Exception e)
            {
                return e.ToString();
            }
        }


        public String ListaClientes()
        {
            List<Clientes> listaClientes = new List<Clientes>();
            //MySqlConnection MyConnection = new MySqlConnection("Server=192.168.99.100; Uid=devuser; Pwd=devpass; Database=test_db;");
            try
            {
                this.MyConnection.Open();
                MySqlCommand MyCommand = new MySqlCommand("select * from clientes",this.MyConnection);
                MySqlDataReader reader =  MyCommand.ExecuteReader();

                while(reader.Read())
                {
                    Clientes cliente = new Clientes();
                    cliente.Id = (int) reader["id_cliente"];
                    cliente.Nome = (string) reader["nome"];
                    listaClientes.Add(cliente);
                }
                

            }catch(Exception e)
            {
                return e.ToString();
            }
            this.MyConnection.Close();

            return JsonConvert.SerializeObject(listaClientes);
            //return System.Text.Json.JsonSerializer.Serialize(listaClientes);
        }

        public String UmCliente(int id)
        {
            this.MyConnection.Open();
            MySqlCommand mySqlCommand = new MySqlCommand("select * from clientes where id_cliente = @id", this.MyConnection);
            mySqlCommand.Parameters.AddWithValue("id", id);
            MySqlDataReader reader = mySqlCommand.ExecuteReader();
            Clientes cliente = new Clientes();
            while (reader.Read())
            {
                cliente.Id = (int)reader["id_cliente"];
                cliente.Nome = (string)reader["nome"];
            }
            return JsonConvert.SerializeObject(cliente);
        }

        public String EditarCliente(int id)   
        {
            try
            {
                this.MyConnection.Open();
                MySqlCommand MyCommand = new MySqlCommand("UPDATE clientes SET nome=@nome where id_cliente=@id_cliente", this.MyConnection);
                MyCommand.Parameters.AddWithValue("nome", this.Nome);
                MyCommand.Parameters.AddWithValue("id_cliente", id);
                MyCommand.ExecuteNonQuery();
                this.MyConnection.Close();
                return "sucesso";
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }

        public String DeleteCliente(int id)
        {
            try
            {
                this.MyConnection.Open();
                MySqlCommand MyCommand = new MySqlCommand("DELETE from clientes where id_cliente=@id_cliente", this.MyConnection);
                MyCommand.Parameters.AddWithValue("id_cliente", id);
                MyCommand.ExecuteNonQuery();
                this.MyConnection.Close();
                return "sucesso";
            }
            catch (Exception e)
            {
                return e.ToString();
            }


        }
    }
}
