const todoForm = document.querySelector('#my-form');
const todo = document.querySelector('#todo');
const tdDate = document.querySelector('#date');
const ul = document.querySelector('#todos');
const msg = document.querySelector('.msg');

todoForm.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();

    if(todo.value === '' || tdDate.value === ''){
        msg.classList.add('error');
        msg.innerHTML = "What do you intend to do? choose a date";
        setTimeout(function(){
            msg.remove();
        }, 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(todo.value + " : " + tdDate.value));
        ul.appendChild(li);

        todo.value = '';
        tdDate.value = '';
    }
}
