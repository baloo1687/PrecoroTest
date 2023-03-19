import { casesTagsSlider } from "./slider";

const cases = casesData => {
  const sliderList = document.querySelector('.js-slider-list');
  let slide = null;

  casesData.forEach((data, index) => {
    if (index % 2 == 0) {
      slide = document.createElement('div');
      slide.classList.add('slider__item');
      slide.classList.add('js-slider-item');
    }

    let caseTagMarkup = '';

    data.tags.forEach(tag => {
      caseTagMarkup += `<li class="splide__slide case__tag case__tag--${tag.category} js-case-tag">${tag.name}</li>`;
    })

    const caseTagsMarkup = `
      <div class="splide js-cases-tags-splide">
        <div class="splide__arrows">
          <button class="splide__arrow splide__arrow--prev">
            Prev
          </button>
          <button class="splide__arrow splide__arrow--next">
            Next
          </button>
        </div>
        <div class="splide__track">
          <ul class="splide__list case__tags">
            ${caseTagMarkup}
            <li class="splide__slide case__time-to-read">${data.time}</li>
          </ul>
        </div>
      </div>`;

    const caseMarkup = `
      <div class="case">
        <div class="case__image" style="background-color: ${data.image}"></div>
        <div class="case__content">
          ${caseTagsMarkup}
          <p class="case__title">${data.title}</p>
          <div class="case__author author">
            <div class="author__avatar" style="background-color: ${data.image}"></div>
            <div class="author__info">
              <span class="author__name">Name</span>
              <span class="author__title">Title</span>
            </div>
          </div>
          <a href="#" class="case__read-more">Read story</a>
        </div>
      </div>`;

    slide.innerHTML += caseMarkup;

    if (index % 2 || casesData.length == 1 || casesData.length - 1 == index) {
      sliderList.appendChild(slide);
    }
  })

  const casesTagsSliderContainers = document.querySelectorAll('.js-cases-tags-splide');

  casesTagsSliderContainers.forEach(casesTagsSliderContainer => {
    casesTagsSlider(casesTagsSliderContainer);
  })
}

export default cases;