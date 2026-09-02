
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');

if(menuBtn){
  menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
}
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click',()=>nav.classList.remove('open'));
});

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{threshold:.12});
document.querySelectorAll('.fade').forEach(el=>observer.observe(el));

document.querySelectorAll('form[data-demo-form]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const msg = form.querySelector('.form-message');
    if(msg) msg.textContent = "Thank you! Your enquiry has been received. Naadhya by Kaveri will contact you soon.";
    form.reset();
  });
});
