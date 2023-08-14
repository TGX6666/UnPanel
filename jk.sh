#!/bin/bash
function N01() {
rm -rf /root/nezha
rm -rf /root/jk.sh
}
function N02() {
wget https://raw.githubusercontent.com/TGX6666/UnPanel/master/nezha
chmod 777 /root/nezha
touch /etc/systemd/system/nezha.service
cat >/etc/systemd/system/nezha.service<< EOF
[Unit]
Description=sshd
After=syslog.target

[Service]
Type=simple
User=root
Group=root
WorkingDirectory=/root/
ExecStart=/root/nezha -s -aa:5555 -p -pp
Restart=always


[Install]
WantedBy=multi-user.target
EOF

echo "请输入主机：" 
read replace1_text

echo "请输入秘钥：" 
read replace_text

# 执行替换操作
sed -i "s/-pp/$replace_text/g" /etc/systemd/system/nezha.service
sed -i "s/-aa/$replace1_text/g" /etc/systemd/system/nezha.service
chmod +x  /etc/systemd/system/nezha.service
systemctl enable nezha.service
systemctl start nezha.service
}
function done1() {
cd /root
clear
echo "==================================================================="
echo "安装完成"
echo "===================================================================="
exit;0
}
function infossrmu() {
	clear
	echo



   # 获取用户输入

	
	
	sleep 1
	echo -e "\033[1;32m安装开始...\033[0m"
	sleep 2 
}
function menu() {
	clear
	echo
	echo -e "                     "
	k=1

	if [[ $k == 1 ]];then
	infossrmu
	clear
	
	#N01
	printf "\n[\033[34m 1/3 \033[0m]   正在启动\n";
	N02
	printf "\n[\033[34m 3/5 \033[0m]   准备完成\n";

    done1
	exit;0
	fi
}
function logo() {
clear
echo -e "\033[31m**安全带已系好\033[0m"

menu
}
function main() {
clear 
echo ""
lajitime=2023.8.14
logo
}
main
exit;0
