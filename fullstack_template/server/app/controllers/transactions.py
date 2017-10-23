from flask import request
from app import app
from pymongo import MongoClient
from bson.json_util import dumps
from bson.objectid import ObjectId


@app.route('/transactions')
def transactions():
    client = MongoClient("mongodb://localhost")
    db = client.reactingflask
    entries = db.entries

    all_lines = list(entries.find())

    return dumps(all_lines)


@app.route('/reconcileflag', methods=['POST'])
def reconcileflag():
    client = MongoClient("mongodb://localhost")
    db = client.reactingflask
    entries = db.entries

    data = request.get_json()

    reconcile = entries.find_one({"_id": ObjectId(data['elementsId'])})

    if reconcile['reconcile'] == "unchecked":
        entries.find_one_and_update(
            {"_id": ObjectId(data['elementsId'])},
            {"$set": {"reconcile": "checked"}},
        )
    else:
        entries.find_one_and_update(
            {"_id": ObjectId(data['elementsId'])},
            {"$set": {"reconcile": "unchecked"}},
        )

    reconcile = entries.find_one({"_id": ObjectId(data['elementsId'])})

    return dumps({'reconcile': reconcile['reconcile'],
                  'id': data['elementsId']})
