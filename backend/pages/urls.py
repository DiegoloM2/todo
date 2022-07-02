from django.urls import path
from .views import mainView, registerView

urlpatterns = [
    path('', mainView, name = "main"), 
    path("accounts/register", registerView, name = "register")
]