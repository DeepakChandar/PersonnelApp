
docker compose up -d

docker compose ps

docker ps


example 
Name                            | Default         | Description
--------------------------------|-----------------|------------
ME_CONFIG_MONGODB_AUTH_DATABASE | 'db'            | Database name
ME_CONFIG_MONGODB_AUTH_USERNAME | 'admin'         | Database username
ME_CONFIG_MONGODB_AUTH_PASSWORD | 'pass'          | Database password



mongosh --username root --password example --authenticationDatabase admin

use details

db.stories.insert({ "id": "2" , "title": 'Building Scalable Applications', "description": 'Lessons learned from building enterprise applications.' })

db.stories.insert({ "id": "2" , "title": 'Building Scalable Applications', "description": 'Lessons learned from building enterprise applications.' })

