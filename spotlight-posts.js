/* =================================================================
   ★ SPOTLIGHT ARTICLES — the school's blog ★

   Every Spotlight story lives here, in this one list. Each story is
   one { ... } block. The newest story (by date) is shown largest on
   the homepage automatically.

   AFTER you edit this file you MUST rebuild the shareable article
   pages. In Cowork, just say:  "rebuild the Spotlight pages."
   (Or run:  node tools/build-spotlight.mjs)

   That step is what makes a shared link look beautiful on Facebook,
   Instagram, and texts — so don't skip it.

   HOW TO WRITE ONE  (full walkthrough in SPOTLIGHT-GUIDE.md):
   • slug      — the web address piece. lowercase-with-hyphens, no
                 spaces. NEVER change it once a story is shared.
   • date      — "YYYY-MM-DD". Controls the order stories appear in.
   • category  — a short label, e.g. Volunteer Spotlight.
   • title     — the headline. Keep it under ~12 words.
   • dek       — one or two sentences. This is the text that shows
                 in the social-media preview, so make it inviting.
   • image     — the photo. A great photo is what gets clicks.
                 Put the file in assets/spotlight/ and name it here.
                 Best size: 1200 x 630 pixels. Leave "" for none.
   • imageAlt  — a short description of the photo (for accessibility).
   • author    — who wrote it.
   • body      — the article itself, as a list of paragraphs. Each
                 paragraph is one { en, ko } pair. Aim for ~500 words.

   RULES: keep text in "quotes", keep the commas, keep the brackets.
   ================================================================= */

