git clone https://github.com/hmneto/dev
cd ~/dev/zip
docker build -t teste .
docker run -d --rm --name novo -t teste 
docker logs -f novo
