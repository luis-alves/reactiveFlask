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
    # print dumps(all_lines)

    result = [{"category": "Inflow: Salary",
               "account": "Bankinter",
               "reconcile": "true",
               "Memo": "",
               "payee": "Omatapalo",
               "flag": "grey",
               "outflow": "0",
               "date": "03/10/2017",
               "_id": {"$oid": "59de5112a4e4740ed8b04fdc"},
               "id": 0,
               "inflow": "2000.30"}]

    return dumps(all_lines)
