from django.urls import path
from .views import ProductownerListView, TopSellerView

urlpatterns = [
    path('', ProductownerListView.as_view()),
   
]