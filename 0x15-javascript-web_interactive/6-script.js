const updateHeader = document.querySelector('#update_header');
updateHeader.addEventListener('click', () => {
  const header = document.querySelector('header');
  header.textContent = 'New Header!!!';
});
