
const currency = pricing => {
  const currenciesButtonNodes = document.querySelectorAll('.js-currency');
  const barNode = document.querySelector('.js-progress-bar');
  const plansPriceNode = document.querySelector('.js-plan-price');
  const costNode = document.querySelector('.js-progress-cost');
  const isMobile = window.innerWidth > 768 ? false : true;
  const usersListNode = document.querySelector('.js-users-list');

  currenciesButtonNodes.forEach(button => {
    button.addEventListener('click', e => {
      if (e.target.matches('.active')) return;

      currenciesButtonNodes.forEach(button => button.classList.remove('active'));
      e.target.classList.add('active');

      if (isMobile) {
        updateUserListPrice(e.target.getAttribute('data-curr'));
      } else {
        _updateCurrency(e.target.getAttribute('data-curr'));
      }
    })
  })

  const _updateCurrency = currency => {
    const users = Math.round(barNode.noUiSlider.get());
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0
    });

    costNode.textContent = `${formatter.format(users * (pricing[currency] * 12))}/year`;
    plansPriceNode.textContent = formatter.format(pricing[currency]);
  }

  const updateUserListPrice = currency => {
    const usersPriceList = usersListNode.querySelectorAll('.js-users-list-price');
    const placeholderPrice = document.querySelector('.js-users-placeholder-price');
    const activeUsersCount = document.querySelector('.js-users-placeholder').getAttribute('data-active-count');
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0
    });
    usersPriceList.forEach((userPriceNode, userIndex) => {
      userPriceNode.textContent = `${formatter.format((userIndex + 1) * (pricing[currency] * 12))}/year`;
    })

    plansPriceNode.textContent = formatter.format(pricing[currency]);
    placeholderPrice.textContent = `${formatter.format(activeUsersCount * (pricing[currency] * 12))}/year`;
  }

  return {
    updateCurrency: _updateCurrency,
  }
}

export default currency;