
function drawSteve(svg) {
    const centerX = 150; // центр SVG (300 / 2)
    const centerY = 150; // центр SVG (300 / 2)
    
    let pict = svg.append("g")
        .attr("transform", `translate(${centerX}, ${centerY})`)
        .style("stroke", "black")
        .style("stroke-width", 1);
    

    // Основание дома (прямоугольник)
    pict.append("rect")
        .attr("x", -50)  // сдвиг на половину ширины (100 / 2)
        .attr("y", -50)   // сдвиг на половину высоты (100 / 2)
        .attr("width", 100)
        .attr("height", 100)
        .attr("fill", "lightgray")
        .attr("stroke", "black");

    // Крыша (треугольник)
    pict.append("polygon")
        .attr("points", "-50,-50 0,-100 50,-50")  // смещаем относительно центра
        .attr("fill", "brown")
        .attr("stroke", "black");

    // Дверь (прямоугольник)
    pict.append("rect")
        .attr("x", -20)  // 130 - 150 (центр) = -20
        .attr("y", 0)    // 200 - 150 (центр) = 50, но основание дома уже сдвинуто
        .attr("width", 20)
        .attr("height", 50)
        .attr("fill", "darkred")
        .attr("stroke", "black");

    // Окно (квадрат с перекрестием)
    pict.append("rect")
        .attr("x", 10)   // 160 - 150 = 10
        .attr("y", -30)  // 170 - 150 = 20, но основание сдвинуто на -50
        .attr("width", 30)
        .attr("height", 30)
        .attr("fill", "lightblue")
        .attr("stroke", "black");

    // Горизонтальная линия окна
    pict.append("line")
        .attr("x1", 10)
        .attr("y1", -15)  // 185 - 150 - 50 = -15
        .attr("x2", 40)
        .attr("y2", -15)
        .attr("stroke", "black");

    // Вертикальная линия окна
    pict.append("line")
        .attr("x1", 25)
        .attr("y1", -30)
        .attr("x2", 25)
        .attr("y2", 0)
        .attr("stroke", "black");

    // Труба (прямоугольник)
    pict.append("rect")
        .attr("x", 20)   // 170 - 150 = 20
        .attr("y", -80)  // 120 - 150 - 50 = -80
        .attr("width", 15)
        .attr("height", 30)
        .attr("fill", "darkgray")
        .attr("stroke", "black");

    // Дым (3 круга)
    pict.append("circle")
        .attr("cx", 28)   // 178 - 150 = 28
        .attr("cy", -100) // 100 - 150 - 50 = -100
        .attr("r", 5)
        .attr("fill", "rgba(200, 200, 200, 0.7)")
        .attr("stroke", "rgba(150, 150, 150, 0.5)");

    pict.append("circle")
        .attr("cx", 33)   // 183 - 150 = 33
        .attr("cy", -110) // 90 - 150 - 50 = -110
        .attr("r", 7)
        .attr("fill", "rgba(220, 220, 220, 0.5)")
        .attr("stroke", "rgba(180, 180, 180, 0.3)");

    pict.append("circle")
        .attr("cx", 23)   // 173 - 150 = 23
        .attr("cy", -120) // 80 - 150 - 50 = -120
        .attr("r", 4)
        .attr("fill", "rgba(210, 210, 210, 0.4)")
        .attr("stroke", "rgba(160, 160, 160, 0.2)");

    return pict;
}