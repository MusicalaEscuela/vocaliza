/* Vocaliza · Musicala */
(() => {
  'use strict';
  const STEP = (text, beats=2, degree=null) => ({text,beats,degree});
  const DATA = [
    {id:'respira-446',category:'respiracion',title:'Respira en 4 · 4 · 6',short:'Inhala, pausa y suelta el aire con tranquilidad.',instruction:'Inhala durante cuatro pulsos, haz una pausa cómoda de cuatro y exhala durante seis. Si la pausa te incomoda, omítela y respira con naturalidad.',steps:[STEP('Inhala',4,null),STEP('Pausa suave',4,null),STEP('Exhala',6,null)],guided:false},
    {id:'sss',category:'respiracion',title:'El hilo de aire · SSS',short:'Controla una salida de aire constante.',instruction:'Inhala con comodidad y exhala haciendo «ssss» sin apretar la mandíbula. No vacíes tus pulmones por completo.',steps:[STEP('Inhala',4),STEP('SSSS',8),STEP('Descansa',3)],guided:false},
    {id:'mmm',category:'calentamiento',title:'Zumbido con M',short:'Encuentra una resonancia suave.',instruction:'Cierra los labios con suavidad y canta «mmm». Busca una vibración ligera en los labios o el rostro, sin presión.',steps:[STEP('MMM',4,0),STEP('MMM',4,2),STEP('MMM',4,0)],guided:true},
    {id:'brrr',category:'calentamiento',title:'Vibración de labios',short:'Relaja labios y garganta con un «brrr».',instruction:'Deja los labios relajados y haz «brrr», como un motor pequeño. Si no sale, haz un zumbido con M en lugar de forzar.',steps:[STEP('BRRR',3,0),STEP('BRRR',3,2),STEP('BRRR',3,4),STEP('BRRR',3,2),STEP('BRRR',3,0)],guided:true},
    {id:'sirena',category:'calentamiento',title:'Sirenas suaves',short:'Desliza la voz de grave a agudo y de regreso.',instruction:'Con «uu» o «ng», desliza lentamente la voz entre las notas de referencia. No persigas una nota si no te resulta cómoda.',steps:[STEP('UU ↗',4,0),STEP('UU ↗',4,4),STEP('UU ↘',4,7),STEP('UU ↘',4,4),STEP('UU',4,0)],guided:true,glide:true},
    {id:'vocal-sustain',category:'vocales',title:'Vocales sostenidas',short:'A, E, I, O, U con una emisión estable.',instruction:'Canta cada vocal en una nota cómoda. Conserva la mandíbula libre y mantén un volumen moderado, sin gritar.',steps:[STEP('A',4,0),STEP('E',4,0),STEP('I',4,0),STEP('O',4,0),STEP('U',4,0)],guided:true},
    {id:'aeiou',category:'vocales',title:'La rueda de las vocales',short:'Conecta A · E · I · O · U en una nota.',instruction:'Respira con calma y canta las cinco vocales en una misma nota, buscando transiciones suaves y sin apretar la garganta.',steps:[STEP('A',2,0),STEP('E',2,0),STEP('I',2,0),STEP('O',2,0),STEP('U',2,0)],guided:true},
    {id:'aeiou-ladder',category:'vocales',title:'Escalera AEIOU',short:'Sube y baja cantando las cinco vocales.',instruction:'Escucha el ascenso y descenso, luego síguelo con A-E-I-O-U-O-I-E-A. Canta conectado y no fuerces los extremos.',steps:[STEP('A',2,0),STEP('E',2,2),STEP('I',2,4),STEP('O',2,5),STEP('U',2,7),STEP('O',2,5),STEP('I',2,4),STEP('E',2,2),STEP('A',3,0)],guided:true},
    {id:'vowel-pairs',category:'vocales',title:'Puentes entre vocales',short:'Pasa de una vocal a otra sin cortar el sonido.',instruction:'Sobre la misma nota, canta las parejas como una sola emisión. Cambia la forma de la boca lentamente y mantén el sonido estable.',steps:[STEP('A → E',4,0),STEP('E → I',4,0),STEP('I → O',4,0),STEP('O → U',4,0),STEP('U → A',4,0)],guided:true},
    {id:'mamemimomu',category:'articulacion',title:'MA · ME · MI · MO · MU',short:'Coordina consonantes, vocales y afinación.',instruction:'Canta cada sílaba con una M suave. Mantén las vocales claras, y deja que la mandíbula se mueva sin rigidez.',steps:[STEP('MA',2,0),STEP('ME',2,2),STEP('MI',2,4),STEP('MO',2,2),STEP('MU',3,0)],guided:true},
    {id:'pataka',category:'articulacion',title:'PA · TA · KA',short:'Despierta labios y lengua con ritmo.',instruction:'Pronuncia «pa-ta-ka» con claridad, primero despacio. El sonido debe salir sin golpes de garganta; aumenta la velocidad gradualmente.',steps:[STEP('PA',1),STEP('TA',1),STEP('KA',1),STEP('PA',1),STEP('TA',1),STEP('KA',1),STEP('PA · TA · KA',3)],guided:false},
    {id:'lalelilolu',category:'articulacion',title:'LA · LE · LI · LO · LU',short:'Practica la movilidad de la lengua.',instruction:'Apoya la punta de la lengua suavemente detrás de los dientes superiores. Canta «la-le-li-lo-lu» sin tensión.',steps:[STEP('LA',2,0),STEP('LE',2,2),STEP('LI',2,4),STEP('LO',2,2),STEP('LU',3,0)],guided:true},
    {id:'legato',category:'afinacion',title:'Cinco notas legato',short:'Una melodía ascendente y descendente con «lu».',instruction:'Canta «lu» sobre cada nota sin separar las sílabas con golpes. Comienza suave y busca un movimiento continuo.',steps:[STEP('LU',2,0),STEP('LU',2,2),STEP('LU',2,4),STEP('LU',2,5),STEP('LU',2,7),STEP('LU',2,5),STEP('LU',2,4),STEP('LU',2,2),STEP('LU',3,0)],guided:true},
    {id:'eco',category:'afinacion',title:'Eco de notas',short:'Escucha una secuencia y cántala a tu manera.',instruction:'Escucha primero la guía. Luego repite cada «na» de forma natural, buscando la altura de referencia.',steps:[STEP('NA',3,0),STEP('NA',3,4),STEP('NA',3,2),STEP('NA',3,5),STEP('NA',4,0)],guided:true}
  ];
  const categories = {
    respiracion: 'Respiración', calentamiento: 'Calentamiento',
    vocales: 'Vocales', articulacion: 'Articulación', afinacion: 'Afinación'
  };
  const routine = [
    ['sss', '4 repeticiones'],
    ['mmm', '3 vueltas'],
    ['aeiou', '3 vueltas'],
    ['legato', '3 vueltas']
  ];

  let context;
  let playback;

  function stop() {
    if (!playback) return;
    const { button, nodes, timeout } = playback;
    playback = null;
    clearTimeout(timeout);
    nodes.forEach(node => node.stop());
    button.textContent = 'Escuchar referencia';
  }

  const frequency = midi => 440 * 2 ** ((midi - 69) / 12);

  async function listen(exercise, root, button, status) {
    const wasPlaying = playback?.button === button;
    stop();
    if (wasPlaying) return;

    status.textContent = '';
    const audio = { button, nodes: new Set(), timeout: null };
    playback = audio;
    button.textContent = 'Detener audio';
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      context ??= new AudioContext();
      if (context.state !== 'running') await context.resume();
      if (playback !== audio) return;

      let start = context.currentTime + .04;
      exercise.steps.forEach((step, index) => {
        const duration = step.beats * .75;
        const end = start + duration * .95;
        const tone = context.createOscillator();
        const gain = context.createGain();
        tone.type = 'triangle';
        tone.frequency.value = frequency(root + step.degree);
        const next = exercise.steps[index + 1];
        if (exercise.glide && next) {
          tone.frequency.exponentialRampToValueAtTime(frequency(root + next.degree), end);
        }
        gain.gain.setValueAtTime(.001, start);
        gain.gain.exponentialRampToValueAtTime(.12, start + .03);
        gain.gain.setValueAtTime(.12, end - .09);
        gain.gain.exponentialRampToValueAtTime(.001, end);
        tone.connect(gain).connect(context.destination);
        audio.nodes.add(tone);
        tone.onended = () => {
          audio.nodes.delete(tone);
          tone.disconnect();
          gain.disconnect();
        };
        tone.start(start);
        tone.stop(end);
        start += duration;
      });
      audio.timeout = setTimeout(stop, (start - context.currentTime) * 1000);
    } catch {
      if (playback !== audio) return;
      stop();
      status.textContent = 'Audio no disponible. Puedes seguir las instrucciones a tu ritmo.';
    }
  }

  const symbols = { sss: 'SSS', mmm: 'MMM', aeiou: 'AEIOU', legato: '♪' };

  function renderExercise(exercise, dose = '', index = null) {
    const inRoutine = index !== null;
    const detail = document.createElement(inRoutine ? 'article' : 'details');
    detail.className = 'exercise';
    detail.dataset.category = exercise.category;

    const sequence = exercise.steps.map(step => step.text);
    const pattern = new Set(sequence).size > 1 ? sequence.join(' · ') : '';
    const header = inRoutine
      ? `<header class="card-header">
          <span class="symbol" aria-hidden="true">${symbols[exercise.id]}</span>
          <div><p class="card-category">${index + 1} · ${categories[exercise.category]}</p><h3>${exercise.title}</h3></div>
        </header>`
      : `<summary>${exercise.title}<span class="dose">${exercise.short}</span></summary>`;
    detail.innerHTML = `${header}
      <div class="exercise-body">
        <p>${exercise.instruction}</p>
        ${pattern ? `<p class="pattern">${pattern}</p>` : ''}
        ${inRoutine ? `<p class="dose">${dose}</p>` : ''}
        ${exercise.guided ? `<div class="audio">
          <button type="button">Escuchar referencia</button>
          <label>Altura de referencia
            <select><option value="48">Grave</option><option value="60" selected>Media</option><option value="72">Aguda</option></select>
          </label>
        </div><p class="audio-status" role="status"></p>` : ''}
      </div>`;
    if (exercise.guided) {
      const button = detail.querySelector('button');
      const root = detail.querySelector('select');
      const status = detail.querySelector('.audio-status');
      button.addEventListener('click', () => listen(exercise, Number(root.value), button, status));
      const stopIfPlaying = () => { if (playback?.button === button) stop(); };
      root.addEventListener('change', stopIfPlaying);
      if (!inRoutine) detail.addEventListener('toggle', () => { if (!detail.open) stopIfPlaying(); });
    }
    return detail;
  }

  const list = document.querySelector('#rutina');
  routine.forEach(([id, dose], index) => {
    const item = document.createElement('li');
    item.append(renderExercise(DATA.find(exercise => exercise.id === id), dose, index));
    list.append(item);
  });

  const library = document.querySelector('#biblioteca');
  const catalog = document.querySelector('#catalogo');
  Object.entries(categories).forEach(([category, title]) => {
    const heading = document.createElement('h3');
    heading.textContent = title;
    catalog.append(heading, ...DATA.filter(exercise => exercise.category === category).map(exercise => renderExercise(exercise)));
  });
  document.querySelector('a[href="#biblioteca"]').addEventListener('click', () => { library.open = true; });
  if (location.hash === '#biblioteca') library.open = true;
  library.addEventListener('toggle', () => { if (!library.open && playback && library.contains(playback.button)) stop(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); });
  window.addEventListener('pagehide', stop);

  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  }
})();
