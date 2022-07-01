from rest_framework.views import APIView
from rest_framework.response import Response

#Local
from todo.models import Step
from .serializers import StepSerializer


class StepListView(APIView):
    def get(self, request, pk, format = None):
        steps = Step.objects.filter(todo__id = pk)
        serializer = StepSerializer(steps, many = True)
        return Response(serializer.data)
