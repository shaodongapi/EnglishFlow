import type { ErrorIDItem } from '../types'

export const ERROR_ID_C: Record<number, ErrorIDItem[]> = {
  31: [
    {
      "id": "e31-1",
      "sentence": "Hardly had I reached the station than the train pulled out.",
      "segments": [
        {
          "key": "A",
          "text": "Hardly had I reached"
        },
        {
          "key": "B",
          "text": "the station"
        },
        {
          "key": "C",
          "text": "than"
        },
        {
          "key": "D",
          "text": "the train pulled out"
        }
      ],
      "answer": "C",
      "correction": "than → when",
      "explain": "**C** 错。固定句型 hardly...when...(刚…就…),不能用 than。正确:**when**。"
    },
    {
      "id": "e31-2",
      "sentence": "The number of students who have passed the exam are surprising.",
      "segments": [
        {
          "key": "A",
          "text": "The number of students"
        },
        {
          "key": "B",
          "text": "who have passed"
        },
        {
          "key": "C",
          "text": "the exam"
        },
        {
          "key": "D",
          "text": "are surprising"
        }
      ],
      "answer": "D",
      "correction": "are → is",
      "explain": "**D** 错。the number of + 复数名词作主语,中心词是 number,谓语用单数。正确:**is surprising**。"
    },
    {
      "id": "e31-3",
      "sentence": "Not only he likes English, but also he does well in it.",
      "segments": [
        {
          "key": "A",
          "text": "Not only"
        },
        {
          "key": "B",
          "text": "he likes English"
        },
        {
          "key": "C",
          "text": "but also"
        },
        {
          "key": "D",
          "text": "he does well in it"
        }
      ],
      "answer": "B",
      "correction": "he likes → does he like",
      "explain": "**B** 错。not only 置于句首时,其后的主谓需部分倒装。正确:**does he like English**。"
    },
    {
      "id": "e31-4",
      "sentence": "She suggested that he went to see a doctor at once.",
      "segments": [
        {
          "key": "A",
          "text": "She suggested"
        },
        {
          "key": "B",
          "text": "that he went"
        },
        {
          "key": "C",
          "text": "to see a doctor"
        },
        {
          "key": "D",
          "text": "at once"
        }
      ],
      "answer": "B",
      "correction": "went → (should) go",
      "explain": "**B** 错。suggest 建议,其后宾语从句用虚拟语气 (should)+动词原形。正确:**go**(或 should go)。"
    }
  ],
  32: [
    {
      "id": "e32-1",
      "sentence": "Each of the boys have been given a new schoolbag.",
      "segments": [
        {
          "key": "A",
          "text": "Each of the boys"
        },
        {
          "key": "B",
          "text": "have been given"
        },
        {
          "key": "C",
          "text": "a new"
        },
        {
          "key": "D",
          "text": "schoolbag"
        }
      ],
      "answer": "B",
      "correction": "have → has",
      "explain": "**B** 错。each of + 复数名词作主语,谓语用单数。正确:**has been given**。"
    },
    {
      "id": "e32-2",
      "sentence": "We are all looking forward to hear from you as soon as possible.",
      "segments": [
        {
          "key": "A",
          "text": "We are all looking forward"
        },
        {
          "key": "B",
          "text": "to hear from you"
        },
        {
          "key": "C",
          "text": "as soon as possible"
        },
        {
          "key": "D",
          "text": "(end)"
        }
      ],
      "answer": "B",
      "correction": "to hear → to hearing",
      "explain": "**B** 错。look forward to 中 to 为介词,后接动名词。正确:**to hearing**。"
    },
    {
      "id": "e32-3",
      "sentence": "The teacher, as well as his students, were invited to the party.",
      "segments": [
        {
          "key": "A",
          "text": "The teacher,"
        },
        {
          "key": "B",
          "text": "as well as his students,"
        },
        {
          "key": "C",
          "text": "were invited"
        },
        {
          "key": "D",
          "text": "to the party"
        }
      ],
      "answer": "C",
      "correction": "were → was",
      "explain": "**C** 错。主语后跟 as well as 时,谓语与前面主语保持一致,teacher 为单数。正确:**was invited**。"
    },
    {
      "id": "e32-4",
      "sentence": "If I was you, I would accept the offer immediately.",
      "segments": [
        {
          "key": "A",
          "text": "If I was you,"
        },
        {
          "key": "B",
          "text": "I would accept"
        },
        {
          "key": "C",
          "text": "the offer"
        },
        {
          "key": "D",
          "text": "immediately"
        }
      ],
      "answer": "A",
      "correction": "was → were",
      "explain": "**A** 错。与现在事实相反的虚拟条件句,be 动词一律用 were。正确:**If I were you**。"
    }
  ],
  33: [
    {
      "id": "e33-1",
      "sentence": "By the time he arrived, the meeting had begun for ten minutes.",
      "segments": [
        {
          "key": "A",
          "text": "By the time he arrived,"
        },
        {
          "key": "B",
          "text": "the meeting had begun"
        },
        {
          "key": "C",
          "text": "for ten minutes"
        },
        {
          "key": "D",
          "text": "(end)"
        }
      ],
      "answer": "B",
      "correction": "had begun → had been on",
      "explain": "**B** 错。begin 是瞬间动词,不能与 for ten minutes 这一时段连用,需换成持续性状态表达。正确:**had been on**。"
    },
    {
      "id": "e33-2",
      "sentence": "Neither he nor his brothers was willing to give up the chance.",
      "segments": [
        {
          "key": "A",
          "text": "Neither he nor"
        },
        {
          "key": "B",
          "text": "his brothers"
        },
        {
          "key": "C",
          "text": "was willing"
        },
        {
          "key": "D",
          "text": "to give up the chance"
        }
      ],
      "answer": "C",
      "correction": "was → were",
      "explain": "**C** 错。neither...nor... 谓语遵循就近原则,brothers 为复数。正确:**were willing**。"
    },
    {
      "id": "e33-3",
      "sentence": "The old man needs being looked after carefully.",
      "segments": [
        {
          "key": "A",
          "text": "The old man"
        },
        {
          "key": "B",
          "text": "needs being looked after"
        },
        {
          "key": "C",
          "text": "carefully"
        },
        {
          "key": "D",
          "text": "(end)"
        }
      ],
      "answer": "B",
      "correction": "being looked after → to be looked after / looking after",
      "explain": "**B** 错。need 表被动意义时,用 need to be done 或 need doing,不用 need being done。正确:**to be looked after**。"
    },
    {
      "id": "e33-4",
      "sentence": "It is high time we go home and have a rest.",
      "segments": [
        {
          "key": "A",
          "text": "It is high time"
        },
        {
          "key": "B",
          "text": "we go home"
        },
        {
          "key": "C",
          "text": "and have a rest"
        },
        {
          "key": "D",
          "text": "(end)"
        }
      ],
      "answer": "B",
      "correction": "go → went",
      "explain": "**B** 错。It is high time that... 从句用虚拟语气,动词用过去式。正确:**we went home**。"
    }
  ],
  34: [
    {
      "id": "e34-1",
      "sentence": "There are a book and two pens on the desk.",
      "segments": [
        {
          "key": "A",
          "text": "There are"
        },
        {
          "key": "B",
          "text": "a book and two pens"
        },
        {
          "key": "C",
          "text": "on the desk"
        },
        {
          "key": "D",
          "text": "(end)"
        }
      ],
      "answer": "A",
      "correction": "are → is",
      "explain": "**A** 错。there be 句型遵循就近原则,靠近的是 a book。正确:**There is**。"
    },
    {
      "id": "e34-2",
      "sentence": "I will never forget to meet him for the first time in 1998.",
      "segments": [
        {
          "key": "A",
          "text": "I will never forget"
        },
        {
          "key": "B",
          "text": "to meet him"
        },
        {
          "key": "C",
          "text": "for the first time"
        },
        {
          "key": "D",
          "text": "in 1998"
        }
      ],
      "answer": "B",
      "correction": "to meet → meeting",
      "explain": "**B** 错。forget to do 忘记去做;forget doing 忘记做过。已发生的事用动名词。正确:**meeting him**。"
    },
    {
      "id": "e34-3",
      "sentence": "The reason why he was late is because he missed the early bus.",
      "segments": [
        {
          "key": "A",
          "text": "The reason why he was late"
        },
        {
          "key": "B",
          "text": "is because"
        },
        {
          "key": "C",
          "text": "he missed"
        },
        {
          "key": "D",
          "text": "the early bus"
        }
      ],
      "answer": "B",
      "correction": "because → that",
      "explain": "**B** 错。The reason is... 后用 that 引导表语从句,不用 because。正确:**is that**。"
    },
    {
      "id": "e34-4",
      "sentence": "Comparing with other cities, Beijing has a long history.",
      "segments": [
        {
          "key": "A",
          "text": "Comparing with other cities,"
        },
        {
          "key": "B",
          "text": "Beijing"
        },
        {
          "key": "C",
          "text": "has a long history"
        },
        {
          "key": "D",
          "text": "(end)"
        }
      ],
      "answer": "A",
      "correction": "Comparing → Compared",
      "explain": "**A** 错。Beijing 与 compare 之间是被动关系,用过去分词。正确:**Compared with**。"
    }
  ],
  35: [
    {
      "id": "e35-1",
      "sentence": "The population of China is much larger than those of Japan.",
      "segments": [
        {
          "key": "A",
          "text": "The population of China"
        },
        {
          "key": "B",
          "text": "is much larger than"
        },
        {
          "key": "C",
          "text": "those of"
        },
        {
          "key": "D",
          "text": "Japan"
        }
      ],
      "answer": "C",
      "correction": "those → that",
      "explain": "**C** 错。population 为不可数概念,代词应用 that 替代。正确:**that of**。"
    },
    {
      "id": "e35-2",
      "sentence": "I would rather you do not smoke in the waiting room.",
      "segments": [
        {
          "key": "A",
          "text": "I would rather"
        },
        {
          "key": "B",
          "text": "you do not smoke"
        },
        {
          "key": "C",
          "text": "in the waiting room"
        },
        {
          "key": "D",
          "text": "(end)"
        }
      ],
      "answer": "B",
      "correction": "do not smoke → did not smoke",
      "explain": "**B** 错。would rather 后接从句时用虚拟语气(过去式表现在/将来)。正确:**you did not smoke**。"
    },
    {
      "id": "e35-3",
      "sentence": "He is the only one of the students who have passed the test.",
      "segments": [
        {
          "key": "A",
          "text": "He is the only one of the students"
        },
        {
          "key": "B",
          "text": "who have passed"
        },
        {
          "key": "C",
          "text": "the test"
        },
        {
          "key": "D",
          "text": "(end)"
        }
      ],
      "answer": "B",
      "correction": "have → has",
      "explain": "**B** 错。the only one of... 定语从句谓语与 the only one 保持一致,用单数。正确:**who has passed**。"
    },
    {
      "id": "e35-4",
      "sentence": "She has married with a young engineer for three years.",
      "segments": [
        {
          "key": "A",
          "text": "She has married"
        },
        {
          "key": "B",
          "text": "with a young engineer"
        },
        {
          "key": "C",
          "text": "for three years"
        },
        {
          "key": "D",
          "text": "(end)"
        }
      ],
      "answer": "B",
      "correction": "with → (去掉) / married → been married",
      "explain": "**B** 错。marry 为及物动词,不加 with;且与 for three years 连用需用 be married 状态。正确:**has been married to**。"
    }
  ],
  36: [
    {
      "id": "e36-1",
      "sentence": "A great deal of books were published last year.",
      "segments": [
        {
          "key": "A",
          "text": "A great deal of"
        },
        {
          "key": "B",
          "text": "books"
        },
        {
          "key": "C",
          "text": "were published"
        },
        {
          "key": "D",
          "text": "last year"
        }
      ],
      "answer": "A",
      "correction": "A great deal of → A great number of / A lot of",
      "explain": "**A** 错。a great deal of 只修饰不可数名词;books 可数,应换 a great number of。正确:**A great number of**。"
    },
    {
      "id": "e36-2",
      "sentence": "The boy was made work late into the night by his boss.",
      "segments": [
        {
          "key": "A",
          "text": "The boy was made"
        },
        {
          "key": "B",
          "text": "work late"
        },
        {
          "key": "C",
          "text": "into the night"
        },
        {
          "key": "D",
          "text": "by his boss"
        }
      ],
      "answer": "B",
      "correction": "work → to work",
      "explain": "**B** 错。make sb. do 被动式为 be made to do。正确:**to work late**。"
    },
    {
      "id": "e36-3",
      "sentence": "If you will come tomorrow, I will show you around the campus.",
      "segments": [
        {
          "key": "A",
          "text": "If you will come"
        },
        {
          "key": "B",
          "text": "tomorrow,"
        },
        {
          "key": "C",
          "text": "I will show you around"
        },
        {
          "key": "D",
          "text": "the campus"
        }
      ],
      "answer": "A",
      "correction": "will come → come",
      "explain": "**A** 错。if 引导的真实条件状语从句中,主将从现,从句不用 will。正确:**If you come**。"
    },
    {
      "id": "e36-4",
      "sentence": "It was in the park where I met an old friend yesterday.",
      "segments": [
        {
          "key": "A",
          "text": "It was in the park"
        },
        {
          "key": "B",
          "text": "where"
        },
        {
          "key": "C",
          "text": "I met an old friend"
        },
        {
          "key": "D",
          "text": "yesterday"
        }
      ],
      "answer": "B",
      "correction": "where → that",
      "explain": "**B** 错。强调句型 It is/was + 被强调部分 + that...,不用 where。正确:**that**。"
    }
  ],
  37: [
    {
      "id": "e37-1",
      "sentence": "His speech was so moving that everyone in the hall was deeply moving.",
      "segments": [
        {
          "key": "A",
          "text": "His speech was so moving"
        },
        {
          "key": "B",
          "text": "that everyone"
        },
        {
          "key": "C",
          "text": "in the hall"
        },
        {
          "key": "D",
          "text": "was deeply moving"
        }
      ],
      "answer": "D",
      "correction": "moving → moved",
      "explain": "**D** 错。修饰人的感受用过去分词形容词 moved。正确:**was deeply moved**。"
    },
    {
      "id": "e37-2",
      "sentence": "The book is worth being read a second time.",
      "segments": [
        {
          "key": "A",
          "text": "The book is worth"
        },
        {
          "key": "B",
          "text": "being read"
        },
        {
          "key": "C",
          "text": "a second time"
        },
        {
          "key": "D",
          "text": "(end)"
        }
      ],
      "answer": "B",
      "correction": "being read → reading",
      "explain": "**B** 错。be worth doing 主动表被动,不用 being done。正确:**worth reading**。"
    },
    {
      "id": "e37-3",
      "sentence": "I insist that he must leaves right now.",
      "segments": [
        {
          "key": "A",
          "text": "I insist"
        },
        {
          "key": "B",
          "text": "that he must leaves"
        },
        {
          "key": "C",
          "text": "right now"
        },
        {
          "key": "D",
          "text": "(end)"
        }
      ],
      "answer": "B",
      "correction": "must leaves → (should) leave",
      "explain": "**B** 错。insist 后宾语从句用虚拟 (should)+原形;且 must 后接动词原形。正确:**should leave**(或 leave)。"
    },
    {
      "id": "e37-4",
      "sentence": "Standing on the top of the hill, the whole city can be seen clearly.",
      "segments": [
        {
          "key": "A",
          "text": "Standing on the top of the hill,"
        },
        {
          "key": "B",
          "text": "the whole city"
        },
        {
          "key": "C",
          "text": "can be seen"
        },
        {
          "key": "D",
          "text": "clearly"
        }
      ],
      "answer": "B",
      "correction": "the whole city → we",
      "explain": "**B** 错。现在分词作状语,其逻辑主语须与主句主语一致;the whole city 无法发出 stand 的动作。改主语为 we,正确:**we can see the whole city**。"
    }
  ],
  38: [
    {
      "id": "e38-1",
      "sentence": "He is a honest boy and is loved by all his classmates.",
      "segments": [
        {
          "key": "A",
          "text": "He is"
        },
        {
          "key": "B",
          "text": "a honest boy"
        },
        {
          "key": "C",
          "text": "and is loved by"
        },
        {
          "key": "D",
          "text": "all his classmates"
        }
      ],
      "answer": "B",
      "correction": "a honest → an honest",
      "explain": "**B** 错。honest 中 h 不发音,以元音音素开头,用 an。正确:**an honest boy**。"
    },
    {
      "id": "e38-2",
      "sentence": "The news on the radio are very encouraging.",
      "segments": [
        {
          "key": "A",
          "text": "The news"
        },
        {
          "key": "B",
          "text": "on the radio"
        },
        {
          "key": "C",
          "text": "are very"
        },
        {
          "key": "D",
          "text": "encouraging"
        }
      ],
      "answer": "C",
      "correction": "are → is",
      "explain": "**C** 错。news 形复义单,谓语用单数。正确:**is very encouraging**。"
    },
    {
      "id": "e38-3",
      "sentence": "I have bought this coat for five years but it still looks new.",
      "segments": [
        {
          "key": "A",
          "text": "I have bought this coat"
        },
        {
          "key": "B",
          "text": "for five years"
        },
        {
          "key": "C",
          "text": "but it still"
        },
        {
          "key": "D",
          "text": "looks new"
        }
      ],
      "answer": "A",
      "correction": "have bought → have had",
      "explain": "**A** 错。buy 为瞬间动词,不能与 for five years 连用,需换成持续性动词。正确:**have had**。"
    },
    {
      "id": "e38-4",
      "sentence": "Do you know the girl whom is talking with our teacher?",
      "segments": [
        {
          "key": "A",
          "text": "Do you know"
        },
        {
          "key": "B",
          "text": "the girl whom"
        },
        {
          "key": "C",
          "text": "is talking with"
        },
        {
          "key": "D",
          "text": "our teacher"
        }
      ],
      "answer": "B",
      "correction": "whom → who",
      "explain": "**B** 错。定语从句中关系词在从句中作主语,应用 who。正确:**who**。"
    }
  ],
  39: [
    {
      "id": "e39-1",
      "sentence": "The teacher asked us not to make noises in class.",
      "segments": [
        {
          "key": "A",
          "text": "The teacher asked us"
        },
        {
          "key": "B",
          "text": "not to make"
        },
        {
          "key": "C",
          "text": "noises"
        },
        {
          "key": "D",
          "text": "in class"
        }
      ],
      "answer": "C",
      "correction": "noises → noise",
      "explain": "**C** 错。抽象/泛指噪音用不可数 noise;若用 noises 指各种具体响声不符语境。正确:**noise**。"
    },
    {
      "id": "e39-2",
      "sentence": "She is more cleverer than any other girl in her class.",
      "segments": [
        {
          "key": "A",
          "text": "She is more cleverer"
        },
        {
          "key": "B",
          "text": "than"
        },
        {
          "key": "C",
          "text": "any other girl"
        },
        {
          "key": "D",
          "text": "in her class"
        }
      ],
      "answer": "A",
      "correction": "more cleverer → cleverer",
      "explain": "**A** 错。cleverer 已是比较级,再加 more 重复。正确:**cleverer**。"
    },
    {
      "id": "e39-3",
      "sentence": "It is necessary that he hands in his homework on time.",
      "segments": [
        {
          "key": "A",
          "text": "It is necessary"
        },
        {
          "key": "B",
          "text": "that he hands in"
        },
        {
          "key": "C",
          "text": "his homework"
        },
        {
          "key": "D",
          "text": "on time"
        }
      ],
      "answer": "B",
      "correction": "hands → (should) hand",
      "explain": "**B** 错。It is necessary that... 主语从句用虚拟 (should)+原形。正确:**hand in**。"
    },
    {
      "id": "e39-4",
      "sentence": "Having not finished his work, he had to stay up late.",
      "segments": [
        {
          "key": "A",
          "text": "Having not finished"
        },
        {
          "key": "B",
          "text": "his work,"
        },
        {
          "key": "C",
          "text": "he had to stay up"
        },
        {
          "key": "D",
          "text": "late"
        }
      ],
      "answer": "A",
      "correction": "Having not → Not having",
      "explain": "**A** 错。现在分词完成式的否定式为 Not having done。正确:**Not having finished**。"
    }
  ],
  40: [
    {
      "id": "e40-1",
      "sentence": "Most of us are interesting in pop music.",
      "segments": [
        {
          "key": "A",
          "text": "Most of us"
        },
        {
          "key": "B",
          "text": "are interesting"
        },
        {
          "key": "C",
          "text": "in pop music"
        },
        {
          "key": "D",
          "text": "(end)"
        }
      ],
      "answer": "B",
      "correction": "interesting → interested",
      "explain": "**B** 错。表示人对…感兴趣用 be interested in。正确:**are interested**。"
    },
    {
      "id": "e40-2",
      "sentence": "He suggested me to take a short break before going on.",
      "segments": [
        {
          "key": "A",
          "text": "He suggested"
        },
        {
          "key": "B",
          "text": "me to take"
        },
        {
          "key": "C",
          "text": "a short break"
        },
        {
          "key": "D",
          "text": "before going on"
        }
      ],
      "answer": "B",
      "correction": "me to take → my taking / that I take",
      "explain": "**B** 错。suggest 后不能接 sb. to do,应接动名词或从句。正确:**my taking**(或 that I take)。"
    },
    {
      "id": "e40-3",
      "sentence": "Two-thirds of the work have been finished by now.",
      "segments": [
        {
          "key": "A",
          "text": "Two-thirds of the work"
        },
        {
          "key": "B",
          "text": "have been finished"
        },
        {
          "key": "C",
          "text": "by now"
        },
        {
          "key": "D",
          "text": "(end)"
        }
      ],
      "answer": "B",
      "correction": "have → has",
      "explain": "**B** 错。分数/百分数 + 不可数名词,谓语用单数。正确:**has been finished**。"
    },
    {
      "id": "e40-4",
      "sentence": "The meeting is about to begin when he hurried into the hall.",
      "segments": [
        {
          "key": "A",
          "text": "The meeting is about to begin"
        },
        {
          "key": "B",
          "text": "when"
        },
        {
          "key": "C",
          "text": "he hurried into"
        },
        {
          "key": "D",
          "text": "the hall"
        }
      ],
      "answer": "A",
      "correction": "is → was",
      "explain": "**A** 错。主从句时态须一致,从句为过去时,主句也应为过去时。正确:**was about to begin**。"
    }
  ],
  41: [
    {
      "id": "e41-1",
      "sentence": "I prefer staying at home to go out on rainy days.",
      "segments": [
        {
          "key": "A",
          "text": "I prefer staying at home"
        },
        {
          "key": "B",
          "text": "to go out"
        },
        {
          "key": "C",
          "text": "on rainy days"
        },
        {
          "key": "D",
          "text": "(end)"
        }
      ],
      "answer": "B",
      "correction": "to go out → to going out",
      "explain": "**B** 错。prefer doing A to doing B 两边结构对称,均用动名词。正确:**to going out**。"
    },
    {
      "id": "e41-2",
      "sentence": "It was not until midnight he came back home.",
      "segments": [
        {
          "key": "A",
          "text": "It was not until midnight"
        },
        {
          "key": "B",
          "text": "he came back"
        },
        {
          "key": "C",
          "text": "home"
        },
        {
          "key": "D",
          "text": "(end)"
        }
      ],
      "answer": "B",
      "correction": "he came → that he came",
      "explain": "**B** 错。not until 强调句型后须用 that 连接主句。正确:**that he came back**。"
    },
    {
      "id": "e41-3",
      "sentence": "The boy sat at the desk, read a novel carefully.",
      "segments": [
        {
          "key": "A",
          "text": "The boy sat at the desk,"
        },
        {
          "key": "B",
          "text": "read a novel"
        },
        {
          "key": "C",
          "text": "carefully"
        },
        {
          "key": "D",
          "text": "(end)"
        }
      ],
      "answer": "B",
      "correction": "read → reading",
      "explain": "**B** 错。两个动作同时进行,伴随状语用现在分词。正确:**reading a novel**。"
    },
    {
      "id": "e41-4",
      "sentence": "He has gone to Beijing three times this year.",
      "segments": [
        {
          "key": "A",
          "text": "He has gone to Beijing"
        },
        {
          "key": "B",
          "text": "three times"
        },
        {
          "key": "C",
          "text": "this year"
        },
        {
          "key": "D",
          "text": "(end)"
        }
      ],
      "answer": "A",
      "correction": "has gone → has been",
      "explain": "**A** 错。have/has gone to 指去了未回;与次数连用表经历应用 have been to。正确:**has been to**。"
    }
  ],
  42: [
    {
      "id": "e42-1",
      "sentence": "Little they knew about what had happened outside.",
      "segments": [
        {
          "key": "A",
          "text": "Little"
        },
        {
          "key": "B",
          "text": "they knew"
        },
        {
          "key": "C",
          "text": "about what had happened"
        },
        {
          "key": "D",
          "text": "outside"
        }
      ],
      "answer": "B",
      "correction": "they knew → did they know",
      "explain": "**B** 错。否定词 little 置于句首,主句需部分倒装。正确:**did they know**。"
    },
    {
      "id": "e42-2",
      "sentence": "He is one of the engineers who is sent to work abroad.",
      "segments": [
        {
          "key": "A",
          "text": "He is one of the engineers"
        },
        {
          "key": "B",
          "text": "who is sent"
        },
        {
          "key": "C",
          "text": "to work"
        },
        {
          "key": "D",
          "text": "abroad"
        }
      ],
      "answer": "B",
      "correction": "is → are",
      "explain": "**B** 错。one of + 复数名词 + 定语从句,从句谓语与复数名词一致。正确:**who are sent**。"
    },
    {
      "id": "e42-3",
      "sentence": "The father forbidden his son to play computer games.",
      "segments": [
        {
          "key": "A",
          "text": "The father"
        },
        {
          "key": "B",
          "text": "forbidden"
        },
        {
          "key": "C",
          "text": "his son"
        },
        {
          "key": "D",
          "text": "to play computer games"
        }
      ],
      "answer": "B",
      "correction": "forbidden → forbade / forbids",
      "explain": "**B** 错。forbidden 是过去分词,不能单独作谓语。正确:**forbade**(过去式)或 forbids。"
    },
    {
      "id": "e42-4",
      "sentence": "He spoke in so a low voice that we could hardly hear him.",
      "segments": [
        {
          "key": "A",
          "text": "He spoke"
        },
        {
          "key": "B",
          "text": "in so a low voice"
        },
        {
          "key": "C",
          "text": "that we could"
        },
        {
          "key": "D",
          "text": "hardly hear him"
        }
      ],
      "answer": "B",
      "correction": "so a → such a",
      "explain": "**B** 错。单数可数名词前结构为 such a + adj + n,或 so + adj + a + n。so a 不成立。正确:**such a low voice**。"
    }
  ],
  43: [
    {
      "id": "e43-1",
      "sentence": "He has been used to live in the countryside since childhood.",
      "segments": [
        {
          "key": "A",
          "text": "He has been used to"
        },
        {
          "key": "B",
          "text": "live in the countryside"
        },
        {
          "key": "C",
          "text": "since childhood"
        },
        {
          "key": "D",
          "text": "(end)"
        }
      ],
      "answer": "B",
      "correction": "live → living",
      "explain": "**B** 错。be used to 习惯于,to 为介词,后接动名词。正确:**living**。"
    },
    {
      "id": "e43-2",
      "sentence": "I really appreciate you to help me with my English.",
      "segments": [
        {
          "key": "A",
          "text": "I really appreciate"
        },
        {
          "key": "B",
          "text": "you to help me"
        },
        {
          "key": "C",
          "text": "with my English"
        },
        {
          "key": "D",
          "text": "(end)"
        }
      ],
      "answer": "B",
      "correction": "you to help → your helping",
      "explain": "**B** 错。appreciate 后接动名词(复合结构)。正确:**your helping me**。"
    },
    {
      "id": "e43-3",
      "sentence": "All what he said at the meeting proved to be true.",
      "segments": [
        {
          "key": "A",
          "text": "All"
        },
        {
          "key": "B",
          "text": "what"
        },
        {
          "key": "C",
          "text": "he said at the meeting"
        },
        {
          "key": "D",
          "text": "proved to be true"
        }
      ],
      "answer": "B",
      "correction": "what → that",
      "explain": "**B** 错。先行词是 all,定语从句关系词用 that,不用 what;或删 all 用 what 引导主语从句。正确:**All that**。"
    },
    {
      "id": "e43-4",
      "sentence": "It is the second time that you visited the Great Wall.",
      "segments": [
        {
          "key": "A",
          "text": "It is the second time"
        },
        {
          "key": "B",
          "text": "that you visited"
        },
        {
          "key": "C",
          "text": "the Great Wall"
        },
        {
          "key": "D",
          "text": "(end)"
        }
      ],
      "answer": "B",
      "correction": "visited → have visited",
      "explain": "**B** 错。It is the first/second time that... 从句用现在完成时。正确:**have visited**。"
    }
  ],
  44: [
    {
      "id": "e44-1",
      "sentence": "The cake tastes well, so the children all like it very much.",
      "segments": [
        {
          "key": "A",
          "text": "The cake"
        },
        {
          "key": "B",
          "text": "tastes well"
        },
        {
          "key": "C",
          "text": "so the children all like it"
        },
        {
          "key": "D",
          "text": "very much"
        }
      ],
      "answer": "B",
      "correction": "well → good",
      "explain": "**B** 错。taste 为感官连系动词,后接形容词作表语。正确:**tastes good**。"
    },
    {
      "id": "e44-2",
      "sentence": "He is a famous writer, whose novels is popular among young readers.",
      "segments": [
        {
          "key": "A",
          "text": "He is a famous writer,"
        },
        {
          "key": "B",
          "text": "whose novels"
        },
        {
          "key": "C",
          "text": "is popular"
        },
        {
          "key": "D",
          "text": "among young readers"
        }
      ],
      "answer": "C",
      "correction": "is → are",
      "explain": "**C** 错。定语从句主语 novels 为复数,谓语用 are。正确:**are popular**。"
    },
    {
      "id": "e44-3",
      "sentence": "If you worked harder last term, you would have passed the exam.",
      "segments": [
        {
          "key": "A",
          "text": "If you worked harder"
        },
        {
          "key": "B",
          "text": "last term,"
        },
        {
          "key": "C",
          "text": "you would have passed"
        },
        {
          "key": "D",
          "text": "the exam"
        }
      ],
      "answer": "A",
      "correction": "worked → had worked",
      "explain": "**A** 错。与过去事实相反的虚拟,条件句用 had+过去分词。正确:**had worked**。"
    },
    {
      "id": "e44-4",
      "sentence": "The prize will be given to whomever wins the first place in the contest.",
      "segments": [
        {
          "key": "A",
          "text": "The prize will be given"
        },
        {
          "key": "B",
          "text": "to whomever"
        },
        {
          "key": "C",
          "text": "wins the first place"
        },
        {
          "key": "D",
          "text": "in the contest"
        }
      ],
      "answer": "B",
      "correction": "whomever → whoever",
      "explain": "**B** 错。whoever 在从句中充当主语(wins),即便整个从句作宾语也用主格。正确:**to whoever**。"
    }
  ],
  45: [
    {
      "id": "e45-1",
      "sentence": "He is one of the most diligent student that I have ever known.",
      "segments": [
        {
          "key": "A",
          "text": "He is one of the most diligent"
        },
        {
          "key": "B",
          "text": "student"
        },
        {
          "key": "C",
          "text": "that I have ever known"
        },
        {
          "key": "D",
          "text": "(end)"
        }
      ],
      "answer": "B",
      "correction": "student → students",
      "explain": "**B** 错。one of + the + 最高级 + 复数名词。正确:**students**。"
    },
    {
      "id": "e45-2",
      "sentence": "Had I known the truth earlier, I will have taken a different course.",
      "segments": [
        {
          "key": "A",
          "text": "Had I known"
        },
        {
          "key": "B",
          "text": "the truth earlier,"
        },
        {
          "key": "C",
          "text": "I will have taken"
        },
        {
          "key": "D",
          "text": "a different course"
        }
      ],
      "answer": "C",
      "correction": "will have → would have",
      "explain": "**C** 错。与过去事实相反的虚拟,主句用 would/should/could + have + 过去分词。正确:**would have taken**。"
    },
    {
      "id": "e45-3",
      "sentence": "The weather here is much more warmer than that in my hometown.",
      "segments": [
        {
          "key": "A",
          "text": "The weather here"
        },
        {
          "key": "B",
          "text": "is much more warmer"
        },
        {
          "key": "C",
          "text": "than that"
        },
        {
          "key": "D",
          "text": "in my hometown"
        }
      ],
      "answer": "B",
      "correction": "more warmer → warmer",
      "explain": "**B** 错。warmer 已是比较级,much 修饰比较级,不能再用 more。正确:**much warmer**。"
    },
    {
      "id": "e45-4",
      "sentence": "I am used to get up early and do morning exercises every day.",
      "segments": [
        {
          "key": "A",
          "text": "I am used to"
        },
        {
          "key": "B",
          "text": "get up early"
        },
        {
          "key": "C",
          "text": "and do morning exercises"
        },
        {
          "key": "D",
          "text": "every day"
        }
      ],
      "answer": "B",
      "correction": "get up → getting up",
      "explain": "**B** 错。be used to 习惯于,to 为介词,后接动名词。正确:**getting up**。"
    }
  ],
}
