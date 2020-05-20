using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace webAPI.Controllers
{
    public class ClienteController : Controller
    {
        [HttpPost]
        public String CriarUsuario()
        {
            string cliente_json;
            using (var reader = new StreamReader(Request.Body))
            {
                cliente_json = reader.ReadToEnd();
            }

            var cliente = JsonConvert.DeserializeObject<Clientes>(cliente_json);

            return cliente.InserirCliente();
        }

        public String ListarUsuarios()
        {
            Clientes cliente = new Clientes();

            return cliente.ListaClientes();
        }

        public String UmUsuario(int id)
        {
            Clientes cliente = new Clientes();

            return cliente.UmCliente(id);
        }

        [HttpPut]
        public String EditarUsuario(int id)
        {
            string cliente_json;
            using (var reader = new StreamReader(Request.Body))
            {
                cliente_json = reader.ReadToEnd();
            }

            var cliente = JsonConvert.DeserializeObject<Clientes>(cliente_json);

            return cliente.EditarCliente(id);
        }

        [HttpDelete]
        public String DeleteUsuario(int id)
        {
            Clientes cliente = new Clientes();

            return cliente.DeleteCliente(id);
        }
    }   
}