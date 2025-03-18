import sys
from flask import Blueprint, jsonify, request
from database import get_db

readings_bp = Blueprint('readings', __name__)

# Dummy data

# Read all financial documents
@readings_bp.route('/', methods=['GET'])
def get_all_readings():
    db = get_db()
    print('test2')
    print(db)
    readings = list(db.readings.find({}, {'_id': 0}))
    return jsonify(readings)

