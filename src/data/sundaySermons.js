/**
 * 주일설교 — firstchurch.tv 게시판(m3_2) 본문의 유튜브 embed와 동일한 영상입니다.
 * 갱신: https://www.firstchurch.tv/_chboard/bbs/board.php?bo_table=m3_2
 */
const YT = id => `https://www.youtube.com/watch?v=${id}`

export const sundaySermons = [
  {
    date: '2026.03.25',
    title: '선을 행함으로 고난을 받고 참으면',
    verse: '베드로전서 2:18-25',
    tag: '주일예배',
    youtubeUrl: YT('M-iNtCUnDdI'),
  },
  {
    date: '2026.03.22',
    title: '“예수님이 생수를 주십니다”',
    verse: '요한복음 4:1-18',
    tag: '주일예배',
    youtubeUrl: YT('minaRBgqv10'),
  },
  {
    date: '2026.03.18',
    title: '전심으로 찬양합시다',
    verse: '시편 111:1-10',
    tag: '주일예배',
    youtubeUrl: YT('aGjWdrXlhVc'),
  },
  {
    date: '2026.03.15',
    title: '세례요한의 증거 (2)',
    verse: '요한복음 3:22-36',
    tag: '주일예배',
    youtubeUrl: YT('6iZt15vjGRs'),
  },
  {
    date: '2026.03.11',
    title: '행실을 선하게 가져',
    verse: '베드로전서 2:11-17',
    tag: '주일예배',
    youtubeUrl: YT('ThvmB_REpOU'),
  },
  {
    date: '2026.03.08',
    title: '믿는 자는 영생을 얻습니다',
    verse: '요한복음 3:16-21',
    tag: '주일예배',
    youtubeUrl: YT('mUYGPMZLHm0'),
  },
  {
    date: '2026.03.04',
    title: '거룩한 제사장이 될지니라',
    verse: '베드로전서 2:4-10',
    tag: '주일예배',
    youtubeUrl: YT('uac0uuYcXms'),
  },
  {
    date: '2026.03.01',
    title: '“두 번 태어나면 영원히 삽니다”',
    verse: '요한복음 3:1-15',
    tag: '주일예배',
    youtubeUrl: YT('PdlxjqDtjR0'),
  },
]

export const homeSermonCount = 3

export function sermonsForHome() {
  return sundaySermons.slice(0, homeSermonCount).map(s => ({
    date: s.date,
    title: s.title,
    verse: `${s.verse} | 강상석 담임목사`,
    youtubeUrl: s.youtubeUrl,
  }))
}
