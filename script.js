import { createCard } from './components/cardTemplate.js';

async function loadCategory(cat) {
  const mod = await import(`./modules/${cat}Data.js`);
  return mod.grants;
}

const buttons = document.querySelectorAll('nav button');
const listEl = document.getElementById('grant-list');

buttons.forEach(btn => {
  btn.addEventListener('click', async () => {
    const grants = await loadCategory(btn.dataset.cat);
    listEl.innerHTML = '';
    if (grants.length === 0) {
      listEl.textContent = '해당 카테고리에 보조금 정보가 없습니다.';
    } else {
      grants.forEach(grant => listEl.appendChild(createCard(grant)));
    }
  });
});
