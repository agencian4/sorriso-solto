/* Sorriso Souto — interações mínimas: menu mobile, formulário → WhatsApp, eventos GA4 */
(function () {
  'use strict';
  var WHATSAPP = '5581996378280';

  function track(evento, params) {
    if (typeof window.gtag === 'function') window.gtag('event', evento, params || {});
  }

  // Menu mobile
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var aberto = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(aberto));
      toggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menu');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // Cliques em links de WhatsApp
  document.querySelectorAll('.js-wa').forEach(function (a) {
    a.addEventListener('click', function () {
      track('whatsapp_click', { origem: a.getAttribute('data-origem') || 'link' });
    });
  });
  document.querySelectorAll('a[href^="tel:"]').forEach(function (a) {
    a.addEventListener('click', function () { track('ligar_click'); });
  });

  // Formulário → WhatsApp (nenhum dado é enviado a servidor)
  var form = document.getElementById('form-agendar');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nome = form.nome.value.trim();
      var erro = document.getElementById('f-nome-erro');
      if (!nome) {
        form.nome.setAttribute('aria-invalid', 'true');
        erro.hidden = false;
        form.nome.focus();
        return;
      }
      form.nome.removeAttribute('aria-invalid');
      erro.hidden = true;

      var tratamento = form.tratamento.value;
      var periodoEl = form.querySelector('input[name="periodo"]:checked');
      var periodo = periodoEl ? periodoEl.value : '';
      var preposicao = periodo === 'sábado' ? 'no' : 'pela';
      var msg = 'Olá! Vim pelo site. Meu nome é ' + nome +
        ' e gostaria de agendar uma avaliação de ' + tratamento.toLowerCase() +
        (periodo ? ', de preferência ' + preposicao + ' ' + periodo : '') + '.';

      track('agendamento_form', { tratamento: tratamento, periodo: periodo });
      window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg), '_blank', 'noopener');
    });
  }
})();
