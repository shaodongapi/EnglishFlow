import type { ErrorIDItem } from '../types'

// 北京成人本科学士学位英语真题题型 —— 挑错题 (Day 1-15,每天 4 题)
export const ERROR_ID_A: Record<number, ErrorIDItem[]> = {
  "1": [
    {
      "id": "e1-1",
      "sentence": "The number of students who applied for the scholarship are larger than expected.",
      "segments": [
        {
          "key": "A",
          "text": "The number of students"
        },
        {
          "key": "B",
          "text": "who applied for"
        },
        {
          "key": "C",
          "text": "the scholarship"
        },
        {
          "key": "D",
          "text": "are"
        }
      ],
      "answer": "D",
      "correction": "is",
      "explain": "主语核心词是 The number(单数),其后谓语动词应用单数 **is**;**are** 是主谓不一致错误。"
    },
    {
      "id": "e1-2",
      "sentence": "Each of the candidates were asked to give a five-minute speech at the interview.",
      "segments": [
        {
          "key": "A",
          "text": "Each of the candidates"
        },
        {
          "key": "B",
          "text": "were asked"
        },
        {
          "key": "C",
          "text": "to give a five-minute speech"
        },
        {
          "key": "D",
          "text": "at the interview"
        }
      ],
      "answer": "B",
      "correction": "was asked",
      "explain": "主语 Each(每一个)为单数,谓语须用单数 **was asked**;**were asked** 主谓不一致。"
    },
    {
      "id": "e1-3",
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
      "explain": "neither...nor... 就近一致,靠近谓语的 students 为复数,故用 **were aware**;**was aware** 错误。"
    },
    {
      "id": "e1-4",
      "sentence": "A pair of glasses have been found on the table in the reading room.",
      "segments": [
        {
          "key": "A",
          "text": "A pair of glasses"
        },
        {
          "key": "B",
          "text": "have been found"
        },
        {
          "key": "C",
          "text": "on the table"
        },
        {
          "key": "D",
          "text": "in the reading room"
        }
      ],
      "answer": "B",
      "correction": "has been found",
      "explain": "a pair of(一副)中心词 pair 为单数,谓语应用 **has been found**;**have been found** 主谓不一致。"
    }
  ],
  "2": [
    {
      "id": "e2-1",
      "sentence": "By the time he arrived at the station, the train has already left.",
      "segments": [
        {
          "key": "A",
          "text": "By the time"
        },
        {
          "key": "B",
          "text": "he arrived"
        },
        {
          "key": "C",
          "text": "at the station"
        },
        {
          "key": "D",
          "text": "the train has already left"
        }
      ],
      "answer": "D",
      "correction": "the train had already left",
      "explain": "「在他到达之前」是过去的过去,主句应用过去完成时 **had already left**;**has already left** 时态错误。"
    },
    {
      "id": "e2-2",
      "sentence": "I am knowing the importance of English since I started this job.",
      "segments": [
        {
          "key": "A",
          "text": "I am knowing"
        },
        {
          "key": "B",
          "text": "the importance of English"
        },
        {
          "key": "C",
          "text": "since I started"
        },
        {
          "key": "D",
          "text": "this job"
        }
      ],
      "answer": "A",
      "correction": "I have known",
      "explain": "know 为状态动词,不用进行时;且由 since 引导,应用现在完成时 **have known**;**am knowing** 错误。"
    },
    {
      "id": "e2-3",
      "sentence": "When I entered the room, everyone is talking about the new policy.",
      "segments": [
        {
          "key": "A",
          "text": "When I entered"
        },
        {
          "key": "B",
          "text": "the room"
        },
        {
          "key": "C",
          "text": "everyone is talking"
        },
        {
          "key": "D",
          "text": "about the new policy"
        }
      ],
      "answer": "C",
      "correction": "was talking",
      "explain": "主句动作与 entered 同时发生(过去),应用过去进行时 **was talking**;**is talking** 时态错误。"
    },
    {
      "id": "e2-4",
      "sentence": "He told me that he will come to the meeting the next day.",
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
          "text": "to the meeting"
        },
        {
          "key": "D",
          "text": "the next day"
        }
      ],
      "answer": "B",
      "correction": "that he would come",
      "explain": "主句为过去时 told,宾语从句时态呼应应用过去将来时 **would come**;**will come** 时态不一致。"
    }
  ],
  "3": [
    {
      "id": "e3-1",
      "sentence": "She is learning to play piano and hopes to become a great musician.",
      "segments": [
        {
          "key": "A",
          "text": "She is learning"
        },
        {
          "key": "B",
          "text": "to play piano"
        },
        {
          "key": "C",
          "text": "and hopes"
        },
        {
          "key": "D",
          "text": "to become a great musician"
        }
      ],
      "answer": "B",
      "correction": "to play the piano",
      "explain": "演奏西洋乐器名词前须加定冠词,应为 **the piano**;**play piano** 缺冠词。"
    },
    {
      "id": "e3-2",
      "sentence": "The sun rises in the east and sets in west.",
      "segments": [
        {
          "key": "A",
          "text": "The sun"
        },
        {
          "key": "B",
          "text": "rises in the east"
        },
        {
          "key": "C",
          "text": "and sets"
        },
        {
          "key": "D",
          "text": "in west"
        }
      ],
      "answer": "D",
      "correction": "in the west",
      "explain": "方位名词前须用定冠词,应为 **the west**;**in west** 缺冠词。"
    },
    {
      "id": "e3-3",
      "sentence": "He is an university student who majors in computer science.",
      "segments": [
        {
          "key": "A",
          "text": "He is"
        },
        {
          "key": "B",
          "text": "an university student"
        },
        {
          "key": "C",
          "text": "who majors in"
        },
        {
          "key": "D",
          "text": "computer science"
        }
      ],
      "answer": "B",
      "correction": "a university student",
      "explain": "university 虽以元音字母开头,但发音以辅音 /j/ 开头,前应用 **a**;**an university** 错误。"
    },
    {
      "id": "e3-4",
      "sentence": "Most of people believe that hard work leads to success.",
      "segments": [
        {
          "key": "A",
          "text": "Most of people"
        },
        {
          "key": "B",
          "text": "believe that"
        },
        {
          "key": "C",
          "text": "hard work leads"
        },
        {
          "key": "D",
          "text": "to success"
        }
      ],
      "answer": "A",
      "correction": "Most of the people",
      "explain": "most of 后接名词须加定冠词,应为 **Most of the people**(或直接用 Most people);**Most of people** 缺冠词。"
    }
  ],
  "4": [
    {
      "id": "e4-1",
      "sentence": "She is very good in math but weak at English.",
      "segments": [
        {
          "key": "A",
          "text": "She is very good"
        },
        {
          "key": "B",
          "text": "in math"
        },
        {
          "key": "C",
          "text": "but weak"
        },
        {
          "key": "D",
          "text": "at English"
        }
      ],
      "answer": "B",
      "correction": "at math",
      "explain": "be good at(擅长)是固定搭配,应用 **at math**;**good in math** 介词错误。"
    },
    {
      "id": "e4-2",
      "sentence": "He has been working in this company since five years and he really enjoys the job.",
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
          "text": "since five years"
        },
        {
          "key": "D",
          "text": "he really enjoys the job"
        }
      ],
      "answer": "C",
      "correction": "for five years",
      "explain": "与时间段(five years)连用应用 **for five years**;**since** 须接时间点,介词错误。"
    },
    {
      "id": "e4-3",
      "sentence": "The teacher is satisfied to the progress that the students have made.",
      "segments": [
        {
          "key": "A",
          "text": "The teacher"
        },
        {
          "key": "B",
          "text": "is satisfied to"
        },
        {
          "key": "C",
          "text": "the progress"
        },
        {
          "key": "D",
          "text": "that the students have made"
        }
      ],
      "answer": "B",
      "correction": "is satisfied with",
      "explain": "be satisfied with(对……满意)为固定搭配,应用 **with**;**satisfied to** 介词错误。"
    },
    {
      "id": "e4-4",
      "sentence": "Please pay attention to what the speaker is saying in the beginning of the lecture.",
      "segments": [
        {
          "key": "A",
          "text": "Please pay attention to"
        },
        {
          "key": "B",
          "text": "what the speaker is saying"
        },
        {
          "key": "C",
          "text": "in the beginning"
        },
        {
          "key": "D",
          "text": "of the lecture"
        }
      ],
      "answer": "C",
      "correction": "at the beginning",
      "explain": "在……开始时用 **at the beginning of**;**in the beginning**(起初)后不接 of,介词错误。"
    }
  ],
  "5": [
    {
      "id": "e5-1",
      "sentence": "The boy enjoys to play basketball with his friends after school.",
      "segments": [
        {
          "key": "A",
          "text": "The boy enjoys"
        },
        {
          "key": "B",
          "text": "to play basketball"
        },
        {
          "key": "C",
          "text": "with his friends"
        },
        {
          "key": "D",
          "text": "after school"
        }
      ],
      "answer": "B",
      "correction": "playing basketball",
      "explain": "enjoy 后接动名词,应为 **playing basketball**;**to play** 错误。"
    },
    {
      "id": "e5-2",
      "sentence": "He was made clean the classroom as a punishment for being late.",
      "segments": [
        {
          "key": "A",
          "text": "He was made"
        },
        {
          "key": "B",
          "text": "clean the classroom"
        },
        {
          "key": "C",
          "text": "as a punishment"
        },
        {
          "key": "D",
          "text": "for being late"
        }
      ],
      "answer": "B",
      "correction": "to clean the classroom",
      "explain": "make sb do sth 的被动语态须还原 to,即 be made **to clean**;**clean** 缺 to。"
    },
    {
      "id": "e5-3",
      "sentence": "I am looking forward to hear from you about the result of the interview.",
      "segments": [
        {
          "key": "A",
          "text": "I am looking forward"
        },
        {
          "key": "B",
          "text": "to hear from you"
        },
        {
          "key": "C",
          "text": "about the result"
        },
        {
          "key": "D",
          "text": "of the interview"
        }
      ],
      "answer": "B",
      "correction": "to hearing from you",
      "explain": "look forward to 中 to 为介词,后接动名词 **hearing**;**to hear** 错误。"
    },
    {
      "id": "e5-4",
      "sentence": "The book writing by the famous professor will be published next month.",
      "segments": [
        {
          "key": "A",
          "text": "The book"
        },
        {
          "key": "B",
          "text": "writing by"
        },
        {
          "key": "C",
          "text": "the famous professor"
        },
        {
          "key": "D",
          "text": "will be published next month"
        }
      ],
      "answer": "B",
      "correction": "written by",
      "explain": "书与写之间是被动关系,应用过去分词 **written by**;**writing** 错误。"
    }
  ],
  "6": [
    {
      "id": "e6-1",
      "sentence": "This is the city where I visited last summer during my vacation.",
      "segments": [
        {
          "key": "A",
          "text": "This is the city"
        },
        {
          "key": "B",
          "text": "where I visited"
        },
        {
          "key": "C",
          "text": "last summer"
        },
        {
          "key": "D",
          "text": "during my vacation"
        }
      ],
      "answer": "B",
      "correction": "that/which I visited",
      "explain": "定语从句中 visited 后已接宾语 the city,关系词在从句中作宾语,应用 **that/which**;**where**(作状语)错误。"
    },
    {
      "id": "e6-2",
      "sentence": "The reason why he was late is because he missed the early bus.",
      "segments": [
        {
          "key": "A",
          "text": "The reason why"
        },
        {
          "key": "B",
          "text": "he was late"
        },
        {
          "key": "C",
          "text": "is because"
        },
        {
          "key": "D",
          "text": "he missed the early bus"
        }
      ],
      "answer": "C",
      "correction": "is that",
      "explain": "The reason is 后的表语从句应用 **that** 引导;**because** 与 reason 语义重复,错误。"
    },
    {
      "id": "e6-3",
      "sentence": "I will never forget the day when I spent with my grandparents in the countryside.",
      "segments": [
        {
          "key": "A",
          "text": "I will never forget"
        },
        {
          "key": "B",
          "text": "the day when"
        },
        {
          "key": "C",
          "text": "I spent with my grandparents"
        },
        {
          "key": "D",
          "text": "in the countryside"
        }
      ],
      "answer": "B",
      "correction": "the day that/which",
      "explain": "从句中 spent 缺宾语,关系词须作宾语,应用 **that/which**;**when**(作时间状语)错误。"
    },
    {
      "id": "e6-4",
      "sentence": "What he said at the meeting were of great importance to all of us.",
      "segments": [
        {
          "key": "A",
          "text": "What he said"
        },
        {
          "key": "B",
          "text": "at the meeting"
        },
        {
          "key": "C",
          "text": "were"
        },
        {
          "key": "D",
          "text": "of great importance"
        }
      ],
      "answer": "C",
      "correction": "was",
      "explain": "主语从句 What he said 视为单数(那番话),谓语应用 **was**;**were** 主谓不一致。"
    }
  ],
  "7": [
    {
      "id": "e7-1",
      "sentence": "Having finished his homework, his mother allowed him to watch TV.",
      "segments": [
        {
          "key": "A",
          "text": "Having finished"
        },
        {
          "key": "B",
          "text": "his homework"
        },
        {
          "key": "C",
          "text": "his mother allowed"
        },
        {
          "key": "D",
          "text": "him to watch TV"
        }
      ],
      "answer": "C",
      "correction": "he was allowed",
      "explain": "分词完成式 Having finished 的逻辑主语须与主句一致,主句主语应为「他」而非 mother;应改为 **he was allowed (by his mother) to watch TV**;**his mother allowed** 造成悬垂分词错误。"
    },
    {
      "id": "e7-2",
      "sentence": "The teacher came into the classroom, following by a group of students.",
      "segments": [
        {
          "key": "A",
          "text": "The teacher came"
        },
        {
          "key": "B",
          "text": "into the classroom"
        },
        {
          "key": "C",
          "text": "following by"
        },
        {
          "key": "D",
          "text": "a group of students"
        }
      ],
      "answer": "C",
      "correction": "followed by",
      "explain": "老师是被跟随,应用过去分词 **followed by**;**following**(主动)错误。"
    },
    {
      "id": "e7-3",
      "sentence": "I remember to lock the door, but I forgot whether I had taken the keys.",
      "segments": [
        {
          "key": "A",
          "text": "I remember"
        },
        {
          "key": "B",
          "text": "to lock the door"
        },
        {
          "key": "C",
          "text": "but I forgot"
        },
        {
          "key": "D",
          "text": "whether I had taken the keys"
        }
      ],
      "answer": "B",
      "correction": "locking the door",
      "explain": "记得做过某事(已做)用 remember **doing**;remember to do 表示「记得去做」(未做);此处为已锁门应用 **locking**。"
    },
    {
      "id": "e7-4",
      "sentence": "Comparing with last year, the prices of houses have risen sharply.",
      "segments": [
        {
          "key": "A",
          "text": "Comparing with"
        },
        {
          "key": "B",
          "text": "last year"
        },
        {
          "key": "C",
          "text": "the prices of houses"
        },
        {
          "key": "D",
          "text": "have risen sharply"
        }
      ],
      "answer": "A",
      "correction": "Compared with",
      "explain": "prices 与 compare 间为被动关系,应用过去分词 **Compared with**;**Comparing** 错误。"
    }
  ],
  "8": [
    {
      "id": "e8-1",
      "sentence": "She speaks English as fluent as a native speaker.",
      "segments": [
        {
          "key": "A",
          "text": "She speaks"
        },
        {
          "key": "B",
          "text": "English"
        },
        {
          "key": "C",
          "text": "as fluent as"
        },
        {
          "key": "D",
          "text": "a native speaker"
        }
      ],
      "answer": "C",
      "correction": "as fluently as",
      "explain": "修饰动词 speaks 应用副词 **fluently**;**fluent**(形容词)错误。"
    },
    {
      "id": "e8-2",
      "sentence": "He is one of the most successfully businessmen in the city.",
      "segments": [
        {
          "key": "A",
          "text": "He is one of"
        },
        {
          "key": "B",
          "text": "the most successfully"
        },
        {
          "key": "C",
          "text": "businessmen"
        },
        {
          "key": "D",
          "text": "in the city"
        }
      ],
      "answer": "B",
      "correction": "the most successful",
      "explain": "修饰名词 businessmen 应用形容词 **successful**;**successfully**(副词)错误。"
    },
    {
      "id": "e8-3",
      "sentence": "The news are very surprising to everyone in the room.",
      "segments": [
        {
          "key": "A",
          "text": "The news"
        },
        {
          "key": "B",
          "text": "are"
        },
        {
          "key": "C",
          "text": "very surprising"
        },
        {
          "key": "D",
          "text": "to everyone in the room"
        }
      ],
      "answer": "B",
      "correction": "is",
      "explain": "news(消息)是不可数名词,谓语应用单数 **is**;**are** 主谓不一致。"
    },
    {
      "id": "e8-4",
      "sentence": "He drove careful through the busy street to avoid an accident.",
      "segments": [
        {
          "key": "A",
          "text": "He drove"
        },
        {
          "key": "B",
          "text": "careful"
        },
        {
          "key": "C",
          "text": "through the busy street"
        },
        {
          "key": "D",
          "text": "to avoid an accident"
        }
      ],
      "answer": "B",
      "correction": "carefully",
      "explain": "修饰动词 drove 应用副词 **carefully**;**careful**(形容词)错误。"
    }
  ],
  "9": [
    {
      "id": "e9-1",
      "sentence": "He is responsible of the safety of all the passengers on the plane.",
      "segments": [
        {
          "key": "A",
          "text": "He is responsible"
        },
        {
          "key": "B",
          "text": "of the safety"
        },
        {
          "key": "C",
          "text": "of all the passengers"
        },
        {
          "key": "D",
          "text": "on the plane"
        }
      ],
      "answer": "B",
      "correction": "for the safety",
      "explain": "be responsible for(对……负责)为固定搭配,应用 **for**;**responsible of** 错误。"
    },
    {
      "id": "e9-2",
      "sentence": "She succeeded in passing the exam in spite of she was ill.",
      "segments": [
        {
          "key": "A",
          "text": "She succeeded"
        },
        {
          "key": "B",
          "text": "in passing the exam"
        },
        {
          "key": "C",
          "text": "in spite of"
        },
        {
          "key": "D",
          "text": "she was ill"
        }
      ],
      "answer": "C",
      "correction": "although",
      "explain": "in spite of 后接名词/动名词,不能接句子;此处应用 **although**(或 in spite of the fact that);**in spite of she was ill** 错误。"
    },
    {
      "id": "e9-3",
      "sentence": "The meeting was put off because the bad weather.",
      "segments": [
        {
          "key": "A",
          "text": "The meeting"
        },
        {
          "key": "B",
          "text": "was put off"
        },
        {
          "key": "C",
          "text": "because"
        },
        {
          "key": "D",
          "text": "the bad weather"
        }
      ],
      "answer": "C",
      "correction": "because of",
      "explain": "because 后须接从句,接名词 the bad weather 应用 **because of**;**because** 错误。"
    },
    {
      "id": "e9-4",
      "sentence": "He is used to get up early and take a walk in the park.",
      "segments": [
        {
          "key": "A",
          "text": "He is used to"
        },
        {
          "key": "B",
          "text": "get up early"
        },
        {
          "key": "C",
          "text": "and take a walk"
        },
        {
          "key": "D",
          "text": "in the park"
        }
      ],
      "answer": "B",
      "correction": "getting up early",
      "explain": "be used to(习惯于)中 to 为介词,后接动名词 **getting up**;**get up** 错误。"
    }
  ],
  "10": [
    {
      "id": "e10-1",
      "sentence": "Each student must carry their own identification card during the examination.",
      "segments": [
        {
          "key": "A",
          "text": "Each student"
        },
        {
          "key": "B",
          "text": "must carry"
        },
        {
          "key": "C",
          "text": "their"
        },
        {
          "key": "D",
          "text": "own identification card"
        }
      ],
      "answer": "C",
      "correction": "his or her",
      "explain": "Each student 为单数,其后的代词须用单数 **his or her**;**their** 代词不一致。"
    },
    {
      "id": "e10-2",
      "sentence": "Nobody but Tom and me were invited to the party last night.",
      "segments": [
        {
          "key": "A",
          "text": "Nobody but Tom and me"
        },
        {
          "key": "B",
          "text": "were invited"
        },
        {
          "key": "C",
          "text": "to the party"
        },
        {
          "key": "D",
          "text": "last night"
        }
      ],
      "answer": "B",
      "correction": "was invited",
      "explain": "主语核心是 Nobody(单数),but Tom and me 是介词短语不影响主语数,谓语用 **was invited**;**were** 错误。"
    },
    {
      "id": "e10-3",
      "sentence": "If you have any questions, please raise your hand and I will answer it.",
      "segments": [
        {
          "key": "A",
          "text": "If you have any questions"
        },
        {
          "key": "B",
          "text": "please raise your hand"
        },
        {
          "key": "C",
          "text": "and I will"
        },
        {
          "key": "D",
          "text": "answer it"
        }
      ],
      "answer": "D",
      "correction": "answer them",
      "explain": "前文 questions 为复数,代词应用 **them**;**it** 指代不一致。"
    },
    {
      "id": "e10-4",
      "sentence": "Between you and I, the plan is unlikely to succeed.",
      "segments": [
        {
          "key": "A",
          "text": "Between you and I"
        },
        {
          "key": "B",
          "text": "the plan"
        },
        {
          "key": "C",
          "text": "is unlikely"
        },
        {
          "key": "D",
          "text": "to succeed"
        }
      ],
      "answer": "A",
      "correction": "Between you and me",
      "explain": "between 是介词,其后代词须用宾格 **me**;**I**(主格)错误。"
    }
  ],
  "11": [
    {
      "id": "e11-1",
      "sentence": "Not only the students but also the teacher are going to attend the lecture tomorrow.",
      "segments": [
        {
          "key": "A",
          "text": "Not only the students"
        },
        {
          "key": "B",
          "text": "but also the teacher"
        },
        {
          "key": "C",
          "text": "are going"
        },
        {
          "key": "D",
          "text": "to attend the lecture"
        }
      ],
      "answer": "C",
      "correction": "is going",
      "explain": "not only...but also... 就近一致,靠近谓语的 the teacher 为单数,应用 **is going**;**are going** 错误。"
    },
    {
      "id": "e11-2",
      "sentence": "By the end of last year, they have completed the construction of the bridge.",
      "segments": [
        {
          "key": "A",
          "text": "By the end of last year"
        },
        {
          "key": "B",
          "text": "they have completed"
        },
        {
          "key": "C",
          "text": "the construction"
        },
        {
          "key": "D",
          "text": "of the bridge"
        }
      ],
      "answer": "B",
      "correction": "they had completed",
      "explain": "By the end of last year(过去时间点)所在句子应用过去完成时 **had completed**;**have completed** 时态错误。"
    },
    {
      "id": "e11-3",
      "sentence": "A library with a large number of books are located in the center of the city.",
      "segments": [
        {
          "key": "A",
          "text": "A library"
        },
        {
          "key": "B",
          "text": "with a large number of books"
        },
        {
          "key": "C",
          "text": "are located"
        },
        {
          "key": "D",
          "text": "in the center of the city"
        }
      ],
      "answer": "C",
      "correction": "is located",
      "explain": "主语核心 A library(单数),with 短语不影响主语数,谓语用 **is located**;**are** 错误。"
    },
    {
      "id": "e11-4",
      "sentence": "It is the third time that he forgot to bring his textbook to class.",
      "segments": [
        {
          "key": "A",
          "text": "It is the third time"
        },
        {
          "key": "B",
          "text": "that he forgot"
        },
        {
          "key": "C",
          "text": "to bring his textbook"
        },
        {
          "key": "D",
          "text": "to class"
        }
      ],
      "answer": "B",
      "correction": "that he has forgotten",
      "explain": "It is the first/second time that... 从句须用现在完成时 **has forgotten**;**forgot** 时态错误。"
    }
  ],
  "12": [
    {
      "id": "e12-1",
      "sentence": "He goes to school by the bus every morning.",
      "segments": [
        {
          "key": "A",
          "text": "He goes"
        },
        {
          "key": "B",
          "text": "to school"
        },
        {
          "key": "C",
          "text": "by the bus"
        },
        {
          "key": "D",
          "text": "every morning"
        }
      ],
      "answer": "C",
      "correction": "by bus",
      "explain": "by + 交通工具表方式,中间不加冠词,应为 **by bus**;**by the bus** 错误。"
    },
    {
      "id": "e12-2",
      "sentence": "She was absent of the meeting because she had a bad cold.",
      "segments": [
        {
          "key": "A",
          "text": "She was absent"
        },
        {
          "key": "B",
          "text": "of the meeting"
        },
        {
          "key": "C",
          "text": "because she had"
        },
        {
          "key": "D",
          "text": "a bad cold"
        }
      ],
      "answer": "B",
      "correction": "from the meeting",
      "explain": "be absent from(缺席)为固定搭配,应用 **from**;**absent of** 介词错误。"
    },
    {
      "id": "e12-3",
      "sentence": "The scientist devoted all his life to study the behavior of animals.",
      "segments": [
        {
          "key": "A",
          "text": "The scientist devoted"
        },
        {
          "key": "B",
          "text": "all his life"
        },
        {
          "key": "C",
          "text": "to study"
        },
        {
          "key": "D",
          "text": "the behavior of animals"
        }
      ],
      "answer": "C",
      "correction": "to studying",
      "explain": "devote...to... 中 to 为介词,后接动名词 **studying**;**to study** 错误。"
    },
    {
      "id": "e12-4",
      "sentence": "He was elected a monitor of the class for his excellent leadership.",
      "segments": [
        {
          "key": "A",
          "text": "He was elected"
        },
        {
          "key": "B",
          "text": "a monitor"
        },
        {
          "key": "C",
          "text": "of the class"
        },
        {
          "key": "D",
          "text": "for his excellent leadership"
        }
      ],
      "answer": "B",
      "correction": "monitor",
      "explain": "表职位、头衔的唯一性名词作表语/宾补时省略冠词,应为 **monitor**;**a monitor** 多余。"
    }
  ],
  "13": [
    {
      "id": "e13-1",
      "sentence": "I found it difficult to understanding the article written in technical language.",
      "segments": [
        {
          "key": "A",
          "text": "I found it difficult"
        },
        {
          "key": "B",
          "text": "to understanding"
        },
        {
          "key": "C",
          "text": "the article"
        },
        {
          "key": "D",
          "text": "written in technical language"
        }
      ],
      "answer": "B",
      "correction": "to understand",
      "explain": "it 作形式宾语,真正宾语为不定式 **to understand**;**to understanding** 错误。"
    },
    {
      "id": "e13-2",
      "sentence": "The teacher had the students to rewrite their essays after class.",
      "segments": [
        {
          "key": "A",
          "text": "The teacher had"
        },
        {
          "key": "B",
          "text": "the students"
        },
        {
          "key": "C",
          "text": "to rewrite"
        },
        {
          "key": "D",
          "text": "their essays after class"
        }
      ],
      "answer": "C",
      "correction": "rewrite",
      "explain": "have sb do sth(让某人做某事)用不带 to 的不定式,应为 **rewrite**;**to rewrite** 多余。"
    },
    {
      "id": "e13-3",
      "sentence": "Seeing from the top of the hill, the whole city looks more beautiful.",
      "segments": [
        {
          "key": "A",
          "text": "Seeing from"
        },
        {
          "key": "B",
          "text": "the top of the hill"
        },
        {
          "key": "C",
          "text": "the whole city"
        },
        {
          "key": "D",
          "text": "looks more beautiful"
        }
      ],
      "answer": "A",
      "correction": "Seen from",
      "explain": "city 与 see 为被动关系,应用过去分词 **Seen from**;**Seeing** 错误。"
    },
    {
      "id": "e13-4",
      "sentence": "Would you mind to open the window so that we can get some fresh air?",
      "segments": [
        {
          "key": "A",
          "text": "Would you mind"
        },
        {
          "key": "B",
          "text": "to open the window"
        },
        {
          "key": "C",
          "text": "so that we can get"
        },
        {
          "key": "D",
          "text": "some fresh air"
        }
      ],
      "answer": "B",
      "correction": "opening the window",
      "explain": "mind 后接动名词,应为 **opening the window**;**to open** 错误。"
    }
  ],
  "14": [
    {
      "id": "e14-1",
      "sentence": "The old man has two sons, both of them are doctors working in the same hospital.",
      "segments": [
        {
          "key": "A",
          "text": "The old man has two sons"
        },
        {
          "key": "B",
          "text": "both of them"
        },
        {
          "key": "C",
          "text": "are doctors"
        },
        {
          "key": "D",
          "text": "working in the same hospital"
        }
      ],
      "answer": "B",
      "correction": "both of whom",
      "explain": "两分句间无连词,须用关系代词 **both of whom** 引导非限制性定语从句;**both of them** 造成「逗号连接两个完整句」错误。"
    },
    {
      "id": "e14-2",
      "sentence": "He insisted on paying for the meal, that was very kind of him.",
      "segments": [
        {
          "key": "A",
          "text": "He insisted on"
        },
        {
          "key": "B",
          "text": "paying for the meal"
        },
        {
          "key": "C",
          "text": "that was very kind"
        },
        {
          "key": "D",
          "text": "of him"
        }
      ],
      "answer": "C",
      "correction": "which was very kind",
      "explain": "非限制性定语从句(指代整个主句)须用 **which** 引导;**that** 不能引导非限制性定语从句。"
    },
    {
      "id": "e14-3",
      "sentence": "No matter how hard he tried, but he could not solve the math problem.",
      "segments": [
        {
          "key": "A",
          "text": "No matter how hard"
        },
        {
          "key": "B",
          "text": "he tried"
        },
        {
          "key": "C",
          "text": "but he could not solve"
        },
        {
          "key": "D",
          "text": "the math problem"
        }
      ],
      "answer": "C",
      "correction": "he could not solve",
      "explain": "No matter how 已引导让步状语从句,主句前不能再加 **but**(中文「虽然…但是」直译错误);应去掉 but。"
    },
    {
      "id": "e14-4",
      "sentence": "She was angry with him because of he was late again for the meeting.",
      "segments": [
        {
          "key": "A",
          "text": "She was angry"
        },
        {
          "key": "B",
          "text": "with him"
        },
        {
          "key": "C",
          "text": "because of"
        },
        {
          "key": "D",
          "text": "he was late again for the meeting"
        }
      ],
      "answer": "C",
      "correction": "because",
      "explain": "because of 后接名词,后接从句应用 **because**;**because of he was late** 错误。"
    }
  ],
  "15": [
    {
      "id": "e15-1",
      "sentence": "The professor, together with his assistants, are going to give a lecture on AI.",
      "segments": [
        {
          "key": "A",
          "text": "The professor"
        },
        {
          "key": "B",
          "text": "together with his assistants"
        },
        {
          "key": "C",
          "text": "are going"
        },
        {
          "key": "D",
          "text": "to give a lecture on AI"
        }
      ],
      "answer": "C",
      "correction": "is going",
      "explain": "主语核心 The professor(单数),together with 短语不影响主语数,谓语用 **is going**;**are** 错误。"
    },
    {
      "id": "e15-2",
      "sentence": "If it will rain tomorrow, we will have to put off the sports meeting.",
      "segments": [
        {
          "key": "A",
          "text": "If it"
        },
        {
          "key": "B",
          "text": "will rain"
        },
        {
          "key": "C",
          "text": "tomorrow"
        },
        {
          "key": "D",
          "text": "we will have to put off"
        }
      ],
      "answer": "B",
      "correction": "rains",
      "explain": "if 引导的条件状语从句,主将从现——从句用一般现在时表将来,应用 **rains**;**will rain** 错误。"
    },
    {
      "id": "e15-3",
      "sentence": "He suggested that everyone in the group takes turns to clean the room.",
      "segments": [
        {
          "key": "A",
          "text": "He suggested"
        },
        {
          "key": "B",
          "text": "that everyone in the group"
        },
        {
          "key": "C",
          "text": "takes turns"
        },
        {
          "key": "D",
          "text": "to clean the room"
        }
      ],
      "answer": "C",
      "correction": "(should) take turns",
      "explain": "suggest 后的宾语从句用虚拟语气 (should) + 动词原形,应用 **(should) take turns**;**takes** 错误。"
    },
    {
      "id": "e15-4",
      "sentence": "Hardly had I sat down than the phone rang loudly in the quiet office.",
      "segments": [
        {
          "key": "A",
          "text": "Hardly had I sat down"
        },
        {
          "key": "B",
          "text": "than"
        },
        {
          "key": "C",
          "text": "the phone rang"
        },
        {
          "key": "D",
          "text": "loudly in the quiet office"
        }
      ],
      "answer": "B",
      "correction": "when",
      "explain": "Hardly...when... 为固定句型(一……就……),应用 **when**;**than** 错误(no sooner...than 才用 than)。"
    }
  ]
}
