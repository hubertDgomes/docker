To create the compose for the docker for  a mongoDB server
1. Create a yaml file and add:
 services:
  mongo:
    image: mongo
    ports:
      - "27027:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: hubert
      MONGO_INITDB_ROOT_PASSWORD: hubert

  mongo-express:
    image: mongo-express
    ports:
      - "8081:8081"
    environment:
      ME_CONFIG_MONGODB_URL: "mongodb://hubert:hubert@mongo:27017/?authSource=admin"


3. In the CLI in the terminal "docker compose -f "file.yaml" up -d"

At that time through the code base you can create the images and the container 
Also by default compose create a Network so we do not have to create the network specifically
