docker run -it -v $(pwd):/build openjdk:8u131-jdk-alpine javac /build/HelloWorld.java

docker build -t hello-world:8u131 -f Dockerfile-8u131 .

docker run -it --rm=true hello-world:8u131

docker build -t hello-world:9b170 -f Dockerfile-9b170 .

docker run -it --rm=true hello-world:9b170