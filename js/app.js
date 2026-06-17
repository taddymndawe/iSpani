// ═══════════════════════════ OAuth Configuration ═══════════════════════════
// Fill these with your actual credentials from Google & Apple consoles
const OAUTH_CONFIG = {
  GOOGLE_CLIENT_ID: 'YOUR_GOOGLE_CLIENT_ID_HERE',  // Get from console.cloud.google.com
  // For Apple Sign-In: you'll need a backend to handle the secret key exchange
  // See: https://developer.apple.com/sign-in-with-apple/get-started
};

// ═══════════════════════════════════════════════════════════════════════════

const IC = {
  dev:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 6l-2 12"/></svg>',
  data:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
  sec:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></svg>',
  cloud:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10a4 4 0 00-7.7-1.3A3.5 3.5 0 106 16h11a3.5 3.5 0 001-6.9z"/></svg>',
  support:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>',
  design:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="12" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="13" r="2.5"/><path d="M12 22a2 2 0 002-2c0-1.1-.9-2-2-2s-2-.9-2-2a4 4 0 014-4"/></svg>',
  port:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16v12H4zM8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>',
  star:'<svg viewBox="0 0 24 24"><path d="M12 2l3 7 7 .5-5.5 4.5 2 7L12 17l-6.5 4 2-7L2 9.5 9 9z"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 13l4 4 10-10"/></svg>'
};

const CATEGORIES = [
  {id:'dev',  name:'Software Development', icon:IC.dev,  skills:['React','Node.js','C#/.NET','Python','Java','Flutter','PostgreSQL','REST APIs']},
  {id:'data', name:'Data Science & AI',   icon:IC.data, skills:['Python','Pandas','SQL','Machine Learning','Power BI','TensorFlow','Data cleaning']},
  {id:'sec',  name:'Cybersecurity',       icon:IC.sec,  skills:['Pen-testing','SIEM','Network security','Vulnerability scanning','Linux']},
  {id:'cloud',name:'Cloud & DevOps',      icon:IC.cloud,skills:['Azure','AWS','Docker','CI/CD','Linux','Kubernetes']},
  {id:'support',name:'IT Support',        icon:IC.support,skills:['Troubleshooting','Networking','Windows','Hardware','Help desk']},
  {id:'design',name:'UI/UX & Web Design', icon:IC.design,skills:['Figma','UI design','Tailwind CSS','Prototyping','HTML/CSS','Webflow']}
];
const catById = id => CATEGORIES.find(c=>c.id===id);

const STUDENTS = [
  {id:1,name:'Lerato Mokoena',initials:'LM',grad:'student',uni:'Final-year BSc Computer Science · Wits',cat:'dev',rate:240,rating:4.9,reviews:27,blurb:'Full-stack developer building React + Node apps. Shipped two live web apps for campus societies.',skills:['React','Node.js','PostgreSQL','REST APIs','HTML/CSS'],matrix:[['React',92],['Node.js',88],['PostgreSQL',80],['REST APIs',85]],port:[['Society events platform','React + Node web app'],['Tutor-booking API','Node.js + PostgreSQL']]},
  {id:2,name:'Thabo Ndlovu',initials:'TN',grad:'grad',uni:'Data Science graduate 2024 · UCT',cat:'data',rate:320,rating:4.8,reviews:19,blurb:'Turns messy spreadsheets into clear dashboards and predictive models. Hackathon finalist twice.',skills:['Python','Pandas','SQL','Machine Learning','Power BI'],matrix:[['Python',94],['Pandas',90],['Machine Learning',78],['SQL',82]],port:[['Retail demand model','Python + scikit-learn'],['Sales dashboard','Power BI']]},
  {id:3,name:'Aisha Patel',initials:'AP',grad:'student',uni:'BSc IT (3rd yr) · UJ',cat:'sec',rate:280,rating:4.7,reviews:12,blurb:'Security-focused student running vulnerability assessments and basic pen-tests for small sites.',skills:['Pen-testing','Network security','Linux','Vulnerability scanning'],matrix:[['Pen-testing',80],['Network security',85],['Linux',88],['Vulnerability scanning',76]],port:[['NPO website audit','OWASP review'],['Home lab SIEM','Wazuh + ELK']]},
  {id:4,name:'Sipho Dlamini',initials:'SD',grad:'grad',uni:'BSc IT graduate · UP',cat:'cloud',rate:350,rating:4.9,reviews:22,blurb:'Deploys and automates. Sets up CI/CD and containerised hosting on Azure and AWS for small teams.',skills:['Azure','Docker','CI/CD','AWS','Linux'],matrix:[['Azure',90],['Docker',86],['CI/CD',84],['AWS',79]],port:[['Dockerised SME backend','Docker + GitHub Actions'],['Azure static hosting','Azure App Service']]},
  {id:5,name:'Naledi Khumalo',initials:'NK',grad:'student',uni:'Final-year BCom Information Systems · Stellenbosch',cat:'design',rate:200,rating:4.8,reviews:31,blurb:'UI/UX designer crafting clean, responsive interfaces in Figma and shipping them with Tailwind.',skills:['Figma','UI design','Tailwind CSS','Prototyping','HTML/CSS'],matrix:[['Figma',93],['UI design',89],['Tailwind CSS',82],['Prototyping',85]],port:[['Clinic booking UI','Figma + prototype'],['Café landing page','Tailwind CSS']]},
  {id:6,name:'Riaan Botha',initials:'RB',grad:'student',uni:'Diploma in IT (final) · CPUT',cat:'support',rate:160,rating:4.6,reviews:15,blurb:'Reliable IT support — device setup, networking and remote troubleshooting for small offices.',skills:['Troubleshooting','Networking','Windows','Help desk','Hardware'],matrix:[['Troubleshooting',88],['Networking',80],['Windows',86],['Help desk',83]],port:[['5-person office network','Router + NAS setup'],['Remote support desk','TeamViewer workflows']]},
  {id:7,name:'Zanele Mthembu',initials:'ZM',grad:'grad',uni:'BSc Computer Science graduate · UKZN',cat:'dev',rate:300,rating:5.0,reviews:34,blurb:'Backend specialist in C#/.NET and APIs. Comfortable with databases, auth and clean architecture.',skills:['C#/.NET','REST APIs','PostgreSQL','Java','Node.js'],matrix:[['C#/.NET',95],['REST APIs',88],['PostgreSQL',84],['Java',76]],port:[['Inventory API','.NET + EF Core'],['Auth microservice','JWT + role-based access']]},
  {id:8,name:'Kabelo Sithole',initials:'KS',grad:'student',uni:'BSc Data Science (3rd yr) · Wits',cat:'data',rate:220,rating:4.7,reviews:11,blurb:'Data analyst comfortable with SQL and Python. Builds reports and automates repetitive data tasks.',skills:['SQL','Python','Power BI','Data cleaning','Pandas'],matrix:[['SQL',86],['Python',82],['Power BI',84],['Data cleaning',88]],port:[['NGO impact report','Power BI'],['CSV cleaning toolkit','Python scripts']]},
  {id:9,name:'Megan van Wyk',initials:'MV',grad:'grad',uni:'BIS graduate · UP',cat:'design',rate:260,rating:4.9,reviews:24,blurb:'Product designer who ships. Strong on accessibility, design systems and front-end handoff.',skills:['Figma','UI design','Prototyping','HTML/CSS','Webflow'],matrix:[['Figma',91],['UI design',90],['HTML/CSS',80],['Webflow',78]],port:[['SaaS design system','Figma components'],['Portfolio in Webflow','Webflow build']]},
  {id:10,name:'Tendai Moyo',initials:'TM',grad:'student',uni:'BSc IT (final) · UCT',cat:'cloud',rate:280,rating:4.8,reviews:9,blurb:'Cloud-curious developer setting up AWS hosting, Docker and simple pipelines for student startups.',skills:['AWS','Docker','Linux','CI/CD','Kubernetes'],matrix:[['AWS',84],['Docker',82],['Linux',86],['CI/CD',75]],port:[['Startup MVP hosting','AWS + Docker'],['CI pipeline','GitHub Actions']]},
  {id:11,name:'Fatima Adams',initials:'FA',grad:'grad',uni:'BSc IT graduate · CPUT',cat:'sec',rate:330,rating:4.9,reviews:17,blurb:'Cybersecurity analyst running audits, SIEM setup and security awareness for small businesses.',skills:['SIEM','Pen-testing','Network security','Vulnerability scanning','Linux'],matrix:[['SIEM',88],['Pen-testing',83],['Network security',86],['Vulnerability scanning',85]],port:[['SME security audit','Full OWASP + report'],['SIEM rollout','Wazuh deployment']]},
  {id:12,name:'Bongani Nkosi',initials:'BN',grad:'student',uni:'Diploma in IT Support (final) · UJ',cat:'support',rate:150,rating:4.5,reviews:8,blurb:'Hands-on support for hardware, Windows and small networks. Patient, clear and quick to respond.',skills:['Hardware','Troubleshooting','Windows','Networking','Help desk'],matrix:[['Hardware',85],['Troubleshooting',84],['Windows',82],['Networking',78]],port:[['Lab PC rebuild','12-machine refresh'],['Wi-Fi extension','Mesh setup']]}
];

