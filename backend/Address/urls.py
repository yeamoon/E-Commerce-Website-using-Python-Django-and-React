from django.urls import path
from .views import Create_address
urlpatterns = [
   
    path("ad/", Create_address.as_view()),
]