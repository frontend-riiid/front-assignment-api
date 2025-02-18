export interface Assignment {
  id: number;
  subtitle: string;
  startDatetime: string;
  content: Unscramble[];
}

interface Unscramble {
  tts: string;
  words: string[];
  answerKr: string;
  distractors: string[];
}

export const assignments: Assignment[] = [
  {
    id: 849,
    subtitle: "엄청 느리다! 와이파이 이야기하기",
    startDatetime: "2023-03-07T19:00:00+09:00",
    content: [
      {
        tts: "https://public.realclass.co.kr/reallive/resources/1043/assignment/audio_0_Is_whyf_i_working__I_can_t_get_a_signal_-12e886.wav",
        words: ["is", "wi-fi", "working", "I", "can't", "get", "a", "signal"],
        answerKr: "와이파이 돼? 난 연결이 안 되는데.",
        distractors: ["sign", "connecting", "done"],
      },
      {
        tts: "https://public.realclass.co.kr/reallive/resources/1043/assignment/audio_1_Let_s_watch_a_movie_on_your_laptop_-dcca57.wav",
        words: ["let's", "watch", "a", "movie", "on", "your", "laptop"],
        answerKr: "네 노트북으로 영화 보자.",
        distractors: ["see", "theatre", "notebook"],
      },
      {
        tts: "https://public.realclass.co.kr/reallive/resources/1043/assignment/audio_2_Really__Let_me_help_you_-c1de3f.wav",
        words: ["really?", "let", "me", "help", "you"],
        answerKr: "정말? 내가 도와줄게.",
        distractors: ["oops?", "left", "my"],
      },
      {
        tts: "https://public.realclass.co.kr/reallive/resources/1043/assignment/audio_3_The_whyf_i_password_is_on_the_receipt_-296536.wav",
        words: ["the", "wi-fi", "password", "is", "on", "the", "receipt"],
        answerKr: "와이파이 비밀번호는 영수증에 쓰여 있어.",
        distractors: ["in", "receive", "this", "a"],
      },
      {
        tts: "https://public.realclass.co.kr/reallive/resources/1043/assignment/audio_0_The_whyf_i_there_is_not_great_but_okay_-469ab5.wav",
        words: ["the", "wi-fi", "there", "is", "not", "great", "but", "okay"],
        answerKr: "거기 와이파이가 훌륭하진 않지만 괜찮아.",
        distractors: ["grape", "no", "fare", "never", "Those"],
      },
      {
        tts: "https://public.realclass.co.kr/reallive/resources/1043/assignment/audio_4_You_don_t_need_a_password_for_the_whyf_i_-fde502.wav",
        words: ["you", "don't", "need", "a", "password", "for", "the", "wi-fi"],
        answerKr: "여기 와이파이는 비밀번호 없어.",
        distractors: ["of", "here", "needed", "pass", "free"],
      },
      {
        tts: "https://public.realclass.co.kr/reallive/resources/1043/assignment/audio_5_Do_they_have_free_whyf_i_here_-2b2274.wav",
        words: ["do", "they", "have", "free", "wi-fi", "here"],
        answerKr: "여기 무료 와이파이 있어?",
        distractors: ["is", "there", "public", "in"],
      },
    ],
  },
  {
    id: 850,
    subtitle: "거기 세일한대! 온라인 쇼핑 이야기하기",
    startDatetime: "2023-03-09T19:00:00+09:00",
    content: [
      {
        tts: "https://public.realclass.co.kr/reallive/resources/1043/assignment/audio_0_Where_do_you_go_shopping_-2d285d.wav",
        words: ["where", "do", "you", "go", "shopping"],
        answerKr: "너 쇼핑하러 어디가?",
        distractors: ["Where's", "go to", "for", "shop"],
      },
      {
        tts: "https://public.realclass.co.kr/reallive/resources/1043/assignment/audio_1_I_always_compare_prices_before_buying_something_-7a4848.wav",
        words: [
          "I",
          "always",
          "compare",
          "prices",
          "before",
          "buying",
          "something",
        ],
        answerKr: "난 항상 구매 전에 가격을 비교해.",
        distractors: ["relatively", "values", "for", "things", "I'll"],
      },
      {
        tts: "https://public.realclass.co.kr/reallive/resources/1043/assignment/audio_2_I_try_not_to_buy_something_impulsively_-5c011b.wav",
        words: ["I", "try", "not", "to", "buy", "something", "impulsively"],
        answerKr: "충동구매를 안 하려고 노력해.",
        distractors: ["shockingly", "things", "pay for", "always", "keep back"],
      },
      {
        tts: "https://public.realclass.co.kr/reallive/resources/1043/assignment/audio_3_Realmall_is_my_go_to_place_for_shopping_-188c2c.wav",
        words: ["Realmall", "is", "my", "go-to", "place", "for", "shopping"],
        answerKr: "쇼핑할 때 리얼몰에 자주 가.",
        distractors: ["favorite", "to", "going", "often", "of"],
      },
      {
        tts: "https://public.realclass.co.kr/reallive/resources/1043/assignment/audio_4_Their_annual_clearance_sale_starts_next_month_-463753.wav",
        words: [
          "their",
          "annual",
          "clearance",
          "sale",
          "starts",
          "next",
          "month",
        ],
        answerKr: "1년에 한 번 하는 재고 정리 세일이 다음 달에 시작한대.",
        distractors: ["year", "one", "stock"],
      },
    ],
  },
  {
    id: 864,
    subtitle: "뭐 시킬까? 배달 음식 이야기하기",
    startDatetime: "2023-03-14T19:00:00+09:00",
    content: [
      {
        tts: "https://public.realclass.co.kr/reallive/resources/1043/assignment/audio_0_Chinese_food_always_hits_the_spot_-7d4c83.wav",
        words: ["chinese", "food", "always", "hits", "the", "spot"],
        answerKr: "중국 음식은 언제나 딱 좋지.",
        distractors: ["ways", "best", "for", "eating"],
      },
      {
        tts: "https://public.realclass.co.kr/reallive/resources/1043/assignment/audio_1_I_ll_order_beef_tacos_with_extra_cilantro_-192f91.wav",
        words: ["I'll", "order", "beef", "tacos", "with", "extra", "cilantro"],
        answerKr: "난 소고기 타코에 고수 추가할게.",
        distractors: ["pork", "add", "extreme", "chilli", "I'd"],
      },
      {
        tts: "https://public.realclass.co.kr/reallive/resources/1043/assignment/audio_2_They_say_the_service_is_terrible_-ef5c24.wav",
        words: ["they", "say", "the", "service", "is", "terrible"],
        answerKr: "사람들이 여기 서비스가 별로래.",
        distractors: ["here", "was", "said", "traffic"],
      },
      {
        tts: "https://public.realclass.co.kr/reallive/resources/1043/assignment/audio_3_Do_you_want_to_order_one_dish_and_share_it_-296071.wav",
        words: [
          "do",
          "you",
          "want",
          "to",
          "order",
          "one",
          "dish",
          "and",
          "share",
          "it",
        ],
        answerKr: "하나 시켜서 나눠 먹을래?",
        distractors: ["dishes", "in", "take", "did"],
      },
      {
        tts: "https://public.realclass.co.kr/reallive/resources/1043/assignment/audio_6_Which_one_has_the_highest_stars_-eb646a.wav",
        words: ["which", "one", "has", "the", "highest", "stars"],
        answerKr: "어디가 별점 높아?",
        distractors: ["have", "point", "high", "where"],
      },
    ],
  },
  {
    id: 865,
    subtitle: "이직하고 싶다! 직업 이야기하기",
    startDatetime: "2023-03-16T19:00:00+09:00",
    content: [
      {
        tts: "https://public.realclass.co.kr/reallive/resources/1043/assignment/audio_7_I_m_in_charge_of_marketing_strategy_-2c9147.wav",
        words: ["I'm", "in", "charge", "of", "marketing", "strategy"],
        answerKr: "난 마케팅 전략 수립을 담당하고 있어.",
        distractors: ["tactics", "market", "working", "about"],
      },
      {
        tts: "https://public.realclass.co.kr/reallive/resources/1043/assignment/audio_8_I_m_thinking_of_moving_to_another_company_-e05a2c.wav",
        words: ["I'm", "thinking", "of", "moving", "to", "another", "company"],
        answerKr: "이직할까 생각중이야.",
        distractors: ["accompany", "some", "move in"],
      },
      {
        tts: "https://public.realclass.co.kr/reallive/resources/1043/assignment/audio_9_I_get_along_with_my_boss_pretty_well_-e91ebb.wav",
        words: ["I", "get", "along", "with", "my", "boss", "pretty", "well"],
        answerKr: "상사와 꽤 잘 맞아.",
        distractors: ["alone", "bots", "head", "good"],
      },
      {
        tts: "https://public.realclass.co.kr/reallive/resources/1043/assignment/audio_10_My_job_involves_making_clients_feel_welcome_-44a7ca.wav",
        words: [
          "my",
          "job",
          "involves",
          "making",
          "clients",
          "feel",
          "welcome",
        ],
        answerKr: "내 일은 고객이 환대받는다고 느끼도록 하는 거야.",
        distractors: ["to make", "people", "feeling", "income", "is"],
      },
      {
        tts: "https://public.realclass.co.kr/reallive/resources/1043/assignment/audio_11_The_work_is_hard__but_the_pay_is_good_-964c7d.wav",
        words: ["the", "work", "is", "hard", "but", "the", "pay", "is", "good"],
        answerKr: "일은 힘든데 보수는 좋아.",
        distractors: ["there", "exhausting", "year", "salary", "well"],
      },
    ],
  },
];
