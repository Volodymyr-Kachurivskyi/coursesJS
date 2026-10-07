function create_form(name){
console.log("Дані фунції create_form",name);
let form_structure =`<form id ="${name}" name="${name}">`;
    let title = data[name][0];
    // формування input
    
    Object.keys(title).forEach(key => {
    form_structure +=` 
     <div class="mb-3">
  <label for="${key}" class="form-label">${key}</label>
  <input type="text" class="form-control" id="${key}" name="${key}">
   </div>`
        
    });   
form_structure+='</form>';
  const content = document.getElementById('modal_content');
  content.innerHTML=form_structure;
}
