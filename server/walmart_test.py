from server.tests.vcr import vcr

from . import walmart


@vcr.use_cassette()
def test_get_search_products():
    example_query = "iphone"
    search_result = walmart.get_search_products(example_query)
    assert search_result["query"] == example_query
    assert len(search_result["items"]) == search_result["numItems"]


@vcr.use_cassette()
def test_get_product():
    example_item_id = "651779321"
    product = walmart.get_product(example_item_id)
    assert product["itemId"] == int(example_item_id)


@vcr.use_cassette()
def test_get_product_recommendations():
    example_item_id = "631796609"
    recommendations = walmart.get_product_recommendations(example_item_id)
    assert len(recommendations) == 25
