# webcam-client
webcam stream.io for camera client




## Raspberry Pi 3

raspi-config: https://www.raspberrypi.org/documentation/configuration/raspi-config.md
* `sudo raspi-config`
    * Expand Filesystem is for setting up SD with OS.
    * Change password raspberry
    * Enable Camera
    * Advanced Options
        * Enable SSH
            * `ifconfig` look for inet addr, ip address for ssh


wifi:
* GUI https://www.raspberrypi.org/documentation/configuration/wireless/
* CLI https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md
    * `sudo iwlist wlan0 scan`
    * ESSID:"testing". This is the name of the WiFi network.
    * `sudo nano /etc/wpa_supplicant/wpa_supplicant.conf`
    * `network={
            ssid="The_ESSID_from_earlier"
            psk="Your_wifi_password"
        }`
    * `sudo reboot`
    * `ifconfig` to check if connected.

updating raspiberry pi: `sudo apt-get update && sudo apt-get upgrade`

taking a picture: `raspistill -o cam.jpg`
https://www.raspberrypi.org/documentation/usage/camera/raspicam/raspistill.md

taking video: `raspivid -o vid.h264`
https://www.raspberrypi.org/documentation/usage/camera/raspicam/raspivid.md

    NPM: raspivid https://www.npmjs.com/package/raspivid

updating Node version manage (NVM):
https://www.losant.com/blog/how-to-install-nodejs-on-raspberry-pi

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
nvm install v5.7.0
node -v

UPDATING NODE VERSION
You can update the node version at any time by running the nvm install and symlink commands again for the new version:

$ nvm install vX.X.X
$ nvm alias default vX.X.X
$ sudo rm /usr/bin/node
$ sudo rm /usr/bin/npm
$ sudo ln -s /home/pi/.nvm/versions/node/vX.X.X/bin/node /usr/bin/node
$ sudo ln -s /home/pi/.nvm/versions/node/vX.X.X/bin/npm /usr/bin/npm
