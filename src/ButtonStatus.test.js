/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react';
import ButtonStatus from './components/Buttonstatus';

describe('Comprobando el color del botón', () => {
    test('Color verde', (props) => {
        render(
            <ButtonStatus status="Available"/>
        );
        jest.setTimeout(10000);
        const buttonClass = ButtonStatus(props).type.styledComponentId;
        const ButtonRoots = document.getElementsByClassName(buttonClass);
        const style = window.getComputedStyle(ButtonRoots[0]);
      
        //Si props.status === "Available"
        expect(style.backgroundColor).toBe('rgb(90, 208, 122)'); 
        
    });
    test('Color rojo', (props) => {
        render(
            <ButtonStatus status="Booked"/>
        );
        jest.setTimeout(10000);
        const buttonClass = ButtonStatus(props).type.styledComponentId;
        const ButtonRoots = document.getElementsByClassName(buttonClass);
        const style = window.getComputedStyle(ButtonRoots[0]);
        
        //Si props.status == "Booked"
        expect(style.backgroundColor).toBe('rgb(226, 52, 40)');
    });
});