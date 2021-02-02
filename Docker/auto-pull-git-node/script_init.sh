git clone https://github.com/hmneto/dev
cd ~/dev/Docker/auto-pull-git-node/
docker rm -f novo
docker build -t teste .
docker run -d --rm --name novo -t teste 
docker logs -f novo



git clone https://github.com/hmneto/dev
cd ~/dev/Docker/auto-pull-git-node/
docker rm -f novo
docker build -t teste .
docker run -d --rm --name novo -t teste 
docker exec -it novo sh
