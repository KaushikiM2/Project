# Generated by Django 4.2 on 2023-05-04 00:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='eid',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='employee',
            name='esalary',
            field=models.IntegerField(max_length=20),
        ),
    ]
