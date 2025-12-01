import './App.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const phoneElements = document.querySelectorAll('.mock-phone');
    phoneElements.forEach((el, index) => {
      el.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(el);
    });

    return () => {
      phoneElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <h1 className="logo">냠냠픽업</h1>
            <div className="character">
              <img src="/Yami.png" alt="냠냠 캐릭터" />
            </div>
          </div>
          <nav className="nav">
            <a href="#service">서비스 소개</a>
            <a href="#app">앱 소개</a>
            <a href="#contact">입점 문의</a>
          </nav>
        </div>
      </header>

      <main className="main">
        {/* 히어로 섹션 */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-character">
              <img src="/Yamu.png" alt="냠냠 캐릭터 Yamu" />
            </div>
            <div className="hero-text">
              <h1 className="hero-title">
                빠르게 주문하고<br />
                간편하게 픽업하는<br />
                냠냠픽업
              </h1>
              <p className="hero-description">
                음식 주문의 새로운 기준, 냠냠픽업<br />
                기다림 없이 바로 픽업하는<br />
                스마트한 주문 경험을 시작하세요.
              </p>
            </div>
          </div>
        </section>

        {/* 서비스 소개 섹션 */}
        <section id="service" className="feature-section">
          <div className="feature-card">
            <div className="feature-content">
              <h3 className="feature-title">
                기다림 없이 빠른<br />
                <strong>사전 주문 시스템</strong>
              </h3>
              <p className="feature-description">
                원하는 메뉴를 미리 주문하고, 도착 시간에 맞춰 픽업하세요.<br />
                줄 서지 않고 바로 받아가는 편리함을 경험할 수 있어요.
              </p>
            </div>
            <div className="feature-image">
              <div className="mock-phone app-screenshot">
                <img src="/main.png" alt="사전 주문 시스템 화면" className="app-screen-image" />
              </div>
            </div>
          </div>
        </section>

        <section className="feature-section gray">
          <div className="feature-card">
            <div className="feature-image">
              <div className="mock-phone app-screenshot">
                <img src="/카테고리.png" alt="다양한 맛집 화면" className="app-screen-image" />
              </div>
            </div>
            <div className="feature-content">
              <h3 className="feature-title">
                <strong>다양한 맛집</strong>을<br />
                한곳에서
              </h3>
              <p className="feature-description">
                우리 동네 인기 맛집부터 숨은 맛집까지<br />
                냠냠픽업에서 쉽게 발견하고 주문하세요.<br />
                리뷰와 평점으로 믿을 수 있는 선택을 도와드려요.
              </p>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <div className="feature-card">
            <div className="feature-content">
              <h3 className="feature-title">
                다양한 할인 메뉴 선택으로<br />
                <strong>합리적인 가격</strong>
              </h3>
              <p className="feature-description">
                매일 새로운 할인 메뉴를 만나보세요.<br />
                원하는 메뉴를 더 저렴하게 주문할 수 있어요.<br />
                즉시 할인부터 쿠폰까지 다양한 혜택을 제공합니다.
              </p>
            </div>
            <div className="feature-image">
              <div className="mock-phone app-screenshot">
                <img src="/어플상세페이지.png" alt="할인 메뉴 선택 화면" className="app-screen-image" />
              </div>
            </div>
          </div>
        </section>

        <section className="feature-section gray">
          <div className="feature-card">
            <div className="feature-content">
              <h3 className="feature-title">
                <strong>실시간 조리 현황</strong><br />
                한눈에 확인
              </h3>
              <p className="feature-description">
                주문부터 조리 완료까지 실시간으로 확인하세요.<br />
                정확한 픽업 시간을 알려드려 시간을 아껴드려요.
              </p>
            </div>
            <div className="feature-image">
              <div className="mock-phone app-screenshot">
                <img src="/주문화면이지미1.png" alt="실시간 조리 현황 화면" className="app-screen-image" />
              </div>
            </div>
          </div>
        </section>

        {/* 앱 소개 섹션 */}
        <section id="app" className="app-section">
          <div className="app-content">
            <h2 className="section-title">냠냠픽업 App</h2>
            <div className="app-features">
              <div className="app-feature-item">
                <div className="app-icon">📱</div>
                <h4>간편한 주문</h4>
                <p>몇 번의 터치만으로<br />손쉽게 주문 완료</p>
              </div>
              <div className="app-feature-item">
                <div className="app-icon">⏱️</div>
                <h4>시간 절약</h4>
                <p>기다림 없이<br />바로 픽업</p>
              </div>
              <div className="app-feature-item">
                <div className="app-icon">💰</div>
                <h4>할인 혜택</h4>
                <p>앱 전용<br />특별 할인</p>
              </div>
              <div className="app-feature-item">
                <div className="app-icon">⭐</div>
                <h4>리워드</h4>
                <p>주문할수록<br />쌓이는 포인트</p>
              </div>
            </div>
            <div className="download-buttons">
              <button className="download-btn apple">App Store</button>
              <button className="download-btn google">Google Play</button>
            </div>
          </div>
        </section>

        {/* 입점 문의 섹션 */}
        <section id="contact" className="contact-section">
          <div className="contact-content">
            <h2 className="section-title">
              <img src="/Ceo.png" alt="사장님" className="section-title-icon" />
              입점 문의
            </h2>
            <p className="contact-description">
              냠냠픽업과 함께 성장하실 사장님을 모십니다.<br />
              간편한 주문 관리와 매출 증대의 기회를 경험하세요.
            </p>
            <div className="contact-benefits">
              <div className="benefit-item">
                <h4>✓ 무료 입점</h4>
                <p>초기 비용 없이 시작</p>
              </div>
              <div className="benefit-item">
                <h4>✓ 간편한 관리</h4>
                <p>직관적인 사장님 앱</p>
              </div>
              <div className="benefit-item">
                <h4>✓ 매출 증대</h4>
                <p>신규 고객 유입</p>
              </div>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfW92Mjk0H241vr9hcq4I0T9LE7DCYmFI-VyNnNxg7g1KfDCg/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="contact-btn">입점 신청하기</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3>냠냠픽업</h3>
            <p>© YumYum Pickup. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href="#terms">이용약관</a>
            <a href="#privacy">개인정보처리방침</a>
            <a href="#support">고객센터</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
