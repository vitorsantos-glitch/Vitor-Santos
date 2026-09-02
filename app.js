/**
 * DOSSIÊ CLÍNICO & LABORATÓRIO CIRÚRGICO DE VITOR GABRIEL
 * Script principal de interatividade, sintetizador Web Audio API e prancheta tátil
 * Estilo: Autópsia Cartum / Mesa Cirúrgica (Branco, Marfim & Vermelho Pastel)
 */

// ==========================================
// 1. SINTETIZADOR DE ÁUDIO WEB AUDIO API
// ==========================================
class WhimsicalAudioEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.initContext();
  }

  initContext() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext && !this.ctx) {
      this.ctx = new AudioContext();
    }
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }

  // Efeito Pop Fofo
  playPop(freq = 520) {
    if (this.muted) return;
    this.resume();
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.8, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.28, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  }

  // Efeito Squish Satisfying (Visceral e Fofo)
  playSquish() {
    if (this.muted) return;
    this.resume();
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(360, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.14);

    gain.gain.setValueAtTime(0.28, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  }

  // Efeito Bloop com Ressonância
  playBloop() {
    if (this.muted) return;
    this.resume();
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(740, ctx.currentTime + 0.06);
    osc.frequency.exponentialRampToValueAtTime(480, ctx.currentTime + 0.12);

    gain.gain.setValueAtTime(0.22, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  }

  // Efeito Pulso Cardíaco (Lub-Dub)
  playHeartbeat() {
    if (this.muted) return;
    this.resume();
    const ctx = this.ctx;
    
    // Primeiro batimento
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(90, ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(45, ctx.currentTime + 0.1);
    gain1.gain.setValueAtTime(0.45, ctx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start();
    osc1.stop(ctx.currentTime + 0.1);

    // Segundo batimento
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(105, ctx.currentTime + 0.12);
    osc2.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.22);
    gain2.gain.setValueAtTime(0.35, ctx.currentTime + 0.12);
    gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.24);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(ctx.currentTime + 0.12);
    osc2.stop(ctx.currentTime + 0.24);
  }

  // Efeito Arpeggio Whimsical / Dopamina Spark
  playDopamineSpark() {
    if (this.muted) return;
    this.resume();
    const ctx = this.ctx;
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6
    
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const startTime = ctx.currentTime + (idx * 0.05);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.2, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.28);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.28);
    });
  }

  // Acorde Doce Maracujá
  playMaracujaChord() {
    if (this.muted) return;
    this.resume();
    const ctx = this.ctx;
    const chord = [440, 554.37, 659.25, 880]; // A Major fofo
    
    chord.forEach((freq) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.14, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.45);
    });
  }

  // Sino / Music Box
  playWhimsicalChime() {
    if (this.muted) return;
    this.resume();
    const ctx = this.ctx;
    const notes = [880, 1108.73, 1318.51, 1760];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const start = ctx.currentTime + i * 0.07;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0.18, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(start);
      osc.stop(start + 0.35);
    });
  }

  // Slide de Bisturi / Traço de Desenho
  playInkSlide() {
    if (this.muted) return;
    this.resume();
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(260, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(450, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.07, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.09);
  }
}

const audio = new WhimsicalAudioEngine();

