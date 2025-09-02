# JS Motion Mini-Lab : JS/UI 모션 실험실

인터랙션 구현 역량을 보여주기 위해 제작한 미니 프로젝트입니다.
다섯 가지 데모를 통해 다양한 UI 효과를 직접 구현했습니다.

사이트 보기 : https://hangw1231.github.io/JS-Motion-Mini-Lab/

---

## 📂 프로젝트 구조

JS-Motion-Mini-Lab/
├─ index.html
├─ lab/
│  └─ lab.css
├─ demos/
│  ├─ 01-scroll-reveal.html : 스크롤 진입 시 요소 등장
│  ├─ 02-custom-cursor.html : 커스텀 마우스 커서 + hover 효과
│  ├─ 03-carousel-a11y.html : 접근성 있는 캐러셀 (버튼/도트/키보드/스와이프)
│  ├─ 04-scroll-progress.html : 상단 스크롤 진행도 트랙
│  └─ 05-three-rotating-cube.html : Three.js 회전 큐브 (WebGL)
├─ js/
│  ├─ 01-scroll-reveal.js
│  ├─ 02-custom-cursor.js
│  ├─ 03-carousel-a11y.js
│  ├─ 04-scroll-progress.js
│  └─ 05-three-rotating-cube.js
└─ README.md
---

## 🧩 포함된 데모

1. **Scroll Reveal**
   IntersectionObserver를 활용해 스크롤 시 요소가 부드럽게 등장합니다.

2. **Custom Cursor**
   마우스를 따라다니는 커스텀 포인터, `data-cursor="hover"` 요소에서 강조 효과가 적용됩니다.

3. **Carousel (A11y)**
   키보드·도트·버튼·스와이프 모두 지원하는 접근성 포함 캐러셀입니다.

4. **Scroll Progress Bar**
   페이지 스크롤 진행도를 상단 얇은 트랙으로 표시합니다.

5. **Three.js Rotating Cube**
   기본 장면/카메라/라이트/재질을 설정한 회전 큐브 예제입니다.  
   *(WebGL / Three.js 관심 신호로 활용 가능)*

---

## 🛠️ 기술 스택
- HTML5 / CSS3 / JavaScript
- IntersectionObserver API
- Pointer Events API (드래그/스와이프)
- Three.js (회전 큐브)

---
