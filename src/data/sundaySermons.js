/**
 * 주일설교 — 뉴저지제일한인교회 YouTube(THE FIRST THE BEST) 주일 업로드 영상
 * firstchurch.tv 게시판(m3_2) embed와 동일한 링크입니다.
 * 갱신: https://www.firstchurch.tv/_chboard/bbs/board.php?bo_table=m3_2
 */
const YT = id => `https://www.youtube.com/watch?v=${id}`

export const sundaySermons = [
  {
    date: '2026.06.28',
    title: '"먹으면 영생하리라" "Eat and Live Forever"',
    verse: '요한복음(John) 6:41-59 (신약 N.T. p.154)',
    tag: '주일예배',
    youtubeUrl: YT('RiVvljJIv3g'),
  },
  {
    date: '2026.06.21',
    title: '"생명의 떡" "The Bread of Life"',
    verse: '요한복음(John) 6:22-40 (신약 N.T. p.153)',
    tag: '주일예배',
    youtubeUrl: YT('eI_hrW7r8wI'),
  },
  {
    date: '2026.06.14',
    title: '"물 위를 걷는 기적" "The Miracle of Walking on Water"',
    verse: '요한복음(John) 6:16-21 (신약 N.T. p.152)',
    tag: '주일예배',
    youtubeUrl: YT('IqMQ8eKUIuw'),
  },
  {
    date: '2026.06.07',
    title: '"오병이어의 기적" "The Miracle of the Loaves and Fishes"',
    verse: '요한복음(John) 6:1-15 (신약 N.T. p.152)',
    tag: '주일예배',
    youtubeUrl: YT('a2oFnJpuIuo'),
  },
  {
    date: '2026.05.31',
    title: '"예수님을 위한 증거" "Witnesses to Jesus"',
    verse: '요한복음(John) 5:31-47 (신약 N.T. p.151)',
    tag: '주일예배',
    youtubeUrl: YT('Xzdsv4wX_20'),
  },
  {
    date: '2026.05.24',
    title: '"예수님이 생명을 주십니다" "Life in JESUS"',
    verse: '요한복음(John) 5:19-30 (신약 N.T. p.150)',
    tag: '주일예배',
    youtubeUrl: YT('61aJbJUEe1Y'),
  },
  {
    date: '2026.05.10',
    title: '"믿음의 삶" "A Faithful Journey"',
    verse: '창세기(Genesis) 37:1-4 (구약 O.T. p.57)',
    tag: '주일예배',
    youtubeUrl: YT('ClfuFSVVoa0'),
  },
  {
    date: '2026.05.03',
    title: '내 아버지께서 일하시니 나도 일한다',
    verse: '요한복음(John) 5:10-18 (신약 N.T. p.150)',
    tag: '주일예배',
    youtubeUrl: YT('mYO99lAMZ8k'),
  },
  {
    date: '2026.04.26',
    title: '"낫고 싶습니까?" "Do You Want to Get Well?"',
    verse: '요한복음(John) 5:1-9 (신약 N.T. p.149)',
    tag: '주일예배',
    youtubeUrl: YT('Ct7s0n7mEQA'),
  },
  {
    date: '2026.04.19',
    title: '"두 번째 표적" "The Second Sign"',
    verse: '요한복음(John) 4:43-54 (신약 N.T. p.149)',
    tag: '주일예배',
    youtubeUrl: YT('PCxa-w87Bz4'),
  },
  {
    date: '2026.04.12',
    title: '"영혼의 양식" "Food for the Soul"',
    verse: '요한복음(John) 4:31-42 (신약 N.T. p.148)',
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
    verse: '요한복음(John) 4:19-30 (신약 N.T. p.148)',
    tag: '주일예배',
    youtubeUrl: YT('YALHF_tKjxg'),
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
