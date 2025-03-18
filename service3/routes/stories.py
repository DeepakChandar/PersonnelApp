import sys
from flask import Blueprint, jsonify
from database import get_db

stories_bp = Blueprint('stories', __name__)

@stories_bp.route('/', methods=['GET'])
def get_all_stories():
    db = get_db()
    print('test2')
    print(db)
    stories = list(db.stories.find({}, {'_id': 0}))
    return jsonify(stories)

