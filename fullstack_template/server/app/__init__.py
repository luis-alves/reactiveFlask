from flask import Flask
# , render_template, request
# import random
# import json
from pymongo import MongoClient


# import gvariable

app = Flask(__name__, static_folder="../../static/dist",
            template_folder="../../static")

client = MongoClient("mongodb://localhost")
db = client.reactingflask



from app.controllers import default


# @app.route("/hello")
# def helloss():
#     return render_template("index.html")
#
#
# @app.route("/gethello", methods=['GET'])
# def hello():
#     return get_hello()
#
#
# @app.route("/year", methods=['POST'])
# def year():
#     year = request.json
#     # print year['year']
#     gvariable.year = year['year']
#     print gvariable.year
#     return json.dumps({'year': year})
#
#
# def get_hello():
#     random_greeting = random.randint(0, 5)
#     selected_greeting = hellos.find_one({"_id": random_greeting})
#     return json.dumps(selected_greeting)
