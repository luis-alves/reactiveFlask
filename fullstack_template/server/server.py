from flask import Flask, render_template
import random
import json
import pymongo

app = Flask(__name__, static_folder="../static/dist",
            template_folder="../static")


client = pymongo.MongoClient("mongodb://localhost")

db = client.reactingflask

hellos = db.hellos

hellos.drop()

greetings = [{"_id": 0, "greet": "Ciao"}, {"_id": 1, "greet": "Hei"},
             {"_id": 2, "greet": "Salut"}, {"_id": 3, "greet": "Hola"},
             {"_id": 4, "greet": "Hallo"}, {"_id": 5, "greet": "Hej"}]

try:
    hellos.insert_many(greetings)
except Exception as e:
    print "Unexpected error: ", type(e), e


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/hello", methods=['GET'])
def hello():
    return get_hello()


def get_hello():
    random_greeting = random.randint(0, 5)
    selected_greeting = hellos.find_one({"_id": random_greeting})
    return json.dumps(selected_greeting)


if __name__ == "__main__":
    app.run(debug=True)
