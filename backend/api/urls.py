from django.urls import path
from rest_framework.routers import SimpleRouter
from .viewsets import TodoViewSet

router = SimpleRouter()
router.register('todo', TodoViewSet, basename = "todo")

urlpatterns = router.urls