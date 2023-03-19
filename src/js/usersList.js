import currency from "./currency";

const usersList = pricing => {
  const usersListNode = document.querySelector('.js-users-list');
  const currencyValue = document.querySelector('.js-currency.active').getAttribute('data-curr');
  const placeholder = document.querySelector('.js-users-placeholder');
  const lastItem = document.querySelector('.js-users-list-item-last');

  for (let userIndex = 1; userIndex <= 20; userIndex++) {
    let userItemMarkup = document.createElement('li');
    let userCount = document.createElement('span');
    let userPrice = document.createElement('span');

    userItemMarkup.classList.add('users-list__item');
    userItemMarkup.classList.add('js-users-list-item');
    if (userIndex == 20) {
      userItemMarkup.classList.add('active');
    }
    userItemMarkup.setAttribute('data-count', userIndex);
    userCount.classList.add('users-list__count');
    userPrice.classList.add('users-list__price');
    userPrice.classList.add('js-users-list-price');

    if (userIndex == 1) {
      userCount.textContent = `${userIndex} user`;
    } else {
      userCount.textContent = `${userIndex} users`;
    }

    userPrice.textContent = `$${userIndex * (pricing[currencyValue] * 12)}/year`;

    userItemMarkup.appendChild(userCount);
    userItemMarkup.appendChild(userPrice);
    usersListNode.appendChild(userItemMarkup);
  }

  usersListNode.appendChild(lastItem);

  currency(pricing);

  placeholder.addEventListener('click', e => {
    e.currentTarget.classList.toggle('active');
    usersListNode.classList.toggle('show');
  })

  usersListNode.addEventListener('click', e => {
    if (e.target.closest('.js-users-list-item')) {
      const item = e.target.closest('.js-users-list-item');
      const placeholderCount = placeholder.querySelector('.js-users-placeholder-count');
      const placeholderPrice = placeholder.querySelector('.js-users-placeholder-price');
      if (item.matches('active')) return;

      const newValue = item.getAttribute('data-count');
      placeholder.setAttribute('data-active-count', newValue);
      [...document.querySelectorAll('.js-users-list-item')].forEach(item => item.classList.remove('active'));
      item.classList.add('active');

      placeholderCount.textContent = `${newValue} ${newValue == 1 ? 'user' : 'users'}`;
      placeholderPrice.textContent = item.querySelector('.js-users-list-price').textContent;

      placeholder.classList.toggle('active');
      usersListNode.classList.toggle('show');
    }
  })
}

export default usersList;