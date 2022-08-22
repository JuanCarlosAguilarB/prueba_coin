
from rest_framework import serializers

from .models import *

class UserSerializer(serializers.ModelSerializer):
    '''serializador para el objeto de usuarios '''
    
    class  Meta:
        model = UserModel
        fields = '__all__'


        