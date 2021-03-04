import {act, render, screen} from '@testing-library/react';
import {unmountComponentAtNode} from "react-dom";
import React from "react";
import Tiposviajes from "../../tiposviajes/tiposviajes";

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

it("Renderiza Vista Tipo de viajes", () => {
    act(() => {
        render(<Tiposviajes/>, container);
    });

    const linkElement = screen.getByText(/Glamping/i);
    expect(linkElement).toBeInTheDocument();
});