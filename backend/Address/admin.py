from django.contrib import admin
from .models import Address
# Register your models here.

class AddressAdmin(admin.ModelAdmin):
    list_display = (
        'author',
        'street_address',
        'apartment_address',
        'country',
        'zip',
        'address_type',
        'default'
    )
    list_filter = ('default', 'address_type', 'country')
   
admin.site.register(Address, AddressAdmin)