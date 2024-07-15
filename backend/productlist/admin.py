from django.contrib import admin
from .models import Listing
# Register your models here.
class ListingAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'price', 'ownerr')
    list_display_links = ('id', 'title')
    list_filter = ('ownerr', )


admin.site.register(Listing, ListingAdmin)