/**
 * 주일설교 — 뉴저지제일한인교회 YouTube(THE FIRST THE BEST) 주일 업로드 영상
 * firstchurch.tv 게시판(m3_2) embed와 동일한 링크입니다.
 * 갱신: https://www.firstchurch.tv/_chboard/bbs/board.php?bo_table=m3_2
 */
const YT = id => `https://www.youtube.com/watch?v=${id}`

export const sundaySermons = [
  {
    date: '2026.06.28',
    title: '"참된 안식"',
    verse: '마태복음 11:28-30',
    tag: '주일예배',
    youtubeUrl: 'https://www.youtube.com/@THEFIRSTTHEBEST',
  },
  {
    date: '2026.06.21',
    title: '"성령의 인도하심"',
    verse: '로마서 8:14-17',
    tag: '주일예배',
    youtubeUrl: 'https://www.youtube.com/@THEFIRSTTHEBEST',
  },
  {
    date: '2026.06.14',
    title: '"사랑 안에서 자라가라"',
    verse: '에베소서 4:15-16',
    tag: '주일예배',
    youtubeUrl: 'https://www.youtube.com/@THEFIRSTTHEBEST',
  },
  {
    date: '2026.06.07',
    title: '"오순절과 성령"',
    verse: '사도행전 2:1-13',
    tag: '주일예배',
    youtubeUrl: 'https://www.youtube.com/@THEFIRSTTHEBEST',
  },
  {
    date: '2026.05.24',
    title: '"예수님이 생명을 주십니다"',
    verse: '요한복음 5:19-30',
    tag: '주일예배',
    youtubeUrl: YT('61aJbJUEe1Y'),
  },
  {
    date: '2026.05.10',
    title: '"믿음의 삶"',
    verse: '창세기 37:1-4',
    tag: '주일예배',
    youtubeUrl: YT('ClfuFSVVoa0'),
  },
  {
    date: '2026.05.03',
    title: '내 아버지께서 일하시니 나도 일한다',
    verse: '요한복음 5:10-18',
    tag: '주일예배',
    youtubeUrl: YT('mYO99lAMZ8k'),
  },
  {
    date: '2026.04.26',
    title: '"낫고 싶습니까?"',
    verse: '요한복음 5:1-9',
    tag: '주일예배',
    youtubeUrl: YT('Ct7s0n7mEQA'),
  },
  {
    date: '2026.04.19',
    title: '"두 번째 표적"',
    verse: '요한복음 4:43-54',
    tag: '주일예배',
    youtubeUrl: YT('PCxa-w87Bz4'),
  },
  {
    date: '2026.04.12',
    title: '"영혼의 양식"',
    verse: '요한복음 4:31-42',
    tag: '주일예배',
    youtubeUrl: YT('vr9qvHUB4PU'),
  },
  {
    date: '2026.04.05',
    title: '예수님이 부활하지 않으셨다면',
    verse: '고린도전서 15:12-20',
    tag: '주일예배',
    youtubeUrl: YT('GU0VFsK9ov0'),
  },
  {
    date: '2026.03.29',
    title: '신령과 진정으로 예배합시다',
    verse: '요한복음 4:19-30',
    tag: '주일예배',
    youtubeUrl: YT('YALHF_tKjxg'),
  },
  {
    date: '2026.03.22',
    title: '"예수님이 생수를 주십니다"',
    verse: '요한복음 4:1-18',
    tag: '주일예배',
    youtubeUrl: YT('minaRBgqv10'),
  },
  {
    date: '2026.03.15',
    title: '세례요한의 증거 (2)',
    verse: '요한복음 3:22-36',
    tag: '주일예배',
    youtubeUrl: YT('6iZt15vjGRs'),
  },
  {
    date: '2026.03.08',
    title: '믿는 자는 영생을 얻습니다',
    verse: '요한복음 3:16-21',
    tag: '주일예배',
    youtubeUrl: YT('mUYGPMZLHm0'),
  },
  {
    date: '2026.03.01',
    title: '"두 번 태어나면 영원히 삽니다"',
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
