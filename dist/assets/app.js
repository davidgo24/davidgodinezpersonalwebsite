const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('#site-nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));
document.querySelectorAll('.role button').forEach(button=>button.addEventListener('click',()=>{
  const role=button.closest('.role');
  const wasOpen=role.classList.contains('open');
  document.querySelectorAll('.role').forEach(item=>{item.classList.remove('open');item.querySelector('button').setAttribute('aria-expanded','false');item.querySelector('i').textContent='+';});
  if(!wasOpen){role.classList.add('open');button.setAttribute('aria-expanded','true');button.querySelector('i').textContent='−';}
}));
