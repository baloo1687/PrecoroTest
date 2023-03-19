import noUiSlider from 'nouislider';
import currency from './currency';

const progressBar = pricing => {
  const barNode = document.querySelector('.js-progress-bar');
  const infoNode = document.querySelector('.js-progress-info');
  const infoTwinkNode = document.querySelector('.js-progress-info-twink');
  const usersNode = document.querySelector('.js-progress-count');
  const plans = {
    small: document.querySelector('.js-plan-small'),
    large: document.querySelector('.js-plan-large')
  }

  noUiSlider.create(barNode, {
    start: 1,
    step: 1,
    range: {
      'min': [1],
      '50%': [20, 1],
      'max': [40]
    },
    connect: 'lower',
    pips: {
      mode: 'range',
    },
    tooltips: true,
  });

  const tooltip = document.querySelector('.noUi-tooltip');
  const lastPips = document.querySelector('.noUi-value-large[data-value="40"]');
  lastPips.textContent = '∞';

  const initCurrency = currency(pricing);

  barNode.noUiSlider.on('update', () => {
    initCurrency.updateCurrency(document.querySelector('.js-currency.active').getAttribute('data-curr'));
    const users = Math.round(barNode.noUiSlider.get());
    
    if (users <= 20) {
      usersNode.textContent = `${users} users`;
      if (tooltip.matches('.hide')) tooltip.classList.remove('hide');
      if (infoTwinkNode.matches('.active')) infoTwinkNode.classList.remove('active');
      if (plans.large.matches('.active')) plans.large.classList.remove('active');
      if (!plans.small.matches('.active')) plans.small.classList.add('active');
    } else {
      if (!tooltip.matches('.hide')) tooltip.classList.add('hide');
      if (!infoTwinkNode.matches('.active')) infoTwinkNode.classList.add('active');
      if (!plans.large.matches('.active')) plans.large.classList.add('active');
      if (plans.small.matches('.active')) plans.small.classList.remove('active');
    }

    tooltip.innerHTML = '';
    tooltip.appendChild(infoNode);
  });
}

export default progressBar;