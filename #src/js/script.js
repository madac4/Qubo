@@include('fslightbox.js');
@@include('slider.js');

const searchForm = document.querySelector('.search-form');
if(searchForm){
    const inputField = document.querySelector('.search-input');
    const dropdown = document.querySelector('.search-value__list');
    const dropdownArray = [... dropdown.querySelectorAll('li')];
    
    let valueArray = [];
    dropdownArray.forEach(item => {
      valueArray.push(item.textContent);
    });
    
    const closeDropdown = () => {
      dropdown.classList.remove('open');
    }
    
    inputField.addEventListener('input', () => {
      dropdown.classList.add('open');
      let inputValue = inputField.value.toLowerCase();
      if (inputValue.length > 0) {
        for (let j = 0; j < valueArray.length; j++) {
          if (!(inputValue.substring(0, inputValue.length) === valueArray[j].substring(0, inputValue.length).toLowerCase())) {
            dropdownArray[j].classList.add('closed');
          } else {
            dropdownArray[j].classList.remove('closed');
          }
        }
      } else {
        for (let i = 0; i < dropdownArray.length; i++) {
          dropdownArray[i].classList.remove('closed');
        }
      }
    });
    
    dropdownArray.forEach(item => {
      item.addEventListener('click', () => {
        inputField.value = item.textContent;
        dropdownArray.forEach(dropdown => {
          dropdown.classList.add('closed');
        });
      });
    })
    
    inputField.addEventListener('focus', () => {
       inputField.placeholder = 'Scrie pentru a filtra';
       dropdown.classList.add('open');
       dropdownArray.forEach(dropdown => {
         dropdown.classList.remove('closed');
       });
    });
    
    inputField.addEventListener('blur', () => {
       inputField.placeholder = 'Scie sau alege raionul/orasul tau';
      dropdown.classList.remove('open');
    });
    
    document.addEventListener('click', (evt) => {
      const isDropdown = dropdown.contains(evt.target);
      const isInput = inputField.contains(evt.target);
      if (!isDropdown && !isInput) {
        dropdown.classList.remove('open');
      }
    });
}

const header = document.querySelector('header');

if (header) {
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.header-navbar');
    burger.addEventListener('click', () =>{
        burger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('lock');
    })
}

const specialSearch = document.querySelector('.hero-section__search');
if (specialSearch) {
    const mobileSearch = document.querySelector('.mobile-search');
    const heroContainer = document.querySelector('.hero-container');
    window.addEventListener('resize', () =>{
        const pageW = window.innerWidth;
        if(pageW <= 768){
            mobileSearch.appendChild(specialSearch);
        }else{
            heroContainer.appendChild(specialSearch);
        }
    })
}