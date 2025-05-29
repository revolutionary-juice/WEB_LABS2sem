document.addEventListener("DOMContentLoaded", function () {
    const width = 800;
    const height = 580;
    d3.select("svg")
        .attr("width", width)
        .attr("height", height);

    
    const animTypeSelect = document.createElement("select");
    animTypeSelect.id = "animType";

    const types = ["linear", "elastic", "bounce"];
    types.forEach(type => {
        const option = document.createElement("option");
        option.value = type;
        option.textContent = type;
        animTypeSelect.appendChild(option);
    });

    document.body.insertBefore(animTypeSelect, document.querySelector("svg"));
})

let runAnimation = (dataForm) => {
    const svg = d3.select("svg")
    let pict = drawSteve(svg);

    let path = drawPath("red");
    let data = [+dataForm.xscale.value, +dataForm.xscaleEnd.value,
    +dataForm.yscale.value, +dataForm.yscaleEnd.value,
    +dataForm.angle.value, +dataForm.angleEnd.value];

    const animType = document.getElementById("animType").value;
    let easeFunc;

    
    switch (animType) {
        case "linear":
            easeFunc = d3.easeLinear;
            break;
        case "elastic":
            easeFunc = d3.easeElastic;
            break;
        case "bounce":
            easeFunc = d3.easeBounce;
            break;
        default:
            easeFunc = d3.easeLinear;
    }

    pict.transition()
        .ease(easeFunc) 
        .duration(dataForm.animTime.value)
        .attrTween('transform', translateAlong(path.node(), dataForm.animTime.value, data));
}

let clearForm = (dataForm) => {
    dataForm.animTime.value = 2000;

    dataForm.xscale.value = 1;
    dataForm.yscale.value = 1;
    dataForm.xscaleEnd.value = 1;
    dataForm.yscaleEnd.value = 1;

    dataForm.angle.value = 0;
    dataForm.angleEnd.value = 0;

    d3.select("svg").selectAll('*').remove();
}