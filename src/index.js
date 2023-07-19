import _ from 'lodash';
import './index.css';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['I am from', 'src/index.js'], ' ');

  return element;
}

document.body.appendChild(component());