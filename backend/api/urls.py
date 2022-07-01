from django.urls import path
from rest_framework.routers import SimpleRouter
from .viewsets import TodoViewSet, StepViewSet
from .views import StepListView

router = SimpleRouter()
router.register(
                'todo', TodoViewSet, basename = "todo", 
                )
router.register('step', StepViewSet, basename = "step")

urlpatterns = router.urls
urlpatterns += [path("steps/<int:pk>/", StepListView.as_view(), name = "steplist" )]