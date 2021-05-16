import {act, render, screen} from '@testing-library/react';
import {unmountComponentAtNode} from "react-dom";
import React from "react";
import Inicio from "../../inicio/Inicio";
import { BrowserRouter as Router } from 'react-router-dom';

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
        render(<Router><Inicio/></Router>, container);
    });

    const linkElement = screen.getByText(/inspirate/i);
    expect(linkElement).toBeInTheDocument();
});
