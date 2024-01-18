import img0 from "./0.png";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";

import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Snowman from "./Snowman";


// smoke test
describe("smoke test for stability", function () {
  it("renders correctly", function () {
    render(<Snowman
        images={[img0, img1, img2, img3, img4, img5, img6]}
        words={["apple"]} />);
  });
});


describe("test for maxWrong guesses", function () {
  it("tests that img stays on img6 after reaching maxWrong", function () {
    const { container, debug } = render(<Snowman
      images={[img0, img1, img2, img3, img4, img5, img6]}
      words={["apple"]} />);

    fireEvent.click(container.querySelector(`button[value="t"]`));
    fireEvent.click(container.querySelector(`button[value="i"]`));
    fireEvent.click(container.querySelector(`button[value="s"]`));
    fireEvent.click(container.querySelector(`button[value="j"]`));
    fireEvent.click(container.querySelector(`button[value="n"]`));
    fireEvent.click(container.querySelector(`button[value="g"]`));

    expect(container.querySelector("p.Snowman-guesses"))
      .toContainHTML("You lose");

    const img = container.querySelector('img');
    expect(img.getAttribute("alt")).toEqual("6");
    expect(img.getAttribute("src")).toEqual("6.png");
  });
});