function renderCats(){
  const _g=document.getElementById('catGrid'); if(!_g)return;
  _g.innerHTML = CATEGORIES.map(c=>{
    const count = STUDENTS.filter(s=>s.cat===c.id).length;
    return `<div class="cat-card" onclick="filterToCat('${c.id}')" role="button" tabindex="0" onkeypress="if(event.key==='Enter')filterToCat('${c.id}')"><div class="cat-icon">${c.icon}</div><h3>${c.name}</h3><div class="cat-meta"><span>${count} available</span><span class="cat-go">Browse →</span></div></div>`;
  }).join('');
}

let wiz = {cat:null,skills:[],budget:300,len:'short'};
function renderWizCats(){const _w=document.getElementById('wizCats'); if(!_w)return; _w.innerHTML = CATEGORIES.map(c=>`<div class="opt" data-c="${c.id}" onclick="pickWizCat('${c.id}')"><span class="oi">${c.icon}</span>${c.name}</div>`).join('');}
function pickWizCat(id){wiz.cat=id;wiz.skills=[];document.querySelectorAll('#wizCats .opt').forEach(o=>o.classList.toggle('sel',o.dataset.c===id));document.getElementById('next1').disabled=false;}
function renderWizSkills(){const c=catById(wiz.cat);if(!c)return;document.getElementById('wizSkills').innerHTML=c.skills.map(s=>`<button class="spill ${wiz.skills.includes(s)?'sel':''}" onclick="toggleWizSkill('${s.replace(/'/g,"\\'")}')">${s}</button>`).join('');document.getElementById('next2').disabled=wiz.skills.length===0;}
function toggleWizSkill(s){wiz.skills.includes(s)?wiz.skills=wiz.skills.filter(x=>x!==s):wiz.skills.push(s);renderWizSkills();}
function pickBudget(el,v){wiz.budget=v;document.querySelectorAll('#wizBudget .seg button').forEach(b=>b.classList.toggle('sel',b===el));}
function pickLen(el,v){wiz.len=v;document.querySelectorAll('#wizLen button').forEach(b=>b.classList.toggle('sel',b===el));}
function setWizStep(n){if(!document.getElementById('wizSteps'))return;document.querySelectorAll('#wizSteps .wstep').forEach(w=>w.classList.toggle('active',+w.dataset.s===n));document.querySelectorAll('#wizRight .wiz-panel').forEach(p=>p.classList.toggle('show',+p.dataset.panel===n));}
function wizGo(n){if(n===2)renderWizSkills();setWizStep(n);}
function scoreStudent(s){let score=0;if(s.cat===wiz.cat)score+=22;const have=wiz.skills.filter(sk=>s.skills.includes(sk)).length;score+=wiz.skills.length?(have/wiz.skills.length)*52:0;if(s.rate<=wiz.budget)score+=14;else score+=Math.max(0,14-(s.rate-wiz.budget)/20);score+=(s.rating/5)*12;return{score:Math.min(99,Math.round(score)),have};}
function runMatch(){
  setWizStep(4);
  const box=document.getElementById('wizResults');
  box.innerHTML=`<div class="analyzing"><div class="spinner"></div><div class="a-txt">Matching across ${STUDENTS.length*20}+ profiles…</div><div class="a-sub">Scoring verified skills, portfolio &amp; rate fit</div></div>`;
  setTimeout(()=>{
    const ranked=STUDENTS.map(s=>({s,...scoreStudent(s)})).sort((a,b)=>b.score-a.score||b.s.rating-a.s.rating).slice(0,3);
    const c=catById(wiz.cat);
    box.innerHTML=`<h4>Your top matches</h4><p class="hint">Ranked by fit for <strong>${c.name}</strong> · skills: ${wiz.skills.join(', ')}</p>`+ranked.map(r=>{
      const matched=wiz.skills.filter(sk=>r.s.skills.includes(sk));
      const mChips=matched.length
        ?matched.map(m=>`<span class="chip match">${m}</span>`).join('')
        :'<span class="chip">Related skills</span>';
      return `<div class="result-card" onclick="openProfile(${r.s.id})" style="cursor:pointer;">
        <div class="rc-top">
          <div class="avatar">${r.s.initials}</div>
          <div class="rc-info">
            <div class="name">${r.s.name}</div>
            <div class="sub">${r.s.uni}</div>
          </div>
          <div class="ring ring-sm">
            <svg width="38" height="38" viewBox="0 0 54 54">
              <circle class="track" cx="27" cy="27" r="22" stroke-width="6" fill="none"/>
              <circle class="prog" cx="27" cy="27" r="22" stroke-width="6" fill="none"
                stroke-linecap="round" stroke-dasharray="138" stroke-dashoffset="138"/>
            </svg>
            <span class="val">${r.score}%</span>
          </div>
        </div>
        <div class="rc-foot">
          <div class="chips">${mChips}</div>
          <div class="rc-rate">R${r.s.rate}<span>/hr</span></div>
        </div>
      </div>`;
    }).join('')+`<div class="wiz-nav" style="justify-content:center;gap:12px;"><button class="btn btn-ghost btn-sm" onclick="resetWiz()">↻ Start over</button><button class="btn btn-primary btn-sm" onclick="openProfile(${ranked[0].s.id})">View top match →</button></div>`;
    requestAnimationFrame(()=>{document.querySelectorAll('#wizResults .ring .prog').forEach((c2,i)=>{c2.style.strokeDashoffset=138-(138*ranked[i].score/100);});});
    toast('Match complete','We found '+ranked.length+' strong candidates for you.');
  },1150);
}
function resetWiz(){wiz={cat:null,skills:[],budget:300,len:'short'};document.querySelectorAll('#wizCats .opt').forEach(o=>o.classList.remove('sel'));document.getElementById('next1').disabled=true;document.querySelectorAll('#wizBudget .seg button').forEach(b=>b.classList.toggle('sel',b.dataset.b==='300'));document.querySelectorAll('#wizLen button').forEach(b=>b.classList.toggle('sel',b.dataset.l==='short'));setWizStep(1);}

