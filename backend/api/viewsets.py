from rest_framework import viewsets
from todo.models import Todo
from .serializers import TodoSerializer
from rest_framework import mixins

class TodoViewSet(mixins.CreateModelMixin, mixins.ListModelMixin,
            mixins.RetrieveModelMixin, mixins.DestroyModelMixin, 
            viewsets.GenericViewSet): 

    queryset = Todo.objects.all()
    serializer_class = TodoSerializer