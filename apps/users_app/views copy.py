from rest_framework import generics

from  apps.users import serializers

class UserCreateView(generics.CreateAPIView):
    '''vista para crear usuarios '''
    serializer_class = serializers.UserSerializer
    
    



