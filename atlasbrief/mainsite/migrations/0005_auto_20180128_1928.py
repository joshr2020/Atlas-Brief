# Generated by Django 2.0.1 on 2018-01-29 00:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainsite', '0004_auto_20180128_1924'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tag',
            name='name',
            field=models.CharField(max_length=25, unique=True),
        ),
    ]