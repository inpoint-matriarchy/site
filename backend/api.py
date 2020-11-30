from .models import Course
from rest_framework import viewsets, permissions
from .serializers import CourseSerializer


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CourseSerializer
