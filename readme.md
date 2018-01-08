# Learn Docker the Hard Way


## Pre-requisite for this workshop

An IBM Cloud account - A lite account, which is a free of charge account that doesn’t expire, can be created through going to [IBM Cloud](https://ibm.biz/BdjNyT).


## Setting up the environment

**Installing Docker**

Docker must be installed on your system to be able to follow along with the hands-on sessions of the meetup. Please follow these steps for your operating system.


&nbsp;&nbsp;&nbsp;&nbsp;* **Windows 10**:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- [Download the installer](https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Follow the wizard's instructions

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![Wizard](https://docs.docker.com/docker-for-windows/images/installer-finishes.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Start Docker

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![Start Docker](https://docs.docker.com/docker-for-windows/images/docker-app-search.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If installation was successful and Docker is running you will see the docker icon in the taskbar.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![Taskbar](https://docs.docker.com/docker-for-windows/images/whale-taskbar-circle.png)

---

&nbsp;&nbsp;&nbsp;&nbsp;* **Windows < 10**:

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

---

&nbsp;&nbsp;&nbsp;&nbsp;* **MacOs**:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- [Download the Installer](https://download.docker.com/mac/stable/Docker.dmg)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Follow the wizard's instructions and drag the Docker app in to your applications folder

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![Wizard3](https://docs.docker.com/docker-for-mac/images/docker-app-drag.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Find the Docker app in your Applications folder

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![Applications](https://docs.docker.com/docker-for-mac/images/docker-app-in-apps.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Click the Docker icon

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If installation was successful you will see a Docker icon in the toolbar.

![Toolbar](https://docs.docker.com/docker-for-mac/images/whale-in-menu-bar.png)


-------------------

## Explaining the concept

**What problem does docker solve?**

This is the fundamental question of everyone who wants to start out with Docker. Let’s answer the question in the clearest and simplest way possible, with everyday words, not Docker terminology.

Docker solves the problem of having identical environments across various stages of development and having isolated environments for your individual applications.

The problem itself is as old as software development. Environment setup and management is a tedious task in every project.

It used to be common practice to run your production applications on dedicated machines, while development or test environments were clattered with a lot of different applications to save hardware cost. In these cases your development and test servers were configured much differently than your production server.

Infrastructure teams used to create different environment scripts for different stages, like development, test, staging and production. These environments were not identical, just mostly similar.

On top of all this, we used to do our local development and unit testing on Windows machines, while all other stages were run on Unix systems.

Working like this was not impossible, but it was a costly, time consuming effort to manage these environments with a lot of inherent risk that caused a lot of quality issues in all stages.

Docker provides a solution to this problem with containerization.

**What is containerization?**

Containerization means, that your application runs in an isolated container, that is an explicitly defined, reproducable and portable environment. The analogy is taken from freight transport where you ship your goods in containers.

A container of an app is the app’s operating environment in our computing scenario. With Docker you ship the operating environment along with your application.

Containerization is not a new phenomenon, Linux Containers have been around for a while already, added to the Linux kernel in 2008. You can google LXC to learn more about the topic.

The key here is resource sharing. Docker started out creating specialized Linux containers. The idea is the same. You don’t need a separate, full blown physical or virtual machine to give isolated environments to your applications.

You can put your applications into containers that share most resources amongst each other. Containers are only different in the necessary minimum that is required to behave like an isolated environment.

The strength of Docker is that they have gone through the tedious task of stripping of all common stuff from containers and leave the bare minimum inside for separation. This way they created a flexibility and portability we’ve not seen before in environment management.

-------------------

## How to create an environment for Docker to run

We need to know some terminology before we explain how a container runs:

* _Dockerfile_: This is a text file that has the steps required to build an image. This is akin to the bash script that you would use to install software or setup environment variables.
A simple Dockerfile will look like this:

~~~
FROM php:7.0-apache
COPY config/php.ini /usr/local/etc/php/
ENV APP_ENV dev
~~~


* _Image_: These are a snapshot of the file system, however they are always based on a another image. The image does not contain the kernel, so it's not uncommon for images to be just a few megabytes. Images are cached which makes rebuilding containers very, very fast.


* _Container_: This is an instance of an image. If we run an image, we will get a container with the isonlated environment we specified running and ready for development.


-------------------


## Code Lab 1

First we'll get our hands dirty with some very simple commands to practice how to use docker locally in the commandline.

Type the following in your terminal:

```
docker run hello-world:latest
```

This command will do many things:
1. It will ask Docker to run an image named "Hello World"
2. Docker will look for an image with that name on your local machine, if it finds one, it will run it.
3. If Docker couldn't find such an image locally, it will search for it on _Docker Hub_. Docker Hub simple put is a registry where you can find images for different stacks and environments you may want to use.
4. After Docker pulls the image from _Docker Hub_, it will create a container from that image and run it.

You should see the following output:

~~~
$ docker run hello-world
 Unable to find image 'hello-world:latest' locally
 Pulling repository hello-world
 91c95931e552: Download complete
 a8219747be10: Download complete
 Status: Downloaded newer image for hello-world:latest
 Hello from Docker.
 This message shows that your installation appears to be working correctly.

 To generate this message, Docker took the following steps:
  1. The Docker Engine CLI client contacted the Docker Engine daemon.
  2. The Docker Engine daemon pulled the "hello-world" image from the Docker Hub.
     (Assuming it was not already locally available.)
  3. The Docker Engine daemon created a new container from that image which runs the
     executable that produces the output you are currently reading.
  4. The Docker Engine daemon streamed that output to the Docker Engine CLI client, which sent it
     to your terminal.

 To try something more ambitious, you can run an Ubuntu container with:
  $ docker run -it ubuntu bash

 For more examples and ideas, visit:
  https://docs.docker.com/userguide/
~~~

**Breakdown for some of the most popular docker commands**

- `docker ps`: Lists all the running containers on your local machine.
- `docker rm [container-name/s]`: Remove one or more containers from your local machine.
- `docker run [container-name[:version-number]]`: Run a new container from an image.
- `docker run -p [container-port-number:host-port-number] [container-name]:[container-tag/version-number]`: Runs a docker container with specifying/publishing the container’s port(s) to the host.
- `docker container exec [OPTIONS] CONTAINER COMMAND [ARG...]`: Another way of running a docker container while specifying different options.
- `docker stop [container-name]`: Stop one or more running containers. Thsi step must be done before removing a container using `docker rm`.
- `docker images`: Lists all images on your local machine.
- `docker rmi [image-name/s]`: Remove one or more on your local machine.
- `docker build -t [image-name:tag] .`: Build an image from a _Dockerfile_, we add a tag for each image after the colon to identify different commits on the same image. **_Please Note_** the trailing dot at the end of the command as it has to be there. It basically tells docker where to find the _Dockerfile_ with the desired image specs.
- `docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]`: Commit changes made in a container to an image to use later with the same additions to the environment made in that container instance.
- `docker container exec -it [container name] /bin/bash`: Attach a shell to the containers. This gives us the ability to look at what's happening inside the container just like we use the terminal on our local machines. This also gives us the ability to add and install packages to our container that weren't specified in the image. We can save the additions we made in our container by use `docker commit` as shown above.

For more Docker commands check the [Docker Documentation](https://docs.docker.com/engine/reference/commandline/docker/)

-------------------


## Code Lab 2: Running Private Ethereum Blockchain inside a Docker Container and push it to IBM Cloud.

- Go to `CodeLab-2` folder in this repo.
- Copy the source code for the three files in your local editor.
- Run the following command in your terminal `docker build -t ethereum .` This will download all the assets we nedd (base images we are building on" and builds a new image for our ethereum container. 
![Local1](https://github.com/HebaNAS/Learn-Docker/blob/master/InstructionVideos/Local1.gif?raw=true)

- We will run the container locally first to check that it is working properly. Use the following command to run the container `docker run ethereum`
![Local2](https://github.com/HebaNAS/Learn-Docker/blob/master/InstructionVideos/Local2.gif?raw=true)

**Pushing our image to IBM Cloud**
- Go to [IBM Cloud Clusters](https://console.bluemix.net/containers-kubernetes/home/clusters)
![Step 1](https://github.com/HebaNAS/Learn-Docker/blob/master/InstructionVideos/Step1.gif?raw=true)

- Create a new Cluster.
![Step 2](https://github.com/HebaNAS/Learn-Docker/blob/master/InstructionVideos/Step2.gif?raw=true)

- 

-------------------
 
### References
- [Docker For Windows Documentation](https://docs.docker.com/docker-for-windows/install/#start-docker-for-windows)
- [Docker Toolbox for Windows](https://docs.docker.com/toolbox/toolbox_install_windows)
- [Docker for MacOS Documentation](https://docs.docker.com/docker-for-mac/install/#install-and-run-docker-for-mac)
- [Docker Concept Explanation](http://takacsmark.com/getting-started-with-docker-in-your-project-step-by-step-tutorial)
- [Docker Terminology](http://elliot.land/post/docker-explained-simply)
- [Docker Commands](https://docs.docker.com/engine/reference/commandline/docker/)
