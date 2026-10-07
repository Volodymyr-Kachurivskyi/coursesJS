const data = {
    npp: NPP,
    methodical:METHODICAL,
    development: DEVELOPMENT,
    articles: ARTICLES,
    thesis: THESIS
    };
const tabs = document.querySelectorAll('.tab');
const report = document.getElementById('report');
tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            report.textContent = `Ви натиснули tab: ${this.id}`;
            construction_table(data[this.id],this.id);
        });
    });
