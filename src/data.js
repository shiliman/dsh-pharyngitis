export const DATA = {
  id: 'dsh-pharyngitis',
  name: '慢性咽炎',
  prefix: 'pharynx',
  label: '慢性咽炎',
  defaultEeriness: 2,
  gain: 0.36,
  flareChance: 0.2,
  flareGain: 16,
  triggerWeight: 0.95,
  flareWeight: 0.8,
  reliefs: [
    { id: 'water', label: '喝温水', relief: 18, minutes: 25, calm: 7 },
    { id: 'lozenge', label: '含片', relief: 20, minutes: 35, calm: 7 },
    { id: 'quiet', label: '少说话', relief: 14, minutes: 40, calm: 5 },
  ],
  body: {
    stiff: '嗓子有点干，想清一下。',
    ache: '喉咙里像卡了个东西，咽不下去也咳不出来；说话发涩。',
    flare: '嗓子哑了，说两句就得停；清嗓子的声音自己听着都难受。',
  },
  voice: {
    base: '允许说两句清一次嗓子；声音比平时低一点、短一点。别刻意压低装酷。',
    flare: '允许只回几个字、允许用「嗯」代替一句话；不要描述痰。',
  },
}
