import {act, render, screen} from '@testing-library/react';
import {unmountComponentAtNode} from "react-dom";
import React from "react";
import ImageBanner from "../../components/ImageBanner";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("Renderiza ImageBanner", () => {
    act(() => {
        render(<ImageBanner title={"Travel with us"} description={"Don't forget me"} textButton={"Click Me"} />, container);
    });

    const linkElement = screen.getByText(/Don't forget me/i);
    expect(linkElement).toBeInTheDocument();
});
