/* ===== EDIT HERE: the only place links need to be set ===== */
const CONFIG = {
  RESUME_URL: "https://drive.google.com/file/d/1baE3pWbwGQ2gRl_HFYEB-nXKfbhtR03Y/view?usp=sharing",   // replace with the real resume URL
  RESUME_DOWNLOAD: false,          // true makes "View Resume" download the file instead
  links: { gatyaDemo:"https://gatya-upmw.onrender.com/", pixelproofDemo:"https://pixelproof-wx3m.onrender.com", pixelproofCode:"", internshipCertificate:"" } // "" = not set yet
};
const SKILLS = [
 {t:"Programming Languages",i:"</>",s:["Python","JavaScript","Java","C","SQL","HTML","CSS"]},
 {t:"AI / ML & Computer Vision",i:"◎",s:["TensorFlow","Keras","Convolutional Neural Networks (CNN)","OpenCV","NumPy","Pillow"]},
 {t:"Web Development & Backend",i:"❖",s:["React.js","Tailwind CSS","Flask","FastAPI","REST APIs","WebSocket"]},
 {t:"Core CS & Developer Tools",i:"{ }",s:["Data Structures and Algorithms (DSA)","Object-Oriented Programming (OOP)","Git","GitHub","Docker"]}
];
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const root=document.documentElement;

/* theme */
const tbtn=$('#theme');
function setTheme(t,save){root.dataset.theme=t;tbtn.setAttribute('aria-label',t==='dark'?'Switch to light mode':'Switch to dark mode');if(save)try{localStorage.setItem('theme',t)}catch(e){}}
setTheme(root.dataset.theme,false);
tbtn.addEventListener('click',()=>setTheme(root.dataset.theme==='dark'?'light':'dark',true));

/* mobile menu */
const burger=$('#burger'),menu=$('#menu');
const closeMenu=()=>{menu.classList.remove('open');burger.setAttribute('aria-expanded','false')};
burger.addEventListener('click',()=>{const o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
$$('#menu a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});

/* skills (native <button> gives Enter/Space support) */
$('#cats').innerHTML=SKILLS.map((c,n)=>`<div class="cat"><button class="cat-btn" type="button" aria-expanded="false" aria-controls="p${n}" aria-label="${c.t}, ${c.s.length} skills"><span class="ico" aria-hidden="true">${c.i}</span><span>${c.t}<small>Click to open</small></span><span class="pl" aria-hidden="true">+</span></button><div class="panel" id="p${n}" role="region" aria-label="${c.t} skills"><ul class="bubbles">${c.s.map((s,i)=>`<li style="--i:${i}">${s}</li>`).join('')}</ul></div></div>`).join('');
$$('.cat-btn').forEach(b=>b.addEventListener('click',()=>{const cat=b.parentElement,o=cat.classList.toggle('open');b.setAttribute('aria-expanded',o);$('small',b).textContent=o?'Click to close':'Click to open'}));

/* resume placeholder */
const ok=CONFIG.RESUME_URL&&CONFIG.RESUME_URL!=="RESUME_URL_HERE";
$$('[data-resume]').forEach(a=>{if(ok){a.href=CONFIG.RESUME_URL;if(CONFIG.RESUME_DOWNLOAD){a.setAttribute('download','');a.textContent='Download Resume'}}else{a.removeAttribute('href');a.removeAttribute('target');a.setAttribute('aria-disabled','true');a.setAttribute('role','link');a.addEventListener('click',e=>e.preventDefault())}});

/* project / certificate links */
$$('[data-link]').forEach(a=>{const u=CONFIG.links[a.dataset.link];if(u){a.href=u;a.hidden=false;const p=$(`[data-pending="${a.dataset.link}"]`);if(p)p.hidden=true}});
$('#yr').textContent=new Date().getFullYear();

/* typing effect for paragraphs (full text stays available to screen readers; skipped for reduced motion) */
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduce&&'IntersectionObserver' in window){
  const els=$$('.quote');
  els.forEach(el=>{
    const html=el.innerHTML, h=el.offsetHeight;
    el.style.minHeight=h+'px';
    el.innerHTML='<span class="sr">'+html+'</span><span class="ty" aria-hidden="true"></span>';
    el._html=html;
  });
  const type=el=>{
    const t=$('.ty',el),s=el._html,ms=Math.max(6,Math.min(22,2600/s.length));let i=0;
    t.classList.add('typing');
    (function step(){
      if(s[i]==='<'){i=s.indexOf('>',i)+1}else i++;
      t.innerHTML=s.slice(0,i);
      if(i<s.length)setTimeout(step,ms);else t.classList.remove('typing');
    })();
  };
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){io.unobserve(e.target);type(e.target)}}),{threshold:.3});
  els.forEach(el=>io.observe(el));
}
