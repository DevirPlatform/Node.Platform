exports = $data.Entity.extend("colleges._ClientJoinedAndAggregated", {

    Лицевой_счет : {type: "string"},
    Номер : {type: "int"},
    Наименование : {type: "string"},
    БИН : {type: "string"},
    РНН : {type: "string"},
    Адрес : {type: "string"},
    Период : {type: "string"},
    Наличие_счетчиков : {type: "string"},
    Процент_воды : {type: "number"},
    Процент_канализации : {type: "number"},
    Номер_счетчика : {type: "string"},
    Номер_пломбы : {type: "string"},
    Статус_счетчика : {type: "string"},
    Текущие_показания : {type: "number"},
    Дата_текущего_показания : {type: "date"},
    Проблема_счетчика : {type: "string"},
    Описание_проблемы_счетчика : {type: "string"},
    Предыдущие_показания : {type: "number"},
    Дата_предыдущего_показания : {type: "date"},
    Расчет_по_среднему : {type: "string"},
    Имя_контролера : {type: "string"},
    Код_контролера : {type: "string"},
    Тип_потребителя : {type: "string"},
    Тариф_потребителя : {type: "string"},
    Тариф_воды : {type: "number"},
    Тариф_канализации : {type: "number"},
    Дата_начала_действия_тарифа : {type: "date"}
});