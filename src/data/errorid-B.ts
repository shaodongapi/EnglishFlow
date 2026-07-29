import type { ErrorIDItem } from '../types'

export const ERROR_ID_B: Record<number, ErrorIDItem[]> = {
  "16": [
    {
      "id": "e16-1",
      "sentence": "The number of students who have applied for the scholarship are larger than expected.",
      "segments": [
        {
          "key": "A",
          "text": "The number of"
        },
        {
          "key": "B",
          "text": "students who have applied"
        },
        {
          "key": "C",
          "text": "for the scholarship"
        },
        {
          "key": "D",
          "text": "are larger than expected"
        }
      ],
      "answer": "D",
      "correction": "is larger than expected",
      "explain": "**D** 错误。主语中心词是 \"The number\",谓语应用单数 **is**;\"a number of\" 才接复数。"
    },
    {
      "id": "e16-2",
      "sentence": "Neither the teacher nor the students was aware of the change in the schedule.",
      "segments": [
        {
          "key": "A",
          "text": "Neither the teacher nor the students"
        },
        {
          "key": "B",
          "text": "was aware"
        },
        {
          "key": "C",
          "text": "of the change"
        },
        {
          "key": "D",
          "text": "in the schedule"
        }
      ],
      "answer": "B",
      "correction": "were aware",
      "explain": "**B** 错误。neither...nor... 就近一致,靠近谓语的是 \"students\",应用 **were**。"
    },
    {
      "id": "e16-3",
      "sentence": "He has been working in this company since he has graduated from college in 2018.",
      "segments": [
        {
          "key": "A",
          "text": "He has been working"
        },
        {
          "key": "B",
          "text": "in this company"
        },
        {
          "key": "C",
          "text": "since he has graduated"
        },
        {
          "key": "D",
          "text": "from college in 2018"
        }
      ],
      "answer": "C",
      "correction": "since he graduated",
      "explain": "**C** 错误。since 引导的时间状语从句表示过去确定的时间点,动词应用一般过去时 **graduated**,而非现在完成时。"
    },
    {
      "id": "e16-4",
      "sentence": "She is one of the most intelligent woman I have ever met in my life.",
      "segments": [
        {
          "key": "A",
          "text": "She is one of"
        },
        {
          "key": "B",
          "text": "the most intelligent woman"
        },
        {
          "key": "C",
          "text": "I have ever met"
        },
        {
          "key": "D",
          "text": "in my life"
        }
      ],
      "answer": "B",
      "correction": "the most intelligent women",
      "explain": "**B** 错误。\"one of + 复数名词\" 结构,woman 应为复数 **women**。"
    }
  ],
  "17": [
    {
      "id": "e17-1",
      "sentence": "The committee is arguing about the proposal for over three hours without reaching an agreement.",
      "segments": [
        {
          "key": "A",
          "text": "The committee is arguing"
        },
        {
          "key": "B",
          "text": "about the proposal"
        },
        {
          "key": "C",
          "text": "for over three hours"
        },
        {
          "key": "D",
          "text": "without reaching an agreement"
        }
      ],
      "answer": "A",
      "correction": "has been arguing",
      "explain": "**A** 错误。\"for over three hours\" 表示持续到现在的动作,应用现在完成进行时 **has been arguing**。"
    },
    {
      "id": "e17-2",
      "sentence": "The boy was made apologize to the teacher for what he had done in the classroom.",
      "segments": [
        {
          "key": "A",
          "text": "The boy was made"
        },
        {
          "key": "B",
          "text": "apologize to the teacher"
        },
        {
          "key": "C",
          "text": "for what he had done"
        },
        {
          "key": "D",
          "text": "in the classroom"
        }
      ],
      "answer": "A",
      "correction": "The boy was made to apologize",
      "explain": "**A** 错误。make 用于被动语态 be made 后,宾补不定式须带 to,即 **was made to apologize**。"
    },
    {
      "id": "e17-3",
      "sentence": "The book which I borrowed it from the library yesterday is due next Monday.",
      "segments": [
        {
          "key": "A",
          "text": "The book"
        },
        {
          "key": "B",
          "text": "which I borrowed it"
        },
        {
          "key": "C",
          "text": "from the library yesterday"
        },
        {
          "key": "D",
          "text": "is due next Monday"
        }
      ],
      "answer": "B",
      "correction": "which I borrowed",
      "explain": "**B** 错误。关系代词 which 已在从句中作 borrowed 的宾语,**it** 多余,应删去。"
    },
    {
      "id": "e17-4",
      "sentence": "Not only he is a good doctor, but he is also a kind-hearted person.",
      "segments": [
        {
          "key": "A",
          "text": "Not only he is"
        },
        {
          "key": "B",
          "text": "a good doctor"
        },
        {
          "key": "C",
          "text": "but he is also"
        },
        {
          "key": "D",
          "text": "a kind-hearted person"
        }
      ],
      "answer": "A",
      "correction": "Not only is he",
      "explain": "**A** 错误。Not only 置于句首引起部分倒装,应为 **Not only is he**。"
    }
  ],
  "18": [
    {
      "id": "e18-1",
      "sentence": "Each of the candidates were given ten minutes to present their views on the topic.",
      "segments": [
        {
          "key": "A",
          "text": "Each of the candidates"
        },
        {
          "key": "B",
          "text": "were given"
        },
        {
          "key": "C",
          "text": "ten minutes"
        },
        {
          "key": "D",
          "text": "to present their views on the topic"
        }
      ],
      "answer": "B",
      "correction": "was given",
      "explain": "**B** 错误。主语 \"Each\" 表单数,谓语应用单数 **was given**。"
    },
    {
      "id": "e18-2",
      "sentence": "I would rather you do not smoke in the office during working hours.",
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
          "text": "in the office"
        },
        {
          "key": "D",
          "text": "during working hours"
        }
      ],
      "answer": "B",
      "correction": "you did not smoke",
      "explain": "**B** 错误。would rather 后接从句表虚拟(与现在/将来相反),应用过去时 **did not smoke**。"
    },
    {
      "id": "e18-3",
      "sentence": "It is high time that we take effective measures to protect the environment.",
      "segments": [
        {
          "key": "A",
          "text": "It is high time"
        },
        {
          "key": "B",
          "text": "that we take"
        },
        {
          "key": "C",
          "text": "effective measures"
        },
        {
          "key": "D",
          "text": "to protect the environment"
        }
      ],
      "answer": "B",
      "correction": "that we took",
      "explain": "**B** 错误。It is (high) time that... 从句用虚拟语气(过去式),应为 **took**。"
    },
    {
      "id": "e18-4",
      "sentence": "The suspect denied to steal the car and insisted that he was innocent.",
      "segments": [
        {
          "key": "A",
          "text": "The suspect denied"
        },
        {
          "key": "B",
          "text": "to steal the car"
        },
        {
          "key": "C",
          "text": "and insisted that"
        },
        {
          "key": "D",
          "text": "he was innocent"
        }
      ],
      "answer": "B",
      "correction": "stealing the car",
      "explain": "**B** 错误。deny 后接动名词,不用不定式,应为 **stealing**。"
    }
  ],
  "19": [
    {
      "id": "e19-1",
      "sentence": "The news of his sudden death were a great shock to all of us in the company.",
      "segments": [
        {
          "key": "A",
          "text": "The news of his sudden death"
        },
        {
          "key": "B",
          "text": "were"
        },
        {
          "key": "C",
          "text": "a great shock"
        },
        {
          "key": "D",
          "text": "to all of us in the company"
        }
      ],
      "answer": "B",
      "correction": "was",
      "explain": "**B** 错误。news 是不可数名词,谓语用单数 **was**。"
    },
    {
      "id": "e19-2",
      "sentence": "She suggested that the meeting is postponed until the manager returns from abroad.",
      "segments": [
        {
          "key": "A",
          "text": "She suggested"
        },
        {
          "key": "B",
          "text": "that the meeting is postponed"
        },
        {
          "key": "C",
          "text": "until the manager returns"
        },
        {
          "key": "D",
          "text": "from abroad"
        }
      ],
      "answer": "B",
      "correction": "that the meeting be postponed",
      "explain": "**B** 错误。suggest 后的宾语从句用虚拟语气 (should + ) 动词原形,应为 **be postponed**。"
    },
    {
      "id": "e19-3",
      "sentence": "Comparing with the previous model, the new phone is much lighter and faster.",
      "segments": [
        {
          "key": "A",
          "text": "Comparing with"
        },
        {
          "key": "B",
          "text": "the previous model"
        },
        {
          "key": "C",
          "text": "the new phone is much lighter"
        },
        {
          "key": "D",
          "text": "and faster"
        }
      ],
      "answer": "A",
      "correction": "Compared with",
      "explain": "**A** 错误。\"new phone\" 与 \"compare\" 是被动关系,应用过去分词 **Compared with**。"
    },
    {
      "id": "e19-4",
      "sentence": "He is too tired not to continue the work, so he decides to take a short rest.",
      "segments": [
        {
          "key": "A",
          "text": "He is too tired"
        },
        {
          "key": "B",
          "text": "not to continue"
        },
        {
          "key": "C",
          "text": "the work"
        },
        {
          "key": "D",
          "text": "so he decides to take a short rest"
        }
      ],
      "answer": "B",
      "correction": "to continue",
      "explain": "**B** 错误。too...to... 本身已含否定意义\"太...而不能\",不应再加 not,删去 **not**。"
    }
  ],
  "20": [
    {
      "id": "e20-1",
      "sentence": "A great deal of time and effort have been spent on researching the new product.",
      "segments": [
        {
          "key": "A",
          "text": "A great deal of"
        },
        {
          "key": "B",
          "text": "time and effort"
        },
        {
          "key": "C",
          "text": "have been spent"
        },
        {
          "key": "D",
          "text": "on researching the new product"
        }
      ],
      "answer": "C",
      "correction": "has been spent",
      "explain": "**C** 错误。\"a great deal of\" 修饰不可数名词(集合看作一体),谓语用单数 **has been spent**。"
    },
    {
      "id": "e20-2",
      "sentence": "If I was you, I would accept the job offer without hesitation.",
      "segments": [
        {
          "key": "A",
          "text": "If I was you"
        },
        {
          "key": "B",
          "text": "I would accept"
        },
        {
          "key": "C",
          "text": "the job offer"
        },
        {
          "key": "D",
          "text": "without hesitation"
        }
      ],
      "answer": "A",
      "correction": "If I were you",
      "explain": "**A** 错误。与现在事实相反的虚拟语气,be 动词统一用 **were**。"
    },
    {
      "id": "e20-3",
      "sentence": "The teacher made the students to rewrite their essays after pointing out the mistakes.",
      "segments": [
        {
          "key": "A",
          "text": "The teacher made"
        },
        {
          "key": "B",
          "text": "the students to rewrite"
        },
        {
          "key": "C",
          "text": "their essays"
        },
        {
          "key": "D",
          "text": "after pointing out the mistakes"
        }
      ],
      "answer": "B",
      "correction": "the students rewrite",
      "explain": "**B** 错误。make sb. do sth.,宾补用省略 to 的不定式,应为 **rewrite**。"
    },
    {
      "id": "e20-4",
      "sentence": "We are looking forward to hear from you as soon as possible.",
      "segments": [
        {
          "key": "A",
          "text": "We are looking forward"
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
          "text": ""
        }
      ],
      "answer": "B",
      "correction": "to hearing from you",
      "explain": "**B** 错误。look forward to 中 to 是介词,后接动名词 **hearing**。"
    }
  ],
  "21": [
    {
      "id": "e21-1",
      "sentence": "Two-thirds of the land in this region are covered by forests and lakes.",
      "segments": [
        {
          "key": "A",
          "text": "Two-thirds of the land"
        },
        {
          "key": "B",
          "text": "in this region"
        },
        {
          "key": "C",
          "text": "are covered"
        },
        {
          "key": "D",
          "text": "by forests and lakes"
        }
      ],
      "answer": "C",
      "correction": "is covered",
      "explain": "**C** 错误。\"分数 + of + 不可数名词 land\" 作主语,谓语用单数 **is covered**。"
    },
    {
      "id": "e21-2",
      "sentence": "The professor, along with his assistants, are going to attend the international conference.",
      "segments": [
        {
          "key": "A",
          "text": "The professor"
        },
        {
          "key": "B",
          "text": "along with his assistants"
        },
        {
          "key": "C",
          "text": "are going to attend"
        },
        {
          "key": "D",
          "text": "the international conference"
        }
      ],
      "answer": "C",
      "correction": "is going to attend",
      "explain": "**C** 错误。主语是 \"The professor\",along with... 是插入语不影响主语数,谓语用单数 **is going to attend**。"
    },
    {
      "id": "e21-3",
      "sentence": "I have bought a new car last week, and it runs very well on the highway.",
      "segments": [
        {
          "key": "A",
          "text": "I have bought"
        },
        {
          "key": "B",
          "text": "a new car last week"
        },
        {
          "key": "C",
          "text": "and it runs very well"
        },
        {
          "key": "D",
          "text": "on the highway"
        }
      ],
      "answer": "A",
      "correction": "I bought",
      "explain": "**A** 错误。\"last week\" 是明确的过去时间,动词应用一般过去时 **bought**,不用现在完成时。"
    },
    {
      "id": "e21-4",
      "sentence": "Do you know the man whom is standing under the tree and talking to our boss?",
      "segments": [
        {
          "key": "A",
          "text": "Do you know the man"
        },
        {
          "key": "B",
          "text": "whom is standing"
        },
        {
          "key": "C",
          "text": "under the tree"
        },
        {
          "key": "D",
          "text": "and talking to our boss"
        }
      ],
      "answer": "B",
      "correction": "who is standing",
      "explain": "**B** 错误。关系代词在从句中作主语,应用主格 **who**。"
    }
  ],
  "22": [
    {
      "id": "e22-1",
      "sentence": "There are a pen and two notebooks on the desk near the window.",
      "segments": [
        {
          "key": "A",
          "text": "There are"
        },
        {
          "key": "B",
          "text": "a pen and two notebooks"
        },
        {
          "key": "C",
          "text": "on the desk"
        },
        {
          "key": "D",
          "text": "near the window"
        }
      ],
      "answer": "A",
      "correction": "There is",
      "explain": "**A** 错误。There be 句型就近一致,靠近的是单数 \"a pen\",用 **There is**。"
    },
    {
      "id": "e22-2",
      "sentence": "By the time he arrived at the station, the train has already left.",
      "segments": [
        {
          "key": "A",
          "text": "By the time he arrived"
        },
        {
          "key": "B",
          "text": "at the station"
        },
        {
          "key": "C",
          "text": "the train has already left"
        },
        {
          "key": "D",
          "text": ""
        }
      ],
      "answer": "C",
      "correction": "the train had already left",
      "explain": "**C** 错误。\"by the time + 过去时\"主句用过去完成时 **had left**。"
    },
    {
      "id": "e22-3",
      "sentence": "She has made a great progress in English since she started attending the evening classes.",
      "segments": [
        {
          "key": "A",
          "text": "She has made"
        },
        {
          "key": "B",
          "text": "a great progress"
        },
        {
          "key": "C",
          "text": "in English"
        },
        {
          "key": "D",
          "text": "since she started attending the evening classes"
        }
      ],
      "answer": "B",
      "correction": "great progress",
      "explain": "**B** 错误。progress 是不可数名词,不能加不定冠词,删去 **a**。"
    },
    {
      "id": "e22-4",
      "sentence": "The reason why he was late is because he missed the early bus this morning.",
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
          "text": "he missed the early bus"
        },
        {
          "key": "D",
          "text": "this morning"
        }
      ],
      "answer": "B",
      "correction": "is that",
      "explain": "**B** 错误。The reason is 后应接 that 引导的表语从句,不用 **because**。"
    }
  ],
  "23": [
    {
      "id": "e23-1",
      "sentence": "Every boy and every girl in the class have been given a ticket for the school play.",
      "segments": [
        {
          "key": "A",
          "text": "Every boy and every girl"
        },
        {
          "key": "B",
          "text": "in the class"
        },
        {
          "key": "C",
          "text": "have been given"
        },
        {
          "key": "D",
          "text": "a ticket for the school play"
        }
      ],
      "answer": "C",
      "correction": "has been given",
      "explain": "**C** 错误。\"every...and every...\" 作主语,谓语用单数 **has been given**。"
    },
    {
      "id": "e23-2",
      "sentence": "I really appreciate you to help me with the difficult project last month.",
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
          "text": "with the difficult project"
        },
        {
          "key": "D",
          "text": "last month"
        }
      ],
      "answer": "B",
      "correction": "your helping me",
      "explain": "**B** 错误。appreciate 后接动名词,可用物主代词 + 动名词,应为 **your helping me**。"
    },
    {
      "id": "e23-3",
      "sentence": "He is the only one of the students who have passed the difficult entrance examination.",
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
          "text": "the difficult entrance examination"
        },
        {
          "key": "D",
          "text": ""
        }
      ],
      "answer": "B",
      "correction": "who has passed",
      "explain": "**B** 错误。\"the only one of + 复数名词\" 后定语从句修饰 \"the only one\",谓语用单数 **has passed**。"
    },
    {
      "id": "e23-4",
      "sentence": "The old man is suffering from a serious disease and needs to operate on immediately.",
      "segments": [
        {
          "key": "A",
          "text": "The old man is suffering"
        },
        {
          "key": "B",
          "text": "from a serious disease"
        },
        {
          "key": "C",
          "text": "and needs to operate on"
        },
        {
          "key": "D",
          "text": "immediately"
        }
      ],
      "answer": "C",
      "correction": "and needs to be operated on",
      "explain": "**C** 错误。\"老人\" 与 \"operate\" 是被动关系,应用被动形式 **to be operated on**。"
    }
  ],
  "24": [
    {
      "id": "e24-1",
      "sentence": "A library, as well as two reading rooms, were built in the center of the campus last year.",
      "segments": [
        {
          "key": "A",
          "text": "A library"
        },
        {
          "key": "B",
          "text": "as well as two reading rooms"
        },
        {
          "key": "C",
          "text": "were built"
        },
        {
          "key": "D",
          "text": "in the center of the campus last year"
        }
      ],
      "answer": "C",
      "correction": "was built",
      "explain": "**C** 错误。主语 \"A library\" 单数,as well as... 不影响主语数,用 **was built**。"
    },
    {
      "id": "e24-2",
      "sentence": "I insist that he must be present at the meeting tomorrow afternoon.",
      "segments": [
        {
          "key": "A",
          "text": "I insist"
        },
        {
          "key": "B",
          "text": "that he must be"
        },
        {
          "key": "C",
          "text": "present at the meeting"
        },
        {
          "key": "D",
          "text": "tomorrow afternoon"
        }
      ],
      "answer": "B",
      "correction": "that he be",
      "explain": "**B** 错误。insist 后的宾语从句用 (should +) 动词原形,应省略 must,用 **be**。"
    },
    {
      "id": "e24-3",
      "sentence": "Having not finished his homework, the boy was not allowed to watch television.",
      "segments": [
        {
          "key": "A",
          "text": "Having not finished"
        },
        {
          "key": "B",
          "text": "his homework"
        },
        {
          "key": "C",
          "text": "the boy was not allowed"
        },
        {
          "key": "D",
          "text": "to watch television"
        }
      ],
      "answer": "A",
      "correction": "Not having finished",
      "explain": "**A** 错误。现在分词完成式的否定式 not 应放在 having 前,即 **Not having finished**。"
    },
    {
      "id": "e24-4",
      "sentence": "The manager ordered that the work must be finished by the end of this month.",
      "segments": [
        {
          "key": "A",
          "text": "The manager ordered"
        },
        {
          "key": "B",
          "text": "that the work must be finished"
        },
        {
          "key": "C",
          "text": "by the end of"
        },
        {
          "key": "D",
          "text": "this month"
        }
      ],
      "answer": "B",
      "correction": "that the work be finished",
      "explain": "**B** 错误。order 后从句用虚拟 (should + ) 原形,省略 must,用 **be finished**。"
    }
  ],
  "25": [
    {
      "id": "e25-1",
      "sentence": "Mathematics are his weakest subject, although he spends much time practicing it.",
      "segments": [
        {
          "key": "A",
          "text": "Mathematics are"
        },
        {
          "key": "B",
          "text": "his weakest subject"
        },
        {
          "key": "C",
          "text": "although he spends much time"
        },
        {
          "key": "D",
          "text": "practicing it"
        }
      ],
      "answer": "A",
      "correction": "Mathematics is",
      "explain": "**A** 错误。学科名词 mathematics 形复义单,谓语用单数 **is**。"
    },
    {
      "id": "e25-2",
      "sentence": "He is believed to be the most capable engineer that has ever worked in our factory.",
      "segments": [
        {
          "key": "A",
          "text": "He is believed"
        },
        {
          "key": "B",
          "text": "to be the most capable engineer"
        },
        {
          "key": "C",
          "text": "that has ever worked"
        },
        {
          "key": "D",
          "text": "in our factory"
        }
      ],
      "answer": "A",
      "correction": "He is believed to have been",
      "explain": "**A** 错误。\"被认为\"发生在\"成为\"之前,不定式应用完成式 **to have been**。"
    },
    {
      "id": "e25-3",
      "sentence": "She is senior than me by two years, but she looks much younger than her age.",
      "segments": [
        {
          "key": "A",
          "text": "She is senior than"
        },
        {
          "key": "B",
          "text": "me by two years"
        },
        {
          "key": "C",
          "text": "but she looks much younger"
        },
        {
          "key": "D",
          "text": "than her age"
        }
      ],
      "answer": "A",
      "correction": "She is senior to",
      "explain": "**A** 错误。senior 本身含比较义,后接 **to** 而非 than。"
    },
    {
      "id": "e25-4",
      "sentence": "Please remind me of returning the book to the library when I come back tomorrow.",
      "segments": [
        {
          "key": "A",
          "text": "Please remind me"
        },
        {
          "key": "B",
          "text": "of returning the book"
        },
        {
          "key": "C",
          "text": "to the library"
        },
        {
          "key": "D",
          "text": "when I come back tomorrow"
        }
      ],
      "answer": "B",
      "correction": "to return the book",
      "explain": "**B** 错误。remind sb. to do sth. 提醒某人做某事,应用不定式 **to return**。"
    }
  ],
  "26": [
    {
      "id": "e26-1",
      "sentence": "The population of China is much larger than those of any other country in the world.",
      "segments": [
        {
          "key": "A",
          "text": "The population of China"
        },
        {
          "key": "B",
          "text": "is much larger"
        },
        {
          "key": "C",
          "text": "than those of"
        },
        {
          "key": "D",
          "text": "any other country in the world"
        }
      ],
      "answer": "C",
      "correction": "than that of",
      "explain": "**C** 错误。比较对象应一致,指代单数 population,应用 **that of**。"
    },
    {
      "id": "e26-2",
      "sentence": "Had he worked harder last year, he will have passed the entrance examination easily.",
      "segments": [
        {
          "key": "A",
          "text": "Had he worked harder"
        },
        {
          "key": "B",
          "text": "last year"
        },
        {
          "key": "C",
          "text": "he will have passed"
        },
        {
          "key": "D",
          "text": "the entrance examination easily"
        }
      ],
      "answer": "C",
      "correction": "he would have passed",
      "explain": "**C** 错误。与过去事实相反的虚拟,主句应用 **would have passed**,而非 will have passed。"
    },
    {
      "id": "e26-3",
      "sentence": "The little girl was too frightened that she could not say a single word.",
      "segments": [
        {
          "key": "A",
          "text": "The little girl"
        },
        {
          "key": "B",
          "text": "was too frightened"
        },
        {
          "key": "C",
          "text": "that she could not"
        },
        {
          "key": "D",
          "text": "say a single word"
        }
      ],
      "answer": "B",
      "correction": "was so frightened",
      "explain": "**B** 错误。\"so...that...\" 如此...以至于...,应用 **so frightened**;too...to 已含否定。"
    },
    {
      "id": "e26-4",
      "sentence": "Not knowing what to do, the old man sat silently in the corner of the room.",
      "segments": [
        {
          "key": "A",
          "text": "Not knowing what to do"
        },
        {
          "key": "B",
          "text": "the old man sat silently"
        },
        {
          "key": "C",
          "text": "in the corner"
        },
        {
          "key": "D",
          "text": "of the room"
        }
      ],
      "answer": "B",
      "correction": "the old man sat silent",
      "explain": "**B** 错误。sat 是连系动词,后接形容词作表语,应用 **sat silent**,而非副词 silently。"
    }
  ],
  "27": [
    {
      "id": "e27-1",
      "sentence": "Either you or I are responsible for the mistake that caused the delay.",
      "segments": [
        {
          "key": "A",
          "text": "Either you or I"
        },
        {
          "key": "B",
          "text": "are responsible"
        },
        {
          "key": "C",
          "text": "for the mistake"
        },
        {
          "key": "D",
          "text": "that caused the delay"
        }
      ],
      "answer": "B",
      "correction": "am responsible",
      "explain": "**B** 错误。either...or... 就近一致,靠近谓语的是 I,应用 **am responsible**。"
    },
    {
      "id": "e27-2",
      "sentence": "The flower smells sweetly, and it attracts a lot of bees and butterflies.",
      "segments": [
        {
          "key": "A",
          "text": "The flower smells sweetly"
        },
        {
          "key": "B",
          "text": "and it attracts"
        },
        {
          "key": "C",
          "text": "a lot of bees"
        },
        {
          "key": "D",
          "text": "and butterflies"
        }
      ],
      "answer": "A",
      "correction": "The flower smells sweet",
      "explain": "**A** 错误。smell 是感官连系动词,后接形容词,应用 **smells sweet**。"
    },
    {
      "id": "e27-3",
      "sentence": "I have been used to live in the city since I moved here ten years ago.",
      "segments": [
        {
          "key": "A",
          "text": "I have been used to"
        },
        {
          "key": "B",
          "text": "live in the city"
        },
        {
          "key": "C",
          "text": "since I moved here"
        },
        {
          "key": "D",
          "text": "ten years ago"
        }
      ],
      "answer": "B",
      "correction": "living in the city",
      "explain": "**B** 错误。be used to 中 to 是介词,后接动名词,应用 **living**。"
    },
    {
      "id": "e27-4",
      "sentence": "He is a honest man, and all his colleagues trust him completely.",
      "segments": [
        {
          "key": "A",
          "text": "He is a honest man"
        },
        {
          "key": "B",
          "text": "and all his colleagues"
        },
        {
          "key": "C",
          "text": "trust him"
        },
        {
          "key": "D",
          "text": "completely"
        }
      ],
      "answer": "A",
      "correction": "He is an honest man",
      "explain": "**A** 错误。honest 中 h 不发音,以元音音素开头,冠词应用 **an**。"
    }
  ],
  "28": [
    {
      "id": "e28-1",
      "sentence": "Many a student have made the same mistake when answering this difficult question.",
      "segments": [
        {
          "key": "A",
          "text": "Many a student"
        },
        {
          "key": "B",
          "text": "have made"
        },
        {
          "key": "C",
          "text": "the same mistake"
        },
        {
          "key": "D",
          "text": "when answering this difficult question"
        }
      ],
      "answer": "B",
      "correction": "has made",
      "explain": "**B** 错误。\"many a + 单数名词\" 作主语,谓语用单数 **has made**。"
    },
    {
      "id": "e28-2",
      "sentence": "The doctor suggested him to give up smoking and take more exercise every day.",
      "segments": [
        {
          "key": "A",
          "text": "The doctor suggested him"
        },
        {
          "key": "B",
          "text": "to give up smoking"
        },
        {
          "key": "C",
          "text": "and take more exercise"
        },
        {
          "key": "D",
          "text": "every day"
        }
      ],
      "answer": "B",
      "correction": "that he (should) give up smoking",
      "explain": "**B** 错误。suggest 不接 sb. to do,应改为从句 **that he (should) give up smoking**。"
    },
    {
      "id": "e28-3",
      "sentence": "It was in 2001 when China joined the World Trade Organization successfully.",
      "segments": [
        {
          "key": "A",
          "text": "It was in 2001"
        },
        {
          "key": "B",
          "text": "when China joined"
        },
        {
          "key": "C",
          "text": "the World Trade Organization"
        },
        {
          "key": "D",
          "text": "successfully"
        }
      ],
      "answer": "B",
      "correction": "that China joined",
      "explain": "**B** 错误。强调句型 It is/was...that...,应用 **that**,而非 when。"
    },
    {
      "id": "e28-4",
      "sentence": "He has gone to Beijing three times on business during the past two years.",
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
          "text": "on business"
        },
        {
          "key": "D",
          "text": "during the past two years"
        }
      ],
      "answer": "A",
      "correction": "He has been to Beijing",
      "explain": "**A** 错误。have gone to 表\"已去未归\",与 three times 矛盾;应用 **has been to** 表去过。"
    }
  ],
  "29": [
    {
      "id": "e29-1",
      "sentence": "The number of people who owns private cars are increasing rapidly in big cities.",
      "segments": [
        {
          "key": "A",
          "text": "The number of people"
        },
        {
          "key": "B",
          "text": "who owns private cars"
        },
        {
          "key": "C",
          "text": "are increasing rapidly"
        },
        {
          "key": "D",
          "text": "in big cities"
        }
      ],
      "answer": "B",
      "correction": "who own private cars",
      "explain": "**B** 错误。关系从句先行词是 people(复数),谓语用复数 **own**。(主句 are 也错,但本题主语为 The number,真正应填 is;以从句为错点更典型,选 **B**。)"
    },
    {
      "id": "e29-2",
      "sentence": "No sooner I had reached the station than the train started to move slowly.",
      "segments": [
        {
          "key": "A",
          "text": "No sooner I had reached"
        },
        {
          "key": "B",
          "text": "the station"
        },
        {
          "key": "C",
          "text": "than the train started"
        },
        {
          "key": "D",
          "text": "to move slowly"
        }
      ],
      "answer": "A",
      "correction": "No sooner had I reached",
      "explain": "**A** 错误。No sooner 置于句首引起部分倒装,应为 **No sooner had I reached**。"
    },
    {
      "id": "e29-3",
      "sentence": "You had better not to go out alone at night in such a dangerous neighborhood.",
      "segments": [
        {
          "key": "A",
          "text": "You had better"
        },
        {
          "key": "B",
          "text": "not to go out"
        },
        {
          "key": "C",
          "text": "alone at night"
        },
        {
          "key": "D",
          "text": "in such a dangerous neighborhood"
        }
      ],
      "answer": "B",
      "correction": "not go out",
      "explain": "**B** 错误。had better 后接省略 to 的不定式,否定式为 **not go out**。"
    },
    {
      "id": "e29-4",
      "sentence": "I will lend you the book on condition that you will return it within two weeks.",
      "segments": [
        {
          "key": "A",
          "text": "I will lend you the book"
        },
        {
          "key": "B",
          "text": "on condition that"
        },
        {
          "key": "C",
          "text": "you will return it"
        },
        {
          "key": "D",
          "text": "within two weeks"
        }
      ],
      "answer": "C",
      "correction": "you return it",
      "explain": "**C** 错误。on condition that 引导条件状语从句,主将从现,从句用一般现在时 **return**。"
    }
  ],
  "30": [
    {
      "id": "e30-1",
      "sentence": "All the furniture in the house were destroyed in the big fire last night.",
      "segments": [
        {
          "key": "A",
          "text": "All the furniture"
        },
        {
          "key": "B",
          "text": "in the house"
        },
        {
          "key": "C",
          "text": "were destroyed"
        },
        {
          "key": "D",
          "text": "in the big fire last night"
        }
      ],
      "answer": "C",
      "correction": "was destroyed",
      "explain": "**C** 错误。furniture 是不可数名词,谓语用单数 **was destroyed**。"
    },
    {
      "id": "e30-2",
      "sentence": "He told me that he will come to my birthday party the following weekend.",
      "segments": [
        {
          "key": "A",
          "text": "He told me"
        },
        {
          "key": "B",
          "text": "that he will come"
        },
        {
          "key": "C",
          "text": "to my birthday party"
        },
        {
          "key": "D",
          "text": "the following weekend"
        }
      ],
      "answer": "B",
      "correction": "that he would come",
      "explain": "**B** 错误。主句为过去时 told,从句时态应相应变为过去将来时 **would come**。"
    },
    {
      "id": "e30-3",
      "sentence": "It is necessary that the patient takes the medicine three times a day after meals.",
      "segments": [
        {
          "key": "A",
          "text": "It is necessary"
        },
        {
          "key": "B",
          "text": "that the patient takes"
        },
        {
          "key": "C",
          "text": "the medicine three times a day"
        },
        {
          "key": "D",
          "text": "after meals"
        }
      ],
      "answer": "B",
      "correction": "that the patient take",
      "explain": "**B** 错误。It is necessary that... 主语从句用虚拟 (should + ) 原形,应用 **take**。"
    },
    {
      "id": "e30-4",
      "sentence": "The reason for his failure is due to his carelessness and laziness in study.",
      "segments": [
        {
          "key": "A",
          "text": "The reason for his failure"
        },
        {
          "key": "B",
          "text": "is due to"
        },
        {
          "key": "C",
          "text": "his carelessness"
        },
        {
          "key": "D",
          "text": "and laziness in study"
        }
      ],
      "answer": "B",
      "correction": "is that / is",
      "explain": "**B** 错误。reason 与 due to 连用语义重复,应改为 **is that** 或直接保留 is。"
    }
  ]
}
