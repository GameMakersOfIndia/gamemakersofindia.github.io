/* ============================================================
   GAME MAKERS OF INDIA — i18n.js
   English / Hindi translation dictionary + language switcher.
   Elements tagged data-i18n get plain-text swaps.
   Elements tagged data-i18n-html get innerHTML swaps (so the
   inner <span class="accent">/<span class="highlight"> markup
   is preserved).
   ============================================================ */

(function () {

  const translations = {
    en: {
      text: {
        navCourse: "Course",
        navCurriculum: "Curriculum",
        navEnroll: "Enroll",
        navFeedback: "Feedback",
        navStart: "Start Learning",
        heroKicker: "Unity 6 full beginner course",
        heroLine1: "How to make",
        heroLine2: "Games",
        heroLine3: "for beginners",
        heroLang: "Taught in Hindi / Urdu",
        heroSub: "Build your first 2D game from scratch, with player controls, shooting, enemies, UI, levels, audio, Android export, and GitHub basics.",
        thumbChip: "7 hr course",
        heroCtaStart: "Start Course",
        heroCtaLearnMore: "Learn More",
        heroCtaPreview: "Watch FREE",
        heroCtaResources: "Resources",
        stage01: "Stage 01",
        introDesc: "A practical Unity path built around finishing a real 2D game, not just watching theory.",
        statModules: "Modules",
        statLangFull: "Hindi / Urdu",
        statLanguage: "Language",
        statGameBuild: "Game Build",
        statBeginnerOk: "Beginner OK",
        featureShooting: "Shooting",
        featureShootingDesc: "Bullets, hits, health and enemy reactions",
        featureExport: "Export your final game",
        featureGithub: "Basic version control setup",
        stage02: "Stage 02",
        card01: "Unity 6 Fundamentals & Workflow",
        card02: "GameObjects & Components",
        card03: "Player Movement, Jump & Gravity",
        card04: "Camera Follow with Smooth Motion",
        card05: "Animation (Idle, Run, Jump States)",
        card06: "Shooting System & Bullet Mechanics",
        card07: "Enemy AI Behavior & Health System",
        card08: "Collectibles & Trigger-Based Systems",
        card09: "UI Design (Canvas, Buttons, Panels)",
        card10: "Game Manager & Singleton Concept",
        card11: "Creating & Managing Multiple Levels",
        card12: "Audio Manager for Sound Effects",
        card13: "Debugging & Fixing Common Issues",
        card14: "Build for Windows PC",
        card15: "Export Your Game for Android",
        card16: "Basic GitHub Setup for Version Control",
        card17: "Preparing & Optimizing Your Game",
        stage03: "Stage 03",
        udemyDesc: "Lifetime access, certificate, mobile app",
        enrollNow: "Enroll Now",
        youtubeDesc: "Free videos, previews & walkthroughs",
        watchNow: "Watch Now",
        connect: "Connect",
        footerHome: "Home",
        footerThankYou: "Thank You"
      },
      html: {
        introTitle: 'Course <span class="accent">Introduction</span>',
        introP1: 'This course is designed for anyone who wants to start their journey in game development using <span class="highlight">Unity 6</span>. Instead of just learning theory, you will <span class="highlight">build a complete 2D game step by step</span> and understand how different systems in a real game work together.',
        introP2: 'The course is explained in <span class="highlight">Hindi / Urdu</span>, making it easier to understand concepts clearly, especially if you are a beginner or someone who struggles with English-based tutorials.',
        introP3: 'You do not need any prior experience in Unity or programming. Everything is explained from the basics, and gradually we move towards more practical systems like player mechanics, shooting, enemies, UI, and game management.',
        introP4: 'By the end, you will have a <span class="highlight">complete game project</span> and a strong foundation to start creating your own games.',
        learnTitle: 'What You Will <span class="accent">Learn</span>',
        platformTitle: 'Choose Your <span class="accent">Platform</span>',
        findUsTitle: 'Find <span class="accent">Us</span>',
        footerCopy: '© 2026 Game Makers Of India. Made with <i class="fa-solid fa-heart"></i> for future game developers.'
      }
    },

    hi: {
      text: {
        navCourse: "कोर्स",
        navCurriculum: "पाठ्यक्रम",
        navEnroll: "एनरोल",
        navFeedback: "फीडबैक",
        navStart: "सीखना शुरू करें",
        heroKicker: "Unity 6 फुल बिगिनर कोर्स",
        heroLine1: "गेम बनाना",
        heroLine2: "सीखें",
        heroLine3: "शुरुआती लोगों के लिए",
        heroLang: "हिंदी / उर्दू में सिखाया गया",
        heroSub: "शुरुआत से अपना पहला 2D गेम बनाएं, जिसमें प्लेयर कंट्रोल, शूटिंग, दुश्मन, UI, लेवल, ऑडियो, Android एक्सपोर्ट और GitHub basics शामिल हैं।",
        thumbChip: "7 hr course",
        heroCtaStart: "कोर्स शुरू करें",
        heroCtaLearnMore: "और जानें",
        heroCtaPreview: "प्रीव्यू देखें",
        heroCtaResources: "संसाधन",
        stage01: "चरण 01",
        introDesc: "एक practical Unity path जिसमें आप सिर्फ theory नहीं, बल्कि पूरा 2D गेम finish करते हैं।",
        statModules: "मॉड्यूल",
        statLangFull: "हिंदी / उर्दू",
        statLanguage: "भाषा",
        statGameBuild: "गेम बिल्ड",
        statBeginnerOk: "शुरुआती भी कर सकते हैं",
        featureShooting: "शूटिंग",
        featureShootingDesc: "बुलेट्स, हिट्स, हेल्थ और enemy reactions",
        featureExport: "अपना final game export करें",
        featureGithub: "बेसिक version control setup",
        stage02: "चरण 02",
        card01: "Unity 6 की बुनियादी बातें और वर्कफ़्लो",
        card02: "गेमऑब्जेक्ट्स और कंपोनेंट्स",
        card03: "प्लेयर मूवमेंट, जंप और ग्रेविटी",
        card04: "स्मूद मोशन के साथ कैमरा फॉलो",
        card05: "एनिमेशन (आइडल, रन, जंप स्टेट्स)",
        card06: "शूटिंग सिस्टम और बुलेट मैकेनिक्स",
        card07: "एनिमी AI व्यवहार और हेल्थ सिस्टम",
        card08: "कलेक्टिबल्स और ट्रिगर-आधारित सिस्टम्स",
        card09: "UI डिज़ाइन (कैनवास, बटन, पैनल)",
        card10: "गेम मैनेजर और सिंगलटन कॉन्सेप्ट",
        card11: "कई लेवल बनाना और मैनेज करना",
        card12: "साउंड इफेक्ट्स के लिए ऑडियो मैनेजर",
        card13: "डिबगिंग और आम समस्याओं को ठीक करना",
        card14: "Windows PC के लिए बिल्ड करें",
        card15: "Android के लिए अपना गेम एक्सपोर्ट करें",
        card16: "वर्जन कंट्रोल के लिए बेसिक GitHub सेटअप",
        card17: "अपने गेम को तैयार और ऑप्टिमाइज़ करना",
        stage03: "चरण 03",
        udemyDesc: "लाइफटाइम एक्सेस, सर्टिफिकेट, मोबाइल ऐप",
        enrollNow: "अभी एनरोल करें",
        youtubeDesc: "मुफ़्त वीडियो, प्रीव्यू और वॉकथ्रू",
        watchNow: "अभी देखें",
        connect: "संपर्क करें",
        footerHome: "होम",
        footerThankYou: "धन्यवाद"
      },
      html: {
        introTitle: 'कोर्स <span class="accent">परिचय</span>',
        introP1: 'यह कोर्स हर उस व्यक्ति के लिए बनाया गया है जो <span class="highlight">Unity 6</span> का उपयोग करके गेम डेवलपमेंट में अपनी यात्रा शुरू करना चाहता है। सिर्फ थ्योरी सीखने के बजाय, आप <span class="highlight">कदम-दर-कदम एक पूरा 2D गेम बनाएंगे</span> और समझेंगे कि असली गेम में अलग-अलग सिस्टम कैसे मिलकर काम करते हैं।',
        introP2: 'यह कोर्स <span class="highlight">हिंदी / उर्दू</span> में समझाया गया है, जिससे कॉन्सेप्ट्स को स्पष्ट रूप से समझना आसान हो जाता है, खासकर यदि आप शुरुआती हैं या अंग्रेज़ी वाले ट्यूटोरियल्स के साथ मुश्किल महसूस करते हैं।',
        introP3: 'आपको Unity या प्रोग्रामिंग में किसी भी पूर्व अनुभव की आवश्यकता नहीं है। सब कुछ बुनियादी बातों से समझाया गया है, और धीरे-धीरे हम प्लेयर मैकेनिक्स, शूटिंग, दुश्मन, UI, और गेम मैनेजमेंट जैसे व्यावहारिक सिस्टम्स की ओर बढ़ते हैं।',
        introP4: 'अंत तक, आपके पास एक <span class="highlight">पूरा गेम प्रोजेक्ट</span> होगा और अपने खुद के गेम बनाने शुरू करने के लिए एक मजबूत आधार होगा।',
        learnTitle: 'आप क्या <span class="accent">सीखेंगे</span>',
        platformTitle: 'अपना <span class="accent">प्लेटफ़ॉर्म</span> चुनें',
        findUsTitle: '<span class="accent">हमें</span> खोजें',
        footerCopy: '© 2026 Game Makers Of India. भविष्य के गेम डेवलपर्स के लिए <i class="fa-solid fa-heart"></i> से बनाया गया।'
      }
    }
  };

  const STORAGE_KEY = "gmoi_lang";
  const labelMap = { en: "English", hi: "हिंदी (Hindi)" };

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict.text[key] !== undefined) {
        el.textContent = dict.text[key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict.html[key] !== undefined) {
        el.innerHTML = dict.html[key];
      }
    });

    document.documentElement.setAttribute("lang", lang);
    document.body.classList.toggle("lang-hi", lang === "hi");

    const label = document.getElementById("langSwitchLabel");
    if (label) label.textContent = labelMap[lang] || labelMap.en;

    document.querySelectorAll("#langMenu [role='option']").forEach((li) => {
      li.setAttribute("aria-selected", li.getAttribute("data-lang") === lang ? "true" : "false");
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  function initLangSwitch() {
    const switchEl = document.getElementById("langSwitch");
    const btn = document.getElementById("langSwitchBtn");
    const menu = document.getElementById("langMenu");
    if (!switchEl || !btn || !menu) return;

    const closeMenu = () => {
      switchEl.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    };
    const toggleMenu = () => {
      const isOpen = switchEl.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
    };

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    menu.querySelectorAll("[role='option']").forEach((option) => {
      option.addEventListener("click", () => {
        const lang = option.getAttribute("data-lang");
        applyLanguage(lang);
        closeMenu();
      });
    });

    document.addEventListener("click", (e) => {
      if (!switchEl.contains(e.target)) closeMenu();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLangSwitch();

    let savedLang = "en";
    try { savedLang = localStorage.getItem(STORAGE_KEY) || "en"; } catch (e) { /* ignore */ }
    applyLanguage(savedLang);
  });

})();
