# Overview

As a software engineer I'm trying to push my self and learn more about different tools and technologies that I can use to be more efficient, solve different problems, and provide great user experiences.

This mapping application loads data on local restaurants that can be used to find something good to eath in the Salina Utah area. It is a website using google maps with some filters that allow you show filter the result set that you are looking for. The information was pulled from google maps and added to a postgres database.

I wrote this software as a differnt way for my wife and I to decide on a restaurant that we would like to eat at. 

[Software Demo Video](https://www.youtube.com/watch?v=cHg9q2zMjl0)

# Development Environment

I chose to use Next.js as the web framework I have been using it a bit lately and wanted to see how it could work with google maps. I also wanted to push my self in using react in different ways. For the database I used postgres SQL with prisma as the ORM so that I could easily create my data models and push to the database with typescript types being generated as well.

I chose to use typescript with nextjs as I like the type system that it adds to javascript. I also chose to use shadcn for the basic components so that I didn't have to spend much time styling the components. Finally, I used tailwind js as well for styling. 

# Useful Websites

* [Prisma](https://www.prisma.io/docs/orm)
* [NextJs](https://nextjs.org/docs/app/getting-started/installation)
* [React Google Maps](https://visgl.github.io/react-google-maps/)

# Future Work

* Improved color schema
* Deploy on the web
* Implement Clustering
* Add more restaurants
* Include ratings