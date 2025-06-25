function createCard(data) {
  const template = document.getElementById("grant-card-template");
  const card = template.content.cloneNode(true);
  card.querySelector(".title").textContent = data.title;
  card.querySelector(".amount").textContent = data.amount;
  card.querySelector(".link").href = data.link;
  card.querySelector(".card-icon").src = data.icon || 'default.svg';

  // 🔥 [여기!] 배지를 동적으로 추가하는 코드
  if (data.tags && Array.isArray(data.tags)) {
    const container = document.createElement('div');
    container.classList.add('tag-container');

    data.tags.forEach(tag => {
      const badge = document.createElement('span');
      badge.classList.add('tag-badge');
      badge.textContent = tag;
      container.appendChild(badge);
    });

    const cardElement = card.querySelector('.card');
    cardElement.insertBefore(container, cardElement.firstChild); // 카드 상단에 추가
  }

  return card;
}
