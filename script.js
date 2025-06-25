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
    listEl.innerHTML = ''; // 이전 카드 제거
    grants.forEach(g => {
      const card = createCard(g);
      listEl.appendChild(card);
    });
  });
});
