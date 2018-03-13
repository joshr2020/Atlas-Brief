from rest_framework import serializers

from .models import Brief, Tag


"""class CountrySerializer(serializers.Serializer):
    name = serializers.CharField()
    background = serializers.TextField()
    stats = serializers.TextField()
    """

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = "__all__"

class BriefSerializer(serializers.ModelSerializer):
   tags = TagSerializer(many=True)

   class Meta:
       model = Brief
       fields = ('title', 'content', 'author', 'timestamp', 'tags')
