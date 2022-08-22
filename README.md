# API para sistema de PQR's

API realizada en Django Rest Framework para un sistema de PQR's que  almacena en base de datos las peticiones, quejas y reclamos en un mismo modelo en donde se almacenaran varios datos personales y de contacto del cliente que redactó el PQR. 

Dicha API cuenta con endpoints requeridos para que se haga registro del PQR, listar los PQR, borrar PQR, ver información completa del PQR.

## Instalición

Install the dependencies and devDependencies and start the server.

```sh
cd juan_carlos_prueba
pyhon -m venv venv
source ./venv/bin/activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

Verifique la implementación navegando a la dirección de su servidor en su navegador preferido.
```sh
127.0.0.1:8000
```

## License

MIT

