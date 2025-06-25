export function createCard(data) {
  const template = document.getElementById('grant-card-template');
  const card = template.content.cloneNode(true);  // 템플릿 복사

  // 기본 정보 채우기
  card.querySelector('.title').textContent = data.title;
  card.querySelector('.region').textContent = `적용 지역: ${data.region}`;
  card.querySelector('.amount').textContent = data.amount;
  card.querySelector('.link').href = data.link;

  // ✅ 여기서 badge 넣기!
  const badgeBox = card.querySelector('.badge-group');  // 배지 들어갈 div

  if (data.tags && Array.isArray(data.tags)) {
    data.tags.forEach(tag => {
      const span = document.createElement('span');  // 새 <span> 만들기
      span.className = 'badge';                     // .badge 클래스 넣기
      span.textContent = tag;                       // 텍스트 넣기
      badgeBox.appendChild(span);                   // badge-group에 붙이기
    });
  }

  return card;
}
