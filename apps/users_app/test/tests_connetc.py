

from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework import status
from apps.users_app.models import *

CREATE_USER_URL = 'http://localhost:8000/api/vi/users/'

def create_user(**params):
    return UserModel.objects.create(**params)

class PublicUserApiTest(TestCase):
    '''testear el API pública del usuario; cuando el usuario no está autentificado'''
    
    def setUp(self):
        self.client = APIClient()
    
    def test_crete_user_success(self):
        '''test para probar crear un usuario con un payload exitoso'''
        
        payload = { 
            'email':'test@gmail.com',
            'name':'test',
            'city':'city test'
        }
        
        res = self.client.post(CREATE_USER_URL, payload)

    def test_user_exists(self):
        '''test para validad que no se puede crear un usuario existente'''

        payload = { 
            'email':'test@gmail.com',
            'name':'test',
            'city':'city test'
        }
        
        create_user(**payload)        
        
        res = self.client.post(CREATE_USER_URL, payload)
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)

    def test_missing_password(self):
        '''email requerido'''
        payload = { 
            'email':'',
            'name':'test',
            'city':'city test'
   
        }
        
        create_user(**payload)
        
        res = self.client.post(CREATE_USER_URL,payload)
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)