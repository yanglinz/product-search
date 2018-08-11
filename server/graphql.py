import graphene


class Query(graphene.ObjectType):
    """Root query
    """

    foo = graphene.List(graphene.Int)

    def resolve_foo(self, info, **kwargs):
        return [1, 2, 3]


schema = graphene.Schema(query=Query)
