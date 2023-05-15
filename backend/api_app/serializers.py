from rest_framework import serializers
from api_app.models import Employee



class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = [ 'id', 'name', 'designation', 'email', 'contact', 'dept', 'costcenter', 'reportingto', 'location', 'salary']
