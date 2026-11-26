/* ---- original inline <script> block 1 ---- */
(function(){
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* mobile menu */
  var burger = document.getElementById("burger");
  var links = document.getElementById("navLinks");
  burger.addEventListener("click", function(){
    var open = links.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.textContent = open ? "✕" : "☰";
  });
  links.addEventListener("click", function(e){
    if(e.target.tagName === "A"){ links.classList.remove("open"); burger.textContent = "☰"; }
  });

  /* typing effect */
  var phrases = [
    "REST APIs with JWT & PostgreSQL",
    "real products — live on the internet",
    "DSA solutions in C++, every week",
    "AI / ML with Python, step by step",
    "backends that hold up in production"
  ];
  var typedEl = document.getElementById("typed");
  if(!reduce && typedEl){
    var pi = 0, ci = phrases[0].length, deleting = true, timer;
    function tick(){
      var word = phrases[pi];
      if(deleting){
        ci--;
        if(ci <= 0){ deleting = false; pi = (pi + 1) % phrases.length; word = phrases[pi]; ci = 0; }
      } else {
        ci++;
        if(ci >= word.length){ deleting = true; timer = setTimeout(tick, 1900); typedEl.textContent = word; return; }
      }
      typedEl.textContent = phrases[pi].slice(0, ci);
      timer = setTimeout(tick, deleting ? 26 : 52);
    }
    setTimeout(tick, 1400);
  }

  /* marquee duplicate for seamless loop */
  var track = document.getElementById("marqueeTrack");
  if(track){ track.innerHTML += track.innerHTML; }

  /* reveal on scroll */
  var revealEls = document.querySelectorAll(".reveal");
  if("IntersectionObserver" in window && !reduce){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, {threshold: .12});
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add("in"); });
  }

  /* animated counters */
  var counters = document.querySelectorAll("[data-count]");
  function runCounter(el){
    var target = parseInt(el.getAttribute("data-count"), 10);
    if(reduce){ el.textContent = target; return; }
    el.textContent = "0";
    var start = null;
    function step(ts){
      if(!start) start = ts;
      var p = Math.min((ts - start) / 1100, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if(p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if("IntersectionObserver" in window){
    var cio = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ runCounter(en.target); cio.unobserve(en.target); }
      });
    }, {threshold: .5});
    counters.forEach(function(el){ cio.observe(el); });
  } else { counters.forEach(runCounter); }

  /* copy + toast */
  var toast = document.getElementById("toast");
  var toastTimer;
  function showToast(msg){
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ toast.classList.remove("show"); }, 2200);
  }
  document.querySelectorAll("[data-copy]").forEach(function(btn){
    btn.addEventListener("click", function(){
      var text = btn.getAttribute("data-copy");
      function done(){ showToast("Copied: " + text); }
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(text).then(done).catch(function(){ fallback(); });
      } else { fallback(); }
      function fallback(){
        var ta = document.createElement("textarea");
        ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); done(); } catch(e){ showToast(text); }
        document.body.removeChild(ta);
      }
    });
  });

  /* nav active state + back to top */
  var toTop = document.getElementById("toTop");
  var sections = ["about","projects","skills","credentials","journey","contact"];
  var navAs = document.querySelectorAll("nav.links a");
  function onScroll(){
    var prog = document.getElementById("scroll-progress");
    if(prog){
      var max = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
    }
    toTop.style.display = window.scrollY > 700 ? "grid" : "none";
    toTop.style.placeItems = "center";
    var current = "";
    sections.forEach(function(id){
      var s = document.getElementById(id);
      if(s && s.getBoundingClientRect().top <= 140) current = id;
    });
    navAs.forEach(function(a){
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  }
  window.addEventListener("scroll", onScroll, {passive:true});
  onScroll();
  toTop.addEventListener("click", function(){ window.scrollTo({top:0, behavior: reduce ? "auto" : "smooth"}); });

  /* interactive hero terminal (built by JS so it is absent with JS disabled) */
  var slot = document.getElementById("terminal-slot");
  if(slot){
    var term = document.createElement("div");
    term.className = "term";
    term.innerHTML =
      '<div class="term-bar"><i style="background:#ff5f45"></i><i style="background:#ffb84d"></i><i style="background:#3ddc97"></i><span class="t">khalid@portfolio — zsh</span></div>' +
      '<div class="term-body"><div class="term-out" id="termOut"></div>' +
      '<div class="term-line"><span class="term-prompt">khalid@portfolio:~$</span>' +
      '<input id="termInput" class="term-input" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Terminal input — type a command and press Enter"></div></div>' +
      '<div class="term-foot"><span class="chip">try: help</span><span class="chip">skills</span><span class="chip">projects</span><span class="chip">contact</span><span class="chip">whoami</span></div>';
    slot.appendChild(term);
    var out = term.querySelector("#termOut");
    var input = term.querySelector("#termInput");
    var PROMPT = "khalid@portfolio:~$ ";
    var COMMANDS = {
      help: "Available commands:\n  help      — show this list\n  whoami    — who is Khalid?\n  skills    — languages, frontend, backend, databases\n  projects  — the 5 shipped projects\n  contact   — email and profiles\n  clear     — clear the terminal",
      whoami: "Khalid Bin Masud — CSE student at Presidency University, Dhaka.\nFull-stack developer. Learning by shipping, now going deeper into AI/ML.",
      skills: "Languages:  Python, Java, C, C++, JavaScript\nFrontend:   React 19, Tailwind CSS, Bootstrap 5, HTML/CSS, Axios, Vite\nBackend:    FastAPI, SQLAlchemy, Pydantic, JWT Auth, REST APIs\nDatabases:  PostgreSQL, SQLite\nDeployment: Vercel, Render, Netlify, GitHub Pages",
      projects: "1. DOVIRA — open-source AI download manager (live: getdovira.vercel.app)\n2. Hisab AI — AI receipt scanner & expense manager\n3. RAG Web — document Q&A with citations\n4. Swift Logistics — parcel booking & tracking (live demo)\n5. SaveClip — video downloader web app (live)",
      contact: "Email:      khalidmasud22@gmail.com\nGitHub:     github.com/Khalid635\nLinkedIn:   linkedin.com/in/khalid-bin-masud-817a913b9\nCodeforces: codeforces.com/profile/Khalid_Bin_Masud"
    };
    function tprint(text, cls){
      var line = document.createElement("div");
      if(cls) line.className = cls;
      line.textContent = text;
      out.appendChild(line);
    }
    function tprintCmd(cmd){
      var line = document.createElement("div");
      var p = document.createElement("span");
      p.className = "n";
      p.textContent = PROMPT;
      line.appendChild(p);
      line.appendChild(document.createTextNode(cmd));
      out.appendChild(line);
    }
    function runCmd(cmd){
      var c = cmd.trim().toLowerCase();
      if(!c) return;
      tprintCmd(cmd.trim());
      if(c === "clear"){ out.innerHTML = ""; return; }
      if(COMMANDS[c]){ tprint(COMMANDS[c]); }
      else { tprint("command not found: " + c + " — type 'help' for the list.", "c"); }
    }
    input.addEventListener("keydown", function(e){
      if(e.key === "Enter"){ var v = input.value; input.value = ""; runCmd(v); }
    });
    term.addEventListener("click", function(){ input.focus(); });
    tprint("Welcome to Khalid's portfolio terminal. Type 'help' to begin.", "c");
    if(reduce){
      tprintCmd("help");
      tprint(COMMANDS.help);
    } else {
      var demo = "help", di = 0;
      setTimeout(function(){
        var t = setInterval(function(){
          if(di >= demo.length){ clearInterval(t); input.value = ""; runCmd(demo); return; }
          input.value = demo.slice(0, ++di);
        }, 90);
      }, 900);
    }
  }

  /* showreel: autoplay only when motion is allowed, pause off-screen */
  var reel = document.getElementById("showreelVideo");
  if(reel && !reduce && "IntersectionObserver" in window){
    var rio = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ reel.play().catch(function(){}); }
        else { reel.pause(); }
      });
    }, {threshold: .25});
    rio.observe(reel);
  }
})();