function renderFilterCats(){const _f=document.getElementById('filterCats'); if(!_f)return; _f.innerHTML=CATEGORIES.map(c=>`<label class="check"><input type="checkbox" class="fcat" value="${c.id}" checked onchange="renderTalent()"> ${c.name}</label>`).join('');}
function getActiveCats(){return [...document.querySelectorAll('.fcat:checked')].map(c=>c.value);}
function starsHtml(r){return `<span class="stars">${IC.star} ${r.toFixed(1)}</span>`;}
function renderTalent(){
  if(!document.getElementById('talentGrid'))return;
  const q=((document.getElementById('searchInput')?document.getElementById('searchInput').value:'')||'').toLowerCase().trim();
  const maxRate=+document.getElementById('rateRange').value;
  document.getElementById('rateLabel').textContent='R'+maxRate+'/hr';
  const cats=getActiveCats(),showStudent=document.getElementById('fStudent').checked,showGrad=document.getElementById('fGrad').checked,sort=document.getElementById('sortSel').value;
  let list=STUDENTS.filter(s=>{
    if(!cats.includes(s.cat))return false;
    if(s.rate>maxRate)return false;
    if(s.grad==='student'&&!showStudent)return false;
    if(s.grad==='grad'&&!showGrad)return false;
    if(q){const hay=(s.name+' '+s.uni+' '+s.skills.join(' ')).toLowerCase();if(!hay.includes(q))return false;}
    return true;
  });
  if(sort==='rating')list.sort((a,b)=>b.rating-a.rating||b.reviews-a.reviews);
  if(sort==='low')list.sort((a,b)=>a.rate-b.rate);
  if(sort==='high')list.sort((a,b)=>b.rate-a.rate);
  document.getElementById('talentCount').textContent=list.length+' '+(list.length===1?'person':'people')+' available';
  const grid=document.getElementById('talentGrid');
  if(!list.length){grid.innerHTML='<div class="no-results"><strong>No talent matches these filters.</strong><br>Try widening your rate range or selecting more fields.</div>';return;}
  grid.innerHTML=list.map(s=>`<div class="tcard" onclick="openProfile(${s.id})" role="button" tabindex="0" onkeypress="if(event.key==='Enter')openProfile(${s.id})"><div class="thead"><div class="avatar">${s.initials}</div><div style="min-width:0"><div class="name">${s.name}</div><div class="uni">${s.uni}</div><span class="verified">${IC.check} Verified</span></div></div><div class="blurb">${s.blurb}</div><div class="chips">${s.skills.slice(0,4).map(sk=>`<span class="chip">${sk}</span>`).join('')}</div><div class="tfoot">${starsHtml(s.rating)}<div class="rate">R${s.rate}<span>/hr</span></div></div></div>`).join('');
}
function resetFilters(){document.getElementById('searchInput').value='';document.getElementById('rateRange').value=400;document.getElementById('fStudent').checked=true;document.getElementById('fGrad').checked=true;document.querySelectorAll('.fcat').forEach(c=>c.checked=true);document.getElementById('sortSel').value='rating';renderTalent();}
function filterToCat(id){
  openCatalog();
  // slight delay so catalog is visible before filtering
  setTimeout(function(){
    document.querySelectorAll('.fcat').forEach(c=>c.checked=(c.value===id));
    document.getElementById('rateRange').value=400;
    renderTalent();
  },80);
}

function openProfile(id){
  const s=STUDENTS.find(x=>x.id===id);if(!s)return;const c=catById(s.cat);
  document.getElementById('modal').innerHTML=`
    <div class="modal-head"><div style="display:flex;gap:14px;align-items:center"><div class="avatar" style="width:58px;height:58px;font-size:1.3rem">${s.initials}</div><div><h3 style="font-size:1.3rem">${s.name}</h3><div style="font-size:.85rem;color:var(--muted)">${s.uni}</div><div style="margin-top:5px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">${starsHtml(s.rating)}<span style="font-size:.8rem;color:var(--muted)">(${s.reviews} reviews)</span><span class="verified">${IC.check} Verified</span></div></div></div><button class="modal-x" onclick="closeModal()" aria-label="Close">×</button></div>
    <div class="modal-body">
      <p style="color:var(--ink-soft);margin-bottom:20px">${s.blurb}</p>
      <div class="stat-row"><div class="stat"><div class="sl">Rate</div><div class="sv">R${s.rate}<span style="font-size:.8rem;font-weight:400;color:var(--muted)">/hr</span></div></div><div class="stat"><div class="sl">Field</div><div class="sv" style="font-size:.95rem">${c.name}</div></div><div class="stat"><div class="sl">Status</div><div class="sv" style="font-size:.95rem">${s.grad==='student'?'Current student':'Graduate'}</div></div></div>
      <h4 style="font-size:.95rem;margin-bottom:14px">Skills matrix</h4>
      ${s.matrix.map(m=>`<div class="matrix-row"><div class="mh"><span>${m[0]}</span><span class="lvl">${m[1]}%</span></div><div class="bar"><i data-w="${m[1]}"></i></div></div>`).join('')}
      <h4 style="font-size:.95rem;margin:24px 0 14px">Portfolio</h4>
      ${s.port.map(p=>`<div class="port-item"><span class="pi">${IC.port}</span><div><div class="pt">${p[0]}</div><div class="pd">${p[1]}</div></div><a href="#" onclick="toast('Demo link','Portfolio links open in the full version.');return false;" style="margin-left:auto;font-family:'Plus Jakarta Sans';font-weight:600;font-size:.82rem">View ↗</a></div>`).join('')}
      <div class="modal-foot"><button class="btn btn-primary btn-block btn-lg" onclick="closeModal();openHire(${s.id})">Invite to project</button><button class="btn btn-outline btn-lg" onclick="toast('Message sent','Chat opens in the full version.')">Message</button></div>
    </div>`;
  showOverlay();
  requestAnimationFrame(()=>setTimeout(()=>{document.querySelectorAll('#modal .bar > i').forEach(b=>b.style.width=b.dataset.w+'%');},60));
}

function openHire(id){const s=STUDENTS.find(x=>x.id===id);jobModal('Invite '+(s?s.name:'talent')+' to a project',s?s.cat:'');}
function openJob(){jobModal('Post a job','');}
const TIMELINES=[
  {val:'<1w',  label:'Under 1 week', sub:'Quick fix or review'},
  {val:'1-2w', label:'1 – 2 weeks',  sub:'Small feature or task'},
  {val:'2-4w', label:'2 – 4 weeks',  sub:'Short project'},
  {val:'1-2m', label:'1 – 2 months', sub:'Medium-scope build'},
  {val:'3-6m', label:'3 – 6 months', sub:'Full project or app'},
  {val:'flex', label:'Flexible',      sub:'To be agreed'},
];
function pickTimeline(val){
  document.querySelectorAll('.tpill').forEach(p=>p.classList.toggle('sel',p.dataset.t===val));
  document.getElementById('jTimeline').value=val;
  document.getElementById('ff-timeline').classList.remove('err');
}
function jobModal(title,presetCat){
  document.getElementById('modal').innerHTML=`
    <div class="modal-head"><div><h3 style="font-size:1.25rem">${title}</h3><div style="font-size:.85rem;color:var(--muted);margin-top:3px">Fill this in and we'll match talent — or notify your invitee.</div></div><button class="modal-x" onclick="closeModal()" aria-label="Close">×</button></div>
    <div class="modal-body">
      <div class="form-field" id="ff-title"><label for="jTitle">Project title</label><input id="jTitle" type="text" placeholder="e.g. Build a booking website for my salon"><div class="errmsg">Give your project a short title.</div></div>
      <div class="form-field" id="ff-cat"><label for="jCat">Field</label><select id="jCat"><option value="">Select a field…</option>${CATEGORIES.map(c=>`<option value="${c.id}" ${c.id===presetCat?'selected':''}>${c.name}</option>`).join('')}</select><div class="errmsg">Choose a field.</div></div>
      <div class="form-field" id="ff-budget"><label for="jBudget">Budget (R)</label><input id="jBudget" type="number" inputmode="numeric" min="0" placeholder="e.g. 3500"><div class="errmsg">Enter a budget as a number.</div></div>
      <div class="form-field" id="ff-timeline">
        <label>Timeline</label>
        <input type="hidden" id="jTimeline" value="">
        <div class="tpill-grid">
          ${TIMELINES.map(t=>`<button type="button" class="tpill" data-t="${t.val}" onclick="pickTimeline('${t.val}')">${t.label}<span>${t.sub}</span></button>`).join('')}
        </div>
        <div class="errmsg">Please select a timeline for your project.</div>
      </div>
      <div class="form-field" id="ff-desc"><label for="jDesc">What needs doing?</label><textarea id="jDesc" rows="3" placeholder="A sentence or two about the work…"></textarea><div class="errmsg">Add a short description (at least 15 characters).</div></div>
      <button class="btn btn-primary btn-block btn-lg" onclick="submitJob()">${title.startsWith('Invite')?'Send invitation':'Post job & find matches'}</button>
    </div>`;
  showOverlay();setTimeout(()=>document.getElementById('jTitle').focus(),120);
}
function submitJob(){
  let ok=true;
  const t=document.getElementById('jTitle'),c=document.getElementById('jCat'),
        b=document.getElementById('jBudget'),tl=document.getElementById('jTimeline'),d=document.getElementById('jDesc');
  const set=(id,bad)=>{document.getElementById(id).classList.toggle('err',bad);if(bad)ok=false;};
  set('ff-title',!t.value.trim());
  set('ff-cat',!c.value);
  set('ff-budget',!b.value||isNaN(+b.value)||+b.value<=0);
  set('ff-timeline',!tl.value);
  set('ff-desc',d.value.trim().length<15);
  if(!ok)return;
  const tlLabel=TIMELINES.find(x=>x.val===tl.value)?.label||tl.value;
  closeModal();
  toast('Job posted','Matching '+c.options[c.selectedIndex].text+' talent — timeline: '+tlLabel+'.');
}

