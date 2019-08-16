FROM openjdk
COPY ./demo.jar /usr/app/demo.jar
WORKDIR /usr/app/
EXPOSE 8080
CMD java -jar demo.jar