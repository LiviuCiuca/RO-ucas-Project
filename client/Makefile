 DOCKER_IMAGE:=client
 build:
	docker build --tag ${DOCKER_IMAGE} .
 run:
	docker run --rm -it --publish 5173:5173 ${DOCKER_IMAGE}