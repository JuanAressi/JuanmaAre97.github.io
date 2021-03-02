// Arrays
let foods = [];

let persons = [];

// Event listeners
document.getElementById('btnAñadirPago').addEventListener('click', actualizaModal);
document.getElementById('addFoodToList').addEventListener('click', añadirComida);
document.getElementById('addPersonToList').addEventListener('click', añadirPersona);
document.getElementById('calcuarTotal').addEventListener('click', calcuarTotal);
document.getElementById('btnEliminarPago').addEventListener('click', eliminarPago);
document.querySelector('table').addEventListener('click', modidicarComida);

$('#foodModal').on('hidden.bs.modal', function() {
    // Reset modal
    resetModal(document.querySelector('#foodModal'));
});

$('#foodModal').on('show.bs.modal', function() {
    $('#foodModal').modal('hide');
    // Replace heading and button
    replace('foodEditTitle', 'foodAddTitle');
    replace('actualizarFood', 'addFoodToList');

    // Fill select
    fillSelect();
});

$('#personModal').on('show.bs.modal', function() {
    // Replace heading and button
    replace('personEditTitle', 'personAddTitle');
    replace('actualizarPerson', 'addPersonToList');
    document.getElementById('personName').value = '';

    // Reset modal
    resetModal(document.querySelector('#personModal'));
});

$('#addFoodBtn').on('click', function() {
    // Check if is at least 1 people added 
    if (persons.length == 0) {
        document.getElementById('btnEliminar').style.display = "none";

        errorModal('Debes agregar al menos una persona para añadir comidas', 0);
    } else {
        $('#foodModal').modal('show');
    }
});


// Functions
// Actualizar foodModal
function actualizaModal() {
    // Check how many input-groups are
    const form = document.querySelector('.whoPaid-form');
    const countForm = form.querySelectorAll('.who-paid');

    if (countForm.length >= persons.length) {
        invalidFeedback('.who-paid-div', 'No es posible seguir agregando gente')
    } else {
        // Create new row element
        let whoPaidDiv = document.createElement('div');
        whoPaidDiv.className = 'd-flex mb-3 who-paid';
        whoPaidDiv.innerHTML = `
            <div class="input-group input-group-lg">
                <div class="input-group-prepend">
                    <span class="input-group-text">
                        <i class="fas fa-user"></i>
                    </span>
                </div>
                <select name="person" class="form-control select"></select>  
                <small class="invalid-feedback">El campo no puede estar vacío</small>
            </div>
                
            <div class="input-group input-group-lg">
                <div class="input-group-prepend ml-4">
                    <span class="input-group-text">
                        <i class="fas fa-dollar-sign"></i>
                    </span>
                </div>
                <input type="number" class="form-control" placeholder="Cuanto pagó"> 
                <small class="invalid-feedback ml-4">El campo no puede estar vacío</small>     
            </div>
        `;    

        // Append
        form.appendChild(whoPaidDiv);
        
        updateRemoveButton();       

        fillSelect();
    }    
}

// Añadir persona
function añadirPersona() {
    const personName = document.getElementById('personName');

    // Check if empty inputs
    if (personName.value === '') {
        checkEmpty(personName, '');
    } else {        
        // Create new object
        let person = new Object();

        // Save values
        person.name = personName.value;
        persons.push(person);

        // Update UI
        let tr = document.querySelector('thead').firstElementChild;
        const total = document.querySelector('.text-right');
        let newTh = document.createElement('th');
        newTh.classList = 'elements';
        newTh.innerHTML += `
            <th>
                ${person.name}    

                <a href="#">
                    <i class="fas fa-pencil text-primary edit-person"></i>
                </a>
                <a href="#">
                    <i class="fas fa-trash text-danger delete-person"></i>
                </a>
            </th>
        `;

        // Append
        tr.insertBefore(newTh, total);

        // Check for new user
        if (foods.length > 0) {
            const tbody = document.querySelector('tbody');
            const allTr = document.querySelectorAll('tr');

            for (let i = 0; i < foods.length; i++) {
                const lastElement = allTr[i+1].querySelector('.text-right');

                let th = document.createElement('th');
                th.innerHTML = `
                    <input type="checkbox">
                `;

                allTr[i+1].insertBefore(th, lastElement);
            }
        }
    
        // Assign new th if btnCalcular was pressed
        if (document.querySelector('.separator')) {
            const th = document.querySelector('thead').querySelectorAll('th');
            const thTotal = document.querySelector('.totals').querySelectorAll('th');
            let tr = document.querySelectorAll('tr');

            if (th.length > thTotal.length) {
                for (let i = tr.length; i > (tr.length - 4); i --) {
                    tr[i-1].innerHTML += '<th></th>';
                }
            }
        }

        // Close Modal
        $('#personModal').modal('hide');

        // Reset normal inputs 
        resetInputs(document.querySelector('#personModal'), true);
    }
}


