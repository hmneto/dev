
git clone https://github.com/hmneto/dev
cd ~/dev/Exemplos/auto-pull-git-node/
docker build -t teste .
docker run -d --name novo -t teste 
docker logs -f novo

docker-compose up --build

git pull
cd ~/dev/Exemplos/auto-pull-git-node/
docker image remove teste
docker rm -f novo
docker build -t teste .
docker run -d --rm --name novo -t teste 
docker logs -f novo
