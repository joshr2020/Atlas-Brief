from django.shortcuts import get_object_or_404, render

from django.http import HttpResponse, JsonResponse

from django.core import serializers
from rest_framework.renderers import JSONRenderer

from .models import Country
from .serializers import BriefSerializer

# Create your views here.
def index(request):
    return render(request, 'mainsite/index.html', {})

def api_country(request, country_name):
    country = get_object_or_404(Country, name__iexact=country_name)
    tag = country.tag

    brief_serializer = BriefSerializer(tag.brief_set.all(), many=True)
    briefs = JSONRenderer().render(brief_serializer.data).decode()

    return JsonResponse({
        'name': country.name,
        'background': country.background,
        'stats': country.stats,
        'briefs': briefs
    })
