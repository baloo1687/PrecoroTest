import cases from "./cases";
import { casesSlider } from "./slider";

const tagFilter = (casesData) => {
  const tagsItems = [...document.querySelectorAll('.js-tags-item')];
  const sliderList = document.querySelector('.js-slider-list');
  const slider = casesSlider();

  tagsItems.forEach(tag => {
    tag.addEventListener('click', e => {
      if (tag.matches('.active')) return;
      tagsItems.forEach(tag => tag.classList.remove('active'));
      tag.classList.add('active');

      const currentTagText = tag.textContent.trim();

      sliderList.innerHTML = '';
      if (currentTagText === 'All') {
        cases(casesData);
        slider.reinit();
      } else {
        const newCases = casesData.filter(caseData => caseData.tags.filter(tag => tag.name === currentTagText).length);
        cases(newCases);
        slider.reinit();
      }

      casesTagsUpdateHandler();
    })
  })

  const casesTagsUpdateHandler = () => {
    const casesTags = document.querySelectorAll('.js-case-tag');

    casesTags.forEach(tag => {
      tag.addEventListener('click', () => {
        const currentTagText = tag.textContent.trim();
        const newActiveTag = tagsItems.find(tag => tag.textContent.trim() === currentTagText);

        tagsItems.forEach(tag => {
          tag.classList.remove('active');
        });

        newActiveTag.classList.add('active')
  
        sliderList.innerHTML = '';
        const newCases = casesData.filter(caseData => caseData.tags.filter(tag => tag.name === currentTagText).length);
        cases(newCases);
        slider.reinit();
        casesTagsUpdateHandler();
      })
    })
  }

  casesTagsUpdateHandler();
}

export default tagFilter;