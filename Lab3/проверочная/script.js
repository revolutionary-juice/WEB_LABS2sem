// ������� ������ �������� DOM
document.addEventListener('DOMContentLoaded', function () {
    // �������� ������ � ������� D3.js
    const extractBtn = d3.select('#extractBtn');

    // ��������� ���������� ������� �����
    extractBtn.on('click', function () {
        // ���������, �� ��� �� ��� �������� ����� � �������
        if (d3.select('.languages-list').empty()) {
            // �������� ��� ������ ������ div � ������� content
            const languages = d3.selectAll('.content p')
                .nodes()
                .map(p => d3.select(p).text().split(' ')[0]);

            // ������� ����� ����� � ������� ����� ������
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