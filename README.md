# A Mono repo multiple apps and libs docker-compose example

This repository contains a Mono repo with multiple apps and libs.
This repository is for educational purposes only.

## Pros:

1. Utilizing yarn workspace to execute commands over multiple apps and libs.
2. Development environment is easy to use with docker-compose

## Cons:

1. When building the dockerfile we run build in all of the packages under the workspace (Can be optimized with script)
2. The docker image will contain the entire workspace (Can be optimized with multisteps)
3. One Dockerfile (Less flexability if you want to customize the image for specific services, you can but it wouldnt be aligned to the methodology of the rest of the services in the compose file)
