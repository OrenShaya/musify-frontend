import ddtUrl from '../src/assets/img/station-ddt.jpeg'
import corpoMenteUrl from '../src/assets/img/station-corpo-mente.jpeg'
import rubyMyDearUrl from '../src/assets/img/station-ruby-my-dear.jpeg'

export const stationsDemoData = [
  {
    _id: "maybe-1",
    name: "ДДТ",
    tags: [
      "rock",
      "80s",
      "live"
    ],
    createdBy: {
      _id: "maybe-u101",
      fullname: "Artist",
      imgUrl: "/src/assets/img/station-ddt.jpeg",
      createdAt: 1739398908555,
      updatedAt: 1739399900000
    },
    likedByUsers: [
      {
        _id: "3S4c4",
        fullname: "admin",
        imgUrl: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
      },
      {
        _id: "3T5yg",
        fullname: "kiki",
        imgUrl: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
      }
    ],
    songs: [
      {
        _id: "k3PgFdv",
        title: "Что такое осень",
        url: "https://youtu.be/5KC-iscJtsI",
        imgUrl: "https://i.ytimg.com/vi/_bvx_1B5P38/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA4WUzmvcL-z7WcNKAgigFSQwuWcw",
        lengthInSeconds: 462,
        addedBy: {
          _id: "u101",
          fullname: "Puki Ben David"
        },
        likedBy: [],
        createdAt: 1739398908555,
        updatedAt: 1739398908555
      },
      {
        _id: "hmyRh2G",
        title: "more or less It it",
        url: "https://youtu.be/lYBUbBu4W08",
        imgUrl: "https://cdn.pixabay.com/photo/2013/07/13/12/41/music-160112_1280.png",
        lengthInSeconds: 699,
        addedBy: {
          _id: "u101",
          fullname: "Puki Ben David"
        },
        likedBy: [],
        createdAt: 1739357362203,
        updatedAt: 1739357362203
      }
    ],
    msgs: [
      {
        _id: "msg1",
        from: {
          _id: "7N2Ai",
          fullname: "baba"
        },
        txt: "Welcome to My Rock Station",
        createdAt: 1739400100000
      }
    ]
  },
  {
    _id: "st12345",
    name: "Corpo-Mente",
    tags: [
      "rock",
      "80s",
      "live"
    ],
    createdBy: {
      _id: "u101",
      fullname: "Puki Ben David",
      imgUrl: "/src/assets/img/station-corpo-mente.jpeg",
      createdAt: 1739398908555,
      updatedAt: 1739399900000
    },
    likedByUsers: [
      {
        _id: "3S4c4",
        fullname: "admin",
        imgUrl: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
      },
      {
        _id: "3T5yg",
        fullname: "kiki",
        imgUrl: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
      }
    ],
    songs: [
      {
        _id: "k3PgFdv",
        title: "bit by bit was All",
        url: "https://youtu.be/lYBUbBu4W08",
        imgUrl: "https://cdn.pixabay.com/photo/2013/07/13/12/41/music-160112_1280.png",
        lengthInSeconds: 462,
        addedBy: {
          _id: "u101",
          fullname: "Puki Ben David"
        },
        likedBy: [],
        createdAt: 1739398908555,
        updatedAt: 1739398908555,
        addedAt: 1739398909555
      },
      {
        _id: "hmyRh2G",
        title: "more or less It it",
        url: "https://youtu.be/lYBUbBu4W08",
        imgUrl: "https://cdn.pixabay.com/photo/2013/07/13/12/41/music-160112_1280.png",
        lengthInSeconds: 699,
        addedBy: {
          _id: "u101",
          fullname: "Puki Ben David"
        },
        likedBy: [],
        createdAt: 1739357362203,
        updatedAt: 1739357362203,
        addedAt: 1739357372203
      }
    ],
    msgs: [
      {
        _id: "msg1",
        from: {
          _id: "7N2Ai",
          fullname: "baba"
        },
        txt: "Welcome to My Rock Station",
        createdAt: 1739400100000
      }
    ]
  },
  {
    _id: "st23456",
    name: "Brame",
    artists: [
      "Ruby My Dear"
    ],
    tags: [
      "classical",
      "orchestra",
      "instrumental"
    ],
    createdBy: {
      _id: "u102",
      fullname: "Alice Maestro",
      imgUrl: "/src/assets/img/station-ruby-my-dear.jpeg",
      createdAt: 1739400000000,
      updatedAt: 1739403600000,
      addedAt: 1739357732203
    },
    likedByUsers: [
      {
        _id: "3S4c4",
        fullname: "admin",
        imgUrl: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
      }
    ],
    songs: [
      {
        _id: "song1",
        title: "Moonlight Sonata",
        url: "https://youtu.be/4Tr0otuiQuU",
        imgUrl: "https://cdn.pixabay.com/photo/2014/04/03/10/32/music-312233_1280.png",
        lengthInSeconds: 540,
        addedBy: {
          _id: "u102",
          fullname: "Alice Maestro"
        },
        likedBy: [],
        createdAt: 1739400000000,
        updatedAt: 1739400000000,
        addedAt: 1739400005000
      },
      {
        _id: "song2",
        title: "Four Seasons - Spring",
        url: "https://youtu.be/f6b8hBdw78Q",
        imgUrl: "https://cdn.pixabay.com/photo/2016/11/14/03/16/classical-1822032_1280.jpg",
        lengthInSeconds: 600,
        addedBy: {
          _id: "u102",
          fullname: "Alice Maestro"
        },
        likedBy: [],
        createdAt: 1739400100000,
        updatedAt: 1739400100000,
        addedAt: 1739400120000
      }
    ],
    msgs: [
      {
        _id: "msg1",
        from: {
          _id: "7N2Ai",
          fullname: "baba"
        },
        txt: "Welcome to The Classical Station",
        createdAt: 1739403600000
      }
    ]
  },
  {
    _id: "st34567",
    name: "Hip Hop Beats",
    tags: [
      "hip hop",
      "rap",
      "urban"
    ],
    createdBy: {
      _id: "u103",
      fullname: "Bob Rhymes",
      imgUrl: "",
      createdAt: 1739410000000,
      updatedAt: 1739413600000
    },
    likedByUsers: [
      {
        _id: "3T5yg",
        fullname: "kiki",
        imgUrl: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
      }
    ],
    songs: [
      {
        _id: "song3",
        title: "Flowing Rhythms",
        url: "https://youtu.be/3Q3E-6HXzHQ",
        imgUrl: "https://cdn.pixabay.com/photo/2014/04/03/10/32/hiphop-312234_1280.png",
        lengthInSeconds: 320,
        addedBy: {
          _id: "u103",
          fullname: "Bob Rhymes"
        },
        likedBy: [],
        createdAt: 1739410000000,
        updatedAt: 1739410000000,
        addedAt: 1739410000000
      },
      {
        _id: "song4",
        title: "Street Stories",
        url: "https://youtu.be/dFzC-YF93LQ",
        imgUrl: "https://cdn.pixabay.com/photo/2016/09/01/22/46/urban-1631819_1280.jpg",
        lengthInSeconds: 275,
        addedBy: {
          _id: "u103",
          fullname: "Bob Rhymes"
        },
        likedBy: [],
        createdAt: 1739410100000,
        updatedAt: 1739410100000,
        addedAt: 1739410105000
      }
    ],
    msgs: [
      {
        _id: "msg2",
        from: {
          _id: "7N2Ai",
          fullname: "baba"
        },
        txt: "Turn up the volume!",
        createdAt: 1739413600000
      }
    ]
  },
  {
    _id: "st45678",
    name: "Electronic Vibes",
    tags: [
      "electronic",
      "EDM",
      "dance"
    ],
    createdBy: {
      _id: "u104",
      fullname: "Cara Synth",
      imgUrl: "",
      createdAt: 1739420000000,
      updatedAt: 1739423600000
    },
    likedByUsers: [
      {
        _id: "7N2Ai",
        fullname: "baba",
        imgUrl: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
      },
      {
        _id: "Oeiwy",
        fullname: "shuki",
        imgUrl: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
      }
    ],
    songs: [
      {
        _id: "song5",
        title: "Electric Dreams",
        url: "https://youtu.be/electronic1",
        imgUrl: "https://cdn.pixabay.com/photo/2017/01/31/17/45/electronic-2022105_1280.jpg",
        lengthInSeconds: 420,
        addedBy: {
          _id: "u104",
          fullname: "Cara Synth"
        },
        likedBy: [],
        createdAt: 1739420000000,
        updatedAt: 1739420000000,
        addedAt: 1739420007000
      },
      {
        _id: "song6",
        title: "Neon Nights",
        url: "https://youtu.be/electronic2",
        imgUrl: "https://cdn.pixabay.com/photo/2018/08/14/13/23/neon-3606436_1280.jpg",
        lengthInSeconds: 390,
        addedBy: {
          _id: "u104",
          fullname: "Cara Synth"
        },
        likedBy: [],
        createdAt: 1739420100000,
        updatedAt: 1739420100000,
        addedAt: 1739420007000
      }
    ],
    msgs: [
      {
        _id: "msg3",
        from: {
          _id: "7N2Ai",
          fullname: "baba"
        },
        txt: "Get ready to dance!",
        createdAt: 1739423600000
      }
    ]
  },
  {
    songs: [
      {
        title: "P.L.U.C.K.",
        url: "https://www.youtube.com/embed/VxVzT0znI8Q",
        imgUrl: "https://i.ytimg.com/vi/VxVzT0znI8Q/hqdefault.jpg",
        addedBy: {
          _id: "UC7-YMmnc0ppcWmio8t1WdcA",
          fullname: "System Of A Down",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m6xYq7ErRAA9YY3XG3NLAOZJRfV67Edf-dV9qZD2T-Ak4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 237,
        likedBy: [],
        createdAt: 1613765872000,
        updatedAt: 1739574807264,
        _id: "VxVzT0znI8Q"
      },
      {
        title: "Attack",
        url: "https://www.youtube.com/embed/tf1xUGRGLtM",
        imgUrl: "https://i.ytimg.com/vi/tf1xUGRGLtM/hqdefault.jpg",
        addedBy: {
          _id: "UC7-YMmnc0ppcWmio8t1WdcA",
          fullname: "System Of A Down",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m6xYq7ErRAA9YY3XG3NLAOZJRfV67Edf-dV9qZD2T-Ak4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 302,
        likedBy: [],
        createdAt: 1613765894000,
        updatedAt: 1739530005289,
        _id: "tf1xUGRGLtM"
      },
      {
        title: "Revenga",
        url: "https://www.youtube.com/embed/qOl7m52TQk8",
        imgUrl: "https://i.ytimg.com/vi/qOl7m52TQk8/hqdefault.jpg",
        addedBy: {
          _id: "UC7-YMmnc0ppcWmio8t1WdcA",
          fullname: "System Of A Down",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m6xYq7ErRAA9YY3XG3NLAOZJRfV67Edf-dV9qZD2T-Ak4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 311,
        likedBy: [],
        createdAt: 1613765913000,
        updatedAt: 1739539308189,
        _id: "qOl7m52TQk8"
      },
      {
        title: "Needles",
        url: "https://www.youtube.com/embed/Y45oADjAAuQ",
        imgUrl: "https://i.ytimg.com/vi/Y45oADjAAuQ/hqdefault.jpg",
        addedBy: {
          _id: "UC7-YMmnc0ppcWmio8t1WdcA",
          fullname: "System Of A Down",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m6xYq7ErRAA9YY3XG3NLAOZJRfV67Edf-dV9qZD2T-Ak4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 331,
        likedBy: [],
        createdAt: 1613765928000,
        updatedAt: 1739498909529,
        _id: "Y45oADjAAuQ"
      },
      {
        title: "Dreaming",
        url: "https://www.youtube.com/embed/wVO7zmHfedw",
        imgUrl: "https://i.ytimg.com/vi/wVO7zmHfedw/hqdefault.jpg",
        addedBy: {
          _id: "UC7-YMmnc0ppcWmio8t1WdcA",
          fullname: "System Of A Down",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m6xYq7ErRAA9YY3XG3NLAOZJRfV67Edf-dV9qZD2T-Ak4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 279,
        likedBy: [],
        createdAt: 1613765966000,
        updatedAt: 1739532422117,
        _id: "wVO7zmHfedw"
      },
      {
        title: "Suite-Pee (Live at Irving Plaza, NYC, NY - January 1999)",
        url: "https://www.youtube.com/embed/flp1u0yowC0",
        imgUrl: "https://i.ytimg.com/vi/flp1u0yowC0/hqdefault.jpg",
        addedBy: {
          _id: "UC7-YMmnc0ppcWmio8t1WdcA",
          fullname: "System Of A Down",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m6xYq7ErRAA9YY3XG3NLAOZJRfV67Edf-dV9qZD2T-Ak4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 137,
        likedBy: [],
        createdAt: 1613766106000,
        updatedAt: 1739572316778,
        _id: "flp1u0yowC0"
      },
      {
        title: "Know (Live at Irving Plaza, NYC, NY - January 1999)",
        url: "https://www.youtube.com/embed/I0Jw1d9FiRs",
        imgUrl: "https://i.ytimg.com/vi/I0Jw1d9FiRs/hqdefault.jpg",
        addedBy: {
          _id: "UC7-YMmnc0ppcWmio8t1WdcA",
          fullname: "System Of A Down",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m6xYq7ErRAA9YY3XG3NLAOZJRfV67Edf-dV9qZD2T-Ak4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 343,
        likedBy: [],
        createdAt: 1613766125000,
        updatedAt: 1739554615862,
        _id: "I0Jw1d9FiRs"
      },
      {
        title: "X",
        url: "https://www.youtube.com/embed/KPyiBfICNJM",
        imgUrl: "https://i.ytimg.com/vi/KPyiBfICNJM/hqdefault.jpg",
        addedBy: {
          _id: "UC7-YMmnc0ppcWmio8t1WdcA",
          fullname: "System Of A Down",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m6xYq7ErRAA9YY3XG3NLAOZJRfV67Edf-dV9qZD2T-Ak4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 343,
        likedBy: [],
        createdAt: 1613766144000,
        updatedAt: 1739495575885,
        _id: "KPyiBfICNJM"
      },
      {
        title: "U-Fig",
        url: "https://www.youtube.com/embed/S6j21wkpiDE",
        imgUrl: "https://i.ytimg.com/vi/S6j21wkpiDE/hqdefault.jpg",
        addedBy: {
          _id: "UC7-YMmnc0ppcWmio8t1WdcA",
          fullname: "System Of A Down",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m6xYq7ErRAA9YY3XG3NLAOZJRfV67Edf-dV9qZD2T-Ak4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 213,
        likedBy: [],
        createdAt: 1613766175000,
        updatedAt: 1739576639643,
        _id: "S6j21wkpiDE"
      },
      {
        title: "Old School Hollywood",
        url: "https://www.youtube.com/embed/Mi5oHdNAa4Q",
        imgUrl: "https://i.ytimg.com/vi/Mi5oHdNAa4Q/hqdefault.jpg",
        addedBy: {
          _id: "UC7-YMmnc0ppcWmio8t1WdcA",
          fullname: "System Of A Down",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m6xYq7ErRAA9YY3XG3NLAOZJRfV67Edf-dV9qZD2T-Ak4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 160,
        likedBy: [],
        createdAt: 1613766202000,
        updatedAt: 1739528879676,
        _id: "Mi5oHdNAa4Q"
      },
      {
        title: "Forest",
        url: "https://www.youtube.com/embed/Pg9QiXOWy0s",
        imgUrl: "https://i.ytimg.com/vi/Pg9QiXOWy0s/hqdefault.jpg",
        addedBy: {
          _id: "UC7-YMmnc0ppcWmio8t1WdcA",
          fullname: "System Of A Down",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m6xYq7ErRAA9YY3XG3NLAOZJRfV67Edf-dV9qZD2T-Ak4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 102,
        likedBy: [],
        createdAt: 1613766241000,
        updatedAt: 1739529573357,
        _id: "Pg9QiXOWy0s"
      },
      {
        title: "Kill Rock 'n Roll",
        url: "https://www.youtube.com/embed/9fh-3tvRBbk",
        imgUrl: "https://i.ytimg.com/vi/9fh-3tvRBbk/hqdefault.jpg",
        addedBy: {
          _id: "UC7-YMmnc0ppcWmio8t1WdcA",
          fullname: "System Of A Down",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m6xYq7ErRAA9YY3XG3NLAOZJRfV67Edf-dV9qZD2T-Ak4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 294,
        likedBy: [],
        createdAt: 1613766256000,
        updatedAt: 1739548316296,
        _id: "9fh-3tvRBbk"
      },
      {
        title: "Suggestions",
        url: "https://www.youtube.com/embed/kjLPPjjMCog",
        imgUrl: "https://i.ytimg.com/vi/kjLPPjjMCog/hqdefault.jpg",
        addedBy: {
          _id: "UC7-YMmnc0ppcWmio8t1WdcA",
          fullname: "System Of A Down",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m6xYq7ErRAA9YY3XG3NLAOZJRfV67Edf-dV9qZD2T-Ak4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 352,
        likedBy: [],
        createdAt: 1613766274000,
        updatedAt: 1739500397263,
        _id: "kjLPPjjMCog"
      },
      {
        title: "Shimmy",
        url: "https://www.youtube.com/embed/VdJhFiUspiI",
        imgUrl: "https://i.ytimg.com/vi/VdJhFiUspiI/hqdefault.jpg",
        addedBy: {
          _id: "UC7-YMmnc0ppcWmio8t1WdcA",
          fullname: "System Of A Down",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m6xYq7ErRAA9YY3XG3NLAOZJRfV67Edf-dV9qZD2T-Ak4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 96,
        likedBy: [],
        createdAt: 1613766307000,
        updatedAt: 1739563197000,
        _id: "VdJhFiUspiI"
      },
      {
        title: "This Cocaine Makes Me Feel Like I'm On This Song",
        url: "https://www.youtube.com/embed/oaDnuExc1sI",
        imgUrl: "https://i.ytimg.com/vi/oaDnuExc1sI/hqdefault.jpg",
        addedBy: {
          _id: "UC7-YMmnc0ppcWmio8t1WdcA",
          fullname: "System Of A Down",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m6xYq7ErRAA9YY3XG3NLAOZJRfV67Edf-dV9qZD2T-Ak4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 167,
        likedBy: [],
        createdAt: 1613766333000,
        updatedAt: 1739508332846,
        _id: "oaDnuExc1sI"
      },
      {
        title: "Jet Pilot",
        url: "https://www.youtube.com/embed/QwyZ1gOhU_o",
        imgUrl: "https://i.ytimg.com/vi/QwyZ1gOhU_o/hqdefault.jpg",
        addedBy: {
          _id: "UC7-YMmnc0ppcWmio8t1WdcA",
          fullname: "System Of A Down",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m6xYq7ErRAA9YY3XG3NLAOZJRfV67Edf-dV9qZD2T-Ak4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 255,
        likedBy: [],
        createdAt: 1613766351000,
        updatedAt: 1739579004235,
        _id: "QwyZ1gOhU_o"
      },
      {
        title: "Sad Statue",
        url: "https://www.youtube.com/embed/8IH1JFoiGqU",
        imgUrl: "https://i.ytimg.com/vi/8IH1JFoiGqU/hqdefault.jpg",
        addedBy: {
          _id: "UC7-YMmnc0ppcWmio8t1WdcA",
          fullname: "System Of A Down",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m6xYq7ErRAA9YY3XG3NLAOZJRfV67Edf-dV9qZD2T-Ak4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 158,
        likedBy: [],
        createdAt: 1613766367000,
        updatedAt: 1739524604139,
        _id: "8IH1JFoiGqU"
      },
      {
        title: "She's Like Heroin",
        url: "https://www.youtube.com/embed/1dYbbcaFWeg",
        imgUrl: "https://i.ytimg.com/vi/1dYbbcaFWeg/hqdefault.jpg",
        addedBy: {
          _id: "UC7-YMmnc0ppcWmio8t1WdcA",
          fullname: "System Of A Down",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m6xYq7ErRAA9YY3XG3NLAOZJRfV67Edf-dV9qZD2T-Ak4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 128,
        likedBy: [],
        createdAt: 1613766392000,
        updatedAt: 1739496903670,
        _id: "1dYbbcaFWeg"
      },
      {
        title: "Holy Mountains",
        url: "https://www.youtube.com/embed/WgV6zVxRsIc",
        imgUrl: "https://i.ytimg.com/vi/WgV6zVxRsIc/hqdefault.jpg",
        addedBy: {
          _id: "UC7-YMmnc0ppcWmio8t1WdcA",
          fullname: "System Of A Down",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m6xYq7ErRAA9YY3XG3NLAOZJRfV67Edf-dV9qZD2T-Ak4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 251,
        likedBy: [],
        createdAt: 1613766486000,
        updatedAt: 1739543060197,
        _id: "WgV6zVxRsIc"
      }
    ],
    _id: "PL-tdP6nrpQYte4iLNJC3E7NpNFjR2PtFy",
    name: "System Of A Down - Topic",
    createdBy: {
      _id: "UCDJftX2zx_UT_QSnBGIF96w",
      fullname: "System Of A Down - Topic",
      imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m6xYq7ErRAA9YY3XG3NLAOZJRfV67Edf-dV9qZD2T-Ak4=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1369159641000,
      updatedAt: 1739580609719
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Hallowed Be Thy Name (2015 Remaster)",
        url: "https://www.youtube.com/embed/HAQQUDbuudY",
        imgUrl: "https://i.ytimg.com/vi/HAQQUDbuudY/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 327,
        likedBy: [],
        createdAt: 1584033963000,
        updatedAt: 1739574832859,
        _id: "HAQQUDbuudY"
      },
      {
        title: "The Trooper (2015 Remaster)",
        url: "https://www.youtube.com/embed/W4DfbinBgL4",
        imgUrl: "https://i.ytimg.com/vi/W4DfbinBgL4/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 51,
        likedBy: [],
        createdAt: 1584033979000,
        updatedAt: 1739533854214,
        _id: "W4DfbinBgL4"
      },
      {
        title: "Fear of the Dark (2015 Remaster)",
        url: "https://www.youtube.com/embed/bePCRKGUwAY",
        imgUrl: "https://i.ytimg.com/vi/bePCRKGUwAY/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 279,
        likedBy: [],
        createdAt: 1584033995000,
        updatedAt: 1739515706290,
        _id: "bePCRKGUwAY"
      },
      {
        title: "Aces High (2015 Remaster)",
        url: "https://www.youtube.com/embed/oNwOA84zAcE",
        imgUrl: "https://i.ytimg.com/vi/oNwOA84zAcE/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 108,
        likedBy: [],
        createdAt: 1584034007000,
        updatedAt: 1739566021778,
        _id: "oNwOA84zAcE"
      },
      {
        title: "The Number of the Beast (2015 Remaster)",
        url: "https://www.youtube.com/embed/_WCCVqkTI9Q",
        imgUrl: "https://i.ytimg.com/vi/_WCCVqkTI9Q/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 228,
        likedBy: [],
        createdAt: 1584034024000,
        updatedAt: 1739501374962,
        _id: "_WCCVqkTI9Q"
      },
      {
        title: "Rime of the Ancient Mariner (2015 Remaster)",
        url: "https://www.youtube.com/embed/OSDZj_jh5cE",
        imgUrl: "https://i.ytimg.com/vi/OSDZj_jh5cE/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 71,
        likedBy: [],
        createdAt: 1584034039000,
        updatedAt: 1739506641118,
        _id: "OSDZj_jh5cE"
      },
      {
        title: "Run to the Hills (2015 Remaster)",
        url: "https://www.youtube.com/embed/Q_XJ-7jNqws",
        imgUrl: "https://i.ytimg.com/vi/Q_XJ-7jNqws/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 365,
        likedBy: [],
        createdAt: 1584034053000,
        updatedAt: 1739519291487,
        _id: "Q_XJ-7jNqws"
      },
      {
        title: "Phantom of the Opera (2015 Remaster)",
        url: "https://www.youtube.com/embed/p2ct4xXak24",
        imgUrl: "https://i.ytimg.com/vi/p2ct4xXak24/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 135,
        likedBy: [],
        createdAt: 1584034079000,
        updatedAt: 1739556192164,
        _id: "p2ct4xXak24"
      },
      {
        title: "2 Minutes to Midnight (2015 Remaster)",
        url: "https://www.youtube.com/embed/YCmUqAffWS8",
        imgUrl: "https://i.ytimg.com/vi/YCmUqAffWS8/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 273,
        likedBy: [],
        createdAt: 1584034099000,
        updatedAt: 1739504910574,
        _id: "YCmUqAffWS8"
      },
      {
        title: "Dance of Death (2015 Remaster)",
        url: "https://www.youtube.com/embed/3659fTXvFts",
        imgUrl: "https://i.ytimg.com/vi/3659fTXvFts/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 297,
        likedBy: [],
        createdAt: 1584034113000,
        updatedAt: 1739536569980,
        _id: "3659fTXvFts"
      },
      {
        title: "Wasted Years (1998 Remaster)",
        url: "https://www.youtube.com/embed/ht6xAMil8oU",
        imgUrl: "https://i.ytimg.com/vi/ht6xAMil8oU/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 178,
        likedBy: [],
        createdAt: 1584034131000,
        updatedAt: 1739578091683,
        _id: "ht6xAMil8oU"
      },
      {
        title: "Powerslave (2015 Remaster)",
        url: "https://www.youtube.com/embed/Mw-o_cSdqmI",
        imgUrl: "https://i.ytimg.com/vi/Mw-o_cSdqmI/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 309,
        likedBy: [],
        createdAt: 1584034159000,
        updatedAt: 1739576632302,
        _id: "Mw-o_cSdqmI"
      },
      {
        title: "Seventh Son of a Seventh Son (2015 Remaster)",
        url: "https://www.youtube.com/embed/ZjphaXXEU9o",
        imgUrl: "https://i.ytimg.com/vi/ZjphaXXEU9o/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 230,
        likedBy: [],
        createdAt: 1584034181000,
        updatedAt: 1739566078459,
        _id: "ZjphaXXEU9o"
      },
      {
        title: "Paschendale (2015 Remaster)",
        url: "https://www.youtube.com/embed/oEFmrm_GdUw",
        imgUrl: "https://i.ytimg.com/vi/oEFmrm_GdUw/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 268,
        likedBy: [],
        createdAt: 1584034203000,
        updatedAt: 1739561201733,
        _id: "oEFmrm_GdUw"
      },
      {
        title: "Alexander the Great (356-323 B.C.) (2015 Remaster)",
        url: "https://www.youtube.com/embed/6BH9HvZx3nI",
        imgUrl: "https://i.ytimg.com/vi/6BH9HvZx3nI/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 285,
        likedBy: [],
        createdAt: 1584034220000,
        updatedAt: 1739579084544,
        _id: "6BH9HvZx3nI"
      },
      {
        title: "When the Wild Wind Blows (2015 Remaster)",
        url: "https://www.youtube.com/embed/WmPTxrJ-kHI",
        imgUrl: "https://i.ytimg.com/vi/WmPTxrJ-kHI/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 368,
        likedBy: [],
        createdAt: 1584034289000,
        updatedAt: 1739544069497,
        _id: "WmPTxrJ-kHI"
      },
      {
        title: "Die with Your Boots On (2015 Remaster)",
        url: "https://www.youtube.com/embed/LfOXu6l3WTQ",
        imgUrl: "https://i.ytimg.com/vi/LfOXu6l3WTQ/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 293,
        likedBy: [],
        createdAt: 1584034308000,
        updatedAt: 1739557625550,
        _id: "LfOXu6l3WTQ"
      },
      {
        title: "Moonchild (2015 Remaster)",
        url: "https://www.youtube.com/embed/kvh-aU7KCFY",
        imgUrl: "https://i.ytimg.com/vi/kvh-aU7KCFY/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 317,
        likedBy: [],
        createdAt: 1584034384000,
        updatedAt: 1739536303801,
        _id: "kvh-aU7KCFY"
      },
      {
        title: "The Evil That Men Do (1998 Remaster)",
        url: "https://www.youtube.com/embed/kIIKkWKI2SQ",
        imgUrl: "https://i.ytimg.com/vi/kIIKkWKI2SQ/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 321,
        likedBy: [],
        createdAt: 1584034408000,
        updatedAt: 1739553181872,
        _id: "kIIKkWKI2SQ"
      },
      {
        title: "Infinite Dreams (Live at Birmingham NEC, 1988) (2013 Remaster)",
        url: "https://www.youtube.com/embed/GXjRiym2iyw",
        imgUrl: "https://i.ytimg.com/vi/GXjRiym2iyw/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 270,
        likedBy: [],
        createdAt: 1584034559000,
        updatedAt: 1739505310445,
        _id: "GXjRiym2iyw"
      },
      {
        title: "Blood Brothers (2015 Remaster)",
        url: "https://www.youtube.com/embed/NXqFxShP7Ao",
        imgUrl: "https://i.ytimg.com/vi/NXqFxShP7Ao/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 385,
        likedBy: [],
        createdAt: 1584034580000,
        updatedAt: 1739539977328,
        _id: "NXqFxShP7Ao"
      },
      {
        title: "Afraid to Shoot Strangers (2015 Remaster)",
        url: "https://www.youtube.com/embed/wfcLesynJrc",
        imgUrl: "https://i.ytimg.com/vi/wfcLesynJrc/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 163,
        likedBy: [],
        createdAt: 1584034611000,
        updatedAt: 1739512191181,
        _id: "wfcLesynJrc"
      },
      {
        title: "The Wicker Man",
        url: "https://www.youtube.com/embed/Z8h11Dhq2sU",
        imgUrl: "https://i.ytimg.com/vi/Z8h11Dhq2sU/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 337,
        likedBy: [],
        createdAt: 1584034736000,
        updatedAt: 1739555253900,
        _id: "Z8h11Dhq2sU"
      },
      {
        title: "Empire of the Clouds",
        url: "https://www.youtube.com/embed/9CWTig2kBKE",
        imgUrl: "https://i.ytimg.com/vi/9CWTig2kBKE/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 47,
        likedBy: [],
        createdAt: 1584034791000,
        updatedAt: 1739560975299,
        _id: "9CWTig2kBKE"
      },
      {
        title: "Flight of Icarus (2015 Remaster)",
        url: "https://www.youtube.com/embed/lFF3S8NG-Wg",
        imgUrl: "https://i.ytimg.com/vi/lFF3S8NG-Wg/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 61,
        likedBy: [],
        createdAt: 1584034809000,
        updatedAt: 1739530099093,
        _id: "lFF3S8NG-Wg"
      }
    ],
    _id: "PLgF5KLwzxU-2blxEvK9IGZMZ6tKyPOg4L",
    name: "Iron Maiden - Topic",
    createdBy: {
      _id: "UC0zbzp6x7zR8u0LhanNWFyw",
      fullname: "Iron Maiden - Topic",
      imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lZu7s_pX_cg_98Rr7qP5NKMrz4WOmKmMuUXEehjbSZW7A=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1373069143000,
      updatedAt: 1739581646548
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Lady Gaga - Chromatica I (Audio)",
        url: "https://www.youtube.com/embed/A1cnWzwoK7Q",
        imgUrl: "https://i.ytimg.com/vi/A1cnWzwoK7Q/hqdefault.jpg",
        addedBy: {
          _id: "UC07Kxew-cMIaykMOkzqHtBQ",
          fullname: "LadyGagaVEVO",
          imgUrl: "https://yt3.ggpht.com/PhFThrqp58joMS9FOd7I2jPZ1TepvCKDsdnuwmFXPl-Tq0kZjw3GNtCNtsxt3dgH8bqW7RdK=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 75,
        likedBy: [],
        createdAt: 1590724886000,
        updatedAt: 1739532253481,
        _id: "A1cnWzwoK7Q"
      },
      {
        title: "Lady Gaga - Alice (Audio)",
        url: "https://www.youtube.com/embed/wYLZq390IHg",
        imgUrl: "https://i.ytimg.com/vi/wYLZq390IHg/hqdefault.jpg",
        addedBy: {
          _id: "UC07Kxew-cMIaykMOkzqHtBQ",
          fullname: "LadyGagaVEVO",
          imgUrl: "https://yt3.ggpht.com/PhFThrqp58joMS9FOd7I2jPZ1TepvCKDsdnuwmFXPl-Tq0kZjw3GNtCNtsxt3dgH8bqW7RdK=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 234,
        likedBy: [],
        createdAt: 1590724888000,
        updatedAt: 1739555883498,
        _id: "wYLZq390IHg"
      },
      {
        title: "Lady Gaga - Stupid Love (Official Music Video)",
        url: "https://www.youtube.com/embed/5L6xyaeiV58",
        imgUrl: "https://i.ytimg.com/vi/5L6xyaeiV58/hqdefault.jpg",
        addedBy: {
          _id: "UC07Kxew-cMIaykMOkzqHtBQ",
          fullname: "LadyGagaVEVO",
          imgUrl: "https://yt3.ggpht.com/PhFThrqp58joMS9FOd7I2jPZ1TepvCKDsdnuwmFXPl-Tq0kZjw3GNtCNtsxt3dgH8bqW7RdK=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 353,
        likedBy: [],
        createdAt: 1590724889000,
        updatedAt: 1739522324501,
        _id: "5L6xyaeiV58"
      },
      {
        title: "Lady Gaga, Ariana Grande - Rain On Me (Official Music Video)",
        url: "https://www.youtube.com/embed/AoAm4om0wTs",
        imgUrl: "https://i.ytimg.com/vi/AoAm4om0wTs/hqdefault.jpg",
        addedBy: {
          _id: "UC07Kxew-cMIaykMOkzqHtBQ",
          fullname: "LadyGagaVEVO",
          imgUrl: "https://yt3.ggpht.com/PhFThrqp58joMS9FOd7I2jPZ1TepvCKDsdnuwmFXPl-Tq0kZjw3GNtCNtsxt3dgH8bqW7RdK=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 304,
        likedBy: [],
        createdAt: 1590724894000,
        updatedAt: 1739520729936,
        _id: "AoAm4om0wTs"
      },
      {
        title: "Lady Gaga - Free Woman (Audio)",
        url: "https://www.youtube.com/embed/u_cIs0_C6nA",
        imgUrl: "https://i.ytimg.com/vi/u_cIs0_C6nA/hqdefault.jpg",
        addedBy: {
          _id: "UC07Kxew-cMIaykMOkzqHtBQ",
          fullname: "LadyGagaVEVO",
          imgUrl: "https://yt3.ggpht.com/PhFThrqp58joMS9FOd7I2jPZ1TepvCKDsdnuwmFXPl-Tq0kZjw3GNtCNtsxt3dgH8bqW7RdK=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 252,
        likedBy: [],
        createdAt: 1590724895000,
        updatedAt: 1739504516911,
        _id: "u_cIs0_C6nA"
      },
      {
        title: "Lady Gaga - Fun Tonight (Audio)",
        url: "https://www.youtube.com/embed/zWzBcrniDRw",
        imgUrl: "https://i.ytimg.com/vi/zWzBcrniDRw/hqdefault.jpg",
        addedBy: {
          _id: "UC07Kxew-cMIaykMOkzqHtBQ",
          fullname: "LadyGagaVEVO",
          imgUrl: "https://yt3.ggpht.com/PhFThrqp58joMS9FOd7I2jPZ1TepvCKDsdnuwmFXPl-Tq0kZjw3GNtCNtsxt3dgH8bqW7RdK=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 328,
        likedBy: [],
        createdAt: 1590724899000,
        updatedAt: 1739548325447,
        _id: "zWzBcrniDRw"
      },
      {
        title: "Lady Gaga - Chromatica II (Official Audio)",
        url: "https://www.youtube.com/embed/GkaNNFI2KLI",
        imgUrl: "https://i.ytimg.com/vi/GkaNNFI2KLI/hqdefault.jpg",
        addedBy: {
          _id: "UC07Kxew-cMIaykMOkzqHtBQ",
          fullname: "LadyGagaVEVO",
          imgUrl: "https://yt3.ggpht.com/PhFThrqp58joMS9FOd7I2jPZ1TepvCKDsdnuwmFXPl-Tq0kZjw3GNtCNtsxt3dgH8bqW7RdK=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 121,
        likedBy: [],
        createdAt: 1590724902000,
        updatedAt: 1739575033052,
        _id: "GkaNNFI2KLI"
      },
      {
        title: "Lady Gaga - 911 (Official Audio)",
        url: "https://www.youtube.com/embed/-oI4_shsYnE",
        imgUrl: "https://i.ytimg.com/vi/-oI4_shsYnE/hqdefault.jpg",
        addedBy: {
          _id: "UC07Kxew-cMIaykMOkzqHtBQ",
          fullname: "LadyGagaVEVO",
          imgUrl: "https://yt3.ggpht.com/PhFThrqp58joMS9FOd7I2jPZ1TepvCKDsdnuwmFXPl-Tq0kZjw3GNtCNtsxt3dgH8bqW7RdK=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 288,
        likedBy: [],
        createdAt: 1590724907000,
        updatedAt: 1739510242006,
        _id: "-oI4_shsYnE"
      },
      {
        title: "Lady Gaga - Plastic Doll (Official Audio)",
        url: "https://www.youtube.com/embed/RHtdG2M_W3M",
        imgUrl: "https://i.ytimg.com/vi/RHtdG2M_W3M/hqdefault.jpg",
        addedBy: {
          _id: "UC07Kxew-cMIaykMOkzqHtBQ",
          fullname: "LadyGagaVEVO",
          imgUrl: "https://yt3.ggpht.com/PhFThrqp58joMS9FOd7I2jPZ1TepvCKDsdnuwmFXPl-Tq0kZjw3GNtCNtsxt3dgH8bqW7RdK=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 111,
        likedBy: [],
        createdAt: 1590724908000,
        updatedAt: 1739556351870,
        _id: "RHtdG2M_W3M"
      },
      {
        title: "Lady Gaga, BLACKPINK - Sour Candy (Audio)",
        url: "https://www.youtube.com/embed/fnPn6At3v28",
        imgUrl: "https://i.ytimg.com/vi/fnPn6At3v28/hqdefault.jpg",
        addedBy: {
          _id: "UC07Kxew-cMIaykMOkzqHtBQ",
          fullname: "LadyGagaVEVO",
          imgUrl: "https://yt3.ggpht.com/PhFThrqp58joMS9FOd7I2jPZ1TepvCKDsdnuwmFXPl-Tq0kZjw3GNtCNtsxt3dgH8bqW7RdK=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 178,
        likedBy: [],
        createdAt: 1590724911000,
        updatedAt: 1739575232688,
        _id: "fnPn6At3v28"
      },
      {
        title: "Lady Gaga - Enigma (Audio)",
        url: "https://www.youtube.com/embed/G0Ys0bgcOuo",
        imgUrl: "https://i.ytimg.com/vi/G0Ys0bgcOuo/hqdefault.jpg",
        addedBy: {
          _id: "UC07Kxew-cMIaykMOkzqHtBQ",
          fullname: "LadyGagaVEVO",
          imgUrl: "https://yt3.ggpht.com/PhFThrqp58joMS9FOd7I2jPZ1TepvCKDsdnuwmFXPl-Tq0kZjw3GNtCNtsxt3dgH8bqW7RdK=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 103,
        likedBy: [],
        createdAt: 1590724916000,
        updatedAt: 1739554675976,
        _id: "G0Ys0bgcOuo"
      },
      {
        title: "Lady Gaga - Replay (Official Audio)",
        url: "https://www.youtube.com/embed/ZTwpCLZLdRs",
        imgUrl: "https://i.ytimg.com/vi/ZTwpCLZLdRs/hqdefault.jpg",
        addedBy: {
          _id: "UC07Kxew-cMIaykMOkzqHtBQ",
          fullname: "LadyGagaVEVO",
          imgUrl: "https://yt3.ggpht.com/PhFThrqp58joMS9FOd7I2jPZ1TepvCKDsdnuwmFXPl-Tq0kZjw3GNtCNtsxt3dgH8bqW7RdK=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 204,
        likedBy: [],
        createdAt: 1590724917000,
        updatedAt: 1739505016607,
        _id: "ZTwpCLZLdRs"
      },
      {
        title: "Lady Gaga - Chromatica III (Official Audio)",
        url: "https://www.youtube.com/embed/U4VUEdlaxhU",
        imgUrl: "https://i.ytimg.com/vi/U4VUEdlaxhU/hqdefault.jpg",
        addedBy: {
          _id: "UC07Kxew-cMIaykMOkzqHtBQ",
          fullname: "LadyGagaVEVO",
          imgUrl: "https://yt3.ggpht.com/PhFThrqp58joMS9FOd7I2jPZ1TepvCKDsdnuwmFXPl-Tq0kZjw3GNtCNtsxt3dgH8bqW7RdK=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 289,
        likedBy: [],
        createdAt: 1590724922000,
        updatedAt: 1739542457227,
        _id: "U4VUEdlaxhU"
      },
      {
        title: "Lady Gaga, Elton John - Sine From Above (Audio)",
        url: "https://www.youtube.com/embed/O9GUJ7Wqy3A",
        imgUrl: "https://i.ytimg.com/vi/O9GUJ7Wqy3A/hqdefault.jpg",
        addedBy: {
          _id: "UC07Kxew-cMIaykMOkzqHtBQ",
          fullname: "LadyGagaVEVO",
          imgUrl: "https://yt3.ggpht.com/PhFThrqp58joMS9FOd7I2jPZ1TepvCKDsdnuwmFXPl-Tq0kZjw3GNtCNtsxt3dgH8bqW7RdK=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 349,
        likedBy: [],
        createdAt: 1590724922000,
        updatedAt: 1739537838427,
        _id: "O9GUJ7Wqy3A"
      },
      {
        title: "Lady Gaga - 1000 Doves (Official Audio)",
        url: "https://www.youtube.com/embed/xIq6lpdO-Bw",
        imgUrl: "https://i.ytimg.com/vi/xIq6lpdO-Bw/hqdefault.jpg",
        addedBy: {
          _id: "UC07Kxew-cMIaykMOkzqHtBQ",
          fullname: "LadyGagaVEVO",
          imgUrl: "https://yt3.ggpht.com/PhFThrqp58joMS9FOd7I2jPZ1TepvCKDsdnuwmFXPl-Tq0kZjw3GNtCNtsxt3dgH8bqW7RdK=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 139,
        likedBy: [],
        createdAt: 1590724925000,
        updatedAt: 1739574303887,
        _id: "xIq6lpdO-Bw"
      },
      {
        title: "Lady Gaga - Babylon (Audio)",
        url: "https://www.youtube.com/embed/bOuuMmlf_DE",
        imgUrl: "https://i.ytimg.com/vi/bOuuMmlf_DE/hqdefault.jpg",
        addedBy: {
          _id: "UC07Kxew-cMIaykMOkzqHtBQ",
          fullname: "LadyGagaVEVO",
          imgUrl: "https://yt3.ggpht.com/PhFThrqp58joMS9FOd7I2jPZ1TepvCKDsdnuwmFXPl-Tq0kZjw3GNtCNtsxt3dgH8bqW7RdK=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 342,
        likedBy: [],
        createdAt: 1590724927000,
        updatedAt: 1739521528366,
        _id: "bOuuMmlf_DE"
      },
      {
        title: "Stupid Love (Official Vitaclub Warehouse Mix/Audio)",
        url: "https://www.youtube.com/embed/UzCA_8dAKfA",
        imgUrl: "https://i.ytimg.com/vi/UzCA_8dAKfA/hqdefault.jpg",
        addedBy: {
          _id: "UC07Kxew-cMIaykMOkzqHtBQ",
          fullname: "LadyGagaVEVO",
          imgUrl: "https://yt3.ggpht.com/PhFThrqp58joMS9FOd7I2jPZ1TepvCKDsdnuwmFXPl-Tq0kZjw3GNtCNtsxt3dgH8bqW7RdK=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 211,
        likedBy: [],
        createdAt: 1590724928000,
        updatedAt: 1739549089961,
        _id: "UzCA_8dAKfA"
      },
      {
        title: "Lady Gaga - Enigma (Audio)",
        url: "https://www.youtube.com/embed/G0Ys0bgcOuo",
        imgUrl: "https://i.ytimg.com/vi/G0Ys0bgcOuo/hqdefault.jpg",
        addedBy: {
          _id: "UC07Kxew-cMIaykMOkzqHtBQ",
          fullname: "LadyGagaVEVO",
          imgUrl: "https://yt3.ggpht.com/PhFThrqp58joMS9FOd7I2jPZ1TepvCKDsdnuwmFXPl-Tq0kZjw3GNtCNtsxt3dgH8bqW7RdK=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 170,
        likedBy: [],
        createdAt: 1590724911000,
        updatedAt: 1739546560383,
        _id: "G0Ys0bgcOuo"
      },
      {
        title: "Lady Gaga - Chromatica I (Audio)",
        url: "https://www.youtube.com/embed/A1cnWzwoK7Q",
        imgUrl: "https://i.ytimg.com/vi/A1cnWzwoK7Q/hqdefault.jpg",
        addedBy: {
          _id: "UC07Kxew-cMIaykMOkzqHtBQ",
          fullname: "LadyGagaVEVO",
          imgUrl: "https://yt3.ggpht.com/PhFThrqp58joMS9FOd7I2jPZ1TepvCKDsdnuwmFXPl-Tq0kZjw3GNtCNtsxt3dgH8bqW7RdK=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 213,
        likedBy: [],
        createdAt: 1590724876000,
        updatedAt: 1739511283144,
        _id: "A1cnWzwoK7Q"
      }
    ],
    _id: "PL9K4gwmvtl1jSO34-fPWmq5OT7Soicmjj",
    name: "LadyGagaVEVO",
    createdBy: {
      _id: "UC07Kxew-cMIaykMOkzqHtBQ",
      fullname: "LadyGagaVEVO",
      imgUrl: "https://yt3.ggpht.com/PhFThrqp58joMS9FOd7I2jPZ1TepvCKDsdnuwmFXPl-Tq0kZjw3GNtCNtsxt3dgH8bqW7RdK=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1242106108000,
      updatedAt: 1739581837026
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Around the World",
        url: "https://www.youtube.com/embed/iiupU-K_TKE",
        imgUrl: "https://i.ytimg.com/vi/iiupU-K_TKE/hqdefault.jpg",
        addedBy: {
          _id: "UCpvEzypPseM9j8XaEA6cbLg",
          fullname: "Le Sémaphore",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nbNP4C904JTZDyi2HWE7ekHFoCZh2EzYHsaxxnheWJBLE=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 324,
        likedBy: [],
        createdAt: 1570626593000,
        updatedAt: 1739546096472,
        _id: "iiupU-K_TKE"
      },
      {
        title: "Parallel Universe",
        url: "https://www.youtube.com/embed/X-o8eGhKhlI",
        imgUrl: "https://i.ytimg.com/vi/X-o8eGhKhlI/hqdefault.jpg",
        addedBy: {
          _id: "UCpvEzypPseM9j8XaEA6cbLg",
          fullname: "Le Sémaphore",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nbNP4C904JTZDyi2HWE7ekHFoCZh2EzYHsaxxnheWJBLE=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 287,
        likedBy: [],
        createdAt: 1570626599000,
        updatedAt: 1739535514400,
        _id: "X-o8eGhKhlI"
      },
      {
        title: "Scar Tissue",
        url: "https://www.youtube.com/embed/U7k2qv8KTDI",
        imgUrl: "https://i.ytimg.com/vi/U7k2qv8KTDI/hqdefault.jpg",
        addedBy: {
          _id: "UCpvEzypPseM9j8XaEA6cbLg",
          fullname: "Le Sémaphore",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nbNP4C904JTZDyi2HWE7ekHFoCZh2EzYHsaxxnheWJBLE=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 169,
        likedBy: [],
        createdAt: 1570626716000,
        updatedAt: 1739537378512,
        _id: "U7k2qv8KTDI"
      },
      {
        title: "Otherside",
        url: "https://www.youtube.com/embed/LCZLCG4JFm4",
        imgUrl: "https://i.ytimg.com/vi/LCZLCG4JFm4/hqdefault.jpg",
        addedBy: {
          _id: "UCpvEzypPseM9j8XaEA6cbLg",
          fullname: "Le Sémaphore",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nbNP4C904JTZDyi2HWE7ekHFoCZh2EzYHsaxxnheWJBLE=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 399,
        likedBy: [],
        createdAt: 1570626737000,
        updatedAt: 1739509678294,
        _id: "LCZLCG4JFm4"
      },
      {
        title: "Get on Top",
        url: "https://www.youtube.com/embed/x3kkTjfPD0E",
        imgUrl: "https://i.ytimg.com/vi/x3kkTjfPD0E/hqdefault.jpg",
        addedBy: {
          _id: "UCpvEzypPseM9j8XaEA6cbLg",
          fullname: "Le Sémaphore",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nbNP4C904JTZDyi2HWE7ekHFoCZh2EzYHsaxxnheWJBLE=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 186,
        likedBy: [],
        createdAt: 1570626779000,
        updatedAt: 1739498635022,
        _id: "x3kkTjfPD0E"
      },
      {
        title: "Californication",
        url: "https://www.youtube.com/embed/OtXiwSCq99Q",
        imgUrl: "https://i.ytimg.com/vi/OtXiwSCq99Q/hqdefault.jpg",
        addedBy: {
          _id: "UCpvEzypPseM9j8XaEA6cbLg",
          fullname: "Le Sémaphore",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nbNP4C904JTZDyi2HWE7ekHFoCZh2EzYHsaxxnheWJBLE=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 212,
        likedBy: [],
        createdAt: 1570626790000,
        updatedAt: 1739571247737,
        _id: "OtXiwSCq99Q"
      },
      {
        title: "Easily",
        url: "https://www.youtube.com/embed/Rtcm6QB5RL8",
        imgUrl: "https://i.ytimg.com/vi/Rtcm6QB5RL8/hqdefault.jpg",
        addedBy: {
          _id: "UCpvEzypPseM9j8XaEA6cbLg",
          fullname: "Le Sémaphore",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nbNP4C904JTZDyi2HWE7ekHFoCZh2EzYHsaxxnheWJBLE=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 308,
        likedBy: [],
        createdAt: 1570626808000,
        updatedAt: 1739570494857,
        _id: "Rtcm6QB5RL8"
      },
      {
        title: "Porcelain",
        url: "https://www.youtube.com/embed/JA-mwTAqilg",
        imgUrl: "https://i.ytimg.com/vi/JA-mwTAqilg/hqdefault.jpg",
        addedBy: {
          _id: "UCpvEzypPseM9j8XaEA6cbLg",
          fullname: "Le Sémaphore",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nbNP4C904JTZDyi2HWE7ekHFoCZh2EzYHsaxxnheWJBLE=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 75,
        likedBy: [],
        createdAt: 1570626819000,
        updatedAt: 1739563643746,
        _id: "JA-mwTAqilg"
      },
      {
        title: "Emit Remmus",
        url: "https://www.youtube.com/embed/i6HOe3T1QFY",
        imgUrl: "https://i.ytimg.com/vi/i6HOe3T1QFY/hqdefault.jpg",
        addedBy: {
          _id: "UCpvEzypPseM9j8XaEA6cbLg",
          fullname: "Le Sémaphore",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nbNP4C904JTZDyi2HWE7ekHFoCZh2EzYHsaxxnheWJBLE=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 192,
        likedBy: [],
        createdAt: 1570626846000,
        updatedAt: 1739563499900,
        _id: "i6HOe3T1QFY"
      },
      {
        title: "I Like Dirt",
        url: "https://www.youtube.com/embed/kKqlzeZQR2w",
        imgUrl: "https://i.ytimg.com/vi/kKqlzeZQR2w/hqdefault.jpg",
        addedBy: {
          _id: "UCpvEzypPseM9j8XaEA6cbLg",
          fullname: "Le Sémaphore",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nbNP4C904JTZDyi2HWE7ekHFoCZh2EzYHsaxxnheWJBLE=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 106,
        likedBy: [],
        createdAt: 1570626855000,
        updatedAt: 1739512764787,
        _id: "kKqlzeZQR2w"
      },
      {
        title: "This Velvet Glove",
        url: "https://www.youtube.com/embed/eJwVqRuqypE",
        imgUrl: "https://i.ytimg.com/vi/eJwVqRuqypE/hqdefault.jpg",
        addedBy: {
          _id: "UCpvEzypPseM9j8XaEA6cbLg",
          fullname: "Le Sémaphore",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nbNP4C904JTZDyi2HWE7ekHFoCZh2EzYHsaxxnheWJBLE=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 219,
        likedBy: [],
        createdAt: 1570626876000,
        updatedAt: 1739528316843,
        _id: "eJwVqRuqypE"
      },
      {
        title: "Savior",
        url: "https://www.youtube.com/embed/nAYaCX4Bdpo",
        imgUrl: "https://i.ytimg.com/vi/nAYaCX4Bdpo/hqdefault.jpg",
        addedBy: {
          _id: "UCpvEzypPseM9j8XaEA6cbLg",
          fullname: "Le Sémaphore",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nbNP4C904JTZDyi2HWE7ekHFoCZh2EzYHsaxxnheWJBLE=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 275,
        likedBy: [],
        createdAt: 1570626890000,
        updatedAt: 1739556196601,
        _id: "nAYaCX4Bdpo"
      },
      {
        title: "Purple Stain",
        url: "https://www.youtube.com/embed/dzsfExBCxLg",
        imgUrl: "https://i.ytimg.com/vi/dzsfExBCxLg/hqdefault.jpg",
        addedBy: {
          _id: "UCpvEzypPseM9j8XaEA6cbLg",
          fullname: "Le Sémaphore",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nbNP4C904JTZDyi2HWE7ekHFoCZh2EzYHsaxxnheWJBLE=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 334,
        likedBy: [],
        createdAt: 1570626912000,
        updatedAt: 1739528162379,
        _id: "dzsfExBCxLg"
      },
      {
        title: "Right on Time",
        url: "https://www.youtube.com/embed/jJlLO8wcMsE",
        imgUrl: "https://i.ytimg.com/vi/jJlLO8wcMsE/hqdefault.jpg",
        addedBy: {
          _id: "UCpvEzypPseM9j8XaEA6cbLg",
          fullname: "Le Sémaphore",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nbNP4C904JTZDyi2HWE7ekHFoCZh2EzYHsaxxnheWJBLE=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 231,
        likedBy: [],
        createdAt: 1570626926000,
        updatedAt: 1739552702808,
        _id: "jJlLO8wcMsE"
      },
      {
        title: "Road Trippin'",
        url: "https://www.youtube.com/embed/8ozhjdj3ALo",
        imgUrl: "https://i.ytimg.com/vi/8ozhjdj3ALo/hqdefault.jpg",
        addedBy: {
          _id: "UCpvEzypPseM9j8XaEA6cbLg",
          fullname: "Le Sémaphore",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nbNP4C904JTZDyi2HWE7ekHFoCZh2EzYHsaxxnheWJBLE=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 142,
        likedBy: [],
        createdAt: 1570626939000,
        updatedAt: 1739546440692,
        _id: "8ozhjdj3ALo"
      },
      {
        title: "Red Hot Chili Peppers - Around The World [Official Music Video] [HD UPGRADE]",
        url: "https://www.youtube.com/embed/a9eNQZbjpJk",
        imgUrl: "https://i.ytimg.com/vi/a9eNQZbjpJk/hqdefault.jpg",
        addedBy: {
          _id: "UCpvEzypPseM9j8XaEA6cbLg",
          fullname: "Le Sémaphore",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nbNP4C904JTZDyi2HWE7ekHFoCZh2EzYHsaxxnheWJBLE=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 81,
        likedBy: [],
        createdAt: 1570627425000,
        updatedAt: 1739510172312,
        _id: "a9eNQZbjpJk"
      },
      {
        title: "Red Hot Chili Peppers - Scar Tissue [Official Music Video] [HD UPGRADE]",
        url: "https://www.youtube.com/embed/mzJj5-lubeM",
        imgUrl: "https://i.ytimg.com/vi/mzJj5-lubeM/hqdefault.jpg",
        addedBy: {
          _id: "UCpvEzypPseM9j8XaEA6cbLg",
          fullname: "Le Sémaphore",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nbNP4C904JTZDyi2HWE7ekHFoCZh2EzYHsaxxnheWJBLE=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 221,
        likedBy: [],
        createdAt: 1570627560000,
        updatedAt: 1739495919449,
        _id: "mzJj5-lubeM"
      },
      {
        title: "Red Hot Chili Peppers - Otherside [Official Music Video] [HD UPGRADE]",
        url: "https://www.youtube.com/embed/rn_YodiJO6k",
        imgUrl: "https://i.ytimg.com/vi/rn_YodiJO6k/hqdefault.jpg",
        addedBy: {
          _id: "UCpvEzypPseM9j8XaEA6cbLg",
          fullname: "Le Sémaphore",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nbNP4C904JTZDyi2HWE7ekHFoCZh2EzYHsaxxnheWJBLE=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 262,
        likedBy: [],
        createdAt: 1570627573000,
        updatedAt: 1739525731789,
        _id: "rn_YodiJO6k"
      },
      {
        title: "Red Hot Chili Peppers - Californication (Official Music Video) [HD UPGRADE]",
        url: "https://www.youtube.com/embed/YlUKcNNmywk",
        imgUrl: "https://i.ytimg.com/vi/YlUKcNNmywk/hqdefault.jpg",
        addedBy: {
          _id: "UCpvEzypPseM9j8XaEA6cbLg",
          fullname: "Le Sémaphore",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nbNP4C904JTZDyi2HWE7ekHFoCZh2EzYHsaxxnheWJBLE=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 316,
        likedBy: [],
        createdAt: 1570627589000,
        updatedAt: 1739535361012,
        _id: "YlUKcNNmywk"
      },
      {
        title: "Red Hot Chili Peppers - Road Trippin' [Official Music Video] [HD UPGRADE]",
        url: "https://www.youtube.com/embed/11GYvfYjyV0",
        imgUrl: "https://i.ytimg.com/vi/11GYvfYjyV0/hqdefault.jpg",
        addedBy: {
          _id: "UCpvEzypPseM9j8XaEA6cbLg",
          fullname: "Le Sémaphore",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nbNP4C904JTZDyi2HWE7ekHFoCZh2EzYHsaxxnheWJBLE=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 107,
        likedBy: [],
        createdAt: 1570627622000,
        updatedAt: 1739579295867,
        _id: "11GYvfYjyV0"
      }
    ],
    _id: "PLiN-7mukU_RGm3gXXR0MXtZ5ynTioL05I",
    name: "Red Hot Chili Peppers - Topic",
    createdBy: {
      _id: "UCrSorX845CEWXzU4Z7BojjA",
      fullname: "Red Hot Chili Peppers - Topic",
      imgUrl: "https://yt3.ggpht.com/O-ftbUQoWe32VfOlIme0zZes00iU3YnlD9vj1eAzjIP95XR2mllLRumLW-zyDidEHGDF9rwu=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1368713398000,
      updatedAt: 1739582097106
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    _id: "PL_3PKTcHZ6KRuxXcPdvdKwt4L2eWad2UM",
    name: "pyrojunkie982",
    createdBy: {
      _id: "UCn2GYwECz_MzQ0CUVbPzeqg",
      fullname: "pyrojunkie982",
      imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nNk1yd6Q0dCjC1na7KjtKAKZoegAt9s_iUX5rmDMbYgA=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1158984689000,
      updatedAt: 1739582144217
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Bruno Mars - It Will Rain (Official Music Video)",
        url: "https://www.youtube.com/embed/W-w3WfgpcGg",
        imgUrl: "https://i.ytimg.com/vi/W-w3WfgpcGg/hqdefault.jpg",
        addedBy: {
          _id: "UCdTNOsPzOJzi3fXDObomEaQ",
          fullname: "Hunter Crow",
          imgUrl: "https://yt3.ggpht.com/6yy6VZ0AnHnPnnxZtTG3ZPirWg_TwgzuJsR8Lo759rWIgGhHMUuwVufs-M_kJ-MARiaBxfv3cA=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 358,
        likedBy: [],
        createdAt: 1639827047000,
        updatedAt: 1739573888785,
        _id: "W-w3WfgpcGg"
      },
      {
        title: "Bruno Mars - Grenade (Official Music Video)",
        url: "https://www.youtube.com/embed/SR6iYWJxHqs",
        imgUrl: "https://i.ytimg.com/vi/SR6iYWJxHqs/hqdefault.jpg",
        addedBy: {
          _id: "UCdTNOsPzOJzi3fXDObomEaQ",
          fullname: "Hunter Crow",
          imgUrl: "https://yt3.ggpht.com/6yy6VZ0AnHnPnnxZtTG3ZPirWg_TwgzuJsR8Lo759rWIgGhHMUuwVufs-M_kJ-MARiaBxfv3cA=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 186,
        likedBy: [],
        createdAt: 1639827056000,
        updatedAt: 1739501133756,
        _id: "SR6iYWJxHqs"
      },
      {
        title: "Bruno Mars - Just The Way You Are (Official Music Video)",
        url: "https://www.youtube.com/embed/LjhCEhWiKXk",
        imgUrl: "https://i.ytimg.com/vi/LjhCEhWiKXk/hqdefault.jpg",
        addedBy: {
          _id: "UCdTNOsPzOJzi3fXDObomEaQ",
          fullname: "Hunter Crow",
          imgUrl: "https://yt3.ggpht.com/6yy6VZ0AnHnPnnxZtTG3ZPirWg_TwgzuJsR8Lo759rWIgGhHMUuwVufs-M_kJ-MARiaBxfv3cA=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 154,
        likedBy: [],
        createdAt: 1639827062000,
        updatedAt: 1739570688495,
        _id: "LjhCEhWiKXk"
      },
      {
        title: "Bruno Mars - When I Was Your Man (Official Music Video)",
        url: "https://www.youtube.com/embed/ekzHIouo8Q4",
        imgUrl: "https://i.ytimg.com/vi/ekzHIouo8Q4/hqdefault.jpg",
        addedBy: {
          _id: "UCdTNOsPzOJzi3fXDObomEaQ",
          fullname: "Hunter Crow",
          imgUrl: "https://yt3.ggpht.com/6yy6VZ0AnHnPnnxZtTG3ZPirWg_TwgzuJsR8Lo759rWIgGhHMUuwVufs-M_kJ-MARiaBxfv3cA=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 384,
        likedBy: [],
        createdAt: 1639827069000,
        updatedAt: 1739502678021,
        _id: "ekzHIouo8Q4"
      },
      {
        title: "Bruno Mars - Locked Out Of Heaven (Official Music Video)",
        url: "https://www.youtube.com/embed/e-fA-gBCkj0",
        imgUrl: "https://i.ytimg.com/vi/e-fA-gBCkj0/hqdefault.jpg",
        addedBy: {
          _id: "UCdTNOsPzOJzi3fXDObomEaQ",
          fullname: "Hunter Crow",
          imgUrl: "https://yt3.ggpht.com/6yy6VZ0AnHnPnnxZtTG3ZPirWg_TwgzuJsR8Lo759rWIgGhHMUuwVufs-M_kJ-MARiaBxfv3cA=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 129,
        likedBy: [],
        createdAt: 1639827082000,
        updatedAt: 1739522882942,
        _id: "e-fA-gBCkj0"
      },
      {
        title: "Talking to the Moon",
        url: "https://www.youtube.com/embed/s3XGBjcICSQ",
        imgUrl: "https://i.ytimg.com/vi/s3XGBjcICSQ/hqdefault.jpg",
        addedBy: {
          _id: "UCdTNOsPzOJzi3fXDObomEaQ",
          fullname: "Hunter Crow",
          imgUrl: "https://yt3.ggpht.com/6yy6VZ0AnHnPnnxZtTG3ZPirWg_TwgzuJsR8Lo759rWIgGhHMUuwVufs-M_kJ-MARiaBxfv3cA=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 121,
        likedBy: [],
        createdAt: 1639827133000,
        updatedAt: 1739518292217,
        _id: "s3XGBjcICSQ"
      }
    ],
    _id: "PLwW4GXHF2hkDJ7M2NbbG7UXy79ATahk1r",
    name: "Bruno Mars",
    createdBy: {
      _id: "UCoUM-UJ7rirJYP8CQ0EIaHA",
      fullname: "Bruno Mars",
      imgUrl: "https://yt3.ggpht.com/DFAj5Pcujo1P0iXe8x4XoZwwItN9cbHnDxbdamvhqSTzXTmyNlqsE1HN2bEQN5vpXE6SB1IAoCM=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1158629683000,
      updatedAt: 1739582265108
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "2Pac - Ambitionz Az A Ridah",
        url: "https://www.youtube.com/embed/pDTFR7ivvgE",
        imgUrl: "https://i.ytimg.com/vi/pDTFR7ivvgE/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 279,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739543678787,
        _id: "pDTFR7ivvgE"
      },
      {
        title: "2Pac - All About U (feat. Hussein Fatal, Nate Dogg, Snoop Dogg & Yaki Kadafi)",
        url: "https://www.youtube.com/embed/SCmxIAIL4W8",
        imgUrl: "https://i.ytimg.com/vi/SCmxIAIL4W8/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 325,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739546502229,
        _id: "SCmxIAIL4W8"
      },
      {
        title: "2Pac - Skandalouz (feat. Nate Dogg)",
        url: "https://www.youtube.com/embed/N5xi0FlRuEM",
        imgUrl: "https://i.ytimg.com/vi/N5xi0FlRuEM/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 104,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739539326785,
        _id: "N5xi0FlRuEM"
      },
      {
        title: "2Pac - Got My Mind Made Up (feat. Daz Dillinger, Kurupt, Method Man & Redman)",
        url: "https://www.youtube.com/embed/UaJ2frIrARc",
        imgUrl: "https://i.ytimg.com/vi/UaJ2frIrARc/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 239,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739555371375,
        _id: "UaJ2frIrARc"
      },
      {
        title: "2Pac - How Do You Want It (feat. JoJo & K-Ci)",
        url: "https://www.youtube.com/embed/7T1UvL3zp7U",
        imgUrl: "https://i.ytimg.com/vi/7T1UvL3zp7U/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 348,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739499925188,
        _id: "7T1UvL3zp7U"
      },
      {
        title: "2Pac - 2 Of Amerikaz Most Wanted (feat. Snoop Dogg)",
        url: "https://www.youtube.com/embed/jahAIL2S-EA",
        imgUrl: "https://i.ytimg.com/vi/jahAIL2S-EA/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 208,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739510064325,
        _id: "jahAIL2S-EA"
      },
      {
        title: "2Pac - No More Pain",
        url: "https://www.youtube.com/embed/FdyZkhS6l_0",
        imgUrl: "https://i.ytimg.com/vi/FdyZkhS6l_0/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 96,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739501143951,
        _id: "FdyZkhS6l_0"
      },
      {
        title: "2Pac - Heartz Of Men",
        url: "https://www.youtube.com/embed/n6rVhPCW9qI",
        imgUrl: "https://i.ytimg.com/vi/n6rVhPCW9qI/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 69,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739564662146,
        _id: "n6rVhPCW9qI"
      },
      {
        title: "2Pac - Life Goes On",
        url: "https://www.youtube.com/embed/uF6LTYZtxdk",
        imgUrl: "https://i.ytimg.com/vi/uF6LTYZtxdk/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 72,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739505106529,
        _id: "uF6LTYZtxdk"
      },
      {
        title: "2Pac - Only God Can Judge Me (feat. Rappin 4 Tay)",
        url: "https://www.youtube.com/embed/iwlDWfmpKmQ",
        imgUrl: "https://i.ytimg.com/vi/iwlDWfmpKmQ/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 117,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739518206125,
        _id: "iwlDWfmpKmQ"
      },
      {
        title: "2Pac - Tradin War Stories (feat. C-Bo, Outlawz & Storm)",
        url: "https://www.youtube.com/embed/QmFE6HBq72c",
        imgUrl: "https://i.ytimg.com/vi/QmFE6HBq72c/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 370,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739514145387,
        _id: "QmFE6HBq72c"
      },
      {
        title: "2Pac - California Love (Remix) (feat. Dr  Dre & Roger Troutman)",
        url: "https://www.youtube.com/embed/4fDfbMt6icw",
        imgUrl: "https://i.ytimg.com/vi/4fDfbMt6icw/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 231,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739503333395,
        _id: "4fDfbMt6icw"
      },
      {
        title: "2Pac - I Ain't Mad At Cha (feat. Danny Boy Steward)",
        url: "https://www.youtube.com/embed/SUfiyv1jxoA",
        imgUrl: "https://i.ytimg.com/vi/SUfiyv1jxoA/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 66,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739516354974,
        _id: "SUfiyv1jxoA"
      },
      {
        title: "2Pac - What'z Ya Phone Number",
        url: "https://www.youtube.com/embed/K0-QwJvaJis",
        imgUrl: "https://i.ytimg.com/vi/K0-QwJvaJis/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 55,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739571675730,
        _id: "K0-QwJvaJis"
      },
      {
        title: "2Pac - Can't C Me (feat. George Clinton)",
        url: "https://www.youtube.com/embed/UAI2de547iw",
        imgUrl: "https://i.ytimg.com/vi/UAI2de547iw/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 315,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739531387359,
        _id: "UAI2de547iw"
      },
      {
        title: "2Pac - Shorty Wanna Be A Thug",
        url: "https://www.youtube.com/embed/W1RtYdKe7tw",
        imgUrl: "https://i.ytimg.com/vi/W1RtYdKe7tw/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 134,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739519910346,
        _id: "W1RtYdKe7tw"
      },
      {
        title: "2Pac - Holla At Me",
        url: "https://www.youtube.com/embed/f-e-kcT9F1Y",
        imgUrl: "https://i.ytimg.com/vi/f-e-kcT9F1Y/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 272,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739509284626,
        _id: "f-e-kcT9F1Y"
      },
      {
        title: "2Pac - Wonda Why They Call U B*tch",
        url: "https://www.youtube.com/embed/jefE9nqhfi0",
        imgUrl: "https://i.ytimg.com/vi/jefE9nqhfi0/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 266,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739556310744,
        _id: "jefE9nqhfi0"
      },
      {
        title: "2Pac - When We Ride (feat. Outlawz)",
        url: "https://www.youtube.com/embed/i2AQ87UudGY",
        imgUrl: "https://i.ytimg.com/vi/i2AQ87UudGY/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 274,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739574630154,
        _id: "i2AQ87UudGY"
      },
      {
        title: "2Pac - Thug Passion (feat. Dramacydal & Jewell)",
        url: "https://www.youtube.com/embed/ogul6JLMNBQ",
        imgUrl: "https://i.ytimg.com/vi/ogul6JLMNBQ/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 308,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739506847220,
        _id: "ogul6JLMNBQ"
      },
      {
        title: "2Pac - Picture Me Rollin' (feat. Big Syke, CPO & Danny Boy Steward)",
        url: "https://www.youtube.com/embed/tpYfDphUkO4",
        imgUrl: "https://i.ytimg.com/vi/tpYfDphUkO4/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 181,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739529904132,
        _id: "tpYfDphUkO4"
      },
      {
        title: "2Pac - Check Out Time (feat. Kurupt & Syke)",
        url: "https://www.youtube.com/embed/fKlqciUv_L8",
        imgUrl: "https://i.ytimg.com/vi/fKlqciUv_L8/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 354,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739513603626,
        _id: "fKlqciUv_L8"
      },
      {
        title: "2Pac - Ratha Be Ya N____ (feat. Richie Rich)",
        url: "https://www.youtube.com/embed/T7XoEinkokM",
        imgUrl: "https://i.ytimg.com/vi/T7XoEinkokM/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 218,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739566084833,
        _id: "T7XoEinkokM"
      },
      {
        title: "2Pac - All Eyez On Me (feat. Syke)",
        url: "https://www.youtube.com/embed/tSFFuD-Fl_c",
        imgUrl: "https://i.ytimg.com/vi/tSFFuD-Fl_c/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 319,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739511744244,
        _id: "tSFFuD-Fl_c"
      },
      {
        title: "2Pac - Run Tha Streetz (feat. Michel'le, Mutah & Storm)",
        url: "https://www.youtube.com/embed/YjrQf-9gosA",
        imgUrl: "https://i.ytimg.com/vi/YjrQf-9gosA/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 351,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739535897718,
        _id: "YjrQf-9gosA"
      },
      {
        title: "2Pac - Ain't Hard 2 Find (feat. B-Legit, C-Bo, D-Shot, E-40 & Richie Rich)",
        url: "https://www.youtube.com/embed/irjx-43PYXM",
        imgUrl: "https://i.ytimg.com/vi/irjx-43PYXM/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 396,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739558476669,
        _id: "irjx-43PYXM"
      },
      {
        title: "2Pac - Heaven Ain't Hard 2 Find",
        url: "https://www.youtube.com/embed/vnRCDx6xMVs",
        imgUrl: "https://i.ytimg.com/vi/vnRCDx6xMVs/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 83,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739525372795,
        _id: "vnRCDx6xMVs"
      },
      {
        title: "2Pac - California Love (Short Radio Edit) (feat. Dr. Dre & Roger Troutman)",
        url: "https://www.youtube.com/embed/5kZFGo5r82o",
        imgUrl: "https://i.ytimg.com/vi/5kZFGo5r82o/hqdefault.jpg",
        addedBy: {
          _id: "UCjIILWUX89AHJmDpFCZ2-og",
          fullname: "Seven Hip-Hop",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mMIBaUXk5Vy0xMiC36_QAolSCQg_9fCrgASqDdlJT2c2s=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 188,
        likedBy: [],
        createdAt: 1631789808000,
        updatedAt: 1739553981436,
        _id: "5kZFGo5r82o"
      }
    ],
    _id: "PLNvnh4cN6-ATtLWZMdVVkEwms-srSDCAz",
    name: "Blank Entertainment",
    createdBy: {
      _id: "UCi4tJyAaIS07gSFRZAKHS1Q",
      fullname: "Blank Entertainment",
      imgUrl: "https://yt3.ggpht.com/YaVM2ulqiyy8wQ4O-lMSoYyDJk-RI5pR-K4QSXoG7yBQwS5HWS38mJuw6kDP5vAmDfeJBGQe=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1124679086000,
      updatedAt: 1739582361194
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Eminem - Lose Yourself [HD]",
        url: "https://www.youtube.com/embed/_Yhyp-_hX2s",
        imgUrl: "https://i.ytimg.com/vi/_Yhyp-_hX2s/hqdefault.jpg",
        addedBy: {
          _id: "UC5GOr7CavTbxAf18CKjukdg",
          fullname: "Radio Golcak",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_l7PqzcYrf354E8jS_WG589jUsRcX5vmXU0Qyo-SlfmNO8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 59,
        likedBy: [],
        createdAt: 1466847498000,
        updatedAt: 1739526040441,
        _id: "_Yhyp-_hX2s"
      },
      {
        title: "Eminem - Not Afraid",
        url: "https://www.youtube.com/embed/j5-yKhDd64s",
        imgUrl: "https://i.ytimg.com/vi/j5-yKhDd64s/hqdefault.jpg",
        addedBy: {
          _id: "UC5GOr7CavTbxAf18CKjukdg",
          fullname: "Radio Golcak",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_l7PqzcYrf354E8jS_WG589jUsRcX5vmXU0Qyo-SlfmNO8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 183,
        likedBy: [],
        createdAt: 1466847521000,
        updatedAt: 1739568657312,
        _id: "j5-yKhDd64s"
      },
      {
        title: "Eminem - Love The Way You Lie ft. Rihanna",
        url: "https://www.youtube.com/embed/uelHwf8o7_U",
        imgUrl: "https://i.ytimg.com/vi/uelHwf8o7_U/hqdefault.jpg",
        addedBy: {
          _id: "UC5GOr7CavTbxAf18CKjukdg",
          fullname: "Radio Golcak",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_l7PqzcYrf354E8jS_WG589jUsRcX5vmXU0Qyo-SlfmNO8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 176,
        likedBy: [],
        createdAt: 1466847957000,
        updatedAt: 1739510868876,
        _id: "uelHwf8o7_U"
      },
      {
        title: "Eminem - Rap God (Explicit)",
        url: "https://www.youtube.com/embed/XbGs_qK2PQA",
        imgUrl: "https://i.ytimg.com/vi/XbGs_qK2PQA/hqdefault.jpg",
        addedBy: {
          _id: "UC5GOr7CavTbxAf18CKjukdg",
          fullname: "Radio Golcak",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_l7PqzcYrf354E8jS_WG589jUsRcX5vmXU0Qyo-SlfmNO8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 175,
        likedBy: [],
        createdAt: 1466847544000,
        updatedAt: 1739559538146,
        _id: "XbGs_qK2PQA"
      },
      {
        title: "Radio Golcak - The Best Playlists on YouTube",
        url: "https://www.youtube.com/embed/NMCJYfutZ8Y",
        imgUrl: "https://i.ytimg.com/vi/NMCJYfutZ8Y/hqdefault.jpg",
        addedBy: {
          _id: "UC5GOr7CavTbxAf18CKjukdg",
          fullname: "Radio Golcak",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_l7PqzcYrf354E8jS_WG589jUsRcX5vmXU0Qyo-SlfmNO8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 167,
        likedBy: [],
        createdAt: 1481673063000,
        updatedAt: 1739513177804,
        _id: "NMCJYfutZ8Y"
      },
      {
        title: "Eminem - Without Me (Official Music Video)",
        url: "https://www.youtube.com/embed/YVkUvmDQ3HY",
        imgUrl: "https://i.ytimg.com/vi/YVkUvmDQ3HY/hqdefault.jpg",
        addedBy: {
          _id: "UC5GOr7CavTbxAf18CKjukdg",
          fullname: "Radio Golcak",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_l7PqzcYrf354E8jS_WG589jUsRcX5vmXU0Qyo-SlfmNO8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 155,
        likedBy: [],
        createdAt: 1466847570000,
        updatedAt: 1739526333724,
        _id: "YVkUvmDQ3HY"
      },
      {
        title: "Eminem - We Made You (Official Music Video)",
        url: "https://www.youtube.com/embed/RSdKmX2BH7o",
        imgUrl: "https://i.ytimg.com/vi/RSdKmX2BH7o/hqdefault.jpg",
        addedBy: {
          _id: "UC5GOr7CavTbxAf18CKjukdg",
          fullname: "Radio Golcak",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_l7PqzcYrf354E8jS_WG589jUsRcX5vmXU0Qyo-SlfmNO8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 360,
        likedBy: [],
        createdAt: 1466847599000,
        updatedAt: 1739514389112,
        _id: "RSdKmX2BH7o"
      },
      {
        title: "Eminem - The Real Slim Shady (Official Video - Clean Version)",
        url: "https://www.youtube.com/embed/eJO5HU_7_1w",
        imgUrl: "https://i.ytimg.com/vi/eJO5HU_7_1w/hqdefault.jpg",
        addedBy: {
          _id: "UC5GOr7CavTbxAf18CKjukdg",
          fullname: "Radio Golcak",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_l7PqzcYrf354E8jS_WG589jUsRcX5vmXU0Qyo-SlfmNO8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 101,
        likedBy: [],
        createdAt: 1466847633000,
        updatedAt: 1739530546619,
        _id: "eJO5HU_7_1w"
      },
      {
        title: "Eminem - Just Lose It (Official Music Video)",
        url: "https://www.youtube.com/embed/9dcVOmEQzKA",
        imgUrl: "https://i.ytimg.com/vi/9dcVOmEQzKA/hqdefault.jpg",
        addedBy: {
          _id: "UC5GOr7CavTbxAf18CKjukdg",
          fullname: "Radio Golcak",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_l7PqzcYrf354E8jS_WG589jUsRcX5vmXU0Qyo-SlfmNO8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 302,
        likedBy: [],
        createdAt: 1466847681000,
        updatedAt: 1739580437209,
        _id: "9dcVOmEQzKA"
      },
      {
        title: "Eminem - When I'm Gone (Official Music Video)",
        url: "https://www.youtube.com/embed/1wYNFfgrXTI",
        imgUrl: "https://i.ytimg.com/vi/1wYNFfgrXTI/hqdefault.jpg",
        addedBy: {
          _id: "UC5GOr7CavTbxAf18CKjukdg",
          fullname: "Radio Golcak",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_l7PqzcYrf354E8jS_WG589jUsRcX5vmXU0Qyo-SlfmNO8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 346,
        likedBy: [],
        createdAt: 1466847699000,
        updatedAt: 1739520116599,
        _id: "1wYNFfgrXTI"
      },
      {
        title: "Eminem - Like Toy Soldiers (Official Music Video)",
        url: "https://www.youtube.com/embed/lexLAjh8fPA",
        imgUrl: "https://i.ytimg.com/vi/lexLAjh8fPA/hqdefault.jpg",
        addedBy: {
          _id: "UC5GOr7CavTbxAf18CKjukdg",
          fullname: "Radio Golcak",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_l7PqzcYrf354E8jS_WG589jUsRcX5vmXU0Qyo-SlfmNO8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 73,
        likedBy: [],
        createdAt: 1466847848000,
        updatedAt: 1739512049698,
        _id: "lexLAjh8fPA"
      },
      {
        title: "Eminem - Sing For The Moment (Official Music Video)",
        url: "https://www.youtube.com/embed/D4hAVemuQXY",
        imgUrl: "https://i.ytimg.com/vi/D4hAVemuQXY/hqdefault.jpg",
        addedBy: {
          _id: "UC5GOr7CavTbxAf18CKjukdg",
          fullname: "Radio Golcak",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_l7PqzcYrf354E8jS_WG589jUsRcX5vmXU0Qyo-SlfmNO8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 72,
        likedBy: [],
        createdAt: 1466847865000,
        updatedAt: 1739549028223,
        _id: "D4hAVemuQXY"
      },
      {
        title: "Eminem - Cleanin' Out My Closet (Official Music Video)",
        url: "https://www.youtube.com/embed/RQ9_TKayu9s",
        imgUrl: "https://i.ytimg.com/vi/RQ9_TKayu9s/hqdefault.jpg",
        addedBy: {
          _id: "UC5GOr7CavTbxAf18CKjukdg",
          fullname: "Radio Golcak",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_l7PqzcYrf354E8jS_WG589jUsRcX5vmXU0Qyo-SlfmNO8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 264,
        likedBy: [],
        createdAt: 1466847886000,
        updatedAt: 1739534062382,
        _id: "RQ9_TKayu9s"
      },
      {
        title: "Eminem - Mockingbird [Official Music Video]",
        url: "https://www.youtube.com/embed/S9bCLPwzSC0",
        imgUrl: "https://i.ytimg.com/vi/S9bCLPwzSC0/hqdefault.jpg",
        addedBy: {
          _id: "UC5GOr7CavTbxAf18CKjukdg",
          fullname: "Radio Golcak",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_l7PqzcYrf354E8jS_WG589jUsRcX5vmXU0Qyo-SlfmNO8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 159,
        likedBy: [],
        createdAt: 1466847908000,
        updatedAt: 1739551654354,
        _id: "S9bCLPwzSC0"
      },
      {
        title: "Eminem - Beautiful (Official Music Video)",
        url: "https://www.youtube.com/embed/lgT1AidzRWM",
        imgUrl: "https://i.ytimg.com/vi/lgT1AidzRWM/hqdefault.jpg",
        addedBy: {
          _id: "UC5GOr7CavTbxAf18CKjukdg",
          fullname: "Radio Golcak",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_l7PqzcYrf354E8jS_WG589jUsRcX5vmXU0Qyo-SlfmNO8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 286,
        likedBy: [],
        createdAt: 1466847926000,
        updatedAt: 1739553434088,
        _id: "lgT1AidzRWM"
      }
    ],
    _id: "PLMEZyDHJojxNlKL-Pk06Za-1SMlBdQEMG",
    name: "msvogue23",
    createdBy: {
      _id: "UCstaTFTqZAC_OqfAq_JF6vA",
      fullname: "msvogue23",
      imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mGmM0bhAg2bY23_7d6DbAnWeQNfGdjx_rhesAoxPTTwNM=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1314784703000,
      updatedAt: 1739582430109
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Cardi B - WAP feat. Megan Thee Stallion [Official Music Video]",
        url: "https://www.youtube.com/embed/hsm4poTWjMs",
        imgUrl: "https://i.ytimg.com/vi/hsm4poTWjMs/hqdefault.jpg",
        addedBy: {
          _id: "UCxMAbVFmxKUVGAll0WVGpFw",
          fullname: "Cardi B",
          imgUrl: "https://yt3.ggpht.com/TPBNdSphJ6uErZqo4lRTOC_L-RtI4iWjI6tj5mokbbZ46f_pxE8NToKvXQfoNSDa8J6dsUUJ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 208,
        likedBy: [],
        createdAt: 1596773959000,
        updatedAt: 1739527715260,
        _id: "hsm4poTWjMs"
      },
      {
        title: "Live with Cardi B",
        url: "https://www.youtube.com/embed/BJ-13kw-D1s",
        imgUrl: "https://i.ytimg.com/vi/BJ-13kw-D1s/hqdefault.jpg",
        addedBy: {
          _id: "UCxMAbVFmxKUVGAll0WVGpFw",
          fullname: "Cardi B",
          imgUrl: "https://yt3.ggpht.com/TPBNdSphJ6uErZqo4lRTOC_L-RtI4iWjI6tj5mokbbZ46f_pxE8NToKvXQfoNSDa8J6dsUUJ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 195,
        likedBy: [],
        createdAt: 1601419901000,
        updatedAt: 1739518859876,
        _id: "BJ-13kw-D1s"
      },
      {
        title: "Cardi B - WAP feat. Megan Thee Stallion [Official Audio]",
        url: "https://www.youtube.com/embed/Wc5IbN4xw70",
        imgUrl: "https://i.ytimg.com/vi/Wc5IbN4xw70/hqdefault.jpg",
        addedBy: {
          _id: "UCxMAbVFmxKUVGAll0WVGpFw",
          fullname: "Cardi B",
          imgUrl: "https://yt3.ggpht.com/TPBNdSphJ6uErZqo4lRTOC_L-RtI4iWjI6tj5mokbbZ46f_pxE8NToKvXQfoNSDa8J6dsUUJ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 85,
        likedBy: [],
        createdAt: 1596773959000,
        updatedAt: 1739519067825,
        _id: "Wc5IbN4xw70"
      },
      {
        title: "Cardi B - WAP feat. Megan Thee Stallion [Radio Edit]",
        url: "https://www.youtube.com/embed/jelgdpCXlec",
        imgUrl: "https://i.ytimg.com/vi/jelgdpCXlec/hqdefault.jpg",
        addedBy: {
          _id: "UCxMAbVFmxKUVGAll0WVGpFw",
          fullname: "Cardi B",
          imgUrl: "https://yt3.ggpht.com/TPBNdSphJ6uErZqo4lRTOC_L-RtI4iWjI6tj5mokbbZ46f_pxE8NToKvXQfoNSDa8J6dsUUJ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 224,
        likedBy: [],
        createdAt: 1596773959000,
        updatedAt: 1739568886139,
        _id: "jelgdpCXlec"
      },
      {
        title: "Cardi B - WAP feat. Megan Thee Stallion [Official Lyric Video]",
        url: "https://www.youtube.com/embed/ohD6cyB8RI4",
        imgUrl: "https://i.ytimg.com/vi/ohD6cyB8RI4/hqdefault.jpg",
        addedBy: {
          _id: "UCxMAbVFmxKUVGAll0WVGpFw",
          fullname: "Cardi B",
          imgUrl: "https://yt3.ggpht.com/TPBNdSphJ6uErZqo4lRTOC_L-RtI4iWjI6tj5mokbbZ46f_pxE8NToKvXQfoNSDa8J6dsUUJ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 396,
        likedBy: [],
        createdAt: 1597848994000,
        updatedAt: 1739532542546,
        _id: "ohD6cyB8RI4"
      },
      {
        title: "Cardi B x Megan Thee Stallion - Inside the WAP (BTS) [Part 1]",
        url: "https://www.youtube.com/embed/FOm8LqH5lz8",
        imgUrl: "https://i.ytimg.com/vi/FOm8LqH5lz8/hqdefault.jpg",
        addedBy: {
          _id: "UCxMAbVFmxKUVGAll0WVGpFw",
          fullname: "Cardi B",
          imgUrl: "https://yt3.ggpht.com/TPBNdSphJ6uErZqo4lRTOC_L-RtI4iWjI6tj5mokbbZ46f_pxE8NToKvXQfoNSDa8J6dsUUJ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 33,
        likedBy: [],
        createdAt: 1599679772000,
        updatedAt: 1739557811696,
        _id: "FOm8LqH5lz8"
      },
      {
        title: "Cardi B - Up / WAP feat. Megan Thee Stallion (Live from the 63rd GRAMMYs ®️ 2021)",
        url: "https://www.youtube.com/embed/UnBZLFB7kLo",
        imgUrl: "https://i.ytimg.com/vi/UnBZLFB7kLo/hqdefault.jpg",
        addedBy: {
          _id: "UCxMAbVFmxKUVGAll0WVGpFw",
          fullname: "Cardi B",
          imgUrl: "https://yt3.ggpht.com/TPBNdSphJ6uErZqo4lRTOC_L-RtI4iWjI6tj5mokbbZ46f_pxE8NToKvXQfoNSDa8J6dsUUJ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 94,
        likedBy: [],
        createdAt: 1615786994000,
        updatedAt: 1739573411731,
        _id: "UnBZLFB7kLo"
      }
    ],
    _id: "PLR4Z7Y2LsgH7FRIFE9LjFTvMKIsD5Tg0g",
    name: "Cardi B",
    createdBy: {
      _id: "UCxMAbVFmxKUVGAll0WVGpFw",
      fullname: "Cardi B",
      imgUrl: "https://yt3.ggpht.com/TPBNdSphJ6uErZqo4lRTOC_L-RtI4iWjI6tj5mokbbZ46f_pxE8NToKvXQfoNSDa8J6dsUUJ=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1480603447000,
      updatedAt: 1739582483042
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    _id: "PLN4C_R4ZZCri3uG5xg9x5RcyzQ7JsYHqS",
    name: "Nicki Minaj",
    createdBy: {
      _id: "UC3jOd7GUMhpgJRBhiLzuLsg",
      fullname: "Nicki Minaj",
      imgUrl: "https://yt3.ggpht.com/50YeejQslEmP9_pNJHm3SGYRHRuVMuGafgsyrm2AjRNOE8P0bcIsDMA371xebxsd2zMQedm0TA=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1377703164000,
      updatedAt: 1739582529188
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    _id: "PLqeolX5-uk9OByhNnfDo6MYn0KA28m5Rn",
    name: "ScorpionsVEVO",
    createdBy: {
      _id: "UCqfmagAXUrUTHpJldTPRseg",
      fullname: "ScorpionsVEVO",
      imgUrl: "https://yt3.ggpht.com/v1Cr6_lKxC5ERii2furlU5CyjJ4MFcWjy9ev0V5f2qJiT4VMdOsWWDJ6NYtbRCOGZ6CN6IqcK28=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1242106157000,
      updatedAt: 1739582626262
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Wanna Be Startin' Somethin'",
        url: "https://www.youtube.com/embed/8KWf_-ofYgI",
        imgUrl: "https://i.ytimg.com/vi/8KWf_-ofYgI/hqdefault.jpg",
        addedBy: {
          _id: "UCTfQnoSX4wqmQi0t-O-h_FQ",
          fullname: "MusicVEVO",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m-wvAwKyNneCMdoErnw329VPrjfATdBmyawkiFTmB0Tmcb0mbPWFH98RzurWL1m0u29A=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 383,
        likedBy: [],
        createdAt: 1683064735000,
        updatedAt: 1739504225606,
        _id: "8KWf_-ofYgI"
      },
      {
        title: "Baby Be Mine",
        url: "https://www.youtube.com/embed/COSMzAASQj4",
        imgUrl: "https://i.ytimg.com/vi/COSMzAASQj4/hqdefault.jpg",
        addedBy: {
          _id: "UCTfQnoSX4wqmQi0t-O-h_FQ",
          fullname: "MusicVEVO",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m-wvAwKyNneCMdoErnw329VPrjfATdBmyawkiFTmB0Tmcb0mbPWFH98RzurWL1m0u29A=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 164,
        likedBy: [],
        createdAt: 1683064735000,
        updatedAt: 1739545865008,
        _id: "COSMzAASQj4"
      },
      {
        title: "The Girl Is Mine",
        url: "https://www.youtube.com/embed/SX5vM6F57_E",
        imgUrl: "https://i.ytimg.com/vi/SX5vM6F57_E/hqdefault.jpg",
        addedBy: {
          _id: "UCTfQnoSX4wqmQi0t-O-h_FQ",
          fullname: "MusicVEVO",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m-wvAwKyNneCMdoErnw329VPrjfATdBmyawkiFTmB0Tmcb0mbPWFH98RzurWL1m0u29A=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 297,
        likedBy: [],
        createdAt: 1683064735000,
        updatedAt: 1739502756586,
        _id: "SX5vM6F57_E"
      },
      {
        title: "Thriller",
        url: "https://www.youtube.com/embed/Z85lxckrtzg",
        imgUrl: "https://i.ytimg.com/vi/Z85lxckrtzg/hqdefault.jpg",
        addedBy: {
          _id: "UCTfQnoSX4wqmQi0t-O-h_FQ",
          fullname: "MusicVEVO",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m-wvAwKyNneCMdoErnw329VPrjfATdBmyawkiFTmB0Tmcb0mbPWFH98RzurWL1m0u29A=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 204,
        likedBy: [],
        createdAt: 1683064735000,
        updatedAt: 1739520307126,
        _id: "Z85lxckrtzg"
      },
      {
        title: "Beat It",
        url: "https://www.youtube.com/embed/kOn-HdEg6AQ",
        imgUrl: "https://i.ytimg.com/vi/kOn-HdEg6AQ/hqdefault.jpg",
        addedBy: {
          _id: "UCTfQnoSX4wqmQi0t-O-h_FQ",
          fullname: "MusicVEVO",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m-wvAwKyNneCMdoErnw329VPrjfATdBmyawkiFTmB0Tmcb0mbPWFH98RzurWL1m0u29A=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 122,
        likedBy: [],
        createdAt: 1683064735000,
        updatedAt: 1739496603243,
        _id: "kOn-HdEg6AQ"
      },
      {
        title: "Billie Jean",
        url: "https://www.youtube.com/embed/Kr4EQDVETuA",
        imgUrl: "https://i.ytimg.com/vi/Kr4EQDVETuA/hqdefault.jpg",
        addedBy: {
          _id: "UCTfQnoSX4wqmQi0t-O-h_FQ",
          fullname: "MusicVEVO",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m-wvAwKyNneCMdoErnw329VPrjfATdBmyawkiFTmB0Tmcb0mbPWFH98RzurWL1m0u29A=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 158,
        likedBy: [],
        createdAt: 1683064735000,
        updatedAt: 1739536789623,
        _id: "Kr4EQDVETuA"
      },
      {
        title: "Human Nature",
        url: "https://www.youtube.com/embed/oqLpko9Gprs",
        imgUrl: "https://i.ytimg.com/vi/oqLpko9Gprs/hqdefault.jpg",
        addedBy: {
          _id: "UCTfQnoSX4wqmQi0t-O-h_FQ",
          fullname: "MusicVEVO",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m-wvAwKyNneCMdoErnw329VPrjfATdBmyawkiFTmB0Tmcb0mbPWFH98RzurWL1m0u29A=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 242,
        likedBy: [],
        createdAt: 1683064735000,
        updatedAt: 1739582308596,
        _id: "oqLpko9Gprs"
      },
      {
        title: "P.Y.T. (Pretty Young Thing)",
        url: "https://www.youtube.com/embed/y32ejtuxSjM",
        imgUrl: "https://i.ytimg.com/vi/y32ejtuxSjM/hqdefault.jpg",
        addedBy: {
          _id: "UCTfQnoSX4wqmQi0t-O-h_FQ",
          fullname: "MusicVEVO",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m-wvAwKyNneCMdoErnw329VPrjfATdBmyawkiFTmB0Tmcb0mbPWFH98RzurWL1m0u29A=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 277,
        likedBy: [],
        createdAt: 1683064735000,
        updatedAt: 1739517995604,
        _id: "y32ejtuxSjM"
      },
      {
        title: "The Lady in My Life",
        url: "https://www.youtube.com/embed/Eqcw7tLnrd8",
        imgUrl: "https://i.ytimg.com/vi/Eqcw7tLnrd8/hqdefault.jpg",
        addedBy: {
          _id: "UCTfQnoSX4wqmQi0t-O-h_FQ",
          fullname: "MusicVEVO",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m-wvAwKyNneCMdoErnw329VPrjfATdBmyawkiFTmB0Tmcb0mbPWFH98RzurWL1m0u29A=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 93,
        likedBy: [],
        createdAt: 1683064735000,
        updatedAt: 1739580854620,
        _id: "Eqcw7tLnrd8"
      }
    ],
    _id: "PLFAcddgaFN8zqIJrTakvM9qWnR7iIrXnj",
    name: "Michael Jackson - Topic",
    createdBy: {
      _id: "UCoIOOL7QKuBhQHVKL8y7BEQ",
      fullname: "Michael Jackson - Topic",
      imgUrl: "https://yt3.ggpht.com/nvt02XjPB-lklNBuV8rI9BQOgD1l7geYdJBzTkgoFJTgdK_Fzv_eaoQ9jV4Vb9DWFks0QFzeog=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1371165416000,
      updatedAt: 1739582715114
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "01. N.W.A - Straight Outta Compton",
        url: "https://www.youtube.com/embed/kIJeJK0iZDE",
        imgUrl: "https://i.ytimg.com/vi/kIJeJK0iZDE/hqdefault.jpg",
        addedBy: {
          _id: "UC5HPMnG14ZkcRfTS2eLGEog",
          fullname: "O'Shea Jackson",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lO0Dc1xL3e5hX7riLsQGKxW8yIA7yF_SVhSjzLk_-2KfU=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 297,
        likedBy: [],
        createdAt: 1340821618000,
        updatedAt: 1739580460534,
        _id: "kIJeJK0iZDE"
      },
      {
        title: "02. N.W.A -  F _ _ _ tha Police",
        url: "https://www.youtube.com/embed/IxaSqKelRro",
        imgUrl: "https://i.ytimg.com/vi/IxaSqKelRro/hqdefault.jpg",
        addedBy: {
          _id: "UC5HPMnG14ZkcRfTS2eLGEog",
          fullname: "O'Shea Jackson",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lO0Dc1xL3e5hX7riLsQGKxW8yIA7yF_SVhSjzLk_-2KfU=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 280,
        likedBy: [],
        createdAt: 1340821618000,
        updatedAt: 1739508912038,
        _id: "IxaSqKelRro"
      },
      {
        title: "03. N.W.A - Gangsta Gangsta",
        url: "https://www.youtube.com/embed/_r1St4RX_Jw",
        imgUrl: "https://i.ytimg.com/vi/_r1St4RX_Jw/hqdefault.jpg",
        addedBy: {
          _id: "UC5HPMnG14ZkcRfTS2eLGEog",
          fullname: "O'Shea Jackson",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lO0Dc1xL3e5hX7riLsQGKxW8yIA7yF_SVhSjzLk_-2KfU=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 203,
        likedBy: [],
        createdAt: 1340821618000,
        updatedAt: 1739504606812,
        _id: "_r1St4RX_Jw"
      },
      {
        title: "04. N.W.A - If It Ain't Ruff",
        url: "https://www.youtube.com/embed/9_IqGa2yOsY",
        imgUrl: "https://i.ytimg.com/vi/9_IqGa2yOsY/hqdefault.jpg",
        addedBy: {
          _id: "UC5HPMnG14ZkcRfTS2eLGEog",
          fullname: "O'Shea Jackson",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lO0Dc1xL3e5hX7riLsQGKxW8yIA7yF_SVhSjzLk_-2KfU=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 291,
        likedBy: [],
        createdAt: 1340821618000,
        updatedAt: 1739541678255,
        _id: "9_IqGa2yOsY"
      },
      {
        title: "05. N.W.A - Parental Discretion Iz Advised",
        url: "https://www.youtube.com/embed/rz1Opgruj-Y",
        imgUrl: "https://i.ytimg.com/vi/rz1Opgruj-Y/hqdefault.jpg",
        addedBy: {
          _id: "UC5HPMnG14ZkcRfTS2eLGEog",
          fullname: "O'Shea Jackson",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lO0Dc1xL3e5hX7riLsQGKxW8yIA7yF_SVhSjzLk_-2KfU=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 115,
        likedBy: [],
        createdAt: 1340821618000,
        updatedAt: 1739528959816,
        _id: "rz1Opgruj-Y"
      },
      {
        title: "06. N.W.A - 8 Ball",
        url: "https://www.youtube.com/embed/0-8PaqXNDKc",
        imgUrl: "https://i.ytimg.com/vi/0-8PaqXNDKc/hqdefault.jpg",
        addedBy: {
          _id: "UC5HPMnG14ZkcRfTS2eLGEog",
          fullname: "O'Shea Jackson",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lO0Dc1xL3e5hX7riLsQGKxW8yIA7yF_SVhSjzLk_-2KfU=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 297,
        likedBy: [],
        createdAt: 1340821618000,
        updatedAt: 1739497980227,
        _id: "0-8PaqXNDKc"
      },
      {
        title: "07. N.W.A - Something Like Tha",
        url: "https://www.youtube.com/embed/tX2VqCv6dto",
        imgUrl: "https://i.ytimg.com/vi/tX2VqCv6dto/hqdefault.jpg",
        addedBy: {
          _id: "UC5HPMnG14ZkcRfTS2eLGEog",
          fullname: "O'Shea Jackson",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lO0Dc1xL3e5hX7riLsQGKxW8yIA7yF_SVhSjzLk_-2KfU=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 135,
        likedBy: [],
        createdAt: 1340821619000,
        updatedAt: 1739548332266,
        _id: "tX2VqCv6dto"
      },
      {
        title: "08. N.W.A -  Express Yourself",
        url: "https://www.youtube.com/embed/i9LQLmvNu-g",
        imgUrl: "https://i.ytimg.com/vi/i9LQLmvNu-g/hqdefault.jpg",
        addedBy: {
          _id: "UC5HPMnG14ZkcRfTS2eLGEog",
          fullname: "O'Shea Jackson",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lO0Dc1xL3e5hX7riLsQGKxW8yIA7yF_SVhSjzLk_-2KfU=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 279,
        likedBy: [],
        createdAt: 1340821619000,
        updatedAt: 1739554107067,
        _id: "i9LQLmvNu-g"
      },
      {
        title: "09. N.W.A - Compton's in the House",
        url: "https://www.youtube.com/embed/ZWqLt1kaQaQ",
        imgUrl: "https://i.ytimg.com/vi/ZWqLt1kaQaQ/hqdefault.jpg",
        addedBy: {
          _id: "UC5HPMnG14ZkcRfTS2eLGEog",
          fullname: "O'Shea Jackson",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lO0Dc1xL3e5hX7riLsQGKxW8yIA7yF_SVhSjzLk_-2KfU=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 71,
        likedBy: [],
        createdAt: 1340821619000,
        updatedAt: 1739535801858,
        _id: "ZWqLt1kaQaQ"
      },
      {
        title: "10. N.W.A - I Ain't Tha 1",
        url: "https://www.youtube.com/embed/HXPaUAyRIss",
        imgUrl: "https://i.ytimg.com/vi/HXPaUAyRIss/hqdefault.jpg",
        addedBy: {
          _id: "UC5HPMnG14ZkcRfTS2eLGEog",
          fullname: "O'Shea Jackson",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lO0Dc1xL3e5hX7riLsQGKxW8yIA7yF_SVhSjzLk_-2KfU=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 101,
        likedBy: [],
        createdAt: 1340821619000,
        updatedAt: 1739526858919,
        _id: "HXPaUAyRIss"
      },
      {
        title: "11. N.W.A - Dopeman",
        url: "https://www.youtube.com/embed/BEDbY0bmJgw",
        imgUrl: "https://i.ytimg.com/vi/BEDbY0bmJgw/hqdefault.jpg",
        addedBy: {
          _id: "UC5HPMnG14ZkcRfTS2eLGEog",
          fullname: "O'Shea Jackson",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lO0Dc1xL3e5hX7riLsQGKxW8yIA7yF_SVhSjzLk_-2KfU=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 344,
        likedBy: [],
        createdAt: 1340821619000,
        updatedAt: 1739572499586,
        _id: "BEDbY0bmJgw"
      },
      {
        title: "12. N.W.A - Quiet on Tha Set",
        url: "https://www.youtube.com/embed/UkFgszGhVGU",
        imgUrl: "https://i.ytimg.com/vi/UkFgszGhVGU/hqdefault.jpg",
        addedBy: {
          _id: "UC5HPMnG14ZkcRfTS2eLGEog",
          fullname: "O'Shea Jackson",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lO0Dc1xL3e5hX7riLsQGKxW8yIA7yF_SVhSjzLk_-2KfU=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 297,
        likedBy: [],
        createdAt: 1340821619000,
        updatedAt: 1739497793418,
        _id: "UkFgszGhVGU"
      },
      {
        title: "13. N.W.A - Something 2 Dance 2",
        url: "https://www.youtube.com/embed/IyT7ambAqtw",
        imgUrl: "https://i.ytimg.com/vi/IyT7ambAqtw/hqdefault.jpg",
        addedBy: {
          _id: "UC5HPMnG14ZkcRfTS2eLGEog",
          fullname: "O'Shea Jackson",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lO0Dc1xL3e5hX7riLsQGKxW8yIA7yF_SVhSjzLk_-2KfU=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 96,
        likedBy: [],
        createdAt: 1340821619000,
        updatedAt: 1739572383847,
        _id: "IyT7ambAqtw"
      }
    ],
    _id: "PLD5361CCD714F2A8A",
    name: "O'Shea Jackson",
    createdBy: {
      _id: "UC5HPMnG14ZkcRfTS2eLGEog",
      fullname: "O'Shea Jackson",
      imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lO0Dc1xL3e5hX7riLsQGKxW8yIA7yF_SVhSjzLk_-2KfU=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1295570089000,
      updatedAt: 1739582778040
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Purple Haze",
        url: "https://www.youtube.com/embed/cbG7HEEPE1o",
        imgUrl: "https://i.ytimg.com/vi/cbG7HEEPE1o/hqdefault.jpg",
        addedBy: {
          _id: "UCqnXx4LZbWT2QGw36W8fnNA",
          fullname: "Tom Inoccic",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_krdUKXHh_o8LTiPuLJE35bw4ibTclurp-hEJkmH1dv1UI=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 201,
        likedBy: [],
        createdAt: 1666967882000,
        updatedAt: 1739534702729,
        _id: "cbG7HEEPE1o"
      },
      {
        title: "Manic Depression",
        url: "https://www.youtube.com/embed/_OmzEQzaaU4",
        imgUrl: "https://i.ytimg.com/vi/_OmzEQzaaU4/hqdefault.jpg",
        addedBy: {
          _id: "UCqnXx4LZbWT2QGw36W8fnNA",
          fullname: "Tom Inoccic",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_krdUKXHh_o8LTiPuLJE35bw4ibTclurp-hEJkmH1dv1UI=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 281,
        likedBy: [],
        createdAt: 1666967882000,
        updatedAt: 1739575214287,
        _id: "_OmzEQzaaU4"
      },
      {
        title: "Hey Joe",
        url: "https://www.youtube.com/embed/Smp6AepJIhM",
        imgUrl: "https://i.ytimg.com/vi/Smp6AepJIhM/hqdefault.jpg",
        addedBy: {
          _id: "UCqnXx4LZbWT2QGw36W8fnNA",
          fullname: "Tom Inoccic",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_krdUKXHh_o8LTiPuLJE35bw4ibTclurp-hEJkmH1dv1UI=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 288,
        likedBy: [],
        createdAt: 1666967882000,
        updatedAt: 1739504503740,
        _id: "Smp6AepJIhM"
      },
      {
        title: "Love Or Confusion",
        url: "https://www.youtube.com/embed/1b9BgHDTgWA",
        imgUrl: "https://i.ytimg.com/vi/1b9BgHDTgWA/hqdefault.jpg",
        addedBy: {
          _id: "UCqnXx4LZbWT2QGw36W8fnNA",
          fullname: "Tom Inoccic",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_krdUKXHh_o8LTiPuLJE35bw4ibTclurp-hEJkmH1dv1UI=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 343,
        likedBy: [],
        createdAt: 1666967882000,
        updatedAt: 1739497583506,
        _id: "1b9BgHDTgWA"
      },
      {
        title: "May This Be Love",
        url: "https://www.youtube.com/embed/T4MBwvZWOQE",
        imgUrl: "https://i.ytimg.com/vi/T4MBwvZWOQE/hqdefault.jpg",
        addedBy: {
          _id: "UCqnXx4LZbWT2QGw36W8fnNA",
          fullname: "Tom Inoccic",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_krdUKXHh_o8LTiPuLJE35bw4ibTclurp-hEJkmH1dv1UI=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 150,
        likedBy: [],
        createdAt: 1666967882000,
        updatedAt: 1739506317912,
        _id: "T4MBwvZWOQE"
      },
      {
        title: "I Don't Live Today",
        url: "https://www.youtube.com/embed/o284JiI4j8w",
        imgUrl: "https://i.ytimg.com/vi/o284JiI4j8w/hqdefault.jpg",
        addedBy: {
          _id: "UCqnXx4LZbWT2QGw36W8fnNA",
          fullname: "Tom Inoccic",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_krdUKXHh_o8LTiPuLJE35bw4ibTclurp-hEJkmH1dv1UI=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 138,
        likedBy: [],
        createdAt: 1666967882000,
        updatedAt: 1739510227752,
        _id: "o284JiI4j8w"
      },
      {
        title: "The Wind Cries Mary",
        url: "https://www.youtube.com/embed/Z7K5VCCdOEM",
        imgUrl: "https://i.ytimg.com/vi/Z7K5VCCdOEM/hqdefault.jpg",
        addedBy: {
          _id: "UCqnXx4LZbWT2QGw36W8fnNA",
          fullname: "Tom Inoccic",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_krdUKXHh_o8LTiPuLJE35bw4ibTclurp-hEJkmH1dv1UI=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 346,
        likedBy: [],
        createdAt: 1666967882000,
        updatedAt: 1739512907667,
        _id: "Z7K5VCCdOEM"
      },
      {
        title: "Fire",
        url: "https://www.youtube.com/embed/9-2m07d2Neo",
        imgUrl: "https://i.ytimg.com/vi/9-2m07d2Neo/hqdefault.jpg",
        addedBy: {
          _id: "UCqnXx4LZbWT2QGw36W8fnNA",
          fullname: "Tom Inoccic",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_krdUKXHh_o8LTiPuLJE35bw4ibTclurp-hEJkmH1dv1UI=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 377,
        likedBy: [],
        createdAt: 1666967882000,
        updatedAt: 1739578989654,
        _id: "9-2m07d2Neo"
      },
      {
        title: "Third Stone From The Sun",
        url: "https://www.youtube.com/embed/Zts332Y-nyg",
        imgUrl: "https://i.ytimg.com/vi/Zts332Y-nyg/hqdefault.jpg",
        addedBy: {
          _id: "UCqnXx4LZbWT2QGw36W8fnNA",
          fullname: "Tom Inoccic",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_krdUKXHh_o8LTiPuLJE35bw4ibTclurp-hEJkmH1dv1UI=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 262,
        likedBy: [],
        createdAt: 1666967882000,
        updatedAt: 1739543312188,
        _id: "Zts332Y-nyg"
      },
      {
        title: "Foxey Lady",
        url: "https://www.youtube.com/embed/ThkRVTd-tPc",
        imgUrl: "https://i.ytimg.com/vi/ThkRVTd-tPc/hqdefault.jpg",
        addedBy: {
          _id: "UCqnXx4LZbWT2QGw36W8fnNA",
          fullname: "Tom Inoccic",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_krdUKXHh_o8LTiPuLJE35bw4ibTclurp-hEJkmH1dv1UI=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 334,
        likedBy: [],
        createdAt: 1666967882000,
        updatedAt: 1739503026020,
        _id: "ThkRVTd-tPc"
      },
      {
        title: "Are You Experienced?",
        url: "https://www.youtube.com/embed/rD6y7aOS0NA",
        imgUrl: "https://i.ytimg.com/vi/rD6y7aOS0NA/hqdefault.jpg",
        addedBy: {
          _id: "UCqnXx4LZbWT2QGw36W8fnNA",
          fullname: "Tom Inoccic",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_krdUKXHh_o8LTiPuLJE35bw4ibTclurp-hEJkmH1dv1UI=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 325,
        likedBy: [],
        createdAt: 1666967882000,
        updatedAt: 1739503198148,
        _id: "rD6y7aOS0NA"
      },
      {
        title: "Stone Free",
        url: "https://www.youtube.com/embed/66COu2TpcyQ",
        imgUrl: "https://i.ytimg.com/vi/66COu2TpcyQ/hqdefault.jpg",
        addedBy: {
          _id: "UCqnXx4LZbWT2QGw36W8fnNA",
          fullname: "Tom Inoccic",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_krdUKXHh_o8LTiPuLJE35bw4ibTclurp-hEJkmH1dv1UI=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 191,
        likedBy: [],
        createdAt: 1666967882000,
        updatedAt: 1739521210981,
        _id: "66COu2TpcyQ"
      },
      {
        title: "51st Anniversary",
        url: "https://www.youtube.com/embed/PeoofZswajI",
        imgUrl: "https://i.ytimg.com/vi/PeoofZswajI/hqdefault.jpg",
        addedBy: {
          _id: "UCqnXx4LZbWT2QGw36W8fnNA",
          fullname: "Tom Inoccic",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_krdUKXHh_o8LTiPuLJE35bw4ibTclurp-hEJkmH1dv1UI=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 372,
        likedBy: [],
        createdAt: 1666967882000,
        updatedAt: 1739575512759,
        _id: "PeoofZswajI"
      },
      {
        title: "Highway Chile",
        url: "https://www.youtube.com/embed/KR13r55Avjc",
        imgUrl: "https://i.ytimg.com/vi/KR13r55Avjc/hqdefault.jpg",
        addedBy: {
          _id: "UCqnXx4LZbWT2QGw36W8fnNA",
          fullname: "Tom Inoccic",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_krdUKXHh_o8LTiPuLJE35bw4ibTclurp-hEJkmH1dv1UI=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 89,
        likedBy: [],
        createdAt: 1666967882000,
        updatedAt: 1739507495026,
        _id: "KR13r55Avjc"
      },
      {
        title: "Can You See Me",
        url: "https://www.youtube.com/embed/1K9Rf2BkZDY",
        imgUrl: "https://i.ytimg.com/vi/1K9Rf2BkZDY/hqdefault.jpg",
        addedBy: {
          _id: "UCqnXx4LZbWT2QGw36W8fnNA",
          fullname: "Tom Inoccic",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_krdUKXHh_o8LTiPuLJE35bw4ibTclurp-hEJkmH1dv1UI=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 51,
        likedBy: [],
        createdAt: 1666967882000,
        updatedAt: 1739548396871,
        _id: "1K9Rf2BkZDY"
      },
      {
        title: "Remember",
        url: "https://www.youtube.com/embed/LoQY_YVy6kc",
        imgUrl: "https://i.ytimg.com/vi/LoQY_YVy6kc/hqdefault.jpg",
        addedBy: {
          _id: "UCqnXx4LZbWT2QGw36W8fnNA",
          fullname: "Tom Inoccic",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_krdUKXHh_o8LTiPuLJE35bw4ibTclurp-hEJkmH1dv1UI=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 187,
        likedBy: [],
        createdAt: 1666967882000,
        updatedAt: 1739501356495,
        _id: "LoQY_YVy6kc"
      },
      {
        title: "Red House",
        url: "https://www.youtube.com/embed/_whI9m0SFys",
        imgUrl: "https://i.ytimg.com/vi/_whI9m0SFys/hqdefault.jpg",
        addedBy: {
          _id: "UCqnXx4LZbWT2QGw36W8fnNA",
          fullname: "Tom Inoccic",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_krdUKXHh_o8LTiPuLJE35bw4ibTclurp-hEJkmH1dv1UI=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 289,
        likedBy: [],
        createdAt: 1666967882000,
        updatedAt: 1739563430609,
        _id: "_whI9m0SFys"
      }
    ],
    _id: "PL1RRNXldMeRFm7CqtN44oav-TgaWT3yt_",
    name: "Jimi Hendrix - Topic",
    createdBy: {
      _id: "UC5NwXf8hOgZgInaYiOCZmUg",
      fullname: "Jimi Hendrix - Topic",
      imgUrl: "https://yt3.ggpht.com/v6AcaTJlTIV-gPB8Q_2AFA331R2ghK_SHHUBCaq6qZofKmCIUpDwgcx4Et2VsSx3IAzlnnuHDA=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1368720421000,
      updatedAt: 1739582952108
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "1200 Micrograms - DMT",
        url: "https://www.youtube.com/embed/6BIBQ6SFBAY",
        imgUrl: "https://i.ytimg.com/vi/6BIBQ6SFBAY/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 327,
        likedBy: [],
        createdAt: 1583156223000,
        updatedAt: 1739538606056,
        _id: "6BIBQ6SFBAY"
      },
      {
        title: "1200 Micrograms - Rock Into The Future",
        url: "https://www.youtube.com/embed/uWsUKoMoWNA",
        imgUrl: "https://i.ytimg.com/vi/uWsUKoMoWNA/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 360,
        likedBy: [],
        createdAt: 1583156223000,
        updatedAt: 1739579916652,
        _id: "uWsUKoMoWNA"
      },
      {
        title: "1200 Micrograms - Let It Roll",
        url: "https://www.youtube.com/embed/wbuY2-JUi60",
        imgUrl: "https://i.ytimg.com/vi/wbuY2-JUi60/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 301,
        likedBy: [],
        createdAt: 1583156223000,
        updatedAt: 1739578637470,
        _id: "wbuY2-JUi60"
      },
      {
        title: "1200 Micrograms - The Rush (New Version)",
        url: "https://www.youtube.com/embed/5elmqa_Uaqw",
        imgUrl: "https://i.ytimg.com/vi/5elmqa_Uaqw/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 343,
        likedBy: [],
        createdAt: 1583156223000,
        updatedAt: 1739573001785,
        _id: "5elmqa_Uaqw"
      },
      {
        title: "1200 Micrograms - Acid For Nothing",
        url: "https://www.youtube.com/embed/xNxkbrSMkR4",
        imgUrl: "https://i.ytimg.com/vi/xNxkbrSMkR4/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 400,
        likedBy: [],
        createdAt: 1583156223000,
        updatedAt: 1739530709532,
        _id: "xNxkbrSMkR4"
      },
      {
        title: "1200 Micrograms - Mescaline",
        url: "https://www.youtube.com/embed/ZOZbbQgLKWs",
        imgUrl: "https://i.ytimg.com/vi/ZOZbbQgLKWs/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 219,
        likedBy: [],
        createdAt: 1583156223000,
        updatedAt: 1739538190086,
        _id: "ZOZbbQgLKWs"
      },
      {
        title: "1200 Micrograms - Speed Freak",
        url: "https://www.youtube.com/embed/VWK8LAWwQp0",
        imgUrl: "https://i.ytimg.com/vi/VWK8LAWwQp0/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 390,
        likedBy: [],
        createdAt: 1583156223000,
        updatedAt: 1739550130170,
        _id: "VWK8LAWwQp0"
      },
      {
        title: "1200 Micrograms - The Changa Zone",
        url: "https://www.youtube.com/embed/okEubZvFL5w",
        imgUrl: "https://i.ytimg.com/vi/okEubZvFL5w/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 97,
        likedBy: [],
        createdAt: 1583156491000,
        updatedAt: 1739515990139,
        _id: "okEubZvFL5w"
      },
      {
        title: "1200 Micrograms - Like A Balloon",
        url: "https://www.youtube.com/embed/PjKmg3AUUJo",
        imgUrl: "https://i.ytimg.com/vi/PjKmg3AUUJo/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 321,
        likedBy: [],
        createdAt: 1583156526000,
        updatedAt: 1739538868303,
        _id: "PjKmg3AUUJo"
      },
      {
        title: "GMS - Juice (1200 Micrograms Remix)",
        url: "https://www.youtube.com/embed/AKUtdsmFu3M",
        imgUrl: "https://i.ytimg.com/vi/AKUtdsmFu3M/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 267,
        likedBy: [],
        createdAt: 1583156563000,
        updatedAt: 1739513544082,
        _id: "AKUtdsmFu3M"
      },
      {
        title: "1200 Micrograms - High paradise",
        url: "https://www.youtube.com/embed/TeVSS6nAq7U",
        imgUrl: "https://i.ytimg.com/vi/TeVSS6nAq7U/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 140,
        likedBy: [],
        createdAt: 1583156615000,
        updatedAt: 1739579455876,
        _id: "TeVSS6nAq7U"
      }
    ],
    _id: "PL84vj9YIz49GrR64tn3HQI_F3_zBpjqmI",
    name: "Trancentral",
    createdBy: {
      _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
      fullname: "Trancentral",
      imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1404387277000,
      updatedAt: 1739583045041
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "AFGIN - OLD IS GOLD",
        url: "https://www.youtube.com/embed/LB4QKvDCW1A",
        imgUrl: "https://i.ytimg.com/vi/LB4QKvDCW1A/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 298,
        likedBy: [],
        createdAt: 1629919940000,
        updatedAt: 1739521317988,
        _id: "LB4QKvDCW1A"
      },
      {
        title: "Afgin - Dimensional",
        url: "https://www.youtube.com/embed/FZw_NQ637HI",
        imgUrl: "https://i.ytimg.com/vi/FZw_NQ637HI/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 316,
        likedBy: [],
        createdAt: 1629919947000,
        updatedAt: 1739515080606,
        _id: "FZw_NQ637HI"
      },
      {
        title: "AFGIN - AMANITA",
        url: "https://www.youtube.com/embed/hevaFjVjQmk",
        imgUrl: "https://i.ytimg.com/vi/hevaFjVjQmk/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 312,
        likedBy: [],
        createdAt: 1629919957000,
        updatedAt: 1739577777357,
        _id: "hevaFjVjQmk"
      },
      {
        title: "Afgin - Journey Through Acid",
        url: "https://www.youtube.com/embed/QV5LOfMWMMY",
        imgUrl: "https://i.ytimg.com/vi/QV5LOfMWMMY/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 270,
        likedBy: [],
        createdAt: 1629919963000,
        updatedAt: 1739553189842,
        _id: "QV5LOfMWMMY"
      },
      {
        title: "Afgin - Goa Ahead",
        url: "https://www.youtube.com/embed/4LsQpzMP7g8",
        imgUrl: "https://i.ytimg.com/vi/4LsQpzMP7g8/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 242,
        likedBy: [],
        createdAt: 1629919970000,
        updatedAt: 1739522016312,
        _id: "4LsQpzMP7g8"
      },
      {
        title: "09 - Afgin - Cleopatra",
        url: "https://www.youtube.com/embed/Zr0TR18hFQ0",
        imgUrl: "https://i.ytimg.com/vi/Zr0TR18hFQ0/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 347,
        likedBy: [],
        createdAt: 1629919976000,
        updatedAt: 1739565841639,
        _id: "Zr0TR18hFQ0"
      },
      {
        title: "AFGIN - FLY WITH ME",
        url: "https://www.youtube.com/embed/OqPtSB2wk0M",
        imgUrl: "https://i.ytimg.com/vi/OqPtSB2wk0M/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 303,
        likedBy: [],
        createdAt: 1629919982000,
        updatedAt: 1739582086483,
        _id: "OqPtSB2wk0M"
      },
      {
        title: "Afgin - 10000 Shapes",
        url: "https://www.youtube.com/embed/2fs-HaWc62A",
        imgUrl: "https://i.ytimg.com/vi/2fs-HaWc62A/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 221,
        likedBy: [],
        createdAt: 1629919987000,
        updatedAt: 1739559812212,
        _id: "2fs-HaWc62A"
      },
      {
        title: "Afgin - Return to the Source",
        url: "https://www.youtube.com/embed/Mvh8cZeOC1o",
        imgUrl: "https://i.ytimg.com/vi/Mvh8cZeOC1o/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 73,
        likedBy: [],
        createdAt: 1629919993000,
        updatedAt: 1739521372033,
        _id: "Mvh8cZeOC1o"
      },
      {
        title: "Afgin - Solar Lights",
        url: "https://www.youtube.com/embed/7pO8-CPC8ZM",
        imgUrl: "https://i.ytimg.com/vi/7pO8-CPC8ZM/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 267,
        likedBy: [],
        createdAt: 1629919999000,
        updatedAt: 1739535736313,
        _id: "7pO8-CPC8ZM"
      }
    ],
    _id: "PL84vj9YIz49F63ZSGTVvw7H_AOoy2NDtQ",
    name: "Gai Edri",
    createdBy: {
      _id: "UCKAySbPBIZTqtlEIVqj1lcw",
      fullname: "Gai Edri",
      imgUrl: "https://yt3.ggpht.com/6EwAkB8Roarv6zVRgmXoAKDqOpBDeCvpveanjbEMNpFyuElx13DJldYk0hPwmT_bzkM8bGZ4Gw=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1152524277000,
      updatedAt: 1739583142304
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "E-Mantra - Fall Of Icarus",
        url: "https://www.youtube.com/embed/hquhkSl1pT4",
        imgUrl: "https://i.ytimg.com/vi/hquhkSl1pT4/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 101,
        likedBy: [],
        createdAt: 1626808329000,
        updatedAt: 1739520323768,
        _id: "hquhkSl1pT4"
      },
      {
        title: "E-Mantra - Xibalba",
        url: "https://www.youtube.com/embed/kCPO8XGBn5s",
        imgUrl: "https://i.ytimg.com/vi/kCPO8XGBn5s/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 250,
        likedBy: [],
        createdAt: 1626808336000,
        updatedAt: 1739550233829,
        _id: "kCPO8XGBn5s"
      },
      {
        title: "E-Mantra - At The Foothills Of Kogaion ᴴᴰ",
        url: "https://www.youtube.com/embed/K113ZTG7PPs",
        imgUrl: "https://i.ytimg.com/vi/K113ZTG7PPs/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 71,
        likedBy: [],
        createdAt: 1626808345000,
        updatedAt: 1739539465194,
        _id: "K113ZTG7PPs"
      },
      {
        title: "E-Mantra - Rise Of The Dacians ᴴᴰ",
        url: "https://www.youtube.com/embed/pVKShVSbZ1I",
        imgUrl: "https://i.ytimg.com/vi/pVKShVSbZ1I/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 110,
        likedBy: [],
        createdAt: 1626808352000,
        updatedAt: 1739501215352,
        _id: "pVKShVSbZ1I"
      },
      {
        title: "E-Mantra - Summoning Necromancer",
        url: "https://www.youtube.com/embed/u4V6Dbp-Sfo",
        imgUrl: "https://i.ytimg.com/vi/u4V6Dbp-Sfo/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 93,
        likedBy: [],
        createdAt: 1626808361000,
        updatedAt: 1739501311461,
        _id: "u4V6Dbp-Sfo"
      },
      {
        title: "E-Mantra - Rusalka ᴴᴰ",
        url: "https://www.youtube.com/embed/G_6ZzPA2_Pw",
        imgUrl: "https://i.ytimg.com/vi/G_6ZzPA2_Pw/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 240,
        likedBy: [],
        createdAt: 1626808368000,
        updatedAt: 1739519323343,
        _id: "G_6ZzPA2_Pw"
      },
      {
        title: "E-Mantra Ayahuasca",
        url: "https://www.youtube.com/embed/e4TAvcPqtBQ",
        imgUrl: "https://i.ytimg.com/vi/e4TAvcPqtBQ/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 211,
        likedBy: [],
        createdAt: 1626808375000,
        updatedAt: 1739531235190,
        _id: "e4TAvcPqtBQ"
      },
      {
        title: "E-Mantra - Hermetika",
        url: "https://www.youtube.com/embed/CZBlq_M_zDw",
        imgUrl: "https://i.ytimg.com/vi/CZBlq_M_zDw/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 94,
        likedBy: [],
        createdAt: 1626808423000,
        updatedAt: 1739581282787,
        _id: "CZBlq_M_zDw"
      },
      {
        title: "E-Mantra - Ninive Under The Stars (Night Hex Remix)",
        url: "https://www.youtube.com/embed/MvAiYb8dIak",
        imgUrl: "https://i.ytimg.com/vi/MvAiYb8dIak/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 134,
        likedBy: [],
        createdAt: 1626808386000,
        updatedAt: 1739518170053,
        _id: "MvAiYb8dIak"
      },
      {
        title: "E-MANTRA - Long Siberian Night",
        url: "https://www.youtube.com/embed/TTOphgzslak",
        imgUrl: "https://i.ytimg.com/vi/TTOphgzslak/hqdefault.jpg",
        addedBy: {
          _id: "UCPvkTCeGc0U7KUL5QVcKF-w",
          fullname: "Trancentral",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lweS3sM5_ixQuek_95HMezADC0a-0E6M_dJsF_jUNfty4=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 356,
        likedBy: [],
        createdAt: 1626808392000,
        updatedAt: 1739515455114,
        _id: "TTOphgzslak"
      }
    ],
    _id: "PL84vj9YIz49HoSNkbUkIODrf93F8nM0Id",
    name: "Suntrip Records & Classic Goa Trax",
    createdBy: {
      _id: "UCEjxeDgkB8mcu-hommZe_NA",
      fullname: "Suntrip Records & Classic Goa Trax",
      imgUrl: "https://yt3.ggpht.com/3OC_XRAIm0dxswnocZqUkha4Cd3PFgOg7bvZLrakbBm6Q7a1Qq2yfYZnE2RTyR8ldnObtdo-1A=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1385478351000,
      updatedAt: 1739583169121
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Daft Punk - One More Time (Official Video)",
        url: "https://www.youtube.com/embed/FGBhQbmPwH8",
        imgUrl: "https://i.ytimg.com/vi/FGBhQbmPwH8/hqdefault.jpg",
        addedBy: {
          _id: "UC_kRDKYrUlrbtrSiyu5Tflg",
          fullname: "Daft Punk",
          imgUrl: "https://yt3.ggpht.com/TPq4rBZZrU9AyYVuAiG6ndO61ZZ-8kckaXNI_k6TqfabWhCnhx0CY9-ilMFaE2Xn9yCt9s8b=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 221,
        likedBy: [],
        createdAt: 1367257191000,
        updatedAt: 1739498557202,
        _id: "FGBhQbmPwH8"
      },
      {
        title: "Daft Punk - Aerodynamic (Official Video)",
        url: "https://www.youtube.com/embed/L93-7vRfxNs",
        imgUrl: "https://i.ytimg.com/vi/L93-7vRfxNs/hqdefault.jpg",
        addedBy: {
          _id: "UC_kRDKYrUlrbtrSiyu5Tflg",
          fullname: "Daft Punk",
          imgUrl: "https://yt3.ggpht.com/TPq4rBZZrU9AyYVuAiG6ndO61ZZ-8kckaXNI_k6TqfabWhCnhx0CY9-ilMFaE2Xn9yCt9s8b=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 120,
        likedBy: [],
        createdAt: 1367257211000,
        updatedAt: 1739540550386,
        _id: "L93-7vRfxNs"
      },
      {
        title: "Daft Punk - Digital Love (Official Video)",
        url: "https://www.youtube.com/embed/FxzBvqY5PP0",
        imgUrl: "https://i.ytimg.com/vi/FxzBvqY5PP0/hqdefault.jpg",
        addedBy: {
          _id: "UC_kRDKYrUlrbtrSiyu5Tflg",
          fullname: "Daft Punk",
          imgUrl: "https://yt3.ggpht.com/TPq4rBZZrU9AyYVuAiG6ndO61ZZ-8kckaXNI_k6TqfabWhCnhx0CY9-ilMFaE2Xn9yCt9s8b=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 364,
        likedBy: [],
        createdAt: 1433430230000,
        updatedAt: 1739507484185,
        _id: "FxzBvqY5PP0"
      },
      {
        title: "Daft Punk - Harder, Better, Faster, Stronger (Official Video)",
        url: "https://www.youtube.com/embed/gAjR4_CbPpQ",
        imgUrl: "https://i.ytimg.com/vi/gAjR4_CbPpQ/hqdefault.jpg",
        addedBy: {
          _id: "UC_kRDKYrUlrbtrSiyu5Tflg",
          fullname: "Daft Punk",
          imgUrl: "https://yt3.ggpht.com/TPq4rBZZrU9AyYVuAiG6ndO61ZZ-8kckaXNI_k6TqfabWhCnhx0CY9-ilMFaE2Xn9yCt9s8b=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 55,
        likedBy: [],
        createdAt: 1367257253000,
        updatedAt: 1739522761209,
        _id: "gAjR4_CbPpQ"
      },
      {
        title: "Daft Punk - Crescendolls (Official Video)",
        url: "https://www.youtube.com/embed/6S3ISlvlEbs",
        imgUrl: "https://i.ytimg.com/vi/6S3ISlvlEbs/hqdefault.jpg",
        addedBy: {
          _id: "UC_kRDKYrUlrbtrSiyu5Tflg",
          fullname: "Daft Punk",
          imgUrl: "https://yt3.ggpht.com/TPq4rBZZrU9AyYVuAiG6ndO61ZZ-8kckaXNI_k6TqfabWhCnhx0CY9-ilMFaE2Xn9yCt9s8b=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 157,
        likedBy: [],
        createdAt: 1367257274000,
        updatedAt: 1739543781808,
        _id: "6S3ISlvlEbs"
      },
      {
        title: "Daft Punk - Nightvision (Official Video)",
        url: "https://www.youtube.com/embed/xBTqRd09y3E",
        imgUrl: "https://i.ytimg.com/vi/xBTqRd09y3E/hqdefault.jpg",
        addedBy: {
          _id: "UC_kRDKYrUlrbtrSiyu5Tflg",
          fullname: "Daft Punk",
          imgUrl: "https://yt3.ggpht.com/TPq4rBZZrU9AyYVuAiG6ndO61ZZ-8kckaXNI_k6TqfabWhCnhx0CY9-ilMFaE2Xn9yCt9s8b=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 361,
        likedBy: [],
        createdAt: 1367257305000,
        updatedAt: 1739520295165,
        _id: "xBTqRd09y3E"
      },
      {
        title: "Daft Punk - Superheroes (Official Video)",
        url: "https://www.youtube.com/embed/bRt5z880CFY",
        imgUrl: "https://i.ytimg.com/vi/bRt5z880CFY/hqdefault.jpg",
        addedBy: {
          _id: "UC_kRDKYrUlrbtrSiyu5Tflg",
          fullname: "Daft Punk",
          imgUrl: "https://yt3.ggpht.com/TPq4rBZZrU9AyYVuAiG6ndO61ZZ-8kckaXNI_k6TqfabWhCnhx0CY9-ilMFaE2Xn9yCt9s8b=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 102,
        likedBy: [],
        createdAt: 1367257341000,
        updatedAt: 1739509128240,
        _id: "bRt5z880CFY"
      },
      {
        title: "Daft Punk - High Life (Official Video)",
        url: "https://www.youtube.com/embed/HoQN7K6HdRw",
        imgUrl: "https://i.ytimg.com/vi/HoQN7K6HdRw/hqdefault.jpg",
        addedBy: {
          _id: "UC_kRDKYrUlrbtrSiyu5Tflg",
          fullname: "Daft Punk",
          imgUrl: "https://yt3.ggpht.com/TPq4rBZZrU9AyYVuAiG6ndO61ZZ-8kckaXNI_k6TqfabWhCnhx0CY9-ilMFaE2Xn9yCt9s8b=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 257,
        likedBy: [],
        createdAt: 1367257359000,
        updatedAt: 1739540909117,
        _id: "HoQN7K6HdRw"
      },
      {
        title: "Daft Punk - Something About Us (Official Video)",
        url: "https://www.youtube.com/embed/sOS9aOIXPEk",
        imgUrl: "https://i.ytimg.com/vi/sOS9aOIXPEk/hqdefault.jpg",
        addedBy: {
          _id: "UC_kRDKYrUlrbtrSiyu5Tflg",
          fullname: "Daft Punk",
          imgUrl: "https://yt3.ggpht.com/TPq4rBZZrU9AyYVuAiG6ndO61ZZ-8kckaXNI_k6TqfabWhCnhx0CY9-ilMFaE2Xn9yCt9s8b=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 53,
        likedBy: [],
        createdAt: 1367257377000,
        updatedAt: 1739568428963,
        _id: "sOS9aOIXPEk"
      },
      {
        title: "Daft Punk - Voyager (Official Video)",
        url: "https://www.youtube.com/embed/CqZgd6-xQl8",
        imgUrl: "https://i.ytimg.com/vi/CqZgd6-xQl8/hqdefault.jpg",
        addedBy: {
          _id: "UC_kRDKYrUlrbtrSiyu5Tflg",
          fullname: "Daft Punk",
          imgUrl: "https://yt3.ggpht.com/TPq4rBZZrU9AyYVuAiG6ndO61ZZ-8kckaXNI_k6TqfabWhCnhx0CY9-ilMFaE2Xn9yCt9s8b=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 139,
        likedBy: [],
        createdAt: 1367257397000,
        updatedAt: 1739571777769,
        _id: "CqZgd6-xQl8"
      },
      {
        title: "Daft Punk - Veridis Quo (Official Video)",
        url: "https://www.youtube.com/embed/HhZaHf8RP6g",
        imgUrl: "https://i.ytimg.com/vi/HhZaHf8RP6g/hqdefault.jpg",
        addedBy: {
          _id: "UC_kRDKYrUlrbtrSiyu5Tflg",
          fullname: "Daft Punk",
          imgUrl: "https://yt3.ggpht.com/TPq4rBZZrU9AyYVuAiG6ndO61ZZ-8kckaXNI_k6TqfabWhCnhx0CY9-ilMFaE2Xn9yCt9s8b=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 250,
        likedBy: [],
        createdAt: 1367257415000,
        updatedAt: 1739525078951,
        _id: "HhZaHf8RP6g"
      },
      {
        title: "Daft Punk - Short Circuit (Official Video)",
        url: "https://www.youtube.com/embed/1-yzqgwTVi8",
        imgUrl: "https://i.ytimg.com/vi/1-yzqgwTVi8/hqdefault.jpg",
        addedBy: {
          _id: "UC_kRDKYrUlrbtrSiyu5Tflg",
          fullname: "Daft Punk",
          imgUrl: "https://yt3.ggpht.com/TPq4rBZZrU9AyYVuAiG6ndO61ZZ-8kckaXNI_k6TqfabWhCnhx0CY9-ilMFaE2Xn9yCt9s8b=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 76,
        likedBy: [],
        createdAt: 1367257437000,
        updatedAt: 1739558647653,
        _id: "1-yzqgwTVi8"
      },
      {
        title: "Daft Punk - Face to Face (Official Video)",
        url: "https://www.youtube.com/embed/dKJfJMMsqX4",
        imgUrl: "https://i.ytimg.com/vi/dKJfJMMsqX4/hqdefault.jpg",
        addedBy: {
          _id: "UC_kRDKYrUlrbtrSiyu5Tflg",
          fullname: "Daft Punk",
          imgUrl: "https://yt3.ggpht.com/TPq4rBZZrU9AyYVuAiG6ndO61ZZ-8kckaXNI_k6TqfabWhCnhx0CY9-ilMFaE2Xn9yCt9s8b=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 249,
        likedBy: [],
        createdAt: 1367257456000,
        updatedAt: 1739580117366,
        _id: "dKJfJMMsqX4"
      },
      {
        title: "Daft Punk - Too Long (Official Video)",
        url: "https://www.youtube.com/embed/Z6_ZNW1DACE",
        imgUrl: "https://i.ytimg.com/vi/Z6_ZNW1DACE/hqdefault.jpg",
        addedBy: {
          _id: "UC_kRDKYrUlrbtrSiyu5Tflg",
          fullname: "Daft Punk",
          imgUrl: "https://yt3.ggpht.com/TPq4rBZZrU9AyYVuAiG6ndO61ZZ-8kckaXNI_k6TqfabWhCnhx0CY9-ilMFaE2Xn9yCt9s8b=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 147,
        likedBy: [],
        createdAt: 1367257473000,
        updatedAt: 1739550061567,
        _id: "Z6_ZNW1DACE"
      }
    ],
    _id: "PLSdoVPM5WnndLX6Ngmb8wktMF61dJirKl",
    name: "Daft Punk",
    createdBy: {
      _id: "UC_kRDKYrUlrbtrSiyu5Tflg",
      fullname: "Daft Punk",
      imgUrl: "https://yt3.ggpht.com/TPq4rBZZrU9AyYVuAiG6ndO61ZZ-8kckaXNI_k6TqfabWhCnhx0CY9-ilMFaE2Xn9yCt9s8b=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1189430195000,
      updatedAt: 1739583211056
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Cœur d'artichaut",
        url: "https://www.youtube.com/embed/_AUklbBCVNQ",
        imgUrl: "https://i.ytimg.com/vi/_AUklbBCVNQ/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 84,
        likedBy: [],
        createdAt: 1739191987000,
        updatedAt: 1739702395882,
        _id: "_AUklbBCVNQ"
      },
      {
        title: "Dorothy",
        url: "https://www.youtube.com/embed/_BETO9BjE84",
        imgUrl: "https://i.ytimg.com/vi/_BETO9BjE84/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 295,
        likedBy: [],
        createdAt: 1739191987000,
        updatedAt: 1739682865268,
        _id: "_BETO9BjE84"
      },
      {
        title: "Polo & Pan - RIVOLTA (Original Mix)",
        url: "https://www.youtube.com/embed/BTSrUf1VKas",
        imgUrl: "https://i.ytimg.com/vi/BTSrUf1VKas/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 214,
        likedBy: [],
        createdAt: 1739191987000,
        updatedAt: 1739687538356,
        _id: "BTSrUf1VKas"
      },
      {
        title: "Dragon Pom Z",
        url: "https://www.youtube.com/embed/_XUiNBt3bkM",
        imgUrl: "https://i.ytimg.com/vi/_XUiNBt3bkM/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 308,
        likedBy: [],
        createdAt: 1739191987000,
        updatedAt: 1739660698242,
        _id: "_XUiNBt3bkM"
      },
      {
        title: "Dorothy (In Flagranti Remix)",
        url: "https://www.youtube.com/embed/2cpz9r7eQmQ",
        imgUrl: "https://i.ytimg.com/vi/2cpz9r7eQmQ/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 373,
        likedBy: [],
        createdAt: 1739191987000,
        updatedAt: 1739659618934,
        _id: "2cpz9r7eQmQ"
      },
      {
        title: "Polo & Pan - RIVOLTA (Get A Room! Remix)",
        url: "https://www.youtube.com/embed/8sgZKIrJMU4",
        imgUrl: "https://i.ytimg.com/vi/8sgZKIrJMU4/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 255,
        likedBy: [],
        createdAt: 1739191987000,
        updatedAt: 1739648356603,
        _id: "8sgZKIrJMU4"
      }
    ],
    _id: "OLAK5uy_nnVMeT03vMfxEgtpMWtJ0WIVmjpGMiuS8",
    name: "Polo & Pan - Topic",
    createdBy: {
      _id: "UC4KKov_xp4Os4PAnVr28YUQ",
      fullname: "Polo & Pan - Topic",
      imgUrl: "https://yt3.ggpht.com/MHCYfwZN9xdeQd8cUpgIY6euojZtTr-zuD-f-R_aX7e_1Ihn8qJm5OvNAL2W2Y78UcNpIA7HPg=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1442962721000,
      updatedAt: 1739722831573
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Mumia",
        url: "https://www.youtube.com/embed/NwixBg7XvDw",
        imgUrl: "https://i.ytimg.com/vi/NwixBg7XvDw/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 146,
        likedBy: [],
        createdAt: 1736754977000,
        updatedAt: 1739648848708,
        _id: "NwixBg7XvDw"
      },
      {
        title: "Desperado (feat. Sunoco)",
        url: "https://www.youtube.com/embed/dhc0v5xQ4Sg",
        imgUrl: "https://i.ytimg.com/vi/dhc0v5xQ4Sg/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 238,
        likedBy: [],
        createdAt: 1736754977000,
        updatedAt: 1739686914070,
        _id: "dhc0v5xQ4Sg"
      },
      {
        title: "Mumia (Polo & Pan Remix)",
        url: "https://www.youtube.com/embed/af46TqyX1r4",
        imgUrl: "https://i.ytimg.com/vi/af46TqyX1r4/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 255,
        likedBy: [],
        createdAt: 1736754977000,
        updatedAt: 1739671479304,
        _id: "af46TqyX1r4"
      },
      {
        title: "Mumia (Red Axes Remix)",
        url: "https://www.youtube.com/embed/taaILq6gn5Q",
        imgUrl: "https://i.ytimg.com/vi/taaILq6gn5Q/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 232,
        likedBy: [],
        createdAt: 1736754977000,
        updatedAt: 1739637583631,
        _id: "taaILq6gn5Q"
      }
    ],
    _id: "OLAK5uy_nyZOgjy2P1Sgf-RhFnv4fDseNpR6iBcbI",
    name: "Polo & Pan - Topic",
    createdBy: {
      _id: "UC4KKov_xp4Os4PAnVr28YUQ",
      fullname: "Polo & Pan - Topic",
      imgUrl: "https://yt3.ggpht.com/MHCYfwZN9xdeQd8cUpgIY6euojZtTr-zuD-f-R_aX7e_1Ihn8qJm5OvNAL2W2Y78UcNpIA7HPg=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1442962721000,
      updatedAt: 1739722875766
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "POLO & PAN — Feel Good (Official video)",
        url: "https://www.youtube.com/embed/1KSBCNHXOUA",
        imgUrl: "https://i.ytimg.com/vi/1KSBCNHXOUA/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 368,
        likedBy: [],
        createdAt: 1739374967000,
        updatedAt: 1739690171362,
        _id: "1KSBCNHXOUA"
      },
      {
        title: "POLO & PAN — Attrape-rêve (official audio)",
        url: "https://www.youtube.com/embed/gRgP-IUOQao",
        imgUrl: "https://i.ytimg.com/vi/gRgP-IUOQao/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 135,
        likedBy: [],
        createdAt: 1739374967000,
        updatedAt: 1739707553121,
        _id: "gRgP-IUOQao"
      },
      {
        title: "POLO & PAN — Pili Pili (official audio)",
        url: "https://www.youtube.com/embed/PnzLjXMEqtU",
        imgUrl: "https://i.ytimg.com/vi/PnzLjXMEqtU/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 368,
        likedBy: [],
        createdAt: 1739374967000,
        updatedAt: 1739700257120,
        _id: "PnzLjXMEqtU"
      },
      {
        title: "POLO & PAN feat. Antonin — Peter Pan (official audio)",
        url: "https://www.youtube.com/embed/lhBmz8EnKrk",
        imgUrl: "https://i.ytimg.com/vi/lhBmz8EnKrk/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 169,
        likedBy: [],
        createdAt: 1739374967000,
        updatedAt: 1739649098705,
        _id: "lhBmz8EnKrk"
      }
    ],
    _id: "OLAK5uy_k4QIoWE0ovzN0EQYSo_faRykD7yHbl4QA",
    name: "Polo & Pan",
    createdBy: {
      _id: "UCQUFWrwQshjbq3VN0yfm_5Q",
      fullname: "Polo & Pan",
      imgUrl: "https://yt3.ggpht.com/MHCYfwZN9xdeQd8cUpgIY6euojZtTr-zuD-f-R_aX7e_1Ihn8qJm5OvNAL2W2Y78UcNpIA7HPg=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1386260715000,
      updatedAt: 1739722892436
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Caravan Palace - Lone Digger (Official MV)",
        url: "https://www.youtube.com/embed/UbQgXeY_zi4",
        imgUrl: "https://i.ytimg.com/vi/UbQgXeY_zi4/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 204,
        likedBy: [],
        createdAt: 1739433907000,
        updatedAt: 1739717536433,
        _id: "UbQgXeY_zi4"
      },
      {
        title: "Caravan Palace - Comics (Official MV)",
        url: "https://www.youtube.com/embed/gaFh71YwZ4Y",
        imgUrl: "https://i.ytimg.com/vi/gaFh71YwZ4Y/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 226,
        likedBy: [],
        createdAt: 1739433907000,
        updatedAt: 1739653669773,
        _id: "gaFh71YwZ4Y"
      },
      {
        title: "Caravan Palace - Mighty (feat. JFTH)",
        url: "https://www.youtube.com/embed/eB3RJ1U_MJA",
        imgUrl: "https://i.ytimg.com/vi/eB3RJ1U_MJA/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 390,
        likedBy: [],
        createdAt: 1739433907000,
        updatedAt: 1739657692132,
        _id: "eB3RJ1U_MJA"
      },
      {
        title: "Caravan Palace - Aftermath",
        url: "https://www.youtube.com/embed/imCd-m32oAs",
        imgUrl: "https://i.ytimg.com/vi/imCd-m32oAs/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 108,
        likedBy: [],
        createdAt: 1739433907000,
        updatedAt: 1739638193091,
        _id: "imCd-m32oAs"
      },
      {
        title: "Caravan Palace - Wonderland",
        url: "https://www.youtube.com/embed/vCXsRoyFRQE",
        imgUrl: "https://i.ytimg.com/vi/vCXsRoyFRQE/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 209,
        likedBy: [],
        createdAt: 1739433907000,
        updatedAt: 1739671868511,
        _id: "vCXsRoyFRQE"
      },
      {
        title: "Caravan Palace - Tattoos",
        url: "https://www.youtube.com/embed/qQ-Pyx4joKM",
        imgUrl: "https://i.ytimg.com/vi/qQ-Pyx4joKM/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 248,
        likedBy: [],
        createdAt: 1739433907000,
        updatedAt: 1739648404167,
        _id: "qQ-Pyx4joKM"
      },
      {
        title: "Caravan Palace - Midnight (Official Music Video)",
        url: "https://www.youtube.com/embed/8b-ecNhMIyw",
        imgUrl: "https://i.ytimg.com/vi/8b-ecNhMIyw/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 183,
        likedBy: [],
        createdAt: 1739433907000,
        updatedAt: 1739644100203,
        _id: "8b-ecNhMIyw"
      },
      {
        title: "Caravan Palace - Russian",
        url: "https://www.youtube.com/embed/VRwD9JL2sO0",
        imgUrl: "https://i.ytimg.com/vi/VRwD9JL2sO0/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 189,
        likedBy: [],
        createdAt: 1739433907000,
        updatedAt: 1739669339356,
        _id: "VRwD9JL2sO0"
      },
      {
        title: "Caravan Palace - Wonda",
        url: "https://www.youtube.com/embed/e0YCcNYrNgI",
        imgUrl: "https://i.ytimg.com/vi/e0YCcNYrNgI/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 340,
        likedBy: [],
        createdAt: 1739433907000,
        updatedAt: 1739685420142,
        _id: "e0YCcNYrNgI"
      },
      {
        title: "Caravan Palace - Human Leather Shoes for Crocodile Dandies",
        url: "https://www.youtube.com/embed/dIOEDC_maAY",
        imgUrl: "https://i.ytimg.com/vi/dIOEDC_maAY/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 270,
        likedBy: [],
        createdAt: 1739433907000,
        updatedAt: 1739676548582,
        _id: "dIOEDC_maAY"
      },
      {
        title: "Caravan Palace - Lay Down",
        url: "https://www.youtube.com/embed/5QyBGvZ0pHM",
        imgUrl: "https://i.ytimg.com/vi/5QyBGvZ0pHM/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 207,
        likedBy: [],
        createdAt: 1739433907000,
        updatedAt: 1739659119789,
        _id: "5QyBGvZ0pHM"
      }
    ],
    _id: "OLAK5uy_mP0mskxvsXos8IHN2tPVVNED9tuCtcq1Q",
    name: "CaravanPalace",
    createdBy: {
      _id: "UCKH9HfYY_GEcyltl2mbD5lA",
      fullname: "CaravanPalace",
      imgUrl: "https://yt3.ggpht.com/vg3aXRZQuMf0G34ekRQZgSUkSuBQP3cRGLVd1QSJUhkgUYLJG2KUcVLt8urwrz_zpPJedL21z0g=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1164558924000,
      updatedAt: 1739722906130
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Iron Maiden - The Wicker Man (Official Video)",
        url: "https://www.youtube.com/embed/-sQ3Af3DpeM",
        imgUrl: "https://i.ytimg.com/vi/-sQ3Af3DpeM/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 48,
        likedBy: [],
        createdAt: 1736548098000,
        updatedAt: 1739720047936,
        _id: "-sQ3Af3DpeM"
      },
      {
        title: "Ghost of the Navigator (2015 Remaster)",
        url: "https://www.youtube.com/embed/q4ZKbYXDZtk",
        imgUrl: "https://i.ytimg.com/vi/q4ZKbYXDZtk/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 188,
        likedBy: [],
        createdAt: 1736548098000,
        updatedAt: 1739654883028,
        _id: "q4ZKbYXDZtk"
      },
      {
        title: "Brave New World (2015 Remaster)",
        url: "https://www.youtube.com/embed/X5P_muGUJR4",
        imgUrl: "https://i.ytimg.com/vi/X5P_muGUJR4/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 98,
        likedBy: [],
        createdAt: 1736548098000,
        updatedAt: 1739700112427,
        _id: "X5P_muGUJR4"
      },
      {
        title: "Blood Brothers (2015 Remaster)",
        url: "https://www.youtube.com/embed/NXqFxShP7Ao",
        imgUrl: "https://i.ytimg.com/vi/NXqFxShP7Ao/hqdefault.jpg",
        addedBy: {
          _id: "UCNifdat21zAF8ux2AcQBgYg",
          fullname: "Rodolfo Carmacio",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_m8nVVONNJpq0VOCk2ozCtz9iVXPqiKdXl9qwn4gr42fWM=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 385,
        likedBy: [],
        createdAt: 1584034580000,
        updatedAt: 1739539977328,
        _id: "NXqFxShP7Ao"
      },
      {
        title: "The Mercenary (2015 Remaster)",
        url: "https://www.youtube.com/embed/z3gNmiLBP9g",
        imgUrl: "https://i.ytimg.com/vi/z3gNmiLBP9g/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 397,
        likedBy: [],
        createdAt: 1736548098000,
        updatedAt: 1739649720656,
        _id: "z3gNmiLBP9g"
      },
      {
        title: "Dream of Mirrors (2015 Remaster)",
        url: "https://www.youtube.com/embed/l9xqfo9_K6E",
        imgUrl: "https://i.ytimg.com/vi/l9xqfo9_K6E/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 324,
        likedBy: [],
        createdAt: 1736548098000,
        updatedAt: 1739667619883,
        _id: "l9xqfo9_K6E"
      },
      {
        title: "The Fallen Angel (2015 Remaster)",
        url: "https://www.youtube.com/embed/eP4v4eXVjWk",
        imgUrl: "https://i.ytimg.com/vi/eP4v4eXVjWk/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 332,
        likedBy: [],
        createdAt: 1736548098000,
        updatedAt: 1739708405312,
        _id: "eP4v4eXVjWk"
      },
      {
        title: "The Nomad (2015 Remaster)",
        url: "https://www.youtube.com/embed/CX2BpyXIqwI",
        imgUrl: "https://i.ytimg.com/vi/CX2BpyXIqwI/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 370,
        likedBy: [],
        createdAt: 1736548098000,
        updatedAt: 1739662342401,
        _id: "CX2BpyXIqwI"
      },
      {
        title: "Iron Maiden - Out Of The Silent Planet (Official Video)",
        url: "https://www.youtube.com/embed/wAnVnp-eVYk",
        imgUrl: "https://i.ytimg.com/vi/wAnVnp-eVYk/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 276,
        likedBy: [],
        createdAt: 1736548098000,
        updatedAt: 1739671131490,
        _id: "wAnVnp-eVYk"
      },
      {
        title: "The Thin Line Between Love and Hate (2015 Remaster)",
        url: "https://www.youtube.com/embed/QRxyCLPGDA0",
        imgUrl: "https://i.ytimg.com/vi/QRxyCLPGDA0/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 300,
        likedBy: [],
        createdAt: 1736548098000,
        updatedAt: 1739696474066,
        _id: "QRxyCLPGDA0"
      }
    ],
    _id: "OLAK5uy_nOSFj0NmAfntT6BLYvX0YPhZbLCIEfZ-E",
    name: "Iron Maiden",
    createdBy: {
      _id: "UCaisXKBdNOYqGr2qOXCLchQ",
      fullname: "Iron Maiden",
      imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lZu7s_pX_cg_98Rr7qP5NKMrz4WOmKmMuUXEehjbSZW7A=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1126577143000,
      updatedAt: 1739722918798
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Corpo-Mente - Scylla [Audio]",
        url: "https://www.youtube.com/embed/9f1f1i6YUrc",
        imgUrl: "https://i.ytimg.com/vi/9f1f1i6YUrc/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 175,
        likedBy: [],
        createdAt: 1736570482000,
        updatedAt: 1739641464547,
        _id: "9f1f1i6YUrc"
      },
      {
        title: "Arsalein",
        url: "https://www.youtube.com/embed/lZgfeLxndQg",
        imgUrl: "https://i.ytimg.com/vi/lZgfeLxndQg/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 242,
        likedBy: [],
        createdAt: 1736570482000,
        updatedAt: 1739650407887,
        _id: "lZgfeLxndQg"
      },
      {
        title: "Corpo-Mente - \"Fia\" [Music Video - Official]",
        url: "https://www.youtube.com/embed/pn6ZWdM2sn0",
        imgUrl: "https://i.ytimg.com/vi/pn6ZWdM2sn0/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 387,
        likedBy: [],
        createdAt: 1736570482000,
        updatedAt: 1739665127886,
        _id: "pn6ZWdM2sn0"
      },
      {
        title: "Velandi",
        url: "https://www.youtube.com/embed/RP0q7G2S7C4",
        imgUrl: "https://i.ytimg.com/vi/RP0q7G2S7C4/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 109,
        likedBy: [],
        createdAt: 1736570482000,
        updatedAt: 1739705876107,
        _id: "RP0q7G2S7C4"
      },
      {
        title: "Dorma",
        url: "https://www.youtube.com/embed/1XcVgwGCznw",
        imgUrl: "https://i.ytimg.com/vi/1XcVgwGCznw/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 88,
        likedBy: [],
        createdAt: 1736570482000,
        updatedAt: 1739654765826,
        _id: "1XcVgwGCznw"
      },
      {
        title: "Corpo-Mente - \"Dulcin\" [Premiere - 2015]",
        url: "https://www.youtube.com/embed/9SBaVflEK6s",
        imgUrl: "https://i.ytimg.com/vi/9SBaVflEK6s/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 251,
        likedBy: [],
        createdAt: 1736570482000,
        updatedAt: 1739706592793,
        _id: "9SBaVflEK6s"
      },
      {
        title: "Equus",
        url: "https://www.youtube.com/embed/cXRslF2HLpg",
        imgUrl: "https://i.ytimg.com/vi/cXRslF2HLpg/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 237,
        likedBy: [],
        createdAt: 1736570482000,
        updatedAt: 1739678255154,
        _id: "cXRslF2HLpg"
      },
      {
        title: "Ort",
        url: "https://www.youtube.com/embed/XIudJ62rTBw",
        imgUrl: "https://i.ytimg.com/vi/XIudJ62rTBw/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 395,
        likedBy: [],
        createdAt: 1736570482000,
        updatedAt: 1739704869833,
        _id: "XIudJ62rTBw"
      },
      {
        title: "Saelli",
        url: "https://www.youtube.com/embed/PNCYw65HQn4",
        imgUrl: "https://i.ytimg.com/vi/PNCYw65HQn4/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 228,
        likedBy: [],
        createdAt: 1736570482000,
        updatedAt: 1739711354006,
        _id: "PNCYw65HQn4"
      },
      {
        title: "Encell",
        url: "https://www.youtube.com/embed/IWu6e4vMLZA",
        imgUrl: "https://i.ytimg.com/vi/IWu6e4vMLZA/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 230,
        likedBy: [],
        createdAt: 1736570482000,
        updatedAt: 1739701187073,
        _id: "IWu6e4vMLZA"
      }
    ],
    _id: "OLAK5uy_lapVlT_DLg0MpTaBzbiQ02oyib0bVPlr8",
    name: "Corpo-Mente",
    createdBy: {
      _id: "UCL_vER7ejF-xRWKIkeBas8g",
      fullname: "Corpo-Mente",
      imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nWkhYyFDlRtNu-LxwhGiaWu4HE7luyGwlZEQnqHMWPVA=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1434490368000,
      updatedAt: 1739722932211
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Igorrr - Tout Petit Moineau",
        url: "https://www.youtube.com/embed/MKp30C3MwVk",
        imgUrl: "https://i.ytimg.com/vi/MKp30C3MwVk/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 163,
        likedBy: [],
        createdAt: 1736700016000,
        updatedAt: 1739685306931,
        _id: "MKp30C3MwVk"
      },
      {
        title: "Damaged Wig",
        url: "https://www.youtube.com/embed/acKYPTUmfrQ",
        imgUrl: "https://i.ytimg.com/vi/acKYPTUmfrQ/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 394,
        likedBy: [],
        createdAt: 1736700016000,
        updatedAt: 1739688878536,
        _id: "acKYPTUmfrQ"
      },
      {
        title: "Igorrr - Absolute Psalm",
        url: "https://www.youtube.com/embed/hbWZlR-uAIg",
        imgUrl: "https://i.ytimg.com/vi/hbWZlR-uAIg/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 312,
        likedBy: [],
        createdAt: 1736700016000,
        updatedAt: 1739646274319,
        _id: "hbWZlR-uAIg"
      },
      {
        title: "Cicadidae",
        url: "https://www.youtube.com/embed/9YSeWDCSkBA",
        imgUrl: "https://i.ytimg.com/vi/9YSeWDCSkBA/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 162,
        likedBy: [],
        createdAt: 1736700016000,
        updatedAt: 1739680517123,
        _id: "9YSeWDCSkBA"
      },
      {
        title: "Igorrr - Vegetable Soup",
        url: "https://www.youtube.com/embed/5LN7W3EtRMg",
        imgUrl: "https://i.ytimg.com/vi/5LN7W3EtRMg/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 357,
        likedBy: [],
        createdAt: 1736700016000,
        updatedAt: 1739710516566,
        _id: "5LN7W3EtRMg"
      },
      {
        title: "Lullaby for a Fat Jellyfish",
        url: "https://www.youtube.com/embed/SK40JDjV6jc",
        imgUrl: "https://i.ytimg.com/vi/SK40JDjV6jc/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 258,
        likedBy: [],
        createdAt: 1736700016000,
        updatedAt: 1739709687907,
        _id: "SK40JDjV6jc"
      },
      {
        title: "Igorrr - Grosse Barbe",
        url: "https://www.youtube.com/embed/XLL7_HJni0I",
        imgUrl: "https://i.ytimg.com/vi/XLL7_HJni0I/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 145,
        likedBy: [],
        createdAt: 1736700016000,
        updatedAt: 1739709650729,
        _id: "XLL7_HJni0I"
      },
      {
        title: "Corpus Tristis",
        url: "https://www.youtube.com/embed/s9MAsLT85qg",
        imgUrl: "https://i.ytimg.com/vi/s9MAsLT85qg/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 237,
        likedBy: [],
        createdAt: 1736700016000,
        updatedAt: 1739654312901,
        _id: "s9MAsLT85qg"
      },
      {
        title: "Scarlatti 2.0",
        url: "https://www.youtube.com/embed/X-Ywd7QYAFw",
        imgUrl: "https://i.ytimg.com/vi/X-Ywd7QYAFw/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 255,
        likedBy: [],
        createdAt: 1736700016000,
        updatedAt: 1739640614614,
        _id: "X-Ywd7QYAFw"
      },
      {
        title: "Toothpaste",
        url: "https://www.youtube.com/embed/HHyWjedZmjM",
        imgUrl: "https://i.ytimg.com/vi/HHyWjedZmjM/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 248,
        likedBy: [],
        createdAt: 1736700016000,
        updatedAt: 1739639823049,
        _id: "HHyWjedZmjM"
      },
      {
        title: "Infinite Loop",
        url: "https://www.youtube.com/embed/9xVxP0wHUN4",
        imgUrl: "https://i.ytimg.com/vi/9xVxP0wHUN4/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 299,
        likedBy: [],
        createdAt: 1736700016000,
        updatedAt: 1739644793243,
        _id: "9xVxP0wHUN4"
      }
    ],
    _id: "OLAK5uy_nBxzk4UtmseWpK8alcCXGYTjoyuUeDJy0",
    name: "Igorrr",
    createdBy: {
      _id: "UC_3P0PpZrIhXLtV8kwsaC9Q",
      fullname: "Igorrr",
      imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nharzTgNj0nldtROqw_WylltWyNMHWsCqJXV3QYlcNSaI=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1169576907000,
      updatedAt: 1739722948420
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Chapelier Fou - Philemon",
        url: "https://www.youtube.com/embed/B5OHmcXYq0E",
        imgUrl: "https://i.ytimg.com/vi/B5OHmcXYq0E/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 378,
        likedBy: [],
        createdAt: 1736949439000,
        updatedAt: 1739639622273,
        _id: "B5OHmcXYq0E"
      },
      {
        title: "Oracle",
        url: "https://www.youtube.com/embed/o9017-UTTGw",
        imgUrl: "https://i.ytimg.com/vi/o9017-UTTGw/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 358,
        likedBy: [],
        createdAt: 1736949439000,
        updatedAt: 1739643807826,
        _id: "o9017-UTTGw"
      },
      {
        title: "Chapelier Fou - Artifices",
        url: "https://www.youtube.com/embed/_kapsNIsE7c",
        imgUrl: "https://i.ytimg.com/vi/_kapsNIsE7c/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 316,
        likedBy: [],
        createdAt: 1736949439000,
        updatedAt: 1739663775785,
        _id: "_kapsNIsE7c"
      },
      {
        title: "Stiiitches",
        url: "https://www.youtube.com/embed/Y-eSCrErpNM",
        imgUrl: "https://i.ytimg.com/vi/Y-eSCrErpNM/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 136,
        likedBy: [],
        createdAt: 1736949439000,
        updatedAt: 1739722935109,
        _id: "Y-eSCrErpNM"
      },
      {
        title: "Antivalse",
        url: "https://www.youtube.com/embed/Q2OWwrQ908g",
        imgUrl: "https://i.ytimg.com/vi/Q2OWwrQ908g/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 138,
        likedBy: [],
        createdAt: 1736949439000,
        updatedAt: 1739683202627,
        _id: "Q2OWwrQ908g"
      },
      {
        title: "Guillotine",
        url: "https://www.youtube.com/embed/VOILvgcFQ3Q",
        imgUrl: "https://i.ytimg.com/vi/VOILvgcFQ3Q/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 378,
        likedBy: [],
        createdAt: 1736949439000,
        updatedAt: 1739711287828,
        _id: "VOILvgcFQ3Q"
      },
      {
        title: "Temps utile",
        url: "https://www.youtube.com/embed/stWYItSM5cE",
        imgUrl: "https://i.ytimg.com/vi/stWYItSM5cE/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 38,
        likedBy: [],
        createdAt: 1736949439000,
        updatedAt: 1739656059785,
        _id: "stWYItSM5cE"
      },
      {
        title: "Les octaves brisées",
        url: "https://www.youtube.com/embed/YJXK0rRMsvY",
        imgUrl: "https://i.ytimg.com/vi/YJXK0rRMsvY/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 121,
        likedBy: [],
        createdAt: 1736949439000,
        updatedAt: 1739666116700,
        _id: "YJXK0rRMsvY"
      },
      {
        title: "Cavalcade",
        url: "https://www.youtube.com/embed/loZN_yGGUJk",
        imgUrl: "https://i.ytimg.com/vi/loZN_yGGUJk/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 256,
        likedBy: [],
        createdAt: 1736949439000,
        updatedAt: 1739656879649,
        _id: "loZN_yGGUJk"
      },
      {
        title: "ALK",
        url: "https://www.youtube.com/embed/EZVB-jB0Nvo",
        imgUrl: "https://i.ytimg.com/vi/EZVB-jB0Nvo/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 210,
        likedBy: [],
        createdAt: 1736949439000,
        updatedAt: 1739707529270,
        _id: "EZVB-jB0Nvo"
      },
      {
        title: "Super hexacordum",
        url: "https://www.youtube.com/embed/cRGn9U98GCM",
        imgUrl: "https://i.ytimg.com/vi/cRGn9U98GCM/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 89,
        likedBy: [],
        createdAt: 1736949439000,
        updatedAt: 1739660603090,
        _id: "cRGn9U98GCM"
      }
    ],
    _id: "OLAK5uy_m9iTKuOrVMbBbUocVe8mF0zxwSIhjzff8",
    name: "Ici d'ailleurs",
    createdBy: {
      _id: "UCXONSJ8FRxD4pVPiW9qOYhw",
      fullname: "Ici d'ailleurs",
      imgUrl: "https://yt3.ggpht.com/Ks2g5mCb09Z-rQK1HGqlDdPF5zvlngxDT1H6pEF28TQnNPw5qHlXbna8HVHSJ2Ga00cMAZ56kQ=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1321458747000,
      updatedAt: 1739722968823
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "From Zero (Intro) (A Cappella) - Linkin Park",
        url: "https://www.youtube.com/embed/ay32SqJPpB0",
        imgUrl: "https://i.ytimg.com/vi/ay32SqJPpB0/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 73,
        likedBy: [],
        createdAt: 1737695408000,
        updatedAt: 1739679555042,
        _id: "ay32SqJPpB0"
      },
      {
        title: "The Emptiness Machine (Official Music Video) - Linkin Park",
        url: "https://www.youtube.com/embed/SRXH9AbT280",
        imgUrl: "https://i.ytimg.com/vi/SRXH9AbT280/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 190,
        likedBy: [],
        createdAt: 1737695408000,
        updatedAt: 1739681884126,
        _id: "SRXH9AbT280"
      },
      {
        title: "Cut The Bridge (Official Audio Visualizer) - Linkin Park",
        url: "https://www.youtube.com/embed/_f9b0NB5o4E",
        imgUrl: "https://i.ytimg.com/vi/_f9b0NB5o4E/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 220,
        likedBy: [],
        createdAt: 1737695408000,
        updatedAt: 1739691555249,
        _id: "_f9b0NB5o4E"
      },
      {
        title: "Heavy Is the Crown (Official Audio) - Linkin Park",
        url: "https://www.youtube.com/embed/ZAt8oxY0GQo",
        imgUrl: "https://i.ytimg.com/vi/ZAt8oxY0GQo/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 147,
        likedBy: [],
        createdAt: 1737695408000,
        updatedAt: 1739662406147,
        _id: "ZAt8oxY0GQo"
      },
      {
        title: "Over Each Other (Official Music Video) - Linkin Park",
        url: "https://www.youtube.com/embed/fSHoePrnmMw",
        imgUrl: "https://i.ytimg.com/vi/fSHoePrnmMw/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 219,
        likedBy: [],
        createdAt: 1737695408000,
        updatedAt: 1739649263215,
        _id: "fSHoePrnmMw"
      },
      {
        title: "Casualty (Official Audio Visualizer) - Linkin Park",
        url: "https://www.youtube.com/embed/aoverLVhD-8",
        imgUrl: "https://i.ytimg.com/vi/aoverLVhD-8/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 49,
        likedBy: [],
        createdAt: 1737695408000,
        updatedAt: 1739640722129,
        _id: "aoverLVhD-8"
      },
      {
        title: "Overflow (Official Audio Visualizer) - Linkin Park",
        url: "https://www.youtube.com/embed/qaMxFaIZiKY",
        imgUrl: "https://i.ytimg.com/vi/qaMxFaIZiKY/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 78,
        likedBy: [],
        createdAt: 1737695408000,
        updatedAt: 1739640639289,
        _id: "qaMxFaIZiKY"
      },
      {
        title: "Two Faced (Official Music Video) - Linkin Park",
        url: "https://www.youtube.com/embed/kivUsDGWojU",
        imgUrl: "https://i.ytimg.com/vi/kivUsDGWojU/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 161,
        likedBy: [],
        createdAt: 1737695408000,
        updatedAt: 1739713491030,
        _id: "kivUsDGWojU"
      },
      {
        title: "Stained (Official Audio Visualizer) - Linkin Park",
        url: "https://www.youtube.com/embed/TWmOZB-9xAw",
        imgUrl: "https://i.ytimg.com/vi/TWmOZB-9xAw/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 132,
        likedBy: [],
        createdAt: 1737695408000,
        updatedAt: 1739700923157,
        _id: "TWmOZB-9xAw"
      },
      {
        title: "IGYEIH (Official Audio Visualizer) - Linkin Park",
        url: "https://www.youtube.com/embed/pa4kv2Z5mvQ",
        imgUrl: "https://i.ytimg.com/vi/pa4kv2Z5mvQ/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 94,
        likedBy: [],
        createdAt: 1737695408000,
        updatedAt: 1739653161215,
        _id: "pa4kv2Z5mvQ"
      },
      {
        title: "Good Things Go (Official Audio Visualizer) - Linkin Park",
        url: "https://www.youtube.com/embed/Ip0jJACsE_g",
        imgUrl: "https://i.ytimg.com/vi/Ip0jJACsE_g/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 386,
        likedBy: [],
        createdAt: 1737695408000,
        updatedAt: 1739722038659,
        _id: "Ip0jJACsE_g"
      }
    ],
    _id: "OLAK5uy_llu148Ny0qF6bSApqzcVOQ9MaiCYySEG8",
    name: "Linkin Park",
    createdBy: {
      _id: "UCZU9T1ceaOgwfLRq7OKFU4Q",
      fullname: "Linkin Park",
      imgUrl: "https://yt3.ggpht.com/t1YKHBB0WGDAl5xdXR86CNv3K361XMU5oZ3Wi1zLn36gw6XgJDLb_scBCj2nfvjefrsG8goPztA=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1164741506000,
      updatedAt: 1739722980834
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Avenged Sevenfold - Nightmare [Official Music Video]",
        url: "https://www.youtube.com/embed/94bGzWyHbu0",
        imgUrl: "https://i.ytimg.com/vi/94bGzWyHbu0/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 137,
        likedBy: [],
        createdAt: 1736500880000,
        updatedAt: 1739672956576,
        _id: "94bGzWyHbu0"
      },
      {
        title: "Welcome to the Family",
        url: "https://www.youtube.com/embed/fAkXtZakvsY",
        imgUrl: "https://i.ytimg.com/vi/fAkXtZakvsY/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 337,
        likedBy: [],
        createdAt: 1736500880000,
        updatedAt: 1739668112532,
        _id: "fAkXtZakvsY"
      },
      {
        title: "Danger Line",
        url: "https://www.youtube.com/embed/w77ycjbCDbA",
        imgUrl: "https://i.ytimg.com/vi/w77ycjbCDbA/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 141,
        likedBy: [],
        createdAt: 1736500880000,
        updatedAt: 1739719355421,
        _id: "w77ycjbCDbA"
      },
      {
        title: "Avenged Sevenfold - Buried Alive [Official Lyrics Video]",
        url: "https://www.youtube.com/embed/imwmmv9r1oE",
        imgUrl: "https://i.ytimg.com/vi/imwmmv9r1oE/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 184,
        likedBy: [],
        createdAt: 1736500880000,
        updatedAt: 1739670616704,
        _id: "imwmmv9r1oE"
      },
      {
        title: "Natural Born Killer",
        url: "https://www.youtube.com/embed/hwy3W6Hf5rc",
        imgUrl: "https://i.ytimg.com/vi/hwy3W6Hf5rc/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 303,
        likedBy: [],
        createdAt: 1736500880000,
        updatedAt: 1739640693501,
        _id: "hwy3W6Hf5rc"
      },
      {
        title: "Avenged Sevenfold - So Far Away [Official Music Video]",
        url: "https://www.youtube.com/embed/A7ry4cx6HfY",
        imgUrl: "https://i.ytimg.com/vi/A7ry4cx6HfY/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 232,
        likedBy: [],
        createdAt: 1736500880000,
        updatedAt: 1739653181002,
        _id: "A7ry4cx6HfY"
      },
      {
        title: "God Hates Us",
        url: "https://www.youtube.com/embed/nDcD62i0MpI",
        imgUrl: "https://i.ytimg.com/vi/nDcD62i0MpI/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 163,
        likedBy: [],
        createdAt: 1736500880000,
        updatedAt: 1739685293865,
        _id: "nDcD62i0MpI"
      },
      {
        title: "Victim",
        url: "https://www.youtube.com/embed/bQ1yhsYr-hg",
        imgUrl: "https://i.ytimg.com/vi/bQ1yhsYr-hg/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 266,
        likedBy: [],
        createdAt: 1736500880000,
        updatedAt: 1739641084013,
        _id: "bQ1yhsYr-hg"
      },
      {
        title: "Tonight the World Dies",
        url: "https://www.youtube.com/embed/MIlcaLyt14w",
        imgUrl: "https://i.ytimg.com/vi/MIlcaLyt14w/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 397,
        likedBy: [],
        createdAt: 1736500880000,
        updatedAt: 1739697563359,
        _id: "MIlcaLyt14w"
      },
      {
        title: "Fiction",
        url: "https://www.youtube.com/embed/0z8f_v0qiMs",
        imgUrl: "https://i.ytimg.com/vi/0z8f_v0qiMs/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 249,
        likedBy: [],
        createdAt: 1736500880000,
        updatedAt: 1739689686528,
        _id: "0z8f_v0qiMs"
      },
      {
        title: "Save Me",
        url: "https://www.youtube.com/embed/iRCuSYXYMFI",
        imgUrl: "https://i.ytimg.com/vi/iRCuSYXYMFI/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 133,
        likedBy: [],
        createdAt: 1736500880000,
        updatedAt: 1739647703412,
        _id: "iRCuSYXYMFI"
      }
    ],
    _id: "OLAK5uy_lNZw-GhIIJnDGMCPZ1DGRQAl4IWaT8t5Y",
    name: "Avenged Sevenfold",
    createdBy: {
      _id: "UCFcqi7MrlzIp9RMTtUlxE8g",
      fullname: "Avenged Sevenfold",
      imgUrl: "https://yt3.ggpht.com/1vNNMlL8uinsCpHkgwoIEDMXzL_Bes1jPkhdurDY-h0DZAZJGyaWqk0c7rhqBg1zBz7VoZz9pA=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1136473521000,
      updatedAt: 1739722991372
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Disturbed - Voices [Official Music Video]",
        url: "https://www.youtube.com/embed/AwLxg-yvEmc",
        imgUrl: "https://i.ytimg.com/vi/AwLxg-yvEmc/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 117,
        likedBy: [],
        createdAt: 1739439393000,
        updatedAt: 1739675842530,
        _id: "AwLxg-yvEmc"
      },
      {
        title: "Disturbed - The Game [Official Audio]",
        url: "https://www.youtube.com/embed/xO-RsILjIfE",
        imgUrl: "https://i.ytimg.com/vi/xO-RsILjIfE/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 117,
        likedBy: [],
        createdAt: 1739439393000,
        updatedAt: 1739642909666,
        _id: "xO-RsILjIfE"
      },
      {
        title: "Disturbed - Stupify [Official Music Video]",
        url: "https://www.youtube.com/embed/GVcY--XzeIc",
        imgUrl: "https://i.ytimg.com/vi/GVcY--XzeIc/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 67,
        likedBy: [],
        createdAt: 1739439393000,
        updatedAt: 1739645411194,
        _id: "GVcY--XzeIc"
      },
      {
        title: "Disturbed - Down With The Sickness (Official Music Video) [HD UPGRADE]",
        url: "https://www.youtube.com/embed/09LTT0xwdfw",
        imgUrl: "https://i.ytimg.com/vi/09LTT0xwdfw/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 80,
        likedBy: [],
        createdAt: 1739439393000,
        updatedAt: 1739668416398,
        _id: "09LTT0xwdfw"
      },
      {
        title: "Disturbed - Violence Fetish [Official Audio]",
        url: "https://www.youtube.com/embed/14wjWlfSXgo",
        imgUrl: "https://i.ytimg.com/vi/14wjWlfSXgo/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 308,
        likedBy: [],
        createdAt: 1739439393000,
        updatedAt: 1739641506786,
        _id: "14wjWlfSXgo"
      },
      {
        title: "Fear",
        url: "https://www.youtube.com/embed/933HlGzMYbY",
        imgUrl: "https://i.ytimg.com/vi/933HlGzMYbY/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 67,
        likedBy: [],
        createdAt: 1739439393000,
        updatedAt: 1739653141209,
        _id: "933HlGzMYbY"
      },
      {
        title: "Numb",
        url: "https://www.youtube.com/embed/8k5A4fOxiso",
        imgUrl: "https://i.ytimg.com/vi/8k5A4fOxiso/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 46,
        likedBy: [],
        createdAt: 1739439393000,
        updatedAt: 1739688023675,
        _id: "8k5A4fOxiso"
      },
      {
        title: "Disturbed - Want (Official Music Video) [HD Upgrade]",
        url: "https://www.youtube.com/embed/YAgboJGglfA",
        imgUrl: "https://i.ytimg.com/vi/YAgboJGglfA/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 392,
        likedBy: [],
        createdAt: 1739439393000,
        updatedAt: 1739638100024,
        _id: "YAgboJGglfA"
      },
      {
        title: "Conflict",
        url: "https://www.youtube.com/embed/fpHcKuUPbNE",
        imgUrl: "https://i.ytimg.com/vi/fpHcKuUPbNE/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 258,
        likedBy: [],
        createdAt: 1739439393000,
        updatedAt: 1739650082775,
        _id: "fpHcKuUPbNE"
      },
      {
        title: "Shout 2000",
        url: "https://www.youtube.com/embed/qJwMPizINhY",
        imgUrl: "https://i.ytimg.com/vi/qJwMPizINhY/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 98,
        likedBy: [],
        createdAt: 1739439393000,
        updatedAt: 1739692530003,
        _id: "qJwMPizINhY"
      },
      {
        title: "Disturbed - Droppin' Plates [Official Audio]",
        url: "https://www.youtube.com/embed/mcLyQko_L7w",
        imgUrl: "https://i.ytimg.com/vi/mcLyQko_L7w/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 229,
        likedBy: [],
        createdAt: 1739439393000,
        updatedAt: 1739700590021,
        _id: "mcLyQko_L7w"
      },
      {
        title: "Disturbed - Meaning Of Life [Official Audio]",
        url: "https://www.youtube.com/embed/2HIjHbTwulA",
        imgUrl: "https://i.ytimg.com/vi/2HIjHbTwulA/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 305,
        likedBy: [],
        createdAt: 1739439393000,
        updatedAt: 1739673011242,
        _id: "2HIjHbTwulA"
      }
    ],
    _id: "OLAK5uy_nUTThXEHqX-h_CJxietsKviAKcAgEXYm4",
    name: "Disturbed",
    createdBy: {
      _id: "UCveWMJeHgcIUPMnFzd7Vxjg",
      fullname: "Disturbed",
      imgUrl: "https://yt3.ggpht.com/nbWXrL3ALRe3d_DfTrd9_Dg-EUjuB66Fh-MijD7QJP-E9FDO_D3yaFxQzduqCG-WhXHhP4zMnA=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1195587526000,
      updatedAt: 1739723007715
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Intro",
        url: "https://www.youtube.com/embed/84cdTtK62dw",
        imgUrl: "https://i.ytimg.com/vi/84cdTtK62dw/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 381,
        likedBy: [],
        createdAt: 1736631561000,
        updatedAt: 1739646594126,
        _id: "84cdTtK62dw"
      },
      {
        title: "Breaking Benjamin - The Diary of Jane",
        url: "https://www.youtube.com/embed/DWaB4PXCwFU",
        imgUrl: "https://i.ytimg.com/vi/DWaB4PXCwFU/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 217,
        likedBy: [],
        createdAt: 1736631561000,
        updatedAt: 1739710633694,
        _id: "DWaB4PXCwFU"
      },
      {
        title: "Breath",
        url: "https://www.youtube.com/embed/XlqkG4XD2ok",
        imgUrl: "https://i.ytimg.com/vi/XlqkG4XD2ok/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 252,
        likedBy: [],
        createdAt: 1736631561000,
        updatedAt: 1739674060160,
        _id: "XlqkG4XD2ok"
      },
      {
        title: "You",
        url: "https://www.youtube.com/embed/1iKRnPMgK-U",
        imgUrl: "https://i.ytimg.com/vi/1iKRnPMgK-U/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 109,
        likedBy: [],
        createdAt: 1736631561000,
        updatedAt: 1739689450970,
        _id: "1iKRnPMgK-U"
      },
      {
        title: "Evil Angel",
        url: "https://www.youtube.com/embed/xAHhHQkyk0A",
        imgUrl: "https://i.ytimg.com/vi/xAHhHQkyk0A/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 246,
        likedBy: [],
        createdAt: 1736631561000,
        updatedAt: 1739664527297,
        _id: "xAHhHQkyk0A"
      },
      {
        title: "Until The End",
        url: "https://www.youtube.com/embed/M4x-GJNmgVs",
        imgUrl: "https://i.ytimg.com/vi/M4x-GJNmgVs/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 223,
        likedBy: [],
        createdAt: 1736631561000,
        updatedAt: 1739685519823,
        _id: "M4x-GJNmgVs"
      },
      {
        title: "Dance With The Devil",
        url: "https://www.youtube.com/embed/IN_FFmeQAC0",
        imgUrl: "https://i.ytimg.com/vi/IN_FFmeQAC0/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 181,
        likedBy: [],
        createdAt: 1736631561000,
        updatedAt: 1739663276212,
        _id: "IN_FFmeQAC0"
      },
      {
        title: "Topless",
        url: "https://www.youtube.com/embed/RoJf53JFA1c",
        imgUrl: "https://i.ytimg.com/vi/RoJf53JFA1c/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 82,
        likedBy: [],
        createdAt: 1736631561000,
        updatedAt: 1739691201092,
        _id: "RoJf53JFA1c"
      },
      {
        title: "Here We Are",
        url: "https://www.youtube.com/embed/eYIjCO94EGM",
        imgUrl: "https://i.ytimg.com/vi/eYIjCO94EGM/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 95,
        likedBy: [],
        createdAt: 1736631561000,
        updatedAt: 1739703688319,
        _id: "eYIjCO94EGM"
      },
      {
        title: "Unknown Soldier",
        url: "https://www.youtube.com/embed/hOxyOXjnvPk",
        imgUrl: "https://i.ytimg.com/vi/hOxyOXjnvPk/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 88,
        likedBy: [],
        createdAt: 1736631561000,
        updatedAt: 1739673731885,
        _id: "hOxyOXjnvPk"
      },
      {
        title: "Had Enough",
        url: "https://www.youtube.com/embed/FMYl528A2Rs",
        imgUrl: "https://i.ytimg.com/vi/FMYl528A2Rs/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 280,
        likedBy: [],
        createdAt: 1736631561000,
        updatedAt: 1739644334836,
        _id: "FMYl528A2Rs"
      },
      {
        title: "You Fight Me",
        url: "https://www.youtube.com/embed/11cwZ2j0984",
        imgUrl: "https://i.ytimg.com/vi/11cwZ2j0984/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 78,
        likedBy: [],
        createdAt: 1736631561000,
        updatedAt: 1739676043744,
        _id: "11cwZ2j0984"
      },
      {
        title: "Outro",
        url: "https://www.youtube.com/embed/vKqWsNCSWkc",
        imgUrl: "https://i.ytimg.com/vi/vKqWsNCSWkc/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 121,
        likedBy: [],
        createdAt: 1736631561000,
        updatedAt: 1739702696344,
        _id: "vKqWsNCSWkc"
      }
    ],
    _id: "OLAK5uy_nl-1HFsx8cCC8wSkTKnMmxQejjqLU-1FY",
    name: "Breaking Benjamin - Topic",
    createdBy: {
      _id: "UCgdqrZsRnxy1qGIusPhQEyg",
      fullname: "Breaking Benjamin - Topic",
      imgUrl: "https://yt3.ggpht.com/HxzOQv6aAl_H64ELBQtGhLADAqk9tdTtiagrhCy9cOQfGJCfQYlpUh1XsGxZt_pHZPndOl5cXg=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1373792809000,
      updatedAt: 1739723021497
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "We're Back! (Explicit)",
        url: "https://www.youtube.com/embed/zzpl6Qgq7zk",
        imgUrl: "https://i.ytimg.com/vi/zzpl6Qgq7zk/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 88,
        likedBy: [],
        createdAt: 1736380160000,
        updatedAt: 1739667960546,
        _id: "zzpl6Qgq7zk"
      },
      {
        title: "Mama",
        url: "https://www.youtube.com/embed/N_xl3XLPJNU",
        imgUrl: "https://i.ytimg.com/vi/N_xl3XLPJNU/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 40,
        likedBy: [],
        createdAt: 1736380160000,
        updatedAt: 1739691450381,
        _id: "N_xl3XLPJNU"
      },
      {
        title: "I Just Had Sex (feat. Akon)",
        url: "https://www.youtube.com/embed/lQlIhraqL7o",
        imgUrl: "https://i.ytimg.com/vi/lQlIhraqL7o/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 150,
        likedBy: [],
        createdAt: 1736380160000,
        updatedAt: 1739698610419,
        _id: "lQlIhraqL7o"
      },
      {
        title: "Jack Sparrow (feat. Michael Bolton)",
        url: "https://www.youtube.com/embed/GI6CfKcMhjY",
        imgUrl: "https://i.ytimg.com/vi/GI6CfKcMhjY/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 118,
        likedBy: [],
        createdAt: 1736380160000,
        updatedAt: 1739700951418,
        _id: "GI6CfKcMhjY"
      },
      {
        title: "Attracted To Us",
        url: "https://www.youtube.com/embed/aVhqVO32QUw",
        imgUrl: "https://i.ytimg.com/vi/aVhqVO32QUw/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 172,
        likedBy: [],
        createdAt: 1736380160000,
        updatedAt: 1739658870016,
        _id: "aVhqVO32QUw"
      },
      {
        title: "Rocky",
        url: "https://www.youtube.com/embed/QPrckSSISGI",
        imgUrl: "https://i.ytimg.com/vi/QPrckSSISGI/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 228,
        likedBy: [],
        createdAt: 1736380160000,
        updatedAt: 1739716154045,
        _id: "QPrckSSISGI"
      },
      {
        title: "My Mic",
        url: "https://www.youtube.com/embed/t3S87SWcugY",
        imgUrl: "https://i.ytimg.com/vi/t3S87SWcugY/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 399,
        likedBy: [],
        createdAt: 1736380160000,
        updatedAt: 1739692468312,
        _id: "t3S87SWcugY"
      },
      {
        title: "Turtleneck & Chain",
        url: "https://www.youtube.com/embed/Ed9XSu5EXxY",
        imgUrl: "https://i.ytimg.com/vi/Ed9XSu5EXxY/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 194,
        likedBy: [],
        createdAt: 1736380160000,
        updatedAt: 1739715486037,
        _id: "Ed9XSu5EXxY"
      },
      {
        title: "Shy Ronnie 2: Ronnie & Clyde (feat. Rihanna)",
        url: "https://www.youtube.com/embed/6_W_xLWtNa0",
        imgUrl: "https://i.ytimg.com/vi/6_W_xLWtNa0/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 144,
        likedBy: [],
        createdAt: 1736380160000,
        updatedAt: 1739714309463,
        _id: "6_W_xLWtNa0"
      },
      {
        title: "Trouble On Dookie Island",
        url: "https://www.youtube.com/embed/LOfXGVuOblQ",
        imgUrl: "https://i.ytimg.com/vi/LOfXGVuOblQ/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 291,
        likedBy: [],
        createdAt: 1736380160000,
        updatedAt: 1739672560359,
        _id: "LOfXGVuOblQ"
      },
      {
        title: "Falcor Vs. Atreyu - Classy Skit #1",
        url: "https://www.youtube.com/embed/pkyXAddNN5U",
        imgUrl: "https://i.ytimg.com/vi/pkyXAddNN5U/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 392,
        likedBy: [],
        createdAt: 1736380160000,
        updatedAt: 1739707095689,
        _id: "pkyXAddNN5U"
      },
      {
        title: "Motherlover (feat. Justin Timberlake)",
        url: "https://www.youtube.com/embed/X0DeIqJm4vM",
        imgUrl: "https://i.ytimg.com/vi/X0DeIqJm4vM/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 80,
        likedBy: [],
        createdAt: 1736380160000,
        updatedAt: 1739704918738,
        _id: "X0DeIqJm4vM"
      },
      {
        title: "The Creep (feat. Nicki Minaj & John Waters)",
        url: "https://www.youtube.com/embed/tLPZmPaHme0",
        imgUrl: "https://i.ytimg.com/vi/tLPZmPaHme0/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 385,
        likedBy: [],
        createdAt: 1736380160000,
        updatedAt: 1739677189129,
        _id: "tLPZmPaHme0"
      },
      {
        title: "Watch Me Do Me - Classy Skit #2",
        url: "https://www.youtube.com/embed/ZRzvdfA7N80",
        imgUrl: "https://i.ytimg.com/vi/ZRzvdfA7N80/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 279,
        likedBy: [],
        createdAt: 1736380160000,
        updatedAt: 1739695678737,
        _id: "ZRzvdfA7N80"
      },
      {
        title: "Threw It On The Ground",
        url: "https://www.youtube.com/embed/gAYL5H46QnQ",
        imgUrl: "https://i.ytimg.com/vi/gAYL5H46QnQ/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 323,
        likedBy: [],
        createdAt: 1736380160000,
        updatedAt: 1739676318211,
        _id: "gAYL5H46QnQ"
      },
      {
        title: "Japan",
        url: "https://www.youtube.com/embed/LCmlSyF7N24",
        imgUrl: "https://i.ytimg.com/vi/LCmlSyF7N24/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 304,
        likedBy: [],
        createdAt: 1736380160000,
        updatedAt: 1739691000899,
        _id: "LCmlSyF7N24"
      },
      {
        title: "After Party",
        url: "https://www.youtube.com/embed/9MgNgr5YLyE",
        imgUrl: "https://i.ytimg.com/vi/9MgNgr5YLyE/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 171,
        likedBy: [],
        createdAt: 1736380160000,
        updatedAt: 1739710050176,
        _id: "9MgNgr5YLyE"
      },
      {
        title: "No Homo",
        url: "https://www.youtube.com/embed/cwGqn6NqIH8",
        imgUrl: "https://i.ytimg.com/vi/cwGqn6NqIH8/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 150,
        likedBy: [],
        createdAt: 1736380160000,
        updatedAt: 1739719196713,
        _id: "cwGqn6NqIH8"
      },
      {
        title: "No Homo Outro",
        url: "https://www.youtube.com/embed/P7yjYKtqzHg",
        imgUrl: "https://i.ytimg.com/vi/P7yjYKtqzHg/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 35,
        likedBy: [],
        createdAt: 1736380160000,
        updatedAt: 1739646245971,
        _id: "P7yjYKtqzHg"
      }
    ],
    _id: "OLAK5uy_l33QlYdYbx4GpWyc-K6DIl8H5xzenB14g",
    name: "The Lonely Island - Topic",
    createdBy: {
      _id: "UC4LMYsZmbRZOpHV8B-trVvQ",
      fullname: "The Lonely Island - Topic",
      imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mwpPZiDzeEy8MJSFFzOOREA8CjZRMp1LRBVPfkISIRR4E=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1528839127000,
      updatedAt: 1739723139331
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Intro",
        url: "https://www.youtube.com/embed/Q8uc27T5K8s",
        imgUrl: "https://i.ytimg.com/vi/Q8uc27T5K8s/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 95,
        likedBy: [],
        createdAt: 1736827996000,
        updatedAt: 1739643954890,
        _id: "Q8uc27T5K8s"
      },
      {
        title: "AS BLOOD RUNS BLACK - In Dying Days (With Lyrics)",
        url: "https://www.youtube.com/embed/6hiN_dgGKGQ",
        imgUrl: "https://i.ytimg.com/vi/6hiN_dgGKGQ/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 127,
        likedBy: [],
        createdAt: 1736827996000,
        updatedAt: 1739674768018,
        _id: "6hiN_dgGKGQ"
      },
      {
        title: "As Blood Runs Black - My Fears Have Become Phobias - Bass Play-through - Nick Stewart",
        url: "https://www.youtube.com/embed/jZTibKiSkms",
        imgUrl: "https://i.ytimg.com/vi/jZTibKiSkms/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 34,
        likedBy: [],
        createdAt: 1736827996000,
        updatedAt: 1739722566236,
        _id: "jZTibKiSkms"
      },
      {
        title: "AS BLOOD RUNS BLACK - Hester Prynne (With Lyrics)",
        url: "https://www.youtube.com/embed/AbCZ94eY3Nw",
        imgUrl: "https://i.ytimg.com/vi/AbCZ94eY3Nw/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 115,
        likedBy: [],
        createdAt: 1736827996000,
        updatedAt: 1739642455033,
        _id: "AbCZ94eY3Nw"
      },
      {
        title: "AS BLOOD RUNS BLACK - Pouring Reign (With Lyrics)",
        url: "https://www.youtube.com/embed/dlj8ohYZX6E",
        imgUrl: "https://i.ytimg.com/vi/dlj8ohYZX6E/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 296,
        likedBy: [],
        createdAt: 1736827996000,
        updatedAt: 1739692138157,
        _id: "dlj8ohYZX6E"
      },
      {
        title: "AS BLOOD RUNS BLACK - The Brighter Side Of Suffering (With Lyrics)",
        url: "https://www.youtube.com/embed/tMQzVInB8K8",
        imgUrl: "https://i.ytimg.com/vi/tMQzVInB8K8/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 216,
        likedBy: [],
        createdAt: 1736827996000,
        updatedAt: 1739642986966,
        _id: "tMQzVInB8K8"
      },
      {
        title: "AS BLOOD RUNS BLACK - The Beautiful Mistake (With Lyrics)",
        url: "https://www.youtube.com/embed/X_AEx_ecMv4",
        imgUrl: "https://i.ytimg.com/vi/X_AEx_ecMv4/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 289,
        likedBy: [],
        createdAt: 1736827996000,
        updatedAt: 1739672192319,
        _id: "X_AEx_ecMv4"
      },
      {
        title: "AS BLOOD RUNS BLACK - Strife (Chug Chug) (With Lyrics)",
        url: "https://www.youtube.com/embed/rumtWBnTRck",
        imgUrl: "https://i.ytimg.com/vi/rumtWBnTRck/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 297,
        likedBy: [],
        createdAt: 1736827996000,
        updatedAt: 1739687423114,
        _id: "rumtWBnTRck"
      },
      {
        title: "AS BLOOD RUNS BLACK - Beneath The Surface (With Lyrics)",
        url: "https://www.youtube.com/embed/uXOCg4DUhtE",
        imgUrl: "https://i.ytimg.com/vi/uXOCg4DUhtE/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 151,
        likedBy: [],
        createdAt: 1736827996000,
        updatedAt: 1739647443396,
        _id: "uXOCg4DUhtE"
      },
      {
        title: "AS BLOOD RUNS BLACK - Legends Never Die (With Lyrics)",
        url: "https://www.youtube.com/embed/TRIdiD5BMHM",
        imgUrl: "https://i.ytimg.com/vi/TRIdiD5BMHM/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 168,
        likedBy: [],
        createdAt: 1736827996000,
        updatedAt: 1739678015076,
        _id: "TRIdiD5BMHM"
      }
    ],
    _id: "OLAK5uy_lPZsvVEy_CyLpgv_3vemFE5GMbaCoHsWA",
    name: "As Blood Runs Black - Topic",
    createdBy: {
      _id: "UCcZWcLAA2WIbL9lxtypqIfQ",
      fullname: "As Blood Runs Black - Topic",
      imgUrl: "https://yt3.ggpht.com/Wu667Mn_ciQfwKh9IY6Hh99nzJa-22lyKjBTCJ_Anb1GNgLZ2PW4GFvHuOKldJ_0amWsIT-CDg=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1387012645000,
      updatedAt: 1739723161866
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Breaking Benjamin - Dark (Audio Only)",
        url: "https://www.youtube.com/embed/0h6HYapOR-M",
        imgUrl: "https://i.ytimg.com/vi/0h6HYapOR-M/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 341,
        likedBy: [],
        createdAt: 1738106231000,
        updatedAt: 1739666192296,
        _id: "0h6HYapOR-M"
      },
      {
        title: "Breaking Benjamin - Failure (Official Video)",
        url: "https://www.youtube.com/embed/fVIh1MFWDVw",
        imgUrl: "https://i.ytimg.com/vi/fVIh1MFWDVw/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 75,
        likedBy: [],
        createdAt: 1738106231000,
        updatedAt: 1739700624681,
        _id: "fVIh1MFWDVw"
      },
      {
        title: "Breaking Benjamin - Angels Fall (Official Video)",
        url: "https://www.youtube.com/embed/9zFfRSeA1ls",
        imgUrl: "https://i.ytimg.com/vi/9zFfRSeA1ls/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 229,
        likedBy: [],
        createdAt: 1738106231000,
        updatedAt: 1739649092021,
        _id: "9zFfRSeA1ls"
      },
      {
        title: "Breaking Benjamin - Breaking the Silence (Audio Only)",
        url: "https://www.youtube.com/embed/0OruePOXYvQ",
        imgUrl: "https://i.ytimg.com/vi/0OruePOXYvQ/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 35,
        likedBy: [],
        createdAt: 1738106231000,
        updatedAt: 1739696812228,
        _id: "0OruePOXYvQ"
      },
      {
        title: "Hollow",
        url: "https://www.youtube.com/embed/RqcDQZG7RPQ",
        imgUrl: "https://i.ytimg.com/vi/RqcDQZG7RPQ/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 251,
        likedBy: [],
        createdAt: 1738106231000,
        updatedAt: 1739640537949,
        _id: "RqcDQZG7RPQ"
      },
      {
        title: "Breaking Benjamin - Close to Heaven (Audio Only)",
        url: "https://www.youtube.com/embed/J3ZRI6mM3sU",
        imgUrl: "https://i.ytimg.com/vi/J3ZRI6mM3sU/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 208,
        likedBy: [],
        createdAt: 1738106231000,
        updatedAt: 1739679244188,
        _id: "J3ZRI6mM3sU"
      },
      {
        title: "Breaking Benjamin - Bury Me Alive (Audio Only)",
        url: "https://www.youtube.com/embed/jJ3YPcwkq_g",
        imgUrl: "https://i.ytimg.com/vi/jJ3YPcwkq_g/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 306,
        likedBy: [],
        createdAt: 1738106231000,
        updatedAt: 1739687578177,
        _id: "jJ3YPcwkq_g"
      },
      {
        title: "Breaking Benjamin - Never Again",
        url: "https://www.youtube.com/embed/zEUG3_Zh-rw",
        imgUrl: "https://i.ytimg.com/vi/zEUG3_Zh-rw/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 221,
        likedBy: [],
        createdAt: 1738106231000,
        updatedAt: 1739658814260,
        _id: "zEUG3_Zh-rw"
      },
      {
        title: "Breaking Benjamin - The Great Divide (Audio Only)",
        url: "https://www.youtube.com/embed/OCq3JKzFjgQ",
        imgUrl: "https://i.ytimg.com/vi/OCq3JKzFjgQ/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 324,
        likedBy: [],
        createdAt: 1738106231000,
        updatedAt: 1739714203305,
        _id: "OCq3JKzFjgQ"
      },
      {
        title: "Breaking Benjamin - Ashes of Eden (Official Video)",
        url: "https://www.youtube.com/embed/d1yTyAh8IA8",
        imgUrl: "https://i.ytimg.com/vi/d1yTyAh8IA8/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 307,
        likedBy: [],
        createdAt: 1738106231000,
        updatedAt: 1739657987814,
        _id: "d1yTyAh8IA8"
      },
      {
        title: "Breaking Benjamin - Defeated (Audio Only)",
        url: "https://www.youtube.com/embed/d7O-FGSkUJk",
        imgUrl: "https://i.ytimg.com/vi/d7O-FGSkUJk/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 56,
        likedBy: [],
        createdAt: 1738106231000,
        updatedAt: 1739696098142,
        _id: "d7O-FGSkUJk"
      },
      {
        title: "Breaking Benjamin - Dawn (Audio Only)",
        url: "https://www.youtube.com/embed/7z6Voo2Cx1k",
        imgUrl: "https://i.ytimg.com/vi/7z6Voo2Cx1k/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 386,
        likedBy: [],
        createdAt: 1738106231000,
        updatedAt: 1739712247355,
        _id: "7z6Voo2Cx1k"
      }
    ],
    _id: "OLAK5uy_mgg8HCLV0XVgzEJx61GrsgxkAJj8kuN_Q",
    name: "BreakingBenjaminVEVO",
    createdBy: {
      _id: "UCzsKCFGWpOk9gxkOjORRkZw",
      fullname: "BreakingBenjaminVEVO",
      imgUrl: "https://yt3.ggpht.com/HxzOQv6aAl_H64ELBQtGhLADAqk9tdTtiagrhCy9cOQfGJCfQYlpUh1XsGxZt_pHZPndOl5cXg=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1242106043000,
      updatedAt: 1739723187961
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "THY ART IS MURDER - I'll Show You God (OFFICIAL AUDIO)",
        url: "https://www.youtube.com/embed/M3NJ84M8rYI",
        imgUrl: "https://i.ytimg.com/vi/M3NJ84M8rYI/hqdefault.jpg",
        addedBy: {
          _id: "UCGjEbsGoyWSJlMjzuWM4FKQ",
          fullname: "Thy Art Is Murder",
          imgUrl: "https://yt3.ggpht.com/Z0WmPvrsS_vDzrEyqSdBa64S_5jmd_NJ1RyQYd-ewY8xEzj35rYvhS2nrDgh_9dgNGpfp0s2=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 395,
        likedBy: [],
        createdAt: 1395197403000,
        updatedAt: 1739706972495,
        _id: "M3NJ84M8rYI"
      },
      {
        title: "THY ART IS MURDER - Whore To A Chainsaw (OFFICIAL AUDIO)",
        url: "https://www.youtube.com/embed/neEXtRTPhZo",
        imgUrl: "https://i.ytimg.com/vi/neEXtRTPhZo/hqdefault.jpg",
        addedBy: {
          _id: "UCGjEbsGoyWSJlMjzuWM4FKQ",
          fullname: "Thy Art Is Murder",
          imgUrl: "https://yt3.ggpht.com/Z0WmPvrsS_vDzrEyqSdBa64S_5jmd_NJ1RyQYd-ewY8xEzj35rYvhS2nrDgh_9dgNGpfp0s2=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 210,
        likedBy: [],
        createdAt: 1395209893000,
        updatedAt: 1739713619297,
        _id: "neEXtRTPhZo"
      },
      {
        title: "THY ART IS MURDER - Parasitic Autopsy (OFFICIAL AUDIO)",
        url: "https://www.youtube.com/embed/6t5C6uhzqU8",
        imgUrl: "https://i.ytimg.com/vi/6t5C6uhzqU8/hqdefault.jpg",
        addedBy: {
          _id: "UCGjEbsGoyWSJlMjzuWM4FKQ",
          fullname: "Thy Art Is Murder",
          imgUrl: "https://yt3.ggpht.com/Z0WmPvrsS_vDzrEyqSdBa64S_5jmd_NJ1RyQYd-ewY8xEzj35rYvhS2nrDgh_9dgNGpfp0s2=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 361,
        likedBy: [],
        createdAt: 1395209902000,
        updatedAt: 1739686757578,
        _id: "6t5C6uhzqU8"
      },
      {
        title: "THY ART IS MURDER - Breeding Bacteria (OFFICIAL AUDIO)",
        url: "https://www.youtube.com/embed/ZdfFCgeTJgU",
        imgUrl: "https://i.ytimg.com/vi/ZdfFCgeTJgU/hqdefault.jpg",
        addedBy: {
          _id: "UCGjEbsGoyWSJlMjzuWM4FKQ",
          fullname: "Thy Art Is Murder",
          imgUrl: "https://yt3.ggpht.com/Z0WmPvrsS_vDzrEyqSdBa64S_5jmd_NJ1RyQYd-ewY8xEzj35rYvhS2nrDgh_9dgNGpfp0s2=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 119,
        likedBy: [],
        createdAt: 1395209911000,
        updatedAt: 1739669303160,
        _id: "ZdfFCgeTJgU"
      },
      {
        title: "THY ART IS MURDER - Infinite Death (OFFICIAL AUDIO)",
        url: "https://www.youtube.com/embed/PSXH0xgy-0o",
        imgUrl: "https://i.ytimg.com/vi/PSXH0xgy-0o/hqdefault.jpg",
        addedBy: {
          _id: "UCGjEbsGoyWSJlMjzuWM4FKQ",
          fullname: "Thy Art Is Murder",
          imgUrl: "https://yt3.ggpht.com/Z0WmPvrsS_vDzrEyqSdBa64S_5jmd_NJ1RyQYd-ewY8xEzj35rYvhS2nrDgh_9dgNGpfp0s2=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 181,
        likedBy: [],
        createdAt: 1395212278000,
        updatedAt: 1739718959714,
        _id: "PSXH0xgy-0o"
      }
    ],
    _id: "PLXhbj9gQKTejJcd-bZcvjftKrg1eFJJka",
    name: "Thy Art Is Murder",
    createdBy: {
      _id: "UCGjEbsGoyWSJlMjzuWM4FKQ",
      fullname: "Thy Art Is Murder",
      imgUrl: "https://yt3.ggpht.com/Z0WmPvrsS_vDzrEyqSdBa64S_5jmd_NJ1RyQYd-ewY8xEzj35rYvhS2nrDgh_9dgNGpfp0s2=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1329058139000,
      updatedAt: 1739723259269
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Loa - The Only Thing I Know",
        url: "https://www.youtube.com/embed/ct963CP-WC4",
        imgUrl: "https://i.ytimg.com/vi/ct963CP-WC4/hqdefault.jpg",
        addedBy: {
          _id: "UCeKNE47oa6xl7KifwZpF9Qg",
          fullname: "Loa",
          imgUrl: "https://yt3.ggpht.com/jXKcCid-JnRJyZM1cRIhFG3hTwVgdWMtr65UDe6Ui9i-g396wmCHPJRDHhlTAq6cc6DksoHDhw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 262,
        likedBy: [],
        createdAt: 1715685875000,
        updatedAt: 1739656717677,
        _id: "ct963CP-WC4"
      },
      {
        title: "LOA",
        url: "https://www.youtube.com/embed/SegdITA4pZI",
        imgUrl: "https://i.ytimg.com/vi/SegdITA4pZI/hqdefault.jpg",
        addedBy: {
          _id: "UCeKNE47oa6xl7KifwZpF9Qg",
          fullname: "Loa",
          imgUrl: "https://yt3.ggpht.com/jXKcCid-JnRJyZM1cRIhFG3hTwVgdWMtr65UDe6Ui9i-g396wmCHPJRDHhlTAq6cc6DksoHDhw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 153,
        likedBy: [],
        createdAt: 1715685875000,
        updatedAt: 1739664333027,
        _id: "SegdITA4pZI"
      },
      {
        title: "Loa - Complexity In Social Rules(feat. MGC)",
        url: "https://www.youtube.com/embed/OBlx0RwHFwg",
        imgUrl: "https://i.ytimg.com/vi/OBlx0RwHFwg/hqdefault.jpg",
        addedBy: {
          _id: "UCeKNE47oa6xl7KifwZpF9Qg",
          fullname: "Loa",
          imgUrl: "https://yt3.ggpht.com/jXKcCid-JnRJyZM1cRIhFG3hTwVgdWMtr65UDe6Ui9i-g396wmCHPJRDHhlTAq6cc6DksoHDhw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 101,
        likedBy: [],
        createdAt: 1715685875000,
        updatedAt: 1739674843553,
        _id: "OBlx0RwHFwg"
      },
      {
        title: "Loa - Gloom",
        url: "https://www.youtube.com/embed/7TmebouTIVk",
        imgUrl: "https://i.ytimg.com/vi/7TmebouTIVk/hqdefault.jpg",
        addedBy: {
          _id: "UCeKNE47oa6xl7KifwZpF9Qg",
          fullname: "Loa",
          imgUrl: "https://yt3.ggpht.com/jXKcCid-JnRJyZM1cRIhFG3hTwVgdWMtr65UDe6Ui9i-g396wmCHPJRDHhlTAq6cc6DksoHDhw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 181,
        likedBy: [],
        createdAt: 1715685875000,
        updatedAt: 1739695350320,
        _id: "7TmebouTIVk"
      }
    ],
    _id: "PL9ET_iJ426nYmv8RgtztI3jqnQvdo19pR",
    name: "Loa",
    createdBy: {
      _id: "UCeKNE47oa6xl7KifwZpF9Qg",
      fullname: "Loa",
      imgUrl: "https://yt3.ggpht.com/jXKcCid-JnRJyZM1cRIhFG3hTwVgdWMtr65UDe6Ui9i-g396wmCHPJRDHhlTAq6cc6DksoHDhw=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1658398725305,
      updatedAt: 1739723270856
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Superheaven - “Sponge” (Official Visualizer)",
        url: "https://www.youtube.com/embed/1CgojpF6Pno",
        imgUrl: "https://i.ytimg.com/vi/1CgojpF6Pno/hqdefault.jpg",
        addedBy: {
          _id: "UC-0ZI1IYz0z2mM7P_Kwwq-A",
          fullname: "Superheaven",
          imgUrl: "https://yt3.ggpht.com/Xn062GxO67wcfsPlOn9ka6bRCPSCx-gusZLaDeFBtO1mFhQSUQREiZ5FQHgaLWQuHS6uSU2hwzg=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 361,
        likedBy: [],
        createdAt: 1689782833000,
        updatedAt: 1739640218407,
        _id: "1CgojpF6Pno"
      },
      {
        title: "Superheaven - “Life In A Jar” (Official Visualizer)",
        url: "https://www.youtube.com/embed/-qTpdkcCtdk",
        imgUrl: "https://i.ytimg.com/vi/-qTpdkcCtdk/hqdefault.jpg",
        addedBy: {
          _id: "UC-0ZI1IYz0z2mM7P_Kwwq-A",
          fullname: "Superheaven",
          imgUrl: "https://yt3.ggpht.com/Xn062GxO67wcfsPlOn9ka6bRCPSCx-gusZLaDeFBtO1mFhQSUQREiZ5FQHgaLWQuHS6uSU2hwzg=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 261,
        likedBy: [],
        createdAt: 1689782833000,
        updatedAt: 1739662566284,
        _id: "-qTpdkcCtdk"
      },
      {
        title: "Superheaven - “Outside Of Me” (Official Visualizer)",
        url: "https://www.youtube.com/embed/rITH_Gl2EKU",
        imgUrl: "https://i.ytimg.com/vi/rITH_Gl2EKU/hqdefault.jpg",
        addedBy: {
          _id: "UC-0ZI1IYz0z2mM7P_Kwwq-A",
          fullname: "Superheaven",
          imgUrl: "https://yt3.ggpht.com/Xn062GxO67wcfsPlOn9ka6bRCPSCx-gusZLaDeFBtO1mFhQSUQREiZ5FQHgaLWQuHS6uSU2hwzg=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 307,
        likedBy: [],
        createdAt: 1689782833000,
        updatedAt: 1739723115744,
        _id: "rITH_Gl2EKU"
      },
      {
        title: "Superheaven - “Sheltered” (Official Visualizer)",
        url: "https://www.youtube.com/embed/zlkcrlRn5Jw",
        imgUrl: "https://i.ytimg.com/vi/zlkcrlRn5Jw/hqdefault.jpg",
        addedBy: {
          _id: "UC-0ZI1IYz0z2mM7P_Kwwq-A",
          fullname: "Superheaven",
          imgUrl: "https://yt3.ggpht.com/Xn062GxO67wcfsPlOn9ka6bRCPSCx-gusZLaDeFBtO1mFhQSUQREiZ5FQHgaLWQuHS6uSU2hwzg=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 50,
        likedBy: [],
        createdAt: 1689782833000,
        updatedAt: 1739689675189,
        _id: "zlkcrlRn5Jw"
      },
      {
        title: "Superheaven - “Crawl” (Official Visualizer)",
        url: "https://www.youtube.com/embed/-H-dLZKIzHM",
        imgUrl: "https://i.ytimg.com/vi/-H-dLZKIzHM/hqdefault.jpg",
        addedBy: {
          _id: "UC-0ZI1IYz0z2mM7P_Kwwq-A",
          fullname: "Superheaven",
          imgUrl: "https://yt3.ggpht.com/Xn062GxO67wcfsPlOn9ka6bRCPSCx-gusZLaDeFBtO1mFhQSUQREiZ5FQHgaLWQuHS6uSU2hwzg=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 195,
        likedBy: [],
        createdAt: 1689782833000,
        updatedAt: 1739704415843,
        _id: "-H-dLZKIzHM"
      },
      {
        title: "Superheaven - “Last October” (Official Visualizer)",
        url: "https://www.youtube.com/embed/XWoCzibojNc",
        imgUrl: "https://i.ytimg.com/vi/XWoCzibojNc/hqdefault.jpg",
        addedBy: {
          _id: "UC-0ZI1IYz0z2mM7P_Kwwq-A",
          fullname: "Superheaven",
          imgUrl: "https://yt3.ggpht.com/Xn062GxO67wcfsPlOn9ka6bRCPSCx-gusZLaDeFBtO1mFhQSUQREiZ5FQHgaLWQuHS6uSU2hwzg=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 194,
        likedBy: [],
        createdAt: 1689782833000,
        updatedAt: 1739701914828,
        _id: "XWoCzibojNc"
      },
      {
        title: "Superheaven - “Youngest Daughter” (Official Visualizer)",
        url: "https://www.youtube.com/embed/VMk6i7Q0k54",
        imgUrl: "https://i.ytimg.com/vi/VMk6i7Q0k54/hqdefault.jpg",
        addedBy: {
          _id: "UC-0ZI1IYz0z2mM7P_Kwwq-A",
          fullname: "Superheaven",
          imgUrl: "https://yt3.ggpht.com/Xn062GxO67wcfsPlOn9ka6bRCPSCx-gusZLaDeFBtO1mFhQSUQREiZ5FQHgaLWQuHS6uSU2hwzg=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 61,
        likedBy: [],
        createdAt: 1689782833000,
        updatedAt: 1739723182055,
        _id: "VMk6i7Q0k54"
      },
      {
        title: "Superheaven - “Knew” (Official Visualizer)",
        url: "https://www.youtube.com/embed/pOB1mSKZ-PI",
        imgUrl: "https://i.ytimg.com/vi/pOB1mSKZ-PI/hqdefault.jpg",
        addedBy: {
          _id: "UC-0ZI1IYz0z2mM7P_Kwwq-A",
          fullname: "Superheaven",
          imgUrl: "https://yt3.ggpht.com/Xn062GxO67wcfsPlOn9ka6bRCPSCx-gusZLaDeFBtO1mFhQSUQREiZ5FQHgaLWQuHS6uSU2hwzg=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 89,
        likedBy: [],
        createdAt: 1689782833000,
        updatedAt: 1739693814242,
        _id: "pOB1mSKZ-PI"
      },
      {
        title: "Superheaven - “No One's Deserving” (Official Visualizer)",
        url: "https://www.youtube.com/embed/ScTODhHAqFc",
        imgUrl: "https://i.ytimg.com/vi/ScTODhHAqFc/hqdefault.jpg",
        addedBy: {
          _id: "UC-0ZI1IYz0z2mM7P_Kwwq-A",
          fullname: "Superheaven",
          imgUrl: "https://yt3.ggpht.com/Xn062GxO67wcfsPlOn9ka6bRCPSCx-gusZLaDeFBtO1mFhQSUQREiZ5FQHgaLWQuHS6uSU2hwzg=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 93,
        likedBy: [],
        createdAt: 1689782833000,
        updatedAt: 1739698469368,
        _id: "ScTODhHAqFc"
      },
      {
        title: "Superheaven - “Hole In The Ground” (Official Visualizer)",
        url: "https://www.youtube.com/embed/4t-cyuV4edQ",
        imgUrl: "https://i.ytimg.com/vi/4t-cyuV4edQ/hqdefault.jpg",
        addedBy: {
          _id: "UC-0ZI1IYz0z2mM7P_Kwwq-A",
          fullname: "Superheaven",
          imgUrl: "https://yt3.ggpht.com/Xn062GxO67wcfsPlOn9ka6bRCPSCx-gusZLaDeFBtO1mFhQSUQREiZ5FQHgaLWQuHS6uSU2hwzg=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 388,
        likedBy: [],
        createdAt: 1689782833000,
        updatedAt: 1739675369451,
        _id: "4t-cyuV4edQ"
      },
      {
        title: "Superheaven - “In On It” (Official Visualizer)",
        url: "https://www.youtube.com/embed/OmwXDRScxe8",
        imgUrl: "https://i.ytimg.com/vi/OmwXDRScxe8/hqdefault.jpg",
        addedBy: {
          _id: "UC-0ZI1IYz0z2mM7P_Kwwq-A",
          fullname: "Superheaven",
          imgUrl: "https://yt3.ggpht.com/Xn062GxO67wcfsPlOn9ka6bRCPSCx-gusZLaDeFBtO1mFhQSUQREiZ5FQHgaLWQuHS6uSU2hwzg=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 104,
        likedBy: [],
        createdAt: 1689782833000,
        updatedAt: 1739638772581,
        _id: "OmwXDRScxe8"
      },
      {
        title: "Superheaven - “Around The Railing” (Official Visualizer)",
        url: "https://www.youtube.com/embed/uOwDVFXKLOY",
        imgUrl: "https://i.ytimg.com/vi/uOwDVFXKLOY/hqdefault.jpg",
        addedBy: {
          _id: "UC-0ZI1IYz0z2mM7P_Kwwq-A",
          fullname: "Superheaven",
          imgUrl: "https://yt3.ggpht.com/Xn062GxO67wcfsPlOn9ka6bRCPSCx-gusZLaDeFBtO1mFhQSUQREiZ5FQHgaLWQuHS6uSU2hwzg=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 64,
        likedBy: [],
        createdAt: 1689782833000,
        updatedAt: 1739687018126,
        _id: "uOwDVFXKLOY"
      },
      {
        title: "Superheaven - Jar (Full Album Stream)",
        url: "https://www.youtube.com/embed/jhtxDbL15Q4",
        imgUrl: "https://i.ytimg.com/vi/jhtxDbL15Q4/hqdefault.jpg",
        addedBy: {
          _id: "UC-0ZI1IYz0z2mM7P_Kwwq-A",
          fullname: "Superheaven",
          imgUrl: "https://yt3.ggpht.com/Xn062GxO67wcfsPlOn9ka6bRCPSCx-gusZLaDeFBtO1mFhQSUQREiZ5FQHgaLWQuHS6uSU2hwzg=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 232,
        likedBy: [],
        createdAt: 1689782833000,
        updatedAt: 1739686995443,
        _id: "jhtxDbL15Q4"
      }
    ],
    _id: "PLS1PbtTMM1p09llVRfmOCvmxA-urOx11K",
    name: "Superheaven",
    createdBy: {
      _id: "UC-0ZI1IYz0z2mM7P_Kwwq-A",
      fullname: "Superheaven",
      imgUrl: "https://yt3.ggpht.com/Xn062GxO67wcfsPlOn9ka6bRCPSCx-gusZLaDeFBtO1mFhQSUQREiZ5FQHgaLWQuHS6uSU2hwzg=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1396978278000,
      updatedAt: 1739723306283
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Flamingo",
        url: "https://www.youtube.com/embed/pOjZlHeaark",
        imgUrl: "https://i.ytimg.com/vi/pOjZlHeaark/hqdefault.jpg",
        addedBy: {
          _id: "UC1pVU6KCHCNzLhIbTN8A90g",
          fullname: "Wordux987",
          imgUrl: "https://yt3.ggpht.com/PISVNdLu3y4ffUgfD8uCOBiSs57qcyFmPKFW198lhZ1sBtTeTaFIB42HAo9JQoleVBjX_4otLw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 152,
        likedBy: [],
        createdAt: 1601026136000,
        updatedAt: 1739682201417,
        _id: "pOjZlHeaark"
      },
      {
        title: "Manipulator",
        url: "https://www.youtube.com/embed/K7fDXZ2fkWs",
        imgUrl: "https://i.ytimg.com/vi/K7fDXZ2fkWs/hqdefault.jpg",
        addedBy: {
          _id: "UC1pVU6KCHCNzLhIbTN8A90g",
          fullname: "Wordux987",
          imgUrl: "https://yt3.ggpht.com/PISVNdLu3y4ffUgfD8uCOBiSs57qcyFmPKFW198lhZ1sBtTeTaFIB42HAo9JQoleVBjX_4otLw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 181,
        likedBy: [],
        createdAt: 1601026208000,
        updatedAt: 1739664376327,
        _id: "K7fDXZ2fkWs"
      },
      {
        title: "Return to the Sauce",
        url: "https://www.youtube.com/embed/n_T-z4uJFLw",
        imgUrl: "https://i.ytimg.com/vi/n_T-z4uJFLw/hqdefault.jpg",
        addedBy: {
          _id: "UC1pVU6KCHCNzLhIbTN8A90g",
          fullname: "Wordux987",
          imgUrl: "https://yt3.ggpht.com/PISVNdLu3y4ffUgfD8uCOBiSs57qcyFmPKFW198lhZ1sBtTeTaFIB42HAo9JQoleVBjX_4otLw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 77,
        likedBy: [],
        createdAt: 1601026262000,
        updatedAt: 1739654085260,
        _id: "n_T-z4uJFLw"
      },
      {
        title: "Groove Attack",
        url: "https://www.youtube.com/embed/dQQAlUiIx8A",
        imgUrl: "https://i.ytimg.com/vi/dQQAlUiIx8A/hqdefault.jpg",
        addedBy: {
          _id: "UC1pVU6KCHCNzLhIbTN8A90g",
          fullname: "Wordux987",
          imgUrl: "https://yt3.ggpht.com/PISVNdLu3y4ffUgfD8uCOBiSs57qcyFmPKFW198lhZ1sBtTeTaFIB42HAo9JQoleVBjX_4otLw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 254,
        likedBy: [],
        createdAt: 1601026237000,
        updatedAt: 1739662992376,
        _id: "dQQAlUiIx8A"
      },
      {
        title: "Gravity Waves (Infected Mushroom 2017 Remix)",
        url: "https://www.youtube.com/embed/qG79ur_-Mew",
        imgUrl: "https://i.ytimg.com/vi/qG79ur_-Mew/hqdefault.jpg",
        addedBy: {
          _id: "UC1pVU6KCHCNzLhIbTN8A90g",
          fullname: "Wordux987",
          imgUrl: "https://yt3.ggpht.com/PISVNdLu3y4ffUgfD8uCOBiSs57qcyFmPKFW198lhZ1sBtTeTaFIB42HAo9JQoleVBjX_4otLw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 32,
        likedBy: [],
        createdAt: 1601026296000,
        updatedAt: 1739672326763,
        _id: "qG79ur_-Mew"
      },
      {
        title: "Demons of Pain (Remix)",
        url: "https://www.youtube.com/embed/yDpjd-gWlek",
        imgUrl: "https://i.ytimg.com/vi/yDpjd-gWlek/hqdefault.jpg",
        addedBy: {
          _id: "UC1pVU6KCHCNzLhIbTN8A90g",
          fullname: "Wordux987",
          imgUrl: "https://yt3.ggpht.com/PISVNdLu3y4ffUgfD8uCOBiSs57qcyFmPKFW198lhZ1sBtTeTaFIB42HAo9JQoleVBjX_4otLw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 359,
        likedBy: [],
        createdAt: 1601026216000,
        updatedAt: 1739719808991,
        _id: "yDpjd-gWlek"
      },
      {
        title: "Milosh",
        url: "https://www.youtube.com/embed/r9PeqYpnLhQ",
        imgUrl: "https://i.ytimg.com/vi/r9PeqYpnLhQ/hqdefault.jpg",
        addedBy: {
          _id: "UC1pVU6KCHCNzLhIbTN8A90g",
          fullname: "Wordux987",
          imgUrl: "https://yt3.ggpht.com/PISVNdLu3y4ffUgfD8uCOBiSs57qcyFmPKFW198lhZ1sBtTeTaFIB42HAo9JQoleVBjX_4otLw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 322,
        likedBy: [],
        createdAt: 1601026241000,
        updatedAt: 1739640108522,
        _id: "r9PeqYpnLhQ"
      },
      {
        title: "Nutmeg",
        url: "https://www.youtube.com/embed/NB_Jyx90fz0",
        imgUrl: "https://i.ytimg.com/vi/NB_Jyx90fz0/hqdefault.jpg",
        addedBy: {
          _id: "UC1pVU6KCHCNzLhIbTN8A90g",
          fullname: "Wordux987",
          imgUrl: "https://yt3.ggpht.com/PISVNdLu3y4ffUgfD8uCOBiSs57qcyFmPKFW198lhZ1sBtTeTaFIB42HAo9JQoleVBjX_4otLw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 75,
        likedBy: [],
        createdAt: 1601026194000,
        updatedAt: 1739709102488,
        _id: "NB_Jyx90fz0"
      },
      {
        title: "Liquid Smoke",
        url: "https://www.youtube.com/embed/0mkeVgpBtcg",
        imgUrl: "https://i.ytimg.com/vi/0mkeVgpBtcg/hqdefault.jpg",
        addedBy: {
          _id: "UC1pVU6KCHCNzLhIbTN8A90g",
          fullname: "Wordux987",
          imgUrl: "https://yt3.ggpht.com/PISVNdLu3y4ffUgfD8uCOBiSs57qcyFmPKFW198lhZ1sBtTeTaFIB42HAo9JQoleVBjX_4otLw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 312,
        likedBy: [],
        createdAt: 1601026225000,
        updatedAt: 1739696184747,
        _id: "0mkeVgpBtcg"
      },
      {
        title: "Return to the Sauce (Continuous Mix)",
        url: "https://www.youtube.com/embed/wXk4PL4QIkQ",
        imgUrl: "https://i.ytimg.com/vi/wXk4PL4QIkQ/hqdefault.jpg",
        addedBy: {
          _id: "UC1pVU6KCHCNzLhIbTN8A90g",
          fullname: "Wordux987",
          imgUrl: "https://yt3.ggpht.com/PISVNdLu3y4ffUgfD8uCOBiSs57qcyFmPKFW198lhZ1sBtTeTaFIB42HAo9JQoleVBjX_4otLw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 33,
        likedBy: [],
        createdAt: 1601026465000,
        updatedAt: 1739706485853,
        _id: "wXk4PL4QIkQ"
      }
    ],
    _id: "PLr3-obTIXUD9_03xu4uysEK0xENA3nzbw",
    name: "Infected Mushroom - Topic",
    createdBy: {
      _id: "UCOqPalU27ztRNMrL2PD-YAA",
      fullname: "Infected Mushroom - Topic",
      imgUrl: "https://yt3.ggpht.com/ytc/AIdro_klgVFdLfGKOm0StvnZDCBd8346aR8cHtkmNm9IaTfsNsc=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1373368118000,
      updatedAt: 1739723340773
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Guardian",
        url: "https://www.youtube.com/embed/MrxG9YoyTJ4",
        imgUrl: "https://i.ytimg.com/vi/MrxG9YoyTJ4/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 391,
        likedBy: [],
        createdAt: 1736572342000,
        updatedAt: 1739707513015,
        _id: "MrxG9YoyTJ4"
      },
      {
        title: "A Filthy Addiction",
        url: "https://www.youtube.com/embed/juMZxg4dnlk",
        imgUrl: "https://i.ytimg.com/vi/juMZxg4dnlk/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 208,
        likedBy: [],
        createdAt: 1736572342000,
        updatedAt: 1739696446159,
        _id: "juMZxg4dnlk"
      },
      {
        title: "The Sound, The Flood, The Hour",
        url: "https://www.youtube.com/embed/1t8ozaXDw5o",
        imgUrl: "https://i.ytimg.com/vi/1t8ozaXDw5o/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 71,
        likedBy: [],
        createdAt: 1736572342000,
        updatedAt: 1739640172693,
        _id: "1t8ozaXDw5o"
      },
      {
        title: "In the Eyes of God",
        url: "https://www.youtube.com/embed/DhvopDMD7ro",
        imgUrl: "https://i.ytimg.com/vi/DhvopDMD7ro/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 228,
        likedBy: [],
        createdAt: 1736572342000,
        updatedAt: 1739684918497,
        _id: "DhvopDMD7ro"
      },
      {
        title: "The Serpents Tongue",
        url: "https://www.youtube.com/embed/bWalPbxKUGE",
        imgUrl: "https://i.ytimg.com/vi/bWalPbxKUGE/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 37,
        likedBy: [],
        createdAt: 1736572342000,
        updatedAt: 1739684639645,
        _id: "bWalPbxKUGE"
      },
      {
        title: "Revelations",
        url: "https://www.youtube.com/embed/au88iN4Fzl0",
        imgUrl: "https://i.ytimg.com/vi/au88iN4Fzl0/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 77,
        likedBy: [],
        createdAt: 1736572342000,
        updatedAt: 1739697621395,
        _id: "au88iN4Fzl0"
      },
      {
        title: "Desecrated",
        url: "https://www.youtube.com/embed/YMQ8XTuR2bQ",
        imgUrl: "https://i.ytimg.com/vi/YMQ8XTuR2bQ/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 227,
        likedBy: [],
        createdAt: 1736572342000,
        updatedAt: 1739681836352,
        _id: "YMQ8XTuR2bQ"
      },
      {
        title: "The Final Words",
        url: "https://www.youtube.com/embed/PdajxOaX29A",
        imgUrl: "https://i.ytimg.com/vi/PdajxOaX29A/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 229,
        likedBy: [],
        createdAt: 1736572342000,
        updatedAt: 1739637810478,
        _id: "PdajxOaX29A"
      },
      {
        title: "The Architect",
        url: "https://www.youtube.com/embed/D5RCnXlGSQc",
        imgUrl: "https://i.ytimg.com/vi/D5RCnXlGSQc/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 71,
        likedBy: [],
        createdAt: 1736572342000,
        updatedAt: 1739691618609,
        _id: "D5RCnXlGSQc"
      },
      {
        title: "Outro",
        url: "https://www.youtube.com/embed/Ziig86v8WPg",
        imgUrl: "https://i.ytimg.com/vi/Ziig86v8WPg/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 101,
        likedBy: [],
        createdAt: 1736572342000,
        updatedAt: 1739671536194,
        _id: "Ziig86v8WPg"
      }
    ],
    _id: "OLAK5uy_m9JPE7DHRAVCvXwrWE6TJvdqZ6XaMOb8A",
    name: "The Crimson Armada - Topic",
    createdBy: {
      _id: "UCVvjB7d35cyYtjfoEVDBAIA",
      fullname: "The Crimson Armada - Topic",
      imgUrl: "https://yt3.ggpht.com/UEQhsS7slCIXDl5Hf_0RN4l3G93Z_5P3OtX0ACi1pIVuKqsQ7KLVQO4KWGKzJsSUtuxrLFsTfw=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1374469543000,
      updatedAt: 1739723359531
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Backstreet Boys - I Want It That Way Reimagined (Official Audio Video)",
        url: "https://www.youtube.com/embed/cjCgsIx7kDI",
        imgUrl: "https://i.ytimg.com/vi/cjCgsIx7kDI/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 223,
        likedBy: [],
        createdAt: 1736506342000,
        updatedAt: 1739647377451,
        _id: "cjCgsIx7kDI"
      }
    ],
    _id: "OLAK5uy_mBK9b8208XhQ24Ib1D05ZYGocXR8z93Nw",
    name: "Backstreet Boys",
    createdBy: {
      _id: "UC1OR2YNQLZJYFdQjFrPWvVw",
      fullname: "Backstreet Boys",
      imgUrl: "https://yt3.ggpht.com/4896aHISbT7_BK9A2m1esPVI9T2mo9MdbNy0kKWsHA8XWgWqNC4fbzm1BW8n1NYZueiC0EFCTg=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1235509169000,
      updatedAt: 1739723369533
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Horrible Theme",
        url: "https://www.youtube.com/embed/Gp_hlaXcniY",
        imgUrl: "https://i.ytimg.com/vi/Gp_hlaXcniY/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 250,
        likedBy: [],
        createdAt: 1736435180000,
        updatedAt: 1739661774074,
        _id: "Gp_hlaXcniY"
      },
      {
        title: "My Freeze Ray",
        url: "https://www.youtube.com/embed/dlONS745QPo",
        imgUrl: "https://i.ytimg.com/vi/dlONS745QPo/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 124,
        likedBy: [],
        createdAt: 1736435180000,
        updatedAt: 1739668436891,
        _id: "dlONS745QPo"
      },
      {
        title: "Bad Horse Chorus",
        url: "https://www.youtube.com/embed/F7GDaLijr1w",
        imgUrl: "https://i.ytimg.com/vi/F7GDaLijr1w/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 36,
        likedBy: [],
        createdAt: 1736435180000,
        updatedAt: 1739672119751,
        _id: "F7GDaLijr1w"
      },
      {
        title: "Caring Hands",
        url: "https://www.youtube.com/embed/hdDUXMFJaMM",
        imgUrl: "https://i.ytimg.com/vi/hdDUXMFJaMM/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 102,
        likedBy: [],
        createdAt: 1736435180000,
        updatedAt: 1739688769347,
        _id: "hdDUXMFJaMM"
      },
      {
        title: "A Man's Gotta Do",
        url: "https://www.youtube.com/embed/u5-XxkQn4Lg",
        imgUrl: "https://i.ytimg.com/vi/u5-XxkQn4Lg/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 87,
        likedBy: [],
        createdAt: 1736435180000,
        updatedAt: 1739722042642,
        _id: "u5-XxkQn4Lg"
      },
      {
        title: "My Eyes",
        url: "https://www.youtube.com/embed/XsUGxcvn8yw",
        imgUrl: "https://i.ytimg.com/vi/XsUGxcvn8yw/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 30,
        likedBy: [],
        createdAt: 1736435180000,
        updatedAt: 1739720951157,
        _id: "XsUGxcvn8yw"
      },
      {
        title: "Bad Horse Chorus (Reprise)",
        url: "https://www.youtube.com/embed/2V3bNfsLhO8",
        imgUrl: "https://i.ytimg.com/vi/2V3bNfsLhO8/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 91,
        likedBy: [],
        createdAt: 1736435180000,
        updatedAt: 1739718371425,
        _id: "2V3bNfsLhO8"
      },
      {
        title: "Penny's Song",
        url: "https://www.youtube.com/embed/cLqIYC8C6v0",
        imgUrl: "https://i.ytimg.com/vi/cLqIYC8C6v0/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 109,
        likedBy: [],
        createdAt: 1736435180000,
        updatedAt: 1739638742532,
        _id: "cLqIYC8C6v0"
      },
      {
        title: "Brand New Day",
        url: "https://www.youtube.com/embed/hjK387DVX7I",
        imgUrl: "https://i.ytimg.com/vi/hjK387DVX7I/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 155,
        likedBy: [],
        createdAt: 1736435180000,
        updatedAt: 1739707387510,
        _id: "hjK387DVX7I"
      },
      {
        title: "So They Say",
        url: "https://www.youtube.com/embed/DcMdvILOcVY",
        imgUrl: "https://i.ytimg.com/vi/DcMdvILOcVY/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 216,
        likedBy: [],
        createdAt: 1736435180000,
        updatedAt: 1739686465000,
        _id: "DcMdvILOcVY"
      },
      {
        title: "Everyone's a Hero",
        url: "https://www.youtube.com/embed/idnZa46FbxU",
        imgUrl: "https://i.ytimg.com/vi/idnZa46FbxU/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 74,
        likedBy: [],
        createdAt: 1736435180000,
        updatedAt: 1739719842495,
        _id: "idnZa46FbxU"
      },
      {
        title: "Slipping",
        url: "https://www.youtube.com/embed/emTppaeqt9U",
        imgUrl: "https://i.ytimg.com/vi/emTppaeqt9U/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 370,
        likedBy: [],
        createdAt: 1736435180000,
        updatedAt: 1739680090160,
        _id: "emTppaeqt9U"
      },
      {
        title: "Everything You Ever",
        url: "https://www.youtube.com/embed/4Pk5LSZ9EyI",
        imgUrl: "https://i.ytimg.com/vi/4Pk5LSZ9EyI/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 211,
        likedBy: [],
        createdAt: 1736435180000,
        updatedAt: 1739720311064,
        _id: "4Pk5LSZ9EyI"
      },
      {
        title: "Horrible Credits",
        url: "https://www.youtube.com/embed/K8QFQMuKhZ4",
        imgUrl: "https://i.ytimg.com/vi/K8QFQMuKhZ4/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 194,
        likedBy: [],
        createdAt: 1736435180000,
        updatedAt: 1739674782614,
        _id: "K8QFQMuKhZ4"
      }
    ],
    _id: "OLAK5uy_kEnWW2cdkpkHEUL9tDdHb4re7oS9PbFs8",
    name: "Instrumental - Topic",
    createdBy: {
      _id: "UC6CbLoiIRTPnV35P-BLx9YA",
      fullname: "Instrumental - Topic",
      imgUrl: "https://yt3.ggpht.com/g9PubQUN5aqFDnez29AT-159s7SeSdSRJiR8XEPS_0yHM1x5dAc1LLeacN3jPtiO9NmQQbYZBg=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1534453285000,
      updatedAt: 1739723395226
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Metallica - Enter Sandman",
        url: "https://www.youtube.com/embed/DtJzRErAJ3Q",
        imgUrl: "https://i.ytimg.com/vi/DtJzRErAJ3Q/hqdefault.jpg",
        addedBy: {
          _id: "UCkEM-3qDgI7F8SiBfo75F6w",
          fullname: "camille martin",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mIg5mSe3SIJDH8clqPt9FRlqJPQT9pIhWlP88goYCgIC8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 85,
        likedBy: [],
        createdAt: 1386013186000,
        updatedAt: 1739708018331,
        _id: "DtJzRErAJ3Q"
      },
      {
        title: "Metallica - Sad But True",
        url: "https://www.youtube.com/embed/fctnSdDjxiY",
        imgUrl: "https://i.ytimg.com/vi/fctnSdDjxiY/hqdefault.jpg",
        addedBy: {
          _id: "UCkEM-3qDgI7F8SiBfo75F6w",
          fullname: "camille martin",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mIg5mSe3SIJDH8clqPt9FRlqJPQT9pIhWlP88goYCgIC8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 307,
        likedBy: [],
        createdAt: 1386013186000,
        updatedAt: 1739665960307,
        _id: "fctnSdDjxiY"
      },
      {
        title: "Metallica - Holier Than Thou",
        url: "https://www.youtube.com/embed/neHql1zl9wQ",
        imgUrl: "https://i.ytimg.com/vi/neHql1zl9wQ/hqdefault.jpg",
        addedBy: {
          _id: "UCkEM-3qDgI7F8SiBfo75F6w",
          fullname: "camille martin",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mIg5mSe3SIJDH8clqPt9FRlqJPQT9pIhWlP88goYCgIC8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 143,
        likedBy: [],
        createdAt: 1386013186000,
        updatedAt: 1739695355784,
        _id: "neHql1zl9wQ"
      },
      {
        title: "Metallica - The Unforgiven 1",
        url: "https://www.youtube.com/embed/Axw30njaMlY",
        imgUrl: "https://i.ytimg.com/vi/Axw30njaMlY/hqdefault.jpg",
        addedBy: {
          _id: "UCkEM-3qDgI7F8SiBfo75F6w",
          fullname: "camille martin",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mIg5mSe3SIJDH8clqPt9FRlqJPQT9pIhWlP88goYCgIC8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 92,
        likedBy: [],
        createdAt: 1386013186000,
        updatedAt: 1739650916845,
        _id: "Axw30njaMlY"
      },
      {
        title: "Metallica - Wherever I May Roam",
        url: "https://www.youtube.com/embed/CSzbZ69Iqx8",
        imgUrl: "https://i.ytimg.com/vi/CSzbZ69Iqx8/hqdefault.jpg",
        addedBy: {
          _id: "UCkEM-3qDgI7F8SiBfo75F6w",
          fullname: "camille martin",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mIg5mSe3SIJDH8clqPt9FRlqJPQT9pIhWlP88goYCgIC8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 304,
        likedBy: [],
        createdAt: 1386013186000,
        updatedAt: 1739702081358,
        _id: "CSzbZ69Iqx8"
      },
      {
        title: "Metallica - Don't Tread On Me",
        url: "https://www.youtube.com/embed/gD3Kg013xnU",
        imgUrl: "https://i.ytimg.com/vi/gD3Kg013xnU/hqdefault.jpg",
        addedBy: {
          _id: "UCkEM-3qDgI7F8SiBfo75F6w",
          fullname: "camille martin",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mIg5mSe3SIJDH8clqPt9FRlqJPQT9pIhWlP88goYCgIC8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 161,
        likedBy: [],
        createdAt: 1386013186000,
        updatedAt: 1739711928932,
        _id: "gD3Kg013xnU"
      },
      {
        title: "Metallica - Through The Never",
        url: "https://www.youtube.com/embed/HFug_4hOP9o",
        imgUrl: "https://i.ytimg.com/vi/HFug_4hOP9o/hqdefault.jpg",
        addedBy: {
          _id: "UCkEM-3qDgI7F8SiBfo75F6w",
          fullname: "camille martin",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mIg5mSe3SIJDH8clqPt9FRlqJPQT9pIhWlP88goYCgIC8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 117,
        likedBy: [],
        createdAt: 1386013186000,
        updatedAt: 1739683802208,
        _id: "HFug_4hOP9o"
      },
      {
        title: "Metallica - Nothing Else Matters",
        url: "https://www.youtube.com/embed/h7NwuHN4ZXs",
        imgUrl: "https://i.ytimg.com/vi/h7NwuHN4ZXs/hqdefault.jpg",
        addedBy: {
          _id: "UCkEM-3qDgI7F8SiBfo75F6w",
          fullname: "camille martin",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mIg5mSe3SIJDH8clqPt9FRlqJPQT9pIhWlP88goYCgIC8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 382,
        likedBy: [],
        createdAt: 1386013186000,
        updatedAt: 1739658930464,
        _id: "h7NwuHN4ZXs"
      },
      {
        title: "Metallica - Of Wolf And Man",
        url: "https://www.youtube.com/embed/OiyaZ2zogSQ",
        imgUrl: "https://i.ytimg.com/vi/OiyaZ2zogSQ/hqdefault.jpg",
        addedBy: {
          _id: "UCkEM-3qDgI7F8SiBfo75F6w",
          fullname: "camille martin",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mIg5mSe3SIJDH8clqPt9FRlqJPQT9pIhWlP88goYCgIC8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 219,
        likedBy: [],
        createdAt: 1386013186000,
        updatedAt: 1739639347226,
        _id: "OiyaZ2zogSQ"
      },
      {
        title: "Metallica - The God That Failed",
        url: "https://www.youtube.com/embed/33lZktix0_8",
        imgUrl: "https://i.ytimg.com/vi/33lZktix0_8/hqdefault.jpg",
        addedBy: {
          _id: "UCkEM-3qDgI7F8SiBfo75F6w",
          fullname: "camille martin",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mIg5mSe3SIJDH8clqPt9FRlqJPQT9pIhWlP88goYCgIC8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 320,
        likedBy: [],
        createdAt: 1386013186000,
        updatedAt: 1739650061724,
        _id: "33lZktix0_8"
      },
      {
        title: "Metallica - My Friend Of Misery",
        url: "https://www.youtube.com/embed/9fvIkOn1FLw",
        imgUrl: "https://i.ytimg.com/vi/9fvIkOn1FLw/hqdefault.jpg",
        addedBy: {
          _id: "UCkEM-3qDgI7F8SiBfo75F6w",
          fullname: "camille martin",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mIg5mSe3SIJDH8clqPt9FRlqJPQT9pIhWlP88goYCgIC8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 358,
        likedBy: [],
        createdAt: 1386013186000,
        updatedAt: 1739647346857,
        _id: "9fvIkOn1FLw"
      },
      {
        title: "Metallica - The Struggle Within",
        url: "https://www.youtube.com/embed/5JUmlDKrwpM",
        imgUrl: "https://i.ytimg.com/vi/5JUmlDKrwpM/hqdefault.jpg",
        addedBy: {
          _id: "UCkEM-3qDgI7F8SiBfo75F6w",
          fullname: "camille martin",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mIg5mSe3SIJDH8clqPt9FRlqJPQT9pIhWlP88goYCgIC8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 115,
        likedBy: [],
        createdAt: 1386013186000,
        updatedAt: 1739693102703,
        _id: "5JUmlDKrwpM"
      },
      {
        title: "Metallica Live in seoul 2006 full concert HD",
        url: "https://www.youtube.com/embed/wy7qaJaUaxw",
        imgUrl: "https://i.ytimg.com/vi/wy7qaJaUaxw/hqdefault.jpg",
        addedBy: {
          _id: "UCkEM-3qDgI7F8SiBfo75F6w",
          fullname: "camille martin",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mIg5mSe3SIJDH8clqPt9FRlqJPQT9pIhWlP88goYCgIC8=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 191,
        likedBy: [],
        createdAt: 1401042246000,
        updatedAt: 1739720479818,
        _id: "wy7qaJaUaxw"
      }
    ],
    _id: "PLokAorcvoBv9LAxeK6xwqn3rSEEMhGfGr",
    name: "camille martin",
    createdBy: {
      _id: "UCkEM-3qDgI7F8SiBfo75F6w",
      fullname: "camille martin",
      imgUrl: "https://yt3.ggpht.com/ytc/AIdro_mIg5mSe3SIJDH8clqPt9FRlqJPQT9pIhWlP88goYCgIC8=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1379155903000,
      updatedAt: 1739723470333
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Megadeth - Skin O' My Teeth",
        url: "https://www.youtube.com/embed/-WGcyRcqx2A",
        imgUrl: "https://i.ytimg.com/vi/-WGcyRcqx2A/hqdefault.jpg",
        addedBy: {
          _id: "UCNi960UsNDRbnTQgKZgTTXg",
          fullname: "Kelvin Monteza",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nF8OlP_UxrUW5GA9BIRmr2S4hSIE8FoFYgFnmijcjpHWw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 280,
        likedBy: [],
        createdAt: 1360561327000,
        updatedAt: 1739706549203,
        _id: "-WGcyRcqx2A"
      },
      {
        title: "Megadeth - Symphony of Destruction",
        url: "https://www.youtube.com/embed/jGwKzoSzHk0",
        imgUrl: "https://i.ytimg.com/vi/jGwKzoSzHk0/hqdefault.jpg",
        addedBy: {
          _id: "UCNi960UsNDRbnTQgKZgTTXg",
          fullname: "Kelvin Monteza",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nF8OlP_UxrUW5GA9BIRmr2S4hSIE8FoFYgFnmijcjpHWw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 254,
        likedBy: [],
        createdAt: 1360561327000,
        updatedAt: 1739652867100,
        _id: "jGwKzoSzHk0"
      },
      {
        title: "Megadeth - Architecture of Aggression",
        url: "https://www.youtube.com/embed/S5LlTGjMX8s",
        imgUrl: "https://i.ytimg.com/vi/S5LlTGjMX8s/hqdefault.jpg",
        addedBy: {
          _id: "UCNi960UsNDRbnTQgKZgTTXg",
          fullname: "Kelvin Monteza",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nF8OlP_UxrUW5GA9BIRmr2S4hSIE8FoFYgFnmijcjpHWw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 71,
        likedBy: [],
        createdAt: 1360561327000,
        updatedAt: 1739691052770,
        _id: "S5LlTGjMX8s"
      },
      {
        title: "Megadeth - Foreclosure of A Dream",
        url: "https://www.youtube.com/embed/GIAu9xQp-zo",
        imgUrl: "https://i.ytimg.com/vi/GIAu9xQp-zo/hqdefault.jpg",
        addedBy: {
          _id: "UCNi960UsNDRbnTQgKZgTTXg",
          fullname: "Kelvin Monteza",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nF8OlP_UxrUW5GA9BIRmr2S4hSIE8FoFYgFnmijcjpHWw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 246,
        likedBy: [],
        createdAt: 1360561327000,
        updatedAt: 1739706810132,
        _id: "GIAu9xQp-zo"
      },
      {
        title: "Megadeth - Sweating Bullets",
        url: "https://www.youtube.com/embed/uj5IRdA9x0w",
        imgUrl: "https://i.ytimg.com/vi/uj5IRdA9x0w/hqdefault.jpg",
        addedBy: {
          _id: "UCNi960UsNDRbnTQgKZgTTXg",
          fullname: "Kelvin Monteza",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nF8OlP_UxrUW5GA9BIRmr2S4hSIE8FoFYgFnmijcjpHWw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 374,
        likedBy: [],
        createdAt: 1360561327000,
        updatedAt: 1739674011596,
        _id: "uj5IRdA9x0w"
      },
      {
        title: "Megadeth - This Was My Life",
        url: "https://www.youtube.com/embed/DSCkkTqay_4",
        imgUrl: "https://i.ytimg.com/vi/DSCkkTqay_4/hqdefault.jpg",
        addedBy: {
          _id: "UCNi960UsNDRbnTQgKZgTTXg",
          fullname: "Kelvin Monteza",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nF8OlP_UxrUW5GA9BIRmr2S4hSIE8FoFYgFnmijcjpHWw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 396,
        likedBy: [],
        createdAt: 1360561327000,
        updatedAt: 1739692493161,
        _id: "DSCkkTqay_4"
      },
      {
        title: "Megadeth - Countdown To Extinction",
        url: "https://www.youtube.com/embed/-hk1LzKELoo",
        imgUrl: "https://i.ytimg.com/vi/-hk1LzKELoo/hqdefault.jpg",
        addedBy: {
          _id: "UCNi960UsNDRbnTQgKZgTTXg",
          fullname: "Kelvin Monteza",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nF8OlP_UxrUW5GA9BIRmr2S4hSIE8FoFYgFnmijcjpHWw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 292,
        likedBy: [],
        createdAt: 1360561327000,
        updatedAt: 1739651338542,
        _id: "-hk1LzKELoo"
      },
      {
        title: "Megadeth - High Speed Dirt",
        url: "https://www.youtube.com/embed/yeaeqIpopvI",
        imgUrl: "https://i.ytimg.com/vi/yeaeqIpopvI/hqdefault.jpg",
        addedBy: {
          _id: "UCNi960UsNDRbnTQgKZgTTXg",
          fullname: "Kelvin Monteza",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nF8OlP_UxrUW5GA9BIRmr2S4hSIE8FoFYgFnmijcjpHWw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 273,
        likedBy: [],
        createdAt: 1360561327000,
        updatedAt: 1739659280042,
        _id: "yeaeqIpopvI"
      },
      {
        title: "Megadeth - Psychotron",
        url: "https://www.youtube.com/embed/fpPU1G4W7tk",
        imgUrl: "https://i.ytimg.com/vi/fpPU1G4W7tk/hqdefault.jpg",
        addedBy: {
          _id: "UCNi960UsNDRbnTQgKZgTTXg",
          fullname: "Kelvin Monteza",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nF8OlP_UxrUW5GA9BIRmr2S4hSIE8FoFYgFnmijcjpHWw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 269,
        likedBy: [],
        createdAt: 1360561327000,
        updatedAt: 1739715309262,
        _id: "fpPU1G4W7tk"
      },
      {
        title: "Megadeth - Captive Honour",
        url: "https://www.youtube.com/embed/VACP0wbBoXw",
        imgUrl: "https://i.ytimg.com/vi/VACP0wbBoXw/hqdefault.jpg",
        addedBy: {
          _id: "UCNi960UsNDRbnTQgKZgTTXg",
          fullname: "Kelvin Monteza",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nF8OlP_UxrUW5GA9BIRmr2S4hSIE8FoFYgFnmijcjpHWw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 130,
        likedBy: [],
        createdAt: 1360561327000,
        updatedAt: 1739655830785,
        _id: "VACP0wbBoXw"
      },
      {
        title: "Megadeth - Ashes In Your Mouth",
        url: "https://www.youtube.com/embed/T3HLQj8bHAc",
        imgUrl: "https://i.ytimg.com/vi/T3HLQj8bHAc/hqdefault.jpg",
        addedBy: {
          _id: "UCNi960UsNDRbnTQgKZgTTXg",
          fullname: "Kelvin Monteza",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nF8OlP_UxrUW5GA9BIRmr2S4hSIE8FoFYgFnmijcjpHWw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 226,
        likedBy: [],
        createdAt: 1360561327000,
        updatedAt: 1739658779750,
        _id: "T3HLQj8bHAc"
      }
    ],
    _id: "PLLHyHi7NUwSakx0ONnipN-SoTRWxztStO",
    name: "Kelvin Monteza",
    createdBy: {
      _id: "UCNi960UsNDRbnTQgKZgTTXg",
      fullname: "Kelvin Monteza",
      imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nF8OlP_UxrUW5GA9BIRmr2S4hSIE8FoFYgFnmijcjpHWw=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1344103031000,
      updatedAt: 1739723516463
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    _id: "PLQjNsI6Dpg11c9dywap9noqJWp74dkxNc",
    name: "Led Zeppelin - Topic",
    createdBy: {
      _id: "UCYtap7ujIPaxTS2iCDoMi3g",
      fullname: "Led Zeppelin - Topic",
      imgUrl: "https://yt3.ggpht.com/ytc/AIdro_l1c-TdVA-NOeZENu4TclnA7wBU_G1AVLsBSEa9DoUcrE8=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1369145698000,
      updatedAt: 1739723694281
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Green Day - American Idiot - [HQ]",
        url: "https://www.youtube.com/embed/h6Z5N0Z6zH0",
        imgUrl: "https://i.ytimg.com/vi/h6Z5N0Z6zH0/hqdefault.jpg",
        addedBy: {
          _id: "UCgYYqxxjZiT3R5SqLXCaIiQ",
          fullname: "XxExtremeSamX",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nqsepypYfKlX0tnYgtb6gxIwtleDWkZm4bw9Fynj4LGys=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 168,
        likedBy: [],
        createdAt: 1580484903000,
        updatedAt: 1739686718115,
        _id: "h6Z5N0Z6zH0"
      },
      {
        title: "Green Day - Jesus Of Suburbia - [HQ]",
        url: "https://www.youtube.com/embed/djelUbjBlkA",
        imgUrl: "https://i.ytimg.com/vi/djelUbjBlkA/hqdefault.jpg",
        addedBy: {
          _id: "UCgYYqxxjZiT3R5SqLXCaIiQ",
          fullname: "XxExtremeSamX",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nqsepypYfKlX0tnYgtb6gxIwtleDWkZm4bw9Fynj4LGys=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 196,
        likedBy: [],
        createdAt: 1580484910000,
        updatedAt: 1739681945899,
        _id: "djelUbjBlkA"
      },
      {
        title: "Green Day - Holiday (Audio)",
        url: "https://www.youtube.com/embed/l2hA8g1cNvQ",
        imgUrl: "https://i.ytimg.com/vi/l2hA8g1cNvQ/hqdefault.jpg",
        addedBy: {
          _id: "UCgYYqxxjZiT3R5SqLXCaIiQ",
          fullname: "XxExtremeSamX",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nqsepypYfKlX0tnYgtb6gxIwtleDWkZm4bw9Fynj4LGys=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 39,
        likedBy: [],
        createdAt: 1580484984000,
        updatedAt: 1739705549419,
        _id: "l2hA8g1cNvQ"
      },
      {
        title: "Green Day - Boulevard of Broken Dreams (Audio)",
        url: "https://www.youtube.com/embed/Dx1SPxGn-iU",
        imgUrl: "https://i.ytimg.com/vi/Dx1SPxGn-iU/hqdefault.jpg",
        addedBy: {
          _id: "UCgYYqxxjZiT3R5SqLXCaIiQ",
          fullname: "XxExtremeSamX",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nqsepypYfKlX0tnYgtb6gxIwtleDWkZm4bw9Fynj4LGys=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 109,
        likedBy: [],
        createdAt: 1580484990000,
        updatedAt: 1739704905210,
        _id: "Dx1SPxGn-iU"
      },
      {
        title: "Green Day - Are We The Waiting - [HQ]",
        url: "https://www.youtube.com/embed/gvTUFTKCbbA",
        imgUrl: "https://i.ytimg.com/vi/gvTUFTKCbbA/hqdefault.jpg",
        addedBy: {
          _id: "UCgYYqxxjZiT3R5SqLXCaIiQ",
          fullname: "XxExtremeSamX",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nqsepypYfKlX0tnYgtb6gxIwtleDWkZm4bw9Fynj4LGys=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 202,
        likedBy: [],
        createdAt: 1580484915000,
        updatedAt: 1739664935345,
        _id: "gvTUFTKCbbA"
      },
      {
        title: "Green Day - St. Jimmy - [HQ]",
        url: "https://www.youtube.com/embed/y_OTBXO7Q6Y",
        imgUrl: "https://i.ytimg.com/vi/y_OTBXO7Q6Y/hqdefault.jpg",
        addedBy: {
          _id: "UCgYYqxxjZiT3R5SqLXCaIiQ",
          fullname: "XxExtremeSamX",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nqsepypYfKlX0tnYgtb6gxIwtleDWkZm4bw9Fynj4LGys=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 253,
        likedBy: [],
        createdAt: 1580484919000,
        updatedAt: 1739647141286,
        _id: "y_OTBXO7Q6Y"
      },
      {
        title: "Green Day - Give Me Novacaine - [HQ]",
        url: "https://www.youtube.com/embed/0QGinTmpvWE",
        imgUrl: "https://i.ytimg.com/vi/0QGinTmpvWE/hqdefault.jpg",
        addedBy: {
          _id: "UCgYYqxxjZiT3R5SqLXCaIiQ",
          fullname: "XxExtremeSamX",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nqsepypYfKlX0tnYgtb6gxIwtleDWkZm4bw9Fynj4LGys=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 325,
        likedBy: [],
        createdAt: 1580484924000,
        updatedAt: 1739680490806,
        _id: "0QGinTmpvWE"
      },
      {
        title: "Green Day - She's A Rebel - [HQ]",
        url: "https://www.youtube.com/embed/eOv5fF7maFY",
        imgUrl: "https://i.ytimg.com/vi/eOv5fF7maFY/hqdefault.jpg",
        addedBy: {
          _id: "UCgYYqxxjZiT3R5SqLXCaIiQ",
          fullname: "XxExtremeSamX",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nqsepypYfKlX0tnYgtb6gxIwtleDWkZm4bw9Fynj4LGys=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 165,
        likedBy: [],
        createdAt: 1580484930000,
        updatedAt: 1739648362474,
        _id: "eOv5fF7maFY"
      },
      {
        title: "Green Day - Extraordinary Girl - [HQ]",
        url: "https://www.youtube.com/embed/hctq2W1z7Kc",
        imgUrl: "https://i.ytimg.com/vi/hctq2W1z7Kc/hqdefault.jpg",
        addedBy: {
          _id: "UCgYYqxxjZiT3R5SqLXCaIiQ",
          fullname: "XxExtremeSamX",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nqsepypYfKlX0tnYgtb6gxIwtleDWkZm4bw9Fynj4LGys=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 372,
        likedBy: [],
        createdAt: 1580484935000,
        updatedAt: 1739662111458,
        _id: "hctq2W1z7Kc"
      },
      {
        title: "Green Day - Letterbomb - [HQ]",
        url: "https://www.youtube.com/embed/1fi-MLyBfB0",
        imgUrl: "https://i.ytimg.com/vi/1fi-MLyBfB0/hqdefault.jpg",
        addedBy: {
          _id: "UCgYYqxxjZiT3R5SqLXCaIiQ",
          fullname: "XxExtremeSamX",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nqsepypYfKlX0tnYgtb6gxIwtleDWkZm4bw9Fynj4LGys=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 171,
        likedBy: [],
        createdAt: 1580484940000,
        updatedAt: 1739672244096,
        _id: "1fi-MLyBfB0"
      },
      {
        title: "Green Day - Wake Me Up When September Ends - [HQ]",
        url: "https://www.youtube.com/embed/rdpBZ5_b48g",
        imgUrl: "https://i.ytimg.com/vi/rdpBZ5_b48g/hqdefault.jpg",
        addedBy: {
          _id: "UCgYYqxxjZiT3R5SqLXCaIiQ",
          fullname: "XxExtremeSamX",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nqsepypYfKlX0tnYgtb6gxIwtleDWkZm4bw9Fynj4LGys=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 276,
        likedBy: [],
        createdAt: 1580484946000,
        updatedAt: 1739678583274,
        _id: "rdpBZ5_b48g"
      },
      {
        title: "Green Day - Homecoming - [HQ]",
        url: "https://www.youtube.com/embed/UDuwLYqOO9s",
        imgUrl: "https://i.ytimg.com/vi/UDuwLYqOO9s/hqdefault.jpg",
        addedBy: {
          _id: "UCgYYqxxjZiT3R5SqLXCaIiQ",
          fullname: "XxExtremeSamX",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nqsepypYfKlX0tnYgtb6gxIwtleDWkZm4bw9Fynj4LGys=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 148,
        likedBy: [],
        createdAt: 1580484950000,
        updatedAt: 1739646340354,
        _id: "UDuwLYqOO9s"
      },
      {
        title: "Green Day - Whatsername - [HQ]",
        url: "https://www.youtube.com/embed/XJdYn3VyAkQ",
        imgUrl: "https://i.ytimg.com/vi/XJdYn3VyAkQ/hqdefault.jpg",
        addedBy: {
          _id: "UCgYYqxxjZiT3R5SqLXCaIiQ",
          fullname: "XxExtremeSamX",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nqsepypYfKlX0tnYgtb6gxIwtleDWkZm4bw9Fynj4LGys=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 170,
        likedBy: [],
        createdAt: 1580484955000,
        updatedAt: 1739695924579,
        _id: "XJdYn3VyAkQ"
      },
      {
        title: "Too Much Too Soon",
        url: "https://www.youtube.com/embed/PxFi5ta6g7Y",
        imgUrl: "https://i.ytimg.com/vi/PxFi5ta6g7Y/hqdefault.jpg",
        addedBy: {
          _id: "UCgYYqxxjZiT3R5SqLXCaIiQ",
          fullname: "XxExtremeSamX",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nqsepypYfKlX0tnYgtb6gxIwtleDWkZm4bw9Fynj4LGys=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 133,
        likedBy: [],
        createdAt: 1580485000000,
        updatedAt: 1739714415761,
        _id: "PxFi5ta6g7Y"
      },
      {
        title: "Shoplifter",
        url: "https://www.youtube.com/embed/krBTBV58je8",
        imgUrl: "https://i.ytimg.com/vi/krBTBV58je8/hqdefault.jpg",
        addedBy: {
          _id: "UCgYYqxxjZiT3R5SqLXCaIiQ",
          fullname: "XxExtremeSamX",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nqsepypYfKlX0tnYgtb6gxIwtleDWkZm4bw9Fynj4LGys=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 183,
        likedBy: [],
        createdAt: 1580485005000,
        updatedAt: 1739703320148,
        _id: "krBTBV58je8"
      },
      {
        title: "Governator",
        url: "https://www.youtube.com/embed/vmx72AFsJQ0",
        imgUrl: "https://i.ytimg.com/vi/vmx72AFsJQ0/hqdefault.jpg",
        addedBy: {
          _id: "UCgYYqxxjZiT3R5SqLXCaIiQ",
          fullname: "XxExtremeSamX",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nqsepypYfKlX0tnYgtb6gxIwtleDWkZm4bw9Fynj4LGys=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 265,
        likedBy: [],
        createdAt: 1580485010000,
        updatedAt: 1739702270408,
        _id: "vmx72AFsJQ0"
      },
      {
        title: "Green Day - Favorite Son - [HQ]",
        url: "https://www.youtube.com/embed/w09kT1n0J18",
        imgUrl: "https://i.ytimg.com/vi/w09kT1n0J18/hqdefault.jpg",
        addedBy: {
          _id: "UCgYYqxxjZiT3R5SqLXCaIiQ",
          fullname: "XxExtremeSamX",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nqsepypYfKlX0tnYgtb6gxIwtleDWkZm4bw9Fynj4LGys=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 94,
        likedBy: [],
        createdAt: 1580484959000,
        updatedAt: 1739701971248,
        _id: "w09kT1n0J18"
      }
    ],
    _id: "PLXjISBGUSATW6Tk78Sd6ANRIOqKZ5EYe3",
    name: "BunczucznyKKS",
    createdBy: {
      _id: "UC6q94iWv9iXn4PD-IGPlqvw",
      fullname: "BunczucznyKKS",
      imgUrl: "https://yt3.ggpht.com/ytc/AIdro_ljNMhLN2PriSpIX89LQ0TEmKJCar0ILXQrbRSx6mHUpw=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1215568132000,
      updatedAt: 1739723911920
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Still Waiting",
        url: "https://www.youtube.com/embed/Lz7kvJdwPOY",
        imgUrl: "https://i.ytimg.com/vi/Lz7kvJdwPOY/hqdefault.jpg",
        addedBy: {
          _id: "UCmzLbgy9bHYbBjz9rQ1YfRw",
          fullname: "sam8404",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lmXxn_ocOhhJAPjqCvM-s68FhWkqemAADljYK00Jw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 240,
        likedBy: [],
        createdAt: 1514010345000,
        updatedAt: 1739679729551,
        _id: "Lz7kvJdwPOY"
      },
      {
        title: "The Hell Song",
        url: "https://www.youtube.com/embed/vm6XIFlMYYQ",
        imgUrl: "https://i.ytimg.com/vi/vm6XIFlMYYQ/hqdefault.jpg",
        addedBy: {
          _id: "UCmzLbgy9bHYbBjz9rQ1YfRw",
          fullname: "sam8404",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lmXxn_ocOhhJAPjqCvM-s68FhWkqemAADljYK00Jw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 143,
        likedBy: [],
        createdAt: 1514010373000,
        updatedAt: 1739674040100,
        _id: "vm6XIFlMYYQ"
      },
      {
        title: "Fat Lip",
        url: "https://www.youtube.com/embed/atjJVwok9ws",
        imgUrl: "https://i.ytimg.com/vi/atjJVwok9ws/hqdefault.jpg",
        addedBy: {
          _id: "UCmzLbgy9bHYbBjz9rQ1YfRw",
          fullname: "sam8404",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lmXxn_ocOhhJAPjqCvM-s68FhWkqemAADljYK00Jw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 115,
        likedBy: [],
        createdAt: 1514010470000,
        updatedAt: 1739710952193,
        _id: "atjJVwok9ws"
      },
      {
        title: "We're All To Blame",
        url: "https://www.youtube.com/embed/fj08EOQUBHU",
        imgUrl: "https://i.ytimg.com/vi/fj08EOQUBHU/hqdefault.jpg",
        addedBy: {
          _id: "UCmzLbgy9bHYbBjz9rQ1YfRw",
          fullname: "sam8404",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lmXxn_ocOhhJAPjqCvM-s68FhWkqemAADljYK00Jw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 342,
        likedBy: [],
        createdAt: 1514010482000,
        updatedAt: 1739678613658,
        _id: "fj08EOQUBHU"
      },
      {
        title: "Walking Disaster",
        url: "https://www.youtube.com/embed/KxGenzjp2GU",
        imgUrl: "https://i.ytimg.com/vi/KxGenzjp2GU/hqdefault.jpg",
        addedBy: {
          _id: "UCmzLbgy9bHYbBjz9rQ1YfRw",
          fullname: "sam8404",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lmXxn_ocOhhJAPjqCvM-s68FhWkqemAADljYK00Jw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 72,
        likedBy: [],
        createdAt: 1514010823000,
        updatedAt: 1739681343248,
        _id: "KxGenzjp2GU"
      },
      {
        title: "In Too Deep",
        url: "https://www.youtube.com/embed/Q4grEcVnKLI",
        imgUrl: "https://i.ytimg.com/vi/Q4grEcVnKLI/hqdefault.jpg",
        addedBy: {
          _id: "UCmzLbgy9bHYbBjz9rQ1YfRw",
          fullname: "sam8404",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lmXxn_ocOhhJAPjqCvM-s68FhWkqemAADljYK00Jw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 74,
        likedBy: [],
        createdAt: 1514010840000,
        updatedAt: 1739706721837,
        _id: "Q4grEcVnKLI"
      },
      {
        title: "Pieces",
        url: "https://www.youtube.com/embed/bbLC33EeEkc",
        imgUrl: "https://i.ytimg.com/vi/bbLC33EeEkc/hqdefault.jpg",
        addedBy: {
          _id: "UCmzLbgy9bHYbBjz9rQ1YfRw",
          fullname: "sam8404",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lmXxn_ocOhhJAPjqCvM-s68FhWkqemAADljYK00Jw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 103,
        likedBy: [],
        createdAt: 1514010853000,
        updatedAt: 1739650214610,
        _id: "bbLC33EeEkc"
      },
      {
        title: "Underclass Hero",
        url: "https://www.youtube.com/embed/3v24O8N42-Q",
        imgUrl: "https://i.ytimg.com/vi/3v24O8N42-Q/hqdefault.jpg",
        addedBy: {
          _id: "UCmzLbgy9bHYbBjz9rQ1YfRw",
          fullname: "sam8404",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lmXxn_ocOhhJAPjqCvM-s68FhWkqemAADljYK00Jw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 44,
        likedBy: [],
        createdAt: 1514010873000,
        updatedAt: 1739691793067,
        _id: "3v24O8N42-Q"
      },
      {
        title: "Motivation",
        url: "https://www.youtube.com/embed/stjlhSN2nwY",
        imgUrl: "https://i.ytimg.com/vi/stjlhSN2nwY/hqdefault.jpg",
        addedBy: {
          _id: "UCmzLbgy9bHYbBjz9rQ1YfRw",
          fullname: "sam8404",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lmXxn_ocOhhJAPjqCvM-s68FhWkqemAADljYK00Jw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 237,
        likedBy: [],
        createdAt: 1514010894000,
        updatedAt: 1739660622636,
        _id: "stjlhSN2nwY"
      },
      {
        title: "Makes No Difference (Alternate Version)",
        url: "https://www.youtube.com/embed/nYpp7EA_GiA",
        imgUrl: "https://i.ytimg.com/vi/nYpp7EA_GiA/hqdefault.jpg",
        addedBy: {
          _id: "UCmzLbgy9bHYbBjz9rQ1YfRw",
          fullname: "sam8404",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lmXxn_ocOhhJAPjqCvM-s68FhWkqemAADljYK00Jw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 368,
        likedBy: [],
        createdAt: 1514010928000,
        updatedAt: 1739711957831,
        _id: "nYpp7EA_GiA"
      },
      {
        title: "With Me",
        url: "https://www.youtube.com/embed/0-BrmgAz3EI",
        imgUrl: "https://i.ytimg.com/vi/0-BrmgAz3EI/hqdefault.jpg",
        addedBy: {
          _id: "UCmzLbgy9bHYbBjz9rQ1YfRw",
          fullname: "sam8404",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lmXxn_ocOhhJAPjqCvM-s68FhWkqemAADljYK00Jw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 363,
        likedBy: [],
        createdAt: 1514010951000,
        updatedAt: 1739654523514,
        _id: "0-BrmgAz3EI"
      },
      {
        title: "Handle This",
        url: "https://www.youtube.com/embed/FbW_5obp6zw",
        imgUrl: "https://i.ytimg.com/vi/FbW_5obp6zw/hqdefault.jpg",
        addedBy: {
          _id: "UCmzLbgy9bHYbBjz9rQ1YfRw",
          fullname: "sam8404",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lmXxn_ocOhhJAPjqCvM-s68FhWkqemAADljYK00Jw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 45,
        likedBy: [],
        createdAt: 1514010966000,
        updatedAt: 1739715496543,
        _id: "FbW_5obp6zw"
      },
      {
        title: "Over My Head (Better Off Dead)",
        url: "https://www.youtube.com/embed/SHaYwAjeVXU",
        imgUrl: "https://i.ytimg.com/vi/SHaYwAjeVXU/hqdefault.jpg",
        addedBy: {
          _id: "UCmzLbgy9bHYbBjz9rQ1YfRw",
          fullname: "sam8404",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lmXxn_ocOhhJAPjqCvM-s68FhWkqemAADljYK00Jw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 50,
        likedBy: [],
        createdAt: 1514010980000,
        updatedAt: 1739667265294,
        _id: "SHaYwAjeVXU"
      },
      {
        title: "Pain For Pleasure",
        url: "https://www.youtube.com/embed/-ifxAA1NBu8",
        imgUrl: "https://i.ytimg.com/vi/-ifxAA1NBu8/hqdefault.jpg",
        addedBy: {
          _id: "UCmzLbgy9bHYbBjz9rQ1YfRw",
          fullname: "sam8404",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lmXxn_ocOhhJAPjqCvM-s68FhWkqemAADljYK00Jw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 182,
        likedBy: [],
        createdAt: 1514010999000,
        updatedAt: 1739694517629,
        _id: "-ifxAA1NBu8"
      }
    ],
    _id: "PLexk4sqTMmZQ2ucbRVDUQ5DtWKtd-kudR",
    name: "Sum 41 - Topic",
    createdBy: {
      _id: "UCcMcUoDPCQhtONMyuKJs-dg",
      fullname: "Sum 41 - Topic",
      imgUrl: "https://yt3.ggpht.com/08kCjQfyxG9_BkDzoX6X_5dKNExgo3R0hRUDctj2f8H_2P6Rhcnx08loVpVUdtFJkdESQ4muX20=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1372929223000,
      updatedAt: 1739723960961
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "A Ticket For The Paralyzer",
        url: "https://www.youtube.com/embed/zTcabesSLKY",
        imgUrl: "https://i.ytimg.com/vi/zTcabesSLKY/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 325,
        likedBy: [],
        createdAt: 1736390122000,
        updatedAt: 1739687577843,
        _id: "zTcabesSLKY"
      },
      {
        title: "Emmure - 10 Signs You Should Leave",
        url: "https://www.youtube.com/embed/iwTdODejQh0",
        imgUrl: "https://i.ytimg.com/vi/iwTdODejQh0/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 240,
        likedBy: [],
        createdAt: 1736390122000,
        updatedAt: 1739712730524,
        _id: "iwTdODejQh0"
      },
      {
        title: "When Keeping It Real Goes Wrong",
        url: "https://www.youtube.com/embed/nuRRTMJRU6w",
        imgUrl: "https://i.ytimg.com/vi/nuRRTMJRU6w/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 369,
        likedBy: [],
        createdAt: 1736390122000,
        updatedAt: 1739693445257,
        _id: "nuRRTMJRU6w"
      },
      {
        title: "Rusted Over Wet Dreams",
        url: "https://www.youtube.com/embed/rUJR5xHWFeg",
        imgUrl: "https://i.ytimg.com/vi/rUJR5xHWFeg/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 269,
        likedBy: [],
        createdAt: 1736390122000,
        updatedAt: 1739710860771,
        _id: "rUJR5xHWFeg"
      },
      {
        title: "You Got A Henna Tattoo That Said Forever",
        url: "https://www.youtube.com/embed/ImdndLtpam4",
        imgUrl: "https://i.ytimg.com/vi/ImdndLtpam4/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 265,
        likedBy: [],
        createdAt: 1736390122000,
        updatedAt: 1739658953993,
        _id: "ImdndLtpam4"
      },
      {
        title: "Travis Bickle",
        url: "https://www.youtube.com/embed/m1CbjEMDyaM",
        imgUrl: "https://i.ytimg.com/vi/m1CbjEMDyaM/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 223,
        likedBy: [],
        createdAt: 1736390122000,
        updatedAt: 1739690817638,
        _id: "m1CbjEMDyaM"
      },
      {
        title: "Sleeping Princess In Devil's Castle",
        url: "https://www.youtube.com/embed/hS0W0bHR6TU",
        imgUrl: "https://i.ytimg.com/vi/hS0W0bHR6TU/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 395,
        likedBy: [],
        createdAt: 1736390122000,
        updatedAt: 1739643162837,
        _id: "hS0W0bHR6TU"
      },
      {
        title: "The Key to Keeping the Show Fresh Is... I'm Dead",
        url: "https://www.youtube.com/embed/4p1fOFNzDy8",
        imgUrl: "https://i.ytimg.com/vi/4p1fOFNzDy8/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 366,
        likedBy: [],
        createdAt: 1736390122000,
        updatedAt: 1739644045813,
        _id: "4p1fOFNzDy8"
      },
      {
        title: "It's Not Just A Party, It's A Funeral",
        url: "https://www.youtube.com/embed/xOJOugc0DI0",
        imgUrl: "https://i.ytimg.com/vi/xOJOugc0DI0/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 141,
        likedBy: [],
        createdAt: 1736390122000,
        updatedAt: 1739689530213,
        _id: "xOJOugc0DI0"
      },
      {
        title: "When Everything Goes Wrong, Take The Easy Way Out",
        url: "https://www.youtube.com/embed/tv8al9Lhhus",
        imgUrl: "https://i.ytimg.com/vi/tv8al9Lhhus/hqdefault.jpg",
        addedBy: {
          _id: "UCBR8-60-B28hp2BmDPdntcQ",
          fullname: "YouTube",
          imgUrl: "https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 48,
        likedBy: [],
        createdAt: 1736390122000,
        updatedAt: 1739648976676,
        _id: "tv8al9Lhhus"
      }
    ],
    _id: "OLAK5uy_nTLeHqB6qT5Mr3qxK83Gvh5fdpZGWflDQ",
    name: "Emmure - Topic",
    createdBy: {
      _id: "UCibTc8XBhnYoeW-Ri7y4_tw",
      fullname: "Emmure - Topic",
      imgUrl: "https://yt3.ggpht.com/Q9y9ei9dA7QugaVPl-Plx2MTuYPDhVbk9gYFITbxdLWby5g_Kn4KOqEqsVM-nrEMEm4Z6efiBw=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1383453843000,
      updatedAt: 1739724250993
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Welcome To The Jungle",
        url: "https://www.youtube.com/embed/okuctlQZUC0",
        imgUrl: "https://i.ytimg.com/vi/okuctlQZUC0/hqdefault.jpg",
        addedBy: {
          _id: "UC3xOfc589rXrZHvrrdINysg",
          fullname: "Grace Jones",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_kuBRM_gFtBF1sCAFq2i72aQS8gDab7cMnU-V4_zw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 99,
        likedBy: [],
        createdAt: 1601050999000,
        updatedAt: 1739685554294,
        _id: "okuctlQZUC0"
      },
      {
        title: "Sweet Child O' Mine",
        url: "https://www.youtube.com/embed/MNrgf3GNNXw",
        imgUrl: "https://i.ytimg.com/vi/MNrgf3GNNXw/hqdefault.jpg",
        addedBy: {
          _id: "UC3xOfc589rXrZHvrrdINysg",
          fullname: "Grace Jones",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_kuBRM_gFtBF1sCAFq2i72aQS8gDab7cMnU-V4_zw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 72,
        likedBy: [],
        createdAt: 1601050999000,
        updatedAt: 1739708902999,
        _id: "MNrgf3GNNXw"
      },
      {
        title: "Shadow Of Your Love",
        url: "https://www.youtube.com/embed/QMnDUCkFUds",
        imgUrl: "https://i.ytimg.com/vi/QMnDUCkFUds/hqdefault.jpg",
        addedBy: {
          _id: "UC3xOfc589rXrZHvrrdINysg",
          fullname: "Grace Jones",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_kuBRM_gFtBF1sCAFq2i72aQS8gDab7cMnU-V4_zw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 286,
        likedBy: [],
        createdAt: 1601050999000,
        updatedAt: 1739648266632,
        _id: "QMnDUCkFUds"
      },
      {
        title: "Patience",
        url: "https://www.youtube.com/embed/nmNOR3REU9s",
        imgUrl: "https://i.ytimg.com/vi/nmNOR3REU9s/hqdefault.jpg",
        addedBy: {
          _id: "UC3xOfc589rXrZHvrrdINysg",
          fullname: "Grace Jones",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_kuBRM_gFtBF1sCAFq2i72aQS8gDab7cMnU-V4_zw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 38,
        likedBy: [],
        createdAt: 1601050999000,
        updatedAt: 1739651110171,
        _id: "nmNOR3REU9s"
      },
      {
        title: "Paradise City",
        url: "https://www.youtube.com/embed/PS3zuN_jrAU",
        imgUrl: "https://i.ytimg.com/vi/PS3zuN_jrAU/hqdefault.jpg",
        addedBy: {
          _id: "UC3xOfc589rXrZHvrrdINysg",
          fullname: "Grace Jones",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_kuBRM_gFtBF1sCAFq2i72aQS8gDab7cMnU-V4_zw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 326,
        likedBy: [],
        createdAt: 1601050999000,
        updatedAt: 1739652137996,
        _id: "PS3zuN_jrAU"
      },
      {
        title: "Knockin' On Heaven's Door",
        url: "https://www.youtube.com/embed/hlSIGK7S8Is",
        imgUrl: "https://i.ytimg.com/vi/hlSIGK7S8Is/hqdefault.jpg",
        addedBy: {
          _id: "UC3xOfc589rXrZHvrrdINysg",
          fullname: "Grace Jones",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_kuBRM_gFtBF1sCAFq2i72aQS8gDab7cMnU-V4_zw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 113,
        likedBy: [],
        createdAt: 1601050999000,
        updatedAt: 1739685816205,
        _id: "hlSIGK7S8Is"
      },
      {
        title: "Civil War",
        url: "https://www.youtube.com/embed/s7oSOJGwvdY",
        imgUrl: "https://i.ytimg.com/vi/s7oSOJGwvdY/hqdefault.jpg",
        addedBy: {
          _id: "UC3xOfc589rXrZHvrrdINysg",
          fullname: "Grace Jones",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_kuBRM_gFtBF1sCAFq2i72aQS8gDab7cMnU-V4_zw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 253,
        likedBy: [],
        createdAt: 1601050999000,
        updatedAt: 1739645119189,
        _id: "s7oSOJGwvdY"
      },
      {
        title: "You Could Be Mine",
        url: "https://www.youtube.com/embed/dqeZBG2EalA",
        imgUrl: "https://i.ytimg.com/vi/dqeZBG2EalA/hqdefault.jpg",
        addedBy: {
          _id: "UC3xOfc589rXrZHvrrdINysg",
          fullname: "Grace Jones",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_kuBRM_gFtBF1sCAFq2i72aQS8gDab7cMnU-V4_zw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 179,
        likedBy: [],
        createdAt: 1601050999000,
        updatedAt: 1739702173575,
        _id: "dqeZBG2EalA"
      },
      {
        title: "Don't Cry (Original)",
        url: "https://www.youtube.com/embed/MYUmZMfVLE4",
        imgUrl: "https://i.ytimg.com/vi/MYUmZMfVLE4/hqdefault.jpg",
        addedBy: {
          _id: "UC3xOfc589rXrZHvrrdINysg",
          fullname: "Grace Jones",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_kuBRM_gFtBF1sCAFq2i72aQS8gDab7cMnU-V4_zw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 98,
        likedBy: [],
        createdAt: 1601050999000,
        updatedAt: 1739659616665,
        _id: "MYUmZMfVLE4"
      },
      {
        title: "November Rain",
        url: "https://www.youtube.com/embed/3Fyl0DLWmFs",
        imgUrl: "https://i.ytimg.com/vi/3Fyl0DLWmFs/hqdefault.jpg",
        addedBy: {
          _id: "UC3xOfc589rXrZHvrrdINysg",
          fullname: "Grace Jones",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_kuBRM_gFtBF1sCAFq2i72aQS8gDab7cMnU-V4_zw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 193,
        likedBy: [],
        createdAt: 1601050999000,
        updatedAt: 1739667324628,
        _id: "3Fyl0DLWmFs"
      },
      {
        title: "Live And Let Die",
        url: "https://www.youtube.com/embed/_u8SWicfK2U",
        imgUrl: "https://i.ytimg.com/vi/_u8SWicfK2U/hqdefault.jpg",
        addedBy: {
          _id: "UC3xOfc589rXrZHvrrdINysg",
          fullname: "Grace Jones",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_kuBRM_gFtBF1sCAFq2i72aQS8gDab7cMnU-V4_zw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 56,
        likedBy: [],
        createdAt: 1601050999000,
        updatedAt: 1739679170477,
        _id: "_u8SWicfK2U"
      },
      {
        title: "Yesterdays",
        url: "https://www.youtube.com/embed/KSPGXPhjz9Q",
        imgUrl: "https://i.ytimg.com/vi/KSPGXPhjz9Q/hqdefault.jpg",
        addedBy: {
          _id: "UC3xOfc589rXrZHvrrdINysg",
          fullname: "Grace Jones",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_kuBRM_gFtBF1sCAFq2i72aQS8gDab7cMnU-V4_zw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 31,
        likedBy: [],
        createdAt: 1601050999000,
        updatedAt: 1739697241416,
        _id: "KSPGXPhjz9Q"
      },
      {
        title: "Ain't It Fun",
        url: "https://www.youtube.com/embed/8Qtah_CEqFI",
        imgUrl: "https://i.ytimg.com/vi/8Qtah_CEqFI/hqdefault.jpg",
        addedBy: {
          _id: "UC3xOfc589rXrZHvrrdINysg",
          fullname: "Grace Jones",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_kuBRM_gFtBF1sCAFq2i72aQS8gDab7cMnU-V4_zw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 243,
        likedBy: [],
        createdAt: 1601050999000,
        updatedAt: 1739722338006,
        _id: "8Qtah_CEqFI"
      },
      {
        title: "Since I Don't Have You",
        url: "https://www.youtube.com/embed/as6CBKQgvCU",
        imgUrl: "https://i.ytimg.com/vi/as6CBKQgvCU/hqdefault.jpg",
        addedBy: {
          _id: "UC3xOfc589rXrZHvrrdINysg",
          fullname: "Grace Jones",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_kuBRM_gFtBF1sCAFq2i72aQS8gDab7cMnU-V4_zw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 386,
        likedBy: [],
        createdAt: 1601050999000,
        updatedAt: 1739718303553,
        _id: "as6CBKQgvCU"
      },
      {
        title: "Sympathy For The Devil",
        url: "https://www.youtube.com/embed/ldCbVPMzyD4",
        imgUrl: "https://i.ytimg.com/vi/ldCbVPMzyD4/hqdefault.jpg",
        addedBy: {
          _id: "UC3xOfc589rXrZHvrrdINysg",
          fullname: "Grace Jones",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_kuBRM_gFtBF1sCAFq2i72aQS8gDab7cMnU-V4_zw=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 361,
        likedBy: [],
        createdAt: 1601050999000,
        updatedAt: 1739697909299,
        _id: "ldCbVPMzyD4"
      }
    ],
    _id: "PLofmCZWRdOtl1dM2XQPx2_8KxveP6KbTt",
    name: "Guns N' Roses - Topic",
    createdBy: {
      _id: "UCSLbbBoUqpin6BE34whSOvA",
      fullname: "Guns N' Roses - Topic",
      imgUrl: "https://yt3.ggpht.com/NOffjBzduuBi233oo3u5e_GZw_dPN4PqWEdOn0neHj-rEzTd4KurXRQInExaMOhhFK-fU2rBMw=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1377853684000,
      updatedAt: 1739724308252
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  },
  {
    songs: [
      {
        title: "Two Of Us (Remastered 2009)",
        url: "https://www.youtube.com/embed/cLQox8e9688",
        imgUrl: "https://i.ytimg.com/vi/cLQox8e9688/hqdefault.jpg",
        addedBy: {
          _id: "UCbpCRa8CYDS7lt0Aw_0Sg0Q",
          fullname: "Jonny jack Playlists",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lqIPZk7pOhbeugYxjUDFOQ5zfRGlfOwU7fdRpgnSM_IUk=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 138,
        likedBy: [],
        createdAt: 1531289289000,
        updatedAt: 1739670518856,
        _id: "cLQox8e9688"
      },
      {
        title: "Dig A Pony (Remastered 2009)",
        url: "https://www.youtube.com/embed/LpdJE7HG8Ls",
        imgUrl: "https://i.ytimg.com/vi/LpdJE7HG8Ls/hqdefault.jpg",
        addedBy: {
          _id: "UCbpCRa8CYDS7lt0Aw_0Sg0Q",
          fullname: "Jonny jack Playlists",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lqIPZk7pOhbeugYxjUDFOQ5zfRGlfOwU7fdRpgnSM_IUk=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 238,
        likedBy: [],
        createdAt: 1531289298000,
        updatedAt: 1739648396064,
        _id: "LpdJE7HG8Ls"
      },
      {
        title: "Across The Universe (Remastered 2009)",
        url: "https://www.youtube.com/embed/90M60PzmxEE",
        imgUrl: "https://i.ytimg.com/vi/90M60PzmxEE/hqdefault.jpg",
        addedBy: {
          _id: "UCbpCRa8CYDS7lt0Aw_0Sg0Q",
          fullname: "Jonny jack Playlists",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lqIPZk7pOhbeugYxjUDFOQ5zfRGlfOwU7fdRpgnSM_IUk=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 232,
        likedBy: [],
        createdAt: 1531289305000,
        updatedAt: 1739652023577,
        _id: "90M60PzmxEE"
      },
      {
        title: "I Me Mine (Remastered 2009)",
        url: "https://www.youtube.com/embed/seqaTuXkqFI",
        imgUrl: "https://i.ytimg.com/vi/seqaTuXkqFI/hqdefault.jpg",
        addedBy: {
          _id: "UCbpCRa8CYDS7lt0Aw_0Sg0Q",
          fullname: "Jonny jack Playlists",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lqIPZk7pOhbeugYxjUDFOQ5zfRGlfOwU7fdRpgnSM_IUk=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 199,
        likedBy: [],
        createdAt: 1531289324000,
        updatedAt: 1739670671300,
        _id: "seqaTuXkqFI"
      },
      {
        title: "Dig It (Remastered 2009)",
        url: "https://www.youtube.com/embed/fUUOX6kAIxI",
        imgUrl: "https://i.ytimg.com/vi/fUUOX6kAIxI/hqdefault.jpg",
        addedBy: {
          _id: "UCbpCRa8CYDS7lt0Aw_0Sg0Q",
          fullname: "Jonny jack Playlists",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lqIPZk7pOhbeugYxjUDFOQ5zfRGlfOwU7fdRpgnSM_IUk=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 166,
        likedBy: [],
        createdAt: 1531289328000,
        updatedAt: 1739716502193,
        _id: "fUUOX6kAIxI"
      },
      {
        title: "Let It Be (Remastered 2009)",
        url: "https://www.youtube.com/embed/QDYfEBY9NM4",
        imgUrl: "https://i.ytimg.com/vi/QDYfEBY9NM4/hqdefault.jpg",
        addedBy: {
          _id: "UCbpCRa8CYDS7lt0Aw_0Sg0Q",
          fullname: "Jonny jack Playlists",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lqIPZk7pOhbeugYxjUDFOQ5zfRGlfOwU7fdRpgnSM_IUk=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 391,
        likedBy: [],
        createdAt: 1531289333000,
        updatedAt: 1739689041933,
        _id: "QDYfEBY9NM4"
      },
      {
        title: "Maggie Mae (Remastered 2009)",
        url: "https://www.youtube.com/embed/tSn1r9--tq4",
        imgUrl: "https://i.ytimg.com/vi/tSn1r9--tq4/hqdefault.jpg",
        addedBy: {
          _id: "UCbpCRa8CYDS7lt0Aw_0Sg0Q",
          fullname: "Jonny jack Playlists",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lqIPZk7pOhbeugYxjUDFOQ5zfRGlfOwU7fdRpgnSM_IUk=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 188,
        likedBy: [],
        createdAt: 1531289336000,
        updatedAt: 1739657869727,
        _id: "tSn1r9--tq4"
      },
      {
        title: "I've Got A Feeling (Remastered 2009)",
        url: "https://www.youtube.com/embed/DbKPZd5oihc",
        imgUrl: "https://i.ytimg.com/vi/DbKPZd5oihc/hqdefault.jpg",
        addedBy: {
          _id: "UCbpCRa8CYDS7lt0Aw_0Sg0Q",
          fullname: "Jonny jack Playlists",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lqIPZk7pOhbeugYxjUDFOQ5zfRGlfOwU7fdRpgnSM_IUk=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 115,
        likedBy: [],
        createdAt: 1531289340000,
        updatedAt: 1739647949421,
        _id: "DbKPZd5oihc"
      },
      {
        title: "One After 909 (Remastered 2009)",
        url: "https://www.youtube.com/embed/t8UeWjynWvE",
        imgUrl: "https://i.ytimg.com/vi/t8UeWjynWvE/hqdefault.jpg",
        addedBy: {
          _id: "UCbpCRa8CYDS7lt0Aw_0Sg0Q",
          fullname: "Jonny jack Playlists",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lqIPZk7pOhbeugYxjUDFOQ5zfRGlfOwU7fdRpgnSM_IUk=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 244,
        likedBy: [],
        createdAt: 1531289344000,
        updatedAt: 1739676891662,
        _id: "t8UeWjynWvE"
      },
      {
        title: "The Long And Winding Road (Remastered 2009)",
        url: "https://www.youtube.com/embed/fR4HjTH_fTM",
        imgUrl: "https://i.ytimg.com/vi/fR4HjTH_fTM/hqdefault.jpg",
        addedBy: {
          _id: "UCbpCRa8CYDS7lt0Aw_0Sg0Q",
          fullname: "Jonny jack Playlists",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lqIPZk7pOhbeugYxjUDFOQ5zfRGlfOwU7fdRpgnSM_IUk=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 331,
        likedBy: [],
        createdAt: 1531289347000,
        updatedAt: 1739665013075,
        _id: "fR4HjTH_fTM"
      },
      {
        title: "For You Blue (Remastered 2009)",
        url: "https://www.youtube.com/embed/TIFHRaZERHg",
        imgUrl: "https://i.ytimg.com/vi/TIFHRaZERHg/hqdefault.jpg",
        addedBy: {
          _id: "UCbpCRa8CYDS7lt0Aw_0Sg0Q",
          fullname: "Jonny jack Playlists",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lqIPZk7pOhbeugYxjUDFOQ5zfRGlfOwU7fdRpgnSM_IUk=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 384,
        likedBy: [],
        createdAt: 1531289350000,
        updatedAt: 1739688284323,
        _id: "TIFHRaZERHg"
      },
      {
        title: "Get Back (Remastered 2009)",
        url: "https://www.youtube.com/embed/IKJqecxswCA",
        imgUrl: "https://i.ytimg.com/vi/IKJqecxswCA/hqdefault.jpg",
        addedBy: {
          _id: "UCbpCRa8CYDS7lt0Aw_0Sg0Q",
          fullname: "Jonny jack Playlists",
          imgUrl: "https://yt3.ggpht.com/ytc/AIdro_lqIPZk7pOhbeugYxjUDFOQ5zfRGlfOwU7fdRpgnSM_IUk=s800-c-k-c0x00ffffff-no-rj"
        },
        lengthInSeconds: 390,
        likedBy: [],
        createdAt: 1531289360000,
        updatedAt: 1739718786293,
        _id: "IKJqecxswCA"
      }
    ],
    _id: "PLycVTiaj8OI-aOPBmpwUlhQp83Puf0hLX",
    name: "The Beatles - Topic",
    createdBy: {
      _id: "UC2XdaAVUannpujzv32jcouQ",
      fullname: "The Beatles - Topic",
      imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nmFhQpQ4qy5zJZxVP6dYoMYVXCMZEPh1ChDMmsWJVP62c=s800-c-k-c0x00ffffff-no-rj",
      createdAt: 1371168392000,
      updatedAt: 1739724353085
    },
    msgs: [],
    likedByUsers: [],
    tags: []
  }
]