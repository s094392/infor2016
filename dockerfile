#test
FROM ubuntu

MAINTAINER s049392 s094392@gmail.com

RUN apt-get update && apt-get install -y nodejs npm
COPY ./* infor2016/
RUN cd infor2016 && npm install

EXPOSE 8080

CMD ["nodejs", "infor2016/app.js"]