// ==========================================
// 2. DADOS E INTERAÇÃO DA ANATOMIA DA PERSONA
// ==========================================
const organData = {
  lungs: {
    title: '🫁 Pulmões Anatômicos',
    text: '<strong>Fôlego Criativo & Riscos de Dissecção:</strong> O par de pulmões em vermelho pastel com estrias de incisão. Armazenam o oxigênio e a energia vital para maratonar ilustrações anatômicas e expandir mundos.',
    stat1Val: '100%',
    stat1Label: 'Capacidade Pulmonar',
    stat2Val: 'Whimsical',
    stat2Label: 'Frequência Respiratória',
    tags: ['#PulmõesPastel', '#FôlegoCriativo', '#AnatomiaCartum', '#Autópsia'],
    sound: 'bloop'
  },
  heart: {
    title: '🫀 Coração na Bandeja',
    text: '<strong>Órgão Extraído com Vida:</strong> Na bandeja cirúrgica superior, o coração pulsa com tubos de veias e manchas de sangue pastel. É o núcleo das emoções e da trilha sonora <em>whimsical</em>.',
    stat1Val: '124',
    stat1Label: 'BPM Whimsical',
    stat2Val: 'Surgical',
    stat2Label: 'Bandeja de Inox',
    tags: ['#CoraçãoPastel', '#MesaCirúrgica', '#WhimsicalBeat', '#BandejaInox'],
    sound: 'heartbeat'
  },
  brain: {
    title: '🧠 Córtex & Fita Cirúrgica',
    text: '<strong>Gênese aos 12 Anos:</strong> A mesma persona viva no imaginário há mais de uma década. Rosto esférico em branco marfim com fita adesiva prateada (estritamente sem olhos).',
    stat1Val: '100%',
    stat1Label: 'Hiperfoco Ativo',
    stat2Val: '12 Anos',
    stat2Label: 'Idade de Criação',
    tags: ['#PersonaOriginal', '#Hiperfoco12Anos', '#SemOlhos', '#BrancoMarfim'],
    sound: 'bloop'
  },
  stomach: {
    title: '🍖 Reator Gastronômico',
    text: '<strong>Combustão Fibrilar:</strong> Digestão ativa de Lasanha em camadas generosas, Feijoada completa e Carne Assada suculenta, irrigadas pelo recheio cremoso de Rocambole de Maracujá.',
    stat1Val: '3x',
    stat1Label: 'Pratos de Ouro',
    stat2Val: '100%',
    stat2Label: 'Rocambole Power',
    tags: ['#Lasanha', '#Feijoada', '#CarneAssada', '#MaracujáDopamina'],
    sound: 'squish'
  },
  hands: {
    title: '✍️ Mãos Contidas',
    text: '<strong>Clamps de Aço & Traço Expressivo:</strong> Mãos contidas por algemas metálicas na mesa cirúrgica, prontas para soltar a criatividade no nanquim, anatomia humana e body horror fofo.',
    stat1Val: '10/10',
    stat1Label: 'Expressão Corporal',
    stat2Val: 'Bold Line',
    stat2Label: 'Nanquim Cirúrgico',
    tags: ['#DesenhoDoCorpo', '#TraçoCartum', '#ClampsDeAço', '#MesaOperatória'],
    sound: 'pop'
  },
  tools: {
    title: '🔪 Instrumentos Cirúrgicos',
    text: '<strong>Bisturi, Serra e Seringa:</strong> A bandeja de inox inferior com bisturi afiado com sangue, serra circular e seringa pastel com soro criativo.',
    stat1Val: '100%',
    stat1Label: 'Aço Inox Cirúrgico',
    stat2Val: 'Sharp',
    stat2Label: 'Precisão de Corte',
    tags: ['#Bisturi', '#SerraCircular', '#SeringaPastel', '#Instrumentação'],
    sound: 'pop'
  }
};

let currentSelectedOrgan = 'lungs';

