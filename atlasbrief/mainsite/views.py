from django.shortcuts import get_object_or_404

from django.http import HttpResponse, JsonResponse

from .models import Country

# Create your views here.
def index(request):
    return HttpResponse("it works")

def profile(request, country_name):
    country = get_object_or_404(Country, name=country_name)
    tag = country.tag
    briefs = tag.brief_set.all()
    return JsonResponse({'background': country.background, 'stats': country.stats})
