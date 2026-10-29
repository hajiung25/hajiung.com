import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import styles from '../styles.css?url'
const title = '하지웅 — 개발자'
const description = '함께 나눈 고민을 실제 변화로 이어가는 개발자, 하지웅의 경력과 프로젝트.'
export const Route = createRootRoute({
  head: () => ({ meta: [{ charSet: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { property: 'og:locale', content: 'ko_KR' }, { property: 'og:url', content: 'https://hajiung.com' }], links: [{ rel: 'stylesheet', href: styles }, { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }, { rel: 'canonical', href: 'https://hajiung.com' }] }),
  component: () => <html lang="ko"><head><HeadContent /></head><body><Outlet /><Scripts /></body></html>,
  notFoundComponent: () => <main className="not-found"><span className="eyebrow">404</span><h1>페이지를 찾을 수 없습니다.</h1><a href="/">처음으로 돌아가기 ↗</a></main>,
})
