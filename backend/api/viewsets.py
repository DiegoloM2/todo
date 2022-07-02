from rest_framework import viewsets
from todo.models import Todo, Step
from .serializers import TodoSerializer, StepSerializer
from rest_framework import mixins
from .customPermissions import IsAuthor
from rest_framework.response import Response
from rest_framework import status

class TodoViewSet(mixins.DestroyModelMixin, mixins.RetrieveModelMixin, mixins.CreateModelMixin, viewsets.GenericViewSet): 
    permission_classes = (IsAuthor,)
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


    def list(self, request):
        todos = Todo.objects.filter(owner = request.user)
        serializer = TodoSerializer(todos, many = True)
        return Response(serializer.data)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class StepViewSet(
                mixins.RetrieveModelMixin,
                mixins.CreateModelMixin,
                viewsets.GenericViewSet
                ):


    queryset = Step.objects.all()
    serializer_class = StepSerializer


    def destroy(self, request, pk): 
        step = Step.objects.get(pk = pk)
        if step.todo.owner == request.user: 
            step.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else: 
            return Response(status=status.HTTP_400_BAD_REQUEST)
