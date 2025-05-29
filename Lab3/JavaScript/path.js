function createPathN() {
    const svg = d3.select("svg")
    const width = svg.attr("width")
    const height = svg.attr("height")

    let data = [];
    const padding = 100;
    //начальное положение рисунка
    let posX = padding;
    let posY = padding;
    const hx = 5 * ((width-padding)/height);
    const hy = 5 * (height/(width-padding))/2;

    while (posY < height/2) {
        data.push( {x: posX, y: posY});
        posY += hy;
        posX += hx;
    }
    // координаты y - постоянны, x - увеличиваются
    while (posY < height-padding) {
        data.push( {x: posX, y: posY});
        posY += hy;
        posX -= hx;
    }
    return data
}

let drawPath = (color) => {
    // создаем массив точек
    const dataPoints = createPathN();

    const line = d3.line()
        .x((d) => d.x)
        .y((d) => d.y);
    const svg = d3.select("svg")
    // создаем путь на основе массива точе

    const path = svg.append('path')
        .attr('d', line(dataPoints))
        .attr('stroke', color)
        .attr('fill', 'none')

    return path;
}

function translateAlong(path, time, data) {
    const length = path.getTotalLength();
    const xDiff = (data[1] - data[0]);
    const yDiff = (data[3] - data[2]);
    const angleDiff = (data[5] - data[4]);

    return function() {
        return function(t) {
            const {x, y} = path.getPointAtLength(t * length);
            const xscale = data[0] + xDiff*t;
            const yscale = data[2] + yDiff*t;
            const angle = data[4] + angleDiff*t;

            return `translate(${x},${y}) scale(${xscale}, ${yscale}) rotate(${angle})`;
        }
    }
}