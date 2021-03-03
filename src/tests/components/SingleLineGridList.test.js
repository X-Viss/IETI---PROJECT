import {act, render, screen} from '@testing-library/react';
import {unmountComponentAtNode} from "react-dom";
import {datatest, datatest1} from "../../tmp/datamock";
import SingleLineGridList from "../../components/SingleLineGridList";
import React from "react";

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

it("Renderiza SingleLineGridList", () => {
    act(() => {
        render(<SingleLineGridList tileData={datatest} title={"tipos de viaje"} />, container);
    });

    const linkElement = screen.getByText(/tipos de viaje/i);
    expect(linkElement).toBeInTheDocument();
});

it("Renderiza SingleLineGridList sin información de autor o título", () => {
    act(() => {
        render(<SingleLineGridList tileData={datatest1} title={"inspirate"} numcols={4} />, container);
    });

    const linkElement = screen.getByText(/inspirate/i);
    expect(linkElement).toBeInTheDocument();
});