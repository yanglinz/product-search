import requests
from django.conf import settings


def get_search(query):
    url = f"{settings.WALMART_API_URL}/v1/search"
    params = {"format": "json", "apiKey": settings.WALMART_API_KEY, "query": query}
    resp = requests.get(url, params)
    resp.raise_for_status()
    return resp.json()
