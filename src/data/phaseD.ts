import type { DayPlan } from '../types'

// Phase D: Day 40 ~ Day 51 —— 非谓语动词 · 特殊句式 · 翻译与挑错专题
export const PHASE_D: DayPlan[] = [
  // ===================== Day 40 · 动词不定式 =====================
  {
    day: 40,
    title: 'Infinitives · 动词不定式作主/宾/定/状',
    vocab: [],
    grammar: {
      title: '动词不定式 (to + 动词原形)',
      body: `不定式可在句中充当 **主语、宾语、表语、定语、状语、补语**,仍保留"将来/未做"的意味。

- **作主语**:To master a foreign language is no easy job. (常用 It 作形式主语 → It is no easy job **to master**...)
- **作宾语**:decide / hope / refuse / agree / promise + to do
- **作定语**:放在名词后 —— something **to eat**, a house **to live in** (不及物动词须带介词)
- **作目的状语**:He got up early **to catch** the first bus. (= in order to)

口诀:**不定式表"将做",定状宾主都能当。**`,
      questions: [
        {
          id: 'g40-1',
          type: 'single',
          stem: 'It is important for us ___ English well.',
          options: ['A) learn', 'B) to learn', 'C) learning', 'D) learned'],
          answer: 1,
          explain:
            '**B) to learn**。It 作形式主语,真正主语是不定式 to learn。句型:It is + adj. + for sb. + to do。',
        },
        {
          id: 'g40-2',
          type: 'single',
          stem: 'I have a lot of work ___.',
          options: ['A) do', 'B) to do', 'C) doing', 'D) done'],
          answer: 1,
          explain:
            '**B) to do**。不定式作后置定语修饰 work,表"要做的(工作)"。比较:water to drink, a pen to write with。',
        },
        {
          id: 'g40-3',
          type: 'single',
          stem: 'He hurried to the station ___ the 7:00 train.',
          options: [
            'A) catching',
            'B) caught',
            'C) so as to catch',
            'D) to be caught',
          ],
          answer: 2,
          explain:
            '**C) so as to catch**。表目的用不定式,so as to / in order to + 动词原形。',
        },
      ],
    },
    reading: {
      title: 'A Habit That Sticks',
      text: `Tom wanted to stop smoking for years, but he always failed. One day he decided to start running every morning instead. To run for just ten minutes soon became his new habit. Whenever he felt the urge to smoke, he would put on his shoes and run. After three months, he no longer needed a cigarette. He told his friends that to replace a bad habit with a good one was the best decision he had ever made.`,
      questions: [
        {
          id: 'r40-1',
          type: 'single',
          stem: 'How did Tom finally stop smoking?',
          options: [
            'A) By taking medicine',
            'B) By starting to run every morning',
            'C) By staying indoors',
            'D) By talking to his friends',
          ],
          answer: 1,
          explain:
            '**B**。文中 "he decided to start running every morning instead" 直接说明用跑步替代吸烟。',
        },
        {
          id: 'r40-2',
          type: 'single',
          stem: 'What did Tom think was his best decision?',
          options: [
            'A) To run for ten minutes only',
            'B) To replace a bad habit with a good one',
            'C) To stop smoking at once',
            'D) To tell his friends everything',
          ],
          answer: 1,
          explain:
            '**B**。末句 "to replace a bad habit with a good one was the best decision" 与选项 B 一致。',
        },
        {
          id: 'r40-3',
          type: 'judge',
          stem: 'Tom succeeded the very first time he tried to quit smoking.',
          options: ['正确', '错误'],
          answer: 1,
          explain:
            '**错误**。文中 "he always failed",说明他多次失败,并非一次成功。',
        },
      ],
    },
    translation: [
      {
        en: 'It took him three months to form the habit of running.',
        zh: '养成跑步的习惯花了他三个月时间。',
        tip: 'It takes sb. + 时间 + to do sth. "花某人多少时间做某事"',
      },
      {
        en: 'She refused to give up her dream of becoming a doctor.',
        zh: '她拒绝放弃成为一名医生的梦想。',
        tip: 'refuse / dream of + to do / doing 各不同,refuse 接 to do',
      },
      {
        en: 'I have something important to tell you.',
        zh: '我有重要的事情要告诉你。',
        tip: '不定式作后置定语修饰不定代词 something',
      },
    ],
    writing: {
      prompt:
        '用动词不定式写一段话(60 词左右),描述"我决定每天早起学英语"的原因和做法。',
      template:
        'I have decided ____ early every day. My goal is ____ English better. To achieve it, I plan ____ new words each morning. I believe that ____ a habit is the key to success.',
      sample:
        'I have decided to get up early every day. My goal is to learn English better. To achieve it, I plan to read new words each morning. I believe that to build a habit is the key to success, and I will keep doing it for at least three months.',
      keyWords: ['decide to', 'in order to', 'something to do', 'habit'],
    },
  },

  // ===================== Day 41 · 动名词 =====================
  {
    day: 41,
    title: 'Gerunds · 动名词作主/宾/表',
    vocab: [],
    grammar: {
      title: '动名词 (v-ing 兼名词)',
      body: `动名词兼有 **名词性质**,可作主语、宾语、表语,可被所有格/形容词修饰。

- **作主语**:**Smoking** is harmful to your health.
- **作动词宾语**——只接 doing 的常见词(记口诀):**enjoy, finish, avoid, mind, keep, practice, consider, suggest, give up, can\'t help, feel like**。
- **作介词宾语**:be good **at swimming**; be used **to getting** up early (to 是介词)。
- **常见易混**:stop **doing**(停止正在做的事)/ stop **to do**(停下来去做另一件事)。

对比:**动名词表"已知/习惯",不定式表"将来/一次性"。**`,
      questions: [
        {
          id: 'g41-1',
          type: 'single',
          stem: 'Would you mind ___ the window?',
          options: ['A) close', 'B) to close', 'C) closing', 'D) closed'],
          answer: 2,
          explain:
            '**C) closing**。mind 后只接动名词,mind doing "介意做某事"。',
        },
        {
          id: 'g41-2',
          type: 'single',
          stem: 'He stopped ___ to me, but I didn\'t say a word.',
          options: ['A) talking', 'B) to talk', 'C) talk', 'D) talked'],
          answer: 1,
          explain:
            '**B) to talk**。stop to do 表"停下来(原来做的事)去说话"。若选 talking 则是"停止说话",与后文矛盾。',
        },
        {
          id: 'g41-3',
          type: 'single',
          stem: 'I am looking forward to ___ from you soon.',
          options: ['A) hear', 'B) hearing', 'C) be heard', 'D) heard'],
          answer: 1,
          explain:
            '**B) hearing**。look forward to 中 to 是介词,后接动名词 hearing。',
        },
      ],
    },
    reading: {
      title: 'Reading for Pleasure',
      text: `Many students dislike reading because they see it as homework. However, reading for pleasure is quite different. By choosing books that match their own interests, readers can truly enjoy the experience. Some teachers suggest starting with short stories or comic books. Finishing a book gives a strong sense of achievement. Once a person gets used to reading, learning English becomes much easier and far more interesting.`,
      questions: [
        {
          id: 'r41-1',
          type: 'single',
          stem: 'What makes reading for pleasure different?',
          options: [
            'A) It is always homework',
            'B) Readers choose books matching their interests',
            'C) It must be long novels',
            'D) It is tested by teachers',
          ],
          answer: 1,
          explain:
            '**B**。文中 "By choosing books that match their own interests" 直接说明区别在于按兴趣选书。',
        },
        {
          id: 'r41-2',
          type: 'blank',
          stem: 'The word "achievement" most likely means ___ (中文).',
          answer: '成就 / 成绩',
          explain:
            '**成就**。Finishing a book gives a sense of achievement "读完一本书会带来成就感"。',
        },
        {
          id: 'r41-3',
          type: 'judge',
          stem: 'According to the passage, getting used to reading helps with learning English.',
          options: ['正确', '错误'],
          answer: 0,
          explain:
            '**正确**。末句 "Once a person gets used to reading, learning English becomes much easier"。',
        },
      ],
    },
    translation: [
      {
        en: 'Practicing speaking English every day will improve your oral skills.',
        zh: '每天练习说英语会提高你的口语能力。',
        tip: 'practice + doing; improve "提高"',
      },
      {
        en: 'He gave up smoking last year and started running instead.',
        zh: '他去年戒了烟,改而开始跑步。',
        tip: 'give up + doing; instead "代替、而是"',
      },
      {
        en: 'I am used to getting up early to read English.',
        zh: '我已经习惯早起读英语了。',
        tip: 'be used to + doing "习惯于"(to 是介词)',
      },
    ],
    writing: {
      prompt:
        '用动名词写一段(50 词)说明"我喜欢阅读英文小说的理由",至少用到 enjoy / by / finish + doing。',
      template:
        'I ____ reading English novels because they are fun. By ____ a little every day, I learn new words naturally. ____ a whole book always gives me a sense of success.',
      sample:
        'I enjoy reading English novels because they are fun. By reading a little every day, I learn new words naturally. Finishing a whole book always gives me a sense of success, and that keeps me going.',
      keyWords: ['enjoy doing', 'by doing', 'finish doing'],
    },
  },

  // ===================== Day 42 · 分词 =====================
  {
    day: 42,
    title: 'Participles · 现在分词与过去分词',
    vocab: [],
    grammar: {
      title: '分词 (v-ing / v-ed) 作定、状、补',
      body: `- **现在分词 (doing)** 表 **主动、进行**;**过去分词 (done)** 表 **被动、完成**。
- **作定语**:a **broken** cup (碎了,被动/完成);the **rising** sun (正在升起,主动)。
- **作状语**:**Seen** from the hill, the city looks beautiful. (城市被看 → 过去分词)
  　　　　　　**Hearing** the news, she cried. (她主动听 → 现在分词)
- **作宾补**:have sth. **done**(让别人做);keep sb. **doing**(让某人一直做)。

判断要诀:**找逻辑主语 → 主功用 doing,被动用 done。**`,
      questions: [
        {
          id: 'g42-1',
          type: 'single',
          stem: '___ from the top of the tower, the whole city looks like a garden.',
          options: ['A) Seeing', 'B) Seen', 'C) To see', 'D) See'],
          answer: 1,
          explain:
            '**B) Seen**。逻辑主语 the city 与 see 是被动关系(city 被看),用过去分词 Seen。',
        },
        {
          id: 'g42-2',
          type: 'single',
          stem: 'I had my watch ___ yesterday.',
          options: ['A) repair', 'B) repairing', 'C) repaired', 'D) to repair'],
          answer: 2,
          explain:
            '**C) repaired**。have sth. done "让某事被别人做"。手表是被修,故用过去分词。',
        },
        {
          id: 'g42-3',
          type: 'single',
          stem: 'The ___ boy jumped with joy at the good news.',
          options: ['A) exciting', 'B) excited', 'C) excite', 'D) to excite'],
          answer: 1,
          explain:
            '**B) excited**。修饰人 (boy) 用过去分词 excited (人感到兴奋);exciting 修饰物 (news)。',
        },
      ],
    },
    reading: {
      title: 'A Small Workshop',
      text: `Driven by a love of music, a group of retired workers opened a small workshop to repair old musical instruments. Broken pianos and silent violins were brought in by their neighbors every week. Guided by experienced craftsmen, the young volunteers learned quickly. Within a year, more than one hundred instruments were fixed and given back to local children. The workshop has become a warm place where music never really dies.`,
      questions: [
        {
          id: 'r42-1',
          type: 'single',
          stem: 'Why did the retired workers open the workshop?',
          options: [
            'A) To make money',
            'B) Driven by a love of music',
            'C) To teach children math',
            'D) Asked by the government',
          ],
          answer: 1,
          explain:
            '**B**。首句 "Driven by a love of music, ... opened a small workshop" 说明动机。',
        },
        {
          id: 'r42-2',
          type: 'blank',
          stem: 'The word "craftsmen" most likely means ___ (中文).',
          answer: '工匠 / 手艺人',
          explain:
            '**工匠**。experienced craftsmen 与 young volunteers(年轻志愿者)对应,指有经验的手艺人。',
        },
        {
          id: 'r42-3',
          type: 'judge',
          stem: 'More than one hundred instruments were fixed within a year.',
          options: ['正确', '错误'],
          answer: 0,
          explain:
            '**正确**。文中 "Within a year, more than one hundred instruments were fixed"。',
        },
      ],
    },
    translation: [
      {
        en: 'Written in simple English, the book is popular with beginners.',
        zh: '这本书用简单的英语写成,很受初学者欢迎。',
        tip: '过去分词作原因状语,表被动',
      },
      {
        en: 'He kept me waiting for almost two hours.',
        zh: '他让我等了将近两个小时。',
        tip: 'keep sb. doing "让某人一直做"',
      },
      {
        en: 'The surprised girl could not say a word.',
        zh: '那个惊讶的女孩一句话也说不出来。',
        tip: 'surprised 修饰人(感到惊讶);surprising 修饰物',
      },
    ],
    writing: {
      prompt:
        '用分词写一段(50 词)描述"清晨公园里的景象",至少用 1 个 doing 和 1 个 done 作状语。',
      template:
        '____ (walk) in the park, I saw many old people exercising. ____ (cover) with green trees, the park looked peaceful. ____ (attract) by the birds\' songs, I stopped and smiled.',
      sample:
        'Walking in the park, I saw many old people exercising. Covered with green trees, the park looked peaceful. Attracted by the birds\' songs, I stopped and smiled, enjoying a truly fresh morning.',
      keyWords: ['doing', 'done', 'attract', 'cover'],
    },
  },

  // ===================== Day 43 · 非谓语综合辨析 =====================
  {
    day: 43,
    title: 'Non-finite Review · 非谓语综合辨析',
    vocab: [],
    grammar: {
      title: 'to do / doing / done 怎么选',
      body: `三步辨析法:
1. **看时态/语态**:被动完成优先 **done**;主动进行优先 **doing**;将来未做选 **to do**。
2. **看谓语动词**——只接 to do 的词(want, decide, hope, refuse, promise...);只接 doing 的词(enjoy, mind, finish, avoid, practice...);接两者但意义不同的词(stop, remember, forget, try)。
3. **看句法功能**——作目的状语用 **to do**;作主语/宾语按上述谓语搭配。

- **remember to do**(记得去做)/ **remember doing**(记得做过)
- **try to do**(努力去做)/ **try doing**(试着做看看效果)`,
      questions: [
        {
          id: 'g43-1',
          type: 'single',
          stem: 'I remember ___ the door before I left. The door is locked now.',
          options: ['A) to lock', 'B) locking', 'C) lock', 'D) to locking'],
          answer: 1,
          explain:
            '**B) locking**。门已锁好,说明"记得做过" → remember doing。remember to do 是"记得去做(未做)"。',
        },
        {
          id: 'g43-2',
          type: 'single',
          stem: 'The book ___ into many languages is very popular.',
          options: [
            'A) translating',
            'B) translated',
            'C) to translate',
            'D) translate',
          ],
          answer: 1,
          explain:
            '**B) translated**。书被翻译(被动),且已完成,用过去分词 translated 作后置定语。',
        },
        {
          id: 'g43-3',
          type: 'single',
          stem: 'He promised ___ me with my English.',
          options: ['A) help', 'B) helping', 'C) to help', 'D) helped'],
          answer: 2,
          explain:
            '**C) to help**。promise 只接不定式,promise to do "答应做某事"。',
        },
      ],
    },
    reading: {
      title: 'Trying Something New',
      text: `Afraid of speaking in public, Jenny used to avoid giving presentations. Encouraged by her teacher, she decided to try joining a debate club. To her surprise, she found that preparing carefully made her far less nervous. Remembering to breathe slowly before each speech helped a lot. After practicing for half a year, she even won a prize. Now she often tells her friends that trying new things is the best way to grow.`,
      questions: [
        {
          id: 'r43-1',
          type: 'single',
          stem: 'What helped Jenny become less nervous?',
          options: [
            'A) Giving up speeches',
            'B) Preparing carefully and breathing slowly',
            'C) Refusing to join the club',
            'D) Forgetting the speech',
          ],
          answer: 1,
          explain:
            '**B**。文中 "preparing carefully made her far less nervous" 与 "Remembering to breathe slowly ... helped a lot" 共同支持 B。',
        },
        {
          id: 'r43-2',
          type: 'judge',
          stem: 'In the end, Jenny won a prize after practicing for half a year.',
          options: ['正确', '错误'],
          answer: 0,
          explain:
            '**正确**。"After practicing for half a year, she even won a prize" 与陈述一致。',
        },
        {
          id: 'r43-3',
          type: 'blank',
          stem: 'Jenny used to be afraid of ___ in public. (用动词 -ing 形式回答,中文意思即可)',
          answer: 'speaking / 演讲',
          explain:
            '**speaking**。"speaking in public" 公众演讲;afraid of + doing。',
        },
      ],
    },
    translation: [
      {
        en: 'Encouraged by her friends, she finally entered the competition.',
        zh: '在朋友们的鼓励下,她最终报名参加了比赛。',
        tip: '过去分词作原因状语,表被动',
      },
      {
        en: 'Remember to bring your dictionary to class tomorrow.',
        zh: '记得明天把字典带到课堂上来。',
        tip: 'remember to do "记得要做(还没做)"',
      },
      {
        en: 'He tried opening the window to let in some fresh air.',
        zh: '他试着打开窗户,好透进一些新鲜空气。',
        tip: 'try doing "试着做(看效果)"',
      },
    ],
    writing: {
      prompt:
        '用非谓语动词写一段(60 词)分享"我克服某个困难的经历",至少用到 1 个 done 和 1 个 to do。',
      template:
        '____ (worry) about my poor listening, I decided ____ English news every day. ____ (help) by my teacher, I made real progress. I will never forget ____ my first English song clearly.',
      sample:
        'Worried about my poor listening, I decided to listen to English news every day. Helped by my teacher, I made real progress. I will never forget understanding my first English song clearly, which gave me great confidence.',
      keyWords: ['worried', 'decide to', 'helped', 'forget doing'],
    },
  },

  // ===================== Day 44 · 虚拟语气(if 条件句) =====================
  {
    day: 44,
    title: 'Subjunctive I · 虚拟语气 if 条件句',
    vocab: [],
    grammar: {
      title: 'if 条件句中的虚拟语气',
      body: `三大时态对应表:

| 类型 | 从句谓语 | 主句谓语 |
|---|---|---|
| 与现在相反 | **were / 过去式** | would/should/could + do |
| 与过去相反 | **had + done** | would/should/could + have done |
| 与将来相反 | **were to / should + do** | would/should/could + do |

- If I **were** you, I **would accept** the offer. (现在)
- If he **had come** earlier, he **would have caught** the train. (过去)
- **省略 if 倒装**:**Had** he come earlier, ... = If he had come earlier, ...

主从时态须各自一致,但不能混用事实句。`,
      questions: [
        {
          id: 'g44-1',
          type: 'single',
          stem: 'If I ___ you, I would not do that.',
          options: ['A) am', 'B) was', 'C) were', 'D) be'],
          answer: 2,
          explain:
            '**C) were**。与现在相反的虚拟语气,be 动词各人称一律用 were。',
        },
        {
          id: 'g44-2',
          type: 'single',
          stem: 'If he had studied harder, he ___ the exam last year.',
          options: [
            'A) would pass',
            'B) would have passed',
            'C) will pass',
            'D) had passed',
          ],
          answer: 1,
          explain:
            '**B) would have passed**。从句 had studied 是与过去相反,主句用 would + have + done。',
        },
        {
          id: 'g44-3',
          type: 'single',
          stem: '___ it rain tomorrow, the sports meet would be put off.',
          options: [
            'A) If',
            'B) Should',
            'C) Would',
            'D) Had',
          ],
          answer: 1,
          explain:
            '**B) Should**。与将来相反的虚拟,省略 if 后倒装:Should it rain = If it should rain。',
        },
      ],
    },
    reading: {
      title: 'If Only',
      text: `Mike always dreamed of becoming a writer, but he never finished his novel. "If I had more time, I would write every day," he told his friends. In fact, if he had used his free hours wisely, he could have finished the book years ago. His teacher once said, "If you were truly serious, you would find the time." These words stayed with Mike. He finally realized that if he should wait for the perfect moment, it might never come at all.`,
      questions: [
        {
          id: 'r44-1',
          type: 'single',
          stem: 'What did the teacher mean by "find the time"?',
          options: [
            'A) Mike was too busy to write',
            'B) If Mike were serious, he would make time to write',
            'C) The teacher would give Mike more time',
            'D) Mike should stop writing',
          ],
          answer: 1,
          explain:
            '**B**。老师用虚拟语气 "If you were truly serious, you would find the time",意为"若真心,自会挤出时间"。',
        },
        {
          id: 'r44-2',
          type: 'judge',
          stem: 'Mike actually finished his novel in the end.',
          options: ['正确', '错误'],
          answer: 1,
          explain:
            '**错误**。文中说 "he never finished his novel",并未提及最终完成。',
        },
        {
          id: 'r44-3',
          type: 'blank',
          stem: '"If he ___ more time, he would write every day." 此句是与 ___ 相反的虚拟。(填现在/过去/将来)',
          answer: 'had / 现在',
          explain:
            '**had / 现在**。从句用过去式 had,主句 would write,属于与现在事实相反。',
        },
      ],
    },
    translation: [
      {
        en: 'If I were you, I would accept that job offer.',
        zh: '如果我是你,我就会接受那份工作邀请。',
        tip: '与现在相反:从句 were,主句 would + do',
      },
      {
        en: 'If she had left five minutes earlier, she would have caught the bus.',
        zh: '如果她早走五分钟,就能赶上那趟公交车了。',
        tip: '与过去相反:从句 had done,主句 would + have done',
      },
      {
        en: 'Were I in your position, I would not give up.',
        zh: '假如我处在你的位置,我不会放弃。',
        tip: '省略 if 的倒装:Were I = If I were',
      },
    ],
    writing: {
      prompt:
        '用虚拟语气写一段(60 词)"如果我有更多时间"的设想,至少包含与现在、与过去各一句虚拟。',
      template:
        'If I ____ (have) more free time, I ____ (learn) another language. If I ____ (start) last year, I ____ (make) great progress by now. Were I younger, I ____ (travel) the world.',
      sample:
        'If I had more free time, I would learn another language. If I had started last year, I would have made great progress by now. Were I younger, I would travel the world and meet people from different cultures.',
      keyWords: ['if', 'were', 'would have done', 'had done'],
    },
  },

  // ===================== Day 45 · 虚拟语气(wish/as if/建议性动词) =====================
  {
    day: 45,
    title: 'Subjunctive II · wish / as if / 建议性动词',
    vocab: [],
    grammar: {
      title: '其他虚拟语气场景',
      body: `- **wish + 宾从**:
  - 与现在相反:I wish I **were** taller.
  - 与过去相反:I wish I **had studied** harder.
  - 与将来相反:I wish you **would stop** talking.
- **as if / as though + 虚拟**:He talks **as if he knew** everything. (其实并非如此)
- **建议性动词** (suggest, insist, demand, require, propose, order, recommend, advise) + **(should) + 动词原形**:
  - The doctor suggested that he **(should) stop** smoking.
- **It is necessary / important / essential that ... + (should) + do**。

口诀:**"一坚持二命令三建议四要求",从句都 should + 原形(should 可省)。**`,
      questions: [
        {
          id: 'g45-1',
          type: 'single',
          stem: 'I wish I ___ how to play the piano.',
          options: ['A) know', 'B) knew', 'C) had known', 'D) would know'],
          answer: 1,
          explain:
            '**B) knew**。wish 表与现在相反的愿望,从句用过去式 knew。',
        },
        {
          id: 'g45-2',
          type: 'single',
          stem: 'The teacher demanded that the homework ___ at once.',
          options: [
            'A) be handed in',
            'B) was handed in',
            'C) is handed in',
            'D) would be handed in',
          ],
          answer: 0,
          explain:
            '**A) be handed in**。demand 后从句用 (should) + 动词原形(被动 be handed in)。',
        },
        {
          id: 'g45-3',
          type: 'single',
          stem: 'It is necessary that every student ___ the rules.',
          options: ['A) obeys', 'B) obey', 'C) obeyed', 'D) will obey'],
          answer: 1,
          explain:
            '**B) obey**。It is necessary that ... + (should) + 动词原形 obey。',
        },
      ],
    },
    reading: {
      title: 'A Parent\'s Wish',
      text: `Mrs. Lee often wishes her son would spend less time on his phone. She insists that he finish his homework before dinner, and she strongly suggests that he read at least twenty minutes each day. "It is important that he develop good habits while he is young," she said. Sometimes the boy talks as if he understood everything, but his mother smiles and patiently guides him. She believes that it is essential that every child learn the value of time.`,
      questions: [
        {
          id: 'r45-1',
          type: 'single',
          stem: 'What does Mrs. Lee insist on?',
          options: [
            'A) Her son may use the phone freely',
            'B) Her son finish homework before dinner',
            'C) Her son should read for hours',
            'D) Her son stop going to school',
          ],
          answer: 1,
          explain:
            '**B**。"she insists that he finish his homework before dinner",insist + (should) + 动词原形 finish。',
        },
        {
          id: 'r45-2',
          type: 'judge',
          stem: 'Mrs. Lee believes every child should learn the value of time.',
          options: ['正确', '错误'],
          answer: 0,
          explain:
            '**正确**。末句 "it is essential that every child learn the value of time",与陈述一致。',
        },
        {
          id: 'r45-3',
          type: 'blank',
          stem: '"the boy talks as if he ___ everything." 用虚拟语气填空(动词原形派生形式)。',
          answer: 'understood',
          explain:
            '**understood**。as if 表与现在事实相反,从句用过去式 understood。',
        },
      ],
    },
    translation: [
      {
        en: 'I wish I had not wasted so much time when I was young.',
        zh: '我希望年轻时没有浪费那么多时间。',
        tip: 'wish + had done "后悔过去没做/做了某事"',
      },
      {
        en: 'The doctor advised that he take a good rest.',
        zh: '医生建议他好好休息。',
        tip: 'advise + (should) + 动词原形',
      },
      {
        en: 'It is essential that everyone be on time.',
        zh: '每个人都准时是必要的。',
        tip: 'It is essential that ... + (should) + be',
      },
    ],
    writing: {
      prompt:
        '用虚拟语气写一段(60 词)给同学的"学习建议",至少用到 1 个 suggest that 和 1 个 wish。',
      template:
        'I wish I ____ (be) as hard-working as you. I suggest that every student ____ (make) a clear plan. It is important that we ____ (not waste) time. If I ____ (start) earlier, I would have done much better.',
      sample:
        'I wish I were as hard-working as you. I suggest that every student make a clear plan for revision. It is important that we not waste time on useless things. If I had started earlier, I would have done much better in last week\'s test.',
      keyWords: ['wish', 'suggest that', 'it is important that', 'if'],
    },
  },

  // ===================== Day 46 · 倒装句 =====================
  {
    day: 46,
    title: 'Inversion · 倒装句(部分/完全倒装)',
    vocab: [],
    grammar: {
      title: '倒装句',
      body: `- **完全倒装**(谓语整个提到主语前):表方位/时间的副词 (here, there, up, down, in, out, now, then) + 位移动词 + 主语(名词)。
  - **Here comes** the bus. (主语是代词则不倒装:Here **it** comes.)
- **部分倒装**(只把助动词/情态动词/be 提到主语前):
  1. **否定副词开头**:never, seldom, hardly, little, not only, no sooner...
     - **Never have** I seen such a beautiful place.
  2. **only + 状语开头**:**Only then did** I realize my mistake.
  3. **so / nor / neither 句型**:He likes English. **So do** I.
  4. **虚拟条件句省略 if**:**Had** he come earlier, ...

口诀:**否定词、only 开头,助动词往前跑。**`,
      questions: [
        {
          id: 'g46-1',
          type: 'single',
          stem: 'Never ___ such a moving film before.',
          options: [
            'A) I have seen',
            'B) have I seen',
            'C) I saw',
            'D) did I see',
          ],
          answer: 1,
          explain:
            '**B) have I seen**。Never 开头部分倒装,助动词 have 提到主语 I 前。',
        },
        {
          id: 'g46-2',
          type: 'single',
          stem: 'Only when he got home ___ that he had lost his keys.',
          options: [
            'A) he realized',
            'B) did he realize',
            'C) he did realize',
            'D) realizes he',
          ],
          answer: 1,
          explain:
            '**B) did he realize**。Only + 状语从句开头,主句部分倒装,用 did + 主语 + 动词原形。',
        },
        {
          id: 'g46-3',
          type: 'single',
          stem: 'Look! Here ___.',
          options: [
            'A) comes the bus',
            'B) the bus comes',
            'C) does the bus come',
            'D) comes it',
          ],
          answer: 0,
          explain:
            '**A) comes the bus**。Here/There 开头且主语是名词,用完全倒装 comes the bus。',
        },
      ],
    },
    reading: {
      title: 'A Surprising Discovery',
      text: `Seldom does a small town make national news, but that was exactly what happened last spring. Never had the locals expected that an old library would hide such a treasure. Only after a young student accidentally opened a hidden drawer did the secret come to light. Inside lay dozens of letters written more than a century ago. Hardly had the news spread when reporters rushed to the town. Not only did the discovery attract tourists, but it also brought pride to every citizen.`,
      questions: [
        {
          id: 'r46-1',
          type: 'single',
          stem: 'How was the secret discovered?',
          options: [
            'A) By a local reporter',
            'B) By a young student who opened a hidden drawer',
            'C) By the mayor',
            'D) By some tourists',
          ],
          answer: 1,
          explain:
            '**B**。"Only after a young student accidentally opened a hidden drawer did the secret come to light"。',
        },
        {
          id: 'r46-2',
          type: 'judge',
          stem: 'The discovery brought pride to the citizens of the town.',
          options: ['正确', '错误'],
          answer: 0,
          explain:
            '**正确**。末句 "it also brought pride to every citizen",与陈述一致。',
        },
        {
          id: 'r46-3',
          type: 'blank',
          stem: '"Hardly ___ the news spread when reporters rushed to the town." 用助动词倒装形式。',
          answer: 'had',
          explain:
            '**had**。Hardly 开头部分倒装,主语 the news 前 + 过去完成时助动词 had。',
        },
      ],
    },
    translation: [
      {
        en: 'Never have I heard such a strange story.',
        zh: '我从未听说过这么奇怪的故事。',
        tip: 'Never 开头部分倒装:have I heard',
      },
      {
        en: 'Only by working hard can we achieve our goals.',
        zh: '只有努力工作,我们才能实现目标。',
        tip: 'Only + 方式状语开头,主句部分倒装',
      },
      {
        en: 'Not only does she sing well, but she also dances beautifully.',
        zh: '她不仅歌唱得好,而且舞跳得也美。',
        tip: 'Not only 开头部分倒装',
      },
    ],
    writing: {
      prompt:
        '用倒装句写一段(60 词)描述"一次难忘的经历",至少用到 1 个否定副词开头和 1 个 only 开头。',
      template:
        'Never ____ I experienced such heavy snow. Only when I stepped outside ____ I realize how cold it was. Hardly ____ the day begun when the power went out. So beautiful ____ the snow that I took many photos.',
      sample:
        'Never had I experienced such heavy snow. Only when I stepped outside did I realize how cold it was. Hardly had the day begun when the power went out. So beautiful was the snow that I took many photos of the white world.',
      keyWords: ['never', 'only', 'hardly', 'so'],
    },
  },

  // ===================== Day 47 · 强调句与 there be / it 句式 =====================
  {
    day: 47,
    title: 'Emphatic & Existential · 强调句与 there be / it',
    vocab: [],
    grammar: {
      title: '强调句、there be、it 句式',
      body: `- **强调句 (It is/was + 被强调部分 + that/who ...)**:
  - 原句: I met Tom **in the park** yesterday.
  - 强调地点:**It was in the park that** I met Tom yesterday.
  - 强调人:**It was Tom whom/who** I met yesterday.
  - 强调句疑问式:**Was it** Tom **that** you met? / **Who was it that** you met?
- **there be 句型**:"存在有"——There **is** a book and two pens on the desk. (就近一致)
- **it 作形式主语/宾语**:It is no use **crying** over spilt milk. / I find **it** hard **to learn** grammar.

判定强调句:删去 It is/was ... that 后,句子仍结构完整即为强调句。`,
      questions: [
        {
          id: 'g47-1',
          type: 'single',
          stem: 'It was in 2008 ___ the Olympic Games were held in Beijing.',
          options: ['A) that', 'B) which', 'C) when', 'D) in which'],
          answer: 0,
          explain:
            '**A) that**。强调时间状语 in 2008,用 that。删去 It was ... that 后仍为完整句。',
        },
        {
          id: 'g47-2',
          type: 'single',
          stem: 'There ___ a pen and two books on the desk.',
          options: ['A) is', 'B) are', 'C) has', 'D) have'],
          answer: 0,
          explain:
            '**A) is**。there be 句型遵循"就近原则",离 be 最近的 a pen 是单数,用 is。',
        },
        {
          id: 'g47-3',
          type: 'single',
          stem: 'I find ___ important to keep a diary in English.',
          options: ['A) this', 'B) that', 'C) it', 'D) its'],
          answer: 2,
          explain:
            '**C) it**。it 作形式宾语,真正的宾语是 to keep a diary。结构:find it + adj. + to do。',
        },
      ],
    },
    reading: {
      title: 'A Letter That Changed Everything',
      text: `It was a rainy evening when Anna received a strange letter. It was her old teacher who had written it after twenty years of silence. In the letter, he thanked Anna for being the first student who had believed in him. "It is your encouragement that gave me the courage to teach again," he wrote. There were tears in Anna\'s eyes as she finished reading. It suddenly became clear to her that a few kind words could truly change a person\'s life.`,
      questions: [
        {
          id: 'r47-1',
          type: 'single',
          stem: 'Who wrote the letter to Anna?',
          options: [
            'A) A stranger',
            'B) Her old teacher',
            'C) Her student',
            'D) Her mother',
          ],
          answer: 1,
          explain:
            '**B**。"It was her old teacher who had written it",强调句点明是老师写的。',
        },
        {
          id: 'r47-2',
          type: 'blank',
          stem: '"It was a rainy evening ___ she received the letter." 此处是 ___ 句。(填"强调"或"定语从句")',
          answer: '强调',
          explain:
            '**强调**。It was ... when/that 强调时间,该处强调结构,表"正是在一个雨夜"。',
        },
        {
          id: 'r47-3',
          type: 'judge',
          stem: 'Anna realized that kind words could change a person\'s life.',
          options: ['正确', '错误'],
          answer: 0,
          explain:
            '**正确**。末句 "a few kind words could truly change a person\'s life"。',
        },
      ],
    },
    translation: [
      {
        en: 'It was because he was ill that he was absent from the meeting.',
        zh: '正是因为生病他才没来开会。',
        tip: '强调原因状语从句用 It is/was ... that',
      },
      {
        en: 'There is no doubt that reading widely broadens our minds.',
        zh: '毫无疑问,广泛阅读会开阔我们的视野。',
        tip: 'There is no doubt that ... "毫无疑问"',
      },
      {
        en: 'I think it necessary to review the lessons every day.',
        zh: '我认为每天复习功课是必要的。',
        tip: 'it 作形式宾语,真正宾语是 to review',
      },
    ],
    writing: {
      prompt:
        '用强调句和 there be 句型写一段(60 词)"改变我的一件事"。',
      template:
        'It was ____ I learned the importance of honesty. It was my mother ____ taught me this lesson. ____ (there be) a moment I will never forget. I find ____ hard to lie to anyone ever again.',
      sample:
        'It was last year that I learned the importance of honesty. It was my mother who taught me this lesson with great patience. There was a moment I will never forget. I find it hard to lie to anyone ever again, for I have seen how a small lie can hurt the people I love.',
      keyWords: ['it is ... that', 'it is ... who', 'there be', 'find it'],
    },
  },

  // ===================== Day 48 · 翻译技巧(词性转换/增译省译) =====================
  {
    day: 48,
    title: 'Translation I · 词性转换与增译省译',
    vocab: [],
    grammar: {
      title: '翻译技巧(一):词性转换 / 增译 / 省译',
      body: `- **词性转换**:英汉两种语言习惯不同,常需把名词 ↔ 动词 ↔ 形容词 ↔ 副词互换。
  - He is a **fast** runner. → 他跑得 **快**。(形 → 副)
  - Her **arrival** surprised us. → 她 **到了**,让我们很吃惊。(名 → 动)
- **增译**:为符合中文表达,补出省略的词。
  - Reading makes a full man. → 读书使人 **精神** 充实。(补"精神")
- **省译**:英文中必要的冠词、代词、连词在中文里常可省略。
  - **He** put **his** hands in **his** pockets. → 他把手插进口袋里。

原则:**不求字字对应,只求通顺达意。**`,
      questions: [
        {
          id: 'g48-1',
          type: 'single',
          stem: '翻译 "She is a careful reader." 最地道的一项是:',
          options: [
            'A) 她是一个仔细的读者。',
            'B) 她读书读得很仔细。',
            'C) 她仔细地读了一个读者。',
            'D) 她是个读书仔细的人。',
          ],
          answer: 1,
          explain:
            '**B) 她读书读得很仔细**。把名词 reader、形容词 careful 转换为动词"读"和副词"仔细",更符合中文表达。',
        },
        {
          id: 'g48-2',
          type: 'single',
          stem: '"He is fond of music." 采用词性转换的最佳译文是:',
          options: [
            'A) 他喜爱音乐。',
            'B) 他是音乐的喜爱者。',
            'C) 他对音乐喜爱。',
            'D) 音乐是他喜爱的。',
          ],
          answer: 0,
          explain:
            '**A) 他喜爱音乐**。把介词短语 be fond of 转成动词"喜爱",地道简洁。',
        },
        {
          id: 'g48-3',
          type: 'single',
          stem: '下列哪句采用了"省译"冠词/代词?',
          options: [
            'A) 读书使人充实 —— 补"精神"',
            'B) 他把手插进口袋里 —— 省略 his',
            'C) 她的演讲打动了我 —— arrival 译为"演讲"',
            'D) 春天来了,花儿开了 —— 增加"花儿"',
          ],
          answer: 1,
          explain:
            '**B) 他把手插进口袋里**。原文 his 省略不译,即省译代词。',
        },
      ],
    },
    reading: {
      title: 'Visiting a Tea House',
      text: `In a small tea house at the corner of the street, an old man sat by the window. His arrival always brought life to the quiet place. With slow and careful movements, he would make tea for every guest. He was a silent listener, nodding gently when someone spoke. Visitors felt that his presence alone was a kind of comfort. People came not only for the tea, but also for the peace he quietly offered.`,
      questions: [
        {
          id: 'r48-1',
          type: 'single',
          stem: 'Why did people come to the tea house?',
          options: [
            'A) Only for the tea',
            'B) For both the tea and the peace he offered',
            'C) To meet other guests',
            'D) To buy tea cheaply',
          ],
          answer: 1,
          explain:
            '**B**。末句 "not only for the tea, but also for the peace he quietly offered"。',
        },
        {
          id: 'r48-2',
          type: 'blank',
          stem: '把 "He was a silent listener" 用词性转换译成中文:他是 ____。',
          answer: '静静地 / 默默地倾听 (他人)',
          explain:
            '**默默地倾听**。把名词 listener 转换为动词"倾听",silent 转为副词"默默地"。',
        },
        {
          id: 'r48-3',
          type: 'judge',
          stem: 'The old man\'s presence made visitors feel comfortable.',
          options: ['正确', '错误'],
          answer: 0,
          explain:
            '**正确**。"his presence alone was a kind of comfort" 与陈述一致。',
        },
      ],
    },
    translation: [
      {
        en: 'His speech deeply moved the audience.',
        zh: '他的演讲深深打动了听众。',
        tip: '词性转换:moved 仍作动词,deeply 转副词"深深地"',
      },
      {
        en: 'After careful thought, she accepted the offer.',
        zh: '仔细考虑之后,她接受了这份邀请。',
        tip: '词性转换:名词 thought 译为动词"考虑"',
      },
      {
        en: 'He put on his coat and left in a hurry.',
        zh: '他穿上外套,匆匆离开了。',
        tip: '省译代词 his;in a hurry 译为副词"匆匆"',
      },
    ],
    writing: {
      prompt:
        '写一段(50 词)中文介绍"我喜欢的一家小店",然后试着把它译成英文,注意词性转换。',
      template:
        '我最喜欢街角那家小书店。店主是一位 ____ (沉默寡言的)老人,他总是 ____ (静静地读书)。我每次走进去,他都会 ____ (友好地点头)。我愿把整个下午都花在那里。',
      sample:
        '我最喜欢街角那家小书店。店主是一位沉默寡言的老人,他总是静静地读书。我每次走进去,他都会友好地点头。我愿把整个下午都花在那里。译文:My favorite place is a small bookshop on the corner. The owner, a quiet old man, is always reading silently. Whenever I walk in, he nods in a friendly way, and I would gladly spend the whole afternoon there.',
      keyWords: ['silent → quietly', 'a nod → nod', 'friendliness → friendly'],
    },
  },

  // ===================== Day 49 · 翻译技巧(语序调整/被动转主动) =====================
  {
    day: 49,
    title: 'Translation II · 语序调整与被动转主动',
    vocab: [],
    grammar: {
      title: '翻译技巧(二):语序调整 / 被动转主动',
      body: `- **语序调整**:英文常用"主+谓+宾+状(地点+时间)",中文常用"主+时间+地点+谓+宾"。
  - I will meet you **at the gate at 9 a.m.**
  - 译:我 **上午九点在大门口** 见你。
- **定语从句前置**:英文定语从句在后,中文常将短定语前置。
  - The book **I bought yesterday** is useful. → **我昨天买的** 那本书很有用。
- **被动转主动**:中文少用"被",常译为主动句或无主句。
  - **It is said that** he has gone abroad. → **据说** 他出国了。
  - The room **was cleaned** by Tom. → 汤姆 **打扫了** 房间。

原则:**英文重形合,中文重意合;调整语序让中文更顺畅。**`,
      questions: [
        {
          id: 'g49-1',
          type: 'single',
          stem: '"I was born in 1990 in Beijing." 最佳译文是:',
          options: [
            'A) 我在 1990 年被生在北京。',
            'B) 我 1990 年生于北京。',
            'C) 1990 年北京生了我。',
            'D) 我被生在 1990 年的北京。',
          ],
          answer: 1,
          explain:
            '**B) 我 1990 年生于北京**。被动无需保留"被",且中文习惯"时间+地点+谓语"。',
        },
        {
          id: 'g49-2',
          type: 'single',
          stem: '"The letter she wrote yesterday was long." 把定语从句前置的最佳译法:',
          options: [
            'A) 那封信很长,她昨天写的。',
            'B) 她昨天写的那封信很长。',
            'C) 她写信昨天那封很长。',
            'D) 那封很长的信她昨天写的。',
          ],
          answer: 1,
          explain:
            '**B) 她昨天写的那封信很长**。定语从句 she wrote yesterday 前置作"她昨天写的"。',
        },
        {
          id: 'g49-3',
          type: 'single',
          stem: '"It is reported that five people were injured." 译文应体现被动转主动/无主句:',
          options: [
            'A) 据报道,有五人受伤。',
            'B) 据报道,五个人被伤害了。',
            'C) 五个人受伤了,这件事被报道。',
            'D) 报道说五个人受了伤。',
          ],
          answer: 0,
          explain:
            '**A) 据报道,有五人受伤**。It is reported that → 据报道(无主句),injured 不译"被"。',
        },
      ],
    },
    reading: {
      title: 'A Clock That Never Stops',
      text: `It is often said that time is the fairest thing in the world. No matter who you are, you are given exactly twenty-four hours each day. The difference lies in how those hours are used. Those who plan their time carefully often achieve more than those who simply let it pass. As a famous writer once put it, the time you enjoyed wasting was not wasted at all. Time, once lost, will never be found again.`,
      questions: [
        {
          id: 'r49-1',
          type: 'single',
          stem: 'What makes the difference between people, according to the passage?',
          options: [
            'A) Their age',
            'B) How they use their time',
            'C) Their jobs',
            'D) Their luck',
          ],
          answer: 1,
          explain:
            '**B**。"The difference lies in how those hours are used" 直接指出差别在于时间的使用。',
        },
        {
          id: 'r49-2',
          type: 'judge',
          stem: 'The passage suggests that lost time can be found again.',
          options: ['正确', '错误'],
          answer: 1,
          explain:
            '**错误**。末句 "Time, once lost, will never be found again",失去的时间永远找不回来。',
        },
        {
          id: 'r49-3',
          type: 'blank',
          stem: '"It is often said that time is the fairest thing." 译成中文:____ 时间是世界上最公平的东西。',
          answer: '人们常说 / 常言道',
          explain:
            '**人们常说 / 常言道**。It is said that 句型常译为"据说/人们常说"。',
        },
      ],
    },
    translation: [
      {
        en: 'She was offered a scholarship by the university.',
        zh: '大学给她提供了一份奖学金。',
        tip: '被动转主动,避免"被"字',
      },
      {
        en: 'The man you met yesterday is my English teacher.',
        zh: '你昨天见到的那个人是我的英语老师。',
        tip: '定语从句前置作修饰语',
      },
      {
        en: 'We will discuss the plan in the meeting room at 3 p.m.',
        zh: '我们下午三点在会议室讨论这个计划。',
        tip: '语序调整:时间+地点+谓语',
      },
    ],
    writing: {
      prompt:
        '把下面中文译成英文(50 词左右),注意被动转主动、定语前置:"据说,我去年认识的那位老人年轻时是一位教师。他每天早晨都会在公园里散步。"',
      template:
        '____ (It is said that / 据说) the old man ____ (定语前置: I got to know last year) was a teacher when he was young. He ____ (would + 原形) take a walk in the park every morning.',
      sample:
        'It is said that the old man I got to know last year was a teacher in his youth. He would take a slow walk in the park every morning, rain or shine, and greet everyone he met with a gentle smile.',
      keyWords: ['it is said that', '定语从句前置', 'would + do', '时间地点状语'],
    },
  },

  // ===================== Day 50 · 挑错专项(主谓一致/时态/搭配) =====================
  {
    day: 50,
    title: 'Error Correction I · 主谓一致 / 时态 / 搭配',
    vocab: [],
    grammar: {
      title: '挑错题专项(一)',
      body: `挑错题常考三类高频考点:
- **主谓一致**:集合动词、就近/就远原则、不定代词。
  - Everyone **are** here. → **is**(不定代词作主语用单数)。
  - Neither he nor I **am** right. (就近一致)
- **时态一致性**:状语从句、宾语从句时态呼应。
  - He said he **will** come. → **would**(主句过去时,从句相应改)。
  - I **have bought** this book for three years. → **have had**(buy 瞬间动词不能与段时间连用)。
- **固定搭配**:spend ... doing;used to do / be used to doing;be worth doing。

口诀:**挑错先找主谓,再看时态搭配。**`,
      questions: [
        {
          id: 'g50-1',
          type: 'single',
          stem: '找出错误:Each of the students (A) have (B) his own (C) desk in the classroom (D).',
          options: [
            'A) Each of the students',
            'B) have',
            'C) his own',
            'D) in the classroom',
          ],
          answer: 1,
          explain:
            '**B) have → has**。Each 作主语时谓语用单数 has。',
        },
        {
          id: 'g50-2',
          type: 'single',
          stem: '找出错误:He said (A) that he will (B) come (C) the next day (D).',
          options: ['A) said', 'B) will', 'C) come', 'D) the next day'],
          answer: 1,
          explain:
            '**B) will → would**。主句 said 是过去时,宾语从句时态呼应,应用过去将来时 would。',
        },
        {
          id: 'g50-3',
          type: 'single',
          stem: '找出错误:I have bought (A) this (B) book for (C) three years (D).',
          options: [
            'A) have bought',
            'B) this',
            'C) for',
            'D) three years',
          ],
          answer: 0,
          explain:
            '**A) have bought → have had**。buy 是瞬间动词,不能与 for three years 段时间连用,需改为延续性动词 have had。',
        },
      ],
    },
    reading: {
      title: 'A Lesson in Honesty',
      text: `Last summer, a young man returned a wallet full of money to its owner. Everyone in the town praised him for his honesty. "Honesty is more important than money," the mayor said at the meeting. The young man told the reporters that he had been taught by his parents to be honest since he was a child. His story has inspired many students in the local school. Each of them wants to learn from his example and become a better person.`,
      questions: [
        {
          id: 'r50-1',
          type: 'single',
          stem: 'Why was the young man praised?',
          options: [
            'A) Because he found a wallet',
            'B) Because he returned a wallet full of money',
            'C) Because he gave money to the mayor',
            'D) Because he taught at school',
          ],
          answer: 1,
          explain:
            '**B**。首句 "returned a wallet full of money to its owner" 直接说明受赞扬的原因。',
        },
        {
          id: 'r50-2',
          type: 'judge',
          stem: 'Each of the students in the local school wants to learn from his example.',
          options: ['正确', '错误'],
          answer: 0,
          explain:
            '**正确**。末句 "Each of them wants to learn from his example",主谓一致 wants 正确。',
        },
        {
          id: 'r50-3',
          type: 'blank',
          stem: '把 "He has been taught by his parents to be honest." 改成主动句:His parents ____.',
          answer: 'have taught him to be honest',
          explain:
            '**have taught him to be honest**。被动变主动,主语 his parents,谓语 have taught。',
        },
      ],
    },
    translation: [
      {
        en: 'Neither his parents nor he is satisfied with the result.',
        zh: '他的父母和他本人对结果都不满意。',
        tip: 'neither ... nor ... 就近一致,he 决定用 is',
      },
      {
        en: 'He said he had finished the work the day before.',
        zh: '他说他前一天就已经完成了那项工作。',
        tip: '时态呼应:主句 said 过去时,从句用过去完成时',
      },
      {
        en: 'I spent two hours reviewing my lessons last night.',
        zh: '昨晚我花了两个小时复习功课。',
        tip: 'spend ... doing sth. 固定搭配',
      },
    ],
    writing: {
      prompt:
        '写一段(60 词)说明"诚实的重要性",并自查主谓一致与时态是否正确。',
      template:
        'Honesty ____ (be) the best policy. Everyone in our class ____ (believe) that telling the truth matters. Last week, a classmate returned a lost phone, and we all ____ (praise) him. Such stories ____ (show) that honesty still ____ (matter) today.',
      sample:
        'Honesty is the best policy. Everyone in our class believes that telling the truth matters. Last week, a classmate returned a lost phone, and we all praised him warmly. Such stories show that honesty still matters today, no matter how fast the world may change.',
      keyWords: ['主谓一致', '时态呼应', 'spend doing', 'each + 单数'],
    },
  },

  // ===================== Day 51 · 挑错专项(从句/非谓语) =====================
  {
    day: 51,
    title: 'Error Correction II · 从句 / 非谓语',
    vocab: [],
    grammar: {
      title: '挑错题专项(二)',
      body: `本日聚焦 **从句** 与 **非谓语** 高频错误:
- **定语从句**:关系词选用、介词 + 关系代词。
  - This is the house **where** he lives **in**. → 去掉 in(where 已含介词意义),或 the house **in which** he lives。
- **名词性从句**:that / what 区别。
  - **That** he said at the meeting was true. → **What**(what 在从句中作宾语)。
- **非谓语**:
  - He suggested me **to go** home. → **that I (should) go** home.(suggest 不接 sb. to do)
  - I look forward to **hear** from you. → **hearing**.(to 是介词)
  - The book is worth **to read**. → **reading**.

口诀:**从句看关系词位置,非谓语记搭配表。**`,
      questions: [
        {
          id: 'g51-1',
          type: 'single',
          stem: '找出错误:This is the factory (A) where (B) he works in (C) every day (D).',
          options: [
            'A) the factory',
            'B) where',
            'C) works in',
            'D) every day',
          ],
          answer: 2,
          explain:
            '**C) works in → works**。where 已相当于 in which,work 后不能再加 in,否则重复。',
        },
        {
          id: 'g51-2',
          type: 'single',
          stem: '找出错误:The teacher (A) suggested me (B) to read (C) more English books (D).',
          options: [
            'A) The teacher',
            'B) suggested me',
            'C) to read',
            'D) more English books',
          ],
          answer: 1,
          explain:
            '**B) suggested me → suggested that I (should)**。suggest 不接 sb. to do,应用 suggest that 从句 (should) + 原形。',
        },
        {
          id: 'g51-3',
          type: 'single',
          stem: '找出错误:I look forward (A) to hear (B) from you (C) soon (D).',
          options: [
            'A) look forward',
            'B) hear',
            'C) from you',
            'D) soon',
          ],
          answer: 1,
          explain:
            '**B) hear → hearing**。look forward to 中 to 是介词,后接动名词 hearing。',
        },
      ],
    },
    reading: {
      title: 'A Book That Stays With You',
      text: `Some books are read once and then forgotten. A few, however, stay with you for a lifetime. What makes such a book special is not only its story, but also the way it changes the way you think. Readers who return to a favorite book years later often find new meanings that they missed before. It is said that a great book is one that grows up together with its reader, offering something different at every stage of life.`,
      questions: [
        {
          id: 'r51-1',
          type: 'single',
          stem: 'What makes a book stay with a reader for a lifetime?',
          options: [
            'A) Its length',
            'B) The way it changes the way you think',
            'C) Its price',
            'D) Its cover',
          ],
          answer: 1,
          explain:
            '**B**。"the way it changes the way you think" 直接说明这本书特别之处。',
        },
        {
          id: 'r51-2',
          type: 'judge',
          stem: 'A great book offers different things at different stages of life.',
          options: ['正确', '错误'],
          answer: 0,
          explain:
            '**正确**。末句 "offering something different at every stage of life" 与陈述一致。',
        },
        {
          id: 'r51-3',
          type: 'blank',
          stem: '把 "It is said that a great book grows up with its reader." 用 what 改写:____ makes a great book special is that it grows up with its reader.',
          answer: 'What',
          explain:
            '**What**。What 引导主语从句并在从句中作主语,意为"……的东西"。',
        },
      ],
    },
    translation: [
      {
        en: 'This is the village where I was born.',
        zh: '这就是我出生的那个村庄。',
        tip: 'where 引导定语从句,相当于 in which',
      },
      {
        en: 'He insisted that I (should) stay for dinner.',
        zh: '他坚持要我留下吃晚饭。',
        tip: 'insist + (should) + 动词原形',
      },
      {
        en: 'The film is well worth seeing a second time.',
        zh: '这部电影很值得再看一次。',
        tip: 'be worth + doing 固定搭配',
      },
    ],
    writing: {
      prompt:
        '写一段(60 词)介绍"影响我最深的一本书",注意正确使用定语从句和非谓语。',
      template:
        'The book ____ influenced me most is one ____ I read in high school. Written by a young author, it taught me ____ (think) clearly. I suggest that everyone ____ (read) it at least once, for it is truly worth ____ (discuss) with friends.',
      sample:
        'The book that influenced me most is one which I read in high school. Written by a young author, it taught me to think clearly and to face difficulties with courage. I suggest that everyone read it at least once, for it is truly worth discussing with friends and reflecting on again and again.',
      keyWords: ['定语从句', 'written by', 'suggest that', 'worth doing'],
    },
  },
]
