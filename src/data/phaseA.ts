import type { DayPlan } from '../types'

// ===== Phase A: Day 2 ~ Day 14 (基础语法 13 天) =====
export const PHASE_A: DayPlan[] = [
  // ---------------- Day 2 ----------------
  {
    day: 2,
    title: 'The Definite Article · 定冠词 the',
    vocab: [],
    grammar: {
      title: '定冠词 the 的用法',
      body: `**the** 表示"特指",意为"这个/那个/这些/那些"。常见用法:

- **上文提过**:I saw a dog. **The dog** was barking.
- **独一无二的事物**:**the sun**, **the moon**, **the world**
- **双方心知肚明**:Please close **the door**.(就是那扇门)
- **the + 形容词** 表示一类人:**the rich**(富人), **the old**(老人)
- **序数词/最高级** 前:**the first**, **the best**

口诀:**特指、复指、独一无二,皆用 the。**`,
      questions: [
        {
          id: 'g2-1',
          type: 'single',
          stem: 'He bought a book and a pen. ___ book is very interesting.',
          options: ['A) A', 'B) An', 'C) The', 'D) /'],
          answer: 2,
          explain:
            '**C**。前句已提到 a book,再次提到需"特指",用 the。pen 同理前文已提,但此处特指 book。',
        },
        {
          id: 'g2-2',
          type: 'single',
          stem: '___ sun rises in the east.',
          options: ['A) A', 'B) An', 'C) The', 'D) /'],
          answer: 2,
          explain:
            '**C**。sun 是世界上独一无二的事物,必须用 the。同类:the moon, the earth, the sky。',
        },
        {
          id: 'g2-3',
          type: 'single',
          stem: 'We should help ___ poor in our community.',
          options: ['A) a', 'B) an', 'C) the', 'D) /'],
          answer: 2,
          explain:
            '**C**。"the + 形容词"表示一类人,the poor = 穷人(the poor people)。谓语用复数。',
        },
      ],
    },
    reading: {
      title: 'The Public Library',
      text: `The public library is one of the most valuable places in a city. It offers not only books but also free Internet access and quiet study rooms. The librarians are always ready to help readers find what they need. For students, the library is a perfect place to review lessons after school. Best of all, most of its services are completely free.`,
      questions: [
        {
          id: 'r2-1',
          type: 'single',
          stem: 'What is the main idea of the passage?',
          options: [
            'A) Libraries are old-fashioned',
            'B) Public libraries are valuable and useful',
            'C) Books are too expensive',
            'D) Internet access is expensive',
          ],
          answer: 1,
          explain:
            '**B**。首句即点题:public library is one of the most valuable places,后文列举免费服务,均支持其"有用"。',
        },
        {
          id: 'r2-2',
          type: 'blank',
          stem: 'The word "valuable" most likely means ___ (中文).',
          answer: '有价值的 / 宝贵的',
          explain:
            '由 "perfect place to review lessons" 与 "free services" 推断,图书馆是宝贵的资源,valuable = 有价值的。',
        },
        {
          id: 'r2-3',
          type: 'judge',
          stem: '判断对错:According to the passage, all services in the library cost money.',
          options: ['正确', '错误'],
          answer: 1,
          explain:
            '**选错误(1)**。文章末句明确 most of its services are completely free(大部分服务完全免费),与题干"都要花钱"相反。',
        },
      ],
    },
    translation: [
      {
        en: 'The more you read, the more you know.',
        zh: '你读得越多,知道得就越多。',
        tip: 'The + 比较级, the + 比较级:越……越……',
      },
      {
        en: 'The moon moves around the earth.',
        zh: '月亮绕着地球转。',
        tip: '独一无二的天体前用 the',
      },
      {
        en: 'Please pass me the salt on the table.',
        zh: '请把桌上的盐递给我。',
        tip: '特指桌上那瓶盐,用 the',
      },
    ],
    writing: {
      prompt: '用定冠词 the 描述你常去的一个公共场所(如图书馆、公园),写 3 句话。',
      template:
        'I often go to the ____. The ____ there is very helpful. I enjoy the ____ very much.',
      sample:
        'I often go to the library. The staff there is very helpful. I enjoy the quiet reading room very much.',
      keyWords: ['library', 'staff', 'quiet'],
    },
  },

  // ---------------- Day 3 ----------------
  {
    day: 3,
    title: 'Countable & Uncountable Nouns · 可数与不可数名词',
    vocab: [],
    grammar: {
      title: '可数名词与不可数名词',
      body: `**可数名词**(Countable)有单复数之分,可直接加数词:
- a book / two **books**, an apple / three **apples**
- 单数前要加 a/an 或 the、my 等限定词

**不可数名词**(Uncountable)没有复数形式,不能直接加 a/an/数词,需用 **量词**:
- water, milk, bread, money, information, advice, news, furniture
- a **glass** of water, two **pieces** of advice, a **bar** of chocolate

常见考点:**How many** + 可数复数;**How much** + 不可数。`,
      questions: [
        {
          id: 'g3-1',
          type: 'single',
          stem: 'I need ___ to write down the address.',
          options: ['A) a paper', 'B) a piece of paper', 'C) paper', 'D) papers'],
          answer: 1,
          explain:
            '**B**。paper 表"纸张"时不可数,要用 a piece of paper。papers 通常指"文件/论文"。',
        },
        {
          id: 'g3-2',
          type: 'single',
          stem: 'Could you give me ___ about the course?',
          options: [
            'A) some informations',
            'B) an information',
            'C) some information',
            'D) a information',
          ],
          answer: 2,
          explain:
            '**C**。information 是不可数名词,没有复数形式,也不能加 a/an。用 some information 表示"一些信息"。',
        },
        {
          id: 'g3-3',
          type: 'single',
          stem: 'There are ___ in the basket.',
          options: [
            'A) five tomatos',
            'B) five tomatoes',
            'C) five tomato',
            'D) five a tomato',
          ],
          answer: 1,
          explain:
            '**B**。tomato 是可数名词,以 -o 结尾且辅音字母+o,加 -es → tomatoes。five 后接复数。',
        },
      ],
    },
    reading: {
      title: 'A Healthy Breakfast',
      text: `A healthy breakfast gives you energy for the whole morning. Doctors suggest that we eat some bread, an egg, and a glass of milk every morning. Fresh fruit is also a good choice. Many young people skip breakfast because they are busy, but this habit does harm to their health. In fact, eating the right food in the morning helps us stay active and focused at work.`,
      questions: [
        {
          id: 'r3-1',
          type: 'single',
          stem: 'According to the passage, what is a good breakfast?',
          options: [
            'A) Only coffee',
            'B) Bread, an egg and milk',
            'C) Nothing at all',
            'D) A lot of sugar',
          ],
          answer: 1,
          explain:
            '**B**。文中明确建议 some bread, an egg, and a glass of milk,与选项 B 一致。',
        },
        {
          id: 'r3-2',
          type: 'blank',
          stem: 'The word "skip" most likely means ___ (中文).',
          answer: '跳过 / 不吃',
          explain:
            '由 "because they are busy, but this habit does harm" 推断,skip breakfast 指"不吃早餐"。',
        },
        {
          id: 'r3-3',
          type: 'judge',
          stem: '判断对错:The passage says breakfast is not important for our health.',
          options: ['正确', '错误'],
          answer: 1,
          explain:
            '**选错误(1)**。文章反复强调早餐有助于 stay active and focused,与"不重要"相反。',
        },
      ],
    },
    translation: [
      {
        en: 'Please give me two cups of coffee.',
        zh: '请给我两杯咖啡。',
        tip: 'coffee 不可数,用 cup 计量',
      },
      {
        en: 'She gave me a lot of useful advice.',
        zh: '她给了我很多有用的建议。',
        tip: 'advice 不可数,没有复数',
      },
      {
        en: 'There is some money left in my wallet.',
        zh: '我钱包里还剩一些钱。',
        tip: 'money 不可数,谓语用 is',
      },
    ],
    writing: {
      prompt: '写一段话介绍你昨天三餐吃了什么,注意可数/不可数名词的用法。',
      template:
        'For breakfast, I had some ____ and an ____. For lunch, I ate a bowl of ____. For dinner, I had some ____.',
      sample:
        'For breakfast, I had some bread and an egg. For lunch, I ate a bowl of rice. For dinner, I had some fish and vegetables.',
      keyWords: ['bread', 'rice', 'fish'],
    },
  },

  // ---------------- Day 4 ----------------
  {
    day: 4,
    title: 'Personal & Possessive Pronouns · 人称与物主代词',
    vocab: [],
    grammar: {
      title: '人称代词与物主代词',
      body: `**人称代词**(主格 / 宾格):
- 主格(作主语):I, you, he, she, it, we, they
- 宾格(作宾语/表语):me, you, him, her, it, us, them
- 例:**He** called **me** yesterday.

**物主代词**(形容词性 / 名词性):
- 形容词性(后接名词):my, your, his, her, its, our, their
- 名词性(单独使用):mine, yours, his, hers, its, ours, theirs
- 例:This is **my** book. The book is **mine**.

考点:**its**(它的)没有撇号;**it's = it is**。`,
      questions: [
        {
          id: 'g4-1',
          type: 'single',
          stem: 'This is not my pen. ___ is in the bag.',
          options: ['A) I', 'B) Me', 'C) Mine', 'D) My'],
          answer: 2,
          explain:
            '**C**。空格后无名词,需用名词性物主代词 mine (= my pen)。my 后必须接名词。',
        },
        {
          id: 'g4-2',
          type: 'single',
          stem: 'Let ___ help you with the heavy box.',
          options: ['A) he', 'B) him', 'C) his', 'D) himself'],
          answer: 1,
          explain:
            '**B**。动词 let 后接宾格,let sb. do sth.,用 him。he 是主格不可作宾语。',
        },
        {
          id: 'g4-3',
          type: 'single',
          stem: 'The dog wagged ___ tail happily.',
          options: ['A) it', 'B) its', "C) it's", 'D) their'],
          answer: 1,
          explain:
            '**B**。tail 是名词,前面用形容词性物主代词 its(它的)。it\'s = it is,不能修饰名词。',
        },
      ],
    },
    reading: {
      title: 'My Best Friend',
      text: `Anna is my best friend. She is taller than me, and she always helps me with my homework. Her smile can make everyone around her happy. We have known each other since we were children. Our parents are also good friends, so our families often spend weekends together. I really treasure our friendship, and I hope it will last forever.`,
      questions: [
        {
          id: 'r4-1',
          type: 'single',
          stem: 'How long have the writer and Anna known each other?',
          options: [
            'A) One year',
            'B) Since childhood',
            'C) A few months',
            'D) At school only',
          ],
          answer: 1,
          explain:
            '**B**。文中 "since we were children"(从小)与 since childhood 同义。',
        },
        {
          id: 'r4-2',
          type: 'blank',
          stem: 'The word "treasure" most likely means ___ (中文).',
          answer: '珍惜 / 珍视',
          explain:
            '由 "I hope it will last forever"(希望友谊长存)推断,treasure 在此作动词,意为"珍惜"。',
        },
        {
          id: 'r4-3',
          type: 'judge',
          stem: '判断对错:The two families often spend weekends together.',
          options: ['正确', '错误'],
          answer: 0,
          explain:
            '**选正确(0)**。文中明确 "our families often spend weekends together",与题干一致。',
        },
      ],
    },
    translation: [
      {
        en: 'He lent me his umbrella because mine was broken.',
        zh: '他把他的伞借给了我,因为我的坏了。',
        tip: 'mine = my umbrella(名词性物主代词)',
      },
      {
        en: 'We are proud of our country.',
        zh: '我们为我们的国家感到骄傲。',
        tip: 'our 后接名词 country',
      },
      {
        en: 'The children enjoyed themselves at the party.',
        zh: '孩子们在聚会上玩得很开心。',
        tip: 'enjoy oneself = 玩得开心',
      },
    ],
    writing: {
      prompt: '用代词介绍你和一位好友之间的关系,写 3 句话。',
      template:
        '____ is my best friend. ____ always helps ____ with my work. I value ____ friendship very much.',
      sample:
        'Tom is my best friend. He always helps me with my work. I value our friendship very much.',
      keyWords: ['Tom', 'He', 'our'],
    },
  },

  // ---------------- Day 5 ----------------
  {
    day: 5,
    title: 'Other Pronouns · 反身/指示/不定代词',
    vocab: [],
    grammar: {
      title: '反身、指示与不定代词',
      body: `**反身代词**:myself, yourself, himself, herself, itself, ourselves, yourselves, themselves。
- 主语和宾语为同一人时用:She taught **herself** English.(自学)
- 固定搭配:**enjoy oneself**(玩得开心), **by oneself**(独自), **help oneself to**(自便)。

**指示代词**:this(近单), that(远单), these(近复), those(远复)。

**不定代词**:
- someone, anybody, nothing, everything 等,谓语通常用**单数**。
- 形容词修饰时**后置**:something **important**, nothing **new**。`,
      questions: [
        {
          id: 'g5-1',
          type: 'single',
          stem: 'The boys built the model plane by ___.',
          options: ['A) them', 'B) themselves', 'C) himself', 'D) theirs'],
          answer: 1,
          explain:
            '**B**。主语 the boys 是复数,by oneself 表"独自",复数对应 themselves。himself 单数不符。',
        },
        {
          id: 'g5-2',
          type: 'single',
          stem: 'Is there ___ new in today\'s newspaper?',
          options: ['A) anything', 'B) something', 'C) any', 'D) nothing'],
          answer: 0,
          explain:
            '**A**。疑问句用 anything;形容词 new 须后置 → anything new。something 多用于肯定句。',
        },
        {
          id: 'g5-3',
          type: 'single',
          stem: 'The weather here is warmer than ___ in Beijing.',
          options: ['A) this', 'B) that', 'C) those', 'D) these'],
          answer: 1,
          explain:
            '**B**。比较对象是"北京那边的天气"(不可数,单数),用 that 代指同名异物的不可数名词。复数才用 those。',
        },
      ],
    },
    reading: {
      title: 'Learning by Oneself',
      text: `More and more people are learning new skills by themselves these days. With the help of the Internet, anyone can find free lessons on almost any subject. Some people teach themselves a foreign language in their free time, while others learn computer programming online. Self-learning requires strong willpower, but it also gives learners great freedom. Nothing is impossible if you are willing to keep trying.`,
      questions: [
        {
          id: 'r5-1',
          type: 'single',
          stem: 'What is the passage mainly about?',
          options: [
            'A) The cost of online courses',
            'B) The value of self-learning',
            'C) The history of the Internet',
            'D) How to use computers',
          ],
          answer: 1,
          explain:
            '**B**。通篇讨论 self-learning(自学)及其好处与条件,核心主题是自学的价值。',
        },
        {
          id: 'r5-2',
          type: 'blank',
          stem: 'The word "willpower" most likely means ___ (中文).',
          answer: '意志力 / 毅力',
          explain:
            '由 "requires strong...but gives great freedom" 推断,自学需要"坚强的意志力",willpower = 意志力。',
        },
        {
          id: 'r5-3',
          type: 'judge',
          stem: '判断对错:The passage says anyone can find free lessons on the Internet.',
          options: ['正确', '错误'],
          answer: 0,
          explain:
            '**选正确(0)**。文中 "anyone can find free lessons on almost any subject" 与题干一致。',
        },
      ],
    },
    translation: [
      {
        en: 'Please help yourself to some fruit.',
        zh: '请随便吃点水果。',
        tip: 'help oneself to + 食物:自便取用',
      },
      {
        en: 'There is nothing important in his speech.',
        zh: '他的演讲里没有什么重要的内容。',
        tip: 'nothing + 形容词 important 后置',
      },
      {
        en: 'She learned French all by herself.',
        zh: '她完全是自学法语的。',
        tip: 'by herself = 独自、靠自己',
      },
    ],
    writing: {
      prompt: '写一段话,描述一项你自学的技能,用到反身代词和不定代词。',
      template:
        'I learned ____ by ____. I found ____ useful on the Internet. Now I can do it ____.',
      sample:
        'I learned cooking by myself. I found something useful on the Internet. Now I can do it well.',
      keyWords: ['cooking', 'myself', 'something'],
    },
  },

  // ---------------- Day 6 ----------------
  {
    day: 6,
    title: 'Prepositions of Time & Place · 时间地点介词 in/on/at',
    vocab: [],
    grammar: {
      title: '介词 in / on / at(时间与地点)',
      body: `**时间**:
- **at** + 具体时刻:at 7 o'clock, at noon, at night
- **on** + 某天/日期:on Monday, on July 4th, on a cold morning
- **in** + 月/年/季节/长时段:in May, in 2024, in summer, in the morning

**地点**:
- **at** + 具体小地点:at the door, at the bus stop
- **on** + 表面/街道:on the desk, on the wall, on Main Street
- **in** + 内部空间/大地方:in the room, in China, in the city

口诀:**小用 at,面用 on,大用 in。**`,
      questions: [
        {
          id: 'g6-1',
          type: 'single',
          stem: 'I was born ___ October 15th, 2001.',
          options: ['A) in', 'B) on', 'C) at', 'D) by'],
          answer: 1,
          explain:
            '**B**。具体日期 October 15th 用 on。on + 某一天/日期是固定搭配。',
        },
        {
          id: 'g6-2',
          type: 'single',
          stem: 'The meeting will start ___ 9:00 am.',
          options: ['A) in', 'B) on', 'C) at', 'D) for'],
          answer: 2,
          explain:
            '**C**。具体时刻 9:00 用 at。at + 时刻表"在几点"。',
        },
        {
          id: 'g6-3',
          type: 'single',
          stem: 'There is a beautiful picture ___ the wall.',
          options: ['A) in', 'B) on', 'C) at', 'D) above'],
          answer: 1,
          explain:
            '**B**。图画贴在墙的表面上,用 on。in the wall 指"嵌在墙里"(如窗户)。',
        },
      ],
    },
    reading: {
      title: 'A Day at the Office',
      text: `Mr. Lee arrives at his office at 8:30 every morning. He turns on his computer and checks his emails first. At 10 o'clock, he has a short meeting with his team. Lunch break begins at noon, and he usually eats in the small restaurant across the street. In the afternoon, he works on several reports. He finally leaves the office at 6 pm and goes home for dinner.`,
      questions: [
        {
          id: 'r6-1',
          type: 'single',
          stem: 'What does Mr. Lee do first when he arrives?',
          options: [
            'A) Has a meeting',
            'B) Checks emails',
            'C) Eats lunch',
            'D) Writes reports',
          ],
          answer: 1,
          explain:
            '**B**。文中 "checks his emails first"(先查邮件),与选项 B 一致。',
        },
        {
          id: 'r6-2',
          type: 'blank',
          stem: 'The word "finally" most likely means ___ (中文).',
          answer: '最后 / 终于',
          explain:
            '"finally leaves...at 6 pm" 表示一天工作的最后一步,finally = 最后。',
        },
        {
          id: 'r6-3',
          type: 'judge',
          stem: '判断对错:Mr. Lee has a meeting with his team at noon.',
          options: ['正确', '错误'],
          answer: 1,
          explain:
            "**选错误(1)**。会议在 10 o'clock 举行,而 noon(中午)是午餐时间,题干混淆了时间。",
        },
      ],
    },
    translation: [
      {
        en: 'We will meet at the station at 3 pm.',
        zh: '我们下午三点在车站见面。',
        tip: 'at + 小地点(车站),at + 时刻',
      },
      {
        en: 'She was reading a book in the garden on Sunday morning.',
        zh: '星期天早上她在花园里看书。',
        tip: 'on Sunday morning,on + 具体某天的上下午',
      },
      {
        en: 'My grandfather was born in 1950.',
        zh: '我爷爷出生于 1950 年。',
        tip: 'in + 年份',
      },
    ],
    writing: {
      prompt: '用 in/on/at 写出你某一天的时间安排,至少 3 句话。',
      template:
        'I wake up at ____. I have a meeting in the ____. I go home on ____ evening.',
      sample:
        'I wake up at 7 am. I have a meeting in the morning. I go home on Friday evening.',
      keyWords: ['7 am', 'morning', 'Friday'],
    },
  },

  // ---------------- Day 7 ----------------
  {
    day: 7,
    title: 'More Prepositions · by / with / for 等搭配',
    vocab: [],
    grammar: {
      title: '介词 by / with / for 的常见搭配',
      body: `**by**:
- 表示"方式/乘坐":by bus, by train, by email;**by doing sth.**(通过做……)
- 表示"被……"(被动):written **by** Shakespeare。

**with**:
- 表示"用(工具)/带着":cut it **with** a knife;**with** a pen。
- 表示"和……一起":go **with** me。

**for**:
- 表示"为了/给":a gift **for** you;**for** two hours(持续时长)。
- thank you **for** doing sth.。

注意:**by** 后接交通工具不加冠词(by car ✅, by the car ❌)。`,
      questions: [
        {
          id: 'g7-1',
          type: 'single',
          stem: 'You can improve your English ___ reading more books.',
          options: ['A) by', 'B) with', 'C) for', 'D) in'],
          answer: 0,
          explain:
            '**A**。"通过做某事"用 by + doing,by reading = 通过阅读。with 后接工具而非动作。',
        },
        {
          id: 'g7-2',
          type: 'single',
          stem: 'Please write your name ___ a black pen.',
          options: ['A) by', 'B) with', 'C) for', 'D) on'],
          answer: 1,
          explain:
            '**B**。表示"使用某工具"用 with,with a black pen = 用一支黑笔。',
        },
        {
          id: 'g7-3',
          type: 'single',
          stem: 'I have kept this photo ___ more than ten years.',
          options: ['A) by', 'B) with', 'C) for', 'D) since'],
          answer: 2,
          explain:
            '**C**。表"持续一段时间"用 for + 时间段(more than ten years)。since 接时间点。',
        },
      ],
    },
    reading: {
      title: 'A Trip by Train',
      text: `Last summer, my family took a trip to Shanghai by train. The journey took about six hours, but we did not feel bored. We played card games with each other and looked out of the window at the beautiful fields. For lunch, we ate the sandwiches we had brought from home. When we arrived, a friendly guide was waiting for us at the station with a big smile.`,
      questions: [
        {
          id: 'r7-1',
          type: 'single',
          stem: 'How did the family travel to Shanghai?',
          options: ['A) By plane', 'B) By train', 'C) By bus', 'D) By car'],
          answer: 1,
          explain:
            '**B**。首句 "took a trip to Shanghai by train",明确乘火车。',
        },
        {
          id: 'r7-2',
          type: 'blank',
          stem: 'The word "friendly" most likely means ___ (中文).',
          answer: '友好的 / 亲切的',
          explain:
            '"a friendly guide...with a big smile"(面带微笑的导游),friendly = 友好的。',
        },
        {
          id: 'r7-3',
          type: 'judge',
          stem: '判断对错:The family felt bored during the journey.',
          options: ['正确', '错误'],
          answer: 1,
          explain:
            '**选错误(1)**。文中 "we did not feel bored"(我们不觉得无聊),与题干相反。',
        },
      ],
    },
    translation: [
      {
        en: 'This novel was written by a young writer.',
        zh: '这本小说是一位年轻作家写的。',
        tip: 'by 引出动作的执行者(被动语态)',
      },
      {
        en: 'I cut the apple with a small knife.',
        zh: '我用一把小刀切了苹果。',
        tip: 'with + 工具',
      },
      {
        en: 'Thank you for helping me with my homework.',
        zh: '谢谢你帮我做作业。',
        tip: 'thank sb. for doing sth.',
      },
    ],
    writing: {
      prompt: '描述一次出行,用 by / with / for 各写一句话。',
      template:
        'I went to ____ by ____. I traveled with my ____. We stayed there for ____ days.',
      sample:
        'I went to Beijing by train. I traveled with my family. We stayed there for five days.',
      keyWords: ['train', 'family', 'five'],
    },
  },

  // ---------------- Day 8 ----------------
  {
    day: 8,
    title: 'Coordinating Conjunctions · 并列连词 and/but/or/so',
    vocab: [],
    grammar: {
      title: '并列连词 and / but / or / so',
      body: `并列连词连接两个**对等**的成分(词、短语或句子):

- **and**(并列、顺承):He opened the door **and** walked in.
- **but**(转折):She is tired, **but** she keeps working.
- **or**(选择/否则):Hurry up, **or** you will be late.
- **so**(因果,所以):It was raining, **so** I stayed at home.

注意:
- **and/or 连接主语时看主语决定谓语**:Tom **or** his brothers **are** coming.
- **but 与 so 不能与 because 同句连用**:✅ I was ill, so I didn't go. ❌ Because I was ill, so...`,
      questions: [
        {
          id: 'g8-1',
          type: 'single',
          stem: 'He is very rich, ___ he lives a simple life.',
          options: ['A) and', 'B) but', 'C) so', 'D) or'],
          answer: 1,
          explain:
            '**B**。rich 与 lives a simple life(简朴生活)是转折关系,用 but。',
        },
        {
          id: 'g8-2',
          type: 'single',
          stem: 'Hurry up, ___ you will miss the last bus.',
          options: ['A) and', 'B) but', 'C) or', 'D) so'],
          answer: 2,
          explain:
            '**C**。"祈使句 + or + 结果"表"否则",or = otherwise。错过末班车是不快点的后果。',
        },
        {
          id: 'g8-3',
          type: 'single',
          stem: 'It was very cold outside, ___ we decided to stay at home.',
          options: ['A) and', 'B) but', 'C) or', 'D) so'],
          answer: 3,
          explain:
            '**D**。前因后果,用 so(所以)。注意不能说 Because it was cold, so...,so 与 because 不同现。',
        },
      ],
    },
    reading: {
      title: 'The Weekend Plan',
      text: `Lisa and her brother have different plans for the weekend. Lisa wants to go hiking in the mountains, but her brother prefers to stay at home and read books. Their mother suggests that they take turns, so on Saturday they will go out together, and on Sunday each can do what they like. In this way, everyone is happy, and the family can also spend some meaningful time together.`,
      questions: [
        {
          id: 'r8-1',
          type: 'single',
          stem: 'What does Lisa want to do on the weekend?',
          options: [
            'A) Read books at home',
            'B) Go hiking',
            'C) Visit friends',
            'D) Watch TV',
          ],
          answer: 1,
          explain:
            '**B**。文中 "Lisa wants to go hiking in the mountains",对应选项 B。',
        },
        {
          id: 'r8-2',
          type: 'blank',
          stem: 'The word "suggests" most likely means ___ (中文).',
          answer: '建议',
          explain:
            '由 "they take turns"(轮流)的方案推断,母亲在"建议"一个解决办法,suggest = 建议。',
        },
        {
          id: 'r8-3',
          type: 'judge',
          stem: '判断对错:Lisa and her brother have exactly the same plan for the weekend.',
          options: ['正确', '错误'],
          answer: 1,
          explain:
            '**选错误(1)**。文中 "have different plans"(计划不同),与题干"完全相同"相反。',
        },
      ],
    },
    translation: [
      {
        en: 'I like coffee, but my wife prefers tea.',
        zh: '我喜欢咖啡,但我妻子更喜欢茶。',
        tip: 'but 表转折',
      },
      {
        en: 'Work hard, and you will succeed.',
        zh: '努力工作,你就会成功。',
        tip: '祈使句 + and + 结果:那么、就',
      },
      {
        en: 'It was getting dark, so we went home.',
        zh: '天渐渐黑了,所以我们回家了。',
        tip: 'so 表因果',
      },
    ],
    writing: {
      prompt: '用 and/but/or/so 写一段话,描述你上周末的两个不同安排。',
      template:
        'I wanted to ____, but the weather was bad. So I ____ at home, and I ____.',
      sample:
        'I wanted to go out, but the weather was bad. So I stayed at home, and I read a good book.',
      keyWords: ['go out', 'stayed', 'read'],
    },
  },

  // ---------------- Day 9 ----------------
  {
    day: 9,
    title: 'Subordinating Conjunctions · 从属连词 because/although/if/when',
    vocab: [],
    grammar: {
      title: '从属连词 because / although / if / when',
      body: `从属连词引导**从句**,与主句构成主从复合句:

- **because**(因为):I stayed **because** it rained.
- **although / though**(虽然):**Although** he is young, he is very capable.
- **if**(如果):**If** you study hard, you will pass the exam.
- **when**(当……时):**When** I came in, he was reading.

三大考点:
1. **although 与 but 不能并用**:**Although** he is poor, he is happy. ❌ ...but he is happy.
2. **because 与 so 不能并用**:✅ Because it rained, I stayed. ❌ Because..., so...
3. 主将从现:**If** it **rains** tomorrow, I **will** stay. (if 从句用现在时表将来)`,
      questions: [
        {
          id: 'g9-1',
          type: 'single',
          stem: '___ it is raining heavily, we have to cancel the match.',
          options: ['A) Although', 'B) Because', 'C) If', 'D) When'],
          answer: 1,
          explain:
            '**B**。下大雨是取消比赛的"原因",用 because。注意:若用 because,主句不能再加 so。',
        },
        {
          id: 'g9-2',
          type: 'single',
          stem: '___ she was very tired, she kept on working.',
          options: ['A) Because', 'B) Although', 'C) If', 'D) As'],
          answer: 1,
          explain:
            '**B**。tired 与 kept on working(继续工作)是让步转折,用 although(虽然)。注意主句不能再用 but。',
        },
        {
          id: 'g9-3',
          type: 'single',
          stem: 'If it ___ sunny tomorrow, we will go to the park.',
          options: ['A) is', 'B) will be', 'C) was', 'D) would be'],
          answer: 0,
          explain:
            '**A**。"主将从现":if 引导的条件状语从句中,用一般现在时表将来,故选 is。',
        },
      ],
    },
    reading: {
      title: 'When the Internet Goes Down',
      text: `When the Internet suddenly stopped working in our office, everyone felt nervous at first. Although we depend on the Web every day, this short break actually brought us something good. Because we could not send emails, colleagues began to talk face to face. If you experience the same thing one day, do not worry. You may find that a little offline time helps you think more clearly.`,
      questions: [
        {
          id: 'r9-1',
          type: 'single',
          stem: 'What is the writer\'s attitude toward the Internet breakdown?',
          options: [
            'A) Completely negative',
            'B) Somewhat positive',
            'C) Very angry',
            'D) Not mentioned',
          ],
          answer: 1,
          explain:
            '**B**。文中 "brought us something good" 与 "helps you think more clearly" 体现积极态度。',
        },
        {
          id: 'r9-2',
          type: 'blank',
          stem: 'The word "experience" most likely means ___ (中文).',
          answer: '经历 / 体验',
          explain:
            '"If you experience the same thing"(如果你经历同样的事),experience 作动词,意为"经历"。',
        },
        {
          id: 'r9-3',
          type: 'judge',
          stem: '判断对错:Because of the breakdown, colleagues talked to each other face to face.',
          options: ['正确', '错误'],
          answer: 0,
          explain:
            '**选正确(0)**。文中 "Because we could not send emails, colleagues began to talk face to face" 与题干一致。',
        },
      ],
    },
    translation: [
      {
        en: 'Although he is very old, he still jogs every morning.',
        zh: '虽然他年纪很大,但仍然每天早上慢跑。',
        tip: 'although 不能与 but 连用',
      },
      {
        en: 'If you heat ice, it melts.',
        zh: '如果你加热冰,它就会融化。',
        tip: '主将从现(真理用一般现在时)',
      },
      {
        en: 'When the bell rang, the students ran out of the classroom.',
        zh: '铃响时,学生们跑出了教室。',
        tip: 'when + 时间状语从句',
      },
    ],
    writing: {
      prompt: '用 because / although / if / when 写一段话,描述你的一次经历。',
      template:
        '____ I was free, I went to the park. Although it was a little ____, I felt happy. If you go there, you will ____ it too.',
      sample:
        'When I was free, I went to the park. Although it was a little cold, I felt happy. If you go there, you will enjoy it too.',
      keyWords: ['cold', 'enjoy', 'When'],
    },
  },

  // ---------------- Day 10 ----------------
  {
    day: 10,
    title: 'Adjectives & Adverbs · 形容词与副词',
    vocab: [],
    grammar: {
      title: '形容词与副词的用法',
      body: `**形容词**(adj.)修饰**名词/代词**,说明性质或状态:
- a **beautiful** girl;The book is **interesting**.
- 系动词后作表语:look **happy**, smell **good**。

**副词**(adv.)修饰**动词/形容词/其他副词**或全句:
- run **quickly**(修饰动词);**very** good(修饰形容词)。

形 → 副的常见变化:
- 一般加 -ly:slow → slowly, quick → quickly
- 辅音 + y 去 y 加 ily:happy → happily
- 特殊:good → **well**(副),fast → **fast**(形副同形),hard → **hard**(努力)/ **hardly**(几乎不)

考点:**feel/look/smell/taste/sound** 后接**形容词**;修饰实义动词用**副词**。`,
      questions: [
        {
          id: 'g10-1',
          type: 'single',
          stem: 'She sings ___ and everyone enjoys her songs.',
          options: ['A) beautiful', 'B) beautifully', 'C) beauty', 'D) more beautiful'],
          answer: 1,
          explain:
            '**B**。修饰动词 sings 要用副词 beautifully。beautiful 是形容词,修饰名词。',
        },
        {
          id: 'g10-2',
          type: 'single',
          stem: 'The food on the table smells ___.',
          options: ['A) well', 'B) good', 'C) badly', 'D) beautifully'],
          answer: 1,
          explain:
            '**B**。smell 是感官动词,后接形容词作表语,good = 好闻。well 作形容词指"身体健康"。',
        },
        {
          id: 'g10-3',
          type: 'single',
          stem: 'He works very ___, so his boss likes him.',
          options: ['A) hard', 'B) hardly', 'C) harder', 'D) hardest'],
          answer: 0,
          explain:
            '**A**。修饰动词 works 用副词 hard(努力地)。hardly 意为"几乎不",意思完全相反。',
        },
      ],
    },
    reading: {
      title: 'A Careful Driver',
      text: `Mr. Brown is known as a very careful driver. He always drives slowly in busy streets and never breaks traffic rules. Although he has driven for thirty years, he still listens carefully to the traffic news before he sets off. His passengers often say that they feel completely safe with him. In his opinion, a good driver must think about the safety of others, not only his own speed.`,
      questions: [
        {
          id: 'r10-1',
          type: 'single',
          stem: 'What kind of driver is Mr. Brown?',
          options: [
            'A) Fast and careless',
            'B) Careful and safe',
            'C) Young and new',
            'D) Rude to passengers',
          ],
          answer: 1,
          explain:
            '**B**。文中 "a very careful driver" 与 "feel completely safe with him" 均说明他谨慎安全。',
        },
        {
          id: 'r10-2',
          type: 'blank',
          stem: 'The word "completely" most likely means ___ (中文).',
          answer: '完全地 / 彻底地',
          explain:
            '"feel completely safe" 中 completely 修饰 safe,意为"完全地"。',
        },
        {
          id: 'r10-3',
          type: 'judge',
          stem: '判断对错:Mr. Brown often breaks traffic rules.',
          options: ['正确', '错误'],
          answer: 1,
          explain:
            '**选错误(1)**。文中 "never breaks traffic rules"(从不违章),与题干相反。',
        },
      ],
    },
    translation: [
      {
        en: 'The children are playing happily in the garden.',
        zh: '孩子们正在花园里快乐地玩耍。',
        tip: 'happily 副词修饰动词 playing',
      },
      {
        en: 'This soup tastes delicious.',
        zh: '这汤尝起来很美味。',
        tip: 'taste + 形容词作表语',
      },
      {
        en: 'He speaks English very well.',
        zh: '他英语说得很好。',
        tip: 'well 是副词,修饰 speaks',
      },
    ],
    writing: {
      prompt: '用形容词和副词描述一个人(外貌、动作),写 3 句话。',
      template:
        'She is a ____ girl. She walks ____ and speaks ____. Everyone likes her.',
      sample:
        'She is a lovely girl. She walks slowly and speaks softly. Everyone likes her.',
      keyWords: ['lovely', 'slowly', 'softly'],
    },
  },

  // ---------------- Day 11 ----------------
  {
    day: 11,
    title: 'Comparatives & Superlatives · 比较级与最高级',
    vocab: [],
    grammar: {
      title: '形容词/副词的比较级与最高级',
      body: `**构成**:
- 单音节词尾加 -er / -est:tall → **taller** → **tallest**
- 以 -e 结尾加 -r / -st:large → **larger** → **largest**
- 辅音 + y 去 y 加 -ier / -iest:happy → **happier** → **happiest**
- 双写末辅音:big → **bigger** → **biggest**
- 多音节前加 more / most:beautiful → **more beautiful** → **most beautiful**

**句型**:
- 比较:**A is taller than B.**(than 引出比较对象)
- 最高级:**A is the tallest of the three.**(the + 最高级 + 范围)
- 越……越……:**The harder you work, the luckier you will be.**

不规则:**good/well → better → best**;**bad/ill → worse → worst**;**many/much → more → most**。`,
      questions: [
        {
          id: 'g11-1',
          type: 'single',
          stem: 'This question is ___ than the last one.',
          options: ['A) difficult', 'B) more difficult', 'C) most difficult', 'D) difficulter'],
          answer: 1,
          explain:
            '**B**。difficult 是多音节词,比较级在前面加 more → more difficult。',
        },
        {
          id: 'g11-2',
          type: 'single',
          stem: 'Lucy is the ___ student in our class.',
          options: ['A) good', 'B) better', 'C) best', 'D) most good'],
          answer: 2,
          explain:
            '**C**。good 的最高级是 best;the + 最高级 + 范围(in our class)。',
        },
        {
          id: 'g11-3',
          type: 'single',
          stem: 'Tom is ___ taller than his brother.',
          options: ['A) very', 'B) much', 'C) more', 'D) most'],
          answer: 1,
          explain:
            '**B**。修饰比较级用 much / a lot / even / a little。very 只能修饰原级,不能修饰比较级。',
        },
      ],
    },
    reading: {
      title: 'The Fastest Way to Work',
      text: `For most people in big cities, the subway is the fastest way to get to work. It is quicker than taking a bus, and it is much cheaper than driving a car. During rush hours, the streets become so crowded that cars move very slowly. In contrast, trains run on time and carry thousands of passengers at once. That is why more and more commuters choose the subway every day.`,
      questions: [
        {
          id: 'r11-1',
          type: 'single',
          stem: 'Why is the subway the most popular choice?',
          options: [
            'A) It is slow and cheap',
            'B) It is fast, cheap and on time',
            'C) It is the most expensive',
            'D) It carries few people',
          ],
          answer: 1,
          explain:
            '**B**。文中 quicker, cheaper, on time, carry thousands 均支持 B 选项。',
        },
        {
          id: 'r11-2',
          type: 'blank',
          stem: 'The word "crowded" most likely means ___ (中文).',
          answer: '拥挤的',
          explain:
            'rush hours(高峰期) cars move very slowly,说明街道"拥挤",crowded = 拥挤的。',
        },
        {
          id: 'r11-3',
          type: 'judge',
          stem: '判断对错:Driving a car is cheaper than taking the subway.',
          options: ['正确', '错误'],
          answer: 1,
          explain:
            '**选错误(1)**。文中 "much cheaper than driving a car" 指地铁比开车便宜,题干说反了。',
        },
      ],
    },
    translation: [
      {
        en: 'Health is more important than wealth.',
        zh: '健康比财富更重要。',
        tip: 'important 多音节,比较级用 more',
      },
      {
        en: 'She is one of the best teachers in our school.',
        zh: '她是我们学校最好的老师之一。',
        tip: 'one of the + 最高级 + 复数名词',
      },
      {
        en: 'The more you practice, the better you will become.',
        zh: '你练习得越多,就会变得越好。',
        tip: 'The + 比较级, the + 比较级',
      },
    ],
    writing: {
      prompt: '比较两种交通工具(如地铁和公交),用比较级和最高级写一段话。',
      template:
        'The subway is ____ than the bus. It is the ____ way to travel. I think it is the ____ choice for workers.',
      sample:
        'The subway is faster than the bus. It is the cheapest way to travel. I think it is the best choice for workers.',
      keyWords: ['faster', 'cheapest', 'best'],
    },
  },

  // ---------------- Day 12 ----------------
  {
    day: 12,
    title: 'Numbers & Times · 数词与倍数表达',
    vocab: [],
    grammar: {
      title: '数词、分数与倍数表达',
      body: `**基数词**(数量):one, two, three, hundred, thousand, million。
- 注意:hundred / thousand 前有数字时**不加 -s**:**two hundred**(✅) / two hundreds(❌)。
- 表"数百":**hundreds of**(加 -s,且接 of)。

**序数词**(顺序):first, second, third, ... twentieth, ...。
- 前面通常加 the:the **first** lesson。

**分数**:分子(基数词)+ 分母(序数词,复数)。
- 1/3 = **one third**;2/3 = **two thirds**;1/2 = **a half**;1/4 = **a quarter**。

**倍数表达**:
- A is **twice / three times** as + 形容词 + as B。
- A is **twice** the size of B。
- A is **three times** bigger than B。`,
      questions: [
        {
          id: 'g12-1',
          type: 'single',
          stem: 'There are about two ___ students in our school.',
          options: ['A) hundred', 'B) hundreds', 'C) hundreds of', 'D) hundred of'],
          answer: 0,
          explain:
            '**A**。hundred 前有具体数字 two 时不加 -s,也不接 of → two hundred。',
        },
        {
          id: 'g12-2',
          type: 'single',
          stem: '___ of the earth is covered by water.',
          options: ['A) Two third', 'B) Two thirds', 'C) Second three', 'D) Second third'],
          answer: 1,
          explain:
            '**B**。分数表达:分子用基数词,分母用序数词;分子大于 1 时分母加 -s → two thirds。',
        },
        {
          id: 'g12-3',
          type: 'single',
          stem: 'This room is three times as ___ as that one.',
          options: ['A) large', 'B) larger', 'C) largest', 'D) largely'],
          answer: 0,
          explain:
            '**A**。as...as 中间用**原级**,故选 large。three times 是倍数,放在 as...as 之前。',
        },
      ],
    },
    reading: {
      title: 'A Growing City',
      text: `Fifty years ago, this city was only a small town with about twenty thousand people. Today, its population has reached more than two million. About two thirds of the people live in tall apartment buildings in the city center. There are hundreds of shops, schools, and hospitals everywhere. Although the city has grown much bigger, many old people still remember the quiet, slow life of the past.`,
      questions: [
        {
          id: 'r12-1',
          type: 'single',
          stem: 'What was the city like fifty years ago?',
          options: [
            'A) A big modern city',
            'B) A small town',
            'C) A rich capital',
            'D) An industrial center',
          ],
          answer: 1,
          explain:
            '**B**。文中 "only a small town with about twenty thousand people",对应 B 选项。',
        },
        {
          id: 'r12-2',
          type: 'blank',
          stem: 'The word "population" most likely means ___ (中文).',
          answer: '人口',
          explain:
            '由 "more than two million" 与 "live in tall apartment buildings" 推断,population 指"人口"。',
        },
        {
          id: 'r12-3',
          type: 'judge',
          stem: '判断对错:About two thirds of the people live in the city center.',
          options: ['正确', '错误'],
          answer: 0,
          explain:
            '**选正确(0)**。文中 "About two thirds of the people live in...the city center" 与题干一致。',
        },
      ],
    },
    translation: [
      {
        en: 'One third of the students are from the south.',
        zh: '三分之一的学生来自南方。',
        tip: 'one third = 1/3',
      },
      {
        en: 'This bridge is twice as long as that one.',
        zh: '这座桥是那座桥的两倍长。',
        tip: 'twice as + 形容词 + as',
      },
      {
        en: 'Hundreds of people joined the marathon.',
        zh: '数百人参加了马拉松。',
        tip: 'hundreds of 表"数百的",加 -s',
      },
    ],
    writing: {
      prompt: '用数词和倍数描述你所在城市的变化,写 3 句话。',
      template:
        'Ten ____ ago, our city was small. Now it has ____ of buildings. The population is twice as ____ as before.',
      sample:
        'Ten years ago, our city was small. Now it has hundreds of buildings. The population is twice as large as before.',
      keyWords: ['years', 'hundreds', 'large'],
    },
  },

  // ---------------- Day 13 ----------------
    {
      day: 13,
      title: 'There be Structure · There be 句型',
      vocab: [],
      grammar: {
        title: 'There be 句型(存在句)',
        body: `**There be** 表"某地有某物/某人",强调**存在**,be 后的名词是真正主语。

- **就近原则**:be 单复数由**离它最近的名词**决定。
  - There **is** a book and two pens on the desk.(靠近 a book → is)
  - There **are** two pens and a book on the desk.(靠近 two pens → are)

- **时态变化**:There is/are;There was/were;There will be;There has/have been。
- **与 have 区分**:
  - There be 表"客观存在";have/has 表"拥有"。
  - ✅ There is a computer in the room. ❌ It has a computer in the room.
- **There be 的反意疑问句**:There is a cat, **isn't there**?`,
        questions: [
          {
            id: 'g13-1',
            type: 'single',
            stem: 'There ___ an apple and some bananas in the basket.',
            options: ['A) is', 'B) are', 'C) has', 'D) have'],
            answer: 0,
            explain:
              '**A**。There be 就近原则:靠近 an apple(单数),用 is。不可用 has,there be 不表"拥有"。',
          },
          {
            id: 'g13-2',
            type: 'single',
            stem: 'There ___ a football match in our school tomorrow.',
            options: ['A) is', 'B) was', 'C) will be', 'D) has been'],
            answer: 2,
            explain:
              '**C**。tomorrow 表将来,There be 的将来式为 There will be。',
          },
          {
            id: 'g13-3',
            type: 'single',
            stem: 'There are some mistakes in your homework, ___?',
              options: [
                "A) aren't there",
                "B) isn't it",
                "C) don't they",
                "D) are there",
              ],
              answer: 0,
              explain:
                "**A**。There be 的反意疑问句用 there 来反问:前肯后否 → aren't there。",
          },
        ],
      },
      reading: {
        title: 'A Small Town',
        text: `There is a small town at the foot of the mountain. There are about five hundred families living there. In the center of the town, there is an old temple which was built three hundred years ago. There will be a big festival next month, and many visitors are expected to come. Although there are not many shops, the people there live a peaceful and happy life.`,
        questions: [
          {
            id: 'r13-1',
            type: 'single',
            stem: 'What is in the center of the town?',
            options: [
              'A) A modern hotel',
              'B) An old temple',
              'C) A big factory',
              'D) A new school',
            ],
            answer: 1,
            explain:
              '**B**。文中 "there is an old temple" 建于三百年前,在镇中心。',
          },
          {
            id: 'r13-2',
            type: 'blank',
            stem: 'The word "festival" most likely means ___ (中文).',
            answer: '节日 / 庆典',
            explain:
              '由 "many visitors are expected to come" 与 "big...next month" 推断,festival 指"节日庆典"。',
          },
          {
            id: 'r13-3',
            type: 'judge',
            stem: '判断对错:There are more than one thousand families in the town.',
            options: ['正确', '错误'],
            answer: 1,
            explain:
              '**选错误(1)**。文中 "about five hundred families"(约 500 户),题干"超过一千户"不符。',
          },
        ],
      },
      translation: [
        {
          en: 'There is a hole in my sock.',
          zh: '我的袜子上有一个洞。',
          tip: 'There be 表存在',
        },
        {
          en: 'There are many differences between the two languages.',
          zh: '这两种语言之间有很多不同之处。',
          tip: 'There are + 复数名词',
        },
        {
          en: 'There will be a meeting this afternoon.',
          zh: '今天下午将有一个会议。',
          tip: 'There will be 将来时',
        },
      ],
      writing: {
        prompt: '用 There be 句型描述你的房间或办公室,写 3 句话。',
        template:
          'There is a ____ in my room. There are some ____ on the desk. There will be a ____ tomorrow.',
        sample:
          'There is a bed in my room. There are some books on the desk. There will be a meeting tomorrow.',
        keyWords: ['bed', 'books', 'meeting'],
      },
    },

  // ---------------- Day 14 ----------------
  {
    day: 14,
    title: 'The Uses of "It" · it 的用法',
    vocab: [],
    grammar: {
      title: 'it 的多种用法',
      body: `**it** 的常见用法:

1. **代指事物或动物**:I bought a book. **It** is interesting.
2. **指代性别不明的婴儿或未知的人**:Someone is knocking. Who is **it**?
3. **指代时间、天气、距离、环境**:
   - **It is** seven o'clock.(时间)
   - **It is** raining.(天气)
   - **It is** two miles to the station.(距离)
4. **形式主语**(真正主语在后):
   - **It is** important **to learn** English. = To learn English is important.
   - **It is** a pity **that** you missed the party.
5. **形式宾语**:
   - I find **it** hard **to get up** early.
6. **强调句**:**It is/was + 被强调部分 + that/who + 其余**:
   - **It was** Tom **who** broke the window.`,
      questions: [
        {
          id: 'g14-1',
          type: 'single',
          stem: '___ is important to learn a foreign language well.',
          options: ['A) This', 'B) That', 'C) It', 'D) There'],
          answer: 2,
          explain:
            '**C**。不定式 to learn 作真正主语,前置用 it 作形式主语,句型 It is + adj. + to do。',
        },
        {
          id: 'g14-2',
          type: 'single',
          stem: 'I find ___ difficult to finish the work in one hour.',
          options: ['A) this', 'B) that', 'C) it', 'D) its'],
          answer: 2,
          explain:
            '**C**。find 后接 it 作形式宾语,真正的宾语是 to finish...;搭配 find it + adj. + to do。',
        },
        {
          id: 'g14-3',
          type: 'single',
          stem: 'It was in 2008 ___ the Olympic Games were held in Beijing.',
          options: ['A) that', 'B) which', 'C) when', 'D) what'],
          answer: 0,
          explain:
            '**A**。这是强调句:It is/was + 被强调部分(in 2008)+ that + 其余。强调时间状语仍用 that,不用 when。',
        },
      ],
    },
    reading: {
      title: 'It Is Never Too Late',
      text: `Many adults believe that it is too late to learn something new after a certain age. However, experts say that it is never too late to start learning. In fact, it has been proved that the brain can keep growing as long as we keep using it. It is said that a 90-year-old woman learned to use a computer and finally wrote her own book. Learning brings meaning to life, no matter how old we are.`,
      questions: [
        {
          id: 'r14-1',
          type: 'single',
          stem: 'What is the main idea of the passage?',
          options: [
            'A) Old people cannot learn',
            'B) It is never too late to learn',
            'C) Computers are too hard',
            'D) Writing books is easy',
          ],
          answer: 1,
          explain:
            '**B**。文章中心句 "it is never too late to start learning",通篇论证任何年龄都可学习。',
        },
        {
          id: 'r14-2',
          type: 'blank',
          stem: 'The word "proved" most likely means ___ (中文).',
          answer: '证明 / 证实',
          explain:
            '"it has been proved that the brain can keep growing"(已经证明大脑能持续生长),prove = 证明。',
        },
        {
          id: 'r14-3',
          type: 'judge',
          stem: '判断对错:The passage gives an example of an old woman who learned to use a computer.',
          options: ['正确', '错误'],
          answer: 0,
          explain:
            '**选正确(0)**。文中 "a 90-year-old woman learned to use a computer" 与题干一致。',
        },
      ],
    },
    translation: [
      {
        en: 'It is necessary for us to review lessons every day.',
        zh: '我们每天复习功课是必要的。',
        tip: 'It is + adj. + for sb. + to do(形式主语)',
      },
      {
        en: 'It is two kilometers from my home to the school.',
        zh: '从我家到学校有两公里。',
        tip: 'it 指代距离',
      },
      {
        en: 'It was my mother who encouraged me to keep trying.',
        zh: '是母亲鼓励我继续尝试。',
        tip: '强调句:It is/was ... who/that ...',
      },
    ],
    writing: {
      prompt: '用 it 的形式主语或强调句,写一段话谈学习的重要性。',
      template:
        'It is ____ to learn new skills. It is said that ____. It was my ____ who taught me to keep learning.',
      sample:
        'It is important to learn new skills. It is said that learning keeps us young. It was my teacher who taught me to keep learning.',
      keyWords: ['important', 'learning', 'teacher'],
    },
  },
]
