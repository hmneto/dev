php composer.phar create-project --prefer-dist cakephp/app cakepro
xdg-open HeidiSQL_10.2.0.5599_Setup.exe 

sudo apt-get install wine -y && 
sudo apt-get install q4wine -y && 
wget https://www.heidisql.com/installers/HeidiSQL_10.2.0.5599_Setup.exe && 
sudo apt-get install apache2 -y && 
apache2 -v && sudo systemctl start apache2.service && 
sudo apt-get update && 
sudo apt-get install mariadb-server mariadb-client -y && 
sudo apt-get install php -y && 
php -v && 
sudo apt-get install php7.2-mysql -y && 
sudo apt-get install php7.2-intl -y && 
sudo apt-get install php7.2-sqlite -y && sudo 
apt-get install php7.2-zip -y && sudo 
apt-get install php7.2-mbstring -y && 
sudo apt-get install git -y && 
sudo apt-get install curl -y && 
sudo a2enmod rewrite && 
sudo service apache2 restart && 
cd /etc/apache2 && 
sudo gedit apache2.conf && 
sudo service apache2 restart && 
sudo chmod -R 777 /var/www/html && 
cd /var/www/html && 
curl -sS https://getcomposer.org/installer | sudo php -- && 
sudo apt install php-xml -y && 
php composer.phar require --dev phpunit/phpunit ^7.4 && 
git clone https://Hmneton@bitbucket.org/Hmneton/bahm.git && 
cd bahm && 
php composer.phar install && 
sudo mysql -u root -p 

USE mysql;SELECT USER, Host, plugin FROM mysql.user;UPDATE user SET plugin='mysql_native_password' WHERE USER='root';FLUSH PRIVILEGES;

sudo service mysql restart && sudo service apache2 restart 

a*P1c9asjyxQ@Ig%dmOr


https://linuxhint.com/install-cakephp-ubuntu/

