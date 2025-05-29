document.getElementById("swapButton").addEventListener("click", function () {
    changeTable("test");
});

function changeTable(tableId) {
    let table = document.getElementById(tableId);
    if (!table) return;

    for (let row of table.rows) {
        let cells = row.cells;
        if (cells.length > 1) {
            let first = cells[0].innerHTML;
            let last = cells[cells.length - 1].innerHTML;

            cells[0].innerHTML = last;
            cells[cells.length - 1].innerHTML = first;
        }
    }
}
