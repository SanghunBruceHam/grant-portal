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
    console.log(`👉 Loading category: ${cat}`);
    try {
      const grants = await loadCategory(cat);
      console.log(grants); // 여기에 배열이 떠야 함

      listEl.innerHTML = '';
      if (grants.length === 0) {
        listEl.textContent = '해당 카테고리에 보조금 정보가 없습니다.';
      } else {
        grants.forEach(grant => listEl.appendChild(createCard(grant)));
      }
    } catch (e) {
      console.error('🚨 오류 발생:', e);
      listEl.innerHTML = `<p style="color:red;">데이터를 불러오는데 실패했습니다.</p>`;
    }
  });
});
