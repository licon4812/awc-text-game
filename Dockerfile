FROM ubuntu:latest
USER root
COPY . .
RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_11.x  | bash -
RUN apt-get -y install nodejs
WORKDIR /etc/systemd/system
RUN curl -O https://raw.githubusercontent.com/paradoxxxzero/butterfly/master/butterfly.service
RUN curl -O https://raw.githubusercontent.com/paradoxxxzero/butterfly/master/butterfly.socket
RUN systemctl enable butterfly.socket
RUN systemctl start butterfly.socket
WORKDIR /game
RUN npm install
RUN npm run start 
CMD [ "./script.sh"  ]