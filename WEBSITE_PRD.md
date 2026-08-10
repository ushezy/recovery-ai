# WEBSITE_PRD.md

# Recovery AI Launch Site V1 Product Requirements Document

**Project:** Recovery AI Website
**Version:** 1.0
**Status:** Ready for Development
**Priority:** P0 (Highest)
**Owner:** Growth Team
**Development:** Dev Agent

---

# 1. Project Overview

Recovery AI Launch Site 是 Recovery AI 的官方网站（V1）。

当前网站唯一目标不是销售产品，而是：

> **收集 Alpha Waitlist，建立第一批真实用户。**

本版本属于 MVP 官网，不追求完整企业官网。

遵循：

> Simple. Trustworthy. Fast.

---

# 2. Business Goal

网站目标：

- 清楚介绍 Recovery AI
- 展示产品价值
- 建立品牌信任
- 收集 Alpha Waitlist

当前阶段：

Alpha

不是：

- 企业官网
- 市场营销网站
- 融资展示网站

---

# 3. Target Users

主要用户：

- Founder
- Product Manager
- Software Engineer
- AI Practitioner
- Designer
- Knowledge Worker

共同特点：

- 每天需要大量决策
- 长时间电脑工作
- 希望提高精力与工作效率
- 对 AI 产品接受度高

---

# 4. Success Metrics

Launch Site V1 成功标准：

- 用户知道 Recovery AI 是什么
- 用户理解产品价值
- 用户点击 Join Alpha
- 用户提交 Email

当前唯一 KPI：

Alpha Waitlist Signups

---

# 5. Website Structure

页面采用单页（Single Page）。

顺序如下：

1. Navigation
2. Hero
3. Why Recovery AI
4. How It Works
5. Product Preview
6. Join Alpha
7. Footer

不得增加新的 Section。

---

# 6. Navigation

左侧：

Recovery AI（文字 Logo）

右侧：

- How It Works
- Join Alpha

保持极简。

不要：

Pricing

Blog

About

Careers

Docs

---

# 7. Hero Section

Headline：

Know your recovery.

Own your day.

Subheadline：

Recovery AI helps knowledge workers make better daily decisions through personalized recovery insights.

Primary CTA：

Join Alpha Waitlist

Secondary CTA：

See How It Works

右侧：

展示 Morning Brief UI。

不要：

手机 Mockup

不要：

人物图片

不要：

AI 插画

---

# 8. Why Recovery AI

标题：

Most people start with a calendar.

Start with yourself.

展示三个价值点：

- Understand Your Recovery
- Protect Your Energy
- Make Better Decisions

采用三张 Feature Card。

---

# 9. How It Works

四步流程：

Daily Check-in

↓

Recovery Engine

↓

AI Morning Brief

↓

Better Decisions

每一步：

标题

一句说明

禁止展示技术架构。

禁止出现 OpenAI Logo。

---

# 10. Product Preview

这是网站重点。

展示真实 Morning Brief。

包括：

- Recovery Score
- Today's Summary
- Today's Guidance
- Priority

要求：

尽量与真实产品一致。

---

# 11. Join Alpha

标题：

Be among the first to experience Recovery AI.

说明：

Recovery AI is currently in Alpha.

We're inviting a limited number of early users to help shape the future of the product.

包含：

Email Input

Join Alpha Button

提示：

No spam.

Only meaningful product updates.

---

# 12. Footer

内容：

Recovery AI

Helping people make better daily decisions through recovery intelligence.

Links：

- Privacy Policy
- Terms of Service
- Contact
- X
- LinkedIn

---

# 13. Design Direction

整体风格：

Anthropic × Linear × Recovery AI Notebook Style

关键词：

- Calm
- Trustworthy
- Minimal
- Premium

禁止：

- Cyberpunk
- Neon
- Heavy Gradient
- Glassmorphism
- Medical Style

---

# 14. Color Palette

Primary：

Deep Navy

Background：

Warm White

Secondary：

Warm Gray

Accent：

Recovery Green（少量使用）

---

# 15. Typography

Font：

Inter

Heading：

SemiBold

Body：

Regular

强调：

大留白

短段落

高可读性

---

# 16. Responsive

必须支持：

- Desktop
- Tablet
- Mobile

采用 Mobile Responsive。

---

# 17. Performance Requirements

要求：

- Lighthouse ≥ 90
- 首屏加载快
- 图片优化
- SEO 基础支持

---

# 18. Technical Stack

Framework：

Next.js（App Router）

Styling：

Tailwind CSS

Language：

TypeScript

Deployment：

Vercel

---

# 19. Current Scope

本版本仅包含：

- Landing Page
- Waitlist Email Input（可先使用 Mock 或占位实现）
- Responsive Layout

不包含：

- 用户登录
- Dashboard
- Blog
- Pricing
- CMS
- Analytics Dashboard
- 支付功能

---

# 20. Acceptance Criteria

开发完成后应满足：

- 页面结构与 PRD 一致
- 文案与 WEBSITE_COPY.md 保持一致
- UI 符合 DESIGN_SYSTEM.md
- 支持桌面端与移动端
- CTA 明确可见
- 页面可部署至 Vercel
- 无 TypeScript Error
- Production Build 成功

---

# End of Document
