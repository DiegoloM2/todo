from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

#Local
from todo.models import Step
from .serializers import StepSerializer


class StepListView(APIView):
    def get(self, request, pk, format = None):
        steps = Step.objects.filter(todo__id = pk)
        serializer = StepSerializer(steps, many = True)
        return Response(serializer.data)

class TodoListView(APIView):
    def get(self, request): 
        todos = Todo.objects.filter(owner = request.user)
        serializer = TodoSerializer(todos, many = True)
        return Response(serializer.data)

class TodoCreateView(APIView):
    def post(self, request): 
        serializer = TodoSerializer(data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)

        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)