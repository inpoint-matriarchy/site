from django.contrib import admin

from .models import User, Product, Tag, Order

admin.site.register(User)
admin.site.register(Product)
admin.site.register(Tag)
admin.site.register(Order)