from app import app
from flask import render_template
from pymongo import MongoClient
import json
from bson.json_util import dumps


@app.route('/cleared_balance')
def cleared_account():
    client = MongoClient("mongodb://localhost")
    db = client.reactingflask
    entries = db.entries

    all_lines = entries.find()

    result = {'cleared_value': 0}
    partial = 0
    for item in all_lines:
        if item['reconcile'] == 'true':
            partial = float(item['inflow']) - float(item['outflow'])
            result['cleared_value'] = result['cleared_value'] + partial
    return dumps("{:.2f}".format(result['cleared_value']))


@app.route('/uncleared_balance')
def uncleared_account():
    client = MongoClient("mongodb://localhost")
    db = client.reactingflask
    entries = db.entries

    all_lines = entries.find()

    result = {'uncleared_value': 0}
    for item in all_lines:
        if item['reconcile'] == 'false':
            partial = float(item['inflow']) - float(item['outflow'])
            result['uncleared_value'] = result['uncleared_value'] + partial
    return dumps("{:.2f}".format(result['uncleared_value']))


@app.route('/working_balance')
def working_account():
    client = MongoClient("mongodb://localhost")
    db = client.reactingflask
    entries = db.entries

    all_lines = entries.find()

    result = {'working_value': 0}
    for item in all_lines:
        partial = float(item['inflow']) - float(item['outflow'])
        result['working_value'] = result['working_value'] + partial
    return dumps("{:.2f}".format(result['working_value']))