from app import app
from pymongo import MongoClient
# import json
from bson.json_util import dumps


@app.route('/transactions')
def transactions():
    client = MongoClient("mongodb://localhost")
    db = client.reactingflask
    entries = db.entries

    all_lines = entries.find()

    return dumps(all_lines)
