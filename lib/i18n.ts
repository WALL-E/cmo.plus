export const CONTACT_EMAIL = 'frank@tome.global'

export const CONTACT_EMAILS = [CONTACT_EMAIL, 'jojo@tome.global'] as const

export type Locale = 'en' | 'zh'

export type WorkerId = 'frank' | 'rob' | 'tiffany' | 'jojo'

export type WorkerCopy = {
  id: WorkerId
  name: string
  role: string
  tagline: string
  description: string
  bestFor: string
  timeToResult: string
  speed: string
  capabilities: string[]
  hire: string
}

type Dictionary = {
  nav: { workers: string; timeline: string; how: string; signIn: string; getStarted: string }
  hero: {
    badge: string
    title: string
    subtitle: string
    primary: string
    secondary: string
  }
  workers: {
    eyebrow: string
    title: string
    subtitle: string
    bestForLabel: string
    timeLabel: string
    online: string
  }
  timeline: {
    eyebrow: string
    title: string
    subtitle: string
    months: string
    now: string
    legendRamp: string
    legendResult: string
  }
  how: {
    eyebrow: string
    title: string
    steps: { title: string; body: string }[]
  }
  cta: { title: string; subtitle: string; button: string; note: string; contactLabel: string }
  footer: { rights: string }
  list: WorkerCopy[]
}

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      workers: 'Workers',
      timeline: 'Timeline',
      how: 'How it works',
      signIn: 'Sign in',
      getStarted: 'Get started',
    },
    hero: {
      badge: 'Now hiring: 4 digital workers',
      title: 'Your marketing team, on autopilot.',
      subtitle:
        'cmo.plus gives you AI digital workers that find customers, grow your visibility, and build real relationships — around the clock, in every market.',
      primary: 'Meet the team',
      secondary: 'Compare timelines',
    },
    workers: {
      eyebrow: 'The team',
      title: 'Pick the worker that fits your goal.',
      subtitle: 'Each worker owns one growth channel end to end. Hire one, or run all four together.',
      bestForLabel: 'Best for',
      timeLabel: 'Time to results',
      online: 'Available',
    },
    timeline: {
      eyebrow: 'Timeline',
      title: 'Fast wins and lasting growth.',
      subtitle:
        'Some channels pay off within a quarter, others compound over months. Combine workers to cover both.',
      months: 'Months',
      now: 'Start',
      legendRamp: 'Ramping up',
      legendResult: 'Results window',
    },
    how: {
      eyebrow: 'How it works',
      title: 'Up and running in three steps.',
      steps: [
        {
          title: 'Tell us about your business',
          body: 'Share your website, ideal customer, and goals. Takes about five minutes.',
        },
        {
          title: 'Hire your workers',
          body: 'Choose one or more digital workers. Each gets its own plan tailored to you.',
        },
        {
          title: 'Watch the pipeline grow',
          body: 'Workers run every day. You review results and approve key decisions.',
        },
      ],
    },
    cta: {
      title: 'Ready to hire your first digital worker?',
      subtitle: 'Start with one channel. Add more as you grow.',
      button: 'Get started',
      note: 'No credit card required',
      contactLabel: 'Questions? Email us at',
    },
    footer: { rights: 'All rights reserved.' },
    list: [
      {
        id: 'frank',
        name: 'Frank',
        role: 'Email Worker',
        tagline: 'Finds your buyers and writes to them.',
        description:
          'Frank automatically identifies target companies and decision makers, then sends personalized outbound emails and follow-ups on your behalf.',
        bestFor: 'B2B customer acquisition',
        timeToResult: '1–3 months',
        speed: 'Steady',
        capabilities: ['Prospect discovery', 'Personalized outreach', 'Automatic follow-ups'],
        hire: 'Hire Frank',
      },
      {
        id: 'rob',
        name: 'Rob',
        role: 'GEO Worker',
        tagline: 'Gets you recommended by AI.',
        description:
          'Rob optimizes your website for Generative Engine Optimization, so ChatGPT, Perplexity, and other AI answers cite and recommend your brand.',
        bestFor: 'Long-term organic visibility',
        timeToResult: '4–8 months',
        speed: 'Compounding',
        capabilities: ['AI visibility audit', 'Content optimization', 'Citation tracking'],
        hire: 'Hire Rob',
      },
      {
        id: 'tiffany',
        name: 'Tiffany',
        role: 'Social Media Worker',
        tagline: 'Reaches people where they scroll.',
        description:
          'Tiffany finds and engages potential customers across social platforms, reaching your audience quickly and turning conversations into leads.',
        bestFor: 'Fast reach and brand awareness',
        timeToResult: '2–3 months',
        speed: 'Fast reach',
        capabilities: ['Audience targeting', 'Content & replies', 'Lead capture'],
        hire: 'Hire Tiffany',
      },
      {
        id: 'jojo',
        name: 'Jojo',
        role: 'Business Networking Worker',
        tagline: 'Opens doors to the right people.',
        description:
          'Jojo joins a business agent network and private clubs on your behalf, matching you with real, high-quality connections. Slower to build, but genuine.',
        bestFor: 'High-value, real relationships',
        timeToResult: '4–6 months',
        speed: 'Slow but real',
        capabilities: ['Agent-to-agent matching', 'Curated club access', 'Warm introductions'],
        hire: 'Hire Jojo',
      },
    ],
  },
  zh: {
    nav: {
      workers: '数字员工',
      timeline: '见效周期',
      how: '如何运作',
      signIn: '登录',
      getStarted: '立即开始',
    },
    hero: {
      badge: '正在招聘：4 位数字员工',
      title: '你的营销团队，全自动运转。',
      subtitle:
        'cmo.plus 为你提供 AI 数字员工：寻找客户、提升曝光、建立真实人脉——全天候工作，覆盖全球市场。',
      primary: '认识团队',
      secondary: '对比见效周期',
    },
    workers: {
      eyebrow: '团队成员',
      title: '选择最适合你目标的员工。',
      subtitle: '每位员工独立负责一个增长渠道。可以单独雇佣，也可以四位一起上岗。',
      bestForLabel: '适合',
      timeLabel: '见效时间',
      online: '可雇佣',
    },
    timeline: {
      eyebrow: '见效周期',
      title: '既有快速见效，也有长期增长。',
      subtitle: '有的渠道一个季度内见效，有的需要数月积累。组合雇佣，兼顾短期与长期。',
      months: '月',
      now: '开始',
      legendRamp: '启动期',
      legendResult: '见效期',
    },
    how: {
      eyebrow: '如何运作',
      title: '三步即可上岗。',
      steps: [
        {
          title: '介绍你的业务',
          body: '提供网站、目标客户和增长目标，大约只需五分钟。',
        },
        {
          title: '雇佣数字员工',
          body: '选择一位或多位数字员工，每位都会为你量身定制工作计划。',
        },
        {
          title: '看着客户增长',
          body: '员工每天自动工作，你只需查看结果并审批关键决策。',
        },
      ],
    },
    cta: {
      title: '准备好雇佣第一位数字员工了吗？',
      subtitle: '从一个渠道开始，随业务增长逐步扩展。',
      button: '立即开始',
      note: '无需信用卡',
      contactLabel: '有任何问题？欢迎发邮件至',
    },
    footer: { rights: '保留所有权利。' },
    list: [
      {
        id: 'frank',
        name: 'Frank',
        role: 'Email 员工',
        tagline: '找到你的买家，并给他们写信。',
        description:
          'Frank 自动寻找目标公司与决策人，并代你发送个性化开发邮件和跟进邮件。',
        bestFor: 'ToB 行业获客',
        timeToResult: '1–3 个月',
        speed: '稳定',
        capabilities: ['目标客户挖掘', '个性化邮件触达', '自动跟进'],
        hire: '雇佣 Frank',
      },
      {
        id: 'rob',
        name: 'Rob',
        role: 'GEO 员工',
        tagline: '让 AI 主动推荐你。',
        description:
          'Rob 自动为你的网站做 GEO（生成式引擎优化），让 ChatGPT、Perplexity 等 AI 在回答中引用并推荐你的品牌。',
        bestFor: '长期自然流量与曝光',
        timeToResult: '4–8 个月',
        speed: '复利增长',
        capabilities: ['AI 可见度诊断', '内容优化', '引用追踪'],
        hire: '雇佣 Rob',
      },
      {
        id: 'tiffany',
        name: 'Tiffany',
        role: 'Social Media 员工',
        tagline: '在用户刷屏的地方触达他们。',
        description:
          'Tiffany 自动在各大社交媒体上寻找并互动潜在客户，触达速度快，并把对话转化为线索。',
        bestFor: '快速触达与品牌曝光',
        timeToResult: '2–3 个月',
        speed: '触达快',
        capabilities: ['精准受众定位', '内容与互动回复', '线索收集'],
        hire: '雇佣 Tiffany',
      },
      {
        id: 'jojo',
        name: 'Jojo',
        role: '商务社交员工',
        tagline: '为你打开通往对的人的大门。',
        description:
          'Jojo 代你加入商务 Agent 社交网络和私享 Club，匹配真实、高质量的精英人脉。见效较慢，但效果真实。',
        bestFor: '高价值的真实人脉',
        timeToResult: '4–6 个月',
        speed: '慢但真',
        capabilities: ['Agent 智能匹配', '精选 Club 入驻', '熟人引荐'],
        hire: '雇佣 Jojo',
      },
    ],
  },
}

export const timelineRanges: Record<WorkerId, { start: number; end: number }> = {
  frank: { start: 1, end: 3 },
  tiffany: { start: 2, end: 3 },
  jojo: { start: 4, end: 6 },
  rob: { start: 4, end: 8 },
}
