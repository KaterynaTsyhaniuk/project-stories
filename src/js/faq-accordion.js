import Accordion from 'accordion-js';

const aboutMeAccordion = new Accordion('.acordeon-list-faq', {
  duration: 400,
  showMultiple: false,
  openOnInit: [0],
  elementClass: 'acordeon-item-faq',
  triggerClass: 'block-faq',
  panelClass: 'js-acordion-panel',
});
