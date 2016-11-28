
Instructions for setup:

1. `$ git clone https://github.com/mskeving/loady`
2. `$ cd loady/`
3. `$ pip install virtualenv` (if you don't already have it)
4. `$ virtualenv env`
5. `$ pip install -r requirements.txt`
6. `$ cd app/static/js`
7. `$ npm install`
8. `$ webpack-dev-server --inline --hot`
9. Open new terminal window
10. cd into loady/
11. `$ python dev.py`
12. open browser to http://127.0.0.1:5000/

If everything's running correctly you should see a white page that says Your new site.

To include a DB:

1. install psql
2. `$ psql`
3. `create database NAME_OF_DB`
2. grep code for "NAME_OF_DB" and change to your db name.
3. from loady/, `$ python manage.py initdb`
4. `$ alembic revision —autogenerate -m’initial revision'`
5. `$ alembic upgrade head`
