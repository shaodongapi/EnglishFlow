import type { GrammarLesson } from '../types'

export const GRAMMAR_EXTRA: GrammarLesson[] = [
  {
    "title": "情态动词 (Modal Verbs)",
    "body": "学位英语高频考点。掌握\"推测、义务、需要\"三类用法及**情态动词 + have done** 结构。\n\n- **表肯定推测**（按把握程度递增）：might < may < could < can < should < ought to < must\n  - He **must be** at home. (一定是) / He **might be** ill. (也许是)\n- **表否定推测**：can't / couldn't（不可能）> may not / might not（可能不）\n  - It **can't be** true. (不可能是真的)\n- **must 与 have to**：must 为主观\"必须\"，have to 为客观\"不得不\"；must 无过去式/将来式，需借 had to / will have to\n- **should / ought to** 表\"应当\"，ought to + 动词原形\n- **need / dare**：既可作情态动词（多用于否定、疑问），也可作实义动词（need to do / dare to do）\n- **情态动词 + have done**（对过去的推测/评价，必考）：\n  - **must have done**：过去一定做了（肯定推测）\n  - **can't / couldn't have done**：过去不可能做了\n  - **should / ought to have done**：本该做却没做（责备）\n  - **needn't have done**：本不必做却做了\n  - **may / might have done**：过去也许做了",
    "questions": [
      {
        "id": "ge1-1",
        "type": "single",
        "stem": "— The ground is wet. \n— It ____ heavily last night.",
        "options": [
          "A) must rain",
          "B) must have rained",
          "C) could rain",
          "D) should rain"
        ],
        "answer": 1,
        "explain": "对过去的推测用 **must have done**（昨晚一定下了大雨）。地面湿是现在的事实，推断的是过去已发生的动作，选 B。"
      },
      {
        "id": "ge1-2",
        "type": "single",
        "stem": "You ____ all those calculations by hand; the computer could have done it for you.",
        "options": [
          "A) needn't have done",
          "B) shouldn't do",
          "C) must not do",
          "D) could not do"
        ],
        "answer": 0,
        "explain": "**needn't have done** 表示\"本不必做却做了\"。题干已做（have done），且强调不必要，选 A。"
      },
      {
        "id": "ge1-3",
        "type": "judge",
        "stem": "He mustn't have seen the film yesterday.（他昨天不可能看过这部电影。）",
        "options": [
          "正确",
          "错误"
        ],
        "answer": 1,
        "explain": "表示\"过去不可能\"应用 **can't / couldn't have done**，不能用 mustn't have done（mustn't 表\"禁止\"，不表推测）。正确说法：He **can't have seen** the film yesterday。故错误。"
      }
    ]
  },
  {
    "title": "反意疑问句 (Tag Question)",
    "body": "反意疑问句遵循\"**前肯后否、前否后肯**\"的基本原则，但需注意若干特殊情形。\n\n- **基本规则**：He is a teacher, **isn't he**? / She doesn't like tea, **does she**?\n- **含否定词 hardly, never, seldom, few, little, nobody, nothing** 时，视为否定句，后用**肯定**：\n  - He has **never** been to Beijing, **has he**?\n  - There is **little** water left, **is there**?\n- **祈使句**：反意部分用 will you / won't you（否定祈使用 will you）\n  - **Close** the door, **will you**? / Don't be late, **will you**?\n- **Let's ...** 用 shall we；**Let us / Let me ...** 用 will you：\n  - **Let's go**, **shall we**? / **Let me have a try**, **will you**?\n- **主语**：everything/anything/nothing 用 it；everyone/someone/nobody 复指用 they\n  - Everything goes well, **doesn't it**?\n- **含 think/believe/suppose + 宾语从句**时，反意部分与**从句**一致（注意否定转移）：I don't think he is right, **is he**?",
    "questions": [
      {
        "id": "ge2-1",
        "type": "single",
        "stem": "He seldom goes to the cinema, ____?",
        "options": [
          "A) doesn't he",
          "B) does he",
          "C) hasn't he",
          "D) isn't he"
        ],
        "answer": 1,
        "explain": "seldom 是否定词，前部分视为否定，反意部分用**肯定** does he，选 B。"
      },
      {
        "id": "ge2-2",
        "type": "single",
        "stem": "Let's go out for a walk after supper, ____?",
        "options": [
          "A) will you",
          "B) don't we",
          "C) shall we",
          "D) won't you"
        ],
        "answer": 2,
        "explain": "**Let's ...** 的反意疑问句用 **shall we**，选 C。注意区分 Let us / Let me（用 will you）。"
      },
      {
        "id": "ge2-3",
        "type": "blank",
        "stem": "There is nobody in the classroom, ____ ____ ?（补全反意疑问部分）",
        "answer": "is there",
        "explain": "nobody 表否定，前部分为否定，反意部分用肯定；There be 句型的反意部分保留 there，即 **is there**。"
      }
    ]
  },
  {
    "title": "强调句与强调形式 (Emphatic Patterns)",
    "body": "强调句型与谓语强调是学位英语必考点。\n\n- **It is / was + 被强调部分 + that / who + 其他**：\n  - I met him in the park yesterday.\n  - → **It was** I **that / who** met him in the park yesterday.（强调主语）\n  - → **It was** in the park **that** I met him yesterday.（强调地点状语）\n- **判断强调句的技巧**：去掉 It is/was ... that 后，句子仍然完整通顺。\n- **强调谓语**：在谓语动词前加 do / does / did（用于肯定句），时态与原句一致：\n  - I **do hope** you will come.（我确实希望你都能来）\n  - He **does like** English.\n  - She **did come** yesterday.\n- **强调疑问词**：疑问词 + on earth / in the world / ever：What **on earth** are you doing?",
    "questions": [
      {
        "id": "ge3-1",
        "type": "single",
        "stem": "It was in 1949 ____ the People's Republic of China was founded.",
        "options": [
          "A) that",
          "B) when",
          "C) which",
          "D) in which"
        ],
        "answer": 0,
        "explain": "强调时间状语 in 1949，用 **It was ... that ...** 结构，选 A。去掉框架后句子仍完整，可判定为强调句。"
      },
      {
        "id": "ge3-2",
        "type": "single",
        "stem": "It was because he was ill ____ he didn't come to the meeting.",
        "options": [
          "A) so",
          "B) that",
          "C) why",
          "D) which"
        ],
        "answer": 1,
        "explain": "强调原因状语从句，用 **that**。注意：强调原因状语从句时只能用 that，不能用 because，选 B。"
      },
      {
        "id": "ge3-3",
        "type": "blank",
        "stem": "He ____ (确实完成了) his homework before dinner yesterday.",
        "answer": "did finish",
        "explain": "强调过去时谓语动词用 **did + 动词原形**，故为 did finish。"
      }
    ]
  },
  {
    "title": "There be 句型扩展 (There be Extended)",
    "body": "There be 句型在学位英语中常以**主谓一致**与**非谓语形式**形式出现。\n\n- **就近原则**：be 动词与**最近的主语**一致：\n  - There **is** a pen and two books on the desk.\n  - There **are** two books and a pen on the desk.\n- **时态变化**：There was/were; There will be; There has been / have been; There is going to be\n- **非谓语形式**：\n  - **There being**（动名词/分词形式，作主语、状语）：**There being** no bus, we had to walk home.\n  - **There to be**（不定式形式，常接在 for / want / expect 后）：We don't want **there to be** any misunderstanding.\n- **反意疑问句**：There is a book on the desk, **isn't there**?\n- **避免错误**：There be 句型中不能再用 have（\"有\"）",
    "questions": [
      {
        "id": "ge4-1",
        "type": "single",
        "stem": "There ____ a dictionary and several notebooks on the shelf.",
        "options": [
          "A) is",
          "B) are",
          "C) have",
          "D) has"
        ],
        "answer": 0,
        "explain": "There be 句型遵循**就近原则**，be 动词与最近的主语 a dictionary 一致，用 **is**，选 A。注意不能用 have/has。"
      },
      {
        "id": "ge4-2",
        "type": "single",
        "stem": "____ no time left, we had to give up the plan.",
        "options": [
          "A) There being",
          "B) There to be",
          "C) There is",
          "D) There was"
        ],
        "answer": 0,
        "explain": "作原因状语且为独立主格结构，用 **There being**（分词形式），选 A。句意：由于没有时间了，我们不得不放弃这个计划。"
      },
      {
        "id": "ge4-3",
        "type": "blank",
        "stem": "We expect there ____ ____ (将有) a meeting tomorrow.",
        "answer": "to be",
        "explain": "expect 后接 there to be（不定式形式），表示\"期望会有\"。故填 **to be**。"
      }
    ]
  },
  {
    "title": "冠词易错与习语中的冠词 (Articles & Idioms)",
    "body": "抽象名词与物质名词**具体化**，以及固定搭配中的冠词有无，是高频失分点。\n\n- **抽象/物质名词具体化**：表示\"一种/一场/一顿\"时加 a/an\n  - **a** heavy rain（一场大雨）/ **a** good breakfast（一顿丰盛的早餐）\n  - have **a** good time / have **a** cold / have **a** rest\n  - The meeting was **a** great success.（一场/一次成功）\n- **抽象名词表一般概念不加冠词**：Knowledge is power. / Life is short.\n- **固定搭配中的冠词有无**：\n  - **不加冠词**：at school / at home / in bed / by bus / by car / on foot / at night / in town / day by day / hand in hand / side by side\n  - **必须加 the**：in the morning / in the end / by the way / on the other hand / the same ... as / tell the truth / at the same time\n  - **加 a/an**：have a word with / make a face / in a hurry / once upon a time / all of a sudden\n- **三歺前一般不加冠词**：have breakfast；但**有定语修饰**时加 a：have **a** quick breakfast",
    "questions": [
      {
        "id": "ge5-1",
        "type": "single",
        "stem": "She usually has ____ breakfast at seven, but yesterday she had ____ big breakfast.",
        "options": [
          "A) /; a",
          "B) a; a",
          "C) the; a",
          "D) /; the"
        ],
        "answer": 0,
        "explain": "三歺前一般不加冠词；但**有形容词修饰、表示\"一顿\"**时加 a/an。故前一空不填，后一空填 a，选 A。"
      },
      {
        "id": "ge5-2",
        "type": "single",
        "stem": "He goes to work ____ bus every day and his wife goes ____ on foot.",
        "options": [
          "A) by; /",
          "B) on; on",
          "C) by; by",
          "D) in; in"
        ],
        "answer": 0,
        "explain": "by bus（乘坐公交，不加冠词）；on foot（步行）是固定搭配，不加冠词。故选 A：前 by，后不填。"
      },
      {
        "id": "ge5-3",
        "type": "judge",
        "stem": "All of sudden, the lights went out.（突然，灯灭了。）",
        "options": [
          "正确",
          "错误"
        ],
        "answer": 1,
        "explain": "固定搭配 **all of a sudden**（突然）必须加不定冠词 a。正确写法：All of **a** sudden。故错误。"
      }
    ]
  }
]
