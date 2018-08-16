import requests
from django.conf import settings


class WalmartServiceException(Exception):
    """A generic custom exception for 400/500 errors from walmart API
    """


class WalmartServiceRecommendationMissingException(Exception):
    """A custom exception for missing recommendation for an item
    """


base_params = {"format": "json", "apiKey": settings.WALMART_API_KEY}


def get_search_products(query):
    """Fetch search a list of products
    """
    url = f"{settings.WALMART_API_URL}/v1/search"
    params = {**base_params, "query": query}
    resp = requests.get(url, params)

    try:
        resp.raise_for_status()
    except requests.HTTPError as e:
        message = f"{resp.status_code} Client Error"
        raise WalmartServiceException(message)

    return resp.json()


def get_product(item_id):
    """Fetch a single product detail
    """
    url = f"{settings.WALMART_API_URL}/v1/items/{item_id}"
    resp = requests.get(url, base_params)

    try:
        resp.raise_for_status()
    except requests.HTTPError:
        message = f"{resp.status_code} Client Error"
        raise WalmartServiceException(message)

    return resp.json()


def get_product_recommendations(item_id):
    """Fetch a list of recommended products for a given product
    """
    url = f"{settings.WALMART_API_URL}/v1/nbp"
    params = {**base_params, "itemId": item_id}
    resp = requests.get(url, params)

    try:
        resp.raise_for_status()
    except requests.HTTPError:
        message = f"{resp.status_code} Client Error"
        raise WalmartServiceException(message)

    data = resp.json()
    if not isinstance(data, list):
        raise WalmartServiceRecommendationMissingException

    return resp.json()
