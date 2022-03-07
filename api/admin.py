from django.contrib import admin

# Register your models here.

from .models import Flavour, Bean

admin.site.register(Flavour)
admin.site.register(Bean)
