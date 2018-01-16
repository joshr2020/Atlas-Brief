from django.contrib import admin

# Register your models here.
from .models import Brief, Tag, Country

admin.site.register([Brief, Tag, Country])
