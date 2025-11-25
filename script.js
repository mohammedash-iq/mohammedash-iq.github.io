const projects = [
      {
        title: 'Blogsite — Full-Stack Blogging Platform',
        link: 'https://github.com/mohammedash-iq/Blogsite',
        desc: 'RESTful API with Node.js, Express & MySQL. JWT auth (access/refresh), bcrypt password hashing, full CRUD for posts. Frontend built with React + Vite; Zustand for state management.',
        tags: ['Node.js', 'Express', 'MySQL', 'React']
      },
      {
        title: 'n2sql — Natural Language to SQL Interface',
        link: 'https://github.com/mohammedash-iq/n2sql',
        desc: 'Translate natural language into executable SQL queries with a visual interface to interact with a MySQL DB. Built with React, Node.js and Tailwind CSS.',
        tags: ['NLP', 'MySQL', 'React']
      },
      {
        title: 'Personal Portfolio Website',
        link: 'https://github.com/mohammedash-iq/mohammedash-iq.github.io',
        desc: 'Responsive portfolio built with plain HTML, CSS and JavaScript (this site). Designed to be minimal and easy to extend.',
        tags: ['HTML', 'CSS', 'JavaScript']
      }
    ];

    const projectsRoot = document.querySelector('#projects');
    function renderProjects() {
      projectsRoot.innerHTML = '';
      projects.forEach(p => {
        const el = document.createElement('article');
        el.className = 'proj';
        el.innerHTML = `
          <h4><a href="${p.link}" target="_blank" style="color:var(--text);text-decoration:none;">${escapeHtml(p.title)}</a></h4>
          <p>${escapeHtml(p.desc)}</p>
          <div class="meta">
            <a class="tag" href="${p.link}" target="_blank">View</a>
            ${(p.tags || []).map(t => `<span class=\"tag\">${escapeHtml(t)}</span>`).join('')}
          </div>
        `;
        projectsRoot.appendChild(el);
      });
    }

    function escapeHtml(s) {
      return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    renderProjects();

    // --- Theme toggle ---
    const toggle = document.getElementById('toggleTheme');
    const root = document.documentElement;
    const stored = localStorage.getItem('theme');
    if (stored === 'light') root.classList.add('light');

    toggle.addEventListener('click', () => {
      const isLight = root.classList.toggle('light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    // --- Optional: simple keyboard shortcut to toggle (d) ---
    window.addEventListener('keydown', (e) => { if (e.key === 'd') { toggle.click(); } });

    // --- Make internal nav links smooth scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (ev) => {
        const href = a.getAttribute('href');
        if (href.startsWith('#')) {
          ev.preventDefault();
          const target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
