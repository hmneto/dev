sudo apt update && sudo apt upgrade -y && sudo apt install git -y && sudo apt install docker.io -y &&sudo curl -L "https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && sudo chmod +x /usr/local/bin/docker-compose && docker-compose --version && git config --global user.email "hmneton@gmail.com" && git config --global user.name "Honório"

git config --global user.email "hmneton@gmail.com" && git config --global user.name "Honório"

sudo apt install virtualbox

sudo apt install build-essential default-jdk libssl-dev exuberant-ctags ncurses-term ack-grep silversearcher-ag fontconfig imagemagick libmagickwand-dev software-properties-common git vim-gtk3 curl -y

sudo apt-get update && sudo apt-get upgrade && sudo apt-get install openssh-client

sudo apt install gedit -y && sudo gedit /etc/apt/sources.list && sudo apt install docker.io -y &&  sudo curl -L "https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose &&  sudo chmod +x /usr/local/bin/docker-compose &&  sudo apt install git -y && wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && sudo dpkg -i google-chrome-stable_current_amd64.deb && sudo apt-add-repository ppa:nemh/systemback && sudo apt-get update && sudo apt-get install systemback -y

sudo apt-get update && sudo apt-get upgrade -y && sudo apt install docker.io -y && sudo curl -L "https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && sudo chmod +x /usr/local/bin/docker-compose

echo "deb [arch=amd64] https://repo.skype.com/deb stable main" | sudo tee /etc/apt/sources.list.d/skype-stable.list && wget https://repo.skype.com/data/SKYPE-GPG-KEY && sudo apt-key add SKYPE-GPG-KEY && sudo apt install apt-transport-https && sudo apt update && sudo apt install skypeforlinux


















. $HOME/.asdf/asdf.sh
sudo chmod +x /usr/local/bin/docker-compose
sudo chown $USER /var/run/docker.sock
sudo service docker stop
sudo mv /var/lib/docker /var/lib/docker.bak
sudo service docker start

sudo apt-get install ubuntu-restricted-extras

cat /etc/apt/sources.list

https://github.com/artf/grapesjs.git
