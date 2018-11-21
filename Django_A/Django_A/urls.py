"""Django_A URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from galaxy.views import index
from galaxy.views import gallery, ajax_dict, send_email
from chart.views import chart

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('index/', index, name='index'),
    path('gallery/', gallery, name='gallery'),
    path('ajax_dict/', ajax_dict, name='get_classroom_info'),
    path('email/', send_email, name='sendEmail'),
    path('chart/', chart, name='chart')

]
