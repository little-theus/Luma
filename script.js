// Luma landing page — small progressive-enhancement behaviors

/* ============================================
   Translations
   ============================================ */
const translations = {
  en: {
    meta_title: "Luma — A quiet space for reflection",
    meta_desc: "Luma is a reflection and self-care app that helps you record difficult moments, notice patterns, and care for yourself over time. Currently a functional prototype in validation.",
    nav_about: "About",
    nav_journey: "Journey",
    nav_features: "Features",
    nav_privacy: "Privacy",
    nav_stage: "Stage",
    nav_contact: "Get in touch",
    hero_eyebrow: "A private space for reflection",
    hero_subtitle: "A quiet place to record hard moments, notice patterns, and care for yourself — one reflection at a time.",
    hero_cta_primary: "See how it works",
    hero_cta_ghost: "Get in touch",
    hero_meta: "Functional prototype · Validation stage · Currently in Portuguese",
    mock_label: "Screenshot placeholder",
    mock_sublabel: "Replace with a real Luma screenshot",
    about_eyebrow: "What is Luma?",
    about_text_1: "Luma is a reflection and self-care app. It helps you record difficult moments, look back on what happened, and recognize patterns over time — so you can understand yourself a little better and prepare for what comes next.",
    about_text_2: "Luma is not a diagnostic or treatment tool. It's a companion for reflection, meant to sit quietly alongside the people and professionals who already support you.",
    journey_eyebrow: "The Luma journey",
    journey_title: "Five steps, always in your own time",
    step1_title: "Record",
    step1_desc: "Capture what happened, how intense it felt, and what came with it.",
    step2_title: "Reflect",
    step2_desc: "Look back with a clearer mind, away from the moment itself.",
    step3_title: "Recognize",
    step3_desc: "Notice patterns forming across your own history.",
    step4_title: "Prepare",
    step4_desc: "Turn what you've learned into a plan for next time.",
    step5_title: "Continue",
    step5_desc: "Keep going — one entry, one day at a time.",
    features_eyebrow: "Features",
    features_title: "Small tools for a steady practice",
    feat_records_title: "Records",
    feat_records_desc: "Register moments, intensity, thoughts, sensations, reactions and what followed.",
    feat_tree_title: "My Tree",
    feat_tree_desc: "A visual representation of your journey's continuity — it grows as you keep showing up.",
    feat_bubble_title: "Calm Bubble",
    feat_bubble_desc: "A simple pause for reflection, with gentle messages and visual change.",
    feat_echoes_title: "Echoes",
    feat_echoes_desc: "Freely register thoughts or moments to come back to later.",
    feat_plan_title: "Prevention Plan",
    feat_plan_desc: "Organize your own strategies for moments of rising pressure or difficulty.",
    feat_network_title: "Support Network",
    feat_network_desc: "Add people you trust and reach them easily by WhatsApp, call, or text.",
    feat_reminders_title: "Reminders",
    feat_reminders_desc: "Set gentle nudges to help you keep a steady reflection routine.",
    privacy_eyebrow: "Privacy",
    privacy_title: "Designed with privacy in mind",
    privacy_text_1: "Luma's core features are built to work locally, right on your device — no account and no email address required to start reflecting.",
    privacy_text_2: "Your entries are stored locally on your device. No approach can promise absolute security, but privacy is treated as a design principle from the start, not an afterthought.",
    stage_eyebrow: "Current stage",
    stage_title: "Honest about where Luma is today",
    stage1_pill: "Functional prototype",
    stage1_desc: "Built in HTML, CSS and JavaScript, packaged with Capacitor for Android.",
    stage2_pill: "Validation stage",
    stage2_desc: "Actively being tested and refined — this is not a finished, market-proven product yet.",
    stage3_pill: "Independent project",
    stage3_desc: "Not backed by a company or investors. Built and maintained independently.",
    partners_eyebrow: "Looking for partners",
    partners_title: "Building this alongside the right people",
    partners_text: "Luma is an independent project looking for people and organizations to help it grow through validation, research, and real-world piloting.",
    tag1: "Early users for validation",
    tag2: "Digital health organizations",
    tag3: "Researchers",
    tag4: "Pilot project opportunities",
    tag5: "UX/UI collaboration",
    tag6: "Technical support",
    tag7: "International partners",
    contact_title: "Let's talk",
    contact_text: "Interested in trying Luma, collaborating, or learning more about the project? Reach out.",
    contact_cta: "Get in touch",
    footer_text: "An independent project. The current prototype is available in Portuguese."
  },
  pt: {
    meta_title: "Luma — Um espaço tranquilo para reflexão",
    meta_desc: "Luma é um aplicativo de reflexão e autocuidado emocional que ajuda você a registrar momentos difíceis, perceber padrões e cuidar de si ao longo do tempo. Atualmente é um protótipo funcional em fase de validação.",
    nav_about: "Sobre",
    nav_journey: "Jornada",
    nav_features: "Funcionalidades",
    nav_privacy: "Privacidade",
    nav_stage: "Estágio",
    nav_contact: "Fale conosco",
    hero_eyebrow: "Um espaço privado para reflexão",
    hero_subtitle: "Um lugar tranquilo para registrar momentos difíceis, perceber padrões e cuidar de si — uma reflexão de cada vez.",
    hero_cta_primary: "Veja como funciona",
    hero_cta_ghost: "Fale conosco",
    hero_meta: "Protótipo funcional · Fase de validação · Atualmente em português",
    mock_label: "Espaço para screenshot",
    mock_sublabel: "Substitua por um screenshot real do Luma",
    about_eyebrow: "O que é o Luma?",
    about_text_1: "Luma é um aplicativo de reflexão e autocuidado emocional. Ele ajuda você a registrar momentos difíceis, olhar para trás sobre o que aconteceu e reconhecer padrões ao longo do tempo — para que você possa se entender um pouco melhor e se preparar para o que vem a seguir.",
    about_text_2: "Luma não é uma ferramenta de diagnóstico ou tratamento. É um companheiro de reflexão, feito para existir ao lado das pessoas e profissionais que já apoiam você.",
    journey_eyebrow: "A jornada do Luma",
    journey_title: "Cinco passos, sempre no seu próprio tempo",
    step1_title: "Registrar",
    step1_desc: "Capture o que aconteceu, a intensidade que sentiu e o que veio junto.",
    step2_title: "Refletir",
    step2_desc: "Olhe para trás com a mente mais clara, longe do momento em si.",
    step3_title: "Reconhecer",
    step3_desc: "Perceba padrões se formando ao longo da sua própria história.",
    step4_title: "Preparar",
    step4_desc: "Transforme o que você aprendeu em um plano para a próxima vez.",
    step5_title: "Continuar",
    step5_desc: "Continue seguindo em frente — um registro, um dia de cada vez.",
    features_eyebrow: "Funcionalidades",
    features_title: "Pequenas ferramentas para uma prática constante",
    feat_records_title: "Records",
    feat_records_desc: "Registre momentos, intensidade, pensamentos, sensações, reações e o que veio depois.",
    feat_tree_title: "My Tree",
    feat_tree_desc: "Uma representação visual da continuidade da sua jornada — ela cresce conforme você continua se dedicando.",
    feat_bubble_title: "Calm Bubble",
    feat_bubble_desc: "Uma pausa simples para reflexão, com mensagens suaves e mudança visual.",
    feat_echoes_title: "Echoes",
    feat_echoes_desc: "Registre livremente pensamentos ou momentos para revisitar depois.",
    feat_plan_title: "Prevention Plan",
    feat_plan_desc: "Organize suas próprias estratégias para momentos de pressão ou dificuldade crescente.",
    feat_network_title: "Support Network",
    feat_network_desc: "Adicione pessoas de confiança e entre em contato facilmente por WhatsApp, ligação ou SMS.",
    feat_reminders_title: "Reminders",
    feat_reminders_desc: "Configure lembretes gentis para te ajudar a manter uma rotina constante de reflexão.",
    privacy_eyebrow: "Privacidade",
    privacy_title: "Projetado com privacidade em mente",
    privacy_text_1: "As principais funcionalidades do Luma foram feitas para funcionar localmente, direto no seu dispositivo — sem necessidade de conta ou e-mail para começar a refletir.",
    privacy_text_2: "Seus registros ficam armazenados localmente no seu dispositivo. Nenhuma abordagem pode garantir segurança absoluta, mas a privacidade é tratada como um princípio de design desde o início, não como algo secundário.",
    stage_eyebrow: "Estágio atual",
    stage_title: "Honestos sobre onde o Luma está hoje",
    stage1_pill: "Protótipo funcional",
    stage1_desc: "Desenvolvido em HTML, CSS e JavaScript, empacotado com Capacitor para Android.",
    stage2_pill: "Fase de validação",
    stage2_desc: "Sendo ativamente testado e aprimorado — ainda não é um produto finalizado e comprovado no mercado.",
    stage3_pill: "Projeto independente",
    stage3_desc: "Sem apoio de empresa ou investidores. Desenvolvido e mantido de forma independente.",
    partners_eyebrow: "Buscando parceiros",
    partners_title: "Construindo isso ao lado das pessoas certas",
    partners_text: "Luma é um projeto independente em busca de pessoas e organizações que ajudem a fazê-lo crescer através de validação, pesquisa e testes-piloto no mundo real.",
    tag1: "Usuários iniciais para validação",
    tag2: "Organizações de saúde digital",
    tag3: "Pesquisadores",
    tag4: "Oportunidades de projetos-piloto",
    tag5: "Colaboração em UX/UI",
    tag6: "Apoio tecnológico",
    tag7: "Parceiros internacionais",
    contact_title: "Vamos conversar",
    contact_text: "Interessado em experimentar o Luma, colaborar ou saber mais sobre o projeto? Entre em contato.",
    contact_cta: "Fale conosco",
    footer_text: "Um projeto independente. O protótipo atual está disponível em português."
  }
};

function applyLanguage(lang) {
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = translations[lang] && translations[lang][key];
    if (value === undefined) return;

    if (el.tagName === 'TITLE') {
      document.title = value;
    } else if (el.hasAttribute('data-i18n-attr')) {
      el.setAttribute(el.getAttribute('data-i18n-attr'), value);
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll('.lang-option').forEach(el => {
    el.classList.toggle('is-active', el.getAttribute('data-lang') === lang);
  });

  try { localStorage.setItem('luma-lang', lang); } catch (e) { /* storage unavailable */ }
}

document.addEventListener('DOMContentLoaded', () => {

  /* Language toggle */
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    let savedLang = 'en';
    try { savedLang = localStorage.getItem('luma-lang') || 'en'; } catch (e) { /* storage unavailable */ }
    applyLanguage(savedLang);

    langToggle.addEventListener('click', () => {
      const current = document.documentElement.lang.startsWith('pt') ? 'pt' : 'en';
      applyLanguage(current === 'en' ? 'pt' : 'en');
    });
  }

  /* Mobile nav toggle */
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.classList.toggle('is-active', isOpen);
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Scroll-reveal animations, respecting reduced-motion preference */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.reveal');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('is-visible'), i * 60);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  }

});
