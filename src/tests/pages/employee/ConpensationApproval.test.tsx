import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ConpensationApproval from "../../../pages/employee/ConpensationApproval";

test("ConpensationApproval mounts properly", () => {
  render(<ConpensationApproval />);
  expect(screen.getByText("Mã chính sách")).toBeInTheDocument();
});
