@@include('fslightbox.js');
@@include('slider.js');

const searchForm = document.querySelector('.hero-section__form');
if(searchForm){
    const inputField = searchForm.querySelector('.search-input');
    const dropdown = searchForm.querySelector('.search-value__list');
    const dropdownArray = [... dropdown.querySelectorAll('li')];
    
    let valueArray = [];
    dropdownArray.forEach(item => {
      valueArray.push(item.textContent);
    });
    
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

const footerSearchForm = document.querySelector('.footer-content__search');
if(footerSearchForm){
    const inputField = footerSearchForm.querySelector('.search-input');
    const dropdown = footerSearchForm.querySelector('.search-value__list');
    const dropdownArray = [... dropdown.querySelectorAll('li')];
    
    let valueArray = [];
    dropdownArray.forEach(item => {
      valueArray.push(item.textContent);
    });
    
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

const mobileSearch = document.querySelector('.mobile-search');
if (mobileSearch) {
    const specialSearch = document.querySelector('.hero-section__search');
    const heroContainer = document.querySelector('.hero-container');
    const pageW = window.innerWidth;
    if(pageW <= 768){
        mobileSearch.appendChild(specialSearch);
    }else{
        heroContainer.appendChild(specialSearch);
    }
}

