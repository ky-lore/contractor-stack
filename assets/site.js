(function(){
  "use strict";
  var SPRITE=`<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<symbol id="i-cal" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/></symbol>
<symbol id="i-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></symbol>
<symbol id="i-adown" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M6 13l6 6 6-6"/></symbol>
<symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></symbol>
<symbol id="i-trend" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/></symbol>
<symbol id="i-users" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></symbol>
<symbol id="i-flow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h6a3 3 0 0 1 3 3v6"/></symbol>
<symbol id="i-server" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="1.5"/><rect x="3" y="13" width="18" height="7" rx="1.5"/><path d="M7 7.5h.01M7 16.5h.01"/></symbol>
<symbol id="i-dollar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></symbol>
<symbol id="i-rocket" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.9.7-2.2-.1-3a2.1 2.1 0 0 0-2.9 0z"/><path d="M12 15l-3-3a11 11 0 0 1 7-8c3 0 5 2 5 5a11 11 0 0 1-8 7z"/><path d="M9 12H4s.5-3 2-4 5-1 5-1M12 15v5s3-.5 4-2 1-5 1-5"/></symbol>
<symbol id="i-alert" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></symbol>
<symbol id="i-chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></symbol>
<symbol id="i-eye" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></symbol>
<symbol id="i-gear" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></symbol>
<symbol id="i-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></symbol>
<symbol id="i-puzzle" viewBox="0 0 24 24" fill="currentColor"><path d="M10.3 3a1.9 1.9 0 0 1 3.4 0c.2.4.2.9.1 1.3-.1.5.2 1 .7 1.1.3.1.6 0 .8-.1.4-.3.9-.4 1.4-.3a1.9 1.9 0 0 1 .8 3.3c-.3.3-.4.7-.3 1.1.1.4.5.7.9.7h.2a1.9 1.9 0 0 1 0 3.8c-.5 0-1 .3-1.1.8-.1.3 0 .6.1.8.3.4.4.9.3 1.4a1.9 1.9 0 0 1-3.3.8c-.3-.3-.7-.4-1.1-.3-.4.1-.7.5-.7.9v.2a1.9 1.9 0 0 1-3.8 0c0-.5-.3-1-.8-1.1-.4-.1-.8 0-1 .3a1.9 1.9 0 0 1-2.9-2.4c.3-.3.4-.7.3-1.1-.1-.4-.5-.7-.9-.7H3a1.9 1.9 0 0 1 0-3.8c.4 0 .8-.3.9-.7.1-.4 0-.8-.3-1.1A1.9 1.9 0 0 1 6 6.6c.3.3.7.4 1.1.3.4-.1.7-.5.7-.9v-.2c0-.5.1-1 .5-1.4.3-.3.7-.5 1.1-.5.3 0 .6.1.9.1z"/></symbol>
<symbol id="i-target" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></symbol>
<symbol id="i-map" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/></symbol>
<symbol id="i-link" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 12.5 8 14a4 4 0 0 1-5.7-5.7l3-3a4 4 0 0 1 5.7 0"/><path d="M14.5 11.5 16 10a4 4 0 0 1 5.7 5.7l-3 3a4 4 0 0 1-5.7 0"/></symbol>
<symbol id="i-user" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></symbol>
<symbol id="i-mail" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7L22 6"/></symbol>
<symbol id="i-linkedin" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.75H5.67v8.59h2.67zM7 8.55a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.79v-4.93c0-2.64-1.41-3.87-3.29-3.87a2.84 2.84 0 0 0-2.58 1.42v-1.2H9.8v8.58h2.67v-4.75c0-1.25.24-2.46 1.79-2.46s1.53 1.43 1.53 2.54v4.67h2.55z"/></symbol>
<symbol id="i-doc" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></symbol>
<symbol id="i-book" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/></symbol>
<symbol id="i-cart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></symbol>
<symbol id="i-phone2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></symbol>
</defs></svg>`;
  if(!document.getElementById('i-gear')) document.body.insertAdjacentHTML('afterbegin', SPRITE);

  var nav=document.getElementById('nav');
  var onScroll=function(){nav.classList.toggle('scrolled',window.scrollY>12)};onScroll();
  window.addEventListener('scroll',onScroll,{passive:true});

  var drawer=document.getElementById('drawer'),toggle=document.getElementById('navToggle');
  var setOpen=function(o){drawer.classList.toggle('open',o);toggle.classList.toggle('open',o);document.body.style.overflow=o?'hidden':''};
  toggle.addEventListener('click',function(){setOpen(!drawer.classList.contains('open'))});
  drawer.querySelectorAll('[data-close]').forEach(function(el){el.addEventListener('click',function(){setOpen(false)})});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')setOpen(false)});

  var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.14,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});

  // dashboard bars + counters
  var dash=document.getElementById('dash');
  if(dash){var dio=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){dash.classList.add('in');dio.unobserve(dash)}})},{threshold:.3});dio.observe(dash);}
  var animate=function(el){
    var raw=el.getAttribute('data-count');
    var target=raw==='just'?847:parseFloat(raw);
    var pre=el.getAttribute('data-prefix')||'',suf=el.getAttribute('data-suffix')||'';
    var dur=1500,start=null;
    var step=function(ts){if(!start)start=ts;var p=Math.min((ts-start)/dur,1),e=1-Math.pow(1-p,3);
      var v=target*e;el.textContent=pre+(v>=1000?Math.round(v).toLocaleString():Math.round(v))+suf;
      if(p<1)requestAnimationFrame(step);else el.textContent=pre+(target>=1000?target.toLocaleString():target)+suf;};
    requestAnimationFrame(step);
  };
  var cio=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){animate(e.target);cio.unobserve(e.target)}})},{threshold:.6});
  document.querySelectorAll('[data-count]').forEach(function(el){cio.observe(el)});

  // framework comet spine — fills as you scroll through the rail
  var rail=document.querySelector('.fw-rail');
  if(rail){
    var updateSpine=function(){
      var r=rail.getBoundingClientRect(),vh=window.innerHeight;
      var prog=(vh*0.55 - r.top)/r.height;
      prog=Math.max(0,Math.min(1,prog));
      rail.style.setProperty('--fill',(prog*100).toFixed(1)+'%');
      rail.style.setProperty('--fillr',prog.toFixed(3));
    };
    updateSpine();
    window.addEventListener('scroll',updateSpine,{passive:true});
    window.addEventListener('resize',updateSpine,{passive:true});
  }

  // puzzle piece snaps in on view
  var puzzle=document.getElementById('puzzle');
  if(puzzle){var pio=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){puzzle.classList.add('in');pio.unobserve(puzzle)}})},{threshold:.4});pio.observe(puzzle);}

  // contact form (front-end demo — [PH] wire to Calendly/CRM/email)
  document.querySelectorAll('form[data-form]').forEach(function(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var name=form.querySelector('[name=name]'),email=form.querySelector('[name=email]');
      if((name&&!name.value.trim())||(email&&!email.value.trim())){(name&&!name.value.trim()?name:email).focus();return;}
      var body=form.querySelector('[data-form-body]'),ok=form.querySelector('.form-success');
      if(body)body.style.display='none';if(ok)ok.classList.add('on');
      form.scrollIntoView({behavior:'smooth',block:'center'});
    });
  });

  var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
})();
