function calculateRectangleArea(width,height){
    return width*height;
}

// to export single function/var
module.exports = calculateRectangleArea;

// to export multiple function/var
// module.exports.calculateRectangleArea = calculateRectangleArea;

// module.exports = {
//     calculateRectangleArea : calculateRectangleArea,
// };