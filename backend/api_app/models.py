from django.db import models

class Employee(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    designation = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    contact = models.IntegerField()
    dept = models.CharField(max_length=100)
    costcenter = models.CharField(max_length=30)
    reportingto = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    salary = models.IntegerField()
    

    def __str__(self):
        return self.name

