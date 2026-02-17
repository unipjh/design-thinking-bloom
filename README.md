# Bloom (프로토타입)

감정 큐레이팅 서비스 "Bloom"의 프론트엔드 프로토타입입니다. 사용자는 푸시 알림 형태의 진입, 챗봇 스타일의 대화로 감정을 입력하고, 입력 결과를 꽃(방사형) 차트와 주간 요약으로 시각화해볼 수 있습니다.

**목표 사용자**: 감정 패턴을 탐색하고 간단한 자기 성찰을 해보고 싶은 사용자

## 빠른 시작

Prerequisites: Node.js (권장 v14+), npm

의존성 설치:

```bash
npm install
```

개발 서버 실행 (프로젝트에는 `dev` 스크립트가 있어 `npm run dev` 사용 가능):

```bash
npm run dev
```

프로덕션 빌드:

```bash
npm run build
```

브라우저에서 열기: http://localhost:3000

## 주요 기능

- 푸시 카드 형태의 초기 화면(`src/components/PushScreen.js`)에서 대화 시작
- 챗봇 스타일의 대화 인터페이스(`src/components/ChatScreen.js`) — 간단한 봇 응답과 메시지 카운트 트래킹
- 오늘의 감정을 시각화하는 `FlowerChart`(`src/components/FlowerChart.js`) 포함된 감정 화면(`src/components/EmotionScreen.js`)
- 7일간의 감정 요약과 간단한 인사이트를 보여주는 주간 화면(`src/components/WeeklyScreen.js`)

## 파일/컴포넌트 설명

- `public/index.html`: SPA 진입점
- `src/index.js`: React 루트 마운트
- `src/index.css`: Tailwind 기반 전역 스타일과 애니메이션 정의
- `src/App.js`: 화면 전환(state)과 더미 데이터(감정, 주간 데이터) 관리
- `src/components/PushScreen.js`: 푸시 알림 스타일의 진입 화면
- `src/components/ChatScreen.js`: 메시지 입력, 간단한 봇 응답, 진행률 바 및 감정 보기 CTA
- `src/components/EmotionScreen.js`: `FlowerChart`를 렌더링하고 해석 텍스트와 CTA 제공
- `src/components/FlowerChart.js`: 감정별 값으로 SVG 기반 방사형(꽃) 차트 렌더링
- `src/components/WeeklyScreen.js`: 주간 데이터 목록, 요약 인사이트, 새로운 대화 시작 버튼

## 개발 노트

- 현재 데이터는 `App.js` 내의 더미 데이터로 관리됩니다. 실제 API 연동 시 `App.js`의 상태 및 데이터 포맷을 교체하세요.
- `package.json`에 `dev` 스크립트(`react-scripts start`)가 추가되어 있습니다. 기존에 `start` 스크립트도 동작합니다.
- 의존성 설치 후 `npm run dev`로 개발 서버를 실행하세요.

## 커밋/배포 팁

로컬에서 변경 사항을 커밋하려면:

```bash
git add .
git commit -m "feat: update README with file descriptions"
```

배포는 일반적으로 `npm run build` 후 정적 호스팅(예: GitHub Pages, Netlify 등)에 업로드합니다.

## 알려진 제약 및 참고사항

- 이 프로토타입은 더미 데이터를 사용하므로 새로고침 시 상태가 초기화됩니다.
- 모바일 뷰포트(375×812 기준)로 UI가 디자인되어 있습니다.

---

필요하시면 이 README에 다음 내용을 추가해드릴게요:
- API 연동 예시 코드
- 컴포넌트 구조 다이어그램
- 로컬 테스트/디버깅 가이드


