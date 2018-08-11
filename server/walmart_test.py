from server.tests.vcr import vcr

from . import walmart


@vcr.use_cassette()
def test_get_search_products():
    example_query = "iphone"
    search_result = walmart.get_search_products(example_query)
    assert search_result["query"] == example_query
    assert len(search_result["items"]) == search_result["numItems"]
