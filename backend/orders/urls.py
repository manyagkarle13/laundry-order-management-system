from django.urls import path
from . import views

urlpatterns = [

    path("create/", views.create_order),

    path("status/<uuid:id>/",
         views.update_status),

    path("list/",
         views.list_orders),

    path("dashboard/",
         views.dashboard),
    
    path(
    "delete/<uuid:id>/",
    views.delete_order),

]