import Splide from '@splidejs/splide';

export const tagsSlider = () => {
  document.fonts.ready.then(function () {
    new Splide('.js-tags-splide', {
      autoWidth: true,
      omitEnd: true,
      pagination: false,
      rewind: true
    }).mount();
  });
};

export const casesTagsSlider = (sliderContainer) => {
  new Splide(sliderContainer, {
    autoWidth: true,
    pagination: false,
    rewind: true,
  }).mount();
}

export const casesSlider = () => {
  let sliderItems = document.querySelectorAll('.js-slider-item');
  let sliderList = document.querySelector('.js-slider-list');
  let sliderControlPrev = document.querySelector('.js-prev');
  let sliderControlNext = document.querySelector('.js-next');
  let sliderCounter = document.querySelector('.js-slider-counter');
  let currentIndex = 0;
  let itemWidth = sliderItems[0].offsetWidth + 26;
  let totalItems = sliderItems.length;

  const _updateData = () => {
    sliderControlPrev = document.querySelector('.js-prev');
    sliderControlNext = document.querySelector('.js-next');
    sliderCounter = document.querySelector('.js-slider-counter');
    itemWidth = sliderItems[0].offsetWidth + 26;
    totalItems = sliderItems.length;
  }

  const _updateView = () => {
    sliderList.style.transform = `translateX(0px)`;
    sliderCounter.innerHTML = `${currentIndex + 1} of ${totalItems}`;
    sliderControlPrev.setAttribute('disabled', 'disabled');
    sliderControlNext.removeAttribute('disabled');
    if (totalItems < 2) {
      sliderControlNext.setAttribute('disabled', 'disabled');
    }
  }

  const _error = () => {
    sliderList.innerHTML = '';

    const errorBlock = document.createElement('div');
    errorBlock.classList.add('error');
    errorBlock.classList.add('error-empty');
    errorBlock.textContent = "Oooops, sorry, nothing to show";
    sliderList.appendChild(errorBlock);

    sliderList.style.transform = `translateX(0px)`;
    sliderCounter.innerHTML = `1 of 1`;
    sliderControlPrev.setAttribute('disabled', 'disabled');
    sliderControlNext.setAttribute('disabled', 'disabled');

    return;
  }

  sliderControlPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
      sliderCounter.innerHTML = `${currentIndex} of ${totalItems}`;
      currentIndex--;
      sliderList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      sliderControlNext.removeAttribute('disabled');
      if (currentIndex == 0) {
        sliderControlPrev.setAttribute('disabled', 'disabled');
      }
    }
  });

  sliderControlNext.addEventListener('click', () => {
    if (currentIndex > totalItems - 1) return
    currentIndex++;
    sliderCounter.innerHTML = `${currentIndex + 1} of ${totalItems}`;
    sliderList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    sliderControlPrev.removeAttribute('disabled');
    if (currentIndex == totalItems - 1) {
      sliderControlNext.setAttribute('disabled', 'disabled');
    }
  });

  const _reinit = () => {
    currentIndex = 0;
    sliderItems = document.querySelectorAll('.js-slider-item');
    sliderList = document.querySelector('.js-slider-list');

    if (!sliderItems.length) {
      _error();
      return;
    }

    _updateData();
    _updateView();
  }

  return {
    reinit: _reinit
  }
}