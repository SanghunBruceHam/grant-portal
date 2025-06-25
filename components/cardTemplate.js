export function createCard(grant) {
  const template = document.getElementById('grant-card-template');
  const card = template.content.cloneNode(true);
  
  // 제목, 금액, 링크 등 기존 내용 삽입
  card.querySelector('.title').textContent = grant.title;
  card.querySelector('.amount').textContent = grant.amount;
  card.querySelector('.region').textContent = `적용 지역: ${grant.region}`;
  card.querySelector('.link').href = grant.url;

  // 아이콘 동적 로딩 (옵션)
  if (grant.icon) {
    const icon = card.querySelector('.card-icon');
    icon.src = grant.icon;
    icon.alt = `${grant.title} 아이콘`;
  }

  // ✅ [NEW] 배지 삽입
  const badgeGroup = card.querySelector('.badge-group');
  if (grant.badges && Array.isArray(grant.badges)) {
    grant.badges.forEach(badgeText => {
      const span = document.createElement('span');
      span.className = 'badge';
      if (badgeText.includes('마감')) span.classList.add('warning');
      span.textContent = badgeText;
      badgeGroup.appendChild(span);
    });
  }

  return card;
}