// ── Smart Match page (mobile) ────────────────────────────────────
let _wizHome=null;
function openWizPage(){
  const panel=document.getElementById('wizRight');
  const mount=document.getElementById('wizPageMount');
  if(!_wizHome){_wizHome=panel.parentNode;}        // remember original parent (.wiz-grid)
  mount.appendChild(panel);                         // move interactive panel into overlay
  document.getElementById('wizPageOverlay').classList.add('open');
  document.body.style.overflow='hidden';
  const sheet=document.querySelector('.wizpage-sheet');
  if(sheet)sheet.scrollTop=0;
}
function closeWizPage(){
  const panel=document.getElementById('wizRight');
  document.getElementById('wizPageOverlay').classList.remove('open');
  document.body.style.overflow='';
  if(_wizHome){_wizHome.appendChild(panel);}        // move panel back to the section
}
// ── Catalog ──────────────────────────────────────────────────────
const FEATURED_IDS=[7,2,5]; // Zanele (dev·5.0), Thabo (data·4.8), Naledi (design·4.8)
function renderFeatured(){
  const grid=document.getElementById('featGrid');
  if(!grid)return;
  const list=STUDENTS.filter(s=>FEATURED_IDS.includes(s.id));
  grid.innerHTML=list.map(s=>{
    const chips=s.skills.slice(0,4).map(sk=>`<span class="chip">${sk}</span>`).join('');
    return `<div class="tcard" onclick="openProfile(${s.id})" role="button" tabindex="0">
      <div class="thead"><div class="avatar">${s.initials}</div>
        <div style="min-width:0"><div class="name">${s.name}</div><div class="uni">${s.uni}</div>
        <span class="verified">${IC.check} Verified</span></div></div>
      <div class="blurb">${s.blurb}</div>
      <div class="chips">${chips}</div>
      <div class="tfoot">${starsHtml(s.rating)}<div class="rate">R${s.rate}<span>/hr</span></div></div>
    </div>`;
  }).join('');
}
function openCatalog(){
  var el=document.getElementById('catalogOverlay');
  el.classList.add('open');
  document.body.style.overflow='hidden';
  el.scrollTop=0;
  renderFilterCats();
  renderTalent();
}
function closeCatalog(){
  var el=document.getElementById('catalogOverlay');
  el.classList.remove('open');
  document.body.style.overflow='';
}
// ─────────────────────────────────────────────────────────────────
function showOverlay(){document.getElementById('overlay').classList.add('show');document.body.style.overflow='hidden';}
function closeModal(){document.getElementById('overlay').classList.remove('show');document.body.style.overflow='';}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeCatalog();closeWizPage();toggleMnav(false);}});
function toast(title,desc){const w=document.getElementById('toastWrap');const el=document.createElement('div');el.className='toast';el.innerHTML=`<span class="ti">${IC.check}</span><div><div class="tt">${title}</div><div class="td">${desc}</div></div><button class="tx" aria-label="Dismiss">×</button>`;el.querySelector('.tx').onclick=()=>dismiss(el);w.appendChild(el);setTimeout(()=>dismiss(el),4600);}
function dismiss(el){el.classList.add('out');setTimeout(()=>el.remove(),300);}
function toggleMnav(on){document.getElementById('mnav').classList.toggle('show',on);document.body.style.overflow=on?'hidden':'';}
function scrollToId(id){document.getElementById(id).scrollIntoView({behavior:'smooth',block:'start'});}

const _nav=document.getElementById('siteNav');
window.addEventListener('scroll',()=>{_nav.classList.toggle('scrolled',window.scrollY>16);},{passive:true});

// ═══════════════════════ AUTH & PROFILE ═══════════════════════
// In-memory session (artifacts can't use localStorage). Resets on reload.
let USER = null;
let signupRole = 'client';   // 'client' (find talent) | 'talent' (offer skills)

const G_ICON = '<svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.5 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.9a5 5 0 01-2.2 3.3v2.7h3.6c2.1-2 3.2-4.9 3.2-7.9z"/><path fill="#34A853" d="M12 23c2.9 0 5.4-1 7.2-2.6l-3.6-2.7c-1 .7-2.3 1.1-3.6 1.1-2.8 0-5.1-1.9-6-4.4H2.3v2.8A11 11 0 0012 23z"/><path fill="#FBBC05" d="M6 14.4a6.6 6.6 0 010-4.2V7.4H2.3a11 11 0 000 9.8z"/><path fill="#EA4335" d="M12 5.4c1.6 0 3 .5 4.1 1.6l3.1-3.1A11 11 0 002.3 7.4L6 10.2C6.9 7.7 9.2 5.4 12 5.4z"/></svg>';
const A_ICON = '<svg viewBox="0 0 24 24" fill="#000"><path d="M16.4 12.7c0-2 1.6-3 1.7-3a3.8 3.8 0 00-3-1.6c-1.3-.1-2.5.7-3.1.7-.7 0-1.7-.7-2.8-.7-1.4 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.5 2.2 2.6 2.2 1 0 1.4-.7 2.7-.7s1.6.7 2.7.7 1.8-1 2.5-2a8.8 8.8 0 001.1-2.3c-.1 0-2.1-.8-2.1-3zM14.3 6.3c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.6 1 .1 1.9-.5 2.5-1.2z"/></svg>';
const EYE_ICON     = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
const EYE_OFF_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';

function authClose(){closeModal();}

// ── Password helpers (called from inline oninput / onclick) ──
function togglePwVis(inputId,btnId){
  var inp=document.getElementById(inputId),btn=document.getElementById(btnId);
  if(!inp||!btn)return;
  var show=inp.type==='password';
  inp.type=show?'text':'password';
  btn.innerHTML=show?EYE_OFF_ICON:EYE_ICON;
  btn.setAttribute('aria-label',show?'Hide password':'Show password');
}
function onPwInput(val){
  var c={len:val.length>=12,upper:/[A-Z]/.test(val),lower:/[a-z]/.test(val),num:/[0-9]/.test(val),spec:/[^A-Za-z0-9]/.test(val)};
  ['len','upper','lower','num','spec'].forEach(function(k){var el=document.getElementById('pr-'+k);if(el)el.classList.toggle('met',c[k]);});
  var allMet=Object.values(c).every(Boolean);
  var conf=document.getElementById('su-pass2');
  if(conf){
    conf.style.display=allMet?'':'none';
    if(!allMet){var ci=document.getElementById('suPass2');if(ci)ci.value='';conf.classList.remove('err');}
  }
}

// ── Firebase auth UI helpers ──
function showAuthError(prefix,msg){
  const el=document.getElementById(prefix+'AuthErr');
  if(el){el.textContent=msg;el.classList.add('show');}
}
function clearAuthError(prefix){
  const el=document.getElementById(prefix+'AuthErr');
  if(el){el.textContent='';el.classList.remove('show');}
}
function setAuthBusy(btnId,busy,label){
  const b=document.getElementById(btnId);
  if(!b)return;
  b.disabled=busy;
  b.textContent=label;
}
function firebaseFallbackMessage(code){
  if(code==='auth/weak-password')return 'Password must be at least 6 characters.';
  if(code==='auth/too-many-requests')return 'Too many attempts. Please wait a moment and try again.';
  if(code==='auth/network-request-failed')return 'Network error. Check your connection and try again.';
  return 'Something went wrong. Please try again.';
}

// ---- Account-type chooser (first signup step) ----
function openSignup(){
  document.getElementById('modal').classList.add('auth-modal');
  document.getElementById('modal').innerHTML = `
    <div class="modal-head"><div><h3 style="font-size:1.25rem">Join iSpani</h3><div style="font-size:.85rem;color:var(--muted);margin-top:3px">How do you want to use iSpani?</div></div><button class="modal-x" onclick="authClose()" aria-label="Close">×</button></div>
    <div class="auth-body" style="padding-top:18px">
      <div class="acct-pick" id="acctPick">
        <div class="acct-card ${signupRole==='client'?'sel':''}" data-role="client" onclick="pickRole('client')">
          <span class="ac-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/><path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01"/></svg></span>
          <div><h4>I'm a business</h4><p>I want to hire ICT talent</p></div>
          <span class="ac-radio"></span>
        </div>
        <div class="acct-card ${signupRole==='talent'?'sel':''}" data-role="talent" onclick="pickRole('talent')">
          <span class="ac-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></span>
          <div><h4>I'm a student / graduate</h4><p>I want to offer my ICT skills</p></div>
          <span class="ac-radio"></span>
        </div>
      </div>
      <button class="btn btn-primary btn-block btn-lg" style="margin-top:18px" onclick="openSignupForm()">Continue →</button>
      <div class="auth-switch">Already have an account? <button onclick="openLogin()">Log in</button></div>
    </div>`;
  showOverlay();
}
function pickRole(r){signupRole=r;document.querySelectorAll('#acctPick .acct-card').forEach(c=>c.classList.toggle('sel',c.dataset.role===r));}

