from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from api_app.views import EmployeeViewSet

router = routers.DefaultRouter()
router.register(r'employee', EmployeeViewSet)




urlpatterns = [
    
    path('', include(router.urls)),
]

