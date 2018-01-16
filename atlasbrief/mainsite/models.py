from django.db import models

# Create your models here.
class Tag(models.Model):
    KIND_CHOICES = (
        ("COUNTRY", "COUNTRY"),
        ("OTHER", "OTHER")
    )
    kind = models.CharField(max_length=25, choices=KIND_CHOICES, default="OTHER")
    name = models.CharField(max_length=25, unique=True)

class Brief(models.Model):
    title = models.CharField(max_length=100, unique=True)
    content = models.TextField()
    author = models.CharField(max_length=100)
    sources = models.TextField() # use separator character
    timestamp = models.DateTimeField(auto_now=True)
    tags = models.ManyToManyField(Tag)

class Country(models.Model):
    name = models.CharField(max_length=25, unique=True)
    background = models.TextField()
    stats = models.TextField()
