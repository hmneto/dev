git clone https://github.com/hmneto/dev
git pull
cd ~/dev/zip
docker image remove teste
docker rm -f novo
docker build -t teste .
docker run -d --name novo -t teste 
docker logs -f novo
docker run -d --rm --name novo -t teste 
docker logs -f novo
