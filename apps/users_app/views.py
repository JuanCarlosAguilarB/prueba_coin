from rest_framework import generics, status, viewsets
from rest_framework.response import Response

from .serializers import *
from .models import *

class UsersViewSet(viewsets.ModelViewSet): 
    '''view para crud  de usuarios'''

    serializer_class = UserSerializer
    queryset = UserModel.objects.all()
    
    ## eliminación lógica, status=false (nose ha implementado)
    # def  get_queryset(self):
    #     return self.get_serializer().Meta.model.objects.filter(state=True)
    
    def list(self, request):
        # queryset = User.objects.all()
        serializer = self.serializer_class(self.get_queryset(), many=True)
        return Response(serializer.data)

    