// ---- Signup form ----
function openSignupForm(){
  const roleLabel = signupRole==='talent' ? 'as ICT talent' : 'as a business';
  const maxDob = (()=>{ const d=new Date(); d.setFullYear(d.getFullYear()-18); return d.toISOString().split('T')[0]; })();
  const talentFields = signupRole==='talent' ? `
      <div class="form-field" id="su-age"><label for="suAge">Date of birth</label><input id="suAge" type="date" max="${maxDob}"><div class="errmsg">You must be 18 or older to sign up as ICT talent.</div></div>
      <div class="form-field" id="su-nation"><label for="suNation">Country of residence</label><select id="suNation"><option value="">Select…</option><option value="ZA">South Africa</option><option value="other">Other (not eligible)</option></select><div class="errmsg">ICT talent must be based in South Africa.</div></div>` : '';
  document.getElementById('modal').classList.add('auth-modal');
  document.getElementById('modal').innerHTML = `
    <div class="modal-head"><button class="modal-x" style="background:transparent" onclick="openSignup()" aria-label="Back">‹</button><div style="flex:1"></div><button class="modal-x" onclick="authClose()" aria-label="Close">×</button></div>
    <div class="auth-body" style="padding-top:0">
      <h3>${signupRole==='talent'?'Sign up to find work':'Sign up to hire'}</h3>
      <div class="auth-sub">Joining ${roleLabel}</div>
      <button class="oauth-btn" onclick="oauthSignup('Google')">${G_ICON} Continue with Google</button>
      <button class="oauth-btn" onclick="oauthSignup('Apple')">${A_ICON} Continue with Apple</button>
      <div class="auth-or">or sign up with email</div>
      <div class="form-field" id="su-name"><label for="suName">Full name</label><input id="suName" type="text" placeholder="e.g. Lerato Mokoena"><div class="errmsg">Please enter your name.</div></div>
      <div class="form-field" id="su-email"><label for="suEmail">Email</label><input id="suEmail" type="email" inputmode="email" placeholder="you@example.com"><div class="errmsg">Enter a valid email address.</div></div>
      <div class="form-field" id="su-loc"><label for="suLoc">Location</label><select id="suLoc"><option value="">Select your city…</option><option>Cape Town</option><option>Johannesburg</option><option>Durban</option><option>Pretoria</option><option>Gqeberha</option><option>Bloemfontein</option><option>Other (South Africa)</option></select><div class="errmsg">Please select your location.</div></div>
      ${talentFields}
      <div class="form-field" id="su-pass">
        <label for="suPass">Password</label>
        <div class="pw-wrap">
          <input id="suPass" type="password" placeholder="12+ chars, A–Z, a–z, 0–9, symbol" autocomplete="new-password" oninput="onPwInput(this.value)">
          <button type="button" class="pw-eye" id="suPassEye" onclick="togglePwVis('suPass','suPassEye')" aria-label="Show password">${EYE_ICON}</button>
        </div>
        <div class="pw-rules">
          <span class="pr-chip" id="pr-len">12+ chars</span>
          <span class="pr-chip" id="pr-upper">A–Z</span>
          <span class="pr-chip" id="pr-lower">a–z</span>
          <span class="pr-chip" id="pr-num">0–9</span>
          <span class="pr-chip" id="pr-spec">!@#…</span>
        </div>
        <div class="errmsg">Password must meet all requirements above.</div>
      </div>
      <div class="form-field" id="su-pass2" style="display:none">
        <label for="suPass2">Confirm password <span style="font-size:.76rem;font-weight:400;color:var(--muted)">(no pasting)</span></label>
        <div class="pw-wrap">
          <input id="suPass2" type="password" placeholder="Re-enter your password" autocomplete="new-password" onpaste="return false;" ondrop="return false;">
          <button type="button" class="pw-eye" id="suPass2Eye" onclick="togglePwVis('suPass2','suPass2Eye')" aria-label="Show password">${EYE_ICON}</button>
        </div>
        <div class="errmsg">Passwords don't match.</div>
      </div>
      <label class="check-row"><input type="checkbox" id="suTos"> <span>I have read and agree to the <button type="button" class="terms-link" onclick="openTerms()">Terms of Use &amp; Privacy Policy</button>, and I consent to iSpani processing my personal information in line with POPIA.</span></label>
      <div class="auth-error" id="suAuthErr"></div>
      <button class="btn btn-primary btn-block btn-lg" id="suSubmitBtn" onclick="submitSignup()">Create my account</button>
      <div class="auth-switch">Already have an account? <button onclick="openLogin()">Log in</button></div>
    </div>`;
  showOverlay();
  setTimeout(()=>document.getElementById('suName').focus(),120);
}
function submitSignup(){
  let ok=true;
  const n=document.getElementById('suName'),e=document.getElementById('suEmail'),
        p=document.getElementById('suPass'),l=document.getElementById('suLoc'),t=document.getElementById('suTos');
  const p2=document.getElementById('suPass2');
  const ageEl=document.getElementById('suAge'), nationEl=document.getElementById('suNation');
  const set=(id,bad)=>{document.getElementById(id).classList.toggle('err',bad);if(bad)ok=false;};

  set('su-name',!n.value.trim());
  set('su-email',!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e.value.trim()));
  set('su-loc',!l.value);

  // Talent-only: age ≥ 18 and South Africa
  if(signupRole==='talent'){
    if(ageEl){ const dob=new Date(ageEl.value),now=new Date(); const age=now.getFullYear()-dob.getFullYear()-((now.getMonth()<dob.getMonth()||(now.getMonth()===dob.getMonth()&&now.getDate()<dob.getDate()))?1:0); set('su-age',!ageEl.value||isNaN(age)||age<18); }
    if(nationEl){ set('su-nation',nationEl.value!=='ZA'); }
  }

  // Password: all 5 criteria must be met
  const pVal=p.value;
  const pwOk=pVal.length>=12&&/[A-Z]/.test(pVal)&&/[a-z]/.test(pVal)&&/[0-9]/.test(pVal)&&/[^A-Za-z0-9]/.test(pVal);
  set('su-pass',!pwOk);

  // Confirm password (only when strength criteria are all met)
  if(pwOk&&p2){ set('su-pass2',!p2.value||p2.value!==pVal); }
  else if(!pwOk&&p2){ document.getElementById('su-pass2').classList.remove('err'); }

  if(!t.checked){ok=false;toast('One more step','Please accept the Terms of Use to continue.');}
  clearAuthError('su');
  if(!ok)return;

  if(!window.firebaseAuth){ showAuthError('su','Authentication isn\'t ready yet. Please refresh and try again.'); return; }

  const email=e.value.trim(), password=pVal;
  setAuthBusy('suSubmitBtn', true, 'Creating your account…');

  window.firebaseAuth.signUp(email, password)
    .then(credential=>{
      const user = credential.user;
      const actionCodeSettings = {
        url: window.location.origin + '/verify-email.html'
      };
      return window.firebaseAuth.sendVerificationEmail(user, actionCodeSettings)
        .catch(err=>{ console.error('[iSpani] sendEmailVerification failed:', err); })
        .then(()=> window.firebaseAuth.logout())
        .then(()=>{ showVerificationScreen(email); });
    })
    .catch(err=>{
      setAuthBusy('suSubmitBtn', false, 'Create my account');
      if(err.code === 'auth/email-already-in-use'){
        showAuthError('su', 'User already exists. Please sign in');
      }else{
        showAuthError('su', firebaseFallbackMessage(err.code));
      }
    });
}
function oauthSignup(provider){
  if(!document.getElementById('suTos') || !document.getElementById('suTos').checked){
    toast('Accept the Terms first','Please tick the Terms of Use box, then continue with '+provider+'.');
    return;
  }
  if(provider==='Google'){
    googleSignupRedirect();
  }else if(provider==='Apple'){
    appleSignupRedirect();
  }
}
function googleSignupRedirect(){
  if(!OAUTH_CONFIG.GOOGLE_CLIENT_ID || OAUTH_CONFIG.GOOGLE_CLIENT_ID.includes('YOUR_')){
    toast('Setup incomplete','Add your Google Client ID to app.js');
    return;
  }
  // Store signup role in sessionStorage so the callback page knows which account type was chosen
  sessionStorage.setItem('ispani_signup_role', signupRole);
  sessionStorage.setItem('ispani_signup_tos', 'true');
  const redirectUri = encodeURIComponent(window.location.origin+'/oauth-callback.html');
  const scope = encodeURIComponent('openid email profile');
  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${OAUTH_CONFIG.GOOGLE_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&access_type=offline`;
}
function appleSignupRedirect(){
  toast('Coming soon','Apple Sign-In requires backend infrastructure. Use Google for now.');
}

// ---- Login ----
function openLogin(){
  document.getElementById('modal').classList.add('auth-modal');
  document.getElementById('modal').innerHTML = `
    <div class="modal-head"><div style="flex:1"></div><button class="modal-x" onclick="authClose()" aria-label="Close">×</button></div>
    <div class="auth-body" style="padding-top:0">
      <h3>Log in to iSpani</h3>
      <div class="auth-sub">Welcome back</div>
      <button class="oauth-btn" onclick="oauthLogin('Google')">${G_ICON} Continue with Google</button>
      <button class="oauth-btn" onclick="oauthLogin('Apple')">${A_ICON} Continue with Apple</button>
      <div class="auth-or">or</div>
      <div class="form-field" id="li-id"><label for="liId">Username or email</label><input id="liId" type="text" placeholder="you@example.com"><div class="errmsg">Enter your username or email.</div></div>
      <div class="form-field" id="li-pass"><label for="liPass">Password</label><input id="liPass" type="password" placeholder="Your password"><div class="errmsg">Enter your password.</div></div>
      <div class="auth-error" id="liAuthErr"></div>
      <button class="btn btn-primary btn-block btn-lg" id="liSubmitBtn" onclick="submitLogin()">Log in</button>
      <div class="auth-switch">New to iSpani? <button onclick="openSignup()">Sign up</button></div>
    </div>`;
  showOverlay();
  setTimeout(()=>document.getElementById('liId').focus(),120);
}
function submitLogin(){
  let ok=true;
  const id=document.getElementById('li-id'),p=document.getElementById('li-pass');
  const idv=document.getElementById('liId').value.trim(), pv=document.getElementById('liPass').value;
  const set=(el,bad)=>{el.classList.toggle('err',bad);if(bad)ok=false;};
  set(id,!idv); set(p,!pv);
  clearAuthError('li');
  if(!ok)return;

  if(!window.firebaseAuth){ showAuthError('li','Authentication isn\'t ready yet. Please refresh and try again.'); return; }

  // Firebase Authentication only supports email + password (not a free-text username).
  setAuthBusy('liSubmitBtn', true, 'Logging in…');
  window.firebaseAuth.signIn(idv, pv)
    .then(credential=>{
      setAuthBusy('liSubmitBtn', false, 'Log in');
      if(!credential.user.emailVerified){
        window.firebaseAuth.logout();
        showVerificationScreen(idv);
        return;
      }
      // ✓ Credentials correct → prompt for OTP instead of instant redirect
      showLoginOTPPrompt(idv);
    })
    .catch(err=>{
      setAuthBusy('liSubmitBtn', false, 'Log in');
      const code = err.code;
      if(code==='auth/wrong-password' || code==='auth/user-not-found' ||
         code==='auth/invalid-credential' || code==='auth/invalid-email'){
        showAuthError('li', 'Email or password is incorrect');
      }else{
        showAuthError('li', firebaseFallbackMessage(code));
      }
    });
}
// ════════════════ EMAIL VERIFICATION SCREEN ════════════════
function showVerificationScreen(email){
  document.getElementById('modal').classList.add('auth-modal');
  document.getElementById('modal').innerHTML = `
    <div class="modal-head"><div style="flex:1"></div><button class="modal-x" onclick="authClose()" aria-label="Close">×</button></div>
    <div class="auth-body" style="padding-top:0">
      <div style="margin:0 auto 20px;width:58px;height:58px;border-radius:50%;background:var(--blue-50);color:var(--blue);display:grid;place-items:center">
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>
      </div>
      <h3 style="text-align:center">Check your inbox</h3>
      <div class="auth-sub" style="text-align:center">We have sent you a verification email to <strong>${email}</strong>. Please verify it and log in.</div>
      <button class="btn btn-primary btn-block btn-lg" style="margin-top:24px" onclick="authClose();openLogin()">Login</button>
    </div>`;
  showOverlay();
}

// ════════════════ LOGIN OTP VERIFICATION ════════════════
function showLoginOTPPrompt(email){
  _loginOTP = { code: String(Math.floor(100000 + Math.random()*900000)), tries: 0 };
  
  const modal = document.getElementById('modal');
  modal.classList.add('auth-modal');
  modal.innerHTML = `
    <div class="modal-head"><button class="modal-x" style="background:transparent" onclick="openLogin()" aria-label="Back">‹</button><div style="flex:1"></div><button class="modal-x" onclick="authClose()" aria-label="Close">×</button></div>
    <div class="auth-body" style="padding-top:0">
      <div class="as-ico" style="margin:0 auto 16px;width:58px;height:58px;border-radius:50%;background:var(--blue-50);color:var(--blue);display:grid;place-items:center"><svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg></div>
      <h3>Verify it's you</h3>
      <div class="auth-sub">Enter the 6-digit code we sent to <strong>${email}</strong></div>
      <div class="otp-wrap" id="otpWrap">
        ${[0,1,2,3,4,5].map(i=>`<input class="otp-box" id="otp${i}" inputmode="numeric" maxlength="1" autocomplete="one-time-code" aria-label="Digit ${i+1}">`).join('')}
      </div>
      <div class="otp-meta">Didn't get it? <button class="otp-resend" onclick="resendLoginOTP()">Resend code</button></div>
      <button class="btn btn-primary btn-block btn-lg" onclick="verifyLoginOTP()">Verify &amp; continue</button>
      <div class="otp-demo">Prototype demo — your code is <b id="otpDemoLogin">${_loginOTP.code}</b></div>
    </div>`;
  showOverlay();
  setupOTPInputs('otp', ()=>verifyLoginOTP());  // reuse the OTP input setup from earlier
  setTimeout(()=>{const f=document.getElementById('otp0');if(f)f.focus();},120);
}

function resendLoginOTP(){
  _loginOTP.code = String(Math.floor(100000 + Math.random()*900000));
  _loginOTP.tries = 0;
  const d = document.getElementById('otpDemoLogin');
  if(d) d.textContent = _loginOTP.code;
  toast('Code resent','A new code is on its way.');
}

function verifyLoginOTP(){
  if(!_loginOTP) return;
  const entered = [0,1,2,3,4,5].map(i=>document.getElementById('otp'+i).value).join('');
  if(entered.length < 6){ return; }
  
  if(entered !== _loginOTP.code){
    _loginOTP.tries++;
    [...document.querySelectorAll('.otp-box')].forEach(b=>b.value='');
    document.getElementById('otp0').focus();
    if(_loginOTP.tries >= 5){
      authClose();
      toast('Too many attempts','For your security, please start again.');
      _loginOTP = null;
    }
    return;
  }
  
  // ✓ OTP correct → go to landing page in logged-in state
  _loginOTP = null;
  authClose();
  window.location.href = 'index.html';
}


function oauthLogin(provider){
  if(provider==='Google'){
    googleLoginRedirect();
  }else if(provider==='Apple'){
    appleLoginRedirect();
  }
}
function googleLoginRedirect(){
  if(!OAUTH_CONFIG.GOOGLE_CLIENT_ID || OAUTH_CONFIG.GOOGLE_CLIENT_ID.includes('YOUR_')){
    toast('Setup incomplete','Add your Google Client ID to app.js');
    return;
  }
  sessionStorage.setItem('ispani_signup_role', '');  // Not signup, so no role needed
  const redirectUri = encodeURIComponent(window.location.origin+'/oauth-callback.html');
  const scope = encodeURIComponent('openid email profile');
  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${OAUTH_CONFIG.GOOGLE_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&access_type=offline`;
}
function appleLoginRedirect(){
  toast('Coming soon','Apple Sign-In requires backend infrastructure. Use Google for now.');
}

// ---- Session helpers ----
function initials(name){return name.trim().split(/\s+/).slice(0,2).map(w=>w[0]||'').join('').toUpperCase()||'U';}
function signIn(name,email,location,role,method){
  USER={name,email,location,role,method,
        avatar:null,           // profile picture URL (none yet → icon/initials shown)
        initials:initials(name),
        title: role==='talent'?'ICT Student / Graduate':'Business / Client',
        rate: role==='talent'?250:null,
        skills: role==='talent'?['Add your skills']:[],
        about:''};
  renderNavAuth();
}

// ═══════════ Firebase session sync (real auth state, no profile data saved) ═══════════
// Called by js/firebase-config.js whenever Firebase's auth state changes.
function onFirebaseAuthChanged(user){
  if(user && !user.emailVerified){
    // Email not verified — block app-level access without calling logout() here.
    // (Calling logout() inside onAuthStateChanged can race with sendEmailVerification.)
    // The explicit logout() calls in submitSignup / submitLogin handle session cleanup.
    USER = null;
    renderNavAuth();
    if(document.getElementById('dashboardPage')){ window.location.href='index.html'; }
    return;
  }
  if(user){
    const localPart = (user.email||'user').split('@')[0].replace(/[._]/g,' ');
    USER = {
      name: localPart, email: user.email, location:'', role:'talent', method:'email',
      avatar:user.photoURL||null, initials:initials(localPart),
      title:'ICT Student / Graduate', rate:null, skills:[], about:''
    };
  }else{
    USER = null;
  }
  renderNavAuth();

  // Dashboard page: guard + render
  if(document.getElementById('dashboardPage')){
    if(!user){ window.location.href='index.html'; }
    else{ renderDashboard(user); }
  }
}
function renderDashboard(user){
  const el=document.getElementById('dashEmail');
  if(el)el.textContent=user.email;
}
// ════════════════ TWO-FACTOR AUTHENTICATION ════════════════
// NOTE: In production the OTP is generated and verified SERVER-SIDE and
// delivered via SMS/email/authenticator app. This prototype simulates the
// flow client-side for demonstration only and is NOT secure on its own.
let _2fa = null;
let _loginOTP = null;  // Current login attempt's OTP
function _genOTP(){return String(Math.floor(100000 + Math.random()*900000));}
function start2FA(payload){
  _2fa = { payload, code:_genOTP(), tries:0 };
  const masked = maskEmail(payload.email);
  document.getElementById('modal').classList.add('auth-modal');
  document.getElementById('modal').innerHTML = `
    <div class="modal-head"><button class="modal-x" style="background:transparent" onclick="${payload.role&&payload.tosAcceptedAt?'openSignupForm':'openLogin'}()" aria-label="Back">‹</button><div style="flex:1"></div><button class="modal-x" onclick="authClose()" aria-label="Close">×</button></div>
    <div class="auth-body" style="padding-top:0">
      <div class="as-ico" style="margin:0 auto 16px;width:58px;height:58px;border-radius:50%;background:var(--blue-50);color:var(--blue);display:grid;place-items:center"><svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg></div>
      <h3>Verify it's you</h3>
      <div class="auth-sub">Enter the 6-digit code we sent to <strong>${masked}</strong></div>
      <div class="otp-wrap" id="otpWrap">
        ${[0,1,2,3,4,5].map(i=>`<input class="otp-box" id="otp${i}" inputmode="numeric" maxlength="1" autocomplete="one-time-code" aria-label="Digit ${i+1}">`).join('')}
      </div>
      <div class="form-field" id="otp-err" style="margin:0"><div class="errmsg" style="text-align:center">That code isn't right. Please try again.</div></div>
      <div class="otp-meta">Didn't get it? <button class="otp-resend" onclick="resend2FA()">Resend code</button></div>
      <button class="btn btn-primary btn-block btn-lg" onclick="verify2FA()">Verify &amp; continue</button>
      <div class="otp-demo">Prototype demo — your code is <b id="otpDemo">${_2fa.code}</b></div>
    </div>`;
  showOverlay();
  setupOTPInputs();
  setTimeout(()=>{const f=document.getElementById('otp0');if(f)f.focus();},120);
}
function maskEmail(e){
  if(!e||!e.includes('@'))return e||'your contact';
  const [u,d]=e.split('@');
  return (u.length<=2?u[0]+'*':u.slice(0,2)+'***')+'@'+d;
}
function setupOTPInputs(){
  const boxes=[...document.querySelectorAll('.otp-box')];
  boxes.forEach((b,i)=>{
    b.addEventListener('input',()=>{
      b.value=b.value.replace(/\D/g,'').slice(0,1);
      if(b.value && i<boxes.length-1)boxes[i+1].focus();
      document.getElementById('otp-err').classList.remove('err');
    });
    b.addEventListener('keydown',e=>{
      if(e.key==='Backspace' && !b.value && i>0)boxes[i-1].focus();
      if(e.key==='Enter')verify2FA();
    });
    b.addEventListener('paste',e=>{
      e.preventDefault();
      const d=(e.clipboardData.getData('text')||'').replace(/\D/g,'').slice(0,6).split('');
      boxes.forEach((bx,j)=>bx.value=d[j]||'');
      if(d.length)boxes[Math.min(d.length,5)].focus();
    });
  });
}
function resend2FA(){
  _2fa.code=_genOTP(); _2fa.tries=0;
  const d=document.getElementById('otpDemo'); if(d)d.textContent=_2fa.code;
  toast('Code resent','A new code is on its way.');
}
function verify2FA(){
  if(!_2fa)return;
  const entered=[0,1,2,3,4,5].map(i=>document.getElementById('otp'+i).value).join('');
  if(entered.length<6){document.getElementById('otp-err').classList.add('err');return;}
  if(entered!==_2fa.code){
    _2fa.tries++;
    document.getElementById('otp-err').classList.add('err');
    [...document.querySelectorAll('.otp-box')].forEach(b=>b.value='');
    document.getElementById('otp0').focus();
    if(_2fa.tries>=5){ authClose(); toast('Too many attempts','For your security, please start again.'); _2fa=null; }
    return;
  }
  // Success → create/establish the session
  const p=_2fa.payload;
  signIn(p.name, p.email, p.location, p.role, p.method);
  if(p.tosAcceptedAt && USER) USER.tosAcceptedAt = p.tosAcceptedAt;
  if(USER) USER.twoFA = true;
  _2fa=null;
  authClose();
  if(typeof p.done==='function')p.done();
}

// ════════════════ TERMS OF USE (POPIA-aligned) ════════════════
function openTerms(){
  document.getElementById('modal').classList.add('auth-modal');
  document.getElementById('modal').innerHTML = `
    <div class="modal-head"><div><h3 style="font-size:1.2rem">Terms of Use &amp; Privacy</h3><div class="terms-doc upd" style="margin-top:3px">Last updated: June 2026 · iSpani (Pty) Ltd</div></div><button class="modal-x" onclick="openSignupForm()" aria-label="Close">×</button></div>
    <div class="modal-body">
      <div class="terms-doc">
        <h4>1. Who we are</h4>
        <p>iSpani (Pty) Ltd ("iSpani", "we") operates this marketplace connecting South African ICT students and graduates with businesses. We are the Responsible Party for your personal information under the Protection of Personal Information Act, 2013 (POPIA).</p>

        <h4>2. Information we collect</h4>
        <ul>
          <li>Account details: name, email, password (stored hashed), location and account type.</li>
          <li>Profile data you choose to add: skills, portfolio, education and rate.</li>
          <li>Verification data: proof of enrolment or qualification, processed only to confirm credibility.</li>
          <li>Technical data: device, log and security information used to protect your account.</li>
        </ul>

        <h4>3. How we use it (purpose limitation)</h4>
        <p>We process your information only to operate the marketplace — creating your account, matching talent with work, enabling secure payments via escrow, and keeping the platform safe. We do not sell your personal information.</p>

        <h4>4. Your POPIA rights</h4>
        <ul>
          <li>Access the personal information we hold about you.</li>
          <li>Request correction or deletion of your information.</li>
          <li>Object to processing or withdraw consent at any time.</li>
          <li>Lodge a complaint with the Information Regulator (South Africa).</li>
        </ul>

        <h4>5. Consent</h4>
        <p>By creating an account you consent to the processing of your personal information as described here. Consent is voluntary and may be withdrawn, though some features may then be unavailable. Where you are under 18, a parent or guardian must consent on your behalf.</p>

        <h4>6. Security</h4>
        <p>We apply technical and organisational safeguards including encryption in transit and at rest, hashed passwords, two-factor authentication, access controls and monitoring. No system is perfectly secure, and you are responsible for keeping your credentials confidential.</p>

        <h4>7. Data retention &amp; sharing</h4>
        <p>We keep your information only as long as needed for the purposes above or as required by law, then delete or anonymise it. Limited sharing occurs with payment and verification providers under contract, and with authorities where legally required.</p>

        <h4>8. Contact</h4>
        <p>Information Officer, iSpani (Pty) Ltd — privacy@ispani.co.za. You may also contact the Information Regulator at inforeg.org.za.</p>

        <p class="upd" style="margin-top:14px">This is a prototype document for demonstration. Have it reviewed by a qualified South African attorney before launch.</p>
      </div>
      <button class="btn btn-primary btn-block btn-lg" style="margin-top:18px" onclick="acceptTermsFromDoc()">I agree — go back</button>
    </div>`;
  showOverlay();
}
function acceptTermsFromDoc(){
  openSignupForm();
  setTimeout(()=>{const c=document.getElementById('suTos');if(c)c.checked=true;},60);
}

function signOut(){
  if(window.firebaseAuth){
    window.firebaseAuth.logout().finally(()=>{ window.location.href='index.html'; });
  }else{
    USER=null; renderNavAuth(); closeProfilePage();
    window.location.href='index.html';
  }
}

// ---- Nav reflects auth state ----
function renderNavAuth(){
  document.querySelectorAll('[data-auth-guest]').forEach(el=>el.style.display = USER?'none':'');
  document.querySelectorAll('[data-auth-user]').forEach(el=>el.style.display = USER?'':'none');
  if(USER){
    document.querySelectorAll('.na-av').forEach(a=>a.textContent=USER.initials);
    document.querySelectorAll('.na-name').forEach(n=>n.textContent=USER.name.split(' ')[0]);
  }
  renderProfileBtn();
}
// Profile button: pic if logged-in & has one, else initials if logged-in, else generic icon
function renderProfileBtn(){
  const b=document.getElementById('navProf');
  if(!b)return;
  if(USER && USER.avatar){
    b.innerHTML='<img src="'+USER.avatar+'" alt="'+USER.name+'">';
    b.setAttribute('aria-label','Your profile');
  }else if(USER){
    b.innerHTML='<span class="np-initials">'+USER.initials+'</span>';
    b.setAttribute('aria-label','Your profile');
  }else{
    b.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a7 7 0 0114 0v1"/></svg>';
    b.setAttribute('aria-label','Log in or sign up');
  }
}
// Profile button click: logged in → profile page; else → auth slider
function profileBtn(){
  if(USER){openProfilePage();}
  else{toggleAuthSlider(true);}
}
function toggleAuthSlider(on){
  document.getElementById('authSlider').classList.toggle('show',on);
  document.body.style.overflow=on?'hidden':'';
}

// ---- Profile page ----
function renderProfileInto(mountId){
  if(!USER)return false;
  const u=USER;
  const mount=document.getElementById(mountId);
  if(!mount)return false;
  const skillsHtml = (u.role==='talent' && u.skills.length)
    ? u.skills.map(s=>`<span class="chip">${s}</span>`).join('')
    : '<span class="pf-empty">No skills added yet.</span>';
  const rateHtml = u.role==='talent'
    ? `<div class="pf-rate"><div class="r-n">R${u.rate}<span style="font-size:.9rem;font-weight:400;color:var(--muted)">/hr</span></div><div class="r-l">Hourly rate</div></div>` : '';
  mount.innerHTML = `
    <div class="pf-card">
      <div class="pf-id">
        <div class="pf-av">${u.initials}</div>
        <div class="pf-id-main">
          <h1>${u.name}</h1>
          <div class="pf-title">${u.title}</div>
          <div class="pf-loc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>${u.location}, South Africa</div>
          ${u.role==='talent'?'<span class="pf-verified">'+IC.check+' Verification pending</span>':''}
        </div>
        ${rateHtml}
      </div>
      <div class="pf-actions">
        <button class="btn btn-primary" onclick="toast('Coming soon','Profile editing is part of the next build phase.')">Edit profile</button>
        <button class="btn btn-outline" onclick="signOut()">Sign out</button>
      </div>
    </div>

    <div class="pf-grid">
      <div class="pf-block">
        <h3>About</h3>
        ${u.about?`<p>${u.about}</p>`:'<p class="pf-empty">Tell clients about yourself — add a short bio in the next build phase.</p>'}
      </div>
      <div class="pf-block">
        <h3>${u.role==='talent'?'Skills':'Hiring interests'}</h3>
        <div class="chips">${skillsHtml}</div>
      </div>
      <div class="pf-block">
        <h3>${u.role==='talent'?'Portfolio':'Posted jobs'}</h3>
        <p class="pf-empty">${u.role==='talent'?'No portfolio items yet.':'No jobs posted yet.'}</p>
      </div>
      <div class="pf-block">
        <h3>Account</h3>
        <p style="color:var(--muted);font-size:.86rem"><strong style="color:var(--ink)">Email:</strong> ${u.email}<br>
        <strong style="color:var(--ink)">Signed in via:</strong> ${u.method}<br>
        <strong style="color:var(--ink)">Account type:</strong> ${u.role==='talent'?'ICT talent':'Business'}<br>
        <strong style="color:var(--ink)">Two-factor auth:</strong> ${u.twoFA?'<span style="color:var(--blue);font-weight:700">Enabled ✓</span>':'Off'}<br>
        <strong style="color:var(--ink)">Terms accepted:</strong> ${u.tosAcceptedAt?new Date(u.tosAcceptedAt).toLocaleDateString():'—'}</p>
      </div>
    </div>`;
  return true;
}
// Overlay version (used on landing/other pages where profile is a modal-style overlay)
function openProfilePage(){
  if(!USER){openLogin();return;}
  const ov=document.getElementById('profileOverlay');
  // If a standalone profile page exists in this document, just go there
  if(!ov){ location.href='profile.html'; return; }
  renderProfileInto('profileMount');
  ov.classList.add('open');
  document.body.style.overflow='hidden';
  ov.scrollTop=0;
}
function closeProfilePage(){
  const ov=document.getElementById('profileOverlay');
  if(ov)ov.classList.remove('open');
  document.body.style.overflow='';
}

// Wire profile/auth into existing modal cleanup (remove auth-modal class on close)
const _origCloseModal = closeModal;
closeModal = function(){document.getElementById('modal').classList.remove('auth-modal');_origCloseModal();};

// Escape also closes profile
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeProfilePage();toggleAuthSlider(false);}});

