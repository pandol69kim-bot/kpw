/* ── HERO BG CODE ── */
(function buildBgCode() {
  const lines = [
    "<?php",
    "class AIWorkerPlatform {",
    "  private $db;",
    "  public function __construct(Database $db) {",
    "    $this->db = $db;",
    "  }",
    "  public function createWorker(array $data): Worker {",
    "    $worker = new Worker($data);",
    "    $this->db->save($worker);",
    "    return $worker;",
    "  }",
    "}",
    "",
    "// AI API Integration",
    "$response = $ai->chat([",
    "  'model' => 'claude-sonnet-4-6',",
    "  'messages' => [",
    "    ['role' => 'user', 'content' => $prompt]",
    "  ]",
    "]);",
    "",
    "// MySQL Query Optimization",
    "$stmt = $pdo->prepare(",
    "  'SELECT w.*, COUNT(u.id) AS usage",
    "   FROM workers w",
    "   LEFT JOIN usage u ON w.id = u.worker_id",
    "   WHERE w.status = :status",
    "   GROUP BY w.id ORDER BY usage DESC'",
    ");",
    "$stmt->execute([':status' => 'approved']);",
    "",
    "// Chrome Extension",
    "chrome.runtime.onMessage.addListener(",
    "  function(request, sender, sendResponse) {",
    "    if (request.action === 'generateLyrics') {",
    "      callAIAPI(request.prompt)",
    "        .then(result => sendResponse({lyrics: result}));",
    "    }",
    "    return true;",
    "  }",
    ");",
    "",
    "// RESTful API (허니맛 프로젝트)",
    "router.post('/api/v1/products', authenticate, async (req, res) => {",
    "  const product = await ProductService.create(req.body);",
    "  res.json({ success: true, data: product });",
    "});",
    "",
    "// DB Schema Design",
    "CREATE TABLE ai_workers (",
    "  id INT AUTO_INCREMENT PRIMARY KEY,",
    "  name VARCHAR(100) NOT NULL,",
    "  category ENUM('marketing','sales','hr') NOT NULL,",
    "  maker_id INT REFERENCES users(id),",
    "  price DECIMAL(10,2) NOT NULL,",
    "  status ENUM('draft','review','approved') DEFAULT 'draft',",
    "  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
    ");",
  ];
  const el = document.getElementById('bgCode');
  if (!el) return;
  const repeated = [];
  for (let i = 0; i < 4; i++) repeated.push(...lines);
  el.textContent = repeated.join('\n');
})();

/* ── TYPING EFFECT ── */
(function typeEffect() {
  const phrases = [
    "$ php artisan build:ai-platform",
    "$ mysql -u root -p honeymut_db",
    "$ ./deploy.sh --env production",
    "$ vibe-coding --ai-assist on",
  ];
  const el = document.getElementById('typedSub');
  if (!el) return;
  let pi = 0, ci = 0, deleting = false;
  function tick() {
    const phrase = phrases[pi];
    if (!deleting) {
      el.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) { deleting = true; setTimeout(tick, 2200); return; }
    } else {
      el.textContent = phrase.slice(0, --ci);
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(tick, 400); return; }
    }
    setTimeout(tick, deleting ? 40 : 70);
  }
  setTimeout(tick, 800);
})();

/* ── NAV HAMBURGER ── */
(function navMenu() {
  const btn = document.getElementById('hamburger');
  const links = document.querySelector('.nav-links');
  if (!btn || !links) return;
  btn.addEventListener('click', () => {
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
})();

/* ── NAV ACTIVE ON SCROLL ── */
(function navScroll() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 60
      ? 'rgba(11,22,40,0.98)'
      : 'rgba(11,22,40,0.92)';
  }, { passive: true });
})();

/* ── REVEAL ON SCROLL ── */
(function revealOnScroll() {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
})();

/* ── SKILL BAR ANIMATION ── */
(function skillBars() {
  const bars = document.querySelectorAll('.bar-fill');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const w = entry.target.dataset.w;
        entry.target.style.width = w + '%';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => io.observe(b));
})();

/* ── PROJECT FILTER ── */
(function projectFilter() {
  const btns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.proj-card');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const cat = card.dataset.cat;
        if (filter === 'all' || cat === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
})();

/* ── ACTIVE NAV LINK ON SCROLL ── */
(function activeNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current ? '#F0C040' : '';
    });
  }, { passive: true });
})();
