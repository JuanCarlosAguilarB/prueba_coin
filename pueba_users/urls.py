
from django.contrib import admin
from django.urls import path, include

API_PATH = "api/v1/"

urlpatterns = [
    path('admin/', admin.site.urls),
    # path(API_PATH + 'users/', include('apps.users.urls')),
    path(API_PATH + '', include('apps.users_app.urls')),

]