// ─────────────────────── PER-PAGE BOOTSTRAP ───────────────────────
// Each render fn is null-guarded, so calling them on any page is safe.
renderNavAuth();
renderCats();
renderWizCats();
renderFeatured();
renderFilterCats();
setWizStep(1);

// After email verification, verify-email.html sets this flag so we open login immediately
if(sessionStorage.getItem('ispani_auto_login')){
  sessionStorage.removeItem('ispani_auto_login');
  setTimeout(openLogin, 350);
}

// Catalog page: populate the talent grid on load (real page, not overlay)
if(document.getElementById('catalogPage')){ renderTalent(); }

// Profile page: render the logged-in user, or bounce to login
if(document.getElementById('profilePage')){
  if(USER){ renderProfileInto('profileMount'); }
  else {
    // No session on this standalone page → offer login
    const mount=document.getElementById('profileMount');
    if(mount){ mount.innerHTML='<div class="pf-card" style="text-align:center"><h1 style="font-size:1.3rem">You\'re not logged in</h1><p style="color:var(--muted);margin:10px 0 18px">Log in or sign up to view your profile.</p><div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><button class="btn btn-primary btn-lg" onclick="openLogin()">Log in</button><button class="btn btn-outline btn-lg" onclick="openSignup()">Sign up</button></div></div>'; }
  }
}

// ── Flow section sequential animation (landing only) ──
(function(){
  var fl=document.querySelector('.flow');
  if(!fl)return;
  if(window.matchMedia('(prefers-reduced-motion:reduce)').matches)return;
  fl.classList.add('will-animate');
  var io=new IntersectionObserver(function(entries,obs){
    entries.forEach(function(e){
      if(e.isIntersecting){
        fl.classList.remove('will-animate');
        void fl.offsetWidth;
        fl.classList.add('animated');
        obs.disconnect();
      }
    });
  },{threshold:0.35});
  io.observe(fl);
})();
