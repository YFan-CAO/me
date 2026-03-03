export type ExperienceItem = {
  id: string
  period: string
  title: string
  org: string
  location?: string
  highlight?: string
  isCurrent?: boolean
  isMeituan?: boolean
}

export const experiences: ExperienceItem[] = [
  {
    id: 'meituan',
    period: '2025 - 至今',
    title: '大前端工程师',
    org: '美团 · 闪购',
    location: '城市 · 中国',
    isCurrent: true,
    isMeituan: true,
    highlight:
      '负责美团闪购-C端订单交易团队的前端业务与工程化建设，在复杂业务场景中推进性能与体验优化。',
  },
  {
    id: 'meituan',
    period: '2024 - 2025',
    title: '大前端工程师',
    org: '腾讯 · CSIG',
    location: '深圳 · 中国',
    isCurrent: false,
    isMeituan: false,
    highlight:
      '负责腾讯CSIG-云平台团队的腾讯文档前端业务与工程化建设，负责腾讯文档的性能优化与体验优化。',
  },
  {
    id: 'education',
    period: '2021 - 2025',
    title: 'computer science and technology',
    org: 'HZAU',
    highlight: '本科',
  },
]

