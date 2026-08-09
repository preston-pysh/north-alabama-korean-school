/* =================================================================
   ★ THIS IS THE MAIN FILE YOU EDIT ★   (the homepage)
   Blog articles live in a separate file: spotlight-posts.js

   Everything on the homepage comes from this file. To change the
   site, change the text below, save, and commit the file. The
   website updates itself.

   THE SITE IS BILINGUAL — English and Korean.
   Almost every line of text is written as a PAIR:

       en: "English text here",
       ko: "여기에 한국어",

   Edit BOTH so the site reads well in both languages. A visitor
   flips between them with the EN / 한국어 toggle at the top.

   A FEW SIMPLE RULES so nothing breaks:
   1. Keep every piece of text inside "double quotes".
   2. Keep the comma at the end of each line.
   3. Don't delete the { } [ ] brackets — just edit text between them.
   4. To add an item, copy a block from { to }, paste it, edit it.

   If the site ever shows a blank page, you most likely deleted a
   quote, comma, or bracket. Undo your last change and save again.
   ================================================================= */

window.SITE = {

  /* The site's real web address. Used for share links and SEO.
     UPDATE THIS once the school's domain name is purchased, and
     also find-and-replace it in robots.txt, sitemap.xml, and
     tools/build-spotlight.mjs. */
  siteUrl: "https://northalabamakoreanschool.org",

  /* =================================================================
     ORG — applies to the whole site
     ================================================================= */
  org: {
    name: {
      en: "North Alabama Korean School",
      ko: "북알라바마 한국학교"          /* Confirmed Korean name (per Preston, Jul 2026) */
    },

    location: {
      en: "First Baptist Church · 600 Governors Dr · Huntsville, AL 35801",
      ko: "First Baptist Church · 600 Governors Dr · 헌츠빌, AL 35801"
    },

    /* The school's contact email. */
    contactEmail: "nalkoreanschool@gmail.com",

    /* Is the school a registered 501(c)(3) non-profit?
       • true  — donation copy can say gifts are tax-deductible.
       • false — that language is left out.
       CONFIRM the school's status before launch. */
    isNonProfit: true,

    /* The school logo. The site looks for assets/logo-emblem.png — a
       clean, transparent-background version of the emblem — and shows
       it in the nav, hero, and footer. Until that file exists the
       site simply shows the school name as text, so nothing breaks. */
    logo: "assets/logo-emblem.png",

    /* Social links. Leave any one "" to hide it. */
    social: {
      facebook:  "https://www.facebook.com/NAKSinhuntsville/",
      instagram: "",
      youtube:   "",
      kakao:     ""
    }
  },

  /* =================================================================
     NAV — the labels for the links in the top navigation bar
     ================================================================= */
  nav: {
    about:      { en: "About",      ko: "소개" },
    spotlight:  { en: "Stories",    ko: "이야기" },
    programs:   { en: "Programs",   ko: "교육과정" },
    curriculum: { en: "Curriculum", ko: "교과과정" },
    join:       { en: "Join Us",    ko: "함께하기" },
    partners:   { en: "Support",    ko: "후원" },
    enroll:     { en: "Enroll",     ko: "등록" }
  },

  /* =================================================================
     UI — small reusable labels used around the site
     ================================================================= */
  ui: {
    readMore:        { en: "Read the story",  ko: "이야기 보기" },
    seeAllStories:   { en: "View older articles", ko: "지난 이야기 더 보기" },
    nextUp:          { en: "NEXT UP",         ko: "다음 일정" },
    noStories:       { en: "New stories are coming soon.", ko: "새로운 이야기가 곧 올라옵니다." },
    noEvents:        { en: "Upcoming events will appear here.", ko: "예정된 행사가 여기에 표시됩니다." },
    newsletterUnset: { en: "Newsletter signup is not connected yet. See SETUP-GUIDE.md.",
                       ko: "뉴스레터 신청이 아직 연결되지 않았습니다. SETUP-GUIDE.md를 참고하세요." }
  },

  /* =================================================================
     HERO — the first thing visitors see
     ================================================================= */
  hero: {
    eyebrow: {
      en: "Fall 2026 enrollment is open · classes begin August 15",
      ko: "2026년 가을학기 등록 접수 중 · 8월 15일 개강"
    },
    headline: {
      en: "A warm place to grow up Korean.",
      ko: "한국어와 한국 문화가 자라나는 따뜻한 곳."
    },
    sub: {
      en: "Weekend Korean language and culture classes for children and families across the Huntsville and Madison area.",
      ko: "헌츠빌과 매디슨 지역의 어린이와 가정을 위한 주말 한국어·한국문화 학교입니다."
    },
    /* Short facts shown as small pills under the headline. */
    facts: [
      { en: "Established 1992",           ko: "1992년 설립" },
      { en: "Ages 4 and up",              ko: "만 4세 이상" },
      { en: "Saturdays · Huntsville, AL", ko: "토요일 · 헌츠빌, AL" }
    ],
    ctaPrimary:     { en: "Enroll your child", ko: "자녀 등록하기" },
    ctaPrimaryHref: "https://forms.gle/5q1wKwVnhNDnAexM6",
    ctaSecondary:     { en: "Read our stories", ko: "학교 이야기" },
    ctaSecondaryHref: "#spotlight"
  },

  /* =================================================================
     ABOUT — the school's mission
     ================================================================= */
  about: {
    eyebrow: { en: "About the school", ko: "학교 소개" },
    title:   { en: "More than thirty years of teaching Korean.",
               ko: "한국어를 가르쳐 온 30여 년." },
    lede:    { en: "High-quality learning in Korean language, culture, and history — for Korean heritage families and the whole North Alabama community.",
               ko: "한국어와 한국 문화, 역사를 깊이 있게 배우는 곳 — 한국계 가정과 북알라바마 지역사회 모두를 위한 학교입니다." },
    /* Each line below is one paragraph. Edit freely. */
    body: [
      { en: "The North Alabama Korean School (NAKS) is a non-profit educational organization, established in 1992 and based in Huntsville, Alabama. For more than three decades we have proudly served students and families from Huntsville, Madison, and the surrounding areas — every Saturday, in classrooms full of children learning to read, write, and speak Korean.",
        ko: "북알라바마 한국학교(NAKS)는 1992년에 설립된 비영리 교육 기관으로, 알라바마 헌츠빌에 자리하고 있습니다. 30년이 넘는 시간 동안 헌츠빌, 매디슨, 그리고 인근 지역의 학생과 가정과 함께해 왔습니다 — 매주 토요일, 한국어를 읽고 쓰고 말하는 법을 배우는 아이들로 가득 찬 교실에서 말입니다." },
      { en: "Our mission is to provide high-quality learning opportunities in Korean language, culture, and history — fostering cultural understanding, identity, and global awareness. NAKS runs on the generous support of the Korean Ministry of Foreign Affairs, local corporations, Korean organizations, churches, and individual community sponsors.",
        ko: "우리의 사명은 한국어와 한국 문화, 역사를 배우는 수준 높은 교육 기회를 제공하여 문화에 대한 이해와 정체성, 그리고 세계를 향한 시야를 키우는 것입니다. NAKS는 대한민국 외교부와 지역 기업, 한인 단체, 교회, 그리고 개인 후원자들의 따뜻한 지원으로 운영됩니다." }
    ],
    /* Optional headline numbers. Edit, or remove a block to drop it. */
    stats: [
      { num: { en: "30+",     ko: "30+" },     label: { en: "Years strong — established 1992", ko: "1992년 설립 — 30년 이상" } },
      { num: { en: "8–9",     ko: "8–9" },     label: { en: "Classes, from Pre-K through adult", ko: "유치부부터 성인까지 8–9개 반" } },
      { num: { en: "Ages 4+", ko: "4세+" },    label: { en: "All welcome, including non-Korean learners", ko: "비한국계 학습자도 누구나 환영" } }
    ]
  },

  /* =================================================================
     SPOTLIGHT — heading for the story feed.
     The articles themselves are in spotlight-posts.js
     ================================================================= */
  spotlight: {
    eyebrow: { en: "Spotlight",  ko: "스포트라이트" },
    title:   { en: "Stories from our school.",
               ko: "우리 학교 이야기." },
    lede:    { en: "Volunteers, teachers, students, and the moments that make this community what it is — written to be read, and made to be shared.",
               ko: "자원봉사자, 선생님, 학생들, 그리고 이 공동체를 만들어 가는 순간들 — 읽기 좋게 쓰고, 나누기 좋게 만들었습니다." },
    /* Heading shown above the row of older stories, beneath the featured one. */
    more:    { en: "More stories", ko: "이야기 더 보기" }
  },

  /* =================================================================
     PROGRAMS — the class levels (an expandable list)
     ================================================================= */
  programs: {
    eyebrow: { en: "Programs", ko: "교육과정" },
    title:   { en: "A class for every age and level.",
               ko: "모든 연령과 단계를 위한 교실." },
    lede:    { en: "Eight classes grow with your child — from Seeds to Tree — pairing the Korean language with cultural immersion at every age. Ages guide placement; for Leaves through Fruits, a student's Korean proficiency and the school's placement also apply. Open any level to see what students learn.",
               ko: "여덟 개의 반이 아이와 함께 자랍니다 — 씨앗반부터 나무반까지, 모든 연령에서 한국어와 문화 체험을 함께 담습니다. 반 편성은 연령을 기준으로 하되, 풀잎반부터 열매반까지는 학생의 한국어 수준과 학교의 배정이 함께 반영됩니다. 각 단계를 펼쳐 학생들이 무엇을 배우는지 확인하세요." },
    /* A one-page-per-language printable overview of all eight classes.
       Opens a clean in-browser viewer (program-overview.html) with a
       Print / Save-PDF button. */
    overview: {
      label: { en: "Program overview — all eight classes (PDF)",
               ko: "전체 교육과정 안내 — 여덟 개 반 (PDF)" },
      note:  { en: "One page in English, one in Korean — print or save.",
               ko: "영어 한 면, 한국어 한 면 — 인쇄하거나 저장하세요." },
      href:  "program-overview.html"
    },
    /* The eight classes on the plant-growth ladder, each with full curriculum.
       Textbooks change from semester to semester, so no textbook titles are
       listed in the class topics. koClassName shows the name in the other
       language. */
    levels: [
      {
        name:    { en: "Seeds", ko: "씨앗반" },
        sub:     { en: "Ages 4–5", ko: "만 4–5세" },
        koClassName: { en: "씨앗반", ko: "Seeds" },
        summary: { en: "A joyful first taste of Korean — colors, animals, family, and Hangeul through songs, games, and a picture book.",
                   ko: "색깔, 동물, 가족, 그리고 한글을 노래와 놀이, 그림책으로 처음 만나는 즐거운 한국어 첫걸음." },
        topics: [
          { en: "Themed picture-book vocabulary — colors, shapes, animals, instruments, insects, vehicles, and everyday objects",
            ko: "주제별 그림책 어휘 — 색깔과 모양, 동물, 악기, 곤충, 탈것, 생활 물건" },
          { en: "Family and friends, seasons, jobs, our neighborhood, and Korean folk tales",
            ko: "가족과 친구, 계절, 직업, 우리 동네, 그리고 옛날이야기" },
          { en: "First Hangeul letters and numbers, holidays, and Korean culture through play",
            ko: "놀이로 배우는 한글 첫 자모와 숫자, 명절, 그리고 한국 문화" }
        ]
      },
      {
        name:    { en: "Roots", ko: "뿌리반" },
        sub:     { en: "Ages 6–7", ko: "만 6–7세" },
        koClassName: { en: "뿌리반", ko: "Roots" },
        summary: { en: "Reading and writing Hangeul from the ground up, plus first everyday conversations.",
                   ko: "한글을 처음부터 읽고 쓰며, 첫 일상 회화를 시작하는 단계." },
        topics: [
          { en: "Reading and writing Hangeul — vowels, consonants, syllable formation, double consonants, and final consonants (받침)",
            ko: "한글 읽기와 쓰기 — 모음, 자음, 음절 만들기, 쌍자음, 받침" },
          { en: "Greetings and introducing yourself and your family",
            ko: "인사하기와 나와 가족 소개하기" },
          { en: "Everyday life and school life — classroom objects, home, places, and activities",
            ko: "일상생활과 학교생활 — 교실 물건, 집, 장소, 활동" }
        ]
      },
      {
        name:    { en: "Sprouts", ko: "새싹반" },
        sub:     { en: "Ages 8–9", ko: "만 8–9세" },
        koClassName: { en: "새싹반", ko: "Sprouts" },
        summary: { en: "Confident reading and writing with longer sentences and a widening everyday vocabulary.",
                   ko: "긴 문장으로 자신 있게 읽고 쓰며, 일상 어휘를 넓혀 가는 단계." },
        topics: [
          { en: "Hangeul foundations — simple vowels and consonants, syllable formation, compound vowels, double consonants (쌍자음), and final consonants (받침)",
            ko: "한글의 기초 — 기본 모음과 자음, 음절 만들기, 복합 모음, 쌍자음, 받침" },
          { en: "First sentence patterns and simple everyday expressions in the polite “해요” style",
            ko: "기본 문형과 간단한 일상 표현을 ‘해요체’로 익히기" },
          { en: "Everyday vocabulary practiced through Let’s Learn, Listen, Talk, and Write activities, with a look at Korean culture in every unit",
            ko: "생활 어휘를 ‘배워요·들어요·말해요·써요’ 활동으로 익히고, 매 단원에서 한국 문화를 만나기" },
          { en: "Counting both ways — cardinal (일, 이, 삼, 사) and ordinal (하나, 둘, 셋, 넷) numbers",
            ko: "두 가지 수 세기 — 기수(일, 이, 삼, 사)와 서수(하나, 둘, 셋, 넷)" }
        ]
      },
      {
        name:    { en: "Leaves", ko: "풀잎반" },
        sub:     { en: "Ages 10–12", ko: "만 10–12세" },
        koClassName: { en: "풀잎반", ko: "Leaves" },
        summary: { en: "Moving from sentences to paragraphs — stronger reading comprehension and wider-ranging conversation.",
                   ko: "문장에서 문단으로 — 독해력을 키우고 더 다양한 주제로 대화하는 단계." },
        topics: [
          { en: "Talking about yourself, your family, and where you live",
            ko: "나와 가족, 그리고 사는 곳에 대해 이야기하기" },
          { en: "Everyday conversation and preferences — where you’re going, what you’re reading, and foods and things you like",
            ko: "일상 회화와 취향 — 어디에 가는지, 무엇을 읽는지, 좋아하는 음식과 물건 말하기" },
          { en: "Asking and answering questions (who / when / do you have…?), describing and negating, and playground activities",
            ko: "묻고 답하기(누가·언제·있어요?), 묘사와 부정 표현, 놀이터에서 하는 활동" }
        ]
      },
      {
        name:    { en: "Flowers", ko: "꽃잎반" },
        sub:     { en: "Ages 11–14", ko: "만 11–14세" },
        koClassName: { en: "꽃잎반", ko: "Flowers" },
        summary: { en: "Deeper reading, writing, and discussion, with richer exploration of Korean culture and history.",
                   ko: "더 깊이 있는 읽기·쓰기·토론과 함께 한국 문화와 역사를 폭넓게 탐구하는 단계." },
        topics: [
          { en: "Describing people and things — family, pets, and appearance",
            ko: "사람과 사물 묘사하기 — 가족, 반려동물, 생김새" },
          { en: "Hobbies and habits — sports, drawing, concerts, the library, and studying Korean",
            ko: "취미와 습관 — 운동, 그림, 음악회, 도서관, 한국어 공부" },
          { en: "Neighborhood and directions, giving gifts, and describing past trips (e.g., “I went to Seoul”)",
            ko: "동네와 길 안내, 선물하기, 지난 여행 이야기하기(예: ‘서울에 갔어요’)" },
          { en: "Time, prices, dates, and future plans — career dreams, festivals, and exhibitions",
            ko: "시간·가격·날짜와 앞으로의 계획 — 장래 희망, 축제, 전시회" },
          { en: "Uses the Korean School: Korean Language series (intermediate volumes), with Learn–Practice–Talk–Read–Listen–Write activities and a Korean culture feature in every unit",
            ko: "교재: 「한국학교 한국어」 시리즈(중급 단계) — 배우기·연습·말하기·읽기·듣기·쓰기 활동과 매 단원의 한국 문화" }
        ]
      },
      {
        name:    { en: "Fruits", ko: "열매반" },
        sub:     { en: "Ages 15–17", ko: "만 15–17세" },
        koClassName: { en: "열매반", ko: "Fruits" },
        summary: { en: "Advanced fluency, composition, and discussion — with optional National Korean Test (NKT) preparation.",
                   ko: "고급 유창성과 작문, 토론 — NKT(National Korean Test) 준비(선택 사항)까지." },
        topics: [
          { en: "Advanced everyday conversation — daily life, health and habits, friendships, and manners",
            ko: "고급 일상 회화 — 생활, 건강과 습관, 우정, 예절" },
          { en: "Expressing plans, intentions, and wishes — “I’m going to…,” “I’m looking forward to…,” “I wish I could…”",
            ko: "계획·의도·바람 표현하기 — ‘~려고 해요’, ‘기대가 돼요’, ‘~고 싶어요’" },
          { en: "Korean culture in depth — folk villages, hanbok fashion, the gayageum, and Chuseok",
            ko: "깊이 있는 한국 문화 — 민속촌, 한복, 가야금, 추석" },
          { en: "Reading authentic texts from diverse sources — journals, announcements, bulletin boards, and advertisements — in both functional and literary Korean",
            ko: "다양한 실제 자료 읽기 — 일기, 안내문, 게시판, 광고 — 실용 한국어와 문어체 한국어 함께" },
          { en: "Six-skill units (Learn–Practice–Talk–Read–Listen–Write) with optional National Korean Test (NKT) preparation",
            ko: "여섯 가지 활동 단원(배우기·연습·말하기·읽기·듣기·쓰기)과 NKT(National Korean Test) 준비(선택)" }
        ]
      },
      {
        name:    { en: "Mugunghwa (Hibiscus)", ko: "무궁화반" },
        sub:     { en: "Adults · Beginner", ko: "성인 · 초급" },
        koClassName: { en: "무궁화반", ko: "Mugunghwa" },
        summary: { en: "Korean for adult beginners — practical conversation and reading, and connecting with family and community.",
                   ko: "성인 초급을 위한 한국어 — 실용 회화와 읽기, 그리고 가족·공동체와 이어지는 한국어." },
        topics: [
          { en: "Reading and writing Hangeul from scratch — the alphabet, how syllable blocks work, and sounding out everyday words",
            ko: "한글을 처음부터 읽고 쓰기 — 자모, 음절 만들기, 낱말 소리 내어 읽기" },
          { en: "Survival conversation — greetings, introducing yourself and your family, numbers, money, ordering food, and shopping",
            ko: "생존 회화 — 인사, 나와 가족 소개, 숫자, 돈, 음식 주문, 장보기" },
          { en: "Simple everyday sentence patterns in the polite “해요” style, with the vocabulary adults use most",
            ko: "간단한 일상 문형을 ‘해요체’로 — 성인이 가장 자주 쓰는 어휘 중심" },
          { en: "Practical Korean for the community — at church, the market, and family gatherings",
            ko: "공동체를 위한 실용 한국어 — 교회, 시장, 가족 모임에서" },
          { en: "Everyday culture and etiquette — titles and honorific basics, bowing, holidays, and table manners that help adults connect with Korean family",
            ko: "생활 문화와 예절 — 호칭과 높임말 기초, 인사 예절, 명절, 식사 예절로 한국 가족과 이어지기" }
        ]
      },
      {
        name:    { en: "Tree", ko: "나무반" },
        sub:     { en: "Adults · Intermediate", ko: "성인 · 중급" },
        koClassName: { en: "나무반", ko: "Tree" },
        summary: { en: "Intermediate Korean for adults — extended conversation, reading, and writing with greater cultural depth.",
                   ko: "성인 중급을 위한 한국어 — 폭넓은 회화와 읽기·쓰기, 그리고 깊이 있는 문화 이해." },
        topics: [
          { en: "Extended conversation on everyday and current topics — work, travel, health, plans, and sharing opinions",
            ko: "일상과 시사 주제로 넓혀 가는 회화 — 일, 여행, 건강, 계획, 의견 나누기" },
          { en: "From sentences to paragraphs — connectors, past and future tenses, and expressing yourself more naturally",
            ko: "문장에서 문단으로 — 연결어미, 과거·미래 시제, 자연스러운 표현" },
          { en: "Speech levels and honorifics (존댓말) — knowing what to use with family, elders, and in the community",
            ko: "말의 높낮이와 존댓말 — 가족·어른·공동체에 맞는 말 고르기" },
          { en: "Reading and writing real Korean — short articles, messages, and personal writing",
            ko: "실제 한국어 읽고 쓰기 — 짧은 글, 메시지, 개인적인 글쓰기" },
          { en: "Deeper culture and modern Korea — history, traditions, and today’s K-culture",
            ko: "깊이 있는 문화와 오늘의 한국 — 역사, 전통, 현대 K-문화" }
        ]
      }
    ]
  },

  /* =================================================================
     CURRICULUM & CALENDAR — what a semester at NAKS looks like.
     Keeps the section header and its intro, then lists the semester's
     key dates. (The 16 weekly lessons will be added here later.)
     ================================================================= */
  curriculum: {
    eyebrow: { en: "Curriculum & Calendar", ko: "교과과정 · 학사일정" },
    title:   { en: "What a semester at NAKS looks like.",
               ko: "NAKS의 한 학기는 이렇게 흘러갑니다." },
    lede:    { en: "Sixteen Saturdays, a clear weekly rhythm, a real lesson from the classroom, and an honest report at the end. This is how Korean grows into a child.",
               ko: "토요일 열여섯 번, 분명한 주간 흐름, 교실에서 실제로 가르치는 한 차시, 그리고 학기 말의 솔직한 평가. 한 아이 안에 한국어가 자라나는 과정입니다." },

    /* ---------- The semester calendar ----------
       The five key dates for the semester, listed under the header
       above. (Later, the 16 weekly lessons will be added here too.)
       Dates are written "YYYY-MM-DD"; the site sorts them and flags
       the soonest one as "NEXT UP". */
    events: [
      { date: "2026-08-15", title: { en: "Fall term begins", ko: "가을학기 개학" },
        location: { en: "Main campus", ko: "본교" }, type: { en: "Term", ko: "학기" } },
      { date: "2026-09-26", event: "chuseok", title: { en: "Chuseok celebration", ko: "추석 한마당" },
        location: { en: "Main campus", ko: "본교" }, type: { en: "Event", ko: "행사" } },
      { date: "2026-10-03", event: "hangul", title: { en: "Hangul Day", ko: "한글날" },
        location: { en: "Main campus", ko: "본교" }, type: { en: "Event", ko: "행사" } },
      { date: "2026-10-10", title: { en: "Fall Break", ko: "가을 방학" },
        type: { en: "Break", ko: "방학" } },
      { date: "2026-10-31", event: "fieldday", title: { en: "Fall Field Day", ko: "가을 운동회" },
        location: { en: "Brahan Spring Park", ko: "브레이핸 스프링 공원" }, type: { en: "Event", ko: "행사" } },
      { date: "2026-11-28", title: { en: "Thanksgiving break", ko: "추수감사절 방학" },
        type: { en: "Break", ko: "방학" } },
      { date: "2026-12-12", event: "closing", title: { en: "Closing Ceremony / Student Showcase", ko: "종강식 / 학예 발표회" },
        location: { en: "Main campus", ko: "본교" }, type: { en: "Event", ko: "행사" } }
    ],

    /* UI labels for the Curriculum & Calendar section. */
    ui: {
      semester:       { en: "This Semester", ko: "이번 학기" },
      semesterNote:   { en: "Only the current semester is shown here, and it updates each term.", ko: "이곳에는 현재 학기만 표시되며, 매 학기 업데이트됩니다." },
      traditions:     { en: "Traditions & Celebrations", ko: "우리 학교의 전통과 행사" },
      traditionsIntro:{ en: "Beyond the weekly classroom, a NAKS year is full of culture, competition, and community. Tap a section to open it — then any card to look inside.", ko: "매주의 수업을 넘어, 북알라바마 한국학교의 일 년은 문화와 도전, 그리고 공동체로 가득합니다. 아래 항목을 눌러 펼치고, 카드를 눌러 자세히 만나 보세요." },
      learnMore:      { en: "Learn more", ko: "자세히 보기" },
      hide:           { en: "Hide", ko: "접기" },
      whatHappens:    { en: "What happens", ko: "이런 활동을 해요" },
      whyMatters:     { en: "Why it matters", ko: "왜 특별할까요" },
      explore:        { en: "Explore", ko: "둘러보기" },
      close:          { en: "Close", ko: "접기" }
    },

    /* ---------- Traditions & Celebrations (evergreen; no dates) ----------
       Each card: an optional "event" key links a semester date (above) to
       this card's "Learn more" popout; "icon" is one of the named icons in
       app.js; "accent" is red / blue / green; "image" is optional (leave it
       out for a clean text-only card). Text is bilingual { en, ko }. */
    traditions: {
      bands: [
        {
          icon: "blossom", accent: "red",
          title:   { en: "Cultural Celebrations", ko: "전통 문화 행사" },
          teaser:  { en: "Traditions your child lives — not just reads about.", ko: "글로만 배우지 않고 직접 살아 보는 우리 전통." },
          preview: { en: "Chuseok · Seollal · Hangul Day", ko: "추석 · 설날 · 한글날" },
          cards: [
            { event: "chuseok", icon: "chuseok", accent: "red", image: "assets/traditions/chuseok.jpg",
              title:  { en: "Chuseok", ko: "추석" },
              sub:    { en: "추석 · Korean Harvest Thanksgiving", ko: "Chuseok · 한가위" },
              teaser: { en: "A day of traditional games, crafts, and shared treats.", ko: "전통놀이와 만들기, 나눔의 간식이 있는 하루." },
              what:   { en: "Students play traditional folk games, make dalgona (달고나) sugar candy, join the ganggangsullae (강강술래) circle dance, and craft hanji (한지) paper lanterns — with snacks provided by our Parents’ Association.", ko: "전통 민속놀이를 즐기고, 달고나를 만들고, 강강술래를 함께 돌고, 한지 램프를 만듭니다 — 간식은 학부모회에서 준비합니다." },
              why:    { en: "Chuseok is Korea’s autumn harvest thanksgiving — a time for gratitude and family. Children experience the customs firsthand, not just read about them.", ko: "추석은 가을 추수를 감사하는 한국의 명절입니다. 아이들이 글로만 배우지 않고 직접 전통을 경험합니다." } },
            { event: "seollal", icon: "seollal", accent: "blue", image: "assets/traditions/seollal.jpg",
              title:  { en: "Seollal", ko: "설날" },
              sub:    { en: "설날 · Lunar New Year", ko: "Seollal · 음력설" },
              teaser: { en: "New Year customs, blessings from elders, and festive treats.", ko: "설날 풍습과 어른들의 덕담, 그리고 명절 음식." },
              what:   { en: "Students learn New Year customs and receive the traditional deok-dam (덕담) blessing — “Receive many blessings, honor your parents, study well, and become someone who is light and salt to the world” — alongside folk games and holiday foods.", ko: "설날 풍습을 배우고 전통 덕담을 나눕니다 — “새해 복 많이 받고, 효도하고, 공부도 더 잘하고, 세상의 빛과 소금 같은 사람이 되거라” — 민속놀이와 명절 음식도 함께합니다." },
              why:    { en: "Seollal is one of Korea’s most important holidays — a lesson in respect, gratitude, and the joy of a fresh start.", ko: "설날은 한국에서 가장 중요한 명절 중 하나로, 존중과 감사, 새 출발의 기쁨을 배웁니다." } },
            { event: "hangul", icon: "hangul", accent: "green", image: "assets/traditions/hangul-day.jpg",
              title:  { en: "Hangul Day", ko: "한글날" },
              sub:    { en: "한글날 · The Korean alphabet", ko: "Hangul Day · 세종대왕의 한글" },
              teaser: { en: "A celebration of Hangul — Korea’s remarkable alphabet.", ko: "한국 고유의 문자, 한글을 기념하는 시간." },
              what:   { en: "Through stories, games, and hands-on activities, students celebrate Hangul — the alphabet King Sejong created in 1443 — and the joy of reading and writing in Korean.", ko: "이야기와 놀이, 다양한 활동을 통해 세종대왕이 1443년에 창제한 한글과 한국어를 읽고 쓰는 즐거움을 기념합니다." },
              why:    { en: "Hangul is the heart of everything we teach — celebrating it reminds students what a gift it is to read and write in Korean.", ko: "한글은 우리가 가르치는 모든 것의 중심입니다. 이를 기념하며 아이들은 한국어를 읽고 쓸 수 있다는 것이 얼마나 큰 선물인지 되새깁니다." } }
          ]
        },
        {
          icon: "medal", accent: "blue",
          title:   { en: "Student Showcases & Competitions", ko: "학생 발표 · 대회" },
          teaser:  { en: "Where students take the stage — and shine.", ko: "학생들이 무대에 서서 빛나는 순간들." },
          preview: { en: "Speech · Writing & Art · Song contests · NKT · and more", ko: "말하기 · 백일장/사생 · 동요대회 · NKT 외" },
          cards: [
            { icon: "speech", accent: "blue",
              title:  { en: "“My Dream” Speech Contest", ko: "나의 꿈 말하기 대회" },
              sub:    { en: "나의 꿈 말하기 대회", ko: "Speech Contest" },
              teaser: { en: "Students share their dreams — out loud, in Korean.", ko: "아이들이 자신의 꿈을 한국어로 발표합니다." },
              what:   { en: "Each student prepares and delivers a short speech about their dreams and aspirations — building confidence and real speaking fluency.", ko: "각자 자신의 꿈과 포부를 담은 짧은 발표를 준비하고 말하며 자신감과 말하기 실력을 키웁니다." },
              why:    { en: "Speaking in front of others turns study into ownership — and gives every child a moment on the stage.", ko: "여럿 앞에서 말하는 경험은 배움을 자기 것으로 만들고, 모두에게 무대를 선물합니다." } },
            { icon: "palette", accent: "red", image: "assets/traditions/writing-and-art-contest.jpg",
              title:  { en: "Writing & Art Contest", ko: "백일장 · 사생대회" },
              sub:    { en: "백일장/사생대회 · at the Huntsville Museum of Art", ko: "Writing & Art · 헌츠빌 미술관" },
              teaser: { en: "A spring day of writing and drawing at the art museum.", ko: "미술관에서 열리는 봄날의 글쓰기와 그림 그리기." },
              what:   { en: "Held each spring at the Huntsville Museum of Art and Big Spring Park, students write compositions in Korean and draw from life in a beautiful setting.", ko: "해마다 봄, 헌츠빌 미술관과 빅 스프링 공원에서 아이들이 한국어로 글을 쓰고 야외에서 그림을 그립니다." },
              why:    { en: "It takes the language out of the classroom and into the community — creative, memorable, and proudly public.", ko: "한국어를 교실 밖 지역사회로 가져와 창의적이고 기억에 남는 경험을 만듭니다." } },
            { icon: "scroll", accent: "green",
              title:  { en: "Regional Writing Contest", ko: "글짓기 대회" },
              sub:    { en: "글짓기 대회 · Southeast Association", ko: "Regional · 동남부협의회" },
              teaser: { en: "Our students regularly place among the region’s best.", ko: "우리 학생들이 해마다 지역 상위권에 이름을 올립니다." },
              what:   { en: "Students enter the Southeast Korean School Association’s writing competition — and NAKS students regularly earn awards.", ko: "동남부 한국학교협의회 글짓기 대회에 참가하며, 북알라바마 한국학교 학생들이 꾸준히 수상합니다." },
              why:    { en: "A regional stage shows students their Korean can stand alongside the best — and it puts our small school on the map.", ko: "지역 무대에서 아이들은 자신의 한국어에 자부심을 갖고, 우리 학교의 이름도 널리 알립니다." } },
            { icon: "note", accent: "red",
              title:  { en: "Children’s Song Contest", ko: "동요대회" },
              sub:    { en: "동요대회 · Southeast Regional", ko: "Song Contest · 동남부" },
              teaser: { en: "Singing Korean children’s songs on a regional stage.", ko: "지역 무대에서 부르는 한국 동요." },
              what:   { en: "Students learn and perform beloved Korean children’s songs at the Southeast regional song festival.", ko: "아이들이 사랑받는 한국 동요를 배우고 동남부 동요대회에서 발표합니다." },
              why:    { en: "Music makes language stick — and gives even the youngest learners a joyful way to shine.", ko: "노래는 언어를 오래 남게 하고, 어린 학생들에게도 빛날 기회를 줍니다." } },
            { event: "demo", icon: "board", accent: "blue", image: "assets/traditions/professional-development.jpg",
              title:  { en: "Professional Development Teacher Workday", ko: "교사 전문성 개발일" },
              sub:    { en: "교사 전문성 개발일 · Teacher workday", ko: "Professional Development · 교사 연수" },
              teaser: { en: "Teachers train, plan, and sharpen their craft.", ko: "선생님들이 연수하고 수업을 준비하며 전문성을 키우는 시간." },
              what:   { en: "Teachers gather for a dedicated workday — training, planning lessons, and sharing best practices — with those returning from national conferences bringing fresh ideas back to the classroom.", ko: "선생님들이 연수와 수업 준비, 교수법 공유를 위한 전문성 개발의 날을 가집니다. 전국 학술대회에 다녀온 교사들은 새로운 아이디어를 교실로 가져옵니다." },
              why:    { en: "Great classrooms start with great teachers — these workdays keep our teaching fresh, consistent, and always improving.", ko: "훌륭한 수업은 훌륭한 선생님에서 시작됩니다. 이 워크데이를 통해 수업의 질을 꾸준히 높입니다." } },
            { icon: "certificate", accent: "green",
              title:  { en: "Korean Proficiency Test (NKT)", ko: "한국어 능숙도 평가 (NKT)" },
              sub:    { en: "NKT · National Association assessment", ko: "재미한국학교협의회" },
              teaser: { en: "A recognized measure of each student’s Korean.", ko: "학생의 한국어 실력을 공인된 방식으로 확인." },
              what:   { en: "Students take the National Association of Korean Schools’ proficiency assessment (NKT), a recognized benchmark of Korean ability.", ko: "학생들이 재미한국학교협의회의 한국어 능숙도 평가(NKT)에 응시합니다. 공인된 실력 기준입니다." },
              why:    { en: "It gives families a clear, external measure of progress — and supports pathways like the Seal of Biliteracy.", ko: "가정에 분명한 외부 성취 지표를 제공하고, 이중언어 인증(Seal of Biliteracy) 같은 진로로 이어집니다." } },
            { event: "closing", icon: "gradcap", accent: "red", image: "assets/traditions/student-showcase.jpg",
              title:  { en: "Closing Ceremony / Student Showcase", ko: "종강식 / 학예 발표회" },
              sub:    { en: "종강식 / 학예 발표회 · End-of-term showcase & celebration", ko: "Closing Ceremony / Student Showcase · 한 학기의 마무리" },
              teaser: { en: "Students take the stage to show what they’ve learned.", ko: "한 학기 동안 배운 것을 무대에서 선보이는 시간." },
              what:   { en: "At the end of each semester, students take the stage to show what they’ve learned — class performances, songs, and a lively talent show. Graduating students are honored with scholarships generously funded by our partner churches (G3 Madison, Joy Church, and Huntsville Baptist), and teachers are thanked with year-end appreciation gifts.", ko: "학기를 마치며 학생들이 배운 것을 무대에서 선보입니다 — 반별 공연과 노래, 그리고 신나는 장기자랑이 펼쳐집니다. 졸업생에게는 파트너 교회(G3 매디슨교회·기쁨의교회·헌츠빌 침례교회)의 따뜻한 후원으로 장학금을 수여하고, 선생님들께는 연말 감사 선물을 전합니다." },
              why:    { en: "It’s the moment families see how far their children have come — every student shines, and the whole community celebrates the term together.", ko: "자녀가 얼마나 성장했는지 온 가족이 함께 확인하는 순간이자, 모든 학생이 빛나고 온 공동체가 한 학기를 함께 축하하는 시간입니다." } }
          ]
        },
        {
          icon: "people", accent: "green",
          title:   { en: "Community & Outdoors", ko: "공동체 · 야외 활동" },
          teaser:  { en: "Where our families become friends.", ko: "우리 가정이 서로 친구가 되는 자리." },
          preview: { en: "Field Day · Career Seminars · Writing Club · Choir", ko: "운동회 · 진로세미나 · 글짓기반 · 합창반" },
          cards: [
            { event: "fieldday", icon: "flag", accent: "green", image: "assets/traditions/fall-field-day.jpg",
              title:  { en: "Fall Field Day", ko: "가을 운동회" },
              sub:    { en: "운동회 · Brahan Spring Park", ko: "Field Day · 브레이핸 스프링 공원" },
              teaser: { en: "Games, teams, and a big community picnic outdoors.", ko: "야외에서 즐기는 게임과 팀 경기, 그리고 가족 소풍." },
              what:   { en: "The whole school gathers at Brahan Spring Park for a field day of games and races, capped by a community picnic.", ko: "온 학교가 브레이핸 스프링 공원에 모여 게임과 달리기를 즐기고, 가족 소풍으로 마무리합니다." },
              why:    { en: "Families become friends. It’s the day the school feels most like a big, warm community.", ko: "가정과 가정이 친구가 되는, 학교가 가장 따뜻한 공동체로 느껴지는 날입니다." } },
            { icon: "signpost", accent: "blue", image: "assets/traditions/career-seminar.jpg",
              title:  { en: "Career Seminars", ko: "진로 세미나" },
              sub:    { en: "진로세미나 · Professionals advising students", ko: "Career Seminars · 전문가 초청" },
              teaser: { en: "Real professionals help students picture their future.", ko: "현직 전문가들이 학생의 미래를 함께 그립니다." },
              what:   { en: "The school invites professionals from fields like law, engineering, medicine, and aerospace to share real-world advice on choosing a path — and on the role networking plays in American careers.", ko: "법률, 엔지니어링, 의학, 항공우주 등 각 분야 전문가를 초청해 진로 선택에 대한 현실적인 조언과 미국 사회에서 인적 네트워크의 중요성을 나눕니다." },
              why:    { en: "For Korean-American families navigating the future here, hearing from those who’ve walked the path is invaluable.", ko: "이곳에서 미래를 준비하는 한인 가정에게, 먼저 그 길을 걸은 이들의 이야기는 큰 힘이 됩니다." } },
            { icon: "notebook", accent: "red",
              title:  { en: "Writing Club", ko: "글짓기반" },
              sub:    { en: "글짓기반 · Enrichment", ko: "Writing Club · 심화 활동" },
              teaser: { en: "Extra practice for growing Korean writers.", ko: "한국어 글쓰기를 키우는 심화 활동." },
              what:   { en: "An ongoing activity where students strengthen their Korean composition — and prepare for writing contests.", ko: "학생들이 한국어 글쓰기를 다지고 글짓기 대회를 준비하는 상설 활동입니다." },
              why:    { en: "Writing is where real fluency shows — and where students find their own voice in Korean.", ko: "글쓰기는 진짜 실력이 드러나는 곳이자, 아이들이 한국어로 자기 목소리를 찾는 자리입니다." } },
            { icon: "notes", accent: "blue", image: "assets/traditions/choir.jpg",
              title:  { en: "Choir", ko: "합창반" },
              sub:    { en: "합창반 · Singing together", ko: "Choir · 함께 부르는 노래" },
              teaser: { en: "Students sing together and perform at school events.", ko: "함께 노래하고 학교 행사에서 공연합니다." },
              what:   { en: "Students learn Korean songs together and perform them at school celebrations throughout the year.", ko: "학생들이 한국 노래를 함께 배우고 일 년 내내 학교 행사에서 공연합니다." },
              why:    { en: "Singing builds belonging — and Korean melodies carry the language home.", ko: "함께 부르는 노래는 소속감을 키우고, 한국의 선율은 언어를 마음에 남깁니다." } }
          ]
        }
      ]
    }
  },

  /* =================================================================
     ENROLL — how families register
     ================================================================= */
  enroll: {
    eyebrow: { en: "Enroll", ko: "등록 안내" },
    title:   { en: "Joining is simple.", ko: "등록은 간단합니다." },
    lede:    { en: "New families are welcome any term — open the registration form to get started.",
               ko: "새로운 가정은 어느 학기든 환영합니다 — 등록서를 작성하시면 시작할 수 있습니다." },
    cta: {
      title:      { en: "Ready to enroll?", ko: "등록할 준비가 되셨나요?" },
      text:       { en: "Open the registration form below. It takes just a few minutes.",
                    ko: "아래 등록서를 작성해 주세요. 몇 분이면 충분합니다." },
      buttonLabel:{ en: "Open the registration form", ko: "등록서 작성하기" },
      /* Registration form for the upcoming semester. */
      buttonHref: "https://forms.gle/5q1wKwVnhNDnAexM6"
    }
  },

  /* =================================================================
     TEACHERS & STAFF
     Add a photo by putting a file in assets/ and naming it in "photo".
     Leave photo "" to show the person's initials instead.
     ================================================================= */
  teachers: {
    eyebrow: { en: "Teachers & staff", ko: "선생님과 운영진" },
    title:   { en: "The people who make Saturdays special.",
               ko: "토요일을 특별하게 만드는 사람들." },
    lede:    { en: "Dedicated, experienced, and certified teachers lead every classroom, supported by assistant teachers — with small classes and personalized attention for every student. Faculty and leadership are refreshed each academic year.",
               ko: "헌신적이고 경험 많은 자격 있는 선생님들이 모든 교실을 이끌고, 보조 교사들이 함께합니다 — 소규모 학급과 학생 한 명 한 명을 향한 세심한 관심으로. 교사진과 운영진은 매 학년 새롭게 구성됩니다." },
    staff: [
      { name: { en: "Jung Ho Jin", ko: "정호진" },
        role: { en: "Chairman of the Board", ko: "이사장" },
        detail: { en: "Welcome to the North Alabama Korean School website. Back in 1992, when the conditions for Korean-language education were difficult — there were no textbooks and no support whatsoever from the Korean government — a handful of people came together with a shared resolve to open a Korean school in the Huntsville area. They formed a board of directors, drew up the bylaws, completed the school's registration as a nonprofit with the U.S. government, and in the late fall opened the North Alabama Korean School.\n\nIn the years since, through the teaching passion of our faculty, the devotion of our parents' association, and the stewardship of our board, the school has grown to stand on firm ground.\n\nBuoyed by the support of the Consulate's Education Office, local businesses and companies, churches, Korean American organizations, and many generous donors, the North Alabama Korean School has become a true educational institution — one that teaches the Korean language and shares Korean culture with second-generation Korean Americans in the Huntsville area and with everyone who takes an interest in Korean culture.\n\nIt is my hope that this website will be a warm space that connects our school, our families, and our community. I ask for your continued interest and encouragement.",
                  ko: "한국학교 홈페이지 방문을 환영합니다. 한국학교 교육환경이 열악했던 1992년,  교재도 없었고 한국 정부에서의 지원도 전무 할 때, 몇몇 분들이 헌츠빌 지역에 한국 학교를 열기로 뜻을 모아 이사진을 구성하고, 정관을 만들고, 미 정부에 비영리단체 등록을 마치고 늦은 가을에 북알라바마 한국학교를 개교를 하게 되었습니다.\n\n그동안 교사진들의 교육의 열정과 학부모회의 헌신과 이사진들을 통하여 학교가 굳게 서게 되었습니다.\n\n영사관 교육원, 지역 사업체 및 기업과 교회, 한인 단체, 많은 후원자들의 후원에 힙입어 오늘날의 북알라바마 한국학교가 헌츠빌 지역 한인 2세들과 한국 문화에 관심이 있는 분들께 한글 교육과 한국 문화 소개하는 명실상부한 교육기관이  되었습니다.\n\n이 홈페이지가 학교와 가정, 그리고 지역사회를 잇는 따뜻한 소통의 공간이 되기를 바랍니다. 여러분의 지속적인 관심과 격려를 부탁드립니다." },
        photo: "assets/chairman-jung-ho-jin.jpg" },
      { name: { en: "Dongmi Moon Pysh", ko: "문동미" },
        role: { en: "Principal",  ko: "교장" },
        detail: { en: "Serving as principal here is one of the great joys of my life. What moves me most is watching our students grow into themselves — proud of their heritage, at home in the Korean language, and surrounded by people who believe in them. Whether Korean has filled your home for generations or you are just taking the first step, you will always find a warm welcome here.",
                  ko: "북알라바마 한국학교 교장을 맡고 있는 문동미입니다. 아이들이 자신의 뿌리를 자랑스러워하고, 한국어를 즐겁게 익히며, 한국어를 사랑하게되는 학생들의 모습을 지켜보는 것이 제게는 가장 큰 보람입니다. 저희 학교는 한국어 배우고자하는 학생도 한국문화를 배우고자하는 학생도 모두 환영합니다. 한국학교에서 만나요~ 감사합니다." },
        photo: "assets/principal-dongmi-moon-pysh.jpg" },
      { name: { en: "Lee Owen", ko: "이지숙" },
        role: { en: "Vice Principal", ko: "교감" },
        detail: { en: "I walk alongside our children as they learn the Korean language and culture and grow up healthy and strong. Thank you.",
                  ko: "안녕하세요. 북알라바마 한국학교 교감 이지숙입니다. 아이들이 한국어와 한국 문화를 배우며 건강하게 성장할 수 있도록 함께하고 있습니다. 감사합니다." },
        photo: "assets/vice-principal-lee-owen.jpg" }
    ]
  },

  /* =================================================================
     JOIN US — attracting new teachers & volunteers
     ================================================================= */
  join: {
    eyebrow: { en: "Join us", ko: "함께하기" },
    title:   { en: "Teach. Volunteer. Belong.",
               ko: "가르치고, 봉사하고, 함께하세요." },
    lede:    { en: "Sharing Korean language and culture is some of the most rewarding work there is — and you don't have to be a teacher to make a difference here.",
               ko: "한국어와 한국 문화를 나누는 일은 가장 보람된 일 중 하나입니다 — 그리고 교사가 아니어도 이곳에서 변화를 만들 수 있습니다." },
    benefits: [
      { icon: "heart",
        title: { en: "A mission that matters", ko: "의미 있는 사명" },
        text:  { en: "Help children hold on to their language and heritage — and bring a little more of Korean culture to North Alabama.",
                 ko: "아이들이 자신의 언어와 뿌리를 지키도록 돕고, 북알라바마에 한국 문화를 한 뼘 더 전하세요." } },
      { icon: "community",
        title: { en: "A genuine community", ko: "진정한 공동체" },
        text:  { en: "Our teachers and volunteers become friends. Saturdays here feel less like work and more like family.",
                 ko: "우리 선생님과 자원봉사자들은 친구가 됩니다. 이곳의 토요일은 일이라기보다 가족에 가깝습니다." } },
      { icon: "award",
        title: { en: "Recognized service hours", ko: "공식 인정 봉사시간" },
        text:  { en: "Student volunteers earn carefully tracked service hours and certificates — see the program below.",
                 ko: "학생 자원봉사자는 체계적으로 기록되는 봉사시간과 수료증을 받습니다 — 아래 프로그램을 확인하세요." } }
    ],
    /* The student volunteer + certificate program.
       Hour cutoffs match the school's NAKS Junior Leadership Awards. */
    volunteer: {
      title: { en: "The student volunteer program", ko: "학생 자원봉사 프로그램" },
      intro: { en: "High-school students who help in our classrooms gain real teaching experience — and we take their service seriously. Every hour is logged. At year's end, the school issues an official certificate, and our staff write college recommendation letters for students who give generously of their time.",
               ko: "교실에서 돕는 고등학생들은 실제 교육 경험을 쌓습니다 — 그리고 우리는 그들의 봉사를 소중히 여깁니다. 모든 시간이 기록되며, 연말에 학교는 공식 수료증을 발급하고, 시간을 아낌없이 내어 준 학생들을 위해 대학 추천서를 써 드립니다." },
      tiers: [
        { key: "gold",   name: { en: "Gold",   ko: "금장" },
          hours: { en: "95+ hours",  ko: "95시간 이상" },
          note:  { en: "Highest recognition for outstanding service.", ko: "탁월한 봉사에 대한 최고 표창." } },
        { key: "silver", name: { en: "Silver", ko: "은장" },
          hours: { en: "85–94 hours", ko: "85–94시간" },
          note:  { en: "Awarded for sustained, reliable service.", ko: "꾸준하고 성실한 봉사에 수여." } },
        { key: "bronze", name: { en: "Bronze", ko: "동장" },
          hours: { en: "75–84 hours", ko: "75–84시간" },
          note:  { en: "Earned with a full year of committed help.", ko: "한 해 동안 헌신한 학생에게 수여." } }
      ],
      note: { en: "Service certificates follow the school's NAKS Junior Leadership Awards standard. A minimum of 75 hours earns a certificate.",
              ko: "봉사 수료증은 학교의 NAKS 청소년 리더십 어워드 기준을 따릅니다. 최소 75시간 이상이면 수료증이 발급됩니다." }
    },
    cta: {
      title:      { en: "Want to get involved?", ko: "함께하고 싶으신가요?" },
      /* NAKS Volunteer & Teaching Interest form (Google Forms, school
         account). Saves to a Google Sheet and emails nalkoreanschool@gmail.com
         on each submission. */
      text:       { en: "Tell us a little about yourself — teaching experience is welcome but never required.",
                    ko: "간단히 자신을 소개해 주세요 — 교육 경험은 환영하지만 꼭 필요하지는 않습니다." },
      buttonLabel:{ en: "Volunteer or teach with us", ko: "자원봉사·교사 지원하기" },
      buttonHref: "https://docs.google.com/forms/d/e/1FAIpQLSd7DcSJiHvCc8dLdq-Cbd8ic1ytkMCuHYecamZ1FiieJo7ubw/viewform"
    }
  },

  /* =================================================================
     CULTURE — Korean pop culture meeting American culture
     ================================================================= */
  culture: {
    eyebrow: { en: "Korean culture today", ko: "오늘의 한국 문화" },
    title:   { en: "Korean culture is American culture now.",
               ko: "이제 한국 문화는 미국 문화입니다." },
    lede:    { en: "From K-pop to Korean food to film, Korean culture has gone global — and our students are living proof of how naturally the two worlds blend.",
               ko: "K-pop에서 한국 음식, 영화까지 — 한국 문화는 세계로 뻗어 나갔고, 우리 학생들은 두 세계가 얼마나 자연스럽게 어우러지는지 보여 주는 산 증인입니다." },
    /* Trend items. Each `slug` links the card to a full Spotlight
       article at /spotlight/{slug}/. Leave slug empty to keep the
       card non-clickable. Students who write follow-up trend stories
       can be linked here too — see SPOTLIGHT-GUIDE.md. */
    trends: [
      { mark:  { en: "Music", ko: "음악" },
        slug:  "k-pop-on-every-playlist",
        title: { en: "K-pop on every playlist", ko: "모두의 플레이리스트에 오른 K-pop" },
        text:  { en: "Korean acts now headline American stadiums and top the Billboard charts. For our students, singing along in Korean is a head start.",
                 ko: "한국 가수들이 미국 스타디움을 채우고 빌보드 차트 정상에 오릅니다. 우리 학생들에게 한국어로 따라 부르는 일은 든든한 출발점입니다." } },
      { mark:  { en: "Screen", ko: "영상" },
        slug:  "parasite-to-streaming-hits",
        title: { en: "From Parasite to streaming hits", ko: "기생충에서 스트리밍 히트작까지" },
        text:  { en: "Korean film and series have become global event television — and a fun, real reason to keep learning the language.",
                 ko: "한국 영화와 드라마는 전 세계가 함께 보는 콘텐츠가 되었고, 언어를 계속 배울 즐겁고 분명한 이유가 됩니다." } },
      { mark:  { en: "Food", ko: "음식" },
        slug:  "korean-food-mainstream",
        title: { en: "Korean food, mainstream", ko: "주류가 된 한국 음식" },
        text:  { en: "Kimchi, tteokbokki, and Korean BBQ are everyday favorites across America — heritage you can taste.",
                 ko: "김치, 떡볶이, 한국식 바비큐는 미국 어디서나 사랑받는 일상이 되었습니다 — 맛으로 느끼는 우리 문화입니다." } }
    ],
    callout: {
      en: "<strong>Calling our students:</strong> spot a Korean trend going big in America? Write it up — the best entries become Spotlight stories on this site.",
      ko: "<strong>학생 여러분께:</strong> 미국에서 떠오르는 한국 트렌드를 발견했나요? 글로 써 보세요 — 가장 좋은 글은 이 사이트의 스포트라이트 이야기가 됩니다."
    }
  },

  /* =================================================================
     PARTNERS & SUPPORT — sponsors, donations, newsletter
     ================================================================= */
  partners: {
    eyebrow: { en: "Partners & support", ko: "후원과 동행" },
    title:   { en: "Made possible by our community.",
               ko: "우리 공동체가 있어 가능합니다." },
    lede:    { en: "NAKS is supported by the Korean Ministry of Foreign Affairs and by major sponsors, local organizations, churches, and businesses who believe in keeping Korean heritage alive in North Alabama.",
               ko: "NAKS는 대한민국 외교부를 비롯하여, 북알라바마에서 한국의 뿌리를 이어 가고자 하는 주요 후원사와 지역 단체, 교회, 기업의 지원으로 운영됩니다." },

    /* Sponsor / partner logos. Each card links to that organization's
       website and opens it in a new tab. Put logo files in assets/ and
       name them in "logo"; leave logo "" to show the name as text. */
    sponsors: [
      { name: "LG Electronics Alabama, Inc.",
        url: "https://www.lg.com/us", logo: "" },
      { name: "Consulate General of the Republic of Korea in Atlanta",
        url: "https://overseas.mofa.go.kr/us-atlanta-en/index.do", logo: "" },
      { name: "North Alabama Korean Association",
        url: "https://www.nakahsv.com", logo: "" },
      { name: "First Baptist Church Huntsville",
        url: "https://fbchsv.org", logo: "" },
      { name: "Local Churches & Businesses",
        url: "", logo: "" }
    ],

    /* The donation card. NAKS accepts donations exclusively by Zelle
       (no processing fees — 100% of every gift reaches the school).
       The card includes a copy-to-clipboard button for the recipient
       email, a scannable QR code, and step-by-step instructions. */
    support: [
      { kind: "zelle",
        title: { en: "Make a donation by Zelle", ko: "Zelle로 기부하기" },
        text:  { en: "Every gift helps cover classroom materials, cultural events, and keeping tuition affordable for every family. We accept donations through Zelle so 100% of your gift reaches the school — no processing fees.",
                 ko: "모든 후원금은 교실 자료와 문화 행사를 지원하고, 모든 가정이 부담 없이 다닐 수 있도록 돕습니다. 수수료 없이 후원금 전액이 학교에 전달되도록 Zelle로 기부를 받고 있습니다." },
        zelle: {
          recipientName:  { en: "North Alabama Korean School", ko: "북알라바마 한국학교" },
          email:          "nalkoreanschool@gmail.com",
          recipientLabel: { en: "Recipient name",  ko: "받는 분 이름" },
          emailLabel:     { en: "Recipient email", ko: "받는 분 이메일" },
          copyLabel:      { en: "Copy email",      ko: "이메일 복사" },
          copiedLabel:    { en: "Copied!",         ko: "복사되었습니다" },
          qrLabel:        { en: "Scan to copy the email",
                            ko: "스캔하면 이메일이 복사됩니다" },
          stepsHeading:   { en: "How to send your gift", ko: "후원 보내는 방법" },
          steps: [
            { en: "Open your bank's mobile app and find Zelle (often inside \"Send Money,\" \"Pay & Transfer,\" or \"Payments\").",
              ko: "은행 모바일 앱을 열고 Zelle 메뉴를 찾으세요. (\"송금\", \"이체\", \"결제\" 메뉴 안에 있을 수 있습니다.)" },
            { en: "Tap Send and paste the email above as the recipient.",
              ko: "\"보내기\"를 누른 뒤 위의 이메일을 받는 분으로 붙여넣으세요." },
            { en: "Confirm the recipient name shows as North Alabama Korean School — if it doesn't, stop and contact us first.",
              ko: "받는 분 이름이 \"북알라바마 한국학교\"로 표시되는지 꼭 확인해 주세요. 다르게 보이면 보내지 마시고 학교에 먼저 연락해 주세요." },
            { en: "Enter the amount, add an optional note (e.g. \"Scholarships,\" \"In memory of\"), and send.",
              ko: "금액을 입력하고, 원하시면 메모를 남기신 후 (예: \"장학금\", \"추모\") 보내기를 눌러 주세요." }
          ]
        } }
    ],

    /* Shown only if org.isNonProfit is true above. */
    taxNote: {
      en: "The North Alabama Korean School is a non-profit organization. Donations may be tax-deductible — confirm the school's 501(c)(3) status before relying on this.",
      ko: "북알라바마 한국학교는 비영리 단체입니다. 기부금은 세금 공제 대상이 될 수 있습니다 — 학교의 501(c)(3) 자격을 확인한 후 안내해 주세요."
    },

    /* The email newsletter signup — posts straight to a Google Form
       (NAKS Newsletter Sign-up, in the school's Google account) via a
       hidden iframe, then shows a thank-you with no page reload. */
    newsletter: {
      title:       { en: "Stay close to the school.", ko: "학교 소식을 받아보세요." },
      text:        { en: "A short monthly email — new stories, upcoming events, and ways to help. No spam, ever.",
                     ko: "한 달에 한 번, 짧은 이메일 — 새 이야기와 다가오는 행사, 함께할 수 있는 방법을 전해 드립니다." },
      placeholder: { en: "Your email address", ko: "이메일 주소" },
      buttonLabel: { en: "Subscribe", ko: "구독하기" },
      success:     { en: "Thanks — you're subscribed!", ko: "감사합니다 — 구독이 완료되었습니다!" },
      /* Google Form endpoint + the email field's entry id. To repoint this
         at a different form, open the form, use "Get pre-filled link," and
         copy the /formResponse URL and the entry.NNN id here. */
      formAction:  "https://docs.google.com/forms/d/e/1FAIpQLSfh09JetrDaZDrhitOq_OH84ss_FsW2Bq05KD9G6CHQ41TJrw/formResponse",
      emailField:  "entry.449320503",
      signupUrl:   "",
      note:        { en: "We'll only ever use your email to send school news.",
                     ko: "이메일은 학교 소식 전달에만 사용됩니다." }
    }
  },

  /* =================================================================
     FOOTER
     ================================================================= */
  footer: {
    tagline:   { en: "Korean language & culture for North Alabama families.",
                 ko: "북알라바마 가정을 위한 한국어·한국문화 학교." },
    fineprint: { en: "All rights reserved.", ko: "All rights reserved." }
  }

};
