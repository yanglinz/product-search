from unittest.mock import patch

from . import graphql

fake_product = {
    "itemId": "123",
    "name": "Product name",
    "salePrice": 123.00,
    "msrp": 456.00,
    "standardShipRate": 9.99,
    "shortDescription": "Some description",
    "thumbnailImage": "img.walmart.com/123",
    "mediumImage": "img.walmart.com/123",
    "largeImage": "img.walmart.com/123",
    "isTwoDayShippingEligible": False,
}


@patch("server.walmart.get_search_products")
def test_product_search_query(get_search_products_mock):
    fake_search_result = {"items": [fake_product]}
    get_search_products_mock.return_value = fake_search_result

    query = """
        query {
            searchProducts(query: "Foo") {
                itemId
                name
                salePrice
                msrp
                standardShipRate
                shortDescription
                thumbnailImage
                mediumImage
                largeImage
                isTwoDayShippingEligible
            }
        }
    """
    result = graphql.schema.execute(query)
    assert not result.errors

    query_product = result.data["searchProducts"][0]
    for k, v in fake_product.items():
        assert query_product[k] == v


@patch("server.walmart.get_product")
@patch("server.walmart.get_product_recommendations")
def test_product_detail_query(mock_get_product_recommendations, mock_get_product):
    mock_get_product_recommendations.return_value = [fake_product]
    mock_get_product.return_value = fake_product

    query = """
        query {
            productDetail(id: "123") {
                itemId
                name
                salePrice
                msrp
                standardShipRate
                shortDescription
                thumbnailImage
                mediumImage
                largeImage
                isTwoDayShippingEligible
                
                recommendedProducts {
                    itemId
                    name
                    salePrice
                    msrp
                    standardShipRate
                    shortDescription
                    thumbnailImage
                    mediumImage
                    largeImage
                    isTwoDayShippingEligible
                }
            }
        }
    """
    result = graphql.schema.execute(query)
    assert not result.errors

    query_product = result.data["productDetail"]
    for k, v in fake_product.items():
        assert query_product[k] == v

    query_recommendation = result.data["productDetail"]["recommendedProducts"][0]
    for k, v in fake_product.items():
        assert query_recommendation[k] == v
