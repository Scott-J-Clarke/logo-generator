const Triangle = require('./triangle');

describe('Triangle', () => {
    it('should return logo with user choice of text, text color, and shape color', () => {
        const triangle = new Triangle('MVP', 'orange', 'blue');
        expect(triangle.render()).toEqual(`
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="blue"/>
            <text x="50%" y="85%" font-size="60" text-anchor="middle" fill="orange">MVP</text>
        </svg>
        `);
    });
});