function selectOrgan(organKey) {
  const data = organData[organKey];
  if (!data) return;

  currentSelectedOrgan = organKey;

  // Atualizar textos no DOM
  document.getElementById('diagTitle').innerHTML = data.title;
  document.getElementById('diagText').innerHTML = data.text;
  document.getElementById('statNum1').textContent = data.stat1Val;
  document.getElementById('statDesc1').textContent = data.stat1Label;
  document.getElementById('statNum2').textContent = data.stat2Val;
  document.getElementById('statDesc2').textContent = data.stat2Label;

  // Atualizar Tags
  const tagsContainer = document.getElementById('diagTags');
  tagsContainer.innerHTML = '';
  data.tags.forEach(t => {
    const span = document.createElement('span');
    span.className = 'mini-tag';
    span.textContent = t;
    tagsContainer.appendChild(span);
  });

  // Atualizar botões de navegação rápida
  document.querySelectorAll('.nav-organ-btn').forEach(btn => {
    if (btn.dataset.organ === organKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Atualizar destaque visual nos hotspots da imagem
  document.querySelectorAll('.hotspot').forEach(el => {
    if (el.dataset.organ === organKey) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });

  // Tocar som temático
  if (data.sound === 'heartbeat') audio.playHeartbeat();
  else if (data.sound === 'squish') audio.playSquish();
  else if (data.sound === 'pop') audio.playPop(600);
  else audio.playBloop();

  // Alterar levemente BPM no monitor
  const bpmElem = document.getElementById('bpmValue');
  if (bpmElem) {
    const randomBpm = Math.floor(Math.random() * 20) + 118;
    bpmElem.textContent = randomBpm;
  }
}

// ==========================================
// 3. PRANCHETA INTERATIVA DE RABISCOS & ADESIVOS
// ==========================================
class InteractiveClipboard {
  constructor() {
    this.canvas = document.getElementById('doodleCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.hint = document.getElementById('canvasHint');
    
    this.isDrawing = false;
    this.currentColor = '#1E1E24';
    this.currentSize = 4;
    this.currentStamp = null;

    this.init();
  }

  init() {
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());

    // Eventos de Mouse e Touch
    this.canvas.addEventListener('mousedown', (e) => this.handleStart(e));
    this.canvas.addEventListener('mousemove', (e) => this.handleMove(e));
    this.canvas.addEventListener('mouseup', () => this.handleEnd());
    this.canvas.addEventListener('mouseleave', () => this.handleEnd());

    this.canvas.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: false });
    this.canvas.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: false });
    this.canvas.addEventListener('touchend', () => this.handleEnd());

    // Seleção de Cores (Nanquim, Vermelho Pastel, Rosa Carne, Branco Marfim)
    document.querySelectorAll('.color-pick-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.color-pick-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentColor = btn.dataset.color;
        this.currentStamp = null;
        document.querySelectorAll('.stamp-btn').forEach(b => b.classList.remove('active'));
        audio.playPop(480);
      });
    });

    // Seleção de Tamanho de Traço
    document.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentSize = parseInt(btn.dataset.size, 10);
        this.currentStamp = null;
        document.querySelectorAll('.stamp-btn').forEach(b => b.classList.remove('active'));
        audio.playPop(520);
      });
    });

    // Carimbos / Adesivos Anatômicos & Cirúrgicos
    const stampEmojis = {
      heart: '🫀',
      lungs: '🫁',
      tape: '🩹',
      maracuja: '🍰',
      bone: '🦴',
      spark: '✨'
    };

    document.querySelectorAll('.stamp-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const isAlreadyActive = btn.classList.contains('active');
        document.querySelectorAll('.stamp-btn').forEach(b => b.classList.remove('active'));
        
        if (!isAlreadyActive) {
          btn.classList.add('active');
          this.currentStamp = stampEmojis[btn.dataset.stamp] || '✨';
          audio.playSquish();
        } else {
          this.currentStamp = null;
          audio.playPop(420);
        }
      });
    });

    // Botão Limpar
    document.getElementById('btnClearBoard').addEventListener('click', () => {
      this.clear();
      audio.playSquish();
    });
  }

  resizeCanvas() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = this.canvas.width;
    tempCanvas.height = this.canvas.height;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.drawImage(this.canvas, 0, 0);

    this.canvas.width = rect.width;
    this.canvas.height = 440;

    this.ctx.drawImage(tempCanvas, 0, 0);
  }

  getCoords(e) {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  handleStart(e) {
    if (this.hint) this.hint.style.display = 'none';
    const { x, y } = this.getCoords(e);

    if (this.currentStamp) {
      this.stamp(x, y, this.currentStamp);
      return;
    }

    this.isDrawing = true;
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.strokeStyle = this.currentColor;
    this.ctx.lineWidth = this.currentSize;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    audio.playInkSlide();
  }

  handleMove(e) {
    if (!this.isDrawing || this.currentStamp) return;
    const { x, y } = this.getCoords(e);
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }

  handleEnd() {
    if (this.isDrawing) {
      this.isDrawing = false;
      this.ctx.closePath();
    }
  }

  handleTouchStart(e) {
    e.preventDefault();
    if (e.touches.length > 0) {
      this.handleStart(e.touches[0]);
    }
  }

  handleTouchMove(e) {
    e.preventDefault();
    if (e.touches.length > 0) {
      this.handleTouchMove(e.touches[0]);
    }
  }

  stamp(x, y, emoji) {
    this.ctx.font = '40px sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText(emoji, x, y);
    audio.playPop(640);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (this.hint) this.hint.style.display = 'block';
  }
}

