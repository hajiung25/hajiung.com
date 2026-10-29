# hajiung.com

하지웅의 경력과 프로젝트를 담은 개인 웹사이트.

소개부터 프로젝트까지 한 페이지에서 읽을 수 있도록 구성했습니다.
사이트를 만들어가는 과정의 판단과 개선 내용도 함께 기록합니다.

## 기술 스택

TanStack Start · React · TypeScript · Tailwind CSS · Wanted Sans

## 로컬 실행

저장소를 내려받은 후 프로젝트 디렉터리에서 실행합니다.

```sh
pnpm install
pnpm dev
```

브라우저에서 `http://localhost:3000`으로 접속합니다.

## 검증

```sh
pnpm build
pnpm typecheck
```

## 주요 파일

```text
src/
├── components/Portfolio.tsx  # 화면 구성과 소개
├── content/career.ts        # 경력·프로젝트·기술 데이터
├── routes/                 # 라우팅과 페이지 메타데이터
├── router.tsx              # 라우터 설정
└── styles.css              # 반응형·인쇄 스타일
public/                     # 사이트에서 사용하는 정적 파일
```

## 진행 상태

현재 로컬 초안을 다듬고 있습니다. Cloudflare에 배포하고 `hajiung.com`을 연결할 예정입니다.
