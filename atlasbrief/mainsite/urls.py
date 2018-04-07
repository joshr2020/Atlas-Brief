from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('country/api/<str:country_name>', views.api_country, name='api_country')
]
