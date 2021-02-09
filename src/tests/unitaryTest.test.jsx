import React from "react";
import { render } from "@testing-library/react";

import CoinWithNumber from "../components/WishListHeader/CoinWithNumber";

it("Renders prop number", () => {
  const wishListItems = 7;
  const { container } = render(<CoinWithNumber value={wishListItems} />);
  expect(container.firstChild).toContainHTML(7);
});
