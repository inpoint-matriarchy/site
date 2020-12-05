from django.contrib import admin
from django.urls import path, include
import backend.views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    # path('course/', include('backend.urls')),
    path('api/', backend.views.get_list),
    path('api/post/', backend.views.post_list),
]
