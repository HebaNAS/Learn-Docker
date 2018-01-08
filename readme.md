# Learn Docker the Hard Way
-----------------------------

## Pre-requisite for this workshop

An IBM Cloud account - A lite account, which is a free of charge account that doesn’t expire, can be created through going to [IBM Cloud](https://ibm.biz/BdjNyT).


## Setting up the environment

**1. Installing Docker**

Docker must be installed on your system to be able to follow along with the hands-on sessions of the meetup. Please follow these steps for your operating system.


&nbsp;&nbsp;&nbsp;&nbsp;**Windows 10**:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- [Download the installer](https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Follow the wizard's instructions

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![Wizard](https://docs.docker.com/docker-for-windows/images/installer-finishes.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Start Docker

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![Start Docker](https://docs.docker.com/docker-for-windows/images/docker-app-search.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If installation was successful and Docker is running you will see the docker icon in the taskbar.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![Taskbar](https://docs.docker.com/docker-for-windows/images/whale-taskbar-circle.png)




&nbsp;&nbsp;&nbsp;&nbsp;**Windows < 10**:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- [Installer Docker Toolbox](https://download.docker.com/win/stable/DockerToolbox.exe)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Follow the wizard's instructions

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![Wizard2](https://docs.docker.com/toolbox/images/installer_open.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Find your Docker Toolbox installation in your Start Menu or on your Desktop

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![Toolbox](https://docs.docker.com/toolbox/images/icon-set.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Click the Docker Quickstart icon

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If installation was successful you will see a terminal window opened. It has a specific bash environment set up for Docker.

To check if Docker is running write the following command `docker -v`

If docker is working correctly you'll see the following output

~~~~
Docker version 17.09.1-ce, build 19e2cf6
~~~~

 
### References
- [Docker For Windows Documentation](https://docs.docker.com/docker-for-windows/install/#start-docker-for-windows)
