

sudo apt install gedit -y 
sudo gedit /etc/apt/sources.list 
sudo apt install git -y
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb 
sudo dpkg -i google-chrome-stable_current_amd64.deb 
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg &&
sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/ &&
sudo sh -c 'echo "deb [arch=amd64 signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list' 
sudo apt-get install apt-transport-https
sudo apt-get update
sudo apt-get install code
echo "deb [arch=amd64] https://repo.skype.com/deb stable main" | sudo tee /etc/apt/sources.list.d/skype-stable.list
wget https://repo.skype.com/data/SKYPE-GPG-KEY
sudo apt-key add SKYPE-GPG-KEY
sudo apt install apt-transport-https
sudo apt update
sudo apt install skypeforlinux
sudo add-apt-repository ppa:nemh/systemback
sudo apt-get update
sudo apt-get install systemback
sudo apt-get update
sudo apt-get upgrade -y
sudo apt install docker.io -y
sudo curl -L "https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
git clone https://github.com/asdf-vm/asdf.git ~/.asdf
cd ~/.asdf
git checkout "$(git describe --abbrev=0 --tags)"
. $HOME/.asdf/asdf.sh
asdf plugin-add nodejs https://github.com/asdf-vm/asdf-nodejs.git
bash -c '${ASDF_DATA_DIR:=$HOME/.asdf}/plugins/nodejs/bin/import-release-team-keyring'
asdf plugin list 
asdf list all nodejs
asdf install nodejs 14.11.0
asdf global nodejs 14.11.0
sudo apt-get update
sudo apt-get upgrade -y




asdf uninstall nodejs 14.11.0







