/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import ButtonStatus from './components/Buttonstatus';

describe('Button change color', () => {
    test('Available', () => {
        const props = "Available";
        const { container } = render(
            <ButtonStatus status={props} />
        );
        const buttonClass = ButtonStatus(props).type.styledComponentId;
        const ButtonRoots = container.getElementsByClassName(buttonClass);
        const style = window.getComputedStyle(ButtonRoots[0]);
        expect(style.backgroundColor).toBe('rgb(90, 208, 122)');

    });
    test('Booked', () => {
        const props = "Booked"

        const { container } = render(
            <ButtonStatus status={props} />
        );
        const buttonClass = ButtonStatus(props).type.styledComponentId;
        const ButtonRoots = container.getElementsByClassName(buttonClass);
        const style = window.getComputedStyle(ButtonRoots[0]);
        expect(style.backgroundColor).toBe('rgb(226, 52, 40)');
    });
});
