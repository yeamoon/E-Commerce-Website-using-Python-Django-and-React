from django.urls import path
from . import views
from django.urls import path, include, re_path

urlpatterns = [
    path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
    path("owners/", include('owner.urls')),
    path("products/", include('productlist.urls')),
]