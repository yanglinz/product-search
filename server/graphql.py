import graphene

from server import walmart


class Product(graphene.ObjectType):
    """Walmart product
    """

    item_id = graphene.ID()


class Query(graphene.ObjectType):
    """Root query
    """

    search_products = graphene.List(Product, query=graphene.String())

    def resolve_search_products(self, info, **kwargs):
        query = kwargs["query"]
        products = walmart.get_search_products(query)
        products_attrs = [{"item_id": p["itemId"]} for p in products["items"]]
        return [Product(**attrs) for attrs in products_attrs]


schema = graphene.Schema(query=Query)
