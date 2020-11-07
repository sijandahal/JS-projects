
window.onload = function () {
  const button = document.querySelector('.add');
  const clear = document.querySelector('.clear');
  const input = document.querySelector('#input-field');
  const form = document.querySelector('.form');
  const list = document.querySelector('.todo__list');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value === '') {
      alert('Please enter value');
    }
    else {
      console.log(input.value);
      list.innerHTML += `
        <li class="items">
          <span class="text">${input.value}</span>
          <div class="buttons">
          <button class="check"><i class="fas fa-check"></i></button>
          <button class="delete"><i class="fas fa-times"></i></button>
          <button class="edit"><i class="fas fa-pen"></i></button>
        </div>
        </li>`
    }
    form.reset();
  })


  button.addEventListener('click', function (e) {
    if (input.value === '') {
      alert('Please enter value');
    }
    else {
      console.log(input.value);
      list.innerHTML += `
        <li class="items">
          <span class="text">${input.value}</span>
          <div class="buttons">
          <button class="check"><i class="fas fa-check"></i></button>
          <button class="delete"><i class="fas fa-times"></i></button>
        </div>
        </li>`
    }

    input.value = '';
  })
  clear.addEventListener('click', function () {
    list.innerHTML = '';
    form.reset();
  });

  //delete element function
  //event listner to the list

  list.addEventListener('click', function (e) {
    const text = document.getElementsByClassName('text');
    target = e.target;
    console.log(target);
    if (target.classList.contains('delete')) {
      const deleteParent = target.parentElement;
      const mainParent = deleteParent.parentElement;
      mainParent.remove();
    }
    if (target.classList[0] === 'check') {
      const deleteParent = target.parentElement;
      const mainParent = deleteParent.parentElement;
      console.log(mainParent);
      mainParent.classList.toggle('line-through');
    }
  })
}







