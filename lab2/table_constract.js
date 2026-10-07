function construction_table(data,name,block="report"){
    
    let table_structure =`<table id ="${name}" class="table table-striped">`;
    let title = data[0];
    // формування шапки таблиці
    let table_head = `<thead><tr>`
    Object.keys(title).forEach(key => {
    table_head += `<th> ${key} </th>`;
        //console.log(key);
        
    });   
    table_head +=`</tr></thead>`
    table_structure +=table_head;
    // формування тіла таблиці
    let table_body =``;
    data.forEach(person => {
        let person_row = `<tr>`;
        Object.values(person).forEach(value => {
            person_row +=`<td> ${value} </td>`;
        });
        person_row += `</tr>`;
        table_body +=person_row;
    });
    table_structure+=table_body+'</table';

    const mytable = document.getElementById(block);
    mytable.innerHTML = table_structure;

}
