import {act, render, screen} from '@testing-library/react';
import {unmountComponentAtNode} from "react-dom";
import React from "react";
import Lugares from "../../lugares/lugares";
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

it("Renderiza vista lugares", () => {
    act(() => {
        render(<Router><Lugares/></Router>, container);
    });

    const linkElement = screen.getByText(/Conoce más sobre.../i);
    expect(linkElement).toBeInTheDocument();
});