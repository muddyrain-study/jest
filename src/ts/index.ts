import { test } from './module';
import '../css/index.css';
const op = document.getElementById('op') as HTMLElement;

op.addEventListener('click', () => {
  test();
});
