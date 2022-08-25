from django.db import models

class UserModel(models.Model):
    '''modelo personalizado de usuario. Se realiza login con el email'''
    
    email = models.EmailField(unique=True, max_length=254)
    name = models.CharField(max_length=50)
    city = models.CharField(max_length=50)

    REQUIRED_FIELDS = ( 
            'name',
            'city',
            'email',
    )
    def __str__(self):
        return self.name
    
    
    
    
        