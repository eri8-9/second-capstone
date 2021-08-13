import './style.css';
import './popUp.css'
import '@fortawesome/fontawesome-free/js/all.js';
import displayItems from './homePage.js';
import openPopUp from './open-popUp.js'
import mealCardDescription from './mealCardDescr';
import popUpRender from './popUp-render';

// const container = document.getElementById('container');

window.addEventListener('load', () => {
  displayItems();

  openPopUp()

});
