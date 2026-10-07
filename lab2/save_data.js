function save_data(){
    let item={};
    const id_form = document.querySelector('#modal form').id;
    const form_inputs = document.querySelectorAll('#'+id_form+' input');
    form_inputs.forEach(input => {
        item[input.id] = input.value;
        //console.log(input.value, input.id);
    });
    console.log("Новий обєкт",item);
    data[id_form].push(item);
    console.log(data[id_form]);
    closeModal();
    construction_table(data[id_form],id_form,block="report");
}