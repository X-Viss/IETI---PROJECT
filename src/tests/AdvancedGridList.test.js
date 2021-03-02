import {act, render, screen} from '@testing-library/react';
import AdvancedGridList from "../components/AdvancedGridList";
import {unmountComponentAtNode} from "react-dom";
import {datatest, datatest1} from "../tmp/datamock";
import InfoIcon from "@material-ui/icons/Info";
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

it("Renderiza AdvancedGridList sin numcols", () => {
    act(() => {
        render(<AdvancedGridList tileData={datatest} title={"inspirate"} />, container);
    });

    const linkElement = screen.getByText(/inspirate/i);
    expect(linkElement).toBeInTheDocument();
});

it("Renderiza AdvancedGridList con numcols", () => {
    act(() => {
        render(<AdvancedGridList tileData={datatest} title={"inspirate"} numcols={4} />, container);
    });

    const linkElement = screen.getByText(/inspirate/i);
    expect(linkElement).toBeInTheDocument();
});

it("Renderiza AdvancedGridList sin información de autor o título", () => {
    act(() => {
        render(<AdvancedGridList tileData={datatest1} title={"inspirate"} numcols={4} />, container);
    });

    const linkElement = screen.getByText(/inspirate/i);
    expect(linkElement).toBeInTheDocument();
});