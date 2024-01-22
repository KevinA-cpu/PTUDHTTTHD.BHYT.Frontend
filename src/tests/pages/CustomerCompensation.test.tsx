import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CustomerCompensations from "../../pages/CustomerCompensations";

test("CustomerCompensation mounts properly", () => {
  render(<CustomerCompensations />);
  expect(screen.getByText("Mã chính sách")).toBeInTheDocument();
});
