import graphene

from server import walmart


class Product(graphene.ObjectType):
    """Walmart product schema
    """

    item_id = graphene.ID()
    name = graphene.String()
    sale_price = graphene.Float()
    standard_ship_rate = graphene.Float()
    short_description = graphene.String()
    thumb_image = graphene.String()
    medium_image = graphene.String()
    large_image = graphene.String()
    is_two_day_shipping_eligible = graphene.Boolean()

    recommended_products = graphene.List(lambda: Product)

    def resolve_recommended_products(self, info, **kwargs):
        try:
            recommended = walmart.get_product_recommendations(self.item_id)
        except walmart.WalmartServiceRecommendationMissingException:
            return []

        recommended = recommended[:10]
        return [Product.from_api_object(p) for p in recommended]

    @classmethod
    def from_api_object(cls, api_object):
        return cls(
            item_id=api_object.get("itemId"),
            name=api_object.get("name"),
            sale_price=api_object.get("salePrice"),
            standard_ship_rate=api_object.get("standardShipRate"),
            is_two_day_shipping_eligible=api_object.get("isTwoDayShippingEligible"),
            short_description=api_object.get("shortDescription"),
            thumb_image=api_object.get("thumbnailImage"),
            medium_image=api_object.get("mediumImage"),
            large_image=api_object.get("largeImage"),
        )


class Query(graphene.ObjectType):
    """Root query
    """

    product_detail = graphene.Field(Product, id=graphene.ID())
    search_products = graphene.List(Product, query=graphene.String())

    def resolve_product_detail(self, info, **kwargs):
        product_id = kwargs["id"]
        product = walmart.get_product(product_id)
        return Product.from_api_object(product)

    def resolve_search_products(self, info, **kwargs):
        query = kwargs["query"]
        products = walmart.get_search_products(query)
        return [Product.from_api_object(p) for p in products["items"]]


schema = graphene.Schema(query=Query)
