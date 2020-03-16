FROM node:12

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

RUN npm install -g @angular/cli

COPY . .

RUN npm install
RUN ng serve --host 0.0.0.0 --port 4200
