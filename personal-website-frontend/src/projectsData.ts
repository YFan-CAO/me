export type Project = {
  id: string
  name: string
  role: string
  period?: string
  summary: string
  techStack: string[]
  tags: string[]
  isCrossPlatform?: boolean
  isHarmony?: boolean
}

export const projects: Project[] = [
  {
    id: 'meituan-order-frontend',
    name: '美团闪购 C 端订单中台前端',
    role: '负责核心功能与前端工程化建设',
    period: '2025 - 至今',
    summary:
      '面向高并发场景的订单链路前端，实现复杂状态编排与兜底体验设计，并持续推进性能优化与工程化演进。',
    techStack: ['TypeScript', 'React', 'Vite/Webpack', 'Node 工程化工具'],
    tags: ['订单链路', '前端工程化', '性能优化'],
  },
  {
    id: 'Agent master',
    name: '美团闪购 核心Agent构建',
    role: '负责用户仿真Agent训练与构建',
    period: '2025 - 至今',
    summary:
      '负责用户仿真Agent训练与构建，实现用户仿真Agent训练与构建，并持续推进性能优化与工程化演进。',
    techStack: ['Python', 'AgentSim', 'AgentMaster'],
    tags: ['用户仿真', 'Agent训练', 'Agent构建'],
  },
  {
    id: 'harmony-mall',
    name: 'HarmonyOS 多端商城 Demo',
    role: '主导 ArkTS 前端实现与多端适配',
    period: '2025 - 至今',
    summary:
      '基于 HarmonyOS 与 ArkTS 实现的核心链路，探索分布式场景下的 UI 结构、状态管理与动画体验，兼顾性能与交互细节。',
    techStack: ['ArkTS', 'HarmonyOS', '多端框架'],
    tags: ['HarmonyOS', '跨端', '体验设计'],
    isCrossPlatform: true,
    isHarmony: true,
  },
]