// ==========================================
// 4. EFEITO DE EXPLOSÃO DE DOPAMINA (MARACUJÁ & CIRURGIA)
// ==========================================
function triggerDopamineBurst() {
  audio.playDopamineSpark();
  const layer = document.getElementById('dopamineLayer');
  if (!layer) return;

  const particles = ['🍰', '✨', '🫀', '🫁', '🩹', '🩸', '🦴', '⚡', '🌟'];
  const count = 35;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'dopamine-particle';
    el.textContent = particles[Math.floor(Math.random() * particles.length)];

    const startX = window.innerWidth / 2 + (Math.random() * 240 - 120);
    const startY = window.innerHeight / 2 + (Math.random() * 240 - 120);

    const dx = (Math.random() - 0.5) * 650 + 'px';
    const dy = (Math.random() - 0.5) * 550 - 90 + 'px';
    const rot = (Math.random() * 360 - 180) + 'deg';

    el.style.left = `${startX}px`;
    el.style.top = `${startY}px`;
    el.style.setProperty('--dx', dx);
    el.style.setProperty('--dy', dy);
    el.style.setProperty('--rot', rot);

    layer.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, 1900);
  }
}

// ==========================================
// 5. INICIALIZAÇÃO E EVENT LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const clipboard = new InteractiveClipboard();

  // Seleção de órgãos clicáveis nos Hotspots da Imagem Oficial e Barra de Censura
  document.querySelectorAll('.hotspot, .organ-interactive, #faceCensorBar').forEach(elem => {
    elem.addEventListener('click', () => {
      const target = elem.dataset.organ || 'brain';
      selectOrgan(target);
    });
    elem.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const target = elem.dataset.organ || 'brain';
        selectOrgan(target);
      }
    });
  });

  // Seleção via Marcadores Flutuantes (Pins)
  document.querySelectorAll('.organ-pin').forEach(pin => {
    pin.addEventListener('click', () => {
      selectOrgan(pin.dataset.organ);
    });
  });

  // Seleção via Botões de Navegação Rápida
  document.querySelectorAll('.nav-organ-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectOrgan(btn.dataset.organ);
    });
  });

  // Reação Interativa da Foto do Cirurgião-Chefe com Detector de Cliques em 5 Segundos
  const doctorPhotoFrame = document.getElementById('doctorPhotoFrame');
  const photoNormal = document.getElementById('leadDoctorPhoto');
  const photoThumbs = document.getElementById('leadDoctorPhotoThumbs');
  const photoStare = document.getElementById('leadDoctorPhotoStare');
  const reactionTag = document.getElementById('doctorReactionTag');
  
  let isThumbsUp = false;
  let isStaring = false;
  let clickTimestamps = [];
  let stareResetTimeout = null;

  if (doctorPhotoFrame && photoNormal && photoThumbs && photoStare) {
    const handleDoctorClick = (e) => {
      const now = Date.now();
      clickTimestamps.push(now);
      // Manter apenas cliques ocorridos nos últimos 5 segundos (5000ms)
      clickTimestamps = clickTimestamps.filter(t => now - t <= 5000);

      // Se clicar 5 ou mais vezes dentro de 5 segundos: MODO OLHAR INTENSO (STARE)
      if (clickTimestamps.length >= 5) {
        isStaring = true;
        clearTimeout(stareResetTimeout);

        photoNormal.classList.remove('active');
        photoThumbs.classList.remove('active');
        photoStare.classList.add('active');

        doctorPhotoFrame.classList.add('staring-mode');
        if (reactionTag) {
          reactionTag.textContent = '🤨 "ESTOU DE OLHO EM VOCÊ..."';
          reactionTag.classList.remove('approved');
          reactionTag.classList.add('stare-alert');
        }

        audio.playInkSlide();
        
        // Resetar após 3.8s sem cliques excessivos
        stareResetTimeout = setTimeout(() => {
          isStaring = false;
          doctorPhotoFrame.classList.remove('staring-mode');
          if (reactionTag) {
            reactionTag.classList.remove('stare-alert');
          }

          if (isThumbsUp) {
            photoStare.classList.remove('active');
            photoThumbs.classList.add('active');
            if (reactionTag) {
              reactionTag.textContent = '👍 CIRURGIA APROVADA!';
              reactionTag.classList.add('approved');
            }
          } else {
            photoStare.classList.remove('active');
            photoNormal.classList.add('active');
            if (reactionTag) {
              reactionTag.textContent = 'CIRURGIÃO-CHEFE';
            }
          }
          clickTimestamps = [];
        }, 3800);

        return;
      }

      // Se não estiver em modo spam, faz a alternância normal entre pensativo e joinha 👍
      if (isStaring) return;

      isThumbsUp = !isThumbsUp;
      if (isThumbsUp) {
        photoNormal.classList.remove('active');
        photoThumbs.classList.add('active');
        if (reactionTag) {
          reactionTag.textContent = '👍 CIRURGIA APROVADA!';
          reactionTag.classList.add('approved');
        }
        audio.playDopamineSpark();
        if (e && e.clientX) {
          triggerDopamineBurst(e.clientX, e.clientY);
        } else {
          triggerDopamineBurst();
        }
      } else {
        photoThumbs.classList.remove('active');
        photoNormal.classList.add('active');
        if (reactionTag) {
          reactionTag.textContent = 'CIRURGIÃO-CHEFE';
          reactionTag.classList.remove('approved');
        }
        audio.playPop(520);
      }
    };

    doctorPhotoFrame.addEventListener('click', handleDoctorClick);
    doctorPhotoFrame.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleDoctorClick(e);
      }
    });
  }

  // Botão de Estimular Subsistema
  const diagActionBtn = document.getElementById('diagActionBtn');
  if (diagActionBtn) {
    diagActionBtn.addEventListener('click', () => {
      audio.playDopamineSpark();
      diagActionBtn.style.transform = 'scale(0.95)';
      setTimeout(() => diagActionBtn.style.transform = '', 150);
      
      const bpmElem = document.getElementById('bpmValue');
      if (bpmElem) {
        bpmElem.textContent = Math.floor(Math.random() * 25) + 130;
      }
    });
  }

  // Botão Injetar Dopamina de Maracujá
  const btnBurstMaracuja = document.getElementById('btnBurstMaracuja');
  if (btnBurstMaracuja) {
    btnBurstMaracuja.addEventListener('click', () => {
      triggerDopamineBurst();
    });
  }

  // Botão Rápido de Dopamina no Header
  const dopamineQuickBtn = document.getElementById('dopamineQuickBtn');
  if (dopamineQuickBtn) {
    dopamineQuickBtn.addEventListener('click', () => {
      triggerDopamineBurst();
    });
  }

  // Degustação de Comidas
  document.querySelectorAll('.btn-eat-sample').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      audio.playPop(500);
      btn.textContent = '✨ Saboreado!';
      btn.style.background = '#FDA4AF';
      setTimeout(() => {
        btn.textContent = '😋 Degustar';
        btn.style.background = '';
      }, 1200);
    });
  });

  // Soundboard Pads
  document.querySelectorAll('.sound-pad-card').forEach(pad => {
    pad.addEventListener('click', () => {
      const tone = pad.dataset.tone;
      switch (tone) {
        case 'dopamine':
          audio.playDopamineSpark();
          break;
        case 'bubble':
          audio.playPop(750);
          break;
        case 'heartbeat':
          audio.playHeartbeat();
          break;
        case 'maracuja':
          audio.playMaracujaChord();
          break;
        case 'scalpel':
          audio.playInkSlide();
          break;
        case 'whimsicalChime':
          audio.playWhimsicalChime();
          break;
        default:
          audio.playBloop();
      }
    });
  });

  // Alternar Som (Mute/Unmute)
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const soundStatus = document.getElementById('soundStatus');
  const soundIcon = document.getElementById('soundIcon');

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      const isMuted = audio.toggleMute();
      if (isMuted) {
        soundStatus.textContent = 'OFF';
        soundIcon.textContent = '🔇';
        soundToggleBtn.style.background = '#EDE8DC';
      } else {
        soundStatus.textContent = 'ON';
        soundIcon.textContent = '🔊';
        soundToggleBtn.style.background = '#FDA4AF';
        audio.playPop(600);
      }
    });
  }

  // Sons nos links e botões com data-sound
  document.querySelectorAll('[data-sound]').forEach(el => {
    el.addEventListener('click', () => {
      const soundType = el.dataset.sound;
      if (soundType === 'pop') audio.playPop(520);
      else if (soundType === 'squish') audio.playSquish();
      else if (soundType === 'bloop') audio.playBloop();
      else if (soundType === 'sparkle') audio.playDopamineSpark();
    });
  });

  // Botão Topo
  const btnBackToTop = document.getElementById('btnBackToTop');
  if (btnBackToTop) {
    btnBackToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      audio.playPop(480);
    });
  }

  // Inicializar com órgão Pulmões Pastel
  selectOrgan('lungs');
});