// Añadir comida
function añadirComida() {
    const foodName = document.querySelector('#foodName');
    const foodPrice = document.querySelector('#foodPrice');

    let whoPaid = document.querySelectorAll('.who-paid');
    let select = whoPaid[0].querySelector('select');
    let input = whoPaid[0].querySelector('input');

    // Check if empty inputs
    if (foodName.value == '' || foodPrice.value == '' || select.value == 'Seleccione' || input.value == '') {
        checkEmpty(foodName, '');
        checkEmpty(foodPrice, '');

        whoPaid.forEach(function(item) {
            select = item.querySelector('select');
            input = item.querySelector('input');

            checkEmpty(select, 'Seleccione');
            checkEmpty(input, '');
        })

    } else {
        resetInputs(document.querySelector('#foodModal'), false);

        const whoPaid = document.querySelector('.whoPaid-form').querySelectorAll('input');
        let total = 0;

        for (let i = 0; i < whoPaid.length; i++) {
            total = total + parseFloat(whoPaid[i].value);
        }

        if (parseFloat(foodPrice.value) != parseFloat(total)) {


            whoPaid.forEach(function(item) {
                checkSum(item, 'La suma debe ser igual al total', true);
            })
        } else {            
            whoPaid.forEach(function(item) {
                checkSum(item, 'El campo no puede estar vacío', false);
            })

            // Create new object
            let food = new Object();

            // Save values
            food.name = foodName.value;
            food.price = parseFloat(foodPrice.value);

            let whoPaidArray = [];
            let whoPaidList = document.querySelectorAll('.who-paid');

            for (let i = 0; i < whoPaidList.length; i++) {
                if (whoPaidList[i] != 'Seleccione') {
                    let whoPaidObject = new Object();

                    whoPaidObject.name = whoPaidList[i].querySelector('select').value;
                    whoPaidObject.howMuch = parseFloat(whoPaidList[i].querySelector('input').value);
                    
                    whoPaidArray.push(whoPaidObject);
                }
            }

            food.whoPaid = whoPaidArray;
            foods.push(food);

            // Update UI
            let newTr = document.createElement('tr');
            newTr.innerHTML += `
                <th scope="row" class="elements">
                    ${food.name}
                    
                    <a href="#">
                        <i class="fas fa-pencil text-primary edit-food"></i>
                    </a>
                    <a href="#">
                        <i class="fas fa-trash text-danger delete-food"></i>
                    </a>
                </th>
            `;

            // Add checkbox for each person
            for (let i = 0; i < persons.length; i++) {
                newTr.innerHTML += `  
                    <th><input type="checkbox"></th>
                `;
            }

            newTr.innerHTML += `  
                <th class="text-right">$${food.price}</th>
                <th class="text-right"></th>
            `;

            // Append
            const tbody = document.querySelector('tbody');

            if (tbody.querySelector('.separator')) {
                tbody.insertBefore(newTr ,tbody.querySelector('.separator'));
            } else {
                tbody.appendChild(newTr);
            }
            
            // Close Modal
            $('#foodModal').modal('hide');

            // Reset normal inputs
            resetInputs(document.querySelector('#foodModal'), true);
        }
    }
}


