using System;
using System.Collections.Generic;
using BAHM;

namespace HandleBahmConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            int opcao;
            do
            {
                opcao = 0;
                opcao = Convert.ToInt32(Console.ReadLine());

                if (opcao == 1)
                {
                    break;
                }
                    

                if (opcao == 2)
                {

                    PontoModel c = new PontoModel();
                    Console.WriteLine("entre com o id do ponto que deseja recuperar");

                    int pontoEscolhido = Convert.ToInt32(Console.ReadLine());
                    PontoModel m = c.GetOne(pontoEscolhido);
                    string texto = m.Ponto_id +
                        " " + m.Nome +
                        " " + m.Latitude +
                        " " + m.Longitude +
                        " " + m.Pagina +
                        " " + m.IconeId;

                    Console.WriteLine(texto);
                    Console.ReadLine();
                }

            } while (true);
        }
    }
}
