import { parseSearchQuery } from "./search";

describe("SearchScreen parseSearchQuery helper", () => {
  it("should parse search query", () => {
    const location = {
      search: "?q=hello"
    };
    const q = parseSearchQuery(location);
    expect(q).toEqual("hello");
  });

  it("should return undefined if no q query parameter is missing", () => {
    const location = {
      search: "?foo=bar"
    };
    const q = parseSearchQuery(location);
    expect(q).toEqual(undefined);
  });

  it("should return undefined if no query parameter is given", () => {
    const location = {
      search: ""
    };
    const q = parseSearchQuery(location);
    expect(q).toEqual(undefined);
  });
});
