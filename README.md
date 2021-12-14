# Eatable

SAVE MONEY AND THE EARTH WITH EATABLE.\
Eatable is an app for selling food that is close to its expiration date for the discounted price.

## Introduction

This app was created during the team's time as students at [Code Chrysalis](https://www.codechrysalis.io/).

Did you know there is about 6 million tons of food waste every year in Japan?\
This is quite a shocking number and after we learned this we immediately started brainstorming about how we could have an impact on this situation and that’s where the idea of Eatable came from.

## Main features

Here is a brief description of the core features of Eatable.

### Features for sellers

1. **Full CRUD operation on listed items**
   A seller can list a new item on Eatable. They can also update information of each item and delete items after listing.
2. **Activity stats**
   A seller can check out their activity stats on the profile page. We provide the stats for the amount of food and money a seller saved through Eatable.

### Features for buyers

1. **Variety of filters**
   A buyer can filter listed items with different criteria such as food type, expiration date and location.
2. **Online payment with stripe**
   A buyer can make a payment through Eatable so that they can simply visit the shop and pick up the purchased item

## Beginner's guide on Eatable

Let us walk you through our app!\
First thing you want to do is Sign up/Log in.\
<img src="https://github.com/eatable-jp/eatable/blob/main/image-readme/img-01.png" width="750" height="371">

If you register as a seller, you will see all the items you listed on the seller's home page. If you a buyer, you will see all available items on Eatable.\
**Seller's home page**
<img src="https://github.com/eatable-jp/eatable/blob/main/image-readme/img-02.png" width="750" height="601">
**Buyer's home page**
<img src="https://github.com/eatable-jp/eatable/blob/main/image-readme/img-04.png" width="750" height="584">

We provide a profile page for seller and buyer. Here a user can check out their profile, stats and transaction history.
<img src="https://github.com/eatable-jp/eatable/blob/main/image-readme/img-03.png" width="750" height="381">

## Scripts

## Docker

### Install Docker

[Docker](https://docs.docker.com/engine/install/)

### Build Docker Image

`docker build -t <tag> .`

Builds the docker image with a tag.
Tag example: `eatable:0.1.0-dev` [name/version-env]

### Run Docker Image

`docker run --rm -it --name web -p 8080:8080 -v $(pwd):/app <tag>`
Runs the docker image with a tag.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Deployment

Deployment