window.SPOTLIGHT_POSTS = [

  /* ---------------------------------------------------------------
     KOREAN LAB — FREE VOCABULARY TOOL (August 18, 2026)
     --------------------------------------------------------------- */
  {
    slug:     "korean-lab",
    date:     "2026-08-18",
    category: { en: "Announcement", ko: "새 소식" },

    title: {
      en: "Korean Lab — A Free Vocabulary Tool Our School Built, Taught in Pictures and Voices",
      ko: "한국어 실험실 — 그림과 목소리로 배우는 우리 학교의 무료 단어 학습 도구"
    },

    dek: {
      en: "Korean Lab — 295 picture cards and 6,000 native-speaker recordings — is now open on our school's website. Save it to a phone and your child can study anywhere, on their own.",
      ko: "그림 카드 295장과 원어민 음성 6,000개로 한국어 단어를 익히는 「한국어 실험실」이 우리 학교 홈페이지에서 문을 열었습니다. 휴대폰에 저장해 두면 아이가 언제 어디서나 스스로 공부할 수 있습니다."
    },

    image:    "assets/spotlight/korean-lab.jpg",
    imageAlt: {
      en: "A mother, a child, and a grandmother sitting together with Korean picture cards on a low table.",
      ko: "낮은 상 위에 놓인 한국어 그림 카드를 두고 어머니와 아이, 할머니가 함께 앉아 있는 모습."
    },

    author: { en: "North Alabama Korean School", ko: "북알라바마 한국학교" },

    body: [
      { en: "North Alabama Korean School has opened Korean Lab, a free online vocabulary tool built for our students and families, on the school website. It holds 295 picture cards and 6,000 native-speaker recordings, and it opens directly on a phone, tablet, or computer with no app to download and no cost.",
        ko: "북알라바마한국학교가 학생과 학부모님을 위해 만든 무료 온라인 단어 학습 도구 「한국어 실험실」을 학교 홈페이지에 공개했습니다. 그림 카드 295장과 원어민 음성 6,000개로 이루어져 있으며, 앱을 내려받거나 비용을 낼 필요 없이 휴대폰과 태블릿, 컴퓨터에서 바로 열립니다." },

      { en: "Korean Lab does not begin with grammar explanations or translation drills. The screen shows one picture and one word, and a native speaker says it aloud. Four native speakers share the recording of every word, so that a different voice answers each time the picture is tapped, and children learn the sound itself rather than one person's version of it. Words that name an action move in a short video, showing the meaning directly.",
        ko: "한국어 실험실은 문법 설명이나 번역 연습으로 시작하지 않습니다. 화면에는 그림 한 장과 단어 하나만 나오고, 원어민이 그 단어를 발음해 줍니다. 그림을 누를 때마다 서로 다른 목소리가 나오도록 네 명의 원어민이 모든 단어를 나누어 녹음했기 때문에, 아이들은 한 사람의 발음이 아니라 소리 자체를 익히게 됩니다. 동작을 나타내는 단어는 짧은 영상으로 움직여 그 뜻을 그대로 보여 줍니다." },

      { en: "The order of the cards has a reason behind it. The 1,500 words Koreans use most in real conversation were ranked by frequency, and the ones that can be drawn were placed from the front. The 295 cards open today account for about 37 percent of the words used in everyday conversation. A child meets the words spoken at home tonight, not the ones waiting near the back of a textbook.",
        ko: "카드의 순서에도 이유가 있습니다. 한국 사람들이 실제 대화에서 가장 많이 쓰는 단어 1,500개를 빈도순으로 정리한 뒤, 그림으로 나타낼 수 있는 단어를 앞에서부터 배치했습니다. 지금 공개된 295장은 일상 대화에 쓰이는 낱말의 약 37퍼센트를 차지합니다. 교과서 뒤쪽에서야 만나는 단어가 아니라 오늘 집에서 들을 수 있는 단어부터 배우게 되는 것입니다." },

      { en: "Its most distinctive feature is that no two children see the same cards. For every word the program records whether the answer was right, how long it took, and which word was confused with it, and keeps that as a confidence score. Weak words return, well-known words step back, and if too much of what a child has learned begins to fade, new words pause while the foundation is rebuilt. It is designed so that a backlog of overdue review never piles up and wears a child down.",
        ko: "가장 큰 특징은 아이마다 다른 카드가 나온다는 점입니다. 프로그램은 단어마다 정답 여부와 대답하는 데 걸린 시간, 혼동한 단어까지 기록해 이해도를 점수로 관리합니다. 아직 약한 단어는 다시 나오고 확실히 아는 단어는 물러나며, 이미 배운 단어의 이해도가 떨어지면 새 단어를 잠시 멈추고 기초를 먼저 다집니다. 밀린 복습이 쌓여 아이를 지치게 하는 일이 없도록 마련한 장치입니다." },

      { en: "There are rewards as well, so that children enjoy staying with it. For every hundred words learned they receive one of fifteen medals, beginning at 씨앗 and passing through 새싹 and 꽃 to 무궁화 — the same order as our own class names. As the words add up, a dusty cassette player on the screen is cleaned and a K-pop-style song opens, one at a time, and a student who earns a first medal may place their name on the Hall of Names.",
        ko: "아이들이 즐겁게 이어 갈 수 있도록 보상도 마련했습니다. 익힌 단어가 100개씩 늘어날 때마다 씨앗에서 시작해 새싹과 꽃을 지나 무궁화에 이르는 열다섯 개의 메달을 받습니다. 우리 학교 학급 이름과 같은 순서입니다. 단어가 쌓이면 화면 속 낡은 카세트가 깨끗해지면서 케이팝풍 노래가 한 곡씩 열리고, 첫 메달을 받은 학생은 「명예의 전당」에 이름을 올릴 수 있습니다." },

      { en: "Korean Lab was not adapted from a program built elsewhere; it was made for this school from the beginning. Principal Demi Pysh listened to all 6,000 recordings herself. She also corrected the forms that are not suitable for children to actually use, so that 선생 became 선생님 and 안녕 became 안녕하세요 — so that a child can say what they have learned to an adult exactly as they learned it.",
        ko: "한국어 실험실은 다른 곳의 학습 프로그램을 가져다 쓴 것이 아니라 우리 학교를 위해 처음부터 만든 것입니다. 문동미 학교장께서 6,000개의 음성을 모두 들어 확인해 주셨습니다. 아이들이 실제로 쓰기에 알맞지 않은 형태도 함께 바로잡아 주셔서 「선생」은 「선생님」으로, 「안녕」은 「안녕하세요」로 고쳐 담았습니다. 아이들이 배운 말을 그대로 어른들께 쓸 수 있도록 하기 위해서입니다." },

      { en: "Getting started is simple. Open northalabamakoreanschool.org/learn-korean on a phone and the first card appears immediately. In Safari on iPhone or Chrome on Android, tap the Share button and choose \"Add to Home Screen,\" and an icon appears just like an app so it opens in one tap from then on. To save learning history and medals, please sign in with a Google account; without signing in, the record stays only on that one device.",
        ko: "사용법은 간단합니다. 휴대폰에서 northalabamakoreanschool.org/learn-korean 으로 들어가면 바로 첫 카드가 나옵니다. 아이폰은 사파리에서, 안드로이드는 크롬에서 공유 버튼을 누른 뒤 「홈 화면에 추가」를 선택하면 앱처럼 아이콘이 생겨 다음부터는 한 번에 열 수 있습니다. 학습 기록과 메달을 저장하려면 구글 계정으로 로그인해 주시기 바랍니다. 로그인하지 않으면 기록이 그 기기에만 남습니다." },

      { en: "Korean Lab does not replace the classroom. What we hope for is that a child meets the words learned with a teacher again at home, and then builds sentences from those words back in class. We will keep adding cards and refining the tool with our teachers' guidance.",
        ko: "한국어 실험실은 교실 수업을 대신하지 않습니다. 선생님과 함께 배운 단어를 집에서 다시 만나고, 교실에서는 그 단어로 문장을 만들어 보는 것이 저희가 바라는 모습입니다. 앞으로도 카드를 꾸준히 늘려 가고 선생님들의 의견을 반영해 다듬어 나갈 예정입니다." },

      { en: "We hope our children meet Korean naturally, through pictures and sound, rather than memorizing it as a burden. Sit down with your child tonight and turn the first card together. Korean Lab is open now at northalabamakoreanschool.org/learn-korean.",
        ko: "아이들이 한국어를 어렵게 외우는 것이 아니라 그림과 소리로 자연스럽게 만나기를 바랍니다. 오늘 저녁 아이와 함께 첫 카드를 넘겨 보시기 바랍니다. 한국어 실험실은 northalabamakoreanschool.org/learn-korean 에서 지금 바로 열립니다." }
    ]
  },


  /* ---------------------------------------------------------------
     TEACHERS' PREP DAY — FALL 2026 (August 8, 2026)
     --------------------------------------------------------------- */
  {
    slug:     "teachers-prep-day-fall-2026",
    date:     "2026-08-08",
    category: { en: "School News", ko: "학교 소식" },

    title: {
      en: "Our Teachers Prepare for the Fall Semester",
      ko: "가을학기를 준비하는 우리 선생님들"
    },

    dek: {
      en: "On August 8, Principal Demi Pysh and our teachers gathered to organize the new semester's classes and prepare the fall curriculum.",
      ko: "8월 8일, 문동미 학교장과 우리 학교 선생님들이 한자리에 모여 가을학기 학급 편성과 교육과정을 준비했습니다."
    },

    image:    "assets/spotlight/teachers-prep-fall-2026.jpg",
    imageAlt: {
      en: "Teachers of the North Alabama Korean School sharing lunch together after the fall-semester teachers' preparation meeting.",
      ko: "가을학기 교사 준비모임을 마치고 함께 점심 식사를 나누는 북알라바마 한국학교 선생님들."
    },

    author: { en: "North Alabama Korean School", ko: "북알라바마 한국학교" },

    body: [
      { en: "On August 8, Principal Demi Pysh (문동미) and our school's teachers gathered for a teachers' preparation meeting for the fall semester. The meeting covered the organization of classes for the new term, the preparation of the curriculum, and the sharing of what our teachers learned at this summer's conferences.",
        ko: "8월 8일, 문동미 학교장과 우리 학교 선생님들이 한자리에 모여 가을학기를 준비하는 교사 준비모임을 가졌습니다. 이번 모임에서는 새 학기 학급 편성과 교육과정 준비, 그리고 여름 연수에서 얻은 배움의 나눔이 이루어졌습니다." },

      { en: "First, the classes for the new semester were organized. Looking together at each student's Korean level and growth, the teachers arranged the classes with great care so that every student can learn in the class that fits them best.",
        ko: "먼저 새 학기 학급 편성이 이루어졌습니다. 선생님들은 학생 한 명 한 명의 한국어 수준과 성장 과정을 함께 살피며, 모든 학생이 자신에게 가장 알맞은 반에서 배울 수 있도록 세심하게 학급을 구성했습니다." },

      { en: "A discussion of the fall curriculum followed. The teachers reviewed the textbooks and lesson content for each class, preparing a semester of lessons in which students can learn with joy and grow steadily.",
        ko: "이어서 가을학기 교육과정에 대한 논의가 진행되었습니다. 선생님들은 학급별 교재와 수업 내용을 함께 검토하며, 학생들이 한 학기 동안 즐겁게 배우고 꾸준히 성장할 수 있는 수업을 준비했습니다." },

      { en: "The teachers who attended the 35th Southeast Regional Teachers' Workshop in Atlanta and the 44th National Association for Korean Schools conference in New Jersey this summer shared the new teaching methods and educational materials they gained there with their fellow teachers. It was a meaningful time in which the learning from those conferences did not end as one person's experience, but carried into every classroom of our school.",
        ko: "이번 여름 애틀랜타에서 열린 제35회 동남부 교사연수회와 뉴저지에서 열린 제44회 재미한국학교협의회 학술대회에 다녀오신 선생님들은 그곳에서 배운 새로운 교수법과 교육 자료를 동료 선생님들과 함께 나누었습니다. 연수에서 얻은 배움이 한 사람의 경험으로 끝나지 않고 우리 학교의 모든 교실로 이어지는 뜻깊은 시간이었습니다." },

      { en: "When the meeting ended, the teachers shared lunch together, a warm time of encouraging one another ahead of the new semester.",
        ko: "회의를 마친 뒤에는 함께 점심 식사를 나누며 새 학기를 앞둔 서로를 격려하는 따뜻한 시간도 가졌습니다." },

      { en: "More than a session for settling the new term's plans, this preparation meeting was a precious time in which our teachers, holding each student in their hearts, designed the semester together.",
        ko: "이번 준비모임은 새 학기 일정을 정리하는 자리를 넘어, 선생님들이 학생 한 명 한 명을 마음에 두고 한 학기를 함께 설계하는 소중한 시간이었습니다." },

      { en: "The start of the fall semester is now just ahead. Having completed their preparations, our teachers are waiting for their students and parents with eager hearts.",
        ko: "가을학기 개학이 이제 눈앞으로 다가왔습니다. 정성껏 준비를 마치신 선생님들께서 설레는 마음으로 학생들과 학부모님들을 기다리고 계십니다." },

      { en: "This fall as well, the North Alabama Korean School will welcome our students into carefully prepared classrooms, and build a precious season of learning together and growing together.",
        ko: "올가을에도 북알라바마한국학교는 정성껏 준비된 교실에서 학생들을 맞이하며, 함께 배우고 함께 성장하는 소중한 시간을 만들어 가겠습니다." }
    ]
  },


  /* ---------------------------------------------------------------
     35th SOUTHEAST REGIONAL TEACHERS' WORKSHOP — RECAP
     (Sugarloaf Korean Church, Atlanta · August 1, 2026)
     --------------------------------------------------------------- */
  {
    slug:     "naks-atlanta-regional-2026",
    date:     "2026-08-03",
    category: { en: "School News", ko: "학교 소식" },

    title: {
      en: "Five Years Educating Our Students — NAKS Teachers Receive Awards in Atlanta",
      ko: "우리 학생들을 가르친 5년 — 애틀랜타에서 표창을 받은 우리 선생님들"
    },

    dek: {
      en: "Cho Seung-yeon and Jang Yu-hee were honored for five years of teaching at the Southeast regional teachers' workshop.",
      ko: "조승연 선생님과 장유희 선생님이 동남부 교사 연수회에서 5년 근속 표창을 받았습니다."
    },

    image:    "assets/spotlight/naks-atlanta-2026.jpg",
    imageAlt: {
      en: "Cho Seung-yeon of the North Alabama Korean School receives a five-year long-service commendation on stage at the 35th Southeast Regional Korean School Teachers' Workshop in Atlanta.",
      ko: "애틀랜타에서 열린 제35회 동남부 교사 연수회에서 5년 근속교사 표창을 받는 북알라바마 한국학교 조승연 선생님."
    },

    author: { en: "North Alabama Korean School", ko: "북알라바마 한국학교" },

    body: [
      { en: "On August 1, our school's Vice-Principal Lee Owen (이지숙), together with teachers Cho Seung-yeon (조승연) and Lee Sun-ok (이선옥), attended the 35th Southeast Regional Teachers' Workshop, hosted by the NAKS Southeastern Chapter. Before the lectures began, the opening ceremony brought a welcome awards presentation. Cho Seung-yeon was among fourteen teachers from across the Southeast region honored with a five-year long-service commendation. Deputy Consul General Kim Dae-hwan of the Korean Consulate General in Atlanta presented the certificates in person, expressing his gratitude for the teachers' dedication and hard work. Jang Yu-hee (장유희), who worked alongside them for our students for many years, recently moved to Maryland and could not attend, but there was a warm moment as her fellow teachers shared in her joy and accepted her commendation on her behalf.",
        ko: "8월 1일, 우리 학교 이지숙 교감선생님과 조승연 선생님, 이선옥 선생님이 재미한국학교 동남부지역협의회가 주관한 제35회 동남부 교사연수회에 참석했습니다. 강의가 시작되기 전 열린 개회식에서는 반가운 시상식이 있었습니다. 조승연 선생님을 비롯한 동남부지역 14명의 교사가 5년 근속교사 표창을 수상하는 영예를 안았습니다. 김대환 주애틀랜타총영사관 부총영사가 직접 표창장을 수여하며 선생님들의 헌신과 노고에 감사의 마음을 전했습니다. 함께 오랜 시간 학생들을 위해 애써 오신 장유희 선생님은 최근 메릴랜드로 이주하여 이날 행사에는 참석하지 못했지만, 동료 교사들이 그 기쁨을 함께 나누며 표창을 대신 받아오는 따뜻한 순간도 있었습니다." },

      { en: "The keynote lecture was given by Professor Ahn So-hyun of Kennesaw State University, on the theme \"Global Citizenship Education for the Next Generation: Solidarity and Reflection in Asian American History.\" Professor Ahn emphasized that \"knowing yourself and understanding your own roots is where respect for others begins,\" explaining that the history of Korean Americans should not be viewed in fragments but understood within the larger historical context of Asian America. Her message — that only when we rightly understand our own identity can we grow into true global citizens who respect other cultures and other people — resonated deeply with the teachers who attended.",
        ko: "이번 연수회의 주제강의는 케네소주립대학교 안소현 교수가 맡아 「차세대 학생들을 위한 세계시민교육: 아시안 아메리칸 역사 속 연대와 성찰」이라는 주제로 진행했습니다. 안 교수는 \"나를 알고 나의 뿌리를 이해하는 것이 타인을 존중하는 일의 시작\"이라고 강조하며, 미주 한인의 역사를 단편적으로 바라보는 것이 아니라 '아시안 아메리칸'이라는 더 큰 역사적 맥락 속에서 이해해야 한다고 설명했습니다. 자신의 정체성을 바르게 이해할 때 비로소 다른 문화와 사람을 존중하는 진정한 세계시민으로 성장할 수 있다는 메시지는 참석한 교사들에게 깊은 울림을 전했습니다." },

      { en: "In the breakout sessions that followed the keynote, teachers learned a range of teaching methods suited to their own classes and shared ideas they could apply directly in their lessons.",
        ko: "주제강의에 이어 진행된 분반강의에서는 교사들이 각자의 담당 학급에 맞는 다양한 교수법을 배우며 실제 수업에 적용할 수 있는 아이디어를 나누었습니다." },

      { en: "In the first block, Park Jin-hee of Bethel Korean School presented \"Picture Books, the Secret Weapon of the Hangeul Class: Building Varied Hangeul Lessons with Picture Books,\" introducing creative approaches to Korean-language teaching built around picture books. Kim Hee-jin of Atlanta Korean School followed with \"Seasonal Song Play Using Korean Traditional and Folk Children's Songs,\" sharing enjoyable ways to run a class around our traditional music.",
        ko: "1교시에는 벧엘한국학교 박진희 선생님의 「그림책, 한글 수업의 비밀무기: 그림책으로 만드는 다양한 한글 수업 활동」 강의가 진행되어 그림책을 활용한 창의적인 한글 교육 방법을 소개했습니다. 이어 애틀랜타한국학교 김희진 교사는 「국악동요와 전래동요를 활용한 계절에 맞는 노래놀이」를 주제로 우리 전통 노래를 활용한 즐거운 수업 운영 방법을 나누었습니다." },

      { en: "After lunch, the second block took an in-depth look at teaching methods tailored to students' levels. For the introductory, foundation, and bridge classes, Vice-Principal Jeong Hye-ju of Sugarloaf Korean School presented \"First Steps in Hangeul.\" For the beginner class, Lee Kyung-sook of St. Andrew Kim Korean School introduced a range of methods through \"Lively Hangeul Grammar That Brings Speech to Life,\" helping students take up grammar naturally while building their ability to speak.",
        ko: "점심 식사 후 이어진 2교시에서는 학생들의 수준에 맞춘 레벨별 수업지도법이 심도 있게 다루어졌습니다. 입문·기초·브리지반에서는 슈가로프한국학교 정혜주 교감선생님의 「한글 첫걸음 지도법」 강의가 진행되었으며, 초급반에서는 성김대건한국학교 이경숙 교사가 「말이 살아나는 신나는 한글 문법」을 통해 학생들이 자연스럽게 문법을 익히고 말하기 능력을 키울 수 있는 다양한 교수법을 소개했습니다." },

      { en: "For the intermediate and advanced classes, Choi Moon-jung of Atlanta Korean School presented \"Korean Beyond Speaking, Korean for Thinking and Expressing: Developing Language Ability and Cultural Identity in Korean American Youth.\" She set out a direction for developing Korean not merely as a tool for communication but as a language for expressing one's own thoughts and identity, and it became a meaningful time of sharing perspectives with the teachers present on the questions of language and cultural identity that so many Korean American young people are working through today.",
        ko: "중고급반에서는 애틀랜타한국학교 최문정 교사가 「말하는 한국어를 넘어 생각하고 표현하는 한국어: 코리언 아메리칸 청소년의 언어능력과 문화 정체성 개발」을 주제로 강의를 진행했습니다. 한국어를 단순한 의사소통의 도구가 아니라 자신의 생각과 정체성을 표현하는 언어로 발전시키기 위한 교육 방향을 제시하며, 오늘날 많은 코리언 아메리칸 청소년들이 고민하는 언어와 문화 정체성에 대해 참석한 교사들과 함께 깊이 있는 의견을 나누는 의미 있는 시간이 되었습니다." },

      { en: "More than a day of learning new teaching methods, the workshop was a precious time for teachers walking the same path to share their experiences, encourage one another, and gather strength to return to the classroom.",
        ko: "하루 동안 이어진 연수는 새로운 교수법을 배우는 시간을 넘어, 같은 길을 걷는 교사들이 서로의 경험을 나누고 격려하며 다시 교육 현장으로 나아갈 힘을 얻는 소중한 시간이었습니다." },

      { en: "Our long-awaited fall term begins soon. Our teachers have come home from the Atlanta workshop carrying new learning and new challenges, and they are waiting for their students and parents with eager hearts. We hope the teaching approaches and the warm fellowship gathered at this workshop will settle naturally into our classrooms this term, becoming the ground in which our students learn with greater joy and grow with greater confidence.",
        ko: "이제 곧 기다리던 가을학기가 시작됩니다. 애틀랜타 교사연수를 통해 새로운 배움과 도전을 가득 안고 돌아오신 선생님들께서 설레는 마음으로 학생들과 학부모님들을 기다리고 계십니다. 이번 연수에서 얻은 다양한 교육 방법과 따뜻한 나눔이 올 한 학기 교실 곳곳에 자연스럽게 스며들어, 우리 학생들이 더욱 즐겁게 배우고 자신 있게 성장하는 밑거름이 되기를 기대합니다." },

      { en: "This fall as well, at the North Alabama Korean School, we will build a precious season of learning together and growing together.",
        ko: "올가을에도 북알라바마한국학교에서 함께 배우고, 함께 성장하는 소중한 시간을 만들어 가겠습니다." }
    ],

    gallery: [
      {
        src:   "assets/spotlight/naks-atlanta-2026-group.jpg",
        after: 1,
        alt: {
          en: "The five-year long-service teacher commendation recipients on stage with Deputy Consul General Kim Dae-hwan at the 35th Southeast Regional Teachers' Workshop.",
          ko: "제35회 동남부 교사 연수회에서 김대환 부총영사와 함께 무대에 선 5년 근속교사 표창 수상자들."
        },
        caption: {
          en: "The five-year long-service recipients with Deputy Consul General Kim Dae-hwan.",
          ko: "김대환 부총영사와 함께한 5년 근속교사 표창 수상자들."
        }
      }
    ]
  },


  /* ---------------------------------------------------------------
     44th NAKS NATIONAL CONFERENCE — RECAP (Teaneck, NJ · July 2026)
     Photos: hero = Lee Ji-na's 10-year long-service award.
     In-article photos use the `gallery` field (see build-spotlight.mjs).
     --------------------------------------------------------------- */
  {
    slug:     "naks-conference-2026",
    date:     "2026-08-01",
    category: { en: "School News", ko: "학교 소식" },

    title: {
      en: "Four of our teachers went to New Jersey. Here's what they brought home.",
      ko: "우리 선생님 네 분이 뉴저지에 다녀왔습니다"
    },

    dek: {
      en: "Our principal, our vice-principal, and two of our teachers spent three days with 580 Korean school educators from across the country.",
      ko: "우리 학교장과 교감, 그리고 두 분의 선생님이 전국에서 모인 580여 명의 한국학교 교육자들과 사흘을 보냈습니다."
    },

    image:    "assets/spotlight/naks-conference-2026.jpg",
    imageAlt: {
      en: "Lee Ji-na of the North Alabama Korean School receives a ten-year long-service teaching award on stage at the 44th National Association for Korean Schools conference.",
      ko: "제44회 재미한국학교협의회 학술대회 무대에서 10년 장기근속 교사 표창을 받는 북알라바마 한국학교 이지나 선생님."
    },

    author: { en: "North Alabama Korean School", ko: "북알라바마 한국학교" },

    body: [
      { en: "Four of our teachers traveled to New Jersey this summer for the 44th National Association for Korean Schools (NAKS) conference and general assembly. Together with some 580 Korean school educators gathered from across the country, they spent three days learning, sharing, and thinking together about the future of Korean school education.",
        ko: "우리 학교의 네 분 선생님이 이번 여름 뉴저지에서 열린 제44회 재미한국학교협의회(NAKS) 학술대회 및 정기총회에 다녀왔습니다. 전국 각지에서 모인 580여 명의 한국학교 교육자들과 함께 사흘 동안 배우고, 나누고, 앞으로의 한국학교 교육을 함께 고민하는 뜻깊은 시간이었습니다." },

      { en: "The conference brought very happy news for our school as well. Lee Ji-na (이지나) received a ten-year long-service teaching commendation, in recognition of her years of dedication to Korean school education. Principal Demi Pysh (문동미) received both a certificate of appreciation from the Consul General of the Republic of Korea in New York and a commendation from the Dokdo Foundation. The Dokdo Foundation has long encouraged and honored the Korean schools and educators who work steadily to teach Korean history and territory accurately, and this award was a meaningful recognition, once again, of the value of the history and culture education our school has carried forward.",
        ko: "이번 학술대회에서는 우리 학교에도 매우 기쁜 소식이 있었습니다. 이지나 선생님께서 10년 장기근속 교사 표창을 받으며 그동안 한국학교 교육을 위해 헌신해 오신 노고를 인정받았습니다. 또한 문동미 학교장은 주뉴욕대한민국총영사 감사장과 독도재단 표창장을 수상했습니다. 독도재단은 한국의 역사와 영토를 올바르게 가르치기 위해 꾸준히 노력해 온 한국학교와 교육자들을 격려하고 표창해 온 기관으로, 이번 수상은 우리 학교가 이어온 역사·문화 교육의 가치를 다시 한번 인정받은 뜻깊은 성과였습니다." },

      { en: "The keynote was given by Professor Im Cheol-il of Seoul National University. Professor Im, who has studied AI and the future of education for many years, emphasized that \"AI can take its place within a Korean school the way good teaching material does. It is not something that replaces the teacher, but a companion that helps the teacher concentrate more fully on the child in front of her.\" He also said, \"Students must learn to understand AI, to use it, and further, to think together with it. And in that process they must also develop the creativity, the ability to collaborate, and the sound judgment that no machine can supply.\"",
        ko: "이번 학술대회의 기조강연은 서울대학교 임철일 교수가 맡았습니다. 오랫동안 AI와 미래교육을 연구해 온 임 교수는 \"AI는 좋은 교재가 그러하듯 한국학교 안에 자리할 수 있다. 교사를 대신하는 존재가 아니라, 교사가 눈앞의 아이에게 더 집중할 수 있도록 돕는 동반자\"라고 강조했습니다. 또한 \"학생들은 AI를 이해하고, 활용하며, 나아가 AI와 함께 사고하는 법을 배워야 한다. 그리고 그 과정에서 기계가 대신할 수 없는 창의성, 협업 능력, 그리고 올바른 판단력을 함께 길러야 한다\"고 전했습니다." },

      { en: "At the opening ceremony, NAKS President Kwon Ye-soon said, \"Identity education is our purpose, and AI is a new tool for achieving that purpose.\" That single remark was the message that best captured the direction of this year's conference. No one believes that AI could teach Korean better than a teacher who remembers not only the children's names but their family stories and how they have grown. Rather, it was a gathering that confirmed a shared hope — that for the mission of a Korean school that has not changed in forty-four years, the teaching of Korean language, history, culture, and identity, we can now draw on richer materials, more varied information, and the help of new technology to give our children a better education.",
        ko: "개회식에서 권예순 재미한국학교협의회 총회장은 \"정체성 교육은 우리의 목적이며, AI는 그 목적을 이루기 위한 새로운 도구입니다.\"라고 말했습니다. 이 한마디는 이번 학술대회의 방향을 가장 잘 보여주는 메시지였습니다. 누구도 AI가 아이들의 이름은 물론, 가족 이야기와 성장 과정을 함께 기억하는 선생님보다 한국어를 더 잘 가르칠 수 있다고 생각하지 않습니다. 다만 44년 동안 변하지 않은 한국학교의 사명인 한국어와 역사, 문화, 그리고 정체성 교육을 위해 이제는 더 풍부한 자료와 다양한 정보, 새로운 기술의 도움을 받아 아이들에게 더 좋은 교육을 제공할 수 있다는 희망을 함께 확인하는 자리였습니다." },

      { en: "Most valuable of all is the learning that came home to our school. Our teachers returned with a great many ideas they can apply directly in their lessons: effective teaching methods that help vocabulary stay in the memory, a range of reading materials developed with the language environment of children growing up outside Korea in mind, and digital tools and ways of using AI that will make Saturday classes richer and more engaging.",
        ko: "무엇보다 값진 것은 우리 학교로 돌아온 배움입니다. 우리 선생님들은 어휘를 오래 기억하게 하는 효과적인 교수법, 한국 밖에서 자라는 아이들의 언어 환경을 고려해 개발된 다양한 읽기 자료, 그리고 토요일 수업을 더욱 풍성하고 흥미롭게 만들어 줄 디지털 도구와 AI 활용 방법 등 실제 수업에 바로 적용할 수 있는 많은 아이디어를 가지고 돌아왔습니다." },

      { en: "This learning will not end as one person's experience. At the fall-term teachers' meeting, we plan to share the new teaching methods and educational materials gained at this conference with all of our teachers, and to adapt them to fit our own school's classrooms.",
        ko: "이러한 배움은 개인의 경험으로 끝나지 않습니다. 가을학기 교사회의를 통해 이번 학술대회에서 얻은 새로운 교수법과 교육 자료를 모든 선생님들과 함께 나누고, 우리 학교의 교육 현장에 맞게 적용해 나갈 예정입니다." },

      { en: "What changes are the tools of education; what does not change is our teachers' heart for the children. Our school will go on learning and making active use of new educational environments, while continuing to be the warm Korean school that protects the Korean language, Korean culture, and our children's identity.",
        ko: "변하는 것은 교육의 도구이지만, 변하지 않는 것은 아이들을 향한 선생님들의 마음입니다. 앞으로도 우리 학교는 새로운 교육환경을 적극적으로 배우고 활용하면서도, 한국어와 한국 문화, 그리고 우리 아이들의 정체성을 지켜주는 따뜻한 한국학교의 모습을 이어가겠습니다." }
    ],

    /* In-article photos. "after" = the body paragraph each photo follows. */
    gallery: [
      {
        src:   "assets/spotlight/naks-conference-2026-teachers.jpg",
        after: 2,
        alt: {
          en: "Teachers from the North Alabama Korean School listening to a session at the 44th National Association for Korean Schools conference.",
          ko: "제44회 재미한국학교협의회 학술대회에서 강의를 듣고 있는 북알라바마 한국학교 선생님들."
        },
        caption: {
          en: "Our teachers in a session in Teaneck, New Jersey.",
          ko: "뉴저지주 티넥, 강의를 듣고 있는 우리 선생님들."
        }
      },
      {
        src:   "assets/spotlight/naks-conference-2026-consul.jpg",
        after: 4,
        alt: {
          en: "Recipients on stage holding certificates of appreciation from the Consul General of the Republic of Korea in New York.",
          ko: "주뉴욕 대한민국 총영사 감사장을 받고 무대에 선 수상자들."
        },
        caption: {
          en: "Principal Demi Pysh among the recipients of a certificate of appreciation from the Consul General of the Republic of Korea in New York.",
          ko: "주뉴욕 대한민국 총영사 감사장을 받은 수상자들 가운데 선 문동미 학교장."
        }
      },
      {
        src:   "assets/spotlight/naks-conference-2026-dokdo.jpg",
        after: 4,
        alt: {
          en: "Recipients on stage holding Dokdo Foundation commendations at the 44th National Association for Korean Schools conference.",
          ko: "제44회 재미한국학교협의회 학술대회에서 독도재단 표창장을 받은 수상자들."
        },
        caption: {
          en: "The Dokdo Foundation commendation recipients, Principal Demi Pysh among them.",
          ko: "독도재단 표창장 수상자들, 그 가운데 문동미 학교장."
        }
      }
    ]
  },


  /* ---------------------------------------------------------------
     FALL CHILDREN'S CHOIR — RECRUITMENT (2026 Fall)
     Paste this whole { ... } block at the TOP of the list in
     spotlight-posts.js (right after "window.SPOTLIGHT_POSTS = [").
     Keep the comma after the closing } so the next post still works.
     NOTE: the email link and the end-of-article poster need the small
     build-spotlight.mjs enhancement (mdLinks + endImage). Rebuild after.
     --------------------------------------------------------------- */
  {
    slug:     "childrens-choir-fall-2026",
    date:     "2026-07-16",
    category: { en: "Announcement", ko: "새 소식" },

    title: {
      en: "Join our children's choir this fall",
      ko: "이번 가을, 어린이 합창단에 초대합니다"
    },

    dek: {
      en: "Our children's choir is recruiting for the fall semester. Children in elementary grades 1–5 learn Korean through song, sing alongside new friends, and prepare for a special performance — every Saturday morning, right before class.",
      ko: "이번 가을학기, 우리 어린이 합창단이 새 단원을 모집합니다. 초등학교 1~5학년 어린이들이 노래로 한국어를 배우고, 새 친구들과 함께 노래하며, 특별한 발표회를 준비합니다 — 매주 토요일 아침, 수업이 시작되기 바로 전에."
    },

    image:    "assets/spotlight/childrens-choir-fall-2026.jpg",
    imageAlt: {
      en: "Children of the North Alabama Korean School choir singing together, with playful hand-drawn snow and Christmas doodles over the photo.",
      ko: "북알라바마 한국학교 어린이 합창단이 함께 노래하는 사진 위에 손으로 그린 눈과 크리스마스 낙서가 더해진 모습."
    },

    author: { en: "North Alabama Korean School", ko: "북알라바마 한국학교" },

    body: [
      { en: "On a Saturday morning, just before Korean school begins, a bright sound drifts out of one of the classrooms — a room full of children, singing. This fall, our children's choir is opening its doors to new singers.",
        ko: "토요일 아침, 한글학교 수업이 시작되기 바로 전, 한 교실에서 맑은 노랫소리가 흘러나옵니다 — 아이들이 가득 모여 함께 부르는 노래입니다. 올 가을, 우리 어린이 합창단이 새로운 단원을 모집합니다." },
      { en: "The choir is a joyful way to learn Korean language and culture through music. This semester the children will learn two songs — the cheerful carol \"Jingle Bells\" (징글벨), and \"Sanyuhwa\" (산유화, \"Mountain Wildflowers\"), a beloved Korean art song set to a poem by the poet Kim Sowol. One carries the fun of winter; the other, the quiet beauty of Korean verse.",
        ko: "합창단은 노래를 통해 한국어와 한국 문화를 즐겁게 배우는 시간입니다. 이번 학기에는 두 곡을 배웁니다 — 신나는 캐럴 「징글벨」과, 시인 김소월의 시에 곡을 붙인 사랑받는 한국 가곡 「산유화」입니다. 한 곡은 겨울의 즐거움을, 다른 한 곡은 한국 시의 잔잔한 아름다움을 담고 있습니다." },
      { en: "Along the way, the children develop beautiful voices and harmony, discover the simple joy of singing beside their friends, and prepare together for a special end-of-term performance.",
        ko: "그 과정에서 아이들은 아름다운 발성과 화음을 익히고, 친구들과 나란히 노래하는 기쁨을 발견하며, 학기말 특별 발표회를 함께 준비합니다." },
      { en: "No experience is needed — just a willingness to sing. Our director meets every child where they are, and the group grows together, one Saturday at a time.",
        ko: "특별한 경험은 필요하지 않습니다 — 노래하고 싶은 마음이면 충분합니다. 지도 선생님이 아이 한 명 한 명의 눈높이에 맞춰 지도하고, 아이들은 토요일마다 조금씩 함께 자라 갑니다." },
      { en: "The choir is open to elementary school children in grades 1 through 5. Rehearsals are every Saturday from 9:15 to 9:55 a.m., right before Korean school starts, in the Korean school classroom.",
        ko: "모집 대상은 초등학교 1학년부터 5학년까지입니다. 연습은 매주 토요일 오전 9시 15분부터 9시 55분까지, 한글학교 수업이 시작되기 바로 전에 한글학교 교실에서 진행됩니다." },
      { en: "Music helps children learn Korean joyfully and naturally.",
        ko: "음악은 한국어를 즐겁고 자연스럽게 배울 수 있도록 도와줄 것입니다." },
      { en: "Want to join us? [Email Lois Lee](mailto:loislee622@gmail.com?subject=Joining%20the%20NAKS%20Children%27s%20Choir&body=Hello%20Lois%2C%0A%0AI%27d%20like%20to%20sign%20my%20child%20up%20for%20the%20North%20Alabama%20Korean%20School%20children%27s%20choir%20this%20fall.%0A%0AChild%27s%20name%3A%0AGrade%20%281-5%29%3A%0A%0AThank%20you%21) and she'll help you sign up. Any child who loves to sing is welcome — come sing with us this fall, and let's make beautiful memories together.",
        ko: "함께하고 싶으신가요? [이로이스(Lois Lee) 선생님께 이메일 보내기](mailto:loislee622@gmail.com?subject=%EC%96%B4%EB%A6%B0%EC%9D%B4%20%ED%95%A9%EC%B0%BD%EB%8B%A8%20%EC%8B%A0%EC%B2%AD&body=%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94%2C%20Lois%20%EC%84%A0%EC%83%9D%EB%8B%98.%0A%0A%EC%9D%B4%EB%B2%88%20%EA%B0%80%EC%9D%84%20%EB%B6%81%EC%95%8C%EB%9D%BC%EB%B0%94%EB%A7%88%20%ED%95%9C%EA%B5%AD%ED%95%99%EA%B5%90%20%EC%96%B4%EB%A6%B0%EC%9D%B4%20%ED%95%A9%EC%B0%BD%EB%8B%A8%EC%97%90%20%EC%A0%80%ED%9D%AC%20%EC%95%84%EC%9D%B4%EB%A5%BC%20%EB%93%B1%EB%A1%9D%ED%95%98%EA%B3%A0%20%EC%8B%B6%EC%8A%B5%EB%8B%88%EB%8B%A4.%0A%0A%EC%95%84%EC%9D%B4%20%EC%9D%B4%EB%A6%84%3A%0A%ED%95%99%EB%85%84%20%28%EC%B4%88%EB%93%B1%201~5%29%3A%0A%0A%EA%B0%90%EC%82%AC%ED%95%A9%EB%8B%88%EB%8B%A4.)로 간편하게 신청하실 수 있습니다. 노래를 좋아하는 어린이라면 누구나 환영합니다 — 이번 가을, 함께 노래하며 아름다운 추억을 만들어 보아요." }
    ],

    endImage:    "assets/spotlight/choir-poster-fall-2026.jpg",
    endImageAlt: {
      en: "North Alabama Korean School children's choir recruitment poster.",
      ko: "북알라바마 한국학교 어린이 합창단 모집 포스터."
    },
    endImageCaption: {
      en: "Our choir recruitment flyer — please feel free to share it.",
      ko: "합창단 모집 포스터입니다 — 자유롭게 공유해 주세요."
    }
  },


  /* ---------------------------------------------------------------
     WEBSITE LAUNCH ANNOUNCEMENT — this post is written to be shared
     on social media. It keeps the school-photo.jpg image, sits at the
     top of the feed (newest date), and gives visitors a quick tour of
     everything the new site can do.
     --------------------------------------------------------------- */
  {
    slug:     "our-new-website-is-here",
    date:     "2026-07-11",
    category: { en: "Announcement", ko: "새 소식" },

    title: {
      en: "Our new website is here",
      ko: "북알라바마 한국학교 새 홈페이지가 열렸습니다"
    },

    dek: {
      en: "The North Alabama Korean School is now online. Enroll your child, see what a semester looks like, meet our teachers, read our stories, and find every way to be part of our community — all in one place, in English and Korean.",
      ko: "북알라바마 한국학교가 이제 온라인에서 여러분을 맞이합니다. 자녀 등록, 한 학기의 모습, 선생님 소개, 우리 이야기, 그리고 함께할 수 있는 모든 방법을 — 영어와 한국어로, 한곳에서 만나 보세요."
    },

    /* The photo. Put a 1200x630 image in assets/spotlight/ and name
       it here, for example "assets/spotlight/saturday-classroom.jpg".
       Until then this story shows a clean text card. */
    image:    "assets/school-photo.jpg",
    imageAlt: {
      en: "Students, teachers, and families of the North Alabama Korean School together.",
      ko: "북알라바마 한국학교의 학생, 선생님, 그리고 가족들이 함께 모인 모습."
    },

    author: { en: "North Alabama Korean School", ko: "북알라바마 한국학교" },

    /* The article body — a list of paragraphs. */
    body: [
      { en: "We are thrilled to announce that the North Alabama Korean School has a brand-new home online. Since 1992, this school has taught Korean language and culture to families across Huntsville and Madison — and now, for the first time, everything you need to be part of it lives in one beautiful, easy place. Come take a look around.",
        ko: "북알라바마 한국학교의 새 홈페이지가 문을 열었다는 반가운 소식을 전합니다. 1992년부터 헌츠빌과 매디슨 지역 가정에 한국어와 한국 문화를 가르쳐 온 우리 학교의 모든 것을, 이제 처음으로 아름답고 편리한 한곳에서 만나 보실 수 있습니다. 천천히 둘러봐 주세요." },

      { en: "Ready to join us? Enrolling is simple. The new site walks you through it in just a few minutes and opens the registration form right there — and new families are welcome any term, so there is never a wrong time to start.",
        ko: "함께하고 싶으신가요? 등록은 간단합니다. 새 홈페이지가 단 몇 분 만에 등록 과정을 안내하고, 그 자리에서 등록서를 열어 드립니다 — 새로운 가정은 어느 학기든 환영하니, 시작하기에 늦은 때란 없습니다." },

      { en: "Curious what a year with us actually looks like? You can explore our programs from Pre-K through our most advanced classes, see what a semester at NAKS looks like week by week, and check the calendar for the dates that matter — Chuseok, Hangeul Day, our end-of-term performance, and the Seollal celebration.",
        ko: "우리와 함께하는 한 해가 실제로 어떤 모습인지 궁금하신가요? 유치부부터 최상급반까지의 프로그램을 살펴보고, NAKS의 한 학기가 주별로 어떻게 흘러가는지 확인하고, 추석과 한글날, 학기말 발표회, 설날 잔치 같은 중요한 일정을 학사일정에서 미리 만나 보실 수 있습니다." },

      { en: "You can also meet the people who make Saturdays special — our principal, our teachers, and the staff who lead every classroom — and read the story of where the school came from and why it still matters today.",
        ko: "토요일을 특별하게 만드는 사람들 — 교장 선생님, 담임 선생님들, 그리고 모든 교실을 이끄는 운영진 — 을 소개받고, 우리 학교가 어디에서 시작되었으며 오늘도 왜 소중한지 그 이야기를 함께 읽어 보실 수 있습니다." },

      { en: "And there is more to read here than a class list. Our Stories section is a small window into Korean culture right now — K-pop on every playlist, Korean film and TV winning the world over, Korean food on every table — alongside the everyday moments that make this community feel like family.",
        ko: "이곳에는 수업 안내만 있는 것이 아닙니다. 우리 이야기 코너는 지금 이 순간의 한국 문화를 들여다보는 작은 창입니다 — 모두의 플레이리스트에 오른 K-pop, 세계를 사로잡은 한국 영화와 드라마, 모든 식탁에 오른 한국 음식 — 그리고 이 공동체를 가족처럼 느끼게 하는 일상의 순간들까지 담았습니다." },

      { en: "Want to give back? The site shows every way to help — as a teacher, a volunteer, or a partner — including our student volunteer program, where high-schoolers earn tracked service hours, official certificates, and recommendation letters. Whatever brought you here, there is a place for you.",
        ko: "무언가 나누고 싶으신가요? 홈페이지에는 함께하는 모든 방법 — 선생님으로, 자원봉사자로, 후원 파트너로 — 이 소개되어 있습니다. 고등학생들이 체계적으로 기록되는 봉사시간과 공식 수료증, 추천서를 받는 학생 자원봉사 프로그램도 함께 안내합니다. 어떤 이유로 이곳에 오셨든, 여러분을 위한 자리가 있습니다." },

      { en: "The whole site is bilingual — tap the language toggle at the top to read everything in English or Korean. Explore it, share it with a friend or a grandparent, and if you have been thinking about joining us, consider this your invitation. The door is open — now it is open online, too.",
        ko: "홈페이지 전체가 이중 언어로 되어 있습니다 — 화면 위쪽의 언어 전환 버튼을 누르면 영어와 한국어로 모두 읽으실 수 있습니다. 마음껏 둘러보시고, 친구나 조부모님께도 공유해 주세요. 그리고 혹시 함께할까 고민하고 계셨다면, 이 글을 초대장으로 받아 주세요. 문은 열려 있습니다 — 이제 온라인에서도 활짝 열렸습니다." }
    ]
  },

  /* ---------------------------------------------------------------
     CULTURE TREND #1 — K-pop
     Linked from the "K-pop on every playlist" card in the Culture
     section on the homepage.
     --------------------------------------------------------------- */
  {
    slug:     "k-pop-on-every-playlist",
    date:     "2026-05-22",
    track:    "culture",
    category: { en: "Korean Culture Today", ko: "오늘의 한국 문화" },

    title: {
      en: "K-pop on every playlist",
      ko: "모두의 플레이리스트에 오른 K-pop"
    },

    dek: {
      en: "Stadiums full, charts topped, lightsticks in every shade — Korean pop has moved from import to icon. Here is what the K-pop moment looks like, and why singing along in Korean is more than a hobby.",
      ko: "가득 찬 스타디움, 정상에 오른 차트, 형형색색의 응원봉 — K-pop은 더 이상 외래 음악이 아니라 하나의 상징이 되었습니다. 지금 이 순간이 어떤 풍경인지, 그리고 한국어로 따라 부르는 일이 왜 단순한 취미 이상인지 이야기합니다."
    },

    image:    "assets/spotlight/k-pop-on-every-playlist.jpg",
    imageAlt: {
      en: "A glowing sea of K-pop fan lightsticks at a packed American stadium concert.",
      ko: "미국의 대형 스타디움 콘서트장을 가득 채운 K-pop 응원봉의 물결."
    },

    author: { en: "North Alabama Korean School", ko: "북알라바마 한국학교" },

    body: [
      { en: "There was a time, not so long ago, when explaining \"K-pop\" required a sentence or two. That time is over. In the summer of 2025, BLACKPINK's Deadline tour became the group's first all-stadium run across North America, with a worldwide gross projected near $440 million. Stray Kids' DominATE tour grossed $185.9 million and moved 1.3 million tickets. ENHYPEN, IVE, aespa, and the returning members of BTS now headline the same venues that once belonged exclusively to Taylor Swift and Beyoncé.",
        ko: "얼마 전까지만 해도 \"K-pop\"이 무엇인지 한두 마디로 설명해야 하던 시절이 있었습니다. 그 시절은 끝났습니다. 2025년 여름, BLACKPINK의 「Deadline」 투어는 그룹 최초의 북미 전 회차 스타디움 투어가 되었고, 전 세계 누적 매출은 약 4억 4천만 달러로 추정됩니다. Stray Kids의 「DominATE」 투어는 1억 8천590만 달러의 매출에 130만 장의 티켓을 팔았습니다. ENHYPEN, IVE, aespa, 그리고 군 복무를 마치고 돌아온 BTS 멤버들이 한때 테일러 스위프트와 비욘세의 전유물이던 무대를 채우고 있습니다." },

      { en: "What makes this moment different from earlier waves of imported music is the language. Fans aren't asking for English versions. They are learning the Korean lyrics, line by line, and proudly singing them back. A whole generation of American teenagers can pronounce 사랑해 with the right vowel, and recognizes the difference between 오빠 and 형 without having to look it up.",
        ko: "지금 이 흐름이 이전의 외국 음악 유행과 다른 점은 바로 언어입니다. 팬들은 영어 버전을 원하지 않습니다. 한국어 가사를 한 줄 한 줄 배워 자랑스럽게 따라 부릅니다. 미국 십 대 한 세대가 「사랑해」의 모음을 정확하게 발음하고, 「오빠」와 「형」의 차이를 따로 찾아보지 않아도 압니다." },

      { en: "For the students at our school, this changes everything. Korean is no longer the language only spoken at grandma's house. It is on the playlist in their friend's car. It is the chorus they shout at the concert with twenty thousand other people. Suddenly, the homework they bring home on Saturday morning has a payoff their friends genuinely envy.",
        ko: "우리 학교 학생들에게 이 변화는 모든 것을 바꿉니다. 한국어는 더 이상 할머니 댁에서만 쓰는 언어가 아닙니다. 친구 차 안 플레이리스트에서 흘러나오는 언어이고, 2만 명의 관객과 함께 외치는 후렴구의 언어입니다. 토요일 아침마다 집으로 가져오는 한국어 숙제가, 친구들이 진심으로 부러워하는 능력으로 돌아오기 시작합니다." },

      { en: "There is a particular look a student gets when they realize they understand a line their non-Korean friends had to Google. It is the look of belonging — of standing inside something the rest of the room is trying to catch up to. K-pop didn't create that feeling, but it is making it possible for more children than ever.",
        ko: "친구들이 검색해야 알 수 있는 한 줄을 자기는 그냥 알아듣는 순간, 학생들의 얼굴에는 특유의 표정이 떠오릅니다. 그것은 소속감의 표정 — 다른 사람들이 따라잡으려 애쓰는 그 안쪽에 자신이 이미 서 있다는 자긍심의 표정입니다. K-pop이 그 감정을 만들어 낸 것은 아니지만, 그 어느 때보다 많은 아이들이 그 감정을 누리게 해 주고 있습니다." },

      { en: "Our job, as a Korean school, is to give that head start its full depth. Knowing the lyrics is wonderful. Understanding the grammar that makes those lyrics work, hearing the cultural echoes inside a song, holding a real conversation with a Korean grandparent about why one verse moved them — that is the gift we add on top. K-pop is the doorway. The school is the house behind it.",
        ko: "우리 한국학교의 역할은 그 든든한 출발에 깊이를 더해 주는 일입니다. 가사를 아는 것만으로도 멋진 일입니다. 그 가사를 가능하게 하는 문법을 이해하고, 노래 안에 담긴 문화적 울림을 듣고, 한 구절에 왜 마음이 움직였는지를 한국인 조부모와 진짜 대화로 나눌 수 있는 것 — 그 위에 얹어 드릴 수 있는 선물이 바로 그것입니다. K-pop이 문이라면, 우리 학교는 그 문 너머의 집입니다." }
    ]
  },

  /* ---------------------------------------------------------------
     CULTURE TREND #2 — Korean film & TV
     --------------------------------------------------------------- */
  {
    slug:     "parasite-to-streaming-hits",
    date:     "2026-05-22",
    track:    "culture",
    category: { en: "Korean Culture Today", ko: "오늘의 한국 문화" },

    title: {
      en: "From Parasite to streaming hits",
      ko: "기생충에서 스트리밍 히트작까지"
    },

    dek: {
      en: "An Oscar for Best Picture. The first non-English series to win the Drama Emmys. Over a billion hours streamed. Korean film and television have become global event TV — and a fun, real reason to keep learning the language.",
      ko: "최우수 작품상 오스카, 비영어권 드라마 최초의 에미상 수상, 누적 10억 시간이 넘는 시청 시간. 한국 영화와 드라마는 전 세계가 함께 보는 콘텐츠가 되었고, 한국어를 계속 배울 즐겁고 분명한 이유가 되었습니다."
    },

    image:    "assets/spotlight/parasite-to-streaming-hits.jpg",
    imageAlt: {
      en: "A cozy American living room at night, a screen glowing with a Korean drama, popcorn on the coffee table.",
      ko: "저녁 시간, 따뜻한 미국 가정 거실의 화면 속에서 한국 드라마가 흘러나오는 모습."
    },

    author: { en: "North Alabama Korean School", ko: "북알라바마 한국학교" },

    body: [
      { en: "In 2020 a Korean film won Best Picture at the Academy Awards — the first non-English-language movie ever to do so. Bong Joon-ho's Parasite turned out not to be a one-time surprise. It was the announcement of a new era. Two years later Squid Game became the first non-English series ever nominated, and then to win, in the Drama categories at the Emmys, with 14 nominations and 6 wins. Lee Jung-jae became the first Asian actor to win Outstanding Lead Actor in a Drama Series.",
        ko: "2020년, 한국 영화 한 편이 아카데미 시상식에서 최우수 작품상을 받았습니다. 비영어권 영화로는 사상 최초였습니다. 봉준호 감독의 「기생충」은 일회성 깜짝 사건이 아니라 새로운 시대의 신호탄이었습니다. 2년 뒤 「오징어 게임」은 비영어권 드라마 최초로 에미상 드라마 부문에 후보로 오르고 수상까지 차지했습니다. 후보 14개, 수상 6개. 이정재는 드라마 부문 남우주연상을 받은 최초의 아시아 배우가 되었습니다." },

      { en: "Squid Game season one is the most-watched season of any series in any language in Netflix's history. Season two, released over the 2024 winter holidays, drew over 1.24 billion hours of viewing in a matter of weeks — the third most-watched season ever. Netflix's 2025 Korean slate alone includes twenty-nine new dramas and films. Korean content is no longer the niche corner of a streaming menu. It is the front page.",
        ko: "「오징어 게임」 시즌 1은 언어를 불문하고 넷플릭스 역사상 가장 많이 시청된 시즌입니다. 2024년 연말연시에 공개된 시즌 2는 단 몇 주 만에 12억 4천만 시간이 넘는 시청 시간을 기록하며 역대 세 번째로 많이 본 시즌이 되었습니다. 넷플릭스의 2025년 한국 라인업만도 신규 드라마와 영화 29편입니다. 한국 콘텐츠는 더 이상 스트리밍 메뉴의 한쪽 모퉁이가 아닙니다. 첫 화면입니다." },

      { en: "Something quiet has changed inside American homes because of this. Subtitles, once seen as work, are now ordinary. Parents and kids together follow a story in a language neither of them speaks fluently. Reading speed goes up. Ears adjust. The texture of Korean — the rhythm of its sentences, the warmth of its honorifics — becomes familiar even before vocabulary does.",
        ko: "그 덕분에 미국 가정 안에서도 조용한 변화가 일어났습니다. 한때 \"노동\"처럼 여겨지던 자막이 이제는 일상입니다. 부모와 아이가 함께, 둘 다 유창하지 않은 언어로 된 이야기를 따라갑니다. 읽는 속도가 빨라지고, 귀가 적응합니다. 어휘를 배우기도 전에 한국어의 결 — 문장의 리듬, 존댓말의 따뜻함 — 이 익숙해집니다." },

      { en: "For our students this is a remarkable advantage. They are watching the same drama their non-Korean friends are talking about at school on Monday — but they are catching things their friends miss. The joke in the dialect. The way a daughter speaks differently to her mother than to her older brother. The exact word a character chose, and what a softer alternative would have meant.",
        ko: "우리 학생들에게 이것은 놀라운 강점입니다. 월요일에 친구들이 학교에서 이야기하는 바로 그 드라마를 우리 아이들도 봤습니다 — 그런데 친구들은 놓치는 것들을 우리 아이들은 잡아냅니다. 사투리에 숨은 농담. 딸이 어머니에게 말할 때와 오빠에게 말할 때의 결의 차이. 인물이 굳이 고른 한 단어와, 더 부드러운 표현이었다면 어떻게 들렸을지." },

      { en: "Korean film and series are doing the work great art has always done — opening a door for people to step through. What we do at our school is help our students walk farther into that doorway, with the language and the cultural fluency to feel at home on the other side. Watch the show on Friday. Come to class on Saturday. The two are part of the same gift.",
        ko: "한국의 영화와 드라마는 위대한 예술이 늘 해 온 일을 하고 있습니다 — 사람들에게 들어설 문을 열어 주는 일입니다. 우리 학교가 하는 일은, 학생들이 그 문 안쪽으로 더 멀리 들어가 그 너머의 세계에서도 편안할 수 있도록, 언어와 문화의 깊이를 더해 주는 것입니다. 금요일에 드라마를 보고, 토요일에 수업에 오세요. 둘은 같은 선물의 두 면입니다." }
    ]
  },

  /* ---------------------------------------------------------------
     CULTURE TREND #3 — Korean food
     --------------------------------------------------------------- */
  {
    slug:     "korean-food-mainstream",
    date:     "2026-05-22",
    track:    "culture",
    category: { en: "Korean Culture Today", ko: "오늘의 한국 문화" },

    title: {
      en: "Korean food, mainstream",
      ko: "주류가 된 한국 음식"
    },

    dek: {
      en: "Korea's food exports hit a record $13.62 billion in 2025, and the United States led the world in importing them. Kimchi, tteokbokki, and Korean fried chicken are no longer foreign — they are American comfort food.",
      ko: "2025년 한국의 농식품 수출액은 사상 최고치인 136억 2천만 달러를 기록했고, 그중 미국은 세계 1위 수입국이었습니다. 김치와 떡볶이, 한국식 후라이드 치킨은 더 이상 \"외국 음식\"이 아니라, 미국인의 일상 음식이 되었습니다."
    },

    image:    "assets/spotlight/korean-food-mainstream.jpg",
    imageAlt: {
      en: "An overhead shot of a Korean dinner spread: kimchi, rice, banchan side dishes, and a sizzling Korean BBQ grill at the center.",
      ko: "위에서 바라본 한국 저녁상의 풍경 — 김치, 밥, 반찬, 그리고 중앙의 한국식 바비큐 불판."
    },

    author: { en: "North Alabama Korean School", ko: "북알라바마 한국학교" },

    body: [
      { en: "In 2025, Korea's exports of food and agricultural products reached a record $13.62 billion. The United States was the single largest importer of Korean agro-food, taking in $1.8 billion — up 13.2 percent in a single year. Ramyeon noodles alone crossed $1.5 billion globally, a 21.9 percent jump. According to a 2025 survey by the Korea Food Promotion Institute, two out of every three people worldwide have now tasted Korean food.",
        ko: "2025년 한국의 농식품 수출액은 사상 최고치인 136억 2천만 달러에 달했습니다. 그중 미국은 한국 농식품의 단일 최대 수입국으로, 한 해 동안 13.2퍼센트 늘어난 18억 달러어치를 들여왔습니다. 라면 수출만으로도 전 세계 15억 달러를 넘어섰고, 1년 사이 21.9퍼센트가 늘었습니다. 2025년 한식진흥원 조사에 따르면, 이제 전 세계 사람들 중 셋에 둘이 한국 음식을 맛본 적이 있다고 답했습니다." },

      { en: "Walk through a typical American grocery store and the change is visible. Kimchi has its own refrigerated section. Gochujang sits next to the ketchup. Frozen Korean dumplings, instant tteokbokki cups, and rice-cake snacks share shelf space with frozen pizza. Bonchon and other Korean fried chicken chains have opened across the country. Social media speaks fluent Korean food: cheesy tteokbokki, tornado potatoes, mayak gimbap, and the dalgona coffee that started during the pandemic but never quite left.",
        ko: "평범한 미국 식료품점만 둘러봐도 변화가 눈에 보입니다. 김치는 자기만의 냉장 코너가 있고, 고추장은 케첩 옆에 놓여 있습니다. 냉동 한국 만두, 컵 떡볶이, 떡 과자가 냉동 피자와 같은 진열대를 나눠 씁니다. 본촌을 비롯한 한국식 치킨 프랜차이즈가 미국 전역에 들어섰고, 소셜미디어는 한국 음식에 능숙합니다 — 치즈 떡볶이, 회오리 감자, 마약 김밥, 그리고 팬데믹 때 시작해 끝내 자리잡은 달고나 커피까지." },

      { en: "For our families, this everyday visibility matters more than headlines do. The lunchroom table is a quiet test for any child whose food doesn't match what everyone else opens. For a long time, Korean kids in the U.S. felt that test sharply. The lunchbox kimbap was something to explain, or to hide. That has changed. Today the kid with kimbap is the kid everyone else wants to trade with.",
        ko: "우리 가정에게는 이런 일상의 가시성이 신문 헤드라인보다 훨씬 더 큰 의미를 가집니다. 점심 식탁은 자기 도시락이 다른 친구들의 것과 다른 아이에게는 조용한 시험대입니다. 오랫동안 미국의 한국 아이들은 그 시험을 날카롭게 느꼈습니다. 도시락 김밥은 변명해야 하거나 숨겨야 할 음식이었습니다. 이제는 달라졌습니다. 오늘은 김밥을 싸 온 아이가, 다른 아이들이 바꿔 먹자고 줄 서는 아이입니다." },

      { en: "Food is not a side topic at our school — it is part of the curriculum. Every Chuseok and Seollal we cook together. Younger students learn the words for what they are eating before they learn the grammar that describes it. Parents discover, sometimes for the first time, just how much of the language lives inside a recipe — the particular verb for stirring, the difference between 매콤한 and 매운, the way a single side dish carries a region's history.",
        ko: "음식은 우리 학교에서 곁가지 주제가 아니라 교과과정의 일부입니다. 추석과 설날이면 다 함께 음식을 만듭니다. 어린 학생들은 그것을 묘사하는 문법보다 먼저, 자신이 먹고 있는 음식의 이름부터 배웁니다. 학부모들도 가끔은 처음으로, 한 가지 조리법 안에 얼마나 많은 언어가 살아 있는지를 깨닫습니다 — 「젓다」와 「휘젓다」의 차이, 「매콤한」과 「매운」의 결, 작은 반찬 하나가 한 지역의 역사를 어떻게 담고 있는지를." },

      { en: "Korean food going mainstream is not a peak. It is a foundation. The kids who grow up with it on every menu will see Korean as something the whole country happily eats with — and then, with our help, they will know exactly what they are eating, in the language it was named in.",
        ko: "한국 음식이 주류가 된 것은 정점이 아니라 토대입니다. 모든 메뉴판 위에서 한국 음식을 보며 자라는 아이들은, 한국을 \"온 나라가 함께 즐겨 먹는 무엇\"으로 받아들이게 됩니다 — 그리고 우리 학교의 도움으로, 자신이 무엇을 먹고 있는지를 그 음식의 이름이 지어진 그 언어로 정확히 알게 될 것입니다." }
    ]
  }

  /* To add another story: copy one whole { ... } block above,
     paste it here after a comma, and edit every field.
     Then rebuild:  node tools/build-spotlight.mjs  */

];
