// Active nav link
(function(){
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar .nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if((current === '' && href === 'index.html') || href === current){
      a.classList.add('active');
    }
  });
  const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();

  // Contact form -> mailto fallback
  const cf = document.getElementById('contactForm');
  if(cf){
    cf.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(cf);
      const name = fd.get('name'); const email = fd.get('email'); const msg = fd.get('message');
      const mailto = `mailto:info@vaagdevi.edu?subject=Website Enquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(msg + '\n\nFrom: ' + name + ' <' + email + '>')}`;
      window.location.href = mailto;
      const ok = document.getElementById('contactMsg'); if(ok) ok.classList.remove('d-none');
    });
  }

  // Admissions enquiry -> mailto fallback
  const ef = document.getElementById('enquiryForm');
  if(ef){
    ef.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(ef);
      const body = Array.from(fd.entries()).map(([k,v])=> `${k}: ${v}`).join('\n');
      const mailto = `mailto:info@vaagdevi.edu?subject=Admissions Enquiry&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      const ok = document.getElementById('enquiryMsg'); if(ok) ok.classList.remove('d-none');
    });
  }

  // Gallery lightbox
  const lb = document.getElementById('lightbox');
  if(lb){
    const img = document.getElementById('lightboxImage');
    document.querySelectorAll('.gallery-img').forEach(el=>{
      el.addEventListener('click', ()=> { img.src = el.getAttribute('data-src'); });
    });
  }
})();
