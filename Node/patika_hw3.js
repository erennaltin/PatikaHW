function circleArea(radius)
{
    console.log(`Yarıçapı ${radius} olan bir dairenin alanı: ${radius * radius * Math.PI}`);
}

function circleCircumference (radius)
{
    console.log(`Yarıçapı ${radius} olan bir dairenin çevresi: ${2 * radius * Math.PI}`);
}

module.exports = {
    circleArea,
    circleCircumference
}