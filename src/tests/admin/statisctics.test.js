import {act, render, screen} from '@testing-library/react';
import {unmountComponentAtNode} from "react-dom";
import React from "react";
import Statisctics from "../../statisctics/statisctics";

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

it("Renderiza Vista de estadisticas", () => {
    act(() => {
        render(<Statisctics/>, container);
    });

    const linkElement = screen.getByText(/Lugares que frecuentan/i);
    expect(linkElement).toBeInTheDocument();
});