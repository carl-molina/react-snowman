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


describe("test for maxWrong (6) guesses", function () {
  it("tests that img stays on img6 after reaching maxWrong", function () {
    const { container, debug } = render(<Snowman
      images={[img0, img1, img2, img3, img4, img5, img6]}
      words={["apple"]} />);

    expect(container.querySelector("p.Snowman-guesses"))
    .toContainHTML("Number wrong: 0");
    fireEvent.click(container.querySelector(`button[value="t"]`));
    expect(container.querySelector("p.Snowman-guesses"))
    .toContainHTML("Number wrong: 1");
    fireEvent.click(container.querySelector(`button[value="i"]`));
    expect(container.querySelector("p.Snowman-guesses"))
    .toContainHTML("Number wrong: 2");
    fireEvent.click(container.querySelector(`button[value="s"]`));
    expect(container.querySelector("p.Snowman-guesses"))
    .toContainHTML("Number wrong: 3");
    fireEvent.click(container.querySelector(`button[value="j"]`));
    expect(container.querySelector("p.Snowman-guesses"))
    .toContainHTML("Number wrong: 4");
    fireEvent.click(container.querySelector(`button[value="n"]`));
    expect(container.querySelector("p.Snowman-guesses"))
    .toContainHTML("Number wrong: 5");
    fireEvent.click(container.querySelector(`button[value="g"]`));

    expect(container.querySelector("p.Snowman-guesses"))
      .toContainHTML("You lose");

    const img = container.querySelector('img');
    expect(img.getAttribute("alt")).toEqual("6");
    expect(img.getAttribute("src")).toEqual("6.png");
  });
});


//snapshot test
describe("snapshot test", function () {
  it("matches snapshot", function () {
    const { container, debug } = render(<Snowman
      images={[img0, img1, img2, img3, img4, img5, img6]}
      words={["apple"]} />);

    expect(container).toMatchSnapshot();
  })
})