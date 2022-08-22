from django.test import TestCase
from django.test import Client
from apps.users_app.models import *

class ModelTest(TestCase):
    
    def test_create_user_successful(self):
        '''test para probar crear un usuario'''
        
        email = 'test1@gmail.com'
        city = '923847619278123'
        name = 'test'
    
        user = UserModel.objects.create(
            email=email, name=name, 
            city=city
            )
        
        ## verificamos que email sea correcto (igual)
        self.assertEquals(user.email, email)
        
    def test_new_user_email_normalized (self):
        '''testeo de email para nuevos usuarios, email normalizado'''
            
        email = 'test2@GMAIL.COM'
        city = '923847619278123'
        name = 'test'

        user = UserModel.objects.create(
        email=email, name=name, 
        city=city
        )
        
        self.assertEquals(user.email, email.lower())
        

    def test_new_user_city_normalized (self):
        '''testeo de ciudad para nuevos usuarios, ciudad normalizado'''
            
        email = 'test2@GMAIL.COM'
        city = 'Bogota'
        name = 'test'

        user = UserModel.objects.create(
        email=email, name=name, 
        city=city
        )
        
        self.assertEquals(user.city, city.lower())