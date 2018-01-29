from django.db import models


class Tag(models.Model):
    name = models.CharField(max_length=25, unique=True)
    def __str__(self):
        return self.name


class Brief(models.Model):
    title = models.CharField(max_length=100, unique=True)
    content = models.TextField()
    author = models.CharField(max_length=100)
    timestamp = models.DateTimeField(auto_now=True)
    tags = models.ManyToManyField(Tag)
    def __str__(self):
        return self.title


class Country(models.Model):
    name = models.CharField(max_length=25, unique=True)
    background = models.TextField()
    stats = models.TextField()
    tag = models.OneToOneField(Tag, on_delete=models.CASCADE)
    def __str__(self):
        return self.name
