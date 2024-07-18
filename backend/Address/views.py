from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Address
from .serializer import AddressSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated




class Create_address(generics.ListCreateAPIView):
    serializer_class = AddressSerializer
    permission_classes = [IsAuthenticated]
   

    def get_queryset(self):
        user = self.request.user
        return Address.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)