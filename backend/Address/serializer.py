from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Address
class AddressSerializer(serializers.ModelSerializer):
   

    class Meta:
        model = Address
        fields = (
            'id',
            'author',
            'street_address',
            'apartment_address',
            'country',
            'zip',
            'address_type',
            'default'
        )