import { render, screen } from "@testing-library/react";
import Collections from "./Collections";

test("renders collections component", () => {
  render(<Collections gridArea="test" />);

  // Check if the heading is rendered correctly
  const headingElement = screen.getByText(/Our Collections/i);
  expect(headingElement).toBeInTheDocument();

  // Check if the collections are rendered correctly
  const collectionElements = screen.getAllByRole("button");
  expect(collectionElements).toHaveLength(collections.length);

  // Check if the collection images are rendered correctly
  const imageElements = screen.getAllByRole("img");
  expect(imageElements).toHaveLength(collections.length);

  // Check if the collection links are rendered correctly
  const linkElements = screen.getAllByRole("link");
  expect(linkElements).toHaveLength(collections.length);
});
