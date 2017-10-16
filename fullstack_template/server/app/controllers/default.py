from app import app
from flask import render_template
from pymongo import MongoClient
import json
from bson.json_util import dumps


@app.route("/")
def index():
    return render_template('index.html')


@app.route("/account")
def accounts():
    client = MongoClient("mongodb://localhost")
    db = client.reactingflask
    entries = db.entries

    all_lines = entries.find()
    #
    # entries.drop()
    #
    # all_entries = [{"id": 0,
    #                 "flag": "gey",
    #                 "account": "Bankinter",
    #                 "date": "03/10/2017",
    #                 "payee": "Omatapalo",
    #                 "category": "Inflow: Salary",
    #                 "Memo": "",
    #                 "outflow": "",
    #                 "inflow": "10000.00",
    #                 "reconcile": "true"},
    #                {"id": 1,
    #                 "flag": "gey",
    #                 "account": "Bankinter",
    #                 "date": "04/10/2017",
    #                 "payee": "Meo",
    #                 "category": "Immediate Obligations: Cable TV",
    #                 "Memo": "",
    #                 "outflow": "50.00",
    #                 "inflow": "",
    #                 "reconcile": "false"},
    #                {"id": 2,
    #                 "flag": "gey",
    #                 "account": "Bankinter",
    #                 "date": "05/10/2017",
    #                 "payee": "EDP",
    #                 "category": "Immediate Obligations: Electric",
    #                 "Memo": "",
    #                 "outflow": "35.00",
    #                 "inflow": "",
    #                 "reconcile": "true"},
    #                {"id": 3,
    #                 "flag": "gey",
    #                 "account": "Bankinter",
    #                 "date": "06/10/2017",
    #                 "payee": "Meranto",
    #                 "category": "Immediate Obligations: Groceries",
    #                 "Memo": "",
    #                 "outflow": "125.00",
    #                 "inflow": "",
    #                 "reconcile": "true"},
    #                {"id": 4,
    #                 "flag": "gey",
    #                 "account": "Bankinter",
    #                 "date": "07/10/2017",
    #                 "payee": "Breska",
    #                 "category": "True Expenses: Clothing",
    #                 "Memo": "",
    #                 "outflow": "70.00",
    #                 "inflow": "",
    #                 "reconcile": "true"}]
    #
    # try:
    #     entries.insert_many(all_entries)
    # except Exception as e:
    #     print "Unexpected error: ", type(e), e
    # print json.dumps(all_lines)
    return dumps(all_lines)
