git clone https://github.com/hmneto/dev
cd ~/dev/zip
docker rm -f novo
docker build -t teste .
docker run --rm --name novo -t teste bash
docker logs -f novo



cd ~/dev/zip
git pull
docker rm -f novo
docker build -t teste .
docker run -d --rm --name novo -t teste 
docker logs -f novo
