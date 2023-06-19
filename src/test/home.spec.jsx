import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from '@jest/globals';
import PageHome from "../pages/HomePage";

describe("PageHome", () => {
    test("renders PageHome component", () => {
        render(<PageHome />);
        const pageTitle = screen.getByText("Bienvenido");
        expect(pageTitle).toBeInTheDocument();
    });

    test("validates login with empty email and password", () => {
        render(<PageHome />);
        const loginButton = screen.getByText("Iniciar Sesión");
        fireEvent.click(loginButton);
        const emailError = screen.getByText("Por favor, escribe un email");
        const passwordError = screen.getByText("Por favor, escribe una contraseña");
        expect(emailError).toBeInTheDocument();
        expect(passwordError).toBeInTheDocument();
    });

    test("validates login with invalid credentials", () => {
        render(<PageHome />);
        const emailInput = screen.getByPlaceholderText("Escribe tu correo");
        const passwordInput = screen.getByPlaceholderText("Escribe tu contraseña");
        const loginButton = screen.getByText("Iniciar Sesión");
        fireEvent.change(emailInput, { target: { value: "test@example.com" } });
        fireEvent.change(passwordInput, { target: { value: "123456" } });
        fireEvent.click(loginButton);
        const error = screen.getByText("Correo y/o contraseña incorrecta");
        expect(error).toBeInTheDocument();
    });

    test("navigates to correct page on successful login", () => {
        render(<PageHome />);
        const emailInput = screen.getByPlaceholderText("Escribe tu correo");
        const passwordInput = screen.getByPlaceholderText("Escribe tu contraseña");
        const loginButton = screen.getByText("Iniciar Sesión");
        fireEvent.change(emailInput, { target: { value: "test@example.com" } });
        fireEvent.change(passwordInput, { target: { value: "password" } });
        fireEvent.click(loginButton);
        // Add your expectations for the navigation here
    });
});
