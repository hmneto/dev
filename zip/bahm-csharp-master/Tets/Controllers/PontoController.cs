using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BAHM;
using Microsoft.AspNetCore.Mvc;

namespace Tets.Controllers
{
    public class PontoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult getoneponto(string entrada)
        {
            PontoModel c = new PontoModel();
            try
            {
                PontoModel a = c.GetOne(Convert.ToInt32(entrada));
                ViewData["nome"] = a.Nome;
            }
            catch (Exception ex)
            {
                ViewData["nome"] = ex.Message;
            }


            return View();
        }

        public IActionResult getallpontos()
        {
            PontoModel ponto = new PontoModel();
            List<PontoModel> lista = ponto.GetAll();
            return View(lista);
        }


        public string edit(string teste)
        {
            return teste;
        }

    }
}