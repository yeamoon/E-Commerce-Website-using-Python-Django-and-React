from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Listing
from .serializers import ListingSerializer
from datetime import datetime, timezone, timedelta

class ListingsView(ListAPIView):
    queryset = Listing.objects.all()
    permission_classes = (permissions.AllowAny, )
    serializer_class = ListingSerializer
    

class ListingView(RetrieveAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer
    