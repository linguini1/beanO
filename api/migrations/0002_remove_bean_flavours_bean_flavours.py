# Generated by Django 4.0.1 on 2022-03-05 00:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='bean',
            name='flavours',
        ),
        migrations.AddField(
            model_name='bean',
            name='flavours',
            field=models.ManyToManyField(to='api.Flavour'),
        ),
    ]
