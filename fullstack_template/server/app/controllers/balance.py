from app import app
from flask import render_template
from pymongo import MongoClient
import json
from bson.json_util import dumps


@app.route('/balance')
def balance():
    client = MongoClient("mongodb://localhost")
    db = client.reactingflask
    entries = db.entries

    all_lines = entries.find()

    result = {'cleared': 0, 'uncleared': 0, 'working': 0}
    partial = 0
    for item in all_lines:
        if item['reconcile'] == 'checked':
            partial = float(item['inflow']) - float(item['outflow'])
            result['cleared'] = result['cleared'] + partial
        else:
            partial = float(item['inflow']) - float(item['outflow'])
            result['uncleared'] = result['uncleared'] + partial

    result['working'] = result['uncleared'] + result['cleared']

    return dumps(result)
