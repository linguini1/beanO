# Imports
from rest_framework.serializers import ModelSerializer
from .models import Flavour, Bean


# Serializers
class FlavourSerializer(ModelSerializer):

    class Meta:
        model = Flavour
        fields = "__all__"


class BeanSerializer(ModelSerializer):

    flavours = FlavourSerializer(read_only=True, many=True)

    class Meta:
        model = Bean
        fields = '__all__'
