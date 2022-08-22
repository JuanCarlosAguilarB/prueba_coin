
# Api for register users

API realizada en Django Rest Framework para un sistema de registro de usuarios que almacena en la base de datos tales como nombre, email y ciudad.



## API Reference

#### Get all items

```http
  http://localhost:8000/api/vi/users/
```


#### Get item

```http
  http://localhost:8000/api/vi/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch at user |




## Instalición

Install the dependencies and devDependencies and start the server.

```sh
cd prueba_coin
pyhon -m venv venv
source ./venv/bin/activate  
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```


Check the api implementation by navigating to its server address in your preferred browser.
```sh
http://localhost:8000/api/vi/users/
```
## Run test Api 

With server stoped and being in the project directory, in the terminal run the following instructions

### `python manage.py test`

## Run the React app

In the project directory, you can run:

### `npm install`


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

if you have some problems 
### `npm cache clean --force `   

and after, you could run this comand

### `npm start`


## Documentation Api 
please, for to view the documentation of api, go to the following route where you will find the documentation in swagger

```sh
http://127.0.0.1:8000/swagger/
```


## License

MIT

