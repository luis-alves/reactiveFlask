from flask import request
from app import app
from pymongo import MongoClient
from bson.json_util import dumps
from bson.objectid import ObjectId
import datetime


@app.route('/transactions')
def transactions():
    client = MongoClient("mongodb://localhost")
    db = client.reactingflask
    entries = db.entries

    all_lines = list(entries.find())

    for date in all_lines:
        # print date['date']
        # print 'new'
        new_date = date['date'].strftime('%d-%m-%Y')
        date['date'] = new_date

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


@app.route('/bookmark', methods=['POST'])
def bookmark():
    client = MongoClient("mongodb://localhost")
    db = client.reactingflask
    entries = db.entries

    data = request.get_json()

    bookmark = entries.find_one({"_id": ObjectId(data['id'])})

    if bookmark['bookmark'] != data['color']:
        entries.find_one_and_update(
            {"_id": ObjectId(data['id'])},
            {"$set": {"bookmark": data['color']}},
        )
    else:
        entries.find_one_and_update(
            {"_id": ObjectId(data['id'])},
            {"$set": {"bookmark": 'grey'}},
        )

    bookmark = entries.find_one({"_id": ObjectId(data['id'])})

    return dumps({'bookmark': bookmark['bookmark'],
                  'id': data['id']})


@app.route('/input', methods=['POST'])
def input():
    client = MongoClient("mongodb://localhost")
    db = client.reactingflask
    entries = db.entries

    data = request.get_json()

    date = datetime.datetime.strptime(data['date'], "%d-%m-%Y")

    try:
        entries.find_one_and_update(
            {"_id": ObjectId(data['id'])},
            {"$set": {
                "category": data['category'],
                "payee": data['payee'],
                "memo": data['memo'],
                "date": date,
                "outflow": data['outflow'],
                "inflow": data['inflow'],
                }}
        )
    except Exception as e:
        print "Unexpected error: ", type(e), e

    row = entries.find_one({"_id": ObjectId(data['id'])})

    return dumps({
                  'row': row,
                  'id': data['id']
                  })


@app.route('/checkbox', methods=['POST'])
def checkbox():
    client = MongoClient("mongodb://localhost")
    db = client.reactingflask
    entries = db.entries

    data = request.get_json()

    checkbox = entries.find_one({"_id": ObjectId(data['id'])})

    if checkbox['checkbox'] == 'unchecked':
        entries.find_one_and_update(
            {"_id": ObjectId(data['id'])},
            {"$set": {"checkbox": 'checked'}},
        )
    else:
        entries.find_one_and_update(
            {"_id": ObjectId(data['id'])},
            {"$set": {"checkbox": 'unchecked'}},
        )

    checkbox = entries.find_one({"_id": ObjectId(data['id'])})

    return dumps({'checkbox': checkbox['checkbox'],
                  'id': data['id']})


@app.route('/remove_ticks', methods=['POST'])
def remove_tick():
    client = MongoClient("mongodb://localhost")
    db = client.reactingflask
    entries = db.entries
    values = entries.find({})
    data = request.get_json()

    checkbox = entries.find_one({"_id": ObjectId(data['id'])})
    for value in values:
        if str(value['_id']) != data['id'] and \
                value['checkbox'] == 'checked':
            entries.find_one_and_update(
                {"_id": value['_id']},
                {"$set": {"checkbox": 'unchecked'}}
            )

    checkbox = entries.find_one({"_id": ObjectId(data['id'])})

    return dumps({'checkbox': checkbox['checkbox'],
                  'id': data['id']})


@app.route('/toggle_all_ticks', methods=['POST'])
def toggle_all_ticks():
    client = MongoClient("mongodb://localhost")
    db = client.reactingflask
    entries = db.entries
    values = entries.find({})

    for value in values:
        if value['checkbox'] == 'checked':
            entries.find_one_and_update(
                {"_id": value['_id']},
                {"$set": {"checkbox": 'unchecked'}}
            )
        else:
            print(value['_id'])
            entries.find_one_and_update(
                {"_id": value['_id']},
                {"$set": {"checkbox": 'checked'}}
            )

    return dumps({'job': 'done'})
