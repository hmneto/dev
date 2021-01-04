git clone https://github.com/hmneto/dev
cd ~/dev/zip
git pull
docker build -t teste .
docker run -d --rm --name novo -t teste 
docker logs -f novo


docker image remove teste
docker rm -f novo
