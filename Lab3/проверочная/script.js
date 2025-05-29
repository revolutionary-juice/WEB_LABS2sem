// Ожидаем полной загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
    // Выбираем кнопку с помощью D3.js
    const extractBtn = d3.select('#extractBtn');

    // Добавляем обработчик события клика
    extractBtn.on('click', function () {
        // Проверяем, не был ли уже добавлен абзац с языками
        if (d3.select('.languages-list').empty()) {
            // Выбираем все абзацы внутри div с классом content
            const languages = d3.selectAll('.content p')
                .nodes()
                .map(p => d3.select(p).text().split(' ')[0]);

            // Создаем новый абзац с языками через пробел
            d3.select('.content')
                .insert('p', 'h2:last-of-type')
                .attr('class', 'languages-list')
                .text(languages.join(' '))
                .style('font-weight', 'bold')
                .style('color', '#e74c3c')
                .style('padding', '10px')
                .style('background-color', '#fdebd0')
                .style('border-radius', '4px');
        }
    });
});