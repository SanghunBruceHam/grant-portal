export function createCard(grant) {
  const template = document.getElementById('grant-card-template');
  const card = template.content.cloneNode(true);

  // 텍스트 삽입
  card.querySelector('.title').textContent = grant.title;
  card.querySelector('.amount').textContent = grant.amount;
  card.querySelector('.region').textContent = `적용 지역: ${grant.region}`;
  card.querySelector('.link').href = grant.url;

  // 아이콘 처리 (옵션)
  if (grant.icon) {
    const icon = card.querySelector('.card-icon');
    icon.src = grant.icon;
    icon.alt = `${grant.title} 아이콘`;
  }

  // ✅ 배지 처리
  const badgeGroup = card.querySelector('.badge-group');
  if (grant.badges && Array.isArray(grant.badges)) {
    grant.badges.forEach(text => {
      const span = document.createElement('span');
      span.classList.add('badge');
      span.textContent = text;

      // 텍스트 키워드 기반 클래스 지정
      if (text.includes('마감')) {
        span.classList.add('warning');
      } else if (text.includes('지역')) {
        span.classList.add('secondary');
      } else if (text.includes('신청') || text.includes('신규') || text.includes('가능')) {
        span.classList.add('success');
      }
      
      badgeGroup.appendChild(span);
    });
  }

  return card;
}
