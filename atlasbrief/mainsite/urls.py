from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('profile/<str:country_name>', views.profile, name='profile')
]
