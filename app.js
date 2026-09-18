(function () {
  const people = document.getElementById('people');
  const credits = Array.isArray(window.PLAZA_CREDITS) ? window.PLAZA_CREDITS : [];

  function initials(name) {
    return String(name || '')
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  }

  credits.forEach((person) => {
    const portrait = document.createElement('div');
    portrait.className = 'portrait';

    const fallback = document.createElement('span');
    fallback.className = 'initials';
    fallback.textContent = initials(person.name);
    portrait.appendChild(fallback);

    if (person.photo) {
      const img = document.createElement('img');
      img.alt = person.name || '';
      img.src = person.photo;
      img.addEventListener('error', () => img.remove());
      portrait.appendChild(img);
    }

    const nameEl = document.createElement('div');
    nameEl.className = 'person-name';
    nameEl.textContent = person.name;

    const role = document.createElement('div');
    role.className = 'person-role';
    role.textContent = person.role || '';

    const card = person.url ? document.createElement('a') : document.createElement('div');
    card.className = 'person';
    if (person.url) {
      card.href = person.url;
      card.target = '_blank';
      card.rel = 'noopener noreferrer';
    }
    card.appendChild(portrait);
    card.appendChild(nameEl);
    card.appendChild(role);

    const item = document.createElement('li');
    item.appendChild(card);
    people.appendChild(item);
  });
})();
