import type { DayPlan } from '../types'

/**
 * Phase 0 · 启蒙地基(Day 1 ~ Day 14)
 *
 * 面向基础薄弱学习者:字母音标 → 自然拼读 → be 动词 → 人称/物主/指示代词 →
 * 名词单复数 → 主谓宾语序 → 一般/特殊疑问句 → there be → 进行时 → 祈使句 → 复习。
 *
 * - vocab 留空:由系统从词库最高频内容词自动分配(见 plan.ts assignVocab)。
 * - 阅读极短(30~60 词),简单句为主,话题贴近生活。
 * - scramble / match 为精选手写题(主谓宾最简句),App 会再叠加 derive 派生题。
 */
export const PHASE_0: DayPlan[] = [
  // ---------------- Day 1 ----------------
  {
    day: 1,
    phaseId: 'p0',
    level: 1,
    title: 'Sounds & First Words · 声音与第一个词',
    vocab: [],
    grammar: {
      title: '字母、音标与 a / an',
      body: `英语有 **26 个字母**,每个字母(和字母组合)对应一个或几个**音**。学词先听音,这就是**音标**(如 /æ/ /iː/ /ʌ/)。

冠词最基础的两条:
- **a** 接**辅音音素**开头的词:a book, a car
- **an** 接**元音音素**开头的词:an apple, an egg

判断看**发音**,不是字母:an **hour**(h 不发音),a **university**(u 发 /ju/)。`,
      questions: [
        {
          id: 'g1-1',
          type: 'single',
          stem: 'This is ___ apple.',
          options: ['A) a', 'B) an'],
          answer: 1,
          explain: '**B) an**。apple 首音素是元音 /æ/,用 an。',
        },
        {
          id: 'g1-2',
          type: 'single',
          stem: 'I have ___ dog.',
          options: ['A) a', 'B) an'],
          answer: 0,
          explain: '**A) a**。dog 首音素是辅音 /d/,用 a。',
        },
        {
          id: 'g1-3',
          type: 'judge',
          stem: '判断对错:It is an university.',
          options: ['正确', '错误'],
          answer: 1,
          explain: '**错误**。university 读 /ˌjuː.../,u 发辅音 /j/,应说 a university。',
        },
      ],
    },
    reading: {
      title: 'Hello, English!',
      text: `Hello! My name is Tom. I am a student. This is a book. That is a pen. I have an apple. English is fun. Let's learn together!`,
      questions: [
        {
          id: 'r1-1',
          type: 'single',
          stem: 'Who is the speaker?',
          options: ['A) A teacher', 'B) A student', 'C) A dog'],
          answer: 1,
          explain: '**B**。"I am a student" 说明 Tom 是学生。',
        },
        {
          id: 'r1-2',
          type: 'judge',
          stem: '判断对错:Tom has an apple.',
          options: ['正确', '错误'],
          answer: 0,
          explain: '**正确**。原文 "I have an apple"。',
        },
      ],
    },
    translation: [
      { en: 'I am a student.', zh: '我是一名学生。', tip: 'am 是 be 动词,接在 I 后' },
      { en: 'This is a book.', zh: '这是一本书。', tip: 'This is… 用来介绍事物' },
      { en: 'I have an apple.', zh: '我有一个苹果。', tip: 'apple 元音开头用 an' },
    ],
    writing: {
      prompt: '模仿例句,写一句介绍自己的话(名字 + 身份)。',
      template: 'My name is ____. I am a ____.',
      sample: 'My name is Li Ming. I am a student.',
      keyWords: ['name', 'student'],
    },
    scramble: [
      { id: 's1-1', words: ['I', 'am', 'a', 'student'], translation: '我是一名学生。' },
      { id: 's1-2', words: ['This', 'is', 'a', 'book'], translation: '这是一本书。' },
    ],
    match: [
      {
        id: 'm1-1',
        cue: '🍎',
        options: ['apple', 'dog', 'book', 'pen'],
        answer: 0,
        explain: 'apple = 苹果',
      },
      {
        id: 'm1-2',
        cue: '学生',
        options: ['teacher', 'student', 'apple', 'car'],
        answer: 1,
        explain: 'student = 学生',
      },
    ],
  },

  // ---------------- Day 2 ----------------
  {
    day: 2,
    phaseId: 'p0',
    level: 1,
    title: 'Be Verbs · be 动词',
    vocab: [],
    grammar: {
      title: 'be 动词:am / is / are',
      body: `be 动词随主语变化:
- **I → am**:I am happy.
- **he / she / it / 单数 → is**:She is kind. It is hot.
- **you / we / they / 复数 → are**:They are friends.

口诀:**我用 am,你用 are,is 连着他她它,单数 is,复数 are。**`,
      questions: [
        { id: 'g2-1', type: 'single', stem: 'She ___ a teacher.', options: ['A) am', 'B) is', 'C) are'], answer: 1, explain: '**B) is**。she 用 is。' },
        { id: 'g2-2', type: 'single', stem: 'They ___ my friends.', options: ['A) am', 'B) is', 'C) are'], answer: 2, explain: '**C) are**。复数 they 用 are。' },
        { id: 'g2-3', type: 'blank', stem: 'I ___ a boy.(填 be 动词)', answer: 'am', explain: 'I 后固定用 am。' },
      ],
    },
    reading: {
      title: 'My Family',
      text: `This is my family. My mother is a doctor. My father is a teacher. I am their son. We are happy. They are very kind to me.`,
      questions: [
        { id: 'r2-1', type: 'single', stem: 'What is the mother?', options: ['A) A doctor', 'B) A teacher', 'C) A student'], answer: 0, explain: '**A**。"My mother is a doctor"。' },
        { id: 'r2-2', type: 'judge', stem: '判断:They are kind.', options: ['正确', '错误'], answer: 0, explain: '**正确**。原文 "They are very kind"。' },
      ],
    },
    translation: [
      { en: 'She is a doctor.', zh: '她是一名医生。' },
      { en: 'We are friends.', zh: '我们是朋友。' },
      { en: 'It is a sunny day.', zh: '今天是个晴天。' },
    ],
    writing: { prompt: '用 be 动词写一句介绍家人职业的话。', template: 'My ___ is a ___.', sample: 'My mother is a doctor.', keyWords: ['mother', 'doctor'] },
    scramble: [
      { id: 's2-1', words: ['She', 'is', 'a', 'doctor'], translation: '她是一名医生。' },
      { id: 's2-2', words: ['We', 'are', 'friends'], translation: '我们是朋友。' },
    ],
    match: [
      { id: 'm2-1', cue: '医生', options: ['teacher', 'doctor', 'student', 'book'], answer: 1, explain: 'doctor = 医生' },
      { id: 'm2-2', cue: '朋友', options: ['family', 'friend', 'name', 'apple'], answer: 1, explain: 'friend = 朋友' },
    ],
  },

  // ---------------- Day 3 ----------------
  {
    day: 3,
    phaseId: 'p0',
    level: 1,
    title: 'Subject Pronouns · 人称代词主格',
    vocab: [],
    grammar: {
      title: '人称代词(主格)',
      body: `做**主语**(动作发出者)的代词:
- 单数:**I**(我) **you**(你) **he**(他) **she**(她) **it**(它)
- 复数:**we**(我们) **you**(你们) **they**(他/她/它们)

注意大小写:**I** 永远大写。两个人称并列时,把别人放前面、自己放最后:**
you and I**(你和我要好,礼貌)。`,
      questions: [
        { id: 'g3-1', type: 'single', stem: '___ am a student.', options: ['A) He', 'B) I', 'C) They'], answer: 1, explain: '**B) I**。后接 am 的主语只能是 I。' },
        { id: 'g3-2', type: 'single', stem: 'My brother and ___ play football.', options: ['A) I', 'B) me', 'C) my'], answer: 0, explain: '**A) I**。作主语用主格 I。' },
        { id: 'g3-3', type: 'blank', stem: '___ is my sister.(她)', answer: 'she', explain: '指"她"作主语用 she。' },
      ],
    },
    reading: {
      title: 'After School',
      text: `After school, I go home. My sister is at home. We play games. She is good at math. I help her with English. We are a good team.`,
      questions: [
        { id: 'r3-1', type: 'single', stem: 'Who is good at math?', options: ['A) I', 'B) My sister', 'C) We'], answer: 1, explain: '**B**。"She is good at math",She 指 sister。' },
        { id: 'r3-2', type: 'judge', stem: '判断:They help each other.', options: ['正确', '错误'], answer: 0, explain: '**正确**。I help her,互帮互助。' },
      ],
    },
    translation: [
      { en: 'I help her.', zh: '我帮助她。' },
      { en: 'He is my friend.', zh: '他是我的朋友。' },
      { en: 'They are students.', zh: '他们是学生。' },
    ],
    writing: { prompt: '用一个人称代词开头写一句话。', template: '___ likes reading.', sample: 'She likes reading.', keyWords: ['she', 'reading'] },
    scramble: [
      { id: 's3-1', words: ['I', 'help', 'her'], translation: '我帮助她。' },
      { id: 's3-2', words: ['He', 'is', 'my', 'friend'], translation: '他是我的朋友。' },
    ],
    match: [
      { id: 'm3-1', cue: '他', options: ['she', 'he', 'we', 'it'], answer: 1, explain: 'he = 他' },
      { id: 'm3-2', cue: '我们', options: ['I', 'you', 'we', 'they'], answer: 2, explain: 'we = 我们' },
    ],
  },

  // ---------------- Day 4 ----------------
  {
    day: 4,
    phaseId: 'p0',
    level: 1,
    title: 'Possessives · 物主代词',
    vocab: [],
    grammar: {
      title: '物主代词:my / your / his / her / our / their',
      body: `表示"谁的",**后面要接名词**:
- my(我的) your(你的) his(他的) her(她的) its(它的)
- our(我们的) your(你们的) their(他们的)

对比:
- 主格:**She** is here.(她在这)
- 物主:**Her** bag is here.(她的包在这)`,
      questions: [
        { id: 'g4-1', type: 'single', stem: 'This is ___ book.(我的)', options: ['A) I', 'B) my', 'C) me'], answer: 1, explain: '**B) my**。后接名词 book,用物主代词。' },
        { id: 'g4-2', type: 'single', stem: 'He loves ___ mother.(他的)', options: ['A) he', 'B) his', 'C) him'], answer: 1, explain: '**B) his**。' },
        { id: 'g4-3', type: 'judge', stem: '判断:She is my friend.', options: ['正确', '错误'], answer: 0, explain: '**正确**。my 后接名词 friend。' },
      ],
    },
    reading: {
      title: 'My Room',
      text: `This is my room. It is small but clean. My books are on the desk. My bag is under the chair. Her cat is on my bed. I love my room.`,
      questions: [
        { id: 'r4-1', type: 'single', stem: 'Where are the books?', options: ['A) On the desk', 'B) Under the chair', 'C) On the bed'], answer: 0, explain: '**A**。"My books are on the desk"。' },
        { id: 'r4-2', type: 'judge', stem: '判断:The room is big.', options: ['正确', '错误'], answer: 1, explain: '**错误**。原文 "It is small"。' },
      ],
    },
    translation: [
      { en: 'This is my room.', zh: '这是我的房间。' },
      { en: 'Her cat is on the bed.', zh: '她的猫在床上。' },
      { en: 'Our teacher is kind.', zh: '我们的老师很和蔼。' },
    ],
    writing: { prompt: '用物主代词描述一样你的物品。', template: 'My ___ is ___.', sample: 'My bag is new.', keyWords: ['bag', 'new'] },
    scramble: [
      { id: 's4-1', words: ['This', 'is', 'my', 'room'], translation: '这是我的房间。' },
      { id: 's4-2', words: ['Her', 'cat', 'is', 'on', 'the', 'bed'], translation: '她的猫在床上。' },
    ],
    match: [
      { id: 'm4-1', cue: '我的', options: ['my', 'me', 'I', 'mine'], answer: 0, explain: 'my = 我的(后接名词)' },
      { id: 'm4-2', cue: '他们的', options: ['his', 'her', 'their', 'our'], answer: 2, explain: 'their = 他们的' },
    ],
  },

  // ---------------- Day 5 ----------------
  {
    day: 5,
    phaseId: 'p0',
    level: 1,
    title: 'This / That · 指示代词',
    vocab: [],
    grammar: {
      title: '指示代词:this / that / these / those',
      body: `用来"指":
- 近处单数:**this**(这个)— This is a pen.
- 远处单数:**that**(那个)— That is a car.
- 近处复数:**these**(这些)— These are books.
- 远处复数:**those**(那些)— Those are trees.

记忆:**this/that 单数配 is;these/those 复数配 are。**`,
      questions: [
        { id: 'g5-1', type: 'single', stem: '___ are my books.(这些)', options: ['A) This', 'B) These', 'C) That'], answer: 1, explain: '**B) These**。复数配 are。' },
        { id: 'g5-2', type: 'single', stem: '___ is a bird over there.(那只)', options: ['A) This', 'B) These', 'C) That'], answer: 2, explain: '**C) That**。远处单数。' },
        { id: 'g5-3', type: 'blank', stem: 'This ___ a pen.(be 动词)', answer: 'is', explain: 'this 单数配 is。' },
      ],
    },
    reading: {
      title: 'In the Garden',
      text: `Look at the garden. This is a rose. That is a tree. These are small flowers. Those are green apples. I like this garden very much.`,
      questions: [
        { id: 'r5-1', type: 'single', stem: 'What is THIS (near)?', options: ['A) A tree', 'B) A rose', 'C) Apples'], answer: 1, explain: '**B**。"This is a rose"。' },
        { id: 'r5-2', type: 'judge', stem: '判断:Those are green apples.', options: ['正确', '错误'], answer: 0, explain: '**正确**。原文如此。' },
      ],
    },
    translation: [
      { en: 'This is a rose.', zh: '这是一朵玫瑰。' },
      { en: 'Those are green apples.', zh: '那些是青苹果。' },
      { en: 'These are my friends.', zh: '这些是我的朋友。' },
    ],
    writing: { prompt: '指着一近一远两样东西各写一句。', template: 'This is a ___. That is a ___.', sample: 'This is a pen. That is a book.', keyWords: ['pen', 'book'] },
    scramble: [
      { id: 's5-1', words: ['These', 'are', 'my', 'friends'], translation: '这些是我的朋友。' },
      { id: 's5-2', words: ['That', 'is', 'a', 'tree'], translation: '那是一棵树。' },
    ],
    match: [
      { id: 'm5-1', cue: '这些', options: ['this', 'these', 'that', 'those'], answer: 1, explain: 'these = 这些(复数)' },
      { id: 'm5-2', cue: '那个', options: ['this', 'these', 'that', 'those'], answer: 2, explain: 'that = 那个(远处单数)' },
    ],
  },

  // ---------------- Day 6 ----------------
  {
    day: 6,
    phaseId: 'p0',
    level: 1,
    title: 'Plurals · 名词单复数',
    vocab: [],
    grammar: {
      title: '名词复数:-s / -es',
      body: `一个以上要变复数:
- 一般加 **-s**:book → book**s**,apple → apple**s**
- 以 s/x/sh/ch 结尾加 **-es**:bus → bus**es**,box → box**es**,watch → watch**es**
- 辅音+y:变 y 为 i 加 **-es**:city → cit**ies**,baby → bab**ies**
- 不规则:man → **men**,child → **children**,foot → **feet**`,
      questions: [
        { id: 'g6-1', type: 'single', stem: 'There are three ___ on the desk.(box)', options: ['A) boxs', 'B) boxes', 'C) boxies'], answer: 1, explain: '**B) boxes**。x 结尾加 es。' },
        { id: 'g6-2', type: 'single', stem: 'Two ___ are playing.(child)', options: ['A) childs', 'B) children', 'C) childes'], answer: 1, explain: '**B) children**。child 复数不规则。' },
        { id: 'g6-3', type: 'blank', stem: 'I have two ___.(baby 的复数)', answer: 'babies', explain: '辅音+y → ies。' },
      ],
    },
    reading: {
      title: 'At the Zoo',
      text: `We are at the zoo. I see two lions and three monkeys. The monkeys are funny. There are many birds in the trees. My brother likes the big elephants. We take many photos.`,
      questions: [
        { id: 'r6-1', type: 'single', stem: 'How many monkeys?', options: ['A) Two', 'B) Three', 'C) Many'], answer: 1, explain: '**B**。"three monkeys"。' },
        { id: 'r6-2', type: 'judge', stem: '判断:His brother likes elephants.', options: ['正确', '错误'], answer: 0, explain: '**正确**。"My brother likes the big elephants"。' },
      ],
    },
    translation: [
      { en: 'I see three monkeys.', zh: '我看到三只猴子。' },
      { en: 'There are many birds.', zh: '有很多鸟。' },
      { en: 'The boxes are heavy.', zh: '这些箱子很重。' },
    ],
    writing: { prompt: '用复数名词写一句话。', template: 'I see two ___.', sample: 'I see two birds.', keyWords: ['birds'] },
    scramble: [
      { id: 's6-1', words: ['I', 'see', 'three', 'monkeys'], translation: '我看到三只猴子。' },
      { id: 's6-2', words: ['The', 'boxes', 'are', 'heavy'], translation: '这些箱子很重。' },
    ],
    match: [
      { id: 'm6-1', cue: '猴子(复数)', options: ['monkey', 'monkeys', 'monkeies', 'monkeyes'], answer: 1, explain: '一般加 s' },
      { id: 'm6-2', cue: '孩子(复数)', options: ['childs', 'childes', 'children', 'child'], answer: 2, explain: 'child → children(不规则)' },
    ],
  },

  // ---------------- Day 7 ----------------
  {
    day: 7,
    phaseId: 'p0',
    level: 1,
    title: 'Articles Review · 冠词综合',
    vocab: [],
    grammar: {
      title: 'a / an / the 综合复习',
      body: `三步选冠词:
1. **泛指一个** → a / an(看发音)。
2. **特指(双方都知道、上文提过、独一无二)** → the。
3. **泛指复数/不可数** → 不用冠词(零冠词)。

例:
- I have **a** cat. **The** cat is white.(第一次 a,再提 the)
- **The** sun is bright.(独一无二)
- **Books** are my friends.(泛指复数,零冠词)`,
      questions: [
        { id: 'g7-1', type: 'single', stem: 'I have a cat. ___ cat is white.', options: ['A) A', 'B) An', 'C) The'], answer: 2, explain: '**C) The**。上文提过,特指。' },
        { id: 'g7-2', type: 'single', stem: '___ sun rises in the east.', options: ['A) A', 'B) An', 'C) The'], answer: 2, explain: '**C) The**。独一无二。' },
        { id: 'g7-3', type: 'judge', stem: '判断:Books are my friends.(不用冠词,泛指)', options: ['正确', '错误'], answer: 0, explain: '**正确**。泛指复数用零冠词。' },
      ],
    },
    reading: {
      title: 'A Small Town',
      text: `I live in a small town. The town is quiet. There is a river near my home. The river is clean. People here are friendly. I love the town.`,
      questions: [
        { id: 'r7-1', type: 'single', stem: 'What is near the home?', options: ['A) A river', 'B) A school', 'C) A park'], answer: 0, explain: '**A**。"There is a river"。' },
        { id: 'r7-2', type: 'judge', stem: '判断:The town is noisy.', options: ['正确', '错误'], answer: 1, explain: '**错误**。原文 "The town is quiet"。' },
      ],
    },
    translation: [
      { en: 'I have a cat. The cat is white.', zh: '我有一只猫。这只猫是白色的。' },
      { en: 'The sun is bright.', zh: '太阳很明亮。' },
      { en: 'Books are my friends.', zh: '书是我的朋友。' },
    ],
    writing: { prompt: '先用 a 介绍一样东西,再用 the 特指它。', template: 'I have a ___. The ___ is ___.', sample: 'I have a bike. The bike is new.', keyWords: ['bike', 'new'] },
    scramble: [
      { id: 's7-1', words: ['I', 'have', 'a', 'cat'], translation: '我有一只猫。' },
      { id: 's7-2', words: ['The', 'sun', 'is', 'bright'], translation: '太阳很明亮。' },
    ],
    match: [
      { id: 'm7-1', cue: '特指(这个/那个)', options: ['a', 'an', 'the', '(无)'], answer: 2, explain: 'the = 特指' },
      { id: 'm7-2', cue: '泛指复数/不可数时', options: ['a', 'an', 'the', '零冠词(不用)'], answer: 3, explain: '泛指复数用零冠词' },
    ],
  },

  // ---------------- Day 8 ----------------
  {
    day: 8,
    phaseId: 'p0',
    level: 1,
    title: 'SVO Order · 主谓宾语序',
    vocab: [],
    grammar: {
      title: '主谓宾:英语的基本语序',
      body: `英语基本句型 **主语 + 谓语 + 宾语(SVO)**,和中文一致:
- I(主) like(谓) apples(宾).= 我喜欢苹果。

**最大区别**:
- 时间/地点**放句末**:**I study English at home every day.**(中文会说"我每天在家学英语")
- 频率副词 usually/always 放**实义动词前**:I **always** get up early.`,
      questions: [
        { id: 'g8-1', type: 'single', stem: '选正确语序:___', options: ['A) I at home study English', 'B) I study English at home', 'C) Study I English home'], answer: 1, explain: '**B**。SVO + 地点放句末。' },
        { id: 'g8-2', type: 'single', stem: 'I ___ get up early.(总是)', options: ['A) always', 'B) am always', 'C) always am'], answer: 0, explain: '**A) always**。频率副词放实义动词前。' },
        { id: 'g8-3', type: 'judge', stem: '判断:Every day I go to school 是常见自然语序。', options: ['正确', '错误'], answer: 0, explain: '**正确**。强调时间可前置,但 I go to school every day 更常见。' },
      ],
    },
    reading: {
      title: 'My Day',
      text: `I get up at seven every day. I eat breakfast at home. Then I go to school. I study English and math. In the evening, I do my homework. I always read a book before sleep.`,
      questions: [
        { id: 'r8-1', type: 'single', stem: 'When does he get up?', options: ['A) At six', 'B) At seven', 'C) At eight'], answer: 1, explain: '**B**。"at seven"。' },
        { id: 'r8-2', type: 'judge', stem: '判断:He reads a book before sleep.', options: ['正确', '错误'], answer: 0, explain: '**正确**。原文 "I always read a book before sleep"。' },
      ],
    },
    translation: [
      { en: 'I study English at home.', zh: '我在家学英语。' },
      { en: 'I always get up early.', zh: '我总是早起。' },
      { en: 'I like apples.', zh: '我喜欢苹果。' },
    ],
    writing: { prompt: '按 SVO 语序写一句你的日常。', template: 'I ___ every day.', sample: 'I read books every day.', keyWords: ['read', 'books'] },
    scramble: [
      { id: 's8-1', words: ['I', 'study', 'English', 'at', 'home'], translation: '我在家学英语。' },
      { id: 's8-2', words: ['I', 'always', 'get', 'up', 'early'], translation: '我总是早起。' },
    ],
    match: [
      { id: 'm8-1', cue: '总是', options: ['usually', 'always', 'never', 'sometimes'], answer: 1, explain: 'always = 总是' },
      { id: 'm8-2', cue: '在家', options: ['at school', 'at home', 'at work', 'at night'], answer: 1, explain: 'at home = 在家' },
    ],
  },

  // ---------------- Day 9 ----------------
  {
    day: 9,
    phaseId: 'p0',
    level: 1,
    title: 'Yes/No Questions · 一般疑问句',
    vocab: [],
    grammar: {
      title: '一般疑问句(用 Yes / No 回答)',
      body: `把 be / do 提到主语前:
- be 动词:**Are** you a student? — Yes, I am. / No, I am not.
- 实义动词:用 **Do / Does**。
  - **Do** you like tea? — Yes, I do. / No, I don't.
  - **Does** she like tea?(第三人称单数用 does)

简答:**Yes/No + 主语 + do/don't(does/doesn't)。**`,
      questions: [
        { id: 'g9-1', type: 'single', stem: '___ you like apples?', options: ['A) Are', 'B) Do', 'C) Is'], answer: 1, explain: '**B) Do**。实义动词 like 用 Do 提问。' },
        { id: 'g9-2', type: 'single', stem: '___ she a teacher?', options: ['A) Do', 'B) Does', 'C) Is'], answer: 2, explain: '**C) Is**。be 动词句用 is 提问。' },
        { id: 'g9-3', type: 'blank', stem: 'Does he like tea? — Yes, he ___.', answer: 'does', explain: '用 does 提问,简答仍用 does。' },
      ],
    },
    reading: {
      title: 'A New Classmate',
      text: `This is Lily. Is she a new student? Yes, she is. Does she like sports? No, she doesn't. She likes music. She can play the piano. We are happy to meet her.`,
      questions: [
        { id: 'r9-1', type: 'single', stem: 'Does Lily like sports?', options: ['A) Yes', 'B) No'], answer: 1, explain: '**B**。"No, she doesn\'t"。' },
        { id: 'r9-2', type: 'judge', stem: '判断:She likes music.', options: ['正确', '错误'], answer: 0, explain: '**正确**。"She likes music"。' },
      ],
    },
    translation: [
      { en: 'Do you like tea?', zh: '你喜欢茶吗?' },
      { en: 'Is she a teacher?', zh: '她是老师吗?' },
      { en: 'Yes, she does.', zh: '是的,她喜欢。' },
    ],
    writing: { prompt: '向同学提一个一般疑问句并写出简答。', template: 'Do you ___? — Yes, I ___.', sample: 'Do you like music? — Yes, I do.', keyWords: ['music'] },
    scramble: [
      { id: 's9-1', words: ['Do', 'you', 'like', 'tea'], translation: '你喜欢茶吗?' },
      { id: 's9-2', words: ['Is', 'she', 'a', 'teacher'], translation: '她是老师吗?' },
    ],
    match: [
      { id: 'm9-1', cue: '用于提问"喜欢…吗"(你)', options: ['Are you', 'Do you', 'Is you', 'Does you'], answer: 1, explain: 'Do you like…?' },
      { id: 'm9-2', cue: '否定的简答(她)', options: ['No, she do', 'No, she don\'t', 'No, she doesn\'t', 'No, she not'], answer: 2, explain: '第三人称单数否定简答用 doesn\'t' },
    ],
  },

  // ---------------- Day 10 ----------------
  {
    day: 10,
    phaseId: 'p0',
    level: 1,
    title: 'Wh- Words · 特殊疑问句',
    vocab: [],
    grammar: {
      title: '特殊疑问词:what / where / who / when',
      body: `问"什么 / 哪里 / 谁 / 何时":
- **What** is your name? — My name is Tom.(什么)
- **Where** do you live? — I live in Beijing.(哪里)
- **Who** is she? — She is my sister.(谁)
- **When** do you get up? — At seven.(何时)

结构:**疑问词 + 一般疑问句语序**。回答不能用 Yes/No。`,
      questions: [
        { id: 'g10-1', type: 'single', stem: '___ do you live?', options: ['A) What', 'B) Where', 'C) Who'], answer: 1, explain: '**B) Where**。问地点。' },
        { id: 'g10-2', type: 'single', stem: '___ is your name?', options: ['A) What', 'B) Where', 'C) When'], answer: 0, explain: '**A) What**。问"什么"。' },
        { id: 'g10-3', type: 'blank', stem: '___ is she? — She is my sister.(谁)', answer: 'Who', explain: '问人用 Who。' },
      ],
    },
    reading: {
      title: 'Meeting a Friend',
      text: `Hi! What is your name? My name is Anna. Where are you from? I am from Shanghai. Who is that boy? He is my brother. When do you go home? At five.`,
      questions: [
        { id: 'r10-1', type: 'single', stem: 'Where is Anna from?', options: ['A) Beijing', 'B) Shanghai', 'C) Five'], answer: 1, explain: '**B**。"I am from Shanghai"。' },
        { id: 'r10-2', type: 'judge', stem: '判断:That boy is her brother.', options: ['正确', '错误'], answer: 0, explain: '**正确**。"He is my brother"。' },
      ],
    },
    translation: [
      { en: 'What is your name?', zh: '你叫什么名字?' },
      { en: 'Where do you live?', zh: '你住在哪里?' },
      { en: 'When do you go home?', zh: '你什么时候回家?' },
    ],
    writing: { prompt: '用疑问词写一个问题并回答。', template: 'Where do you ___? — I ___.', sample: 'Where do you live? — I live in Beijing.', keyWords: ['live'] },
    scramble: [
      { id: 's10-1', words: ['What', 'is', 'your', 'name'], translation: '你叫什么名字?' },
      { id: 's10-2', words: ['Where', 'do', 'you', 'live'], translation: '你住在哪里?' },
    ],
    match: [
      { id: 'm10-1', cue: '问地点', options: ['What', 'Where', 'Who', 'When'], answer: 1, explain: 'Where = 哪里' },
      { id: 'm10-2', cue: '问时间', options: ['What', 'Where', 'Who', 'When'], answer: 3, explain: 'When = 何时' },
    ],
  },

  // ---------------- Day 11 ----------------
  {
    day: 11,
    phaseId: 'p0',
    level: 1,
    title: 'There Be · there is / are',
    vocab: [],
    grammar: {
      title: 'there is / there are:表示"有"',
      body: `表示"某地存在某物":
- 单数:**There is** a book on the desk.
- 复数:**There are** two books on the desk.

**就近原则**:看紧跟的第一个名词:
- There **is** a pen and two books.(紧跟 pen 单数 → is)
- There **are** two books and a pen.(紧跟 books 复数 → are)`,
      questions: [
        { id: 'g11-1', type: 'single', stem: 'There ___ a cat in the room.', options: ['A) is', 'B) are'], answer: 0, explain: '**A) is**。a cat 单数。' },
        { id: 'g11-2', type: 'single', stem: 'There ___ many students here.', options: ['A) is', 'B) are'], answer: 1, explain: '**B) are**。students 复数。' },
        { id: 'g11-3', type: 'blank', stem: 'There ___ a pen and two books on the desk.(be 动词)', answer: 'is', explain: '就近原则,紧跟 a pen → is。' },
      ],
    },
    reading: {
      title: 'My Classroom',
      text: `Look at my classroom. There is a big blackboard on the wall. There are many desks and chairs. There is a computer, too. There are some flowers near the window. I like my classroom.`,
      questions: [
        { id: 'r11-1', type: 'single', stem: 'What is on the wall?', options: ['A) A computer', 'B) A blackboard', 'C) Flowers'], answer: 1, explain: '**B**。"a big blackboard on the wall"。' },
        { id: 'r11-2', type: 'judge', stem: '判断:There are flowers near the window.', options: ['正确', '错误'], answer: 0, explain: '**正确**。原文如此。' },
      ],
    },
    translation: [
      { en: 'There is a book on the desk.', zh: '桌上有本书。' },
      { en: 'There are many students here.', zh: '这里有很多学生。' },
      { en: 'There is a computer, too.', zh: '也有一台电脑。' },
    ],
    writing: { prompt: '用 there is/are 描述你房间里的两样东西。', template: 'There is a ___. There are some ___.', sample: 'There is a desk. There are some books.', keyWords: ['desk', 'books'] },
    scramble: [
      { id: 's11-1', words: ['There', 'is', 'a', 'book', 'on', 'the', 'desk'], translation: '桌上有本书。' },
      { id: 's11-2', words: ['There', 'are', 'many', 'students', 'here'], translation: '这里有很多学生。' },
    ],
    match: [
      { id: 'm11-1', cue: '单数"有"', options: ['There is', 'There are', 'It is', 'They are'], answer: 0, explain: 'There is + 单数' },
      { id: 'm11-2', cue: '复数"有"', options: ['There is', 'There are', 'Is there', 'Are there'], answer: 1, explain: 'There are + 复数' },
    ],
  },

  // ---------------- Day 12 ----------------
  {
    day: 12,
    phaseId: 'p0',
    level: 1,
    title: 'Present Continuous · 现在进行时',
    vocab: [],
    grammar: {
      title: '现在进行时:be + doing',
      body: `表示**此时此刻**正在做的事:
- 结构:**主语 + be + 动词-ing**
- I **am reading**. She **is running**. They **are playing**.

-ing 变化:
- 一般加 ing:read → read**ing**
- 不发音 e 去 e:write → writ**ing**
- 重读闭音节双写尾字母:run → ru**nn**ing,sit → si**tt**ing`,
      questions: [
        { id: 'g12-1', type: 'single', stem: 'She ___ now.', options: ['A) is running', 'B) runs', 'C) run'], answer: 0, explain: '**A) is running**。now 提示进行时。' },
        { id: 'g12-2', type: 'single', stem: 'They ___ football.', options: ['A) is playing', 'B) are playing', 'C) are play'], answer: 1, explain: '**B) are playing**。they 复数 + are + doing。' },
        { id: 'g12-3', type: 'blank', stem: 'I am ___ a book.(read 的 -ing)', answer: 'reading', explain: 'read → reading。' },
      ],
    },
    reading: {
      title: 'A Busy Morning',
      text: `It is a busy morning. Mom is cooking in the kitchen. Dad is reading a newspaper. My sister is doing her homework. I am writing an email. The dog is sleeping on the floor. Everyone is busy.`,
      questions: [
        { id: 'r12-1', type: 'single', stem: 'What is Mom doing?', options: ['A) Cooking', 'B) Reading', 'C) Sleeping'], answer: 0, explain: '**A**。"Mom is cooking"。' },
        { id: 'r12-2', type: 'judge', stem: '判断:The dog is sleeping.', options: ['正确', '错误'], answer: 0, explain: '**正确**。"The dog is sleeping"。' },
      ],
    },
    translation: [
      { en: 'She is running now.', zh: '她正在跑步。' },
      { en: 'I am writing an email.', zh: '我正在写邮件。' },
      { en: 'They are playing football.', zh: '他们正在踢足球。' },
    ],
    writing: { prompt: '写一句家人此刻正在做的事。', template: 'My ___ is ___ing now.', sample: 'My mom is cooking now.', keyWords: ['cooking'] },
    scramble: [
      { id: 's12-1', words: ['She', 'is', 'running', 'now'], translation: '她正在跑步。' },
      { id: 's12-2', words: ['I', 'am', 'writing', 'an', 'email'], translation: '我正在写邮件。' },
    ],
    match: [
      { id: 'm12-1', cue: '正在读', options: ['read', 'reading', 'reads', 'to read'], answer: 1, explain: '进行时用 -ing' },
      { id: 'm12-2', cue: '正在跑(run 的 -ing)', options: ['runing', 'running', 'runnning', 'run'], answer: 1, explain: '双写 n → running' },
    ],
  },

  // ---------------- Day 13 ----------------
  {
    day: 13,
    phaseId: 'p0',
    level: 1,
    title: 'Imperatives · 祈使句与常用动词',
    vocab: [],
    grammar: {
      title: '祈使句:come / go / look / listen',
      body: `祈使句表示请求、命令、邀请,**省略主语 you**,动词原形开头:
- **Come** here! 过来!
- **Go** home. 回家。
- **Look** at the board. 看黑板。
- **Listen** to me. 听我说。

否定在句首加 **Don\'t**:**Don\'t** run in the hall.`,
      questions: [
        { id: 'g13-1', type: 'single', stem: '___ the door, please.', options: ['A) Open', 'B) Opens', 'C) Opening'], answer: 0, explain: '**A) Open**。祈使句用动词原形。' },
        { id: 'g13-2', type: 'single', stem: '___ run in the hall.', options: ['A) Not', 'B) Don\'t', 'C) Doesn\'t'], answer: 1, explain: '**B) Don\'t**。否定祈使句。' },
        { id: 'g13-3', type: 'blank', stem: '___ at the board.(看)', answer: 'Look', explain: 'look at = 看。' },
      ],
    },
    reading: {
      title: 'In Class',
      text: `Good morning, class! Please open your books. Look at page ten. Listen to me carefully. Don't talk to each other. Let's read the story together. Now, answer my questions.`,
      questions: [
        { id: 'r13-1', type: 'single', stem: 'What should students open?', options: ['A) The door', 'B) Their books', 'C) The window'], answer: 1, explain: '**B**。"open your books"。' },
        { id: 'r13-2', type: 'judge', stem: '判断:Students should talk to each other.', options: ['正确', '错误'], answer: 1, explain: '**错误**。"Don\'t talk to each other"。' },
      ],
    },
    translation: [
      { en: 'Open the door, please.', zh: '请开门。' },
      { en: 'Look at the board.', zh: '看黑板。' },
      { en: "Don't run here.", zh: '别在这里跑。' },
    ],
    writing: { prompt: '写一个礼貌的祈使句(用 please)。', template: '___, please.', sample: 'Open the window, please.', keyWords: ['open'] },
    scramble: [
      { id: 's13-1', words: ['Open', 'the', 'door', 'please'], translation: '请开门。' },
      { id: 's13-2', words: ['Look', 'at', 'the', 'board'], translation: '看黑板。' },
    ],
    match: [
      { id: 'm13-1', cue: '看(指令)', options: ['See', 'Look', 'Watch', 'Look at'], answer: 3, explain: 'look at + 宾语 = 看' },
      { id: 'm13-2', cue: '否定祈使', options: ['Not open', "Don't open", 'Doesn\'t open', 'No open'], answer: 1, explain: "Don't + 动词原形" },
    ],
  },

  // ---------------- Day 14 ----------------
  {
    day: 14,
    phaseId: 'p0',
    level: 1,
    title: 'Phase Review · 启蒙阶段复习',
    vocab: [],
    grammar: {
      title: '阶段复习:把地基连起来',
      body: `两周启蒙,你已掌握:
- **be 动词**(am/is/are)+ **人称/物主/指示代词**
- **a/an/the** + **名词单复数**
- **主谓宾语序** + **一般/特殊疑问句**
- **there is/are** + **现在进行时(be+doing)** + **祈使句**

下一步(基础语法阶段)将进入:一般现在时三单变化、介词、there be 拓展。坚持每天 15 分钟,地基会越打越牢。`,
      questions: [
        { id: 'g14-1', type: 'single', stem: 'She ___ a book now.', options: ['A) reads', 'B) is reading', 'C) read'], answer: 1, explain: '**B) is reading**。now 提示进行时。' },
        { id: 'g14-2', type: 'single', stem: 'There ___ two cats under the tree.', options: ['A) is', 'B) are'], answer: 1, explain: '**B) are**。two cats 复数。' },
        { id: 'g14-3', type: 'blank', stem: '___ is your name?(什么)', answer: 'What', explain: '问"什么"用 What。' },
      ],
    },
    reading: {
      title: 'A Letter to a Friend',
      text: `Dear Mary, how are you? I am fine. I am learning English now. It is fun. There are many new words. My teacher is kind. She is helping me. What are you doing these days? Write to me soon. Yours, Tom.`,
      questions: [
        { id: 'r14-1', type: 'single', stem: 'What is Tom doing now?', options: ['A) Learning English', 'B) Sleeping', 'C) Cooking'], answer: 0, explain: '**A**。"I am learning English now"。' },
        { id: 'r14-2', type: 'judge', stem: '判断:His teacher is kind.', options: ['正确', '错误'], answer: 0, explain: '**正确**。"My teacher is kind"。' },
      ],
    },
    translation: [
      { en: 'I am learning English now.', zh: '我正在学英语。' },
      { en: 'There are many new words.', zh: '有很多新单词。' },
      { en: 'She is helping me.', zh: '她正在帮我。' },
    ],
    writing: { prompt: '写两句话总结:我在学什么 + 老师怎样。', template: 'I am ___. My teacher is ___.', sample: 'I am learning English. My teacher is kind.', keyWords: ['learning', 'kind'] },
    scramble: [
      { id: 's14-1', words: ['I', 'am', 'learning', 'English', 'now'], translation: '我正在学英语。' },
      { id: 's14-2', words: ['There', 'are', 'many', 'new', 'words'], translation: '有很多新单词。' },
    ],
    match: [
      { id: 'm14-1', cue: '正在学', options: ['learn', 'learning', 'learns', 'learned'], answer: 1, explain: '进行时 -ing' },
      { id: 'm14-2', cue: '和蔼的', options: ['kind', 'new', 'busy', 'small'], answer: 0, explain: 'kind = 和蔼的' },
    ],
  },
]
