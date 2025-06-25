
export function createCard(grant) {
  const tmpl = document.querySelector('#grant-card-template');
  const el = tmpl.content.cloneNode(true);
  el.querySelector('.title').textContent = grant.title;
  el.querySelector('.amount').textContent = grant.amount;
  el.querySelector('.link').href = grant.url;
  return el;
}
