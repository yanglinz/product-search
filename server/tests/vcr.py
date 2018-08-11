import vcr as _vcr

filter_headers = ["Accept", "Accept-Encoding", "Authorization"]

filter_headers_set = {h.lower() for h in filter_headers}


def filter_response_headers(response):
    """Custom vcr response serializer
    """
    filtered_headers = response["headers"]
    filtered_headers = {
        k: v for k, v in filtered_headers.items() if k.lower() not in filter_headers_set
    }
    filtered_headers = {
        k: v for k, v in filtered_headers.items() if not k.lower().startswith("x-")
    }
    response["headers"] = filtered_headers
    return response


def path_cassette_dirname(vcr_path, cassettes_dirname="vcr_cassettes"):
    """Custom vcr path transformer to nest the cassette under a directory
    /foo/cassette.yaml -> /foo/<cassettes_dirname>/cassette.yaml
    """
    paths = vcr_path.split("/")
    filename = paths.pop()
    vcr_path = "/".join(paths + [cassettes_dirname] + [filename])
    return vcr_path


def path_transformer(vcr_path):
    """Custom vcr path transformer
    """
    vcr_path = path_cassette_dirname(vcr_path)
    vcr_path = _vcr.VCR.ensure_suffix(".yaml")(vcr_path)
    return vcr_path


vcr = _vcr.VCR(
    path_transformer=path_transformer,
    filter_headers=filter_headers,
    before_record_response=filter_response_headers,
    record_mode="once",
)
