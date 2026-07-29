import type { DayPlan } from '../types'

// Phase B: Day 15 ~ Day 27 —— 时态与语态(13 天)
export const PHASE_B: DayPlan[] = [
  // ========================= Day 15 一般现在时 =========================
  {
    day: 15,
    title: 'Daily Routines · 一般现在时',
    vocab: [],
    grammar: {
      title: '一般现在时 (Simple Present)',
      body: `表示**经常性、习惯性**的动作或**客观真理**。

- 构成:**主语 + 动词原形**;第三人称单数加 **-s / -es**。
- 时间标志:always, usually, often, every day, on Sundays, in the morning。
- 否定:don't / doesn't + 动词原形;疑问:Do / Does + 主语 + 动词原形。

注意:**主将从现**——在 when / if / as soon as 引导的时间或条件状语从句中,用一般现在时表将来。`,
      questions: [
        {
          id: 'g15-1',
          type: 'single',
          stem: 'The earth ___ around the sun.',
          options: ['A) move', 'B) moves', 'C) moved', 'D) is moving'],
          answer: 1,
          explain: '**B**。客观真理用一般现在时;主语 the earth 为三单,动词加 -s:moves。',
        },
        {
          id: 'g15-2',
          type: 'single',
          stem: 'If it ___ tomorrow, we will stay at home.',
          options: ['A) will rain', 'B) rains', 'C) rained', 'D) is raining'],
          answer: 1,
          explain: '**B**。if 引导的条件状语从句遵循"主将从现",从句用一般现在时 rains 表将来。',
        },
        {
          id: 'g15-3',
          type: 'judge',
          stem: 'He don\'t like coffee. (判断句子正误)',
          options: ['正确', '错误'],
          answer: 1,
          explain: '**错误**。主语 he 为三单,否定应借助 doesn\'t:He doesn\'t like coffee.',
        },
      ],
    },
    reading: {
      title: 'The Morning Habit',
      text: `Tom is a high school teacher. Every morning he gets up at six and jogs in the park for half an hour. Then he eats a simple breakfast of bread and milk. He believes that a regular routine keeps his mind clear and his body strong. On weekends, however, he relaxes and spends time with his children. His friends often ask him why he never skips his morning run. He just smiles and says it has become part of his life.`,
      questions: [
        {
          id: 'r15-1',
          type: 'single',
          stem: 'What does Tom do every morning?',
          options: [
            'A) He reads newspapers',
            'B) He jogs in the park',
            'C) He plays with his children',
            'D) He teaches at school',
          ],
          answer: 1,
          explain: '**B**。文中"he gets up at six and jogs in the park",每天早上他在公园慢跑。',
        },
        {
          id: 'r15-2',
          type: 'single',
          stem: 'Why does Tom keep a regular routine?',
          options: [
            'A) To save money',
            'B) To please his friends',
            'C) To keep his mind clear and body strong',
            'D) To sleep longer',
          ],
          answer: 2,
          explain: '**C**。原文"a regular routine keeps his mind clear and his body strong"。',
        },
        {
          id: 'r15-3',
          type: 'judge',
          stem: 'Tom skips his morning run on busy days.',
          options: ['正确', '错误'],
          answer: 1,
          explain: '**错误**。文中说 he never skips his morning run,他从不错过晨跑。',
        },
      ],
    },
    translation: [
      {
        en: 'She usually goes to work by subway.',
        zh: '她通常乘地铁去上班。',
        tip: 'by + 交通工具,中间不加冠词。',
      },
      {
        en: 'Water boils at 100 degrees Celsius.',
        zh: '水在 100 摄氏度时沸腾。',
        tip: '客观真理/科学事实用一般现在时。',
      },
      {
        en: 'I will call you as soon as I arrive in Beijing.',
        zh: '我一到北京就会给你打电话。',
        tip: 'as soon as 引导时间状语从句,主将从现。',
      },
    ],
    writing: {
      prompt: '用一般现在时写一段话(约 50 词),描述你一个朋友每天的日常习惯。',
      template:
        'My friend ____ gets up at ____. Then he/she ____. In the evening, he/she usually ____. This healthy habit makes him/her ____.',
      sample:
        'My friend Anna gets up at six every day. Then she runs in the park for thirty minutes. In the evening, she usually reads a book before sleep. This healthy habit makes her energetic and focused at work.',
      keyWords: ['habit', 'regular', 'energetic'],
    },
  },

  // ========================= Day 16 一般过去时 =========================
  {
    day: 16,
    title: 'Looking Back · 一般过去时',
    vocab: [],
    grammar: {
      title: '一般过去时 (Simple Past)',
      body: `表示**过去某一时间**发生的动作或存在的状态。

- 构成:**规则动词加 -ed**;不规则动词需单独记忆(go→went, see→saw, take→took)。
- 时间标志:yesterday, last week, in 2010, two days ago, just now。
- 否定:didn't + 动词原形;疑问:Did + 主语 + 动词原形。

易错点:**疑问与否定中动词要还原为原形**,不能保留 -ed 或不规则形式。`,
      questions: [
        {
          id: 'g16-1',
          type: 'single',
          stem: 'I ___ him at the library yesterday afternoon.',
          options: ['A) see', 'B) saw', 'C) seen', 'D) seeing'],
          answer: 1,
          explain: '**B**。yesterday afternoon 为过去时间,see 的过去式为 saw。',
        },
        {
          id: 'g16-2',
          type: 'single',
          stem: '___ you finish the report last night?',
          options: ['A) Do', 'B) Does', 'C) Did', 'D) Were'],
          answer: 2,
          explain: '**C**。last night 表过去,疑问句用 Did + 主语 + 动词原形 finish。',
        },
        {
          id: 'g16-3',
          type: 'judge',
          stem: 'He didn\'t went to school yesterday. (判断句子正误)',
          options: ['正确', '错误'],
          answer: 1,
          explain: '**错误**。否定句 didn\'t 后须用动词原形:He didn\'t go to school yesterday.',
        },
      ],
    },
    reading: {
      title: 'A Memorable Trip',
      text: `Last summer, Lisa traveled to Yunnan with her family. They visited the old town of Lijiang and climbed a snowy mountain. On the third day, it rained heavily, so they stayed in a small cafe and drank hot tea. Lisa took hundreds of photos and bought some beautiful handicrafts. Although the trip was tiring, she felt very happy. She still remembers the friendly local people and the delicious rice noodles they ate on the last night.`,
      questions: [
        {
          id: 'r16-1',
          type: 'single',
          stem: 'When did Lisa travel to Yunnan?',
          options: [
            'A) Last spring',
            'B) Last summer',
            'C) Last winter',
            'D) Last autumn',
          ],
          answer: 1,
          explain: '**B**。首句"Last summer, Lisa traveled to Yunnan with her family."。',
        },
        {
          id: 'r16-2',
          type: 'single',
          stem: 'What did they do on the rainy day?',
          options: [
            'A) They climbed the mountain',
            'B) They stayed in a cafe',
            'C) They took photos',
            'D) They bought handicrafts',
          ],
          answer: 1,
          explain: '**B**。第三句"they stayed in a small cafe and drank hot tea."。',
        },
        {
          id: 'r16-3',
          type: 'blank',
          stem: 'The word "tiring" in the passage means ___ (中文).',
          answer: '令人疲倦的 / 累人的',
          explain: '结合 trip 旅途虽累但她开心,tiring 意为"令人疲惫的"。',
        },
      ],
    },
    translation: [
      {
        en: 'He graduated from college three years ago.',
        zh: '他三年前大学毕业。',
        tip: 'three years ago 是典型过去时间标志。',
      },
      {
        en: 'Did you watch the football match last night?',
        zh: '你昨晚看足球比赛了吗?',
        tip: '疑问句用 Did,后接动词原形 watch。',
      },
      {
        en: 'She did not tell anyone the secret.',
        zh: '她没有把秘密告诉任何人。',
        tip: 'did not + 动词原形 tell。',
      },
    ],
    writing: {
      prompt: '用一般过去时写一段话(约 50 词),回忆你上周末做过的一件事。',
      template:
        'Last weekend, I ____. First, I ____. Then I ____ with my ____. In the end, I felt ____.',
      sample:
        'Last weekend, I went to the countryside with my parents. First, I helped my grandmother in the garden. Then I cooked dinner with my mother. In the end, I felt tired but truly happy.',
      keyWords: ['went', 'helped', 'felt'],
    },
  },

  // ========================= Day 17 一般将来时 =========================
  {
    day: 17,
    title: 'Plans Ahead · 一般将来时',
    vocab: [],
    grammar: {
      title: '一般将来时 (will / be going to)',
      body: `表示**将来**要发生的动作或状态。

- **will + 动词原形**:表临时决定、预言或客观未来。
- **be going to + 动词原形**:表**已经计划好**的事,或根据目前迹象作出的判断。
- 时间标志:tomorrow, next month, in a few days, soon。

辨析:"Look at the clouds! It **is going to** rain."(有迹象) vs "Maybe it **will** rain."(主观预测)。`,
      questions: [
        {
          id: 'g17-1',
          type: 'single',
          stem: 'Look at those dark clouds! It ___ rain.',
          options: ['A) will', 'B) is going to', 'C) rains', 'D) shall'],
          answer: 1,
          explain: '**B**。有客观迹象(乌云),用 be going to 表即将发生。',
        },
        {
          id: 'g17-2',
          type: 'single',
          stem: 'I think people ___ live on Mars in the future.',
          options: ['A) will', 'B) are going to', 'C) lived', 'D) have lived'],
          answer: 0,
          explain: '**A**。对未来的预测(in the future),用 will + 动词原形。',
        },
        {
          id: 'g17-3',
          type: 'judge',
          stem: 'She is going to will visit her aunt tomorrow. (判断句子正误)',
          options: ['正确', '错误'],
          answer: 1,
          explain: '**错误**。be going to 与 will 不能并用,应为 is going to visit 或 will visit。',
        },
      ],
    },
    reading: {
      title: 'Our City in 2035',
      text: `Our city is changing quickly. Engineers say that by 2035, driverless buses will run on every main street. Solar panels will cover most rooftops, and clean energy will replace traditional coal. Some people worry that machines will take away jobs, but experts believe new industries will create even more work. Citizens will also enjoy greener parks and wider bicycle lanes. The mayor promises that the changes will make life healthier and more convenient for everyone.`,
      questions: [
        {
          id: 'r17-1',
          type: 'single',
          stem: 'What will happen to public transport by 2035?',
          options: [
            'A) Buses will disappear',
            'B) Driverless buses will run on main streets',
            'C) Cars will be banned',
            'D) Streets will be closed',
          ],
          answer: 1,
          explain: '**B**。文中"driverless buses will run on every main street"。',
        },
        {
          id: 'r17-2',
          type: 'single',
          stem: 'What do experts believe about jobs?',
          options: [
            'A) All jobs will be lost',
            'B) Only old jobs will remain',
            'C) New industries will create more work',
            'D) Nobody will work at home',
          ],
          answer: 2,
          explain: '**C**。原文"new industries will create even more work"。',
        },
        {
          id: 'r17-3',
          type: 'judge',
          stem: 'The passage says clean energy will replace coal.',
          options: ['正确', '错误'],
          answer: 0,
          explain: '**正确**。文中"clean energy will replace traditional coal"。',
        },
      ],
    },
    translation: [
      {
        en: 'We will have an English test next Monday.',
        zh: '下周一我们将有一次英语测试。',
        tip: 'will + 动词原形 have。',
      },
      {
        en: 'They are going to build a new hospital here.',
        zh: '他们打算在这里建一座新医院。',
        tip: 'be going to 表已计划的安排。',
      },
      {
        en: 'Don\'t worry. I will help you with the luggage.',
        zh: '别担心,我会帮你拿行李。',
        tip: 'will 表临时决定、主动帮忙。',
      },
    ],
    writing: {
      prompt: '用一般将来时写一段话(约 50 词),描述你下个假期的计划。',
      template:
        'Next holiday, I am going to ____. I will ____ with my ____. I also want to ____. I believe it will be ____.',
      sample:
        'Next holiday, I am going to travel to Shanghai. I will visit several museums with my classmates. I also want to try local snacks. I believe it will be an unforgettable trip full of joy.',
      keyWords: ['going to', 'will', 'unforgettable'],
    },
  },

  // ========================= Day 18 现在进行时 =========================
  {
    day: 18,
    title: 'Right Now · 现在进行时',
    vocab: [],
    grammar: {
      title: '现在进行时 (Present Continuous)',
      body: `表示**说话时刻**或**现阶段**正在进行的动作。

- 构成:**am / is / are + 动词-ing**。
- 时间标志:now, right now, at this moment, Look!, Listen!, these days。
- 动词变化:一般加 -ing;以 e 结尾去 e 加 -ing(make→making);重读闭音节双写尾字母加 -ing(run→running, sit→sitting)。

注意:**状态动词**一般不用进行时:know, love, want, belong, understand 等。`,
      questions: [
        {
          id: 'g18-1',
          type: 'single',
          stem: 'Be quiet! The baby ___ in the bedroom.',
          options: ['A) sleeps', 'B) is sleeping', 'C) slept', 'D) sleep'],
          answer: 1,
          explain: '**B**。"Be quiet!"提示说话时刻正在发生,用 is sleeping。',
        },
        {
          id: 'g18-2',
          type: 'single',
          stem: 'They ___ a new library in our town these days.',
          options: [
            'A) build',
            'B) built',
            'C) are building',
            'D) will build',
          ],
          answer: 2,
          explain: '**C**。these days 表现阶段正在进行,用 are building。',
        },
        {
          id: 'g18-3',
          type: 'judge',
          stem: 'I am knowing the answer now. (判断句子正误)',
          options: ['正确', '错误'],
          answer: 1,
          explain: '**错误**。know 是状态动词,不用进行时,应为 I know the answer now.',
        },
      ],
    },
    reading: {
      title: 'A Busy Afternoon',
      text: `It is three o'clock on Sunday afternoon, and the whole family is busy. Father is washing his car in the yard, while Mother is cooking dinner in the kitchen. The elder sister is reviewing her lessons for an exam. Outside, two boys are flying a kite, and their dog is running happily after it. Even Grandpa is busy — he is reading a thick newspaper beside the window. Everyone is enjoying this warm and peaceful afternoon.`,
      questions: [
        {
          id: 'r18-1',
          type: 'single',
          stem: 'What is Mother doing?',
          options: [
            'A) Washing the car',
            'B) Cooking dinner',
            'C) Reviewing lessons',
            'D) Flying a kite',
          ],
          answer: 1,
          explain: '**B**。文中"Mother is cooking dinner in the kitchen"。',
        },
        {
          id: 'r18-2',
          type: 'single',
          stem: 'Where is Grandpa reading the newspaper?',
          options: [
            'A) In the yard',
            'B) In the kitchen',
            'C) Beside the window',
            'D) Under a tree',
          ],
          answer: 2,
          explain: '**C**。原文"he is reading a thick newspaper beside the window"。',
        },
        {
          id: 'r18-3',
          type: 'blank',
          stem: 'The word "peaceful" most likely means ___ (中文).',
          answer: '宁静的 / 和平的',
          explain: '结合温暖午后人人忙碌而愉快的氛围,peaceful 意为"宁静的"。',
        },
      ],
    },
    translation: [
      {
        en: 'The students are doing an experiment in the lab now.',
        zh: '学生们现在正在实验室做实验。',
        tip: 'now + are doing,现在进行时。',
      },
      {
        en: 'Please be seated. The meeting is beginning.',
        zh: '请就座,会议马上开始。',
        tip: 'is beginning 表即将发生的动作。',
      },
      {
        en: 'Listen! Someone is knocking at the door.',
        zh: '听!有人在敲门。',
        tip: 'Listen! 是进行时的典型提示词。',
      },
    ],
    writing: {
      prompt: '用现在进行时写一段话(约 50 词),描述此刻你的家人或同学正在做什么。',
      template:
        'Right now, my father is ____. My mother is ____. My sister is ____. And I ____. We are all ____.',
      sample:
        'Right now, my father is reading the newspaper. My mother is watering the flowers. My sister is practicing the piano. And I am writing my English diary. We are all having a pleasant evening together.',
      keyWords: ['is reading', 'are having', 'right now'],
    },
  },

  // ========================= Day 19 过去进行时 =========================
  {
    day: 19,
    title: 'At That Moment · 过去进行时',
    vocab: [],
    grammar: {
      title: '过去进行时 (Past Continuous)',
      body: `表示**过去某一时刻或时段**正在进行的动作。

- 构成:**was / were + 动词-ing**。
- 时间标志:at 8 yesterday, at that time, this time yesterday, when / while 引导的从句。
- 常与一般过去时配合:**长动作(进行时)** 被 **短动作(过去时)** 打断 ——"I was reading when the phone rang."。

when 与 while:when 可接短/长动作;while 通常接长动作,且常用进行时。`,
      questions: [
        {
          id: 'g19-1',
          type: 'single',
          stem: 'I ___ a shower when the telephone rang.',
          options: [
            'A) take',
            'B) took',
            'C) was taking',
            'D) am taking',
          ],
          answer: 2,
          explain: '**C**。长动作(洗澡)被打断,用过去进行时 was taking。',
        },
        {
          id: 'g19-2',
          type: 'single',
          stem: 'While they ___ dinner, the lights went out.',
          options: [
            'A) have',
            'B) had',
            'C) were having',
            'D) are having',
          ],
          answer: 2,
          explain: '**C**。while 引导的长动作用过去进行时 were having。',
        },
        {
          id: 'g19-3',
          type: 'judge',
          stem: 'At ten last night, she is watching TV. (判断句子正误)',
          options: ['正确', '错误'],
          answer: 1,
          explain: '**错误**。过去时间应用过去进行时:was watching。',
        },
      ],
    },
    reading: {
      title: 'The Night the Lights Went Out',
      text: `At about nine o'clock last night, the whole neighborhood suddenly lost power. Mrs. Green was washing dishes in the kitchen. Her husband was reading a report on the sofa. Their children were playing video games in the bedroom. For a few minutes everything was dark and quiet. Mr. Green quickly found a flashlight, and the family sat together in the living room, telling stories. About an hour later, the electricity came back. Everyone cheered and went back to what they had been doing.`,
      questions: [
        {
          id: 'r19-1',
          type: 'single',
          stem: 'What was Mrs. Green doing when the power failed?',
          options: [
            'A) Reading a report',
            'B) Washing dishes',
            'C) Playing games',
            'D) Telling stories',
          ],
          answer: 1,
          explain: '**B**。文中"Mrs. Green was washing dishes in the kitchen."。',
        },
        {
          id: 'r19-2',
          type: 'single',
          stem: 'How did the family feel when the lights came back?',
          options: [
            'A) Angry',
            'B) Afraid',
            'C) Cheerful',
            'D) Bored',
          ],
          answer: 2,
          explain: '**C**。原文"Everyone cheered and went back..." cheered 与 cheerful 对应。',
        },
        {
          id: 'r19-3',
          type: 'judge',
          stem: 'The electricity returned about an hour later.',
          options: ['正确', '错误'],
          answer: 0,
          explain: '**正确**。文中"About an hour later, the electricity came back."。',
        },
      ],
    },
    translation: [
      {
        en: 'At eight yesterday evening, I was reviewing my lessons.',
        zh: '昨天晚上八点,我正在复习功课。',
        tip: 'at + 过去时刻 + was doing。',
      },
      {
        en: 'When the teacher came in, the students were talking loudly.',
        zh: '老师进来时,学生们正在大声说话。',
        tip: 'when + 短动作(过去时),主句长动作(进行时)。',
      },
      {
        en: 'He was walking home when it started to rain.',
        zh: '他正步行回家,这时开始下雨了。',
        tip: '长动作 was walking 被 started 打断。',
      },
    ],
    writing: {
      prompt: '用过述行时写一段话(约 50 词),描述昨晚某个时刻你和家人正在做什么。',
      template:
        'At ___ last night, I was ____. My father was ____, and my mother ____. Suddenly, ____. We ____.',
      sample:
        'At nine last night, I was doing my homework. My father was reading a magazine, and my mother was knitting a sweater. Suddenly, the lights went out. We sat together and chatted by candlelight.',
      keyWords: ['was doing', 'went out', 'suddenly'],
    },
  },

  // ========================= Day 20 现在完成时 =========================
  {
    day: 20,
    title: 'Up to Now · 现在完成时',
    vocab: [],
    grammar: {
      title: '现在完成时 (Present Perfect)',
      body: `表示**过去发生**且**对现在有影响**,或**持续到现在**的动作。

- 构成:**have / has + 过去分词**。
- 时间标志:already, yet, just, ever, never, recently, so far, since, for。
- 与一般过去时区别:现在完成时**不与**明确的过去时间(yesterday, last week)连用。

固定句型:**have been to**(去过,已回)、**have gone to**(去了,未回)、**have been in**(待在某地多久)。`,
      questions: [
        {
          id: 'g20-1',
          type: 'single',
          stem: 'I ___ my homework already. I can go out now.',
          options: [
            'A) finish',
            'B) finished',
            'C) have finished',
            'D) will finish',
          ],
          answer: 2,
          explain: '**C**。already 表完成且影响现在(可以出门),用 have finished。',
        },
        {
          id: 'g20-2',
          type: 'single',
          stem: 'Mr. Li ___ Shanghai. He will be back next week.',
          options: [
            'A) has been to',
            'B) has gone to',
            'C) has been in',
            'D) went',
          ],
          answer: 1,
          explain: '**B**。will be back 说明人尚未回来,用 has gone to(去了未回)。',
        },
        {
          id: 'g20-3',
          type: 'judge',
          stem: 'I have seen this film yesterday. (判断句子正误)',
          options: ['正确', '错误'],
          answer: 1,
          explain: '**错误**。现在完成时不能与明确的过去时间 yesterday 连用,应改为一般过去时 saw。',
        },
      ],
    },
    reading: {
      title: 'A Letter from an Old Friend',
      text: `Dear Mary,
It has been five years since we last met. I have just moved to a new city, and I have already found a job in a hospital. Recently I have taken up painting, and I have painted six pictures so far. My brother has traveled to ten countries for his work. Our old school has changed a lot — the teachers have built a new library. I have never forgotten the days we spent together. Please write back soon and tell me what you have done these years.`,
      questions: [
        {
          id: 'r20-1',
          type: 'single',
          stem: 'How many pictures has the writer painted so far?',
          options: ['A) Five', 'B) Six', 'C) Ten', 'D) None'],
          answer: 1,
          explain: '**B**。文中"I have painted six pictures so far."。',
        },
        {
          id: 'r20-2',
          type: 'single',
          stem: 'What has happened to the old school?',
          options: [
            'A) It has closed',
            'B) It has built a new library',
            'C) It has moved',
            'D) It has become a hospital',
          ],
          answer: 1,
          explain: '**B**。原文"the teachers have built a new library"。',
        },
        {
          id: 'r20-3',
          type: 'blank',
          stem: '"Taken up painting" most likely means ___ (中文).',
          answer: '开始从事绘画 / 培养绘画爱好',
          explain: 'take up 指"开始从事(某项活动或爱好)"。',
        },
      ],
    },
    translation: [
      {
        en: 'We have known each other since childhood.',
        zh: '我们从童年起就认识彼此。',
        tip: 'since + 时间点,用现在完成时。',
      },
      {
        en: 'Have you ever been to the Great Wall?',
        zh: '你曾经去过长城吗?',
        tip: 'have been to = 去过(已回)。',
      },
      {
        en: 'She has just finished writing the report.',
        zh: '她刚刚写完报告。',
        tip: 'just 常与现在完成时连用。',
      },
    ],
    writing: {
      prompt: '用现在完成时写一段话(约 50 词),讲述你今年到目前为止已完成或经历的三件事。',
      template:
        'This year, I have already ____. I have also ____. Besides, I have never ____ before, but now I ____. I feel ____.',
      sample:
        'This year, I have already read ten English books. I have also learned to cook two new dishes. Besides, I have never traveled alone before, but now I have visited Hangzhou by myself. I feel proud and more confident.',
      keyWords: ['have already', 'have never', 'so far'],
    },
  },

  // ========================= Day 21 过去完成时 =========================
  {
    day: 21,
    title: 'Before That Time · 过去完成时',
    vocab: [],
    grammar: {
      title: '过去完成时 (Past Perfect)',
      body: `表示**在过去某一时间或动作之前**已经发生的动作,即"**过去的过去**"。

- 构成:**had + 过去分词**。
- 常见搭配:**by the end of last term**, **by the time**, **before / when + 过去时**。
- 典型语境:叙述过去事件时,先发生的事用过去完成时,后发生的事用一般过去时。

注意:**主从先后**——"When we arrived, the film **had begun**."(电影先开始,后到达)。`,
      questions: [
        {
          id: 'g21-1',
          type: 'single',
          stem: 'By the time we got to the station, the train ___.',
          options: ['A) left', 'B) had left', 'C) has left', 'D) leaves'],
          answer: 1,
          explain: '**B**。火车离开发生在到达车站之前,用过去完成时 had left。',
        },
        {
          id: 'g21-2',
          type: 'single',
          stem: 'She said she ___ the novel twice.',
          options: [
            'A) read',
            'B) has read',
            'C) had read',
            'D) reads',
          ],
          answer: 2,
          explain: '**C**。读小说发生在 said 之前,用过去完成时 had read。',
        },
        {
          id: 'g21-3',
          type: 'judge',
          stem: 'When I arrived, the meeting has started. (判断句子正误)',
          options: ['正确', '错误'],
          answer: 1,
          explain: '**错误**。过去语境下的"过去的过去"应用过去完成时 had started。',
        },
      ],
    },
    reading: {
      title: 'The Late Guest',
      text: `Last Saturday was Anna's birthday party. By the time Tom arrived at seven thirty, most of his friends had already gathered in the garden. Anna had prepared a big cake and her mother had cooked many delicious dishes. Tom felt very sorry because he had missed the first game. He explained that his bike had broken down on the way. Luckily, Anna had saved a piece of cake for him, and everyone laughed and welcomed him warmly.`,
      questions: [
        {
          id: 'r21-1',
          type: 'single',
          stem: 'Why was Tom late?',
          options: [
            'A) He missed the bus',
            'B) His bike broke down',
            'C) He forgot the time',
            'D) He was ill',
          ],
          answer: 1,
          explain: '**B**。文中"his bike had broken down on the way"。',
        },
        {
          id: 'r21-2',
          type: 'single',
          stem: 'What had Anna done before Tom arrived?',
          options: [
            'A) She had left the party',
            'B) She had saved him a drink',
            'C) She had prepared a cake',
            'D) She had gone home',
          ],
          answer: 2,
          explain: '**C**。原文"Anna had prepared a big cake"。',
        },
        {
          id: 'r21-3',
          type: 'judge',
          stem: 'Anna was angry with Tom for being late.',
          options: ['正确', '错误'],
          answer: 1,
          explain: '**错误**。文中说 everyone laughed and welcomed him warmly,她并不生气。',
        },
      ],
    },
    translation: [
      {
        en: 'When we arrived at the cinema, the film had already begun.',
        zh: '当我们到达电影院时,电影已经开始了。',
        tip: '电影先开始,后到达——过去的过去用 had begun。',
      },
      {
        en: 'By the end of last year, they had planted thousands of trees.',
        zh: '到去年年底为止,他们已经种了成千上万棵树。',
        tip: 'by the end of + 过去时间,用过去完成时。',
      },
      {
        en: 'He said he had finished the work the day before.',
        zh: '他说他前一天就已经完成了工作。',
        tip: 'the day before 用于过去完成时语境。',
      },
    ],
    writing: {
      prompt: '用过去完成时写一段话(约 50 词),描述你某次迟到前的经过。',
      template:
        'Yesterday I was late for class. By the time I arrived, the teacher ____. I ____ because I ____. I promised that I ____.',
      sample:
        'Yesterday I was late for class. By the time I arrived, the teacher had begun the lesson. I felt sorry because I had missed the bus. I promised that I would never be late again.',
      keyWords: ['had begun', 'had missed', 'by the time'],
    },
  },

  // ========================= Day 22 现在完成进行时 =========================
  {
    day: 22,
    title: 'All Along · 现在完成进行时',
    vocab: [],
    grammar: {
      title: '现在完成进行时 (Present Perfect Continuous)',
      body: `表示**从过去某时开始一直持续到现在(可能仍在继续)**的动作。

- 构成:**have / has been + 动词-ing**。
- 时间标志:for two hours, since morning, all morning, lately, recently。
- 与现在完成时区别:进行时强调**动作的持续性 / 反复性**,常带感情色彩;完成时强调**结果**。
- 注意:状态动词(know, love, belong 等)通常不用此进行形式。

对比:"I **have written** three letters.(已完成)" / "I **have been writing** letters all morning.(还在写)"。`,
      questions: [
        {
          id: 'g22-1',
          type: 'single',
          stem: 'She ___ for three hours. She needs a rest.',
          options: [
            'A) has worked',
            'B) has been working',
            'C) worked',
            'D) is working',
          ],
          answer: 1,
          explain: '**B**。强调动作持续三小时且仍在进行,用 has been working。',
        },
        {
          id: 'g22-2',
          type: 'single',
          stem: 'I ___ my key. Now I cannot open the door.',
          options: [
            'A) have lost',
            'B) have been losing',
            'C) lost',
            'D) lose',
          ],
          answer: 0,
          explain: '**A**。强调"已丢"的结果(现在打不开门),用现在完成时 have lost。',
        },
        {
          id: 'g22-3',
          type: 'judge',
          stem: 'They have been knowing each other for ten years. (判断句子正误)',
          options: ['正确', '错误'],
          answer: 1,
          explain: '**错误**。know 是状态动词,不用进行时,应改为 have known。',
        },
      ],
    },
    reading: {
      title: 'The Long Project',
      text: `David and his team have been working on a new bridge for almost two years. They have been testing different materials every week to make sure the bridge is safe. David has been living near the building site since the project began. The workers have been getting up at five every morning and have been finishing their work late in the evening. Although they are tired, they feel proud because the bridge will soon be finished and will serve thousands of people every day.`,
      questions: [
        {
          id: 'r22-1',
          type: 'single',
          stem: 'How long have David and his team been working on the bridge?',
          options: [
            'A) For two months',
            'B) For almost two years',
            'C) Since last year',
            'D) For ten years',
          ],
          answer: 1,
          explain: '**B**。原文"for almost two years"。',
        },
        {
          id: 'r22-2',
          type: 'single',
          stem: 'Why have they been testing materials every week?',
          options: [
            'A) To save money',
            'B) To finish faster',
            'C) To make sure the bridge is safe',
            'D) To please the boss',
          ],
          answer: 2,
          explain: '**C**。文中"to make sure the bridge is safe"。',
        },
        {
          id: 'r22-3',
          type: 'blank',
          stem: 'The word "serve" in the passage means ___ (中文).',
          answer: '为…服务 / 供…使用',
          explain: '桥梁建成后 daily 通行,serve 此处意为"为…服务/供使用"。',
        },
      ],
    },
    translation: [
      {
        en: 'He has been studying French for three years.',
        zh: '他一直学了三年法语。',
        tip: '强调持续学习三年,用 has been studying。',
      },
      {
        en: 'It has been raining since early morning.',
        zh: '从一大早就一直在下雨。',
        tip: 'since + 时间点 + 进行时态。',
      },
      {
        en: 'They have been waiting for you all afternoon.',
        zh: '他们整个下午一直在等你。',
        tip: 'all afternoon 表整段时间的持续。',
      },
    ],
    writing: {
      prompt: '用现在完成进行时写一段话(约 50 词),描述你长期坚持做的一件事。',
      template:
        'I have been ____ for ____. I spend ____ every day on it. Although it is ____, I enjoy it because ____.',
      sample:
        'I have been practicing the piano for four years. I spend one hour every day on it. Although it is sometimes boring, I enjoy it because I can play my favorite songs and feel the joy of progress.',
      keyWords: ['have been practicing', 'every day', 'progress'],
    },
  },

  // ========================= Day 23 时态综合辨析 =========================
  {
    day: 23,
    title: 'Sort Them Out · 时态综合辨析',
    vocab: [],
    grammar: {
      title: '时态综合辨析',
      body: `把易混时态放在一起对比,关键是**抓时间标志**和**判断动作性质**:

- **一般现在时** vs **现在进行时**:前者表习惯或真理;后者表此时此刻。
- **一般过去时** vs **现在完成时**:前者强调过去发生(与现在无关);后者强调对现在的影响或持续到现在。
- **过去完成时** vs **一般过去时**:前者是"过去的过去",须先有一个过去参照点。
- **现在完成时** vs **现在完成进行时**:前者重结果;后者重持续过程。

口诀:**看时间状语 + 看动作是否持续 + 看与现在是否相关。**`,
      questions: [
        {
          id: 'g23-1',
          type: 'single',
          stem: 'Up to now, we ___ over two thousand English words.',
          options: [
            'A) learned',
            'B) have learned',
            'C) are learning',
            'D) learn',
          ],
          answer: 1,
          explain: '**B**。up to now(到现在为止)是现在完成时标志,用 have learned。',
        },
        {
          id: 'g23-2',
          type: 'single',
          stem: 'When I came in, he ___ to music, so he didn\'t notice me.',
          options: [
            'A) listened',
            'B) was listening',
            'C) has listened',
            'D) listens',
          ],
          answer: 1,
          explain: '**B**。当时他正在听音乐,用过去进行时 was listening。',
        },
        {
          id: 'g23-3',
          type: 'single',
          stem: 'By six o\'clock yesterday, the plane ___ already ___.',
          options: [
            'A) has; taken off',
            'B) had; taken off',
            'C) was; taking off',
            'D) did; take off',
          ],
          answer: 1,
          explain: '**B**。by + 过去时间,表过去的过去,用 had taken off。',
        },
      ],
    },
    reading: {
      title: 'A Letter to a Teacher',
      text: `Dear Mr. Brown,
I have been studying at this college for almost a year. Before I came here, I had heard a lot about your kind and patient teaching style. Now I am taking your writing class every Tuesday. Last week, while you were explaining how to organize a paragraph, I suddenly understood what I had been doing wrong in my own essays. I have already rewritten two of them, and I hope my writing will improve by the end of this term.`,
      questions: [
        {
          id: 'r23-1',
          type: 'single',
          stem: 'How long has the writer studied at the college?',
          options: [
            'A) Two years',
            'B) Almost a year',
            'C) Half a year',
            'D) A few months',
          ],
          answer: 1,
          explain: '**B**。原文"for almost a year"。',
        },
        {
          id: 'r23-2',
          type: 'single',
          stem: 'What happened while Mr. Brown was explaining?',
          options: [
            'A) The writer fell asleep',
            'B) The writer understood a mistake',
            'C) The class ended early',
            'D) The bell rang',
          ],
          answer: 1,
          explain: '**B**。文中"I suddenly understood what I had been doing wrong"。',
        },
        {
          id: 'r23-3',
          type: 'judge',
          stem: 'The writer had heard about Mr. Brown before coming to the college.',
          options: ['正确', '错误'],
          answer: 0,
          explain: '**正确**。原文"Before I came here, I had heard a lot..."。',
        },
      ],
    },
    translation: [
      {
        en: 'So far we have completed nine chapters.',
        zh: '到目前为止我们已经完成了九章。',
        tip: 'so far 是现在完成时标志。',
      },
      {
        en: 'When mother came home, I was doing my homework.',
        zh: '妈妈回家时,我正在做作业。',
        tip: '过进行时 + 一般过去时。',
      },
      {
        en: 'By the end of last month, he had written two books.',
        zh: '到上个月底为止,他已经写了两本书。',
        tip: 'by + 过去时间,用过完成时。',
      },
    ],
    writing: {
      prompt: '综合运用至少三种不同时态,写一段话(约 60 词)介绍你学习英语的经历。',
      template:
        'I ____ (study) English since 2020. Right now, I ____. Last month, I ____. Before that, I ____. Next year, I ____.',
      sample:
        'I have studied English since 2020. Right now, I am preparing for the degree English exam. Last month, I joined a reading club. Before that, I had never read a whole English novel. Next year, I will travel abroad to practice my speaking.',
      keyWords: ['have studied', 'am preparing', 'will travel'],
    },
  },

  // ========================= Day 24 被动语态(各时态) =========================
  {
    day: 24,
    title: 'Be Done · 被动语态(各时态)',
    vocab: [],
    grammar: {
      title: '被动语态 (Passive Voice · 各时态)',
      body: `当**动作的承受者是主语**、或不必/不想指出执行者时,用被动语态。

- 构成:**be + 过去分词(done)**。
- 常见时态:
  - 一般现在:am / is / are + done
  - 一般过去:was / were + done
  - 一般将来:will be + done
  - 现在完成:have / has been + done
  - 含情态动词:must / can / should + be + done

注意:主动句中若有双宾,把**间接宾语(人)**作主语更自然;bring / offer 等也可把直接宾语作主语,后接 to / for。`,
      questions: [
        {
          id: 'g24-1',
          type: 'single',
          stem: 'The bridge ___ in 1990.',
          options: [
            'A) built',
            'B) was built',
            'C) has been built',
            'D) is built',
          ],
          answer: 1,
          explain: '**B**。1990 是过去时间,主语 bridge 是被建造,用 was built。',
        },
        {
          id: 'g24-2',
          type: 'single',
          stem: 'The work ___ by next Friday.',
          options: [
            'A) will finish',
            'B) will be finished',
            'C) has finished',
            'D) finished',
          ],
          answer: 1,
          explain: '**B**。by next Friday + 被动,用 will be finished。',
        },
        {
          id: 'g24-3',
          type: 'judge',
          stem: 'The classroom must clean every day. (判断句子正误)',
          options: ['正确', '错误'],
          answer: 1,
          explain: '**错误**。含情态动词的被动应为 must + be + done,即 must be cleaned。',
        },
      ],
    },
    reading: {
      title: 'How Paper Is Made',
      text: `Paper is made from wood. First, trees are cut down and are sent to a factory. There the wood is broken into small pieces and is mixed with water and chemicals. After the mixture is cleaned, it is pressed and dried into thin sheets. Then the sheets are rolled into large rolls and are cut to the right size. Finally, the paper is packed and is sent to shops. Today much paper is recycled from old newspapers, which helps protect our forests and saves energy.`,
      questions: [
        {
          id: 'r24-1',
          type: 'single',
          stem: 'What is paper mainly made from?',
          options: ['A) Cloth', 'B) Wood', 'C) Plastic', 'D) Glass'],
          answer: 1,
          explain: '**B**。首句"Paper is made from wood."。',
        },
        {
          id: 'r24-2',
          type: 'single',
          stem: 'Why is recycled paper important?',
          options: [
            'A) It is cheaper to buy',
            'B) It is softer to write on',
            'C) It protects forests and saves energy',
            'D) It looks nicer',
          ],
          answer: 2,
          explain: '**C**。文末"which helps protect our forests and saves energy"。',
        },
        {
          id: 'r24-3',
          type: 'blank',
          stem: 'The word "pressed" means ___ (中文) in this process.',
          answer: '压 / 压制',
          explain: '工艺中混合物被压成薄片,pressed 意为"压制"。',
        },
      ],
    },
    translation: [
      {
        en: 'English is spoken in many countries.',
        zh: '许多国家都说英语。',
        tip: '一般现在时被动:is spoken。',
      },
      {
        en: 'The window was broken by a strong wind last night.',
        zh: '昨晚窗户被一阵强风打破了。',
        tip: '一般过去时被动:was broken。',
      },
      {
        en: 'A new subway will be built in our city next year.',
        zh: '明年我们城市将修建一条新地铁。',
        tip: '一般将来时被动:will be built。',
      },
    ],
    writing: {
      prompt: '用被动语态写一段话(约 50 词),介绍某种物品是如何被生产或使用的。',
      template:
        '____ is made from ____. First, it ____. Then it ____. After that, it ____ and ____. Finally, it is sent to ____.',
      sample:
        'Glass is made from sand. First, sand is heated at a very high temperature. Then it is shaped into bottles or windows. After that, the glass is cooled and checked carefully. Finally, it is sent to shops and factories for daily use.',
      keyWords: ['is made', 'is heated', 'is sent'],
    },
  },

  // ========================= Day 25 被动语态特殊用法 =========================
  {
    day: 25,
    title: 'Special Passives · 被动语态特殊用法',
    vocab: [],
    grammar: {
      title: '被动语态的特殊用法',
      body: `重点关注四类特殊情况:

- **含情态动词**:must / can / should + **be done** —— "The work must be finished today."
- **双宾结构变被动**:give / send / tell 等带双宾,通常把**人(间接宾语)**作主语;"She **was given** a gift." 也可把物作主语:"A gift **was given to** her."
- **带介词或短语动词的被动**:look after → **be looked after**;不可漏掉介词。
- **不及物动词不用被动**:happen, take place, belong to, break out(爆发)等无被动式。

注意:**make sb. do** 变被动要还原 to —— "He was made **to** work late."`,
      questions: [
        {
          id: 'g25-1',
          type: 'single',
          stem: 'The children must ___ by their parents at the gate.',
          options: ['A) pick up', 'B) be picked up', 'C) be picked', 'D) pick'],
          answer: 1,
          explain: '**B**。情态动词 + 被动:must be + 过去分词,短语动词 pick up 不能丢 up。',
        },
        {
          id: 'g25-2',
          type: 'single',
          stem: 'She ___ a beautiful birthday cake by her mother.',
          options: [
            'A) gave',
            'B) was given',
            'C) was giving',
            'D) has given',
          ],
          answer: 1,
          explain: '**B**。give 双宾变被动,把人作主语:she was given a cake。',
        },
        {
          id: 'g25-3',
          type: 'judge',
          stem: 'Great changes have been taken place in our city. (判断句子正误)',
          options: ['正确', '错误'],
          answer: 1,
          explain: '**错误**。take place 不及物,无被动,应为 have taken place。',
        },
      ],
    },
    reading: {
      title: 'A Local News Report',
      text: `Yesterday morning an old building in the city center was damaged by a sudden fire. Fortunately, all the people inside were saved by brave firefighters before the roof fell down. The cause of the fire is still being looked into by the police. An old lady who lives next door was interviewed by reporters in the afternoon. She said the building had been built more than eighty years ago and should have been repaired years ago. The mayor promised that such accidents would be prevented in the future.`,
      questions: [
        {
          id: 'r25-1',
          type: 'single',
          stem: 'What happened to the old building?',
          options: [
            'A) It was repaired',
            'B) It was damaged by fire',
            'C) It was sold',
            'D) It was rebuilt',
          ],
          answer: 1,
          explain: '**B**。首句"was damaged by a sudden fire"。',
        },
        {
          id: 'r25-2',
          type: 'single',
          stem: 'What does the old lady think about the building?',
          options: [
            'A) It should be pulled down',
            'B) It should have been repaired earlier',
            'C) It was very beautiful',
            'D) It was too old to live in',
          ],
          answer: 1,
          explain: '**B**。原文"should have been repaired years ago"。',
        },
        {
          id: 'r25-3',
          type: 'judge',
          stem: 'The police are looking into the cause of the fire.',
          options: ['正确', '错误'],
          answer: 0,
          explain: '**正确**。文中"is still being looked into by the police"。',
        },
      ],
    },
    translation: [
      {
        en: 'The sick boy must be looked after carefully.',
        zh: '生病的男孩必须被仔细照料。',
        tip: '情态动词 + be + 过去分词,look after 不可丢介词。',
      },
      {
        en: 'He was offered a good job after graduation.',
        zh: '毕业后他被提供了一份好工作。',
        tip: 'offer 双宾变被动,人作主语。',
      },
      {
        en: 'The workers were made to work twelve hours a day.',
        zh: '工人们被迫每天工作十二小时。',
        tip: 'make sb. do 变被动要还原 to。',
      },
    ],
    writing: {
      prompt: '用被动语态的特殊句式写一段话(约 50 词),报道你社区发生的一件事。',
      template:
        'Yesterday, a serious accident ____ (happen / be happened) in our community. The people inside ____. The cause ____. The government promised that such problems ____.',
      sample:
        'Yesterday, a serious traffic accident happened at the corner of our street. Two people were sent to hospital and were being looked after by doctors. The cause is being looked into by the police. The government promised that such problems would be prevented in the future.',
      keyWords: ['were sent', 'is being looked into', 'would be prevented'],
    },
  },

  // ========================= Day 26 时态语态综合(上) =========================
  {
    day: 26,
    title: 'Mix & Match I · 时态语态综合(上)',
    vocab: [],
    grammar: {
      title: '时态语态综合判断',
      body: `解题三步法:**一看时间标志 → 二定主动/被动 → 三套结构**。

- 时间标志决定时态;主语是动作执行者用**主动**,是承受者用**被动**。
- 多种信息共存时,**先判时态再转被动**。例如 by now + 被动 → has / have been done。
- 状语从句中仍守"**主将从现**":主句将来时,if / when 从句用现在时(被动则用 is / are done)。

易错提醒:**by now ≠ by the end of last year**(前者现在完成,后者过去完成);**already / yet / just** 通常配完成时。`,
      questions: [
        {
          id: 'g26-1',
          type: 'single',
          stem: 'Many tall buildings ___ in our city in the past few years.',
          options: [
            'A) built',
            'B) have been built',
            'C) were built',
            'D) are built',
          ],
          answer: 1,
          explain: '**B**。in the past few years 配现在完成时,且主语为承受者,用 have been built。',
        },
        {
          id: 'g26-2',
          type: 'single',
          stem: 'If your homework ___, you can go out to play.',
          options: [
            'A) will be finished',
            'B) is finished',
            'C) was finished',
            'D) finishes',
          ],
          answer: 1,
          explain: '**B**。主将从现;从句中 homework 是承受者,用 is finished。',
        },
        {
          id: 'g26-3',
          type: 'single',
          stem: 'The sick man ___ to the hospital at once yesterday.',
          options: [
            'A) must send',
            'B) must be sent',
            'C) must be send',
            'D) sent',
          ],
          answer: 1,
          explain: '**B**。情态动词 + 被动:must be + 过去分词 sent。',
        },
      ],
    },
    reading: {
      title: 'Our Changing School',
      text: `Our school has changed greatly in the past few years. Two new teaching buildings have been built, and a modern library was opened last September. Now a large sports center is being built, and it will be finished by the end of this year. Many trees and flowers have been planted around the playground. Students are encouraged to take part in all kinds of activities. Teachers say that more courses will be offered next term, and every student will be given more chances to show his or her talent.`,
      questions: [
        {
          id: 'r26-1',
          type: 'single',
          stem: 'What was opened last September?',
          options: [
            'A) A sports center',
            'B) A modern library',
            'C) A teaching building',
            'D) A playground',
          ],
          answer: 1,
          explain: '**B**。原文"a modern library was opened last September"。',
        },
        {
          id: 'r26-2',
          type: 'single',
          stem: 'When will the sports center be finished?',
          options: [
            'A) Next month',
            'B) By the end of this year',
            'C) Next September',
            'D) Next term',
          ],
          answer: 1,
          explain: '**B**。文中"by the end of this year"。',
        },
        {
          id: 'r26-3',
          type: 'blank',
          stem: 'The word "encouraged" means ___ (中文) in this passage.',
          answer: '被鼓励 / 受到鼓励',
          explain: 'are encouraged = 被动语态,"被鼓励去做…"。',
        },
      ],
    },
    translation: [
      {
        en: 'Two factories have been closed because of pollution.',
        zh: '由于污染,两家工厂已被关闭。',
        tip: '现在完成时被动:have been closed。',
      },
      {
        en: 'The new bridge will be opened to traffic next month.',
        zh: '新桥将于下个月通车。',
        tip: '一般将来时被动:will be opened。',
      },
      {
        en: 'This problem must be solved as soon as possible.',
        zh: '这个问题必须尽快被解决。',
        tip: '情态被动:must be solved。',
      },
    ],
    writing: {
      prompt: '综合运用时态和被动语态,写一段话(约 60 词),介绍你校或社区近年来的变化。',
      template:
        'Great changes ____ (take place) in our school recently. A new ____ has been ____. Last year, another building ____. Right now, a new project ____. Next year, more facilities ____.',
      sample:
        'Great changes have taken place in our school recently. A new library has been built near the gate. Last year, another laboratory was opened. Right now, a new sports center is being built. Next year, more facilities will be offered to all the students and teachers.',
      keyWords: ['have taken place', 'has been built', 'will be offered'],
    },
  },

  // ========================= Day 27 时态语态综合(下) =========================
  {
    day: 27,
    title: 'Mix & Match II · 时态语态综合(下)',
    vocab: [],
    grammar: {
      title: '易错点与综合训练',
      body: `本节归纳本阶段高频**陷阱**:

- **感官 / 使役动词**在被动中要带 to:see sb. do → **be seen to do**;make sb. do → **be made to do**。
- **不及物动词**不可用被动:appear, happen, occur, rise, fall, break out, take place。
- **带宾语补足语的被动**:keep the room clean → the room **is kept clean**。
- **短语动词被动**不能拆开:look forward to → **be looked forward to**;turn down → **be turned down**。
- **现在完成进行时无被动**形式强调过程;强调结果仍用 have been done。

口诀:**被动语态要完整,介词 to 字不能少。**`,
      questions: [
        {
          id: 'g27-1',
          type: 'single',
          stem: 'The boy was seen ___ the window at noon.',
          options: ['A) break', 'B) to break', 'C) broke', 'D) breaking'],
          answer: 1,
          explain: '**B**。see sb. do 变被动后需带 to:be seen to do。',
        },
        {
          id: 'g27-2',
          type: 'single',
          stem: 'The sports meet ___ next week because of the rain.',
          options: [
            'A) will put off',
            'B) will be put off',
            'C) will be happened',
            'D) put off',
          ],
          answer: 1,
          explain: '**B**。put off 是短语动词,被动为 be put off;will be put off。',
        },
        {
          id: 'g27-3',
          type: 'judge',
          stem: 'The story was happened in a small village. (判断句子正误)',
          options: ['正确', '错误'],
          answer: 1,
          explain: '**错误**。happen 不及物,无被动,应为 The story happened in a small village.',
        },
      ],
    },
    reading: {
      title: 'A Famous Novel',
      text: `"A Tale of Two Cities" was written by Charles Dickens in 1859. The story is set in London and Paris during the French Revolution. It has been read by millions of readers all over the world and has been translated into many languages. The famous opening line, "It was the best of times, it was the worst of times," is still quoted today. In recent years, the novel has been adapted into several films and plays, and new versions are still being produced. Dickens is remembered as one of the greatest English writers.`,
      questions: [
        {
          id: 'r27-1',
          type: 'single',
          stem: 'When was the novel written?',
          options: ['A) In 1759', 'B) In 1859', 'C) In 1959', 'D) In 1589'],
          answer: 1,
          explain: '**B**。原文"in 1859"。',
        },
        {
          id: 'r27-2',
          type: 'single',
          stem: 'What has happened to the novel in recent years?',
          options: [
            'A) It has been forgotten',
            'B) It has been adapted into films and plays',
            'C) It has been rewritten by Dickens',
            'D) It has been banned',
          ],
          answer: 1,
          explain: '**B**。文中"has been adapted into several films and plays"。',
        },
        {
          id: 'r27-3',
          type: 'blank',
          stem: 'The phrase "is still quoted" means ___ (中文).',
          answer: '仍然被引用 / 仍常被人提起',
          explain: 'is quoted 为被动语态,意为"被引用"。',
        },
      ],
    },
    translation: [
      {
        en: 'The thief was seen to run out of the bank.',
        zh: '有人看见小偷跑出了银行。',
        tip: 'see sb. do 变被动后须带 to。',
      },
      {
        en: 'The meeting will be put off until next Monday.',
        zh: '会议将被推迟到下周一。',
        tip: '短语动词 put off 被动:be put off。',
      },
      {
        en: 'This kind of accident cannot be prevented easily.',
        zh: '这种事故不容易被防止。',
        tip: '情态被动:cannot be prevented。',
      },
    ],
    writing: {
      prompt: '综合运用时态与被动语态,写一段话(约 60 词),介绍一本你喜爱的书或一部电影。',
      template:
        '____ (write) by ____. It tells the story of ____. Since it was published, it has been ____. It has been translated into ____. I think it should be ____.',
      sample:
        '"The Old Man and the Sea" was written by Hemingway. It tells the story of an old fisherman who fights a huge fish. Since it was published, it has been read by millions of people. It has been translated into many languages. I think it should be recommended to every student.',
      keyWords: ['was written', 'has been read', 'should be recommended'],
    },
  },
]
