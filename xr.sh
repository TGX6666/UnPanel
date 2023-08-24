#!/bin/bash
yum install unzip -y 
apt install unzip -y
cd /root
 
read -p "创建一个文件夹（随意）: " wenjianjia

mkdir $wenjianjia

cd $wenjianjia

wget https://github.com/XrayR-project/XrayR/releases/download/v0.9.0/XrayR-linux-64.zip

unzip XrayR-linux-64.zip


echo "设置面板类型" 
echo "SSpanel, V2board, NewV2board"
read  replace12_text

echo "输入你的域名即可(要输入https://)：" 
read replace11_text

echo "请输入网站密钥：" 
read replace2_text

echo "请输入节点id：" 
read replace3_text	

echo "1.V2ray  2.Shadowsocks 3.Trojan" 
read -p "请输入节点类型：: " num
if [ "$num" = "1" ]; then
    replace4_text="V2ray"
elif [ "$num" = "2" ]; then
    replace4_text="Shadowsocks"

elif [ "$num" = "3" ]; then
    replace4_text="Trojan"
else

    echo "傻逼吗！1,2,3都他妈输不来"
    exit 1
fi

echo "节点类型为: $replace4_text"


# 执行替换操作

sed -i "s/SSpanel/$replace12_text/g"  /root/$wenjianjia/config.yml

sed -i 's|http://127.0.0.1:667|'$replace11_text'|g' /root/$wenjianjia/config.yml

sed -i "s/123/$replace2_text/g"  /root/$wenjianjia/config.yml

sed -i "s/41/$replace3_text/g"  /root/$wenjianjia/config.yml

sed -i "s/V2ray/$replace4_text/g"  /root/$wenjianjia/config.yml


touch /etc/systemd/system/xr.service
cat>/etc/systemd/system/xr.service<< EOF
[Unit]
Description=xr
After=syslog.target

[Service]
Type=simple
User=root
Group=root
WorkingDirectory=/root/${wenjianjia}
ExecStart=/root/${wenjianjia}/XrayR -config /root/${wenjianjia}/config.yml
Restart=always

[Install]
WantedBy=multi-user.target
EOF
chmod +x  /etc/systemd/system/xr.service

systemctl enable xr.service

systemctl start xr.service

rm -rf /root/$wenjianjia/XrayR-linux-64.zip 
echo "如果未成功，检查/root/config.yml配置文件" 
echo "每一次修改配置文件，都输入xr回车即可" 