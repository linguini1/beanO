# Imports
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication
from .models import Bean, Flavour
from .serializers import BeanSerializer, FlavourSerializer


# Disables CRF for API view
class UnsafeSessionAuthentication(SessionAuthentication):

    def authenticate(self, request):
        http_request = request._request
        user = getattr(http_request, 'user', None)

        if not user or not user.is_active:
           return None

        return (user, None)


# Views
@api_view(["GET"])
def getRoutes(request):

    routes = [
        {
            "name": "beans/",
            "methods": {
                "GET": "Gets a list of all the beans in the catalogue.",
            }
        },
    ]

    return Response(routes)


class GetBeans(APIView):

    authentication_classes = (UnsafeSessionAuthentication,)

    def get(self, request):

        beans = Bean.objects.all().order_by('price')
        serializer = BeanSerializer(beans, many=True)

        return Response(serializer.data)

    def post(self, request):

        # Create bean from data
        data = request.data

        newBean = Bean(
            name=data["name"],
            colour=data["colour"],
            price=float(data["price"]),
            description=data["description"],
            on_sale=False  # Sales will have to be set through the admin panel
        )

        newBean.save()  # Save bean

        # Add flavours to newly created bean
        for flavour in data["flavours"]:
            newBean.flavours.add(Flavour.objects.get(type=flavour))

        # Respond with new bean data
        return Response(BeanSerializer(newBean).data)


class GetBean(APIView):

    def get(self, request, pk):

        bean = Bean.objects.get(id=pk)
        serializer = BeanSerializer(bean)

        return Response(serializer.data)


class GetFlavours(APIView):

    def get(self, request):

        flavours = Flavour.objects.all()
        serializer = FlavourSerializer(flavours, many=True)

        return Response(serializer.data)
