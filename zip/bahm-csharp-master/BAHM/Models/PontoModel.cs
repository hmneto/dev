using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Text;

namespace BAHM
{
    public class PontoModel
    {
        public int Ponto_id { get; set; }
        public string Nome { get; set; }

        public float Latitude { get; set; }

        public float Longitude { get; set; }

        public int Pagina { get; set; }

        public int IconeId { get; set; }

        MySqlConnection myConn = new MySqlConnection(new DB().returnConnectionString());

        public PontoModel(int id, string nome, float latitude, float longitude, int pagina, int iconeId)
        {
            this.Ponto_id = id;
            this.Nome = nome;
            this.Latitude = latitude;
            this.Longitude = longitude;
            this.Pagina = pagina;
            this.IconeId = iconeId;
        }

        public PontoModel()
        {
        }

        public PontoModel GetOne(int id)
        {
            PontoModel ponto = null;

            try
            {
                //MySqlCommand comando = new MySqlCommand("insert into teste (nome) value (@nome)", myConn);
                //comando.Parameters.AddWithValue("nome", dado);
                MySqlCommand comando = new MySqlCommand("select * from pontos where ponto_id=@id", myConn);
                comando.Parameters.AddWithValue("id", id);
                myConn.Open();
                var a = comando.ExecuteReader();

                while (a.Read())
                {
                    ponto = new PontoModel(
                        (int)a["ponto_id"],
                        (string)a["nome"],
                        (float)a["latitude"],
                        (float)a["longitude"],
                        (int)a["pagina"],
                        (int)a["icone_id"]
                        );
                }

                myConn.Close();
                return ponto;
            }
            catch
            {
                return ponto;
            }
        }

        public List<PontoModel> GetAll()
        {
            List<PontoModel> listaPontos = new List<PontoModel>();

            try
            {
                //MySqlCommand comando = new MySqlCommand("insert into teste (nome) value (@nome)", myConn);
                MySqlCommand comando = new MySqlCommand("select * from pontos", myConn);
                myConn.Open();
                //comando.Parameters.AddWithValue("nome", dado);
                var a = comando.ExecuteReader();

                while (a.Read())
                {
                    PontoModel ponto = new PontoModel(
                        (int)a["ponto_id"],
                        (string)a["nome"],
                        (float)a["latitude"],
                        (float)a["longitude"],
                        (int)a["pagina"],
                        (int)a["icone_id"]
                        );
                    listaPontos.Add(ponto);
                }

                myConn.Close();
                return listaPontos;
            }
            catch
            {
                return listaPontos;
            }
        }
    }
}
