 DOCKER_IMAGE:=serve
 build:
	docker build --tag ${DOCKER_IMAGE} .
 run:
	docker run --rm -it --publish 3000:3000 ${DOCKER_IMAGE}