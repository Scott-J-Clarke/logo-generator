// Function that generates content of 'logo.svg':
function generateLogo(data) {
    let logo = `${data.getText}`
    return logo;
}

// 'module.exports = generateLogo;' sends this function to 'index.js' so it can generate 'logo.svg':
module.exports = generateLogo;