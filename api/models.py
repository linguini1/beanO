from django.db import models

# Create your models here.


class Flavour(models.Model):

    type = models.CharField(max_length=30)

    def __str__(self):
        return self.type


class Bean(models.Model):

    name = models.CharField(max_length=30)
    price = models.FloatField()
    description = models.TextField(null=True)
    colour = models.CharField(max_length=6, default="ffffff")
    flavours = models.ManyToManyField(Flavour)
    on_sale = models.BooleanField()

    def __str__(self):
        return f"{self.name} | ${self.price}"
