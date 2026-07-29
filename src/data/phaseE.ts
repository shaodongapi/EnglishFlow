import type { DayPlan } from '../types'

// Phase E: 考前冲刺 (Day 52 ~ Day 60)
export const PHASE_E: DayPlan[] = [
  // ============ Day 52 ============
  {
    day: 52,
    title: 'Subject-Verb Agreement · 主谓一致易错点',
    vocab: [],
    grammar: {
      title: '主谓一致三大原则',
      body: `主谓一致是学位英语高频考点,抓住三条原则:

- **语法一致**:单数主语用单数谓语,复数主语用复数谓语。
- **意义一致**:按实际意义判断。family, team, class, audience 等**集合名词**作整体看用单数,强调个体成员用复数。
- **就近原则**:either...or..., neither...nor..., not only...but also... 中,谓语与**最近的主语**一致。

**易错点**:
- each, every + 单数名词 → 谓语用**单数**。
- one of + 复数名词 → 谓语用**单数**(主语是 one)。
- the number of + 复数名词 → 单数;a number of + 复数名词 → 复数。
- 表示时间、金钱、距离的复数名词作整体 → **单数**(Ten dollars **is** enough)。`,
      questions: [
        {
          id: 'g52-1',
          type: 'single',
          stem: 'Each of the students ___ a dictionary.',
          options: ['A) have', 'B) has', 'C) having', 'D) are having'],
          answer: 1,
          explain:
            '**B) has**。each 作主语(或 each of + 复数名词)谓语一律用单数,故用 has。',
        },
        {
          id: 'g52-2',
          type: 'single',
          stem: 'Neither the teacher nor the students ___ informed of the change.',
          options: ['A) was', 'B) is', 'C) were', 'D) has been'],
          answer: 2,
          explain:
            '**C) were**。neither...nor... 就近原则,谓语与最近主语 the students(复数)一致,用 were。',
        },
        {
          id: 'g52-3',
          type: 'single',
          stem: 'The number of cars in the city ___ increasing rapidly.',
          options: ['A) are', 'B) is', 'C) have been', 'D) were'],
          answer: 1,
          explain:
            '**B) is**。the number of + 复数名词表"……的数量",中心词是 number(单数),谓语用 is。比较:a number of cars **are**...',
        },
      ],
    },
    reading: {
      title: 'The Library of the Future',
      text: `Public libraries are changing fast. Instead of only lending books, many now offer free internet access, online courses, and even 3D printing. Librarians say their role is no longer just to keep books, but to help people find information in all forms. In small towns, the library often serves as the only free public space where everyone, from children to the elderly, can read, learn, and meet neighbors. Experts believe that far from disappearing, libraries will become even more important as digital gaps widen.`,
      questions: [
        {
          id: 'r52-1',
          type: 'single',
          stem: 'According to the passage, the role of librarians has ___.',
          options: [
            'A) remained the same for years',
            'B) expanded beyond keeping books',
            'C) become less important',
            'D) focused only on 3D printing',
          ],
          answer: 1,
          explain:
            '**B**。原文 "their role is no longer just to keep books, but to help people find information in all forms",说明馆员角色已扩展。',
        },
        {
          id: 'r52-2',
          type: 'single',
          stem: 'Why will libraries become more important according to experts?',
          options: [
            'A) Because books are disappearing',
            'B) Because digital gaps are widening',
            'C) Because 3D printing is cheap',
            'D) Because the internet is free',
          ],
          answer: 1,
          explain:
            '**B**。末句 "as digital gaps widen" 表明数字鸿沟扩大使图书馆更关键。',
        },
        {
          id: 'r52-3',
          type: 'judge',
          stem: '判断:In small towns, the library is sometimes the only free public space.',
          answer: 0,
          explain:
            '**正确**。原文 "the library often serves as the only free public space",与陈述一致。',
        },
      ],
    },
    translation: [
      {
        en: 'The number of tourists has doubled in the past five years.',
        zh: '过去五年里游客的数量翻了一番。',
        tip: 'the number of + 复数名词,中心词为 number,谓语用单数。',
      },
      {
        en: 'Either you or I am going to attend the meeting.',
        zh: '要么你要么我将去参加会议。',
        tip: 'either...or... 就近原则,谓语与最近主语 I 一致,用 am。',
      },
      {
        en: 'Ten miles is a long distance for a young child to walk.',
        zh: '十英里对一个小孩来说是一段很长的步行距离。',
        tip: '表示距离的复数名词作整体看,谓语用单数。',
      },
    ],
    writing: {
      prompt:
        '请以 "The Place I Want to Visit" 为题,写一段约 60 词的短文,说明你想去的地方及理由。',
      template:
        'The place I want to visit most is ____. I have read a lot about its ____ and ____. If I have the chance, I will ____.',
      sample:
        'The place I want to visit most is Beijing. I have read a lot about its long history and rich culture. If I have the chance, I will visit the Great Wall, the Palace Museum, and taste the local food. I believe the trip will broaden my horizons and leave me with unforgettable memories.',
      keyWords: ['history', 'culture', 'chance', 'broaden', 'unforgettable'],
    },
  },

  // ============ Day 53 ============
  {
    day: 53,
    title: 'Tense & Voice · 时态与语态易错点',
    vocab: [],
    grammar: {
      title: '常考时态与被动语态',
      body: `时态语态是学位英语必考点,务必分清:

- **现在完成时**(have/has + 过去分词):强调过去动作对现在的影响,或持续到现在。标志词:so far, recently, already, yet, since, for。
- **过去完成时**(had + 过去分词):强调"过去的过去",常用于 by the end of last..., before + 过去时。
- **现在完成进行时**(have/has been doing):强调动作从过去持续到现在且可能继续。
- **被动语态**(be + 过去分词):不知道或不必说出动作发出者时使用。

**易错点**:
- by + 过去时间 → 用过去完成时;by + 将来时间 → 用将来完成时(will have done)。
- 瞬间动词(buy, die, join, marry)不能与一段时间连用,需转换表达。`,
      questions: [
        {
          id: 'g53-1',
          type: 'single',
          stem: 'By the end of last year, they ___ more than 10,000 trees.',
          options: ['A) planted', 'B) had planted', 'C) have planted', 'D) would plant'],
          answer: 1,
          explain:
            '**B) had planted**。by the end of last year 是过去时间点,表示在该点之前已完成,用过去完成时。',
        },
        {
          id: 'g53-2',
          type: 'single',
          stem: 'The bridge ___ last year and now is open to traffic.',
          options: [
            'A) completed',
            'B) has completed',
            'C) was completed',
            'D) is completed',
          ],
          answer: 2,
          explain:
            '**C) was completed**。桥是被完成的,需用被动语态;时间状语 last year 表过去,故 was completed。',
        },
        {
          id: 'g53-3',
          type: 'single',
          stem: 'I ___ my key everywhere, but I cannot find it.',
          options: [
            'A) looked for',
            'B) have looked for',
            'C) had looked for',
            'D) am looking for',
          ],
          answer: 1,
          explain:
            '**B) have looked for**。强调从过去持续到现在的影响(到现在还没找到),用现在完成时。',
        },
      ],
    },
    reading: {
      title: 'A New Use for Old Phones',
      text: `When people buy a new smartphone, the old one is often thrown into a drawer and forgotten. But old phones still have value. Some charities collect them and send them to rural schools, where children use them to learn English and math. Other phones are taken apart, and the metals inside, such as gold and copper, are reused. Experts remind us that throwing phones away not only wastes resources but also pollutes the soil and water. Recycling, they say, is a small step with a big impact.`,
      questions: [
        {
          id: 'r53-1',
          type: 'single',
          stem: 'What is the passage mainly about?',
          options: [
            'A) How to buy a new smartphone',
            'B) The value of recycling old phones',
            'C) Why smartphones pollute water',
            'D) The history of mobile phones',
          ],
          answer: 1,
          explain:
            '**B**。通篇讲旧手机的再利用价值(捐赠、回收金属),核心是 recycling 的意义。',
        },
        {
          id: 'r53-2',
          type: 'single',
          stem: 'Which of the following is NOT mentioned as a way to reuse old phones?',
          options: [
            'A) Sending them to rural schools',
            'B) Taking out metals for reuse',
            'C) Selling them at a low price',
            'D) Donating through charities',
          ],
          answer: 2,
          explain:
            '**C**。文中未提及低价出售旧手机,属无中生有。',
        },
        {
          id: 'r53-3',
          type: 'blank',
          stem: 'The word "impact" in the last sentence most likely means ___ (中文).',
          answer: '影响 / 作用',
          explain:
            'a small step with a big impact 意为"小举措大影响",impact 表"影响、作用"。',
        },
      ],
    },
    translation: [
      {
        en: 'The novel has been translated into more than twenty languages.',
        zh: '这部小说已被翻译成二十多种语言。',
        tip: '现在完成时的被动语态:have/has been + 过去分词。',
      },
      {
        en: 'When I arrived at the station, the train had already left.',
        zh: '当我到达车站时,火车已经开走了。',
        tip: '过去的过去用过去完成时 had done。',
      },
      {
        en: 'This problem is being discussed at the meeting now.',
        zh: '这个问题现在正在会议上讨论。',
        tip: '现在进行时的被动语态:is/are being + 过去分词。',
      },
    ],
    writing: {
      prompt:
        '请以 "How I Learn English" 为题,写一段约 60 词的短文,介绍你学习英语的方法。',
      template:
        'I learn English in several ways. First, I ____ every morning. Second, I often ____ with my classmates. Finally, I ____ to improve my listening.',
      sample:
        'I learn English in several ways. First, I read English aloud for twenty minutes every morning. Second, I often practice speaking with my classmates after class. Finally, I watch English movies and listen to English songs to improve my listening. Little by little, my English has improved a lot, and I am more confident than before.',
      keyWords: ['practice', 'improve', 'confident', 'method', 'aloud'],
    },
  },

  // ============ Day 54 ============
  {
    day: 54,
    title: 'Clause Connectors · 从句连接词辨析',
    vocab: [],
    grammar: {
      title: '定语从句与名词性从句连接词',
      body: `从句连接词是丢分重灾区,分清几组:

**定语从句**
- **who**(人,作主语/宾语),**whom**(人,作宾语),**whose**(表所属,"……的")。
- **which** 指物,**that** 指人或物;**介词后只能用 which / whom,不能用 that**。
- **where** = 介词 + which(地点),**when** = 介词 + which(时间)。
- 非限制性定语从句(有逗号)不能用 that。

**名词性从句**
- **that** 仅起连接作用,不充当成分,也无词义;**what** 既连接又作主语/宾语,意为"……的事情"。
- **whether / if** 表"是否";主语从句、表语从句、同位语从句优先 whether。
- **because** 引导表语从句(reason),区别于 why。`,
      questions: [
        {
          id: 'g54-1',
          type: 'single',
          stem: 'The house ___ Lu Xun once lived is now a museum.',
          options: ['A) that', 'B) which', 'C) where', 'D) what'],
          answer: 2,
          explain:
            '**C) where**。先行词为地点,且从句中 lived 是不及物动词,缺地点状语,用 where(= in which)。',
        },
        {
          id: 'g54-2',
          type: 'single',
          stem: 'This is the most interesting book ___ I have ever read.',
          options: ['A) which', 'B) that', 'C) what', 'D) who'],
          answer: 1,
          explain:
            '**B) that**。先行词被最高级修饰时,关系代词只能用 that,不能用 which。',
        },
        {
          id: 'g54-3',
          type: 'single',
          stem: '___ we need is more time and better tools.',
          options: ['A) That', 'B) Which', 'C) What', 'D) Whether'],
          answer: 2,
          explain:
            '**C) What**。主语从句中 need 缺宾语,what 既连接又作宾语,意为"我们所需要的"。',
        },
      ],
    },
    reading: {
      title: 'Why We Need Sleep',
      text: `Scientists used to believe sleep was a passive state, but modern research shows the brain is highly active at night. During deep sleep, the brain sorts and stores what we have learned during the day, which is why a good night's rest helps memory. Lack of sleep, on the other hand, weakens attention and slows reaction. Long-term shortage of sleep may even raise the risk of heart disease. Experts advise adults to sleep between seven and nine hours each night for the sake of both mind and body.`,
      questions: [
        {
          id: 'r54-1',
          type: 'single',
          stem: 'What does the passage say about the brain during sleep?',
          options: [
            'A) It stops working completely',
            'B) It is less active than before',
            'C) It remains active and stores memories',
            'D) It forgets everything learned',
          ],
          answer: 2,
          explain:
            '**C**。原文 "the brain sorts and stores what we have learned",说明大脑在睡眠中处理并储存记忆。',
        },
        {
          id: 'r54-2',
          type: 'judge',
          stem: '判断:Lack of sleep may increase the risk of heart disease.',
          answer: 0,
          explain:
            '**正确**。原文 "Long-term shortage of sleep may even raise the risk of heart disease",与陈述一致。',
        },
        {
          id: 'r54-3',
          type: 'blank',
          stem: 'Experts advise adults to sleep ___ each night (in numbers).',
          answer: '7 到 9 小时 / 七到九小时',
          explain:
            '原文 "between seven and nine hours each night",建议成人每晚睡 7-9 小时。',
        },
      ],
    },
    translation: [
      {
        en: 'The man who is talking to our teacher is my father.',
        zh: '正在和我们老师说话的那个人是我父亲。',
        tip: 'who 引导定语从句,修饰 the man,在从句中作主语。',
      },
      {
        en: 'What surprised me most was his honesty.',
        zh: '最让我吃惊的是他的诚实。',
        tip: 'What 引导主语从句,在从句中作主语,意为"……的事"。',
      },
      {
        en: 'I will never forget the day when I first came to Beijing.',
        zh: '我永远不会忘记我第一次来北京的那一天。',
        tip: 'when 引导定语从句,修饰 the day,= on which。',
      },
    ],
    writing: {
      prompt:
        '请以 "The Person I Admire Most" 为题,写一段约 60 词的短文。',
      template:
        'The person I admire most is ____, who ____. He / She has taught me that ____. I hope to ____ in the future.',
      sample:
        'The person I admire most is my mother, who has always worked hard for our family. She is kind, patient, and never complains about difficulties. She has taught me that honesty and effort are more important than success itself. I hope to become a person like her and make her proud in the future.',
      keyWords: ['admire', 'patient', 'honesty', 'effort', 'proud'],
    },
  },

  // ============ Day 55 ============
  {
    day: 55,
    title: 'Non-finite Verbs & Subjunctive · 非谓语与虚拟语气',
    vocab: [],
    grammar: {
      title: '非谓语动词与虚拟语气',
      body: `**非谓语动词**三种形式:
- **不定式**(to do):表目的、将来,常用在 decide, want, hope, refuse 等动词后。
- **动名词**(doing):作主语、宾语;enjoy, finish, avoid, mind, practice 后接 doing。
- **分词**(doing / done):doing 表主动或进行;done 表被动或完成。

**易错点**:
- remember to do(记得去做)/ remember doing(记得做过)。
- have sth. done(让某事被做)。
- 使役动词 make / let / have + 宾语 + **do**(省略 to);被动后要还原 to。

**虚拟语气**:
- **wish** + 过去时(与现在相反)/ had done(与过去相反)/ would do(与将来相反)。
- **if** 虚拟:与现在相反用过去时(be→were);与过去相反用 had done;主句对应 would/could + do/have done。
- **建议性动词**(suggest, insist, demand, order, propose)+ that + 主语 + **(should) + 动词原形**。`,
      questions: [
        {
          id: 'g55-1',
          type: 'single',
          stem: 'I remember ___ the door before I left home this morning.',
          options: ['A) to lock', 'B) locking', 'C) lock', 'D) to locking'],
          answer: 1,
          explain:
            '**B) locking**。remember doing 表示"记得做过某事"(动作已发生);remember to do 是"记得去做"。',
        },
        {
          id: 'g55-2',
          type: 'single',
          stem: 'The doctor suggested that he ___ smoking at once.',
          options: ['A) gives up', 'B) gave up', 'C) give up', 'D) would give up'],
          answer: 2,
          explain:
            '**C) give up**。suggest 后 that 从句用虚拟语气:(should) + 动词原形,故 give up。',
        },
        {
          id: 'g55-3',
          type: 'single',
          stem: 'I wish I ___ more time to review my lessons.',
          options: ['A) have', 'B) had', 'C) will have', 'D) would have'],
          answer: 1,
          explain:
            '**B) had**。wish 后与现在事实相反,从句用过去时,故 had。',
        },
      ],
    },
    reading: {
      title: 'Reading Aloud Helps You Learn',
      text: `Reading aloud may seem old-fashioned, but researchers keep finding new benefits. When you read a text out loud, your brain processes the words in three ways at once: by seeing, by speaking, and by hearing them. This makes memory much stronger than silent reading. Besides, reading aloud forces you to slow down and notice details you might otherwise skip, such as punctuation and tone. For language learners, it is also a simple way to practice pronunciation and build confidence in speaking.`,
      questions: [
        {
          id: 'r55-1',
          type: 'single',
          stem: 'According to the passage, reading aloud helps memory because ___.',
          options: [
            'A) it is faster than silent reading',
            'B) the brain processes words in three ways at once',
            'C) it requires no effort',
            'D) it helps you skip details',
          ],
          answer: 1,
          explain:
            '**B**。原文 "your brain processes the words in three ways at once: by seeing, by speaking, and by hearing"。',
        },
        {
          id: 'r55-2',
          type: 'single',
          stem: 'For language learners, reading aloud is a good way to ___.',
          options: [
            'A) practice pronunciation',
            'B) learn grammar rules',
            'C) write better essays',
            'D) save study time',
          ],
          answer: 0,
          explain:
            '**A**。末句 "a simple way to practice pronunciation and build confidence in speaking"。',
        },
        {
          id: 'r55-3',
          type: 'judge',
          stem: '判断:The passage suggests that silent reading is better than reading aloud.',
          answer: 1,
          explain:
            '**错误**。文章肯定朗读的多种好处,未说默读更好,陈述与文意相反。',
        },
      ],
    },
    translation: [
      {
        en: 'He avoided answering my question directly.',
        zh: '他避免直接回答我的问题。',
        tip: 'avoid 后接动名词 doing,不能接 to do。',
      },
      {
        en: 'If I were you, I would accept the offer.',
        zh: '如果我是你,我就会接受这个提议。',
        tip: '与现在事实相反的虚拟语气,从句用 were,主句用 would + 动词原形。',
      },
      {
        en: 'I had my computer repaired yesterday.',
        zh: '昨天我让人修了我的电脑。',
        tip: 'have sth. done 表示"让某事被别人做"。',
      },
    ],
    writing: {
      prompt:
        '请以 "If I Had More Free Time" 为题,用虚拟语气写一段约 60 词的短文。',
      template:
        'If I had more free time, I would ____. I would also ____, which ____. In a word, free time would make me ____.',
      sample:
        'If I had more free time, I would read more books and travel to places I have never been to. I would also learn to play the guitar, which has been my dream since childhood. In a word, free time would make me a happier and more relaxed person, and I would enjoy every minute of it.',
      keyWords: ['travel', 'dream', 'guitar', 'relaxed', 'enjoy'],
    },
  },

  // ============ Day 56 ============
  {
    day: 56,
    title: 'Cloze Strategy · 完形填空解题策略',
    vocab: [],
    grammar: {
      title: '完形填空三步法',
      body: `完形填空考查语境理解与词汇辨析,牢记三步:

- **第一步:通读首句,把握大意**。首句通常不设空,是全文的"钥匙"。先花 30 秒通读,弄清文体(记叙/说明/议论)与主线。
- **第二步:边读边填,瞻前顾后**。每空都要回到上下文寻找线索:
  - **同义复现**:原词或同义词在前后文中再次出现。
  - **逻辑关系**:but, however, so, therefore, while 等提示转折或因果。
  - **固定搭配**:depend on, be proud of, look forward to 等。
- **第三步:回读检查,确保通顺**。把所选答案代回全文,看逻辑、语法、感情色彩是否一致。

**时间分配**:每篇控制在 10~12 分钟,切忌在一空上耗时过久。`,
      questions: [
        {
          id: 'g56-1',
          type: 'single',
          stem: '完形填空解题的第一步应该是___。',
          options: [
            'A) 直接看选项逐空作答',
            'B) 通读全文,尤其首句,把握大意',
            'C) 先看最后一道题',
            'D) 把所有生词查清楚',
          ],
          answer: 1,
          explain:
            '**B**。首句不设空,通读全文把握大意是解题的钥匙,再结合上下文作答。',
        },
        {
          id: 'g56-2',
          type: 'single',
          stem: '文中出现 "However",该词提示前后关系是___。',
          options: ['A) 因果', 'B) 并列', 'C) 转折', 'D) 举例'],
          answer: 2,
          explain:
            '**C**。however 表转折,说明前后语义相反,选词时注意反向逻辑。',
        },
        {
          id: 'g56-3',
          type: 'single',
          stem: '"He is proud ___ his son." 中应填的介词是___。',
          options: ['A) of', 'B) for', 'C) at', 'D) with'],
          answer: 0,
          explain:
            '**A) of**。be proud of 为固定搭配,意为"为……感到骄傲"。',
        },
      ],
    },
    reading: {
      title: 'A Lesson from a Failure',
      text: `Last year I entered a speech contest and failed in the first round. At first I felt ashamed and wanted to give up. However, my teacher told me that every successful speaker had once failed on stage. Her words encouraged me to try again. I practiced every morning in front of a mirror, recorded my voice, and asked my friends for advice. Six months later, I won the second prize in another contest. I finally understood that failure is not the end, but the beginning of growth.`,
      questions: [
        {
          id: 'r56-1',
          type: 'single',
          stem: 'How did the writer feel right after failing the contest?',
          options: [
            'A) Proud and excited',
            'B) Ashamed and ready to give up',
            'C) Angry with the teacher',
            'D) Indifferent about the result',
          ],
          answer: 1,
          explain:
            '**B**。原文 "I felt ashamed and wanted to give up",符合选项 B。',
        },
        {
          id: 'r56-2',
          type: 'single',
          stem: 'What did the writer do to improve after the failure?',
          options: [
            'A) Entered another contest at once',
            'B) Gave up speaking forever',
            'C) Practiced regularly and sought advice',
            'D) Refused the teacher\'s help',
          ],
          answer: 2,
          explain:
            '**C**。"I practiced every morning... recorded my voice, and asked my friends for advice"。',
        },
        {
          id: 'r56-3',
          type: 'judge',
          stem: '判断:In the end, the writer won the first prize in another contest.',
          answer: 1,
          explain:
            '**错误**。原文是 won the **second** prize,而非 first prize,陈述与事实不符。',
        },
      ],
    },
    translation: [
      {
        en: 'Failure is not the end, but the beginning of growth.',
        zh: '失败不是终点,而是成长的起点。',
        tip: 'not...but... "不是……而是……",连接两个并列成分。',
      },
      {
        en: 'Her words encouraged me to try again.',
        zh: '她的话鼓励我再试一次。',
        tip: 'encourage sb. to do sth. 鼓励某人做某事。',
      },
      {
        en: 'I finally understood the value of persistence.',
        zh: '我终于明白了坚持的价值。',
        tip: 'persistence n. 坚持,毅力。',
      },
    ],
    writing: {
      prompt:
        '请以 "An Experience That Taught Me a Lot" 为题,写一段约 60 词的短文。',
      template:
        'I will never forget the time when ____. At first, I ____. Later, I realized that ____. This experience has taught me ____.',
      sample:
        'I will never forget the time when I failed an important exam. At first, I felt sad and doubted myself. Later, with the help of my teacher, I found my weak points and made a new plan. This experience has taught me that failure is only a lesson on the road to success, and persistence will finally pay off.',
      keyWords: ['experience', 'failure', 'persistence', 'pay off', 'realize'],
    },
  },

  // ============ Day 57 ============
  {
    day: 57,
    title: 'Reading · Inference Questions · 推断题专项',
    vocab: [],
    grammar: {
      title: '推断题(inference)解题技巧',
      body: `推断题要求根据文章已知信息**合理推论**,常见题干:
- It can be inferred from the passage that ___.
- The writer probably believes that ___.
- What does the passage imply about ___?

**解题三原则**:
- **忠于原文**:答案必须有原文依据,不能凭主观或常识臆断。
- **适度推理**:只推一步,避免过度推断;"文章未提及"的选项多半错误。
- **排除绝对**:含 all, never, must, completely 等绝对词的选项多为干扰项;含 may, probably, likely 等的更稳妥。

**陷阱**:原文复述 ≠ 推断;正确答案通常是原文的**同义转述或合理延伸**。`,
      questions: [
        {
          id: 'g57-1',
          type: 'single',
          stem: '推断题的答案来源应该是___。',
          options: [
            'A) 读者的个人常识',
            'B) 原文的合理推理',
            'C) 题干的字面意思',
            'D) 选项中最长的那项',
          ],
          answer: 1,
          explain:
            '**B**。推断题须基于原文信息进行合理推理,不能脱离文本凭主观判断。',
        },
        {
          id: 'g57-2',
          type: 'single',
          stem: '看到含 "absolutely", "never" 等绝对词的选项时,通常应当___。',
          options: [
            'A) 优先选择',
            'B) 谨慎对待,多为干扰项',
            'C) 立即排除所有含绝对词的题',
            'D) 直接照抄原文',
          ],
          answer: 1,
          explain:
            '**B**。绝对化表述往往是干扰项,要谨慎;稳妥答案常用 may, probably 等词。',
        },
        {
          id: 'g57-3',
          type: 'single',
          stem: '下列哪种选项最可能是推断题的正确答案?',
          options: [
            'A) 与原文一字不差的句子',
            'B) 原文中完全未涉及的内容',
            'C) 原文信息的同义转述或合理延伸',
            'D) 作者明显反对的观点',
          ],
          answer: 2,
          explain:
            '**C**。正确推断往往是原文的同义转述或合理延伸,而非原句照抄。',
        },
      ],
    },
    reading: {
      title: 'The Hidden Cost of Convenience',
      text: `Online shopping has made life easier than ever. With a few clicks, almost anything can be delivered to your door within days. Yet this convenience comes at a price. Packaging waste has risen sharply, and many delivery riders work long hours under great pressure. Some cities have started to limit single-use plastics, while a few companies are testing reusable boxes. Customers, too, are beginning to ask whether same-day delivery is truly necessary, or whether a little patience might be better for the planet.`,
      questions: [
        {
          id: 'r57-1',
          type: 'single',
          stem: 'It can be inferred that the writer believes online shopping ___.',
          options: [
            'A) should be completely banned',
            'B) brings convenience but also problems',
            'C) has no negative effects at all',
            'D) is the main cause of all pollution',
          ],
          answer: 1,
          explain:
            '**B**。文中 "this convenience comes at a price" 后列举包装垃圾、骑手压力,推断作者认为网购有利也有弊。',
        },
        {
          id: 'r57-2',
          type: 'single',
          stem: 'What can we infer about some customers\' attitude?',
          options: [
            'A) They want even faster delivery',
            'B) They never think about the environment',
            'C) They begin to question the need for same-day delivery',
            'D) They refuse all packaging',
          ],
          answer: 2,
          explain:
            '**C**。末句 "Customers... are beginning to ask whether same-day delivery is truly necessary"。',
        },
        {
          id: 'r57-3',
          type: 'judge',
          stem: '判断:The passage implies that reusable boxes are being tested by some companies.',
          answer: 0,
          explain:
            '**正确**。原文 "a few companies are testing reusable boxes",与陈述一致。',
        },
      ],
    },
    translation: [
      {
        en: 'Convenience often comes at a price.',
        zh: '便利往往是有代价的。',
        tip: 'come at a price "以……为代价"。',
      },
      {
        en: 'Packaging waste has risen sharply in recent years.',
        zh: '近年来包装废弃物急剧增加。',
        tip: 'rise sharply "急剧上升"。',
      },
      {
        en: 'A little patience might be better for the planet.',
        zh: '多一点耐心或许对地球更好。',
        tip: 'might 表委婉推测,"或许"。',
      },
    ],
    writing: {
      prompt:
        '请以 "Online Shopping: Good or Bad?" 为题,写一段约 60 词的短文,表达你的看法。',
      template:
        'Online shopping has both ____ and ____. On one hand, it ____. On the other hand, it ____. In my opinion, we should ____.',
      sample:
        'Online shopping has both advantages and disadvantages. On one hand, it saves time and offers a wide choice of goods. On the other hand, it causes packaging waste and puts pressure on delivery workers. In my opinion, we should enjoy the convenience wisely, choose slower delivery when possible, and do our part to protect the environment.',
      keyWords: ['advantage', 'disadvantage', 'convenience', 'environment', 'choice'],
    },
  },

  // ============ Day 58 ============
  {
    day: 58,
    title: 'Reading · Main Idea & Tone · 主旨与态度题',
    vocab: [],
    grammar: {
      title: '主旨题与态度题解题法',
      body: `**主旨题**(main idea)题干:
- What is the main idea / best title of the passage?
- The passage is mainly about ___.

**解题要点**:
- 重点看**首段、尾段**和各段**首句**——主旨常藏于此。
- 高频复现的词往往是 topic。
- 正确答案**涵盖全文**,过于狭义或过于宽泛的选项均错;含具体细节的通常是干扰项。

**态度题**(tone / attitude)常见态度词:
- **positive**(积极的)/ **negative**(消极的)/ **neutral**(中立的)/ **objective**(客观的)。
- **critical**(批判的)/ **optimistic**(乐观的)/ **pessimistic**(悲观的)/ **doubtful**(怀疑的)。
- **supportive**(支持的)/ **sympathetic**(同情的)。

**技巧**:找作者使用的形容词、副词与例子倾向,判断其立场;客观说明文多为 neutral / objective。`,
      questions: [
        {
          id: 'g58-1',
          type: 'single',
          stem: '主旨题的正确答案通常具有的特点是___。',
          options: [
            'A) 只涉及文章某一细节',
            'B) 涵盖全文核心内容',
            'C) 比原文主题更宽泛',
            'D) 与原文完全无关',
          ],
          answer: 1,
          explain:
            '**B**。主旨答案须涵盖全文,既不能过窄(只讲细节),也不能过宽(脱离主题)。',
        },
        {
          id: 'g58-2',
          type: 'single',
          stem: '一篇客观介绍新技术的说明文,作者的态度最可能是___。',
          options: ['A) critical', 'B) objective', 'C) pessimistic', 'D) doubtful'],
          answer: 1,
          explain:
            '**B**。客观说明文作者态度多为 objective(客观的),不带明显褒贬。',
        },
        {
          id: 'g58-3',
          type: 'single',
          stem: '判断作者态度时,最有效的线索是___。',
          options: [
            'A) 文章的字数',
            'B) 作者使用的形容词和副词及所举例子',
            'C) 文章的标题字体',
            'D) 选项的长短',
          ],
          answer: 1,
          explain:
            '**B**。作者用词色彩(褒/贬)和所选例子最能体现其态度。',
        },
      ],
    },
    reading: {
      title: 'Small Habits, Big Changes',
      text: `Few people believe that small daily habits can change their lives. Yet research tells a different story. A person who reads just ten pages a day will finish more than twelve books a year. Someone who saves a little money every week may one day open a small business. The key, scientists say, is not talent but consistency. Habits work like interest: at first the change is hard to see, but given time, the results can be surprising. The best time to start a good habit, they add, is always today, not tomorrow.`,
      questions: [
        {
          id: 'r58-1',
          type: 'single',
          stem: 'What is the main idea of the passage?',
          options: [
            'A) Reading is more important than saving money',
            'B) Small daily habits can bring great changes over time',
            'C) Talent is the only key to success',
            'D) It is hard to form a good habit',
          ],
          answer: 1,
          explain:
            '**B**。全文围绕"小的日常习惯经时间累积会带来巨大改变"展开,B 涵盖主旨。',
        },
        {
          id: 'r58-2',
          type: 'single',
          stem: 'What is the writer\'s attitude toward forming good habits?',
          options: ['A) Doubtful', 'B) Supportive', 'C) Critical', 'D) Uninterested'],
          answer: 1,
          explain:
            '**B**。作者用研究、例子强调习惯的力量,并鼓励"today, not tomorrow",态度是支持的。',
        },
        {
          id: 'r58-3',
          type: 'judge',
          stem: '判断:The passage suggests that talent matters more than consistency.',
          answer: 1,
          explain:
            '**错误**。原文 "The key... is not talent but consistency",与陈述相反。',
        },
      ],
    },
    translation: [
      {
        en: 'The best time to start a good habit is today, not tomorrow.',
        zh: '养成好习惯的最好时间是今天,而不是明天。',
        tip: 'to start a good habit 作 time 的后置定语。',
      },
      {
        en: 'Habits work like interest: the results can be surprising.',
        zh: '习惯的作用如同利息:结果可能令人惊讶。',
        tip: 'work like "作用像……";interest 此处指"利息"。',
      },
      {
        en: 'Consistency is more important than talent.',
        zh: '坚持比天赋更重要。',
        tip: 'consistency n. 一致,坚持,连贯。',
      },
    ],
    writing: {
      prompt:
        '请以 "A Good Habit I Want to Build" 为题,写一段约 60 词的短文。',
      template:
        'A good habit I want to build is ____. I plan to ____ every day. I believe that if I keep doing it, I will ____. As the saying goes, ____.',
      sample:
        'A good habit I want to build is keeping a diary in English. I plan to write at least three sentences every night before sleep. I believe that if I keep doing it for a year, my writing will greatly improve and I will understand myself better. As the saying goes, practice makes perfect, and small steps lead to big changes.',
      keyWords: ['habit', 'diary', 'improve', 'practice', 'perfect'],
    },
  },

  // ============ Day 59 ============
  {
    day: 59,
    title: 'Translation Practice · 综合翻译实战',
    vocab: [],
    grammar: {
      title: '英译汉四大要诀',
      body: `学位英语翻译(英译汉)考查理解与表达,牢记四条:

- **抓主干**:先找出"主语 + 谓语 + 宾语",再处理修饰成分。长句先缩成短句理解。
- **理结构**:分析从句关系(定语、状语、同位语),理清修饰对象,避免张冠李戴。
- **调语序**:英语多用前置定语和后置定语,汉语习惯把修饰语放在被修饰词之前;长定语从句可拆分成独立小句。
- **求通顺**:不要逐词死译;根据中文习惯调整,适当增补或省略,使译文自然。

**常见得分点**:
- 重点动词、固定搭配必须译准。
- 被动语态常译为主动(如 "It is said that..." → "据说……")。
- 否定前移、虚拟语气、强调句要准确传达。`,
      questions: [
        {
          id: 'g59-1',
          type: 'single',
          stem: '翻译英语长句时,第一步通常是___。',
          options: [
            'A) 直接按词序逐词翻译',
            'B) 抓住主干,理清句子结构',
            'C) 把每个生词都查出来',
            'D) 把句子倒着翻译',
          ],
          answer: 1,
          explain:
            '**B**。先抓主谓宾主干,再处理从句与修饰语,是长句翻译的第一步。',
        },
        {
          id: 'g59-2',
          type: 'single',
          stem: '"It is said that he has left Beijing." 的最佳译文是___。',
          options: [
            'A) 它说他已经离开了北京。',
            'B) 据说他已经离开了北京。',
            'C) 有人说那件事离开了北京。',
            'D) 他说他已经离开了北京。',
          ],
          answer: 1,
          explain:
            '**B**。It is said that... 习惯译为"据说……",被动结构汉译时常转为主动。',
        },
        {
          id: 'g59-3',
          type: 'single',
          stem: '英语中的定语从句在汉译时,下列哪种处理常更通顺?',
          options: [
            'A) 一律保持原语序不动',
            'B) 直接删除从句部分',
            'C) 较长的定语从句可拆分成独立小句',
            'D) 把从句翻成名词',
          ],
          answer: 2,
          explain:
            '**C**。汉语习惯短句,长定语从句拆分为独立小句往往更通顺。',
        },
      ],
    },
    reading: {
      title: 'The Story Behind a Cup of Tea',
      text: `Tea is the most popular drink in the world after water. According to a Chinese legend, it was discovered by Emperor Shennong more than 4,000 years ago, when some leaves accidentally fell into his pot of boiling water. Today, tea is grown in many countries, and different cultures have developed their own ways of drinking it. In Britain, "afternoon tea" became a tradition in the 19th century, while in Japan the tea ceremony has been regarded as an art form. A simple cup of tea, it seems, carries far more than water and leaves.`,
      questions: [
        {
          id: 'r59-1',
          type: 'single',
          stem: 'According to the passage, tea was first discovered by ___.',
          options: [
            'A) a British queen',
            'B) Emperor Shennong of China',
            'C) a Japanese monk',
            'D) an Indian farmer',
          ],
          answer: 1,
          explain:
            '**B**。原文 "it was discovered by Emperor Shennong"。',
        },
        {
          id: 'r59-2',
          type: 'single',
          stem: 'What can be inferred about the tea ceremony in Japan?',
          options: [
            'A) It is regarded as an art form',
            'B) It started in the 19th century',
            'C) It is the same as British afternoon tea',
            'D) It has been forgotten by young people',
          ],
          answer: 0,
          explain:
            '**A**。原文 "the tea ceremony has been regarded as an art form"。',
        },
        {
          id: 'r59-3',
          type: 'judge',
          stem: '判断:Tea is the most popular drink in the world, even more than water.',
          answer: 1,
          explain:
            '**错误**。原文 "Tea is the most popular drink in the world **after** water",即水排第一,茶列其後,陈述与文意不符。',
        },
      ],
    },
    translation: [
      {
        en: 'It is reported that the new library will open to the public next month.',
        zh: '据报道,新图书馆将于下个月向公众开放。',
        tip: 'It is reported that... 译为"据报道……",主语从句常见句式。',
      },
      {
        en: 'The book, which was written in 1960, is still popular today.',
        zh: '这本写于 1960 年的书,至今仍很受欢迎。',
        tip: '非限制性定语从句可前置译为定语,也可拆分;此处译为前置定语较通顺。',
      },
      {
        en: 'Only by working hard can we achieve our goals in life.',
        zh: '只有努力,我们才能实现人生的目标。',
        tip: 'Only + 状语位于句首,主句部分倒装 can we achieve。',
      },
    ],
    writing: {
      prompt:
        '请以 "My Favorite Festival" 为题,写一段约 60 词的短文。',
      template:
        'My favorite festival is ____, which is celebrated in ____. During this festival, people usually ____. I love it because ____.',
      sample:
        'My favorite festival is the Spring Festival, which is celebrated all over China. During this festival, families get together, have a big dinner, and give each other good wishes. Children receive red envelopes and light fireworks. I love it because it is full of warmth and hope, and it reminds me of the importance of family and tradition.',
      keyWords: ['festival', 'celebrate', 'gather', 'tradition', 'warmth'],
    },
  },

  // ============ Day 60 ============
  {
    day: 60,
    title: 'Writing Templates · 考前写作模板与高频句型',
    vocab: [],
    grammar: {
      title: '写作高频模板与句型',
      body: `考前背诵模板与句型,考场直接套用,稳拿基础分。

**议论文三段式**:
- **开头**:引出话题。模板:*Nowadays, ... has become a hot topic. People\'s opinions vary.*
- **正文**:正反两面。模板:*Some people believe that... However, others argue that...*
- **结尾**:表明立场。模板:*In my opinion, ... Only in this way can we...*

**图表/现象类**:
- *As is shown / indicated in the table, ...*
- *The number of ... has increased / decreased by ...%.*

**万能高频句型**:
- *There is no doubt that...* (毫无疑问……)
- *It is widely believed that...* (人们普遍认为……)
- *We should take effective measures to...* (我们应采取有效措施……)
- *Only by doing so can we...* (只有这样我们才能……[倒装])
- *With the development of..., ...* (随着……的发展……)

**应试提示**:卷面整洁、句子通顺、无严重语法错误,比堆砌大词更重要。`,
      questions: [
        {
          id: 'g60-1',
          type: 'single',
          stem: '"毫无疑问,阅读对我们的学习非常重要。" 最佳英文表达是___。',
          options: [
            'A) There is no doubt that reading is very important for our study.',
            'B) No doubt reading is more important.',
            'C) Reading is doubt important to study.',
            'D) There is no doubt reading very important.',
          ],
          answer: 0,
          explain:
            '**A**。There is no doubt that... 为标准句型,后接完整从句,语法完整。',
        },
        {
          id: 'g60-2',
          type: 'single',
          stem: '"只有采取行动,我们才能保护环境。" 空格处应填___: Only by taking action ___.',
          options: [
            'A) we can protect the environment',
            'B) can we protect the environment',
            'C) we protect the environment',
            'D) do we protects the environment',
          ],
          answer: 1,
          explain:
            '**B**。Only + 状语位于句首,主句需**部分倒装**,用 can we protect。',
        },
        {
          id: 'g60-3',
          type: 'single',
          stem: '议论文结尾段的最佳功能是___。',
          options: [
            'A) 提出一个全新话题',
            'B) 重申观点,呼应主题,提出期望或建议',
            'C) 列举更多数据',
            'D) 复制开头段原句',
          ],
          answer: 1,
          explain:
            '**B**。结尾应总结观点、呼应主题,并可提出建议或展望,使文章结构完整。',
        },
      ],
    },
    reading: {
      title: 'The Power of a Good Question',
      text: `In the age of search engines, finding an answer seems easier than ever. Yet educators argue that the real skill lies in asking the right question. A good question shows that the learner has thought deeply about a subject and is ready to explore further. In class, students who ask questions tend to remember more than those who only listen quietly. Besides, a single thoughtful question can guide a whole discussion and lead to new discoveries. In short, while answers may be cheap today, good questions have never been more valuable.`,
      questions: [
        {
          id: 'r60-1',
          type: 'single',
          stem: 'What is the main idea of the passage?',
          options: [
            'A) Search engines are always reliable',
            'B) Asking good questions is a valuable skill',
            'C) Students should not answer questions',
            'D) Answers are more important than questions',
          ],
          answer: 1,
          explain:
            '**B**。全文围绕"提出好问题是一种重要能力"展开,末句点题。',
        },
        {
          id: 'r60-2',
          type: 'single',
          stem: 'According to the passage, students who ask questions in class ___.',
          options: [
            'A) remember less than quiet students',
            'B) tend to remember more',
            'C) never listen to others',
            'D) disturb the lesson',
          ],
          answer: 1,
          explain:
            '**B**。原文 "students who ask questions tend to remember more than those who only listen quietly"。',
        },
        {
          id: 'r60-3',
          type: 'judge',
          stem: '判断:The writer believes that good questions are more valuable than ever today.',
          answer: 0,
          explain:
            '**正确**。末句 "good questions have never been more valuable",与陈述一致。',
        },
      ],
    },
    translation: [
      {
        en: 'There is no doubt that practice makes perfect.',
        zh: '毫无疑问,熟能生巧。',
        tip: 'There is no doubt that... 标准句型;practice makes perfect 谚语。',
      },
      {
        en: 'With the development of technology, our life has changed greatly.',
        zh: '随着科技的发展,我们的生活发生了巨大变化。',
        tip: 'With the development of... "随着……的发展",常用开头句式。',
      },
      {
        en: 'Only in this way can we solve the problem successfully.',
        zh: '只有这样,我们才能成功地解决问题。',
        tip: 'Only + 状语放句首,主句部分倒装 can we solve。',
      },
    ],
    writing: {
      prompt:
        '请以 "The Importance of Asking Questions" 为题,运用三段式写一段约 70 词的短文。',
      template:
        'Nowadays, asking questions has become ___. Some people think ___. However, I believe that ___. Only by ___ can we ___.',
      sample:
        'Nowadays, asking questions has become an important skill in learning. Some people think that finding answers online is enough. However, I believe that a good question shows real understanding and leads to deeper discovery. In class, students who ask questions usually learn more than those who stay silent. Only by daring to ask can we open the door to true knowledge and keep growing every day.',
      keyWords: ['question', 'skill', 'understand', 'discovery', 'knowledge'],
    },
  },
]
