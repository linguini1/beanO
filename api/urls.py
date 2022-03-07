from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('beans/', views.GetBeans.as_view(), name="beans"),
    path('bean/<str:pk>', views.GetBean.as_view(), name="bean"),
    path('flavours/', views.GetFlavours.as_view(), name="flavours")
]
