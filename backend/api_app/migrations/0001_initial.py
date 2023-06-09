# Generated by Django 4.2 on 2023-05-04 00:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('eid', models.BigAutoField(primary_key=True, serialize=False)),
                ('ename', models.CharField(max_length=100)),
                ('edesignation', models.CharField(max_length=100)),
                ('eemail', models.EmailField(max_length=100)),
                ('econtact', models.IntegerField()),
                ('edept', models.CharField(max_length=100)),
                ('ecostcenter', models.CharField(max_length=30)),
                ('ereportingto', models.CharField(max_length=100)),
                ('elocation', models.CharField(max_length=100)),
                ('esalary', models.CharField(max_length=20)),
            ],
        ),
    ]
