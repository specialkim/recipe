/**
 * 두쫀쿠 레시피 사이트 - 언어 전환 및 시뮬레이션
 * - 한/영 전환: data-ko, data-en 속성 기반
 * - 레시피별 재료·단계 데이터 및 단계별 시뮬레이션
 */

(function () {
  'use strict';

  // ---------- 현재 언어 (localStorage 유지, 기본값: 영문)
  let current_lang = localStorage.getItem('ddukbbokki_lang') || 'en';

  // ---------- 레시피 데이터 (한/영 재료명·단계 설명)
  const recipes = {
    kadaif: {
      name_ko: '클래식 (카다이프)',
      name_en: 'Classic (Kadaif)',
      ingredients_ko: [
        '카다이프 250g',
        '피스타치오 페이스트(스프레드) 약 210g',
        '화이트 커버춰 50g',
        '마시멜로 200g',
        '무염 버터 45g',
        '코코아 파우더 (겉 묻히기용)',
        '식용유 (장갑에 묻혀 성형용)',
      ],
      ingredients_en: [
        'Kadaif 250g',
        'Pistachio paste/spread ~210g',
        'White couverture 50g',
        'Marshmallow 200g',
        'Unsalted butter 45g',
        'Cocoa powder (for coating)',
        'Cooking oil (for gloves when shaping)',
      ],
      steps_ko: [
        { text: '필링 만들기: 무염 버터를 녹인 뒤 화이트 커버춰를 넣고 녹여 섞는다. 피스타치오 페이스트를 넣고 골고루 섞은 뒤 냉동실에서 30분 이상 굳힌다.', minutes: 0 },
        { text: '카다이프 볶기: 프라이팬에 버터를 두르고 카다이프를 넣어 약불에서 구릿빛이 나도록 볶는다. 너무 오래 볶으면 딱딱해지므로 적당히 한다.', minutes: 5 },
        { text: '굳은 필링을 적당한 크기로 잘라 준비한다. 장갑에 기름을 살짝 묻혀 둔다.', minutes: 0 },
        { text: '마시멜로를 전자레인지 또는 약불에서 천천히 녹인다. 너무 뜨거우면 딱딱해지므로 약간 식힌 뒤 사용한다.', minutes: 3 },
        { text: '녹은 마시멜로에 코코아 파우더를 체 쳐서 넣고 골고루 섞는다.', minutes: 0 },
        { text: '장갑에 기름을 묻히고, 마시멜로를 펼친 뒤 그 위에 필링을 올리고 만두 모양으로 감싼다. 빠르게 성형한다.', minutes: 2 },
        { text: '코코아 파우더를 묻혀 겉을 코팅한 뒤 냉동실에서 살짝 굳힌다. 완성!', minutes: 10 },
      ],
      steps_en: [
        { text: 'Make filling: Melt butter, add white couverture and melt together. Mix in pistachio paste, then freeze for 30+ minutes until set.', minutes: 0 },
        { text: 'Toast kadaif: In a pan, melt butter and fry kadaif over low heat until golden. Do not over-fry or it gets hard.', minutes: 5 },
        { text: 'Cut the set filling into portions. Lightly oil your gloves.', minutes: 0 },
        { text: 'Melt marshmallow in microwave or over low heat. Let it cool slightly before using so it doesn\'t set too hard.', minutes: 3 },
        { text: 'Sift cocoa powder into melted marshmallow and mix well.', minutes: 0 },
        { text: 'With oiled gloves, spread marshmallow, place filling on top, and wrap like a dumpling. Shape quickly.', minutes: 2 },
        { text: 'Coat with cocoa powder and chill briefly in freezer. Done!', minutes: 10 },
      ],
    },
    breadcrumb: {
      name_ko: '빵가루 버전',
      name_en: 'Breadcrumb Version',
      ingredients_ko: [
        '빵가루 150~200g',
        '피스타치오 페이스트 약 150g',
        '화이트 커버춰 40g',
        '마시멜로 180g',
        '무염 버터 50g',
        '코코아 파우더 (겉 묻히기용)',
        '식용유 (장갑 성형용)',
      ],
      ingredients_en: [
        'Breadcrumbs 150–200g',
        'Pistachio paste ~150g',
        'White couverture 40g',
        'Marshmallow 180g',
        'Unsalted butter 50g',
        'Cocoa powder (for coating)',
        'Cooking oil (for gloves)',
      ],
      steps_ko: [
        { text: '필링: 버터와 화이트 커버춰를 녹여 섞고, 피스타치오 페이스트를 넣어 섞은 뒤 냉동실에서 30분 이상 굳힌다.', minutes: 0 },
        { text: '프라이팬에 버터를 두르고 빵가루를 넣어 구릿빛이 나도록 볶는다. 카다이프와 비슷한 바삭한 식감을 낸다.', minutes: 5 },
        { text: '굳은 필링을 한 입 크기로 자른다. 장갑에 기름을 묻힌다.', minutes: 0 },
        { text: '마시멜로를 전자레인지나 약불에서 녹인 뒤 살짝 식힌다.', minutes: 3 },
        { text: '녹은 마시멜로에 코코아 파우더를 체 쳐 넣고 섞는다.', minutes: 0 },
        { text: '기름 묻은 장갑으로 마시멜로를 펼치고 필링을 넣어 만두 모양으로 감싼다.', minutes: 2 },
        { text: '코코아 파우더를 묻히고 냉동실에서 잠시 굳힌다. 완성!', minutes: 10 },
      ],
      steps_en: [
        { text: 'Filling: Melt butter and white couverture, mix in pistachio paste, freeze 30+ minutes.', minutes: 0 },
        { text: 'In a pan, fry breadcrumbs in butter until golden for a crispy texture similar to kadaif.', minutes: 5 },
        { text: 'Cut set filling into bite-sized pieces. Oil your gloves.', minutes: 0 },
        { text: 'Melt marshmallow in microwave or over low heat and cool slightly.', minutes: 3 },
        { text: 'Sift cocoa into melted marshmallow and mix.', minutes: 0 },
        { text: 'With oiled gloves, spread marshmallow, add filling, wrap like a dumpling.', minutes: 2 },
        { text: 'Coat with cocoa and chill in freezer briefly. Done!', minutes: 10 },
      ],
    },
    vermicelli: {
      name_ko: '버미셀리(페니면) 버전',
      name_en: 'Vermicelli (Pasta) Version',
      ingredients_ko: [
        '버미셀리면(페니면) 150g',
        '피스타치오 페이스트 약 180g',
        '화이트 커버춰 45g',
        '마시멜로 190g',
        '무염 버터 45g',
        '코코아 파우더 (겉 묻히기용)',
        '식용유 (장갑 성형용)',
      ],
      ingredients_en: [
        'Vermicelli pasta 150g',
        'Pistachio paste ~180g',
        'White couverture 45g',
        'Marshmallow 190g',
        'Unsalted butter 45g',
        'Cocoa powder (for coating)',
        'Cooking oil (for gloves)',
      ],
      steps_ko: [
        { text: '필링: 버터와 화이트 커버춰를 녹여 섞고, 피스타치오 페이스트를 넣어 섞은 뒤 냉동실에서 30분 이상 굳힌다.', minutes: 0 },
        { text: '버미셀리면은 이미 구워진 것이 많으므로, 버터와 함께 약불에서 살짝만 볶아 사용한다. 과하게 볶으면 딱딱해진다.', minutes: 3 },
        { text: '굳은 필링을 적당 크기로 자른다. 장갑에 기름을 묻힌다.', minutes: 0 },
        { text: '마시멜로를 녹여 약간 식힌 뒤, 코코아 파우더를 체 쳐 넣고 섞는다.', minutes: 3 },
        { text: '기름 묻은 장갑으로 마시멜로를 펼치고 필링을 넣어 만두 모양으로 감싼다. 카다이프와 가장 유사한 식감이다.', minutes: 2 },
        { text: '코코아 파우더를 묻히고 냉동실에서 잠시 굳힌다. 완성!', minutes: 10 },
      ],
      steps_en: [
        { text: 'Filling: Melt butter and white couverture, mix in pistachio paste, freeze 30+ minutes.', minutes: 0 },
        { text: 'Vermicelli is often pre-cooked; just toss briefly in butter over low heat. Over-frying makes it hard.', minutes: 3 },
        { text: 'Cut set filling into portions. Oil your gloves.', minutes: 0 },
        { text: 'Melt marshmallow, cool slightly, then sift in cocoa and mix.', minutes: 3 },
        { text: 'With oiled gloves, spread marshmallow, add filling, wrap like a dumpling. Closest texture to classic kadaif.', minutes: 2 },
        { text: 'Coat with cocoa and chill in freezer. Done!', minutes: 10 },
      ],
    },
  };

  // ---------- DOM 요소 캐시
  const lang_buttons = document.querySelectorAll('.lang_btn');
  const simulation_section = document.getElementById('simulation_section');
  const simulation_box = document.getElementById('simulation_box');
  const simulation_recipe_name = document.getElementById('simulation_recipe_name');
  const ingredients_list_el = document.getElementById('ingredients_list');
  const step_counter_el = document.getElementById('step_counter');
  const progress_fill_el = document.getElementById('progress_fill');
  const step_content_el = document.getElementById('step_content');
  const step_timer_el = document.getElementById('step_timer');
  const btn_prev = document.getElementById('btn_prev');
  const btn_next = document.getElementById('btn_next');
  const btn_reset = document.querySelector('.btn_reset');

  // 시뮬레이션 상태
  let current_recipe_id = null;
  let current_step_index = 0;
  let timer_interval = null;

  /**
   * data-ko / data-en 기반으로 페이지 텍스트를 현재 언어로 갱신
   */
  function applyLanguage() {
    const lang = current_lang;
    const attr = lang === 'ko' ? 'data-ko' : 'data-en';
    document.querySelectorAll('[' + attr + ']').forEach(function (el) {
      const value = el.getAttribute(attr);
      if (value != null) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.value = value;
        } else {
          el.textContent = value;
        }
      }
    });
    lang_buttons.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    document.documentElement.lang = lang === 'ko' ? 'ko' : 'en';
    // 시뮬레이션 중이면 단계/재료도 다시 그리기
    if (current_recipe_id) {
      renderIngredients();
      renderStep();
    }
  }

  /**
   * 선택된 레시피의 재료 목록 렌더링
   */
  function renderIngredients() {
    if (!current_recipe_id || !recipes[current_recipe_id]) return;
    const recipe = recipes[current_recipe_id];
    const list = current_lang === 'ko' ? recipe.ingredients_ko : recipe.ingredients_en;
    ingredients_list_el.innerHTML = '';
    list.forEach(function (item) {
      const li = document.createElement('li');
      li.textContent = item;
      ingredients_list_el.appendChild(li);
    });
  }

  /**
   * 현재 단계 내용·타이머·버튼 상태 렌더링
   */
  function renderStep() {
    if (!current_recipe_id || !recipes[current_recipe_id]) return;
    const recipe = recipes[current_recipe_id];
    const steps = current_lang === 'ko' ? recipe.steps_ko : recipe.steps_en;
    const total = steps.length;
    const step = steps[current_step_index];
    const is_first = current_step_index === 0;
    const is_last = current_step_index === total - 1;

    // 단계 카운터 문구 (한/영)
    const counterText = current_lang === 'ko'
      ? '단계 ' + (current_step_index + 1) + ' / ' + total
      : 'Step ' + (current_step_index + 1) + ' / ' + total;
    step_counter_el.textContent = counterText;
    step_counter_el.setAttribute('data-ko', '단계 ' + (current_step_index + 1) + ' / ' + total);
    step_counter_el.setAttribute('data-en', 'Step ' + (current_step_index + 1) + ' / ' + total);

    progress_fill_el.style.width = ((current_step_index + 1) / total) * 100 + '%';
    step_content_el.textContent = step.text;

    // 타이머 표시
    step_timer_el.classList.remove('has_timer');
    step_timer_el.textContent = '';
    if (timer_interval) {
      clearInterval(timer_interval);
      timer_interval = null;
    }
    if (step.minutes > 0) {
      step_timer_el.classList.add('has_timer');
      const label = current_lang === 'ko' ? '예상 시간: ' : 'Estimated time: ';
      step_timer_el.textContent = label + step.minutes + (current_lang === 'ko' ? '분' : ' min');
    }

    btn_prev.disabled = is_first;
    btn_next.disabled = false;
    btn_next.textContent = is_last
      ? (current_lang === 'ko' ? '완료' : 'Done')
      : (current_lang === 'ko' ? '다음' : 'Next');
    btn_next.setAttribute('data-ko', is_last ? '완료' : '다음');
    btn_next.setAttribute('data-en', is_last ? 'Done' : 'Next');
  }

  /**
   * 시뮬레이션 시작: 레시피 선택 시 재료·1단계 표시
   */
  function startSimulation(recipe_id) {
    if (!recipes[recipe_id]) return;
    current_recipe_id = recipe_id;
    current_step_index = 0;
    const recipe = recipes[recipe_id];
    simulation_recipe_name.textContent = current_lang === 'ko' ? recipe.name_ko : recipe.name_en;
    simulation_box.classList.remove('hidden');
    renderIngredients();
    renderStep();
    simulation_section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /**
   * 시뮬레이션 초기화 (처음부터 버튼)
   */
  function resetSimulation() {
    current_recipe_id = null;
    current_step_index = 0;
    if (timer_interval) {
      clearInterval(timer_interval);
      timer_interval = null;
    }
    if (btn_next) btn_next.disabled = false;
    simulation_box.classList.add('hidden');
  }

  /**
   * 이전 단계
   */
  function prevStep() {
    if (current_recipe_id && current_step_index > 0) {
      current_step_index--;
      renderStep();
    }
  }

  /**
   * 다음 단계 (마지막이면 완료)
   */
  function nextStep() {
    if (!current_recipe_id) return;
    const recipe = recipes[current_recipe_id];
    const steps = current_lang === 'ko' ? recipe.steps_ko : recipe.steps_en;
    if (current_step_index < steps.length - 1) {
      current_step_index++;
      renderStep();
    } else {
      // 완료 시 메시지 (선택)
      step_content_el.textContent = current_lang === 'ko'
        ? '🎉 시뮬레이션 완료! 이제 실제로 만들어 보세요.'
        : '🎉 Simulation complete! Try making it for real.';
      step_timer_el.textContent = '';
      btn_next.textContent = current_lang === 'ko' ? '완료' : 'Done';
      btn_next.disabled = true;
    }
  }

  // ---------- 이벤트 바인딩
  lang_buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const lang = btn.getAttribute('data-lang');
      if (lang === current_lang) return;
      current_lang = lang;
      localStorage.setItem('ddukbbokki_lang', lang);
      applyLanguage();
    });
  });

  document.querySelectorAll('.btn_simulate').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const card = btn.closest('.recipe_card');
      const recipe_id = card ? card.getAttribute('data-recipe') : null;
      if (recipe_id) startSimulation(recipe_id);
    });
  });

  if (btn_reset) {
    btn_reset.addEventListener('click', resetSimulation);
  }
  if (btn_prev) {
    btn_prev.addEventListener('click', prevStep);
  }
  if (btn_next) {
    btn_next.addEventListener('click', nextStep);
  }

  // ---------- 제휴 문의 모달 제어
  const openContactBtn = document.getElementById('open_contact');
  const closeContactBtn = document.getElementById('close_contact');
  const contactModal = document.getElementById('contact_modal');

  if (openContactBtn && closeContactBtn && contactModal) {
    openContactBtn.addEventListener('click', () => {
      contactModal.classList.add('active');
    });

    closeContactBtn.addEventListener('click', () => {
      contactModal.classList.remove('active');
    });

    // 배경 클릭 시 닫기
    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) {
        contactModal.classList.remove('active');
      }
    });
  }

  // ---------- 초기화: 저장된 언어 적용
  applyLanguage();
})();
