sudo apt update && sudo apt upgrade -y && sudo apt install git -y && sudo apt install docker.io -y &&sudo curl -L "https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && sudo chmod +x /usr/local/bin/docker-compose && docker-compose --version && git config --global user.email "hmneton@gmail.com" && git config --global user.name "Honório"



sudo apt install build-essential default-jdk libssl-dev exuberant-ctags ncurses-term ack-grep silversearcher-ag fontconfig imagemagick libmagickwand-dev software-properties-common git vim-gtk3 curl -y


. $HOME/.asdf/asdf.sh