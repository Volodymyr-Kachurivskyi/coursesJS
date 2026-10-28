const dataObj = {
    npp: NPP,
    methodical: METHODICAL,
    development: DEVELOPMENT,
    articles: ARTICLES,
    thesis: THESIS,
    refmethod: REFMETHOD
};

const name_table = {
    npp: "Склад кафедри",
    methodical: "Методичні розробки",
    development: "Підвищення кваліфікації",
    articles: "Наукові статті",
    thesis: "Тези конференцій",
    refmethod: "Види методичок"
};
// поля для перевірки звязків
const dataListObj = {
    npp: ["id_dep", "position"],
    articles: ["title_journal"],
    thesis: ["title_conf", "location"],
    development: ["title_qualification", "place", "type of raise", "id_npp"],
    methodical: ["id_type"],
    refmethod: []
};
// підписи полів до таблиць
const aliasTitle = {
    npp: {
        id_npp: "ID",
        last_name: "Прізвище",
        first_name: "Ім'я",
        patronymic_name: "По батькові",
        id_dep: "Код кафедри",
        position: "Посада",
    },
    articles: {
        id_article: "ID",
        title_article: "Назва статті",
        title_journal: "Видання",
        publishing_date: "Дата",
        page_from: "Початкова сторінка",
        page_to: "Кінцева сторінка",
        all_authors: "Автори",
    },
    methodical: {
        id_list_edition: "ID",
        author: "Автор",
        name_edition: "Назва видання",
        id_type: "Категорія",
        sum_page: "К-сть стрінок",
    },
    development: {
        id_qualification: "ID",
        id_npp: "ID НПП",
        title_qualification: "Тема підвищення кваліфікації",
        place: "Установа",
        count_of_hours: "Годин",
        issued_date: "Дата",
        "type of raise": "Категорія",

    },
    thesis: {
        id_thesis: "ID",
        title_thesis: "Назва тез",
        title_conf: "Назва коференції",
        date_conf: "Дата проведення",
        location: "Локація",
        date_issued: "Дата опублікування",
        all_authors: "Автори",
    },
    refmethod: {
        id_type: "Ідентифікатор",
        note: "Тип методичного видання",
    },

};
// формування константи первиних ключів по усіх обєктах
// для заборони редагування
const banEdit = {};
for (const [name, val] of Object.entries(dataObj)) {
    let firstKey = Object.keys(val[0])[0];
    banEdit[name] = firstKey;
}
