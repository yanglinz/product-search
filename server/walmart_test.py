from . import walmart


def test_get_search():
    example_query = "iphone"
    search_result = walmart.get_search(example_query)
    assert search_result["query"] == example_query
    assert len(search_result["items"]) == search_result["numItems"]
