import type { DayPlan } from '../types'

// Phase C: Day 28 ~ Day 39 —— 从句专题(学位英语重点)
// vocab 一律留空,由系统按词频自动分配
export const PHASE_C: DayPlan[] = [
  // ========================= Day 28 主语从句 =========================
  {
    day: 28,
    title: 'Subject Clauses · 主语从句',
    vocab: [],
    grammar: {
      title: '主语从句 (Subject Clause)',
      body: `主语从句在复合句中充当**主语**。引导词分三类:

- **that**:仅起连接作用,无词义,不充当成分,that 不可省(句首时)。
- **whether**:「是否」,不与 or not 连用时可前置;**if 不能引导主语从句**。
- **连接代词/副词**:what / who / which / when / where / why / how,本身充当成分并带词义。

**形式主语 it**:为避免头重脚轻,常把主语从句后置,句首用 it。
- It is well-known **that** the earth is round.
- It remains unknown **whether** he will come.

注意:主语从句作主语,谓语动词一律用**单数**。`,
      questions: [
        {
          id: 'g28-1',
          type: 'single',
          stem: '___ is still a question whether the meeting will be held on time.',
          options: [
            'A) That',
            'B) This',
            'C) It',
            'D) There',
          ],
          answer: 2,
          explain:
            '**C) It**。whether 引导的主语从句后置,句首用形式主语 it,结构为 It is ... whether ...。',
        },
        {
          id: 'g28-2',
          type: 'single',
          stem: '___ we need is more time and better equipment.',
          options: [
            'A) That',
            'B) What',
            'C) Whether',
            'D) Which',
          ],
          answer: 1,
          explain:
            '**B) What**。从句中 need 缺宾语,what 既引导主语从句又作 need 的宾语,意为「我们所需要的」。that 在名词性从句中不充当成分,故排除。',
        },
        {
          id: 'g28-3',
          type: 'judge',
          stem: '主语从句 "That the earth is round is a fact" 中,that 可以省略。',
          answer: 1,
          explain:
            '**错误**。that 引导的主语从句位于句首时,**that 绝不能省略**;只有在 that 从句作宾语等某些场合才可省。',
        },
      ],
    },
    reading: {
      title: 'A Scientific Truth',
      text: `That the earth travels around the sun is now common knowledge, but for centuries people believed otherwise. It was the Polish astronomer Copernicus who first placed the sun at the center of our system. What surprised the public most was that his idea challenged the teachings of the time. Whether ordinary people accepted it quickly is doubtful; change in science often takes generations. Today, it is universally recognized that evidence, not authority, finally decides what is true.`,
      questions: [
        {
          id: 'r28-1',
          type: 'single',
          stem: 'According to the passage, what did Copernicus do?',
          options: [
            'A) He proved the earth was flat',
            'B) He placed the sun at the center of the system',
            'C) He supported the old teachings',
            'D) He doubted the existence of the sun',
          ],
          answer: 1,
          explain:
            '**B**。文中 "It was ... Copernicus who first placed the sun at the center of our system" 直接对应。',
        },
        {
          id: 'r28-2',
          type: 'blank',
          stem: 'The word "otherwise" (line 1) most likely means ___ (中文).',
          answer: '相反地 / 不是这样',
          explain:
            'otherwise 此处意为「与此不同、相反」,与 common knowledge 形成对比,指人们曾经相信太阳绕地球转。',
        },
        {
          id: 'r28-3',
          type: 'judge',
          stem: 'The passage states that ordinary people quickly accepted Copernicus\'s idea.',
          answer: 1,
          explain:
            '**错误**。原文 "Whether ordinary people accepted it quickly is doubtful",可见人们是否很快接受是值得怀疑的。',
        },
      ],
    },
    translation: [
      {
        en: 'It is reported that a new library will be built in our city.',
        zh: '据报道,我们城市将建一座新图书馆。',
        tip: 'It is reported that... 为常见主语从句句式。',
      },
      {
        en: 'What matters most is whether you keep trying.',
        zh: '最重要的是你是否坚持尝试。',
        tip: 'what 引导主语从句,whether 引导表语从句。',
      },
      {
        en: 'That he passed the exam surprised all of us.',
        zh: '他通过了考试,这让我们所有人都很惊讶。',
        tip: 'That 引导主语从句,句首 that 不可省略。',
      },
    ],
    writing: {
      prompt:
        '用主语从句写一段话(3~4 句),描述「你了解的一项科学事实」。至少使用一次 It is ... that ... 句式。',
      template:
        'It is well known that ____. What surprises many people is that ____. Whether ____ depends on ____.',
      sample:
        'It is well known that light travels faster than sound. What surprises many people is that this simple fact was once misunderstood. Whether we notice it or not depends on how carefully we observe nature.',
      keyWords: ['well known', 'surprise', 'whether'],
    },
  },

  // ========================= Day 29 宾语从句 =========================
  {
    day: 29,
    title: 'Object Clauses · 宾语从句',
    vocab: [],
    grammar: {
      title: '宾语从句 (Object Clause)',
      body: `宾语从句在句中作**动词、介词或形容词**的宾语。引导词:

- **that**:陈述句转化而来,that 在口语/非正式场合常省(尤其动词 say/think/know 后)。
- **whether / if**:由一般疑问句转化,「是否」。**if 不能跟在介词后**,也不能与 or not 紧贴。
- **疑问词**:what/who/which/when/where/why/how,带词义并充当成分。

三个关键点:
- **语序**:宾语从句一律用**陈述语序**(主语 + 谓语)。
- **时态呼应**:主句为过去时,从句改为相应的过去时态;但**客观真理**仍用一般现在时。
- 否定**前移**:I don't think he is right. (not 否定 think,而非 is)`,
      questions: [
        {
          id: 'g29-1',
          type: 'single',
          stem: 'Could you tell me ___ the railway station?',
          options: [
            'A) how I can get to',
            'B) how can I get to',
            'C) how I could get',
            'D) how could I get to',
          ],
          answer: 0,
          explain:
            '**A**。宾语从句用陈述语序(主语 + 谓语),排除 B、D;get to 后需有宾语 station,C 项缺 to,排除。',
        },
        {
          id: 'g29-2',
          type: 'single',
          stem: 'The teacher told us that the sun ___ in the east.',
          options: [
            'A) rose',
            'B) rises',
            'C) had risen',
            'D) would rise',
          ],
          answer: 1,
          explain:
            '**B) rises**。主句虽为过去时 told,但从句表述**客观真理**,时态不后退,仍用一般现在时 rises。',
        },
        {
          id: 'g29-3',
          type: 'judge',
          stem: '在 "I don\'t think he is right" 中,not 实际上否定了从句 is right。',
          answer: 0,
          explain:
            '**正确**。think/believe/suppose 等动词的宾语从句,否定词常**前移**到主句,语义上否定的是从句内容(他不对)。',
        },
      ],
    },
    reading: {
      title: 'A Letter from Abroad',
      text: `When Li Ming first arrived in London, he found that the local accent was hard to understand. He wondered whether he could ever speak as fluently as native speakers. His host family told him that practice was the only shortcut. He soon discovered that what mattered was not how many words he memorized, but how bravely he used them. Months later, he realized that his effort had finally paid off. The experience taught him that confidence grows with every conversation.`,
      questions: [
        {
          id: 'r29-1',
          type: 'single',
          stem: 'What did Li Ming find when he arrived in London?',
          options: [
            'A) The local accent was easy to follow',
            'B) The local accent was hard to understand',
            'C) Native speakers spoke slowly',
            'D) He could already speak fluently',
          ],
          answer: 1,
          explain:
            '**B**。首句 "the local accent was hard to understand" 直接对应选项 B。',
        },
        {
          id: 'r29-2',
          type: 'blank',
          stem: 'The word "shortcut" most likely means ___ (中文).',
          answer: '捷径',
          explain:
            'shortcut 由 short + cut 构成,意为「捷径」。文中 host family 说练习是唯一的捷径。',
        },
        {
          id: 'r29-3',
          type: 'judge',
          stem: 'According to the passage, memorizing many words was the most important thing for Li Ming.',
          answer: 1,
          explain:
            '**错误**。文中说 "what mattered was not how many words he memorized, but how bravely he used them",即关键在于敢用,而非记多少词。',
        },
      ],
    },
    translation: [
      {
        en: 'I really don\'t know whether he will accept the invitation.',
        zh: '我真不知道他是否会接受邀请。',
        tip: 'whether 引导宾语从句,「是否」。',
      },
      {
        en: 'She asked me where I had bought the dictionary.',
        zh: '她问我在哪儿买的这本词典。',
        tip: '宾语从句用陈述语序;主句过去时,从句用过去完成时。',
      },
      {
        en: 'Scientists have proved that smoking does harm to our health.',
        zh: '科学家已经证明吸烟对我们的健康有害。',
        tip: 'that 引导宾语从句,do harm to = 对……有害。',
      },
    ],
    writing: {
      prompt:
        '用宾语从句写一段话,描述「一次你向别人请教或别人告诉你的经历」。至少使用 whether/if 和一个疑问词。',
      template:
        'I once wondered whether ____. My friend told me that ____. Finally I realized that ____.',
      sample:
        'I once wondered whether I could learn English well by myself. My teacher told me that reading every day would help. Finally I realized that practice and patience were the real keys.',
      keyWords: ['wonder', 'whether', 'realize'],
    },
  },

  // ========================= Day 30 表语从句 =========================
  {
    day: 30,
    title: 'Predicative Clauses · 表语从句',
    vocab: [],
    grammar: {
      title: '表语从句 (Predicative Clause)',
      body: `表语从句位于**系动词之后**,充当表语,说明主语的内容或状态。常见系动词:**be, seem, look, remain, stay, become, appear**。

引导词:
- **that**:陈述内容,无词义,通常不省。
- **whether**:「是否」,**if 一般不能引导表语从句**。
- **连接代词/副词**:what / who / which / when / where / why / how。
- **as if / as though**:「仿佛」,常跟在 look/seem 后。

固定句式:
- **The reason is that ...**(原因 是……)—— 注意不用 because。
- **The question is whether ...**(问题 在于 是否……)。
- **This/That is because ...**(这 是 因为……) / **This/That is why ...**(这 就是 为什么……)。`,
      questions: [
        {
          id: 'g30-1',
          type: 'single',
          stem: 'The question is ___ we can finish the project on time.',
          options: [
            'A) that',
            'B) whether',
            'C) what',
            'D) which',
          ],
          answer: 1,
          explain:
            '**B) whether**。「是否」之意,表语从句中不能用 if,只能用 whether;that 无「是否」含义。',
        },
        {
          id: 'g30-2',
          type: 'single',
          stem: 'The reason for his absence is ___ he was ill.',
          options: [
            'A) because',
            'B) why',
            'C) that',
            'D) what',
          ],
          answer: 2,
          explain:
            '**C) that**。The reason is that ... 为固定结构,**不可用 because**,避免语义重复(reason 与 because 都表原因)。',
        },
        {
          id: 'g30-3',
          type: 'judge',
          stem: '在 "It looks as if it is going to rain" 中,as if 引导的是表语从句。',
          answer: 0,
          explain:
            '**正确**。looks 为系动词,as if it is going to rain 在其后作表语,描述「看起来……的样子」。',
        },
      ],
    },
    reading: {
      title: 'Why We Sleep',
      text: `One question that puzzles many people is why we need to sleep at all. The truth is that scientists are still not entirely sure. What seems clear is that sleep helps the brain store what we have learned during the day. That is why a good night\'s rest often makes a difficult problem seem easier the next morning. Another finding is that lack of sleep can seriously weaken our memory and attention. In short, the message is that we should never treat sleep as wasted time.`,
      questions: [
        {
          id: 'r30-1',
          type: 'single',
          stem: 'What is the main point of the passage?',
          options: [
            'A) Scientists fully understand why we sleep',
            'B) Sleep is important and should not be ignored',
            'C) People sleep less than before',
            'D) Sleep has nothing to do with memory',
          ],
          answer: 1,
          explain:
            '**B**。全文围绕睡眠的功能与重要性,结尾点题「不应把睡眠当成浪费的时间」。',
        },
        {
          id: 'r30-2',
          type: 'blank',
          stem: 'The phrase "lack of sleep" means ___ (中文).',
          answer: '睡眠不足 / 缺乏睡眠',
          explain: 'lack (n.) 意为「缺乏」,lack of sleep 即「睡眠不足」。',
        },
        {
          id: 'r30-3',
          type: 'judge',
          stem: 'The passage says that a good night\'s rest can make a difficult problem seem easier.',
          answer: 0,
          explain: '**正确**。原文 "a good night\'s rest often makes a difficult problem seem easier" 与陈述一致。',
        },
      ],
    },
    translation: [
      {
        en: 'The problem is that we have run out of time.',
        zh: '问题是我们已经没有时间了。',
        tip: 'The problem is that ... 表语从句;run out of = 用完。',
      },
      {
        en: 'That is why she decided to study abroad.',
        zh: '那就是她决定出国留学的原因。',
        tip: 'That is why ... 表「这就是……的原因」。',
      },
      {
        en: 'It looks as if it is going to snow.',
        zh: '看起来好像要下雪了。',
        tip: 'as if 引导表语从句,「仿佛,好像」。',
      },
    ],
    writing: {
      prompt:
        '用表语从句写一段话,解释「你喜欢/不喜欢某门课程的原因」。至少使用 The reason is that ... 和 That is why ...。',
      template:
        'My favorite subject is ____. The reason is that ____. That is why ____.',
      sample:
        'My favorite subject is history. The reason is that it helps me understand how the world became what it is today. That is why I never feel bored in history class.',
      keyWords: ['reason', 'that', 'why'],
    },
  },

  // ========================= Day 31 同位语从句 =========================
  {
    day: 31,
    title: 'Appositive Clauses · 同位语从句',
    vocab: [],
    grammar: {
      title: '同位语从句 (Appositive Clause)',
      body: `同位语从句用于解释或说明前面**抽象名词**的具体内容,与该名词**同位**。

常接同位语从句的名词:
- **fact, idea, news, hope, belief, truth, question, doubt, suggestion, advice, possibility, message** 等。

引导词:
- **that**:最常用,只起连接作用,**不充当成分**,不可省。
- **whether**:「是否」(if 通常不可)。
- **连接代词/副词**:what / who / when / where / why / how。

**与定语从句的关键区别**:
- 同位语从句的 that **不作句子成分**,仅连接;
- 定语从句的 that/which **必须在从句中充当主语或宾语**。
- 比较:
  - The news **that he won the prize** is true.(同位语,解释 news 的内容)
  - The news **that/which you told me** is true.(定语,that 作 told 的宾语)`,
      questions: [
        {
          id: 'g31-1',
          type: 'single',
          stem: 'The news ___ our team had won the game made us excited.',
          options: [
            'A) that',
            'B) which',
            'C) what',
            'D) when',
          ],
          answer: 0,
          explain:
            '**A) that**。从句结构完整,that 不充当成分,只解释 news 的内容,为同位语从句;which/what 在从句中要充当成分,故排除。',
        },
        {
          id: 'g31-2',
          type: 'single',
          stem: 'I have no idea ___ the meeting will be put off.',
          options: [
            'A) that',
            'B) whether',
            'C) what',
            'D) which',
          ],
          answer: 1,
          explain:
            '**B) whether**。句意为「不知道会议是否推迟」,表「是否」用 whether;that 无此义,且同位语从句中 if 一般不用。',
        },
        {
          id: 'g31-3',
          type: 'judge',
          stem: '在 "The fact that he told me is important" 中,that 引导的是同位语从句。',
          answer: 1,
          explain:
            '**错误**。从句 "he told me" 缺宾语,that 在其中作 told 的宾语,故为**定语从句**,修饰 the fact,而非同位语。',
        },
      ],
    },
    reading: {
      title: 'A Hopeful Discovery',
      text: `The news that a new medicine had been successfully developed spread quickly through the city. The fact that it could cure a disease once thought incurable gave patients real hope. Scientists had long held the belief that nature still held many secrets waiting to be discovered. However, the question whether the medicine would be affordable for ordinary families remained unanswered. The government made a promise that the drug would reach those who needed it most. Such stories remind us that science and care should go hand in hand.`,
      questions: [
        {
          id: 'r31-1',
          type: 'single',
          stem: 'What gave patients real hope?',
          options: [
            'A) The spread of the news',
            'B) The fact that the new medicine could cure an "incurable" disease',
            'C) The government\'s promise',
            'D) The low price of the drug',
          ],
          answer: 1,
          explain:
            '**B**。文中 "The fact that it could cure a disease once thought incurable gave patients real hope" 直接对应。',
        },
        {
          id: 'r31-2',
          type: 'blank',
          stem: 'The word "incurable" means ___ (中文).',
          answer: '无法治愈的',
          explain: 'in-(不) + cure(治愈) + -able(可……的)= 无法治愈的。',
        },
        {
          id: 'r31-3',
          type: 'judge',
          stem: 'According to the passage, the question of whether the medicine was affordable had already been answered.',
          answer: 1,
          explain:
            '**错误**。原文 "the question whether the medicine would be affordable ... remained unanswered"(仍未被回答)。',
        },
      ],
    },
    translation: [
      {
        en: 'The fact that the earth is round is known to all.',
        zh: '地球是圆的这个事实众所周知。',
        tip: 'that 引导同位语从句,解释 the fact 的内容。',
      },
      {
        en: 'There is no doubt that he will succeed.',
        zh: '毫无疑问,他会成功的。',
        tip: 'no doubt that ... 固定搭配,that 引导同位语从句。',
      },
      {
        en: 'I cannot accept the idea that money means everything.',
        zh: '我不能接受金钱就是一切这种观念。',
        tip: 'that 解释 idea 的内容,同位语从句。',
      },
    ],
    writing: {
      prompt:
        '用同位语从句写一段话,围绕「一个让你印象深刻的事实或消息」。至少使用 The news/fact/idea that ... 结构。',
      template:
        'I still remember the news that ____. The fact that ____ encouraged me. There is no doubt that ____.',
      sample:
        'I still remember the news that our city would build a free public library. The fact that anyone could borrow books encouraged me. There is no doubt that reading changes lives.',
      keyWords: ['news', 'fact', 'doubt'],
    },
  },

  // ========================= Day 32 定语从句:关系代词 =========================
  {
    day: 32,
    title: 'Relative Pronouns · 定语从句(who/which/that)',
    vocab: [],
    grammar: {
      title: '定语从句 · 关系代词 who / whom / which / that',
      body: `定语从句修饰名词或代词(先行词),关系代词在从句中**充当主语、宾语或表语**。

- **who**:先行词是**人**,作主语或宾语(口语)。
- **whom**:先行词是**人**,作宾语(正式)。
- **which**:先行词是**物**,作主语或宾语。
- **that**:人或物均可,作主语或宾语。

要点:
- 关系代词在从句中作**宾语**时通常可省略;作**主语**时不可省。
- **只能用 that 的情况**:先行词被序数词、最高级、the only / the very / no / all 修饰,或先行词是**不定代词**(all, everything, anything, nothing, little)时。
- **不能用 that 的情况**:引导**非限制性定语从句**(逗号后)或紧跟在**介词**后时。`,
      questions: [
        {
          id: 'g32-1',
          type: 'single',
          stem: 'The engineer ___ designed this bridge is only thirty years old.',
          options: [
            'A) who',
            'B) which',
            'C) whom',
            'D) what',
          ],
          answer: 0,
          explain:
            '**A) who**。先行词 engineer 是人,关系代词在从句中作主语 designed,故用 who;whom 只作宾语。',
        },
        {
          id: 'g32-2',
          type: 'single',
          stem: 'This is the most interesting book ___ I have ever read.',
          options: [
            'A) which',
            'B) who',
            'C) that',
            'D) what',
          ],
          answer: 2,
          explain:
            '**C) that**。先行词被最高级 the most interesting 修饰,**只能用 that**,不能用 which。',
        },
        {
          id: 'g32-3',
          type: 'judge',
          stem: '在 "The man (whom) you met yesterday is my teacher" 中,whom 可以省略。',
          answer: 0,
          explain:
            '**正确**。whom 在从句中作 met 的宾语,作宾语的关系代词通常可省略。',
        },
      ],
    },
    reading: {
      title: 'The Old Librarian',
      text: `Mr. Brown, who has worked in the town library for forty years, knows almost every book on the shelves. The visitors who come to him for help are often surprised by his patience. The old reading room, which still has wooden floors and tall windows, is a favorite place for students. One book that he values most was a gift from his father. He often says that a library is a place which keeps the memory of a whole town. People who love reading will always find a friend in books.`,
      questions: [
        {
          id: 'r32-1',
          type: 'single',
          stem: 'What surprises visitors about Mr. Brown?',
          options: [
            'A) His age',
            'B) His patience',
            'C) His salary',
            'D) His collection of books',
          ],
          answer: 1,
          explain:
            '**B**。文中 "visitors who come to him for help are often surprised by his patience" 直接对应。',
        },
        {
          id: 'r32-2',
          type: 'blank',
          stem: 'The word "values" (as a verb) most likely means ___ (中文).',
          answer: '珍视 / 看重',
          explain: 'value 作动词意为「珍视、看重」。one book that he values most = 他最珍视的一本书。',
        },
        {
          id: 'r32-3',
          type: 'judge',
          stem: 'The passage suggests that the old reading room is popular among students.',
          answer: 0,
          explain:
            '**正确**。文中 "The old reading room ... is a favorite place for students",即学生最爱去的地方,与陈述一致。',
        },
      ],
    },
    translation: [
      {
        en: 'The girl who is standing under the tree is my sister.',
        zh: '站在树下的那个女孩是我妹妹。',
        tip: 'who 引导定语从句,先行词 the girl 是人。',
      },
      {
        en: 'The car which/that he bought last month broke down yesterday.',
        zh: '他上个月买的那辆车昨天坏了。',
        tip: 'which/that 指物,作 bought 的宾语。',
      },
      {
        en: 'This is the best novel that I have ever read.',
        zh: '这是我读过的最好的一本小说。',
        tip: '先行词被最高级 the best 修饰,只用 that。',
      },
    ],
    writing: {
      prompt:
        '用关系代词 who / which / that 各写一句,描述「你身边的一个人或一件物品」。',
      template:
        'The person who ____ is ____. The thing which/that I like most is ____. It is the only ____ that ____.',
      sample:
        'The person who has influenced me most is my mother. The thing which I like most about her is her patience. She is the only person that I fully trust.',
      keyWords: ['who', 'which', 'that'],
    },
  },

  // ========================= Day 33 定语从句:关系副词 & 介词+which =========================
  {
    day: 33,
    title: 'Relative Adverbs · 定语从句(when/where/why & 介词+which)',
    vocab: [],
    grammar: {
      title: '关系副词 when / where / why 与 介词 + which',
      body: `当关系词在从句中作**状语**(而非主/宾语)时,要用关系副词:

- **when** = 介词 + which:先行词是**时间**,在从句中作时间状语。
  - the day **when** (= **on which**) we met
- **where** = 介词 + which:先行词是**地点**,作地点状语。
  - the city **where** (= **in which**) he was born
- **why** = for which:先行词是 **reason**,作原因状语。
  - the reason **why** (= **for which**) he left

判断技巧:把先行词放回从句,**若缺主语/宾语** → 用关系代词(which/that);**若从句完整、只缺状语** → 用关系副词。

**介词 + which/whom**:正式文体中,介词可前置于 which/whom。
- the room **in which** he works = the room **where** he works
- the man **to whom** I spoke = the man (whom) I spoke to`,
      questions: [
        {
          id: 'g33-1',
          type: 'single',
          stem: 'I will never forget the day ___ I first came to this school.',
          options: [
            'A) which',
            'B) that',
            'C) when',
            'D) what',
          ],
          answer: 2,
          explain:
            '**C) when**。先行词 day 表时间,从句 "I first came to this school" 结构完整,只缺时间状语,故用 when(= on which)。',
        },
        {
          id: 'g33-2',
          type: 'single',
          stem: 'This is the village ___ I spent my childhood.',
          options: [
            'A) which',
            'B) where',
            'C) that',
            'D) what',
          ],
          answer: 1,
          explain:
            '**B) where**。先行词 village 表地点,从句结构完整,缺地点状语,用 where(= in which)。',
        },
        {
          id: 'g33-3',
          type: 'judge',
          stem: '在 "This is the reason why he was late" 中,why 可替换为 for which。',
          answer: 0,
          explain:
            '**正确**。why = for which,二者均引导原因状语,可互换。',
        },
      ],
    },
    reading: {
      title: 'Returning Home',
      text: `Last summer I returned to the small town where I grew up. The school where I had studied for six years still stood at the end of the street, though the wall had been freshly painted. I clearly remembered the morning when I first walked into my classroom, holding my father\'s hand tightly. An old neighbor, to whom my family used to lend vegetables, still recognized me at once. That was the very place in which I had learned my first English word. The visit reminded me of why childhood memories never really fade.`,
      questions: [
        {
          id: 'r33-1',
          type: 'single',
          stem: 'What had changed about the school?',
          options: [
            'A) It had been rebuilt',
            'B) Its wall had been freshly painted',
            'C) It had been turned into a shop',
            'D) It had been torn down',
          ],
          answer: 1,
          explain:
            '**B**。文中 "though the wall had been freshly painted" 说明墙被重新粉刷过,是变化之处。',
        },
        {
          id: 'r33-2',
          type: 'blank',
          stem: 'The phrase "fade" most likely means ___ (中文).',
          answer: '消退 / 褪色',
          explain: 'fade 意为「逐渐消失、褪色」。童年记忆不会真正 fade(消退)。',
        },
        {
          id: 'r33-3',
          type: 'judge',
          stem: 'The old neighbor did not recognize the writer.',
          answer: 1,
          explain:
            '**错误**。原文 "An old neighbor ... still recognized me at once",即邻居一眼就认出了作者。',
        },
      ],
    },
    translation: [
      {
        en: 'Do you still remember the day when we first met?',
        zh: '你还记得我们第一次见面的那天吗?',
        tip: 'when = on which,先行词 day 表时间。',
      },
      {
        en: 'This is the city in which I was born.',
        zh: '这就是我出生的那座城市。',
        tip: 'in which = where,正式用法。',
      },
      {
        en: 'Nobody knows the reason why he quit his job.',
        zh: '没人知道他辞职的原因。',
        tip: 'why = for which,修饰 the reason。',
      },
    ],
    writing: {
      prompt:
        '用关系副词 when / where / why 写一段话,描述「一个让你难忘的地方或时刻」。',
      template:
        'I will never forget the day when ____. The place where ____ is ____. That is the reason why ____.',
      sample:
        'I will never forget the day when I received my admission letter. The place where I opened it was our small kitchen. That is the reason why that moment means so much to me.',
      keyWords: ['when', 'where', 'why'],
    },
  },

  // ========================= Day 34 限制性 vs 非限制性定语从句 =========================
  {
    day: 34,
    title: 'Defining vs Non-defining · 限制性与非限制性定语从句',
    vocab: [],
    grammar: {
      title: '限制性 vs 非限制性定语从句',
      body: `**限制性定语从句**:与先行词关系紧密,不可省(省后句意不清),**不用逗号**,that/which/who 均可,作宾语的关系词可省。

**非限制性定语从句**:只作补充说明,省去后句意仍完整,**用逗号隔开**。规则:
- **不能用 that**,只能用 who(m)/which。
- 关系词**不可省略**。
- 可指代**整个主句**。
  - He passed the exam, **which** made his parents happy.(which 指代「他通过考试」整件事)

| 区别点 | 限制性 | 非限制性 |
| --- | --- | --- |
| 逗号 | 无 | 有 |
| that | 可用 | **不可用** |
| 省略 | 作宾语可省 | 不可省 |
| 作用 | 限定身份 | 补充说明 |

注意比较:
- My brother **who** lives in Paris is a doctor.(我有多个兄弟,限定在巴黎的那位)
- My brother,**who** lives in Paris, is a doctor.(我只有一个兄弟,顺带补充住处)`,
      questions: [
        {
          id: 'g34-1',
          type: 'single',
          stem: 'He failed the exam, ___ disappointed his parents.',
          options: [
            'A) that',
            'B) which',
            'C) who',
            'D) what',
          ],
          answer: 1,
          explain:
            '**B) which**。逗号后为非限制性定语从句,**不能用 that**;which 在此指代前面整个主句「考试不及格」这件事。',
        },
        {
          id: 'g34-2',
          type: 'single',
          stem: 'I have a friend ___ mother is a famous painter.',
          options: [
            'A) who',
            'B) whose',
            'C) which',
            'D) that',
          ],
          answer: 1,
          explain:
            '**B) whose**。whose 表「所属关系」,修饰 friend,意为「他朋友的母亲」;whose 既可指人也可指物。',
        },
        {
          id: 'g34-3',
          type: 'judge',
          stem: '非限制性定语从句中,作宾语的关系代词可以省略。',
          answer: 1,
          explain:
            '**错误**。非限制性定语从句中关系词**一律不可省略**,无论作主语还是宾语。',
        },
      ],
    },
    reading: {
      title: 'A Gift from Nature',
      text: `Tea, which is one of the most popular drinks in the world, was first discovered in China thousands of years ago. The leaves, which come from a plant called Camellia, are carefully dried and processed. Ancient Chinese people, who regarded tea as a medicine at first, later turned it into a daily drink. Today, many countries have their own tea cultures, which often reflect local customs. Britain, where afternoon tea became a tradition, is a good example. It is no surprise that tea, which connects people across the world, remains a true gift from nature.`,
      questions: [
        {
          id: 'r34-1',
          type: 'single',
          stem: 'How did ancient Chinese people first regard tea?',
          options: [
            'A) As a daily drink',
            'B) As a medicine',
            'C) As a gift for friends',
            'D) As a kind of food',
          ],
          answer: 1,
          explain:
            '**B**。文中 "Ancient Chinese people, who regarded tea as a medicine at first",即最初把茶当作药。',
        },
        {
          id: 'r34-2',
          type: 'blank',
          stem: 'The word "reflect" most likely means ___ (中文).',
          answer: '反映 / 体现',
          explain: 'reflect 此处意为「反映」,即茶文化反映了当地的习俗。',
        },
        {
          id: 'r34-3',
          type: 'judge',
          stem: 'Britain is given as an example of a country with a strong tea culture.',
          answer: 0,
          explain:
            '**正确**。文中 "Britain, where afternoon tea became a tradition, is a good example",以英国下午茶为例。',
        },
      ],
    },
    translation: [
      {
        en: 'My father, who is 60 years old, still runs every morning.',
        zh: '我父亲今年 60 岁了,仍然每天早上跑步。',
        tip: '逗号隔开为非限制性定语从句,不能用 that。',
      },
      {
        en: 'The Great Wall, which is the symbol of China, attracts millions of visitors.',
        zh: '长城是中国的象征,每年吸引数百万游客。',
        tip: 'which 指代 the Great Wall,非限制性。',
      },
      {
        en: 'He passed all the exams, which made his family proud.',
        zh: '他通过了所有考试,这让他的家人很骄傲。',
        tip: 'which 指代整个主句内容。',
      },
    ],
    writing: {
      prompt:
        '用非限制性定语从句(逗号 + who/which)写一段话,介绍「你家乡的一种特色事物」。',
      template:
        'My hometown is famous for ____, which ____. People there, who ____, often ____. ____, which ____, is worth a visit.',
      sample:
        'My hometown is famous for a kind of rice cake, which tastes soft and sweet. People there, who have made it for centuries, often serve it at festivals. The old market, which was built in the Qing dynasty, is worth a visit.',
      keyWords: ['which', 'who', 'famous'],
    },
  },

  // ========================= Day 35 状语从句:时间/地点 =========================
  {
    day: 35,
    title: 'Adverbial Clauses (I) · 时间与地点状语从句',
    vocab: [],
    grammar: {
      title: '状语从句 · 时间与地点',
      body: `**时间状语从句** 常见连词:
- **when**(当……时)、**while**(当……期间,从句多用进行时)、**as**(一边/正当)。
- **before**(在……前)、**after**(在……后)。
- **since**(自从):主句完成时/一般现在时 + 从句一般过去时。
- **until / till**(直到):not ... until「直到……才」。
- **as soon as / the moment / once**(一……就)。
- **no sooner ... than / hardly ... when**(刚……就,主句倒装 + 过去完成时)。

**地点状语从句**:
- **where**(在……的地方)、**wherever**(无论哪里)。
- 区别:**where 引导定语从句**需有先行名词;**引导地点状语从句**则无先行词。
  - Put the box **where** it was.(状语)
  - Put it in the box **where** (= in which) it belongs.(定语,有先行词 box)

主将从现:时间/条件状语从句中,主句用将来时,从句用**现在时**表将来。`,
      questions: [
        {
          id: 'g35-1',
          type: 'single',
          stem: 'I will wait here ___ you come back.',
          options: [
            'A) until',
            'B) since',
            'C) while',
            'D) as',
          ],
          answer: 0,
          explain:
            '**A) until**。句意为「我会一直等到你回来」,until 表「直到」,符合语义;主将从现,从句用现在时。',
        },
        {
          id: 'g35-2',
          type: 'single',
          stem: 'He had hardly sat down ___ the phone rang.',
          options: [
            'A) when',
            'B) than',
            'C) before',
            'D) as',
          ],
          answer: 0,
          explain:
            '**A) when**。固定搭配 **hardly ... when**「刚……就」,主句用过去完成时;注意 no sooner 后才用 than。',
        },
        {
          id: 'g35-3',
          type: 'judge',
          stem: '在 "When he will arrive tomorrow, we will discuss it" 中,从句时态正确。',
          answer: 1,
          explain:
            '**错误**。时间状语从句中,主将从现,**从句不能使用 will**,应为 "When he arrives tomorrow ..."。',
        },
      ],
    },
    reading: {
      title: 'A Walk in the Forest',
      text: `Whenever I feel stressed, I take a walk in the forest near my home. As I step under the trees, the noise of the city slowly disappears. Where the path turns, a small stream runs quietly between the rocks. While birds sing above me, I often lose my sense of time. Before I realize it, an hour has passed. Once I reach the open field at the end of the path, I feel completely refreshed. Wherever there are trees and fresh air, there is peace for the mind.`,
      questions: [
        {
          id: 'r35-1',
          type: 'single',
          stem: 'What happens when the writer steps under the trees?',
          options: [
            'A) The birds stop singing',
            'B) The city noise slowly disappears',
            'C) The stream dries up',
            'D) The path turns dark',
          ],
          answer: 1,
          explain:
            '**B**。文中 "As I step under the trees, the noise of the city slowly disappears" 直接对应。',
        },
        {
          id: 'r35-2',
          type: 'blank',
          stem: 'The word "refreshed" most likely means ___ (中文).',
          answer: '精神焕发的 / 恢复精力的',
          explain: 'refreshed 意为「精神恢复的、清爽的」,与 stressed 形成对比。',
        },
        {
          id: 'r35-3',
          type: 'judge',
          stem: 'The passage suggests that nature can bring peace of mind.',
          answer: 0,
          explain:
            '**正确**。结尾 "Wherever there are trees and fresh air, there is peace for the mind" 明确点题。',
        },
      ],
    },
    translation: [
      {
        en: 'I will call you as soon as I arrive in Beijing.',
        zh: '我一到北京就给你打电话。',
        tip: 'as soon as「一……就」,主将从现。',
      },
      {
        en: 'He did not leave the office until he finished all the work.',
        zh: '直到完成所有工作他才离开办公室。',
        tip: 'not ... until「直到……才」。',
      },
      {
        en: 'Put the chair where it was.',
        zh: '把椅子放回原处。',
        tip: 'where 引导地点状语从句,无先行名词。',
      },
    ],
    writing: {
      prompt:
        '用时间或地点状语从句写一段话,描述「你放松身心的一个习惯或场所」。',
      template:
        'Whenever ____, I ____. While ____, I ____. Before ____, I ____. Where ____, there is ____.',
      sample:
        'Whenever I feel tired, I read a few pages of a novel. While I read, I forget my worries. Before I go to bed, I always write down one good thing from the day. Where books are, there is comfort.',
      keyWords: ['whenever', 'while', 'where'],
    },
  },

  // ========================= Day 36 状语从句:原因/结果 =========================
  {
    day: 36,
    title: 'Adverbial Clauses (II) · 原因与结果状语从句',
    vocab: [],
    grammar: {
      title: '状语从句 · 原因与结果',
      body: `**原因状语从句**:
- **because**(因为):语气最强,可回答 why;从句**不可**与 not...but 连用导致重复。
- **since / as**(既然/由于):侧重**已知的、显然的原因**,不回答 why。
- **now (that)**(既然):口语常用。
- **for**:并列连词,表补充推断,**只能放在句中,不能位于句首**。

**结果状语从句**:
- **so ... that**(如此……以至于):so + 形容词/副词。
- **such ... that**(如此……以至于):such + (a/an) + 形容词 + 名词。
- **so that** 也可表「结果」(= 因此),与表目的(so that + may/can)区分。

常见考点:
- **so + many/much/few/little + 名词 + that**(此时不用 such)。
- because 与 because of 的转换:because + 句子;because of + 名词/名词短语。`,
      questions: [
        {
          id: 'g36-1',
          type: 'single',
          stem: 'He was ___ tired that he fell asleep at his desk.',
          options: [
            'A) so',
            'B) such',
            'C) too',
            'D) very',
          ],
          answer: 0,
          explain:
            '**A) so**。so + 形容词 (tired) + that ...「如此累以至于……」;such 后接名词。',
        },
        {
          id: 'g36-2',
          type: 'single',
          stem: '___ everybody is here, let\'s start the meeting.',
          options: [
            'A) Because',
            'B) Since',
            'C) For',
            'D) So',
          ],
          answer: 1,
          explain:
            '**B) Since**。「既然大家都到了」是已知事实,since/as 语气比 because 弱,常用于引出显然原因;for 不能置于句首。',
        },
        {
          id: 'g36-3',
          type: 'judge',
          stem: '在 "The book is such interesting that I read it twice" 中,such 的用法正确。',
          answer: 1,
          explain:
            '**错误**。interesting 是形容词,前应直接用 **so interesting**;such 需后接名词,如 such an interesting book。',
        },
      ],
    },
    reading: {
      title: 'The Price of Speed',
      text: `Because modern life moves so fast, many people feel constantly tired. They sleep so little that their health begins to suffer. Since employers often value efficiency above all else, workers hesitate to rest. Such pressure is so common that some people mistake it for normal life. However, because the body has its own rhythm, ignoring rest will finally lead to illness. As a result, more doctors now advise people to slow down. Real productivity comes not from speed alone, but from a balanced life.`,
      questions: [
        {
          id: 'r36-1',
          type: 'single',
          stem: 'Why do workers hesitate to rest?',
          options: [
            'A) Because they are not tired',
            'B) Because employers value efficiency above all else',
            'C) Because they have too much free time',
            'D) Because doctors forbid rest',
          ],
          answer: 1,
          explain:
            '**B**。文中 "Since employers often value efficiency above all else, workers hesitate to rest" 直接对应。',
        },
        {
          id: 'r36-2',
          type: 'blank',
          stem: 'The word "rhythm" most likely means ___ (中文).',
          answer: '节奏 / 规律',
          explain: 'rhythm 意为「节奏、规律」。身体有自己的 rhythm(生理节律)。',
        },
        {
          id: 'r36-3',
          type: 'judge',
          stem: 'The passage argues that real productivity comes from speed alone.',
          answer: 1,
          explain:
            '**错误**。结尾说真正的效率「not from speed alone, but from a balanced life」,即不只是靠速度,而是平衡生活。',
        },
      ],
    },
    translation: [
      {
        en: 'He was so excited that he could hardly speak.',
        zh: '他激动得几乎说不出话来。',
        tip: 'so + 形容词 + that 表结果。',
      },
      {
        en: 'Since you have made up your mind, I will support you.',
        zh: '既然你已经下定决心,我会支持你。',
        tip: 'since「既然」,引出已知情况。',
      },
      {
        en: 'The flight was delayed because of the heavy fog.',
        zh: '航班因大雾延误。',
        tip: 'because of + 名词短语;若用从句则用 because it was foggy。',
      },
    ],
    writing: {
      prompt:
        '用原因和结果状语从句(because / since / so...that)写一段话,分析「现代人压力大、健康受损」。',
      template:
        'Because ____, many people ____. They are so ____ that ____. Since ____, we should ____.',
      sample:
        'Because city life is so busy, many people ignore their health. They are so tired that they fall ill easily. Since health is the foundation of everything, we should learn to rest and slow down.',
      keyWords: ['because', 'so ... that', 'since'],
    },
  },

  // ========================= Day 37 状语从句:条件/让步/目的 =========================
  {
    day: 37,
    title: 'Adverbial Clauses (III) · 条件、让步与目的状语从句',
    vocab: [],
    grammar: {
      title: '状语从句 · 条件 / 让步 / 目的',
      body: `**条件状语从句**:
- **if**(如果)、**unless**(除非 = if ... not)。
- **as long as / so long as**(只要)、**in case**(万一)、**provided that**(假如)。
- 主将从现:主句将来时,从句现在时表将来。
- 真实条件句 vs 虚拟语气(本课先掌握真实条件)。

**让步状语从句**:
- **although / though**(虽然),**不能与 but 同时使用**(可用 yet/still)。
- **even if / even though**(即使)。
- **no matter + 疑问词 = 疑问词-ever**:no matter what = whatever(无论什么)。
- **while**(尽管,放句首):While I respect him, I disagree.

**目的状语从句**:
- **so that**(以便)、**in order that**(为了),从句常用 can/could/may/might。
- 对比:so as to / in order to + 动词原形(不是从句)。

注意:
- although 与 but 不可并用:❌ Although he is poor, but he is happy. ✅ Although he is poor, he is happy.`,
      questions: [
        {
          id: 'g37-1',
          type: 'single',
          stem: 'You will miss the train ___ you hurry up.',
          options: [
            'A) if',
            'B) unless',
            'C) because',
            'D) as long as',
          ],
          answer: 1,
          explain:
            '**B) unless**。句意为「除非你快点,否则会错过火车」,unless = if ... not,符合逻辑;若用 if 则语义相反。',
        },
        {
          id: 'g37-2',
          type: 'single',
          stem: '___ he is very old, he still works hard.',
          options: [
            'A) Although',
            'B) Because',
            'C) If',
            'D) Unless',
          ],
          answer: 0,
          explain:
            '**A) Although**。「虽然他年纪很大,(但)仍努力工作」表让步,用 although;注意主句不再用 but。',
        },
        {
          id: 'g37-3',
          type: 'judge',
          stem: '在 "Although it rained heavily, but we still went out" 中,连词使用正确。',
          answer: 1,
          explain:
            '**错误**。although 与 but **不能同时使用**,应删去 but,改为 "Although it rained heavily, we still went out"。',
        },
      ],
    },
    reading: {
      title: 'Never Too Late to Learn',
      text: `Even though Mr. Zhang is already seventy, he decided to learn English. His friends laughed at first, because they thought learning a new language was only for the young. Unless he kept practicing every day, he knew he would forget what he had learned. Although progress was slow, he never gave up. He joined an online group so that he could practice speaking with others. No matter how difficult the grammar seemed, he treated each mistake as a step forward. As long as one keeps learning, he believes, life never really grows old.`,
      questions: [
        {
          id: 'r37-1',
          type: 'single',
          stem: 'Why did his friends laugh at first?',
          options: [
            'A) Because they thought language learning was only for the young',
            'B) Because his English was excellent',
            'C) Because he gave up quickly',
            'D) Because he refused to practice',
          ],
          answer: 0,
          explain:
            '**A**。文中 "they thought learning a new language was only for the young" 直接对应。',
        },
        {
          id: 'r37-2',
          type: 'blank',
          stem: 'The phrase "treated each mistake as a step forward" means ___ (中文).',
          answer: '把每个错误当成前进的一步',
          explain: 'treat ... as「把……当作」,作者把错误视为进步的阶梯。',
        },
        {
          id: 'r37-3',
          type: 'judge',
          stem: 'Mr. Zhang believes that life grows old once learning stops.',
          answer: 0,
          explain:
            '**正确**。结尾 "As long as one keeps learning ... life never really grows old",反过来说明停止学习才会真正衰老。',
        },
      ],
    },
    translation: [
      {
        en: 'I will lend you the book as long as you return it on time.',
        zh: '只要你按时归还,我就把书借给你。',
        tip: 'as long as「只要」,引导条件状语从句。',
      },
      {
        en: 'Although the task was difficult, we finished it on time.',
        zh: '尽管任务困难,我们还是按时完成了。',
        tip: 'although「虽然」,主句不再用 but。',
      },
      {
        en: 'He got up early so that he could catch the first bus.',
        zh: '他早起以便能赶上头班车。',
        tip: 'so that + could 表目的。',
      },
    ],
    writing: {
      prompt:
        '用条件、让步和目的状语从句(if/unless/although/so that)写一段话,谈「坚持做一件事的经历」。',
      template:
        'Unless ____, you will never ____. Although ____, I ____. I did this so that ____.',
      sample:
        'Unless you practice every day, you will never master a language. Although I was busy, I read for fifteen minutes each evening. I did this so that I could finally read an English novel on my own.',
      keyWords: ['unless', 'although', 'so that'],
    },
  },

  // ========================= Day 38 从句综合辨析 =========================
  {
    day: 38,
    title: 'Clause Review · 从句综合辨析',
    vocab: [],
    grammar: {
      title: '从句综合辨析',
      body: `四大名词性从句与定语、状语从句的区别,常在选择题中混淆。辨析要点:

**1. 名词性从句 vs 定语从句**:
- 名词性从句(主/宾/表/同位)的 **that 只起连接,不充当成分**;
- 定语从句的关系词**必须充当成分**(主/宾/状)。
- what 引导名词性从句时,**what 本身即先行词**(= the thing that),前面不再有名词;定语从句必须有先行词。

**2. that vs what**:
- **what** = the thing(s) that,前面无先行词,what 必作成分。
- **that** 名词性从句中不作成分;定语从句中作成分。

**3. whether vs if**:
- 主语/表语/同位语从句、介词后 → **只用 whether**。
- 宾语从句中两者常可互换,但 or not 紧跟、不定式前用 whether。

**4. 同位语从句 vs 定语从句**:
- 同位语 that 不作成分,解释名词**内容**;定语 that 作成分,**限定**名词。

**5. 状语从句 vs 定语从句**:
- where 引导状语从句**无先行词**;引导定语从句**有先行名词**。`,
      questions: [
        {
          id: 'g38-1',
          type: 'single',
          stem: '___ surprised me most was ___ he had learned Chinese by himself.',
          options: [
            'A) That; that',
            'B) What; that',
            'C) What; what',
            'D) That; what',
          ],
          answer: 1,
          explain:
            '**B) What; that**。第一空:主语从句缺主语,用 what(= the thing that);第二空:表语从句结构完整,that 仅作连接,不充当成分。',
        },
        {
          id: 'g38-2',
          type: 'single',
          stem: 'The fact ___ he told us yesterday is very important.',
          options: [
            'A) that',
            'B) which',
            'C) what',
            'D) whether',
          ],
          answer: 1,
          explain:
            '**B) which**。从句 "he told us" 缺宾语,关系词须作成分,故为定语从句,that/which 均可;题干要求选 which 最稳妥,体现「定语从句 that 作成分」的区别。',
        },
        {
          id: 'g38-3',
          type: 'judge',
          stem: '在 "The news that he told me is true" 与 "The news that he won is true" 中,两个 that 引导的从句类型相同。',
          answer: 1,
          explain:
            '**错误**。前者 told 缺宾语,that 作成分,为**定语从句**;后者 "he won" 结构完整,that 不作成分,解释 news 内容,为**同位语从句**。',
        },
      ],
    },
    reading: {
      title: 'A Lesson in Honesty',
      text: `What happened in Mr. Lee\'s shop taught everyone a lesson. One morning a boy returned a wallet that he had found on the floor. What moved Mr. Lee was that the boy refused any reward. The news that an honest boy had appeared in the neighborhood spread quickly. Where honesty is valued, trust grows naturally. Although the wallet contained a lot of money, the boy did not keep a single coin. That is why people still remember his name years later. We can learn from him that small acts of honesty shape a society.`,
      questions: [
        {
          id: 'r38-1',
          type: 'single',
          stem: 'What moved Mr. Lee?',
          options: [
            'A) The boy\'s reward',
            'B) The boy\'s refusal of any reward',
            'C) The money in the wallet',
            'D) The boy\'s name',
          ],
          answer: 1,
          explain:
            '**B**。文中 "What moved Mr. Lee was that the boy refused any reward",即男孩拒绝任何酬谢让李先生感动。',
        },
        {
          id: 'r38-2',
          type: 'blank',
          stem: 'The word "reward" most likely means ___ (中文).',
          answer: '奖赏 / 报酬',
          explain: 'reward 作名词意为「奖赏、酬谢」。男孩拒绝 reward,即拒收酬金。',
        },
        {
          id: 'r38-3',
          type: 'judge',
          stem: 'The passage suggests that honesty is important to society.',
          answer: 0,
          explain:
            '**正确**。结尾 "small acts of honesty shape a society"(小小的诚实之举塑造社会),明确点题。',
        },
      ],
    },
    translation: [
      {
        en: 'What he said at the meeting made everyone think deeply.',
        zh: '他在会上说的话让每个人深思。',
        tip: 'what 引导主语从句,= the things that。',
      },
      {
        en: 'The question whether we should accept the offer remains open.',
        zh: '我们是否该接受这个提议的问题仍未解决。',
        tip: 'whether 引导同位语从句,解释 question。',
      },
      {
        en: 'Where there is a will, there is a way.',
        zh: '有志者事竟成。',
        tip: 'where 引导地点状语从句,无先行词。',
      },
    ],
    writing: {
      prompt:
        '综合运用名词性从句、定语从句与状语从句,写一段话谈「一次让你受益的教训」。',
      template:
        'What I learned from ____ is that ____. The person who ____ taught me that ____. Although ____, I now believe that ____.',
      sample:
        'What I learned from that failure is that honesty matters more than success. The person who forgave me taught me that trust is hard to rebuild. Although I once lied, I now believe that facing the truth is the only way forward.',
      keyWords: ['what', 'who', 'although'],
    },
  },

  // ========================= Day 39 长难句拆解 =========================
  {
    day: 39,
    title: 'Sentence Analysis · 长难句拆解',
    vocab: [],
    grammar: {
      title: '长难句拆解(学位英语阅读重点)',
      body: `学位英语阅读常出现含**多个从句、插入成分、并列结构**的长难句。拆解四步法:

- **一找主干**:主语 + 谓语 + 宾/表,先剥离修饰成分。
- **二数从句**:识别引导词(that/which/who/when/where/what...),标记每类从句。
- **三看插入**:两个逗号或两个破折号之间多为**插入语**,先删除不影响主句。
- **四理关系**:注意 and/but/or 连接的并列结构,以及 not only...but also / not...but 范围。

常用符号:
- 逗号 → 非限制成分或并列;
- 破折号 → 解释说明;
- 分号 → 并列分句。

示例:
> The book **that** I bought yesterday, **which** cost me fifty yuan, is about a boy **who** travels through time.
- 主干:The book is about a boy.
- that 从句(定语)修饰 book;
- which 从句(非限制性定语)补充 book 价格;
- who 从句(定语)修饰 boy。

策略:**先抓主干,再分层,最后整合句意**。`,
      questions: [
        {
          id: 'g39-1',
          type: 'single',
          stem: '分析 "The student who passed all the exams, which surprised everyone, will give a speech." 的主干是:',
          options: [
            'A) The student passed all the exams',
            'B) The student will give a speech',
            'C) Everyone was surprised',
            'D) The exams were difficult',
          ],
          answer: 1,
          explain:
            '**B) The student will give a speech**。剥去 who / which 两个定语从句后,主干为「The student ... will give a speech」。',
        },
        {
          id: 'g39-2',
          type: 'single',
          stem: '在 "The fact that he admitted his mistake shows that he is honest" 中,第一个 that 引导的是:',
          options: [
            'A) 定语从句',
            'B) 同位语从句',
            'C) 宾语从句',
            'D) 主语从句',
          ],
          answer: 1,
          explain:
            '**B) 同位语从句**。第一个 that 紧跟抽象名词 the fact,"he admitted his mistake" 结构完整,that 不作成分,解释 fact 的内容;第二个 that 才是宾语从句(shows 的宾语)。',
        },
        {
          id: 'g39-3',
          type: 'judge',
          stem: '长难句拆解时,应先分析所有从句,再确定句子主干。',
          answer: 1,
          explain:
            '**错误**。正确顺序是**先抓主干**(找主谓宾),再分析各从句;先主干后细节,才能避免迷失。',
        },
      ],
    },
    reading: {
      title: 'The Power of Habits',
      text: `Habits, which shape our daily lives more than we realize, are formed through repeated actions. The discovery that small changes can lead to big results has encouraged many people to build better routines. When a person repeats an action every day, the brain, which tries to save energy, turns that action into an automatic habit. What seems difficult at first becomes easy once it is stored in our memory. Although breaking a bad habit takes time, scientists believe that anyone who keeps trying can finally succeed. That is why understanding habits is the first step toward self-improvement.`,
      questions: [
        {
          id: 'r39-1',
          type: 'single',
          stem: 'According to the passage, why does the brain turn repeated actions into habits?',
          options: [
            'A) Because it wants to forget them',
            'B) Because it tries to save energy',
            'C) Because it dislikes new things',
            'D) Because it cannot learn anything new',
          ],
          answer: 1,
          explain:
            '**B**。文中 "the brain, which tries to save energy, turns that action into an automatic habit" 直接对应。',
        },
        {
          id: 'r39-2',
          type: 'blank',
          stem: 'The word "automatic" most likely means ___ (中文).',
          answer: '自动的 / 无意识的',
          explain: 'automatic 意为「自动的」。习惯一旦形成,就成了 automatic(不假思索即可完成)的动作。',
        },
        {
          id: 'r39-3',
          type: 'judge',
          stem: 'The passage suggests that breaking a bad habit is impossible.',
          answer: 1,
          explain:
            '**错误**。文中说 "Although breaking a bad habit takes time, scientists believe that anyone who keeps trying can finally succeed",即虽需时间,但坚持就能成功,并非不可能。',
        },
      ],
    },
    translation: [
      {
        en: 'The discovery that habits shape our lives has changed how we think about success.',
        zh: '习惯塑造我们的生活这一发现,改变了我们对成功的看法。',
        tip: 'that 引导同位语从句,how 引导宾语从句。',
      },
      {
        en: 'What seems impossible today may become easy tomorrow.',
        zh: '今天看来不可能的事,明天也许会变得容易。',
        tip: 'what 引导主语从句,= the thing that。',
      },
      {
        en: 'The book that I read last week, which was written by a young author, is very inspiring.',
        zh: '我上周读的那本书是一位年轻作者写的,非常鼓舞人心。',
        tip: 'that 引导限制性定语从句,which 引导非限制性定语从句。',
      },
    ],
    writing: {
      prompt:
        '尝试写一个包含**两个不同类型从句**的复合长句,描述「你对学习英语的体会」,再拆解它。',
      template:
        'What I have learned from studying English is that ____. The habit, which ____, helps me ____. Although ____, I believe that ____.',
      sample:
        'What I have learned from studying English is that progress comes from daily effort. The habit, which once felt boring, helps me think more clearly. Although the road is long, I believe that every small step counts.',
      keyWords: ['what', 'which', 'although'],
    },
  },
]
