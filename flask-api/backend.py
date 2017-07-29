from flask import Flask, request
from flask_restful import Resource, Api
from sqlalchemy import create_engine
from json import dumps

e = create_engine('sqlite:///parks.db')

app = Flask(__name__)
api = Api(app)

class Parks(Resource):
    def get(self):
        conn = e.connect()
        query = conn.execute("SELECT ParkName, ParkLocation, Lat, Long FROM parks")
        return {'data': [dict(zip(tuple (query.keys()), i)) for i in query.cursor]}, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'}


api.add_resource(Parks, '/parks')

if __name__ == '__main__':
    app.run(host='0.0.0.0')
