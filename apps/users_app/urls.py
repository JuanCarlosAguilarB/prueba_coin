from django.urls import path, include

from rest_framework import routers


from .views import *

router = routers.DefaultRouter()
router.register(r'users', UsersViewSet, basename='users')


urlpatterns = [
    path('users/', include(router.urls)),
]
