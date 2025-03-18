import sys
from pymongo import MongoClient
import os

def get_db():
    # MongoDB connection details from environment variables
    # Replace with your actual credentials

# MongoDB connection URI
    username = os.environ.get('DB_USER', "admin" )
    password = os.environ.get('DB_PASS', "admin_password" )
    hostname=  os.environ.get('DB_HOST', "localhost" )
    dbname = os.environ.get('DB_NAME', "details" )
    mongo_uri =  f'mongodb://{username}:{password}@{hostname}:27017/?authSource=details'

    print(mongo_uri)
    # MongoDB connection URI
    try:
        client = MongoClient(mongo_uri)
        print('test1')
        client.server_info()  # Triggers a connection attempt
        db = client[dbname]
        return db
    except Exception as e:
     print("Error:", e)
    # client = MongoClient(mongo_uri)
    # return client[db_name]
   
