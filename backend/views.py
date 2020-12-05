from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Course
from .serializers import CourseSerializer
from rest_framework.response import Response
from rest_framework import status


@api_view(["GET"])
def get_list(request):
    data = Course.objects.all()
    serializers = CourseSerializer(data, many=True)
    return Response(serializers.data)


@api_view(["POST"])
def post_list(request):
    serializers = CourseSerializer(data=request.data)
    if (serializers.is_valid()):
        serializers.save()
        return Response(serializers.data, status=status.HTTP_201_CREATED)
    return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["DELETE"])
def delete_list(request):
    operation = Course.delete()
    if operation:
        data["success"] = "delete succesful"
    else:
        data["failure"] = "delete failure"
    data = {}
    return Response(data=data)
