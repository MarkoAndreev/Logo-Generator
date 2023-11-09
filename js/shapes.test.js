const Shapes = require('./shapes.js');
const Circle = Shapes.Circle;
const Triangle = Shapes.Triangle; 
const Square = Shapes.Square;

describe('Shapes', () => {
    describe('Logo Start', () => {
        it('should should render the start of the svg file consistently ', () => {
            const circle = new Circle('bft', 'red', 'red');
            const logoStart = circle.renderStart();
            expect(logoStart).toContain(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`);
        });
        it('should should render the end of the svg file consistently ', () => {
            const circle = new Circle('bft', 'red', 'red');
            const logoEnd = circle.renderEnd();
            expect(logoEnd).toContain(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">bft</text>`);
        });
    });
    describe('Circle', () => {
        it('should render a line of SVG code for a red Circle', () => {
            const circle = new Circle('bft', 'red', 'red');
            const logo = circle.render();
            expect(logo).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
        });
    });

    describe('Triangle', () => {
        it('should render a line of SVG code for a red Triangle', () => {
            const triangle = new Triangle('bft', 'red', 'red');
            const logo = triangle.render();
            expect(logo).toEqual('<polygon points="40,180 150,20 260,180" fill="red" />');
        });
    });
    describe('Square', () => {
        it('should render a line of SVG code for a red Square', () => {
            const square = new Square('bft', 'red', 'red');
            const logo = square.render();
            expect(logo).toEqual('<polygon points="50,0 250,0 250,200 50,200" fill="red" />');
        });
    });
});