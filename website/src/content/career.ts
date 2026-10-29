export type Project = { name: string; description: string; points: string[]; stack: string[] }
export type Career = { company: string; period: string; role: string; summary: string; projects: Project[] }
export const careers: Career[] = [
  { company: '청담네트웍스', period: '2025.08 — 현재', role: '개발팀 · S/W', summary: '커머스와 통신 서비스의 고객 경험부터 파트너·운영 시스템까지 함께 다루고 있습니다.', projects: [
    { name: '우주몰', description: '가전 구독 커머스 · 고객 구매 서비스와 관리자·파트너 시스템', points: ['구매 조건, 제휴카드, 프로모션이 서로 영향을 주는 가격·혜택 정책을 모델링하고, 조건 변경이 상품 비교와 구매 흐름에 일관되게 반영되도록 설계했습니다.', '상품 데이터를 D1으로 연결하고 공통 UI를 정비해, 고객 화면과 운영 환경을 함께 개선했습니다.', 'SSR·구조화 데이터·상품 피드를 정비하고, 유입 이후의 구매 경험까지 서비스 전반을 다뤘습니다.'], stack: ['TanStack Start', 'Cloudflare Workers', 'D1 · R2', 'Drizzle ORM'] },
    { name: '시세임당 · 모두의시세', description: '휴대폰 시세 비교 플랫폼 · 고객 웹·앱과 판매자 서비스', points: ['고객의 시세 탐색과 상담, 판매자의 매장·상품 관리를 연결하는 웹 서비스를 구축하고 고도화했습니다.', '판매자 서비스를 TanStack Start 기반으로 전환하며 SSR, 인증, 공통 레이아웃과 API 연동 방식을 정비했습니다.', '앱과 웹 사이의 세션 유지, 결제 화면 전환, 푸시 알림과 딥링크를 연결해 사용 흐름을 이어갔습니다.'], stack: ['TanStack Start', 'Flutter', 'TanStack Query', 'Cloudflare'] },
    { name: '라이브커머스 채팅 자동응답', description: '실시간 채팅 수집 · 반복 문의 대응', points: ['네이버 쇼핑라이브·소스라이브 등 여러 플랫폼의 실시간 채팅을 수집하고 자동으로 응답하는 브라우저 확장 프로그램을 구축했습니다.', '방송별 탭과 채팅 흐름을 다루며, 반복되는 문의에 대응하는 운영 작업을 줄였습니다.'], stack: ['Chrome Extension', '실시간 메시지 처리'] },
  ] },
  { company: '케어나인', period: '2024.01 — 2025.04', role: '개발팀 · 주임', summary: '간병인을 찾는 고객과 매칭을 관리하는 운영팀의 흐름을 웹·앱과 운영 도구로 연결했습니다.', projects: [
    { name: '간병인 매칭 서비스', description: '케어나인 모바일 앱 · 예약·결제·알림', points: ['Next.js와 Expo 기반 웹·앱을 개발하고, WebView 메시지 통신을 공통 훅과 유틸리티로 정리해 화면 간 데이터 동기화를 개선했습니다.', '환자 등록부터 공고 등록, 결제로 이어지는 흐름을 상태에 따라 구성하고 소셜 로그인과 푸시·인증 알림을 연동했습니다.', '고령층 사용자의 행동 데이터를 참고해 버튼 크기, 대비와 터치 영역을 조정하고 주요 기능의 접근성을 개선했습니다.'], stack: ['Next.js', 'Expo', 'Supabase', 'PostgreSQL'] },
    { name: 'CS 운영 시스템', description: '간병 매칭 관리 · 결제·정산 · 운영 자동화', points: ['운영팀 피드백을 바탕으로 매칭 현황, 검색·필터와 결제·정산 관리 기능을 구성했습니다.', 'Toss 결제 Webhook의 상태 변화와 오류 재처리 흐름을 연결하고, 외부 인증·알림 API를 공통 인터페이스로 정리했습니다.', '데이터베이스 인덱스와 서버 렌더링·캐시를 조정하고, 반복되는 테이블과 필터 UI를 공통화했습니다.'], stack: ['Next.js', 'NestJS', 'Supabase', 'AWS'] },
    { name: '서비스 랜딩페이지', description: '서비스 소개 · 검색 유입과 전환 흐름', points: ['검색 메타데이터와 사이트맵을 구성하고, GA 유입·행동 데이터를 바탕으로 페이지 구조와 사용자 동선을 개선했습니다.'], stack: ['Next.js', 'Google Analytics', 'SEO'] },
  ] },
  { company: '비엔시스템', period: '2023.07 — 2024.01', role: '개발팀 · 사원', summary: '콘텐츠 제작과 재고 운영의 반복적인 과정을 서비스로 구현했습니다.', projects: [
    { name: 'AI 심리테스트 제작 플랫폼', description: 'ChatGPT API를 활용한 질문·결과 생성과 관리', points: ['사용자의 입력과 이전 응답을 연결해 질문을 생성하는 흐름을 설계하고, 테스트 템플릿과 결과를 관리하는 기능을 구현했습니다.', '응답 길이와 API 호출 조건을 조정해 생성 과정의 비용과 응답 시간을 개선했습니다.'], stack: ['PHP', 'OpenAI API'] },
    { name: '전자제품 대여·재고 관리', description: '예약부터 출고·반납까지 이어지는 운영 시스템', points: ['예약 상태와 캘린더를 연결하고, QR 코드 스캔으로 상품 반납과 재고 상태 갱신을 처리하도록 구현했습니다.', '예약·매출 현황을 시각화해 운영팀이 일별·월별 흐름을 확인할 수 있도록 구성했습니다.'], stack: ['Next.js', 'Chart.js', 'QR Code'] },
  ] },
]
export const skillGroups = [
  { label: '제품 개발', values: ['TanStack Start', 'Next.js', 'Hono', 'Drizzle ORM', 'PostgreSQL', 'TanStack Query', 'Zustand'] },
  { label: '인프라 · 품질', values: ['Cloudflare Workers · D1 · R2', 'AWS Lightsail · S3', 'Docker', 'Playwright', 'Vitest'] },
  { label: '함께 일하는 도구', values: ['Codex', 'Claude Code', 'Linear', 'GitHub', 'Slack'] },
]
export const github = 'https://github.com/hajiung25'
export const careerDocument = 'https://drive.google.com/file/d/1oszR-4kppU2J5-XLho-20NHK9nUKT6Vg/view'
