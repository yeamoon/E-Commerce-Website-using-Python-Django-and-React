from django.urls import path
from . import views
from django.urls import path, include, re_path

urlpatterns = [
    
    path("owners/", include('owner.urls')),
    path("products/", include('productlist.urls')),
    path("address/", include('Address.urls')),
    
]