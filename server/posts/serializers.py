from  rest_framework import serializers
from django.contrib.auth.models import User

from users.serializers import ProfileSerializer
from .models import Post
from rest_framework.permissions import AllowAny


class PostSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)

    author = serializers.PrimaryKeyRelatedField(read_only=True, default=serializers.CurrentUserDefault())

    permission_classes = [
        AllowAny,
    ]

    class Meta:
        model = Post
        fields = ("pk","profile","author","image","comment", "score", "likes", "written_date")
        
class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ("author", "comment", "score","image")