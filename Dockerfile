FROM node:latest
USER root
COPY . . 
EXPOSE 3000
EXPOSE 57575
VOLUME [ "/data" ]
SHELL ["/bin/bash", "-c"]
RUN rm /bin/sh && ln -s /bin/bash /bin/sh
RUN apt-get update
RUN wget https://bootstrap.pypa.io/get-pip.py
RUN python3 ./get-pip.py
RUN python3 -V
RUN pip install butterfly
RUN pip install butterfly[themes]  # If you want to use themes
RUN pip install butterfly[systemd]  # If you want to use systemd
WORKDIR /game
CMD [ "../script.sh"  ]
