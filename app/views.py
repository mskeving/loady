import json

from flask import render_template
from app import app, db
from models import Example


@app.route('/')
def index():
    return render_template('base.html')
