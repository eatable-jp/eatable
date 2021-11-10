# Welcome to Eatable

## Scripts

## Docker

### Install Docker

[Docker](https://docs.docker.com/engine/install/)

### Build Docker Image

`docker build -t <tag> .`

Builds the docker image with a tag.
Tag example: `eatable:0.1.0-dev`   [name/version-env]

### Run Docker Image

`docker run --rm -it --name web -p 8080:8080 -v $(pwd):/app <tag>`
Runs the docker image with a tag.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Deployment

Deployment
