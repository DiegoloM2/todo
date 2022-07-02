from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.auth.views import LoginView
# Create your models here.

class Todo(models.Model): 
    owner = models.ForeignKey(get_user_model(), on_delete = models.CASCADE)
    title = models.CharField(max_length = 200, blank=False)
    body = models.TextField(blank = False )
    done = models.BooleanField(default = False)

    def __str__(self): 
        return self.title

class Step(models.Model):
    body = models.TextField(blank = False)
    todo = models.ForeignKey(Todo, on_delete = models.CASCADE)

    def __str__(self):
        return self.body