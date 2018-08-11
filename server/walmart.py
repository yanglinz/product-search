import requests
from django.conf import settings


base_params = {"format": "json", "apiKey": settings.WALMART_API_KEY}


def get_search_products(query):
    """Fetch search a list of products from walmart API
    """
    url = f"{settings.WALMART_API_URL}/v1/search"
    params = {**base_params, "query": query}
    resp = requests.get(url, params)
    resp.raise_for_status()
    return resp.json()


def get_product(item_id):
    """Fetch a single product detail from  walmart API
    """
    url = f"{settings.WALMART_API_URL}/v1/items/{item_id}"
    resp = requests.get(url, base_params)
    resp.raise_for_status()
    return resp.json()
