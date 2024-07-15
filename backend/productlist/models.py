from django.db import models
from django.utils.timezone import now
from owner.models import Productowner

CATEGORY_CHOICES = (
    ('S', 'Shirt'),
    ('SW', 'Sport wear'),
    ('OW', 'Outwear')
)
# Create your models here.
class Listing(models.Model):
    title = models.CharField(max_length=100)
    price = models.FloatField()
    discount_price = models.FloatField(blank=True, null=True)
    category = models.CharField(choices=CATEGORY_CHOICES, max_length=2)

  
    description = models.TextField()
    photo_main = models.ImageField(upload_to='photos/%Y/%m/%d/')
    ownerr = models.ForeignKey(Productowner, on_delete=models.DO_NOTHING)

    
    def __str__(self):
        return self.title