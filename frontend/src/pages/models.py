from django.db import models
from django.contrib.auth.models import User


class Note(models.Model):
    Project_name= models.CharField(max_length=100)
    project_list = models.JSONField()
    created_at = models.DateTimeField(auto_now_add=True)


    certification = models.CharField(max_length=100)
    certification_list = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self. Project_name