(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=e,n=t.getContext(`2d`),r=[],i=()=>{t.width=window.innerWidth,t.height=window.innerHeight,a()};function a(){r=[],[{count:50,radius:2,opacity:[.7,.9],speed:.2,color:`#EEF2FF`},{count:75,radius:1.5,opacity:[.4,.6],speed:.15,color:`#EEF2FF`},{count:150,radius:1,opacity:[.2,.4],speed:.1,color:`#EEF2FF`},{count:6,radius:2.5,opacity:[.5,.5],speed:0,color:`#00E5FF`}].forEach(e=>{for(let n=0;n<e.count;n++)r.push({x:Math.random()*t.width,y:Math.random()*t.height,dx:(Math.random()-.5)*e.speed,dy:(Math.random()-.5)*e.speed,radius:e.radius,opacity:e.opacity[0]+Math.random()*(e.opacity[1]-e.opacity[0]),color:e.color})})}function o(){n.fillStyle=`#000000`,n.fillRect(0,0,t.width,t.height),r.forEach(e=>{n.save(),n.beginPath(),n.globalAlpha=e.opacity,n.fillStyle=e.color,e.color===`#00E5FF`&&(n.shadowBlur=10,n.shadowColor=`#00E5FF`),n.arc(e.x,e.y,e.radius,0,Math.PI*2),n.fill(),n.restore()})}function s(){r.forEach(e=>{e.x+=e.dx,e.y+=e.dy,e.x<0&&(e.x=t.width),e.x>t.width&&(e.x=0),e.y<0&&(e.y=t.height),e.y>t.height&&(e.y=0)}),t.style.position=`fixed`,t.style.zIndex=`-1`,o(),requestAnimationFrame(s)}window.addEventListener(`resize`,i),i(),s()}function t(e){e.innerHTML=`
    <div class="flex items-center gap-2">
      <button class="actionBtns px-3 sm:px-4 py-2 flex items-center justify-center font-familjen text-[10px] sm:text-ui-navitem uppercase text-text-primary hover:text-text-primary whitespace-nowrap">
        MAP
      </button>
      <div class="w-px h-5 bg-border mx-1 sm:mx-2"></div>

      <button class="actionBtns px-3 sm:px-4 py-2 flex items-center justify-center gap-1 sm:gap-1.5 font-familjen text-[10px] sm:text-ui-navitem uppercase text-text-secondary border-b-2 border-transparent hover:text-text-primary whitespace-nowrap">
        COMPARE
        <span class="hidden sm:flex items-center justify-center bg-signal text-text-on-accent text-[8px] sm:text-[9px] font-bold rounded-sm px-0.5 sm:px-1 py-0.5 min-w-[16px] sm:min-w-[18px] h-[14px] sm:h-[16px] font-mono tracking-normal shadow-marker">
          12
        </span>
      </button>
    </div>
  `}var n=e=>e?e>=1e9?(e/1e9).toFixed(1)+`B`:e>=1e6?(e/1e6).toFixed(1)+`M`:e>=1e3?(e/1e3).toFixed(0)+`K`:e.toString():`—`,r=async()=>(await fetch(`https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,population,area,cca3,flag`)).json(),i=(e,t,n)=>{let r=t.search.trim().toLowerCase();return e.filter(e=>{if(t.region&&e.region!==t.region||t.pop&&(e.population||0)<t.pop)return!1;if(!r)return!0;let n=(e.name?.common||``).toLowerCase(),i=(e.capital?.[0]||``).toLowerCase(),a=(e.region||``).toLowerCase();return n.includes(r)||i.includes(r)||a.includes(r)}).sort((e,t)=>{let r={"pop-desc":()=>(t.population||0)-(e.population||0),"pop-asc":()=>(e.population||0)-(t.population||0),"area-desc":()=>(t.area||0)-(e.area||0),default:()=>(e.name?.common||``).localeCompare(t.name?.common||``)};return(r[n]||r.default)()})};function a(e,{onInput:t,onClose:n}){e.innerHTML=`
    <div class="flex items-center gap-2.5 px-4 h-[52px] border-b border-border shrink-0">
      <span class="text-signal text-base shrink-0">⌕</span>
      <input
        id="cmd-input"
        type="text"
        class="flex-1 bg-transparent border-none outline-none font-familjen text-[15px] text-text-primary min-w-0 placeholder:text-text-tertiary"
        placeholder="Search country, capital or region…"
        autocomplete="off"
        spellcheck="false"
      >
      <span id="cmd-esc-badge" class="px-1.5 py-0.5 bg-surface-mid border border-border-strong rounded-[3px] font-azeret-mono text-[9px] tracking-widest text-text-tertiary cursor-pointer shrink-0 select-none transition-colors hover:text-text-secondary">
        ESC
      </span>
    </div>
  `,e.querySelector(`#cmd-input`).addEventListener(`input`,e=>t(e.target.value)),e.querySelector(`#cmd-esc-badge`).addEventListener(`click`,n)}function o(e,{regions:t,popFilters:n,activeRegion:r,activePop:i,onFilterRegion:a,onFilterPop:o}){e.innerHTML=`
    <div class="flex flex-wrap gap-1.5 px-4 py-2.5 border-b border-border shrink-0">
      <div 
        class="cmd-filter-chip px-2.5 h-[26px] flex items-center bg-surface-mid border ${r?`border-border text-text-secondary`:`border-signal text-signal bg-signal-tint`} rounded-[13px] font-familjen text-[10px] font-medium tracking-widest cursor-pointer uppercase transition-all select-none hover:border-border-strong hover:text-text-primary"
        data-region=""
      >ALL</div>
      ${t.map(e=>`
        <div 
          class="cmd-filter-chip px-2.5 h-[26px] flex items-center bg-surface-mid border ${r===e?`border-signal text-signal bg-signal-tint`:`border-border text-text-secondary`} rounded-[13px] font-familjen text-[10px] font-medium tracking-widest cursor-pointer uppercase transition-all select-none hover:border-border-strong hover:text-text-primary"
          data-region="${e}"
        >${e}</div>
      `).join(``)}
      ${n.map(e=>`
        <div 
          class="cmd-filter-chip px-2.5 h-[26px] flex items-center bg-surface-mid border ${i===e.value?`border-signal text-signal bg-signal-tint`:`border-border text-text-secondary`} rounded-[13px] font-familjen text-[10px] font-medium tracking-widest cursor-pointer uppercase transition-all select-none hover:border-border-strong hover:text-text-primary"
          data-pop="${e.value}"
        >${e.label}</div>
      `).join(``)}
    </div>
  `,e.querySelectorAll(`[data-region]`).forEach(e=>{e.addEventListener(`click`,()=>a(e.dataset.region))}),e.querySelectorAll(`[data-pop]`).forEach(e=>{e.addEventListener(`click`,()=>o(parseInt(e.dataset.pop,10)))})}function s(e,{sortOptions:t,currentSort:n,onSort:r}){e.innerHTML=`
    <div class="flex items-center px-4 h-[38px] border-b border-border shrink-0 gap-0">
      <div class="font-azeret-mono text-[9px] font-light tracking-[0.15em] text-text-tertiary uppercase mr-3 shrink-0">Sort:</div>
      ${t.map(e=>`
        <div 
          class="px-2.5 h-[38px] flex items-center font-familjen text-[10px] font-bold tracking-widest uppercase cursor-pointer relative transition-colors select-none shrink-0 ${n===e.value?`text-text-primary`:`text-text-tertiary hover:text-text-secondary text-text-tertiary`}"
          data-sort="${e.value}"
        >
          ${e.label}
          ${n===e.value?`<div class="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-signal rounded-sm"></div>`:``}
        </div>
      `).join(``)}
    </div>
  `,e.querySelectorAll(`[data-sort]`).forEach(e=>{e.addEventListener(`click`,()=>r(e.dataset.sort))})}function c(e,{count:t}){e.innerHTML=`
    <div class="flex justify-between items-center px-4 pt-2 pb-1 shrink-0">
      <span class="font-azeret-mono text-[9px] font-light tracking-[0.15em] text-text-tertiary uppercase">Results</span>
      <span id="cmd-results-count" class="font-azeret-mono text-[10px] text-text-secondary">
        ${t} ${t===1?`country`:`countries`}
      </span>
    </div>
  `}function l(e,{countries:t,isLoading:r,searchQuery:i}){if(r){e.innerHTML=`<div class="p-8 text-center font-azeret-mono text-[11px] tracking-widest text-text-tertiary">Loading countries…</div>`;return}if(t.length===0){e.innerHTML=`<div class="p-8 text-center font-azeret-mono text-[11px] tracking-widest text-text-tertiary">No results for "<em>${i}</em>"</div>`;return}e.innerHTML=`
    <div id="cmd-results-list" class="overflow-y-auto flex-1 h-full scroll-smooth scrollbar-thin scrollbar-thumb-signal-tint">
      ${t.map(e=>`
        <div class="group flex items-center gap-3 px-4 h-[52px] cursor-pointer relative transition-colors border-b border-border last:border-none hover:bg-signal-tint" data-cca3="${e.cca3}">
          <div class="absolute left-0 top-0 bottom-0 w-[3px] bg-signal origin-left scale-x-0 transition-transform group-hover:scale-x-100"></div>
          <span class="text-lg w-6 text-center shrink-0">${e.flag||`🌐`}</span>
          <div class="flex-1 min-w-0">
            <div class="font-familjen text-[13px] font-medium text-text-primary truncate">${e.name?.common||`—`}</div>
            <div class="font-azeret-mono text-[10px] font-light text-text-secondary tracking-widest">${e.capital?.[0]||`—`} · ${e.region||`—`}</div>
          </div>
          <span class="font-azeret-mono text-[11px] font-light text-text-tertiary shrink-0">${n(e.population)}</span>
        </div>
      `).join(``)}
    </div>
  `}var u=[],d={search:``,region:``,pop:0},f=`name`,p=!1,m=!1,h=null,g=[`Africa`,`Americas`,`Asia`,`Europe`,`Oceania`],_=[{label:`1M+ Pop`,value:1e6},{label:`100M+ Pop`,value:1e8}],v=[{label:`Name`,value:`name`},{label:`Pop ↓`,value:`pop-desc`},{label:`Pop ↑`,value:`pop-asc`},{label:`Area ↓`,value:`area-desc`}],y=()=>{let e=document.getElementById(`command-bar`);if(!e)return;let t=i(u,d,f);a(e.querySelector(`#cmd-search-container`),{onInput:e=>{clearTimeout(h),h=setTimeout(()=>{d.search=e,y()},240)},onClose:x}),o(e.querySelector(`#cmd-filters-container`),{regions:g,popFilters:_,activeRegion:d.region,activePop:d.pop,onFilterRegion:e=>{d.region=e,d.pop=0,y()},onFilterPop:e=>{d.pop=d.pop===e?0:e,d.region=``,y()}}),s(e.querySelector(`#cmd-sort-container`),{sortOptions:v,currentSort:f,onSort:e=>{f=e,y()}}),c(e.querySelector(`#cmd-results-header-container`),{count:t.length}),l(e.querySelector(`#cmd-results-list-container`),{countries:t,isLoading:!m,searchQuery:d.search});let n=document.getElementById(`cmd-input`);n&&n.value!==d.search&&(n.value=d.search)},b=()=>{p=!0;let e=document.getElementById(`command-bar`);if(!e)return;e.classList.remove(`opacity-0`,`pointer-events-none`,`-translate-y-4`,`scale-[0.97]`),e.classList.add(`opacity-100`,`pointer-events-auto`,`translate-y-0`,`scale-100`),e.querySelector(`.cmd-accent-line`).classList.add(`scale-x-100`);let t=document.getElementById(`cmd-input`);t&&(t.focus(),t.select())},x=()=>{p=!1;let e=document.getElementById(`command-bar`);e&&(e.classList.add(`opacity-0`,`pointer-events-none`,`-translate-y-4`,`scale-[0.97]`),e.classList.remove(`opacity-100`,`pointer-events-auto`,`translate-y-0`,`scale-100`),e.querySelector(`.cmd-accent-line`).classList.remove(`scale-x-100`))},S=()=>p?x():b();function C(e){e.innerHTML=`
    <div id="command-bar" class="fixed top-16 left-1/2 -translate-x-1/2 -translate-y-4 scale-[0.97] w-[min(560px,calc(100vw-32px))] max-h-[min(620px,calc(100vh-96px))] bg-overlay-command backdrop-blur-command border border-border rounded-default shadow-command z-[300] opacity-0 pointer-events-none flex flex-col overflow-hidden transition-all duration-300 ease-out">
      <div class="cmd-accent-line h-0.5 bg-gradient-to-r from-signal via-[rgba(0,229,255,0.25)] to-transparent shrink-0 origin-left scale-x-0 transition-transform duration-[350ms] delay-75 ease-out"></div>
      <div id="cmd-search-container"></div>
      <div id="cmd-filters-container"></div>
      <div id="cmd-sort-container"></div>
      <div id="cmd-results-header-container"></div>
      <div id="cmd-results-list-container" class="flex-1 overflow-hidden"></div>
    </div>
  `,y(),r().then(e=>{u=e,m=!0,y()}).catch(()=>{m=!0,y()}),document.addEventListener(`keydown`,e=>{(e.metaKey||e.ctrlKey)&&e.key===`k`&&(e.preventDefault(),S()),e.key===`Escape`&&p&&x()}),document.addEventListener(`mousedown`,e=>{let t=document.getElementById(`command-bar`);t&&!t.contains(e.target)&&!e.target.closest(`.search-icon-hover`)&&x()})}function w(e){e.innerHTML=`
    <div class="flex items-center gap-2.5">
      <div id="navbar-view-toggle" class="flex items-center"></div>
      <div class="tooltip flex items-center justify-center px-2" id="search-trigger">
          <span class="font-familjen text-[18px] text-text-secondary cursor-pointer transition-colors duration-200 search-icon-hover">
            ⌕
          </span>
          <span class="tooltip-text">⌘+K to search</span>
      </div>
    </div>
  `,t(e.querySelector(`#navbar-view-toggle`)),e.querySelector(`#search-trigger`).addEventListener(`click`,()=>{S()})}function T(e){e.innerHTML=`
    <div class="flex items-center gap-1 sm:gap-2">
      <div class="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green pulse-dot" style="box-shadow: 0 0 4px var(--color-green-tint);"></div>
      <span class="font-azeret-mono text-[8px] sm:text-ui-label tracking-[1.5px] sm:tracking-[2px] text-text-secondary uppercase whitespace-nowrap">
        195 COUNTRIES  ·  LIVE DATA
      </span>
    </div>
  `}function E(e){e.style.zIndex=`1`,e.innerHTML=`
    <div class= 
      "fixed top-0 left-0 right-0
      h-[5.34vh]
      grid grid-cols-[1fr_auto_1fr]
      items-stretch
      px-4 sm:px-6
      bg-overlay-topbar
      backdrop-blur-topbar
      shadow-topbar
      text-text-primary
      font-sans
      z-[200]"
      >
            <div id="navbar-logo" class="flex items-center justify-start">
                <span class="font-bebas text-[18px] sm:text-[22px] tracking-[6px] sm:tracking-[8px] text-text-primary ">
                    TERRA
                </span>
            </div>
            <div id="navbar-status" class="flex items-center justify-center"></div>
            <div id="navbar-actions" class="flex items-center justify-end"></div>
            <div class="absolute bottom-0 left-0 w-full h-px bg-border"></div>
    </div>
  `;let t=e.querySelector(`#navbar-status`),n=e.querySelector(`#navbar-actions`);T(t),w(n)}document.querySelector(`#app`).innerHTML=`
  <canvas id="starCanvas" style="width: 100vw; height: 100vh; overflow: hidden"></canvas>
  <nav id="navbar"></nav>
  <div id="commandbar-mount"></div>
`,e(document.getElementById(`starCanvas`)),E(document.getElementById(`navbar`)),C(document.getElementById(`commandbar-mount`));