git clone https://github.com/hmneto/dev
cd ~/dev/Exemplos/consulta-cep/
docker rm -f novo
docker build -t teste .
docker run -it --rm --name novo -t teste
