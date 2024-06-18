import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Estate } from '../components/Estate';

console.log(window.location.pathname);
let dumId = window.location.pathname.slice(1, 6);

console.log(dumId);

const response = await fetch(
  `https://apps.kodim.cz/daweb/trening-api/apis/realitka/${dumId}`,
);
const obj = await response.json();

document.querySelector('#root').innerHTML = render(
  <div id="container" className="container">
    <Header />
    <Estate dum={obj} />
  </div>,
);
