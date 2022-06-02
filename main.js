const ListContent = document.getElementById('list-content');
const FieldInput = document.getElementById('field_input');


FieldInput.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        e.preventDefault()
        if (e.target.value == 0) {
            alert('Digite a tarefa!')
        } else {
            let itemList = document.createElement('li');
            let itemTask = document.createElement('p');
            let buttonCheck = document.createElement('button');
            let buttonDelete = document.createElement('button');
            let containerBtns = document.createElement('div');

            itemTask.innerHTML = FieldInput.value;
            buttonCheck.innerHTML = '<i class="fas fa-check"></i>';
            buttonDelete.innerHTML = '<i class="fas fa-trash"></i>';

            containerBtns.appendChild(buttonCheck);
            containerBtns.appendChild(buttonDelete);

            itemList.appendChild(itemTask);
            itemList.appendChild(containerBtns);

            ListContent.appendChild(itemList);

            buttonCheck.addEventListener('click', checkTask);
            buttonDelete.addEventListener('click', deleteTask);

            FieldInput.value = '';

            function checkTask() {
                itemTask.parentElement
                itemTask.classList.toggle('textChecked')
            }

            function deleteTask() {
                itemTask.parentElement
                itemList.remove();
            }
        }
    }
})