// Calcular Total
function calcuarTotal() {
    if (persons.length == 0) {
        errorModal('Debes agregar al menos una persona para calcular el total', 0);
    } else if (foods.length == 0) {
        errorModal('Debes agregar al menos una comida para calcular el total', 0);
    } else {
        const tbody = document.querySelector('tbody');    
        let tr = tbody.querySelectorAll('tr');    
        const th = document.querySelector('thead').querySelectorAll('th');

        for (let i = 0; i < foods.length; i++) {
            let counter = 0;

            for (let j = 0; j < (th.length - 3); j++) {
                if (tr[i].querySelectorAll('input')[j].checked) {
                    counter = counter + 1;
                }

                tr[i].lastElementChild.innerHTML = `$${((parseInt(tr[i].lastElementChild.previousElementSibling.innerHTML.slice(1))) / counter).toFixed(2)}`;
            }
        }


        // Create table row for total for each one
        let separator = document.createElement('tr');
        let totals = document.createElement('tr');
        let spentTr = document.createElement('tr');
        let differenceTr = document.createElement('tr');

        if (document.querySelector('.separator') == null) {
            for (let i = 0; i < th.length; i++) {
                separator.innerHTML += `<th></th>`;
                totals.innerHTML += `<th></th>`;
                spentTr.innerHTML += `<th></th>`;
                differenceTr.innerHTML += `<th></th>`;
            } 
            
            separator.className = 'separator';
            totals.className = 'totals';
            spentTr.className = 'spent';
            differenceTr.className = 'difference';
            
            tbody.appendChild(separator);
        } else {
            totals = document.querySelector('.totals');
            spentTr = document.querySelector('.spent');
            differenceTr = document.querySelector('.difference');
        }

        // Calculate
        for (let i = 0; i < persons.length; i++) {
            let total = 0;
            let spent = 0;

            for (let j = 0; j < foods.length; j++) {
                if (tr[j].querySelectorAll('input')[i].checked == true) {
                    total = total + parseFloat((tr[j].lastElementChild.innerHTML).slice(1));
                }

                for (let k = 0; k < foods[j].whoPaid.length; k++){
                    if (foods[j].whoPaid[k].name == persons[i].name){
                        spent = spent + parseFloat(foods[j].whoPaid[k].howMuch);
                    } 
                }

                // Create atributes
                let title = document.createAttribute('title');

                let difference = (total - spent).toFixed(2);

                if (difference > 0) {
                    differenceTr.querySelectorAll('th')[i+1].style.color = "red";
                    title.innerHTML = "A pagar";
                } else {
                    differenceTr.querySelectorAll('th')[i+1].style.color = "green";
                    title.innerHTML = "A cobrar"; 
                    if (difference < 0) {
                        difference = difference.toString().slice(1);
                    }
                }
                
                // Append data  
                totals.querySelectorAll('th')[0].innerHTML = 'Total a pagar';
                totals.querySelectorAll('th')[i+1].innerHTML = `$${total.toFixed(2)}`;

                spentTr.querySelectorAll('th')[0].innerHTML = 'Total pagado';
                spentTr.querySelectorAll('th')[i+1].innerHTML = `$${spent.toFixed(2)}`;

                differenceTr.querySelectorAll('th')[0].innerHTML = 'Diferencia';
                differenceTr.querySelectorAll('th')[i+1].innerHTML = `$${difference}`;
                differenceTr.querySelectorAll('th')[i+1].setAttribute("data-toggle", "tooltip");
                differenceTr.querySelectorAll('th')[i+1].setAttribute("data-placement", "bottom");
                differenceTr.querySelectorAll('th')[i+1].setAttribute("title", title.innerHTML);
            }
        }

        tbody.appendChild(totals);
        tbody.appendChild(spentTr);
        tbody.appendChild(differenceTr);
    }
}


