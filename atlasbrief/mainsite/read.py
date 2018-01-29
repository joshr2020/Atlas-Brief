import json
from pathlib import Path
from .models import Country, Tag

def add_country(filename):

    with open(filename, 'r') as f:
        data = json.load(f)

    gov = data['Government']
    if 'Country name' not in gov.keys():
        return

    name = gov['Country name']
    if 'conventional short form' in name.keys():
        short_name = name['conventional short form']['text']
    else:
        return

    if short_name == 'none':
        return

    if 'Introduction' in data.keys():
        bg = data['Introduction']['Background']['text']
    else:
        return
    newtag = Tag(name=short_name)
    newtag.save()
    Country(name=short_name, background=bg, stats=json.dumps(data), tag=newtag).save()

def add_to_database():
    p = Path('/Users/joshuarusso/Documents/AB/factbook.json')
    for child in p.rglob('[a-z][a-z].json'):
        add_country(child)
