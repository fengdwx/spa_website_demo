"""website_demo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
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
from spa_website import views
from django.conf import settings
from django.views import static
from django.views.generic.base import TemplateView
from django.conf.urls import url


urlpatterns = [
    path('', TemplateView.as_view(template_name="index.html")),
    path('new/', TemplateView.as_view(template_name="index.html")),
    path('stored/', TemplateView.as_view(template_name="index.html")),
    path('random_data/', views.random_data_html, name = 'random_data_html'),
    path('random_data/new', views.new_random_data, name = 'new_random_data'),
    path('random_data/save', views.save_random_data, name = 'save_random_data'),
    path('stored_data/', views.stored_data_list, name = 'stored_data_list'),
    url(r'^static/(?P<path>.*)$', static.serve,
        {'document_root': settings.STATICFILES_DIRS}, name='static'),
    # url(r'^api-auth/', include('rest_framework.urls', namespace ='rest_framework'))
]
