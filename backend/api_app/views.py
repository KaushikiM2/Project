from django.shortcuts import render
from api_app.models import Employee
from rest_framework import viewsets
from api_app.serializers import EmployeeSerializer


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
