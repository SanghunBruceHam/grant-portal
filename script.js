import { createCard } from './components/cardTemplate.js';

async function loadCategory(cat) {
  try {
    const mod = await import(`./modules/${cat}Data.js`);
    return mod.grants || [];
  } catch (err) {
    console.error(`[모듈 로드 실패] ./modules/${cat}Data.js`, err);
    return null;
  }
}

const buttons = document.querySelectorAll('nav button');
const listEl = document.getElementById('grant-list');

buttons.forEach(btn => {
  btn.addEventListener('click', async () => {
    const cat = btn.dataset.cat;
    const grants = await loadCategory(cat);

    listEl.innerHTML = '';

    if (!grants) {
      listEl.textContent = `❌ ${cat} 카테고리 데이터를 불러오는 데 문제가 발생했습니다.`;
      return;
    }

    if (grants.length === 0) {
      listEl.textContent = '해당 카테고리에 보조금 정보가 없습니다.';
    } else {
      grants.forEach(grant => {
        const card = createCard(grant);
        listEl.appendChild(card);
      });
    }
  });
});
