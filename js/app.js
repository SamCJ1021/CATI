// ============================================================
// CATI — 应用逻辑 (屏幕切换 / 答题 / 计分 / 背景 / 导航)
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // ---------- DOM 引用 ----------
  const screenHome = document.getElementById('screen-home');
  const screenQuiz = document.getElementById('screen-quiz');
  const screenResult = document.getElementById('screen-result');
  const allScreens = [screenHome, screenQuiz, screenResult];

  const bgInner = document.getElementById('bg-inner');
  const navHome = document.getElementById('nav-home');
  const navBack = document.getElementById('nav-back');

  const btnStart = document.getElementById('btn-start');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnRestart = document.getElementById('btn-restart');

  const homeGrids = document.getElementById('home-dots');
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');
  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');

  const resultBlock = document.getElementById('result-block');
  const resultCode = document.getElementById('result-code');
  const resultName = document.getElementById('result-name');
  const resultTitle = document.getElementById('result-title');
  const resultDesc = document.getElementById('result-desc');
  const resultTags = document.getElementById('result-tags');
  const resultMatch = document.getElementById('result-match');

  // ---------- 状态 ----------
  let currentQuestion = 0;
  let answers = new Array(10).fill(null);
  let selectedOption = null;
  let screenHistory = ['home'];

  // ---------- 背景文字墙 ----------
  function buildBgWall() {
    const names = ['萨牧Sam', 'Suroo'];
    const cols = 20;
    const rows = 16;
    let html = '';
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const name = names[(r + c) % 2];
        const baseX = (c / (cols - 1)) * 100;
        const baseY = (r / (rows - 1)) * 100;
        const jitterX = (Math.random() - 0.5) * 4;
        const jitterY = (Math.random() - 0.5) * 3;
        const left = baseX + jitterX;
        const top = baseY + jitterY;
        const rotate = (Math.random() - 0.5) * 40;
        const size = 0.7 + Math.random() * 0.9;
        html += '<span class="bg-wall__text" style="' +
          'left:' + left.toFixed(1) + '%;' +
          'top:' + top.toFixed(1) + '%;' +
          'transform:rotate(' + rotate.toFixed(0) + 'deg);' +
          'font-size:' + size.toFixed(1) + 'rem;' +
          '">' + name + '</span>';
      }
    }
    bgInner.innerHTML = html;
  }
  buildBgWall();

  // 点击分裂
  let splitCount = 0;
  bgInner.addEventListener('click', (e) => {
    const el = e.target.closest('.bg-wall__text');
    if (!el) return;
    if (el.classList.contains('shaking')) return;

    // 读取当前旋转角度
    const style = el.getAttribute('style') || '';
    const rotMatch = style.match(/rotate\((-?[\d.]+)deg\)/);
    const curRot = rotMatch ? rotMatch[1] : '0';
    el.style.setProperty('--r', curRot + 'deg');

    // 摇晃
    el.classList.add('shaking');
    el.addEventListener('animationend', function handler() {
      el.removeEventListener('animationend', handler);
      el.classList.remove('shaking');
      el.style.removeProperty('--r');
    });

    // 分裂：限流
    if (splitCount > 120) return;
    splitCount++;

    const clone = el.cloneNode(true);
    clone.classList.remove('shaking');
    clone.classList.add('splitting');

    // 偏移位置
    const curLeft = parseFloat(el.style.left) || 50;
    const curTop = parseFloat(el.style.top) || 50;
    const newLeft = Math.max(0, Math.min(100, curLeft + (Math.random() - 0.5) * 8));
    const newTop = Math.max(0, Math.min(100, curTop + (Math.random() - 0.5) * 8));
    const newRot = (Math.random() - 0.5) * 50;

    clone.style.left = newLeft + '%';
    clone.style.top = newTop + '%';
    clone.style.transform = 'rotate(' + newRot + 'deg)';
    clone.style.fontSize = (0.7 + Math.random() * 1.0) + 'rem';

    bgInner.appendChild(clone);

    clone.addEventListener('animationend', function h() {
      clone.removeEventListener('animationend', h);
      clone.classList.remove('splitting');
    });
  });

  function setZoom(level) {
    bgInner.classList.remove('zoom-quiz', 'zoom-result');
    if (level === 'quiz')   bgInner.classList.add('zoom-quiz');
    if (level === 'result') bgInner.classList.add('zoom-result');

    const topEl = document.getElementById('bg-result-top');
    const botEl = document.getElementById('bg-result-bottom');
    if (level === 'result') {
      topEl.classList.add('show');
      botEl.classList.add('show');
    } else {
      topEl.classList.remove('show');
      botEl.classList.remove('show');
    }
  }

  function updateNavButtons(currentScreen) {
    // 房子图标始终显示
    if (currentScreen === 'home') {
      navBack.classList.remove('visible');
    } else {
      navBack.classList.add('visible');
    }
  }

  // ---------- 导航 ----------
  navHome.addEventListener('click', () => {
    currentQuestion = 0;
    answers = new Array(10).fill(null);
    selectedOption = null;
    screenHistory = ['home'];
    goToScreen('home');
  });

  navBack.addEventListener('click', () => {
    if (screenHistory.length > 1) {
      screenHistory.pop();
      const prev = screenHistory[screenHistory.length - 1];
      if (prev === 'quiz') {
        goToScreen('quiz');
      } else {
        currentQuestion = 0;
        answers = new Array(10).fill(null);
        selectedOption = null;
        screenHistory = ['home'];
        goToScreen('home');
      }
    }
  });

  // ---------- 屏幕切换 ----------
  let screenSwitching = false;

  function goToScreen(name) {
    if (screenSwitching) return;
    screenSwitching = true;

    const targetMap = { home: screenHome, quiz: screenQuiz, result: screenResult };
    const target = targetMap[name];

    allScreens.forEach(s => s.classList.remove('active'));

    setTimeout(() => {
      target.classList.add('active');
      setZoom(name);
      updateNavButtons(name);
      window.scrollTo({ top: 0, behavior: 'instant' });
      screenSwitching = false;
    }, 200);
  }

  // ---------- 首页色块 ----------
  function renderCatGrid(container, cat, size) {
    const grid = cat.grid;
    const pal = cat.palette;
    const rows = grid.length;
    const cols = grid[0].length;
    const cellSize = size / cols;

    container.innerHTML = '';
    container.style.width = size + 'px';
    container.style.height = size + 'px';
    container.style.gridTemplateColumns = 'repeat(' + cols + ', 1fr)';
    container.style.gridTemplateRows = 'repeat(' + rows + ', 1fr)';
    container.classList.add('cat-grid');

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const ch = grid[r][c];
        const color = pal[ch];
        const cell = document.createElement('div');
        cell.className = 'cat-grid__cell';
        cell.style.background = color || 'transparent';
        cell.style.width = cellSize + 'px';
        cell.style.height = cellSize + 'px';
        container.appendChild(cell);
      }
    }
  }

  function renderHomeGrids() {
    homeGrids.innerHTML = '';
    const cats = Object.values(CAT_TYPES);
    cats.forEach(cat => {
      const wrapper = document.createElement('div');
      wrapper.className = 'home__cat-item';
      wrapper.title = cat.name + ' (' + cat.code + ')';

      const gridContainer = document.createElement('div');
      renderCatGrid(gridContainer, cat, 80);

      const label = document.createElement('span');
      label.className = 'home__cat-label';
      label.textContent = cat.name;

      wrapper.appendChild(gridContainer);
      wrapper.appendChild(label);
      homeGrids.appendChild(wrapper);
    });
  }
  renderHomeGrids();

  // ---------- 渲染题目 ----------
  function renderQuestion(index) {
    const q = QUESTIONS[index];
    questionText.textContent = q.text;
    optionsContainer.innerHTML = '';

    selectedOption = answers[index];

    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'quiz__option' + (i === selectedOption ? ' selected' : '');
      btn.textContent = opt.text;
      btn.addEventListener('click', () => selectOption(i));
      optionsContainer.appendChild(btn);
    });

    updateNav();
    updateProgress();
  }

  // ---------- 选择选项 ----------
  function selectOption(index) {
    selectedOption = index;
    answers[currentQuestion] = QUESTIONS[currentQuestion].options[index].score;

    const optionBtns = optionsContainer.querySelectorAll('.quiz__option');
    optionBtns.forEach((btn, i) => {
      btn.classList.toggle('selected', i === index);
    });

    updateNav();

    setTimeout(() => {
      if (currentQuestion < 9) {
        currentQuestion++;
        selectedOption = answers[currentQuestion];
        renderQuestion(currentQuestion);
      } else {
        screenHistory.push('result');
        goToScreen('result');
        showResult();
      }
    }, 350);
  }

  // ---------- 导航按钮状态 ----------
  function updateNav() {
    btnPrev.disabled = currentQuestion === 0;
  }

  // ---------- 进度条 ----------
  function updateProgress() {
    const pct = ((currentQuestion + 1) / QUESTIONS.length) * 100;
    progressFill.style.width = pct + '%';
    progressText.textContent = (currentQuestion + 1) + ' / ' + QUESTIONS.length;
  }

  // ---------- 计分 ----------
  function calculateResult() {
    const ieQuestions = [0, 3, 6, 9];
    const laQuestions = [1, 4, 7];
    const hcQuestions = [2, 5, 8];

    let scoreIE = 0, scoreLA = 0, scoreHC = 0;

    ieQuestions.forEach(i => { if (answers[i] !== null) scoreIE += answers[i]; });
    laQuestions.forEach(i => { if (answers[i] !== null) scoreLA += answers[i]; });
    hcQuestions.forEach(i => { if (answers[i] !== null) scoreHC += answers[i]; });

    const i_or_e = scoreIE > 2 ? 'E' : 'I';
    const l_or_a = scoreLA > 1 ? 'A' : 'L';
    const h_or_c = scoreHC > 1 ? 'C' : 'H';

    return i_or_e + l_or_a + h_or_c;
  }

  // ---------- 显示结果 ----------
  function showResult() {
    const code = calculateResult();
    const cat = CAT_TYPES[code];

    renderCatGrid(resultBlock, cat, 180);
    resultCode.textContent = code;
    resultName.textContent = cat.name;
    resultTitle.textContent = cat.title;
    resultDesc.textContent = cat.description;

    resultTags.innerHTML = '';
    const tagBg = cat.palette.M;
    cat.tags.forEach(tag => {
      const span = document.createElement('span');
      span.className = 'result__tag';
      span.style.background = tagBg + '20';
      span.style.color = tagBg;
      span.textContent = tag;
      resultTags.appendChild(span);
    });

    resultMatch.textContent = cat.match;
  }

  // ---------- 事件绑定 ----------
  btnStart.addEventListener('click', () => {
    currentQuestion = 0;
    answers = new Array(10).fill(null);
    selectedOption = null;
    screenHistory = ['home', 'quiz'];
    goToScreen('quiz');
    renderQuestion(0);
  });

  btnPrev.addEventListener('click', () => {
    if (currentQuestion > 0) {
      currentQuestion--;
      selectedOption = answers[currentQuestion];
      renderQuestion(currentQuestion);
    }
  });

  btnRestart.addEventListener('click', () => {
    currentQuestion = 0;
    answers = new Array(10).fill(null);
    selectedOption = null;
    screenHistory = ['home'];
    goToScreen('home');
  });
});
