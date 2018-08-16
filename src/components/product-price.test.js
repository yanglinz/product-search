import { shouldDisplayMsrp } from "./product-price";

describe("ProductPrice component shouldDisplayMsrp helper", () => {
  it("should display msrp", () => {
    const display = shouldDisplayMsrp(100, 150);
    expect(display).toEqual(true);
  });

  it("should not display msrp if msrp is not defined", () => {
    const display = shouldDisplayMsrp(100, undefined);
    expect(display).toEqual(false);
  });

  it("should not display msrp if msrp is less than sale price", () => {
    const display = shouldDisplayMsrp(100, 50);
    expect(display).toEqual(false);
  });

  it("should not display msrp if msrp does not differ much from sale price", () => {
    const display = shouldDisplayMsrp(100, 101);
    expect(display).toEqual(false);
  });
});
