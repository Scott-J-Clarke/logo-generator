// Stil might be able to look to 'generateMarkdown.js' in Module 9 Challenge for more insight into how to organize the object that will be returned from the 'generateLogo' function.

// Function that generates content of 'logo.svg':
function generateLogo(data) {
    let logo = `{ <svg version="1.1" width="300" height="200"xmlns="http://www.w3.org/2000/svg"> 
${data.shape}</svg> }` 

// 'data.shape' outputs the shape as a string, like 'triangle', as part of the '.svg' object.
// 'data.render()' returns error.
// 'data.render' returns undefined.
// 'data.render(shape)' returns a reference errror.
// Even if we return the render method by brute force it doesn't output an object we can see as a logo image.

    // Need to add in:
    // ${data.getText}
    // `${data.getTextColor}`
    // `${data.getShapeColor}'

    // Trinh: Depending on what shape we are importing, we will create an object from that class.
    // Should this object be a JSON object that the browser can turn into a logo image?
    // Or should it be returned as a JSON object inside of an '.svg' file the browswer can turn into an image? 

    return logo;
}

// 'module.exports = generateLogo;' sends this function to 'index.js' so it can generate 'logo.svg':
module.exports = generateLogo;
