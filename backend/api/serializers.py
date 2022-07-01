from rest_framework import serializers
from todo.models import Todo, Step

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ("id", "title", "body", "done")

class StepSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Step
        fields = ("id", "body", "todo")