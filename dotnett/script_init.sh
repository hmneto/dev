git clone https://github.com/hmneto/dev
cd ~/dev/dotnett
docker rm -f novo
docker build -t teste .
docker run -it --rm --name novo -t teste 
docker logs -f novo
