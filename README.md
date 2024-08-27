###Github repo
https://github.com/LinkedInLearning/react-creating-and-hosting-a-full-stack-site-3209140

###Express Commands
- npm install express
- node src/server.js

###Postman
https://web.postman.co/home

###Nodemon
- npm install nodemon --save-dev
- npx nodemon src/server.js

###MongoDB
- https://www.youtube.com/watch?v=4nKWREmCvsE
- Atlas - https://www.youtube.com/watch?v=jXgJyuBeb_o
- https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows-unattended/
- https://www.mongodb.com/try/download/community

1 - Install MongoDB Community Server
2 - Create the default database directory where the MongoDB files will be 'mongo-db-data' inside blog-app-backend
3 - Start the Mongo Demon - 'mongod --dbpath ./mongo-db-data/' - Leave it running and open another terminal
  - Once MongoDB is running you should be able to connect to it via Mongo Shell
4 - Create the Mongo Database (Mongo Shell) -> 'use react-blog-db'
5 - Insert the data you already have in the db you just created
  - (Mongo Shell) -> db.articles.insertMany( {copyThe JSON list} )
  - To see the inserted data (Mongo Shell) -> 'db.articles.find( {} )'

4 - Install MongoDB Node.js Driver - npm install mongodb