// Modificar y eliminar
function modidicarComida(e) {
     // Event Delegation - Eliminar Comida
    if (e.target.classList.contains('delete-food')) {
        const foodName = e.target.parentNode.parentNode.innerText;

        errorModal(`¿Estás seguro que deseas eliminar "${foodName}"`, 1);        

        document.getElementById('errorModal').querySelector('.btn-danger').onclick = function() {
            // Update UI
            e.target.parentNode.parentNode.parentNode.remove();

            // Update array
            for (let i = 0; i < foods.length; i++) {
                if (foods[i].name == foodName) {
                    foods.splice(i, 1);
                    break;
                }
            }

            // Close errorModal
            $('#errorModal').modal('hide');    
        };
    }
    
    // Event Delegation - Modificar Comida
    if (e.target.classList.contains('edit-food')) {
        let foodName = e.target.parentNode.parentNode.innerText;

        for (let i = 0; i < foods.length; i++) {
            if (foods[i].name == foodName) {
                // Show modal
                $('#foodModal').modal('show');

                // Food form
                const foodForm = document.querySelector('.food-form');
                foodForm.querySelectorAll('input')[0].value = foods[i].name;
                foodForm.querySelectorAll('input')[1].value = foods[i].price;


                // Who Paid form
                for (let j = 0; j < (foods[i].whoPaid.length - 1); j++) {
                    actualizaModal();
                }

                for (let j = 0; j < foods[i].whoPaid.length; j++) {
                    document.querySelectorAll('.who-paid')[j].querySelector('select').value = foods[i].whoPaid[j].name;
                    document.querySelectorAll('.who-paid')[j].querySelector('input').value = foods[i].whoPaid[j].howMuch;
                }

                // Replace heading and button
                replace('foodAddTitle', 'foodEditTitle');
                replace('addFoodToList', 'actualizarFood');

                // Actualizar comida
                document.getElementById('actualizarFood').addEventListener('click', function() {
                    foods[i].name = foodForm.querySelectorAll('input')[0].value;
                    foods[i].price = parseFloat(foodForm.querySelectorAll('input')[1].value);

                    const whoPaid = document.querySelectorAll('.who-paid');
                    foods[i].whoPaid = [];
                    let whoPaidArray = [];

                    for (let j = 0; j < whoPaid.length; j++) {
                        // Set whoPaid array empty

                        if (whoPaid[j].querySelector('select').value != 'Seleccione') {
                            let whoPaidObject = new Object();

                            whoPaidObject.name = whoPaid[j].querySelector('select').value;
                            whoPaidObject.howMuch = parseFloat(whoPaid[j].querySelector('input').value);

                            foods[i].whoPaid.push(whoPaidObject)
                        }
                    } 

                    // Close Modal
                    $('#foodModal').modal('hide');

                    // Refresh name in table
                    e.target.parentNode.parentNode.innerHTML = `
                        ${foods[i].name}
                        <a href="#">
                            <i class="fas fa-pencil text-primary edit-food"></i>
                        </a>
                        <a href="#">
                            <i class="fas fa-trash text-danger edit-food"></i>
                        </a>
                    `;
                });
                break;
            }
        }
    }

    // Event Delegation - Eliminar Persona
    if (e.target.classList.contains('delete-person')) {
        const personName = e.target.parentNode.parentNode.innerText.replace(/\s/g, '');
        
        replace('labelAdd', 'labelDelete');
        document.getElementById('btnEliminar').style.display = "inline-block";

        errorModal(`¿Estás seguro que deseas eliminar a "${personName}"?`, 1);

        document.getElementById('errorModal').querySelector('.btn-danger').onclick = function() {
            // Update UI
            e.target.parentNode.parentNode.remove();
            const tr = document.querySelector('tbody').querySelectorAll('tr');
            var position = 0;

            for (let i = 0; i < persons.length; i++) {
                if (persons[i].name == personName) {
                    persons.splice(i, 1);
                    position = i;
                    break
                }
            }

            for (let i = 0; i < tr.length; i++) {
                tr[i].children[(position + 1)].remove();
            }

            // Close errorModal
            $('#errorModal').modal('hide');    
        };
    }

    
    // Event Delegation - Modificar Persona
    if (e.target.classList.contains('edit-person')) {
        const personName = e.target.parentNode.parentNode.innerText.replace(/\s/g, '');

        for (let i = 0; i < persons.length; i++) {
            if (persons[i].name == personName) {
                // Show modal
                $('#personModal').modal('show');

                // Upload info
                document.querySelector('.person-form').querySelector('input').value = persons[i].name;

                // Replace heading and button
                replace('personAddTitle', 'personEditTitle');
                replace('addPersonToList', 'actualizarPerson');

                document.getElementById('actualizarPerson').addEventListener('click', function() {
                    document.querySelector('tr').querySelectorAll('th')[i+1].innerHTML = `
                    ${document.getElementById('personModal').querySelector('input').value}
                    
                    <a href="#">
                        <i class="fas fa-pencil text-primary edit-person"></i>
                    </a>
                    <a href="#">
                        <i class="fas fa-trash text-danger delete-person"></i>
                    </a>
                    `;
                    
                    // Update persons array
                    persons[i].name = document.querySelector('.person-form').querySelector('input').value;

                    // Update foods array
                    if (foods.length > 0) {
                        for (let j = 0; j < foods.length; j++) {
                            for (let k = 0; k < foods[j].whoPaid.length; k++) {
                                if (foods[j].whoPaid[k].name == personName) {
                                    foods[j].whoPaid[k].name = document.querySelector('.person-form').querySelector('input').value;
                                }
                            }
                        }
                    }
                    
                    // Hide modal
                    $('#personModal').modal('hide');
                });

                break
            }
        }
    }
}


// Replace button
function replace(idHide, idShow) {
    if (document.getElementById(idHide)) {
        document.getElementById(idHide).style.display = "none";
        document.getElementById(idShow).style.display = "inline-block";
    }
}


// Eliminar pago
function eliminarPago() {
    document.querySelector('#foodModal').querySelector('.whoPaid-form').lastElementChild.remove();
    updateRemoveButton();
}


// Check if item is equal to msg
function checkEmpty(item, message) {
    if (item.value == message) {
        item.className = 'form-control is-invalid';
    } else {
        item.className = 'form-control'
    }
}


// Check if total is equal to sum 
function checkSum(item, message, val) {
    if (val) {
        item.className = "form-control is-invalid";
        item.nextElementSibling.innerHTML = message;
        item.nextElementSibling.className = 'invalid-feedback ml-4';
    } else {
        item.nextElementSibling.innerHTML = message;
    }
}


// Reset inputs to normal
function resetInputs(modal, bool) {
    modal.querySelectorAll('input').forEach(function(input) {
        input.className = "form-control";

        if (bool) {
            input.value = '';
        }
    });
} 


// Reset modal inputs
function resetModal(modal) {
    // Reset inputs
    modal.querySelectorAll('input').forEach(function(input) {
        input.value = "";
        input.className = "form-control";
    });

    // Reset select only if is foodModal
    if (modal.id == 'foodModal') {
        // Turn off btnEliminarPago
        document.getElementById('btnEliminarPago').style.display = "none";

        // Reset select
        const selectLength = modal.querySelectorAll('select').length;
    
        if (selectLength > 1) {  
            for (let i = 0; i < (selectLength - 1); i++) {
                modal.querySelector('.whoPaid-form').lastElementChild.remove();
            }
        }
    
        modal.querySelector('select').value = "Seleccione";
        modal.querySelector('select').className = "form-control";
    }
}


// Update remove button
function updateRemoveButton() {
    // Check and display minus button
    if (document.querySelectorAll('.who-paid').length > 1) {
        document.querySelector('#btnEliminarPago').style.display = "inline-block";
    } else {
        document.querySelector('#btnEliminarPago').style.display = "none";
    }
}


// Fill select in food modal
function fillSelect() {
    const select = document.querySelector('.whoPaid-form').querySelectorAll('select');

    for (let i = 0; i < select.length; i++) {
        if (persons.length >= (select[i].childElementCount - 1)) {
            select[i].innerHTML = '<option selected disabled value="Seleccione">Seleccione</option>';
    
            for (let j = 0; j < persons.length; j++) {
                select[i].innerHTML += `<option value="${persons[j].name}">${persons[j].name}</option>`;            
            }
        }
    }
}


// Error Modal
function errorModal(message, buttonOn) {
    document.getElementById('errorModal').querySelector('.modal-title').innerHTML = message;

    if (buttonOn == 0) {
        document.getElementById('btnEliminar').style.display = "none";
    } else {
        document.getElementById('btnEliminar').style.display = "inline-block";
    }

    $('#errorModal').modal('show');
}


// Invalid Feedback
function invalidFeedback(father, msg) {
    let small = document.querySelector(`${father}`).querySelector('small');

    small.innerHTML = msg;
    small.style.display = "flex";

    setTimeout(function() {
        small.innerHTML = msg;
        small.style.display = "none";
    }, 3000);
}