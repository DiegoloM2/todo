from rest_framework import viewsets
from todo.models import Todo, Step
from .serializers import TodoSerializer, StepSerializer
from rest_framework import mixins

class TodoViewSet(viewsets.ModelViewSet): 

    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class StepViewSet(
                mixins.RetrieveModelMixin,
                mixins.CreateModelMixin,
                mixins.DestroyModelMixin,
                viewsets.GenericViewSet
                ):

    queryset = Step.objects.all()
    serializer_class = StepSerializer