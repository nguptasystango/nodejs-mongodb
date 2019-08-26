#Postgres intehration using sequelizer

#Reference:
-> https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize
-> https://sequelize.org/master/

#Run command:
-> npm install --save sequelize

#Create folder 
Folder structure 
Created folder server that includes all folders model, migrations,seeders and config file.
Folder structure to manage sequalizer is as follow

-server
 -config 
  - config.json (database credentials )
- migrations
 - user-migration.js (example)
-models
 - index.js (database connectivity) 
 - User.js (example)

#Migration
-> sequelize model:create --name Todo --attributes title:string

#Migrate migration and create table
-> sequelize db:migrate

#Pagination
sequelize-paginate
