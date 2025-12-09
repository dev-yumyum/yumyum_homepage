import './App.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function App() {
  const [activeSection, setActiveSection] = useState('hero');

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

    const featureImages = document.querySelectorAll('.feature-image');
    featureImages.forEach((el) => {
      observer.observe(el);
    });

    // 섹션 활성화 감지
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      phoneElements.forEach(el => observer.unobserve(el));
      featureImages.forEach(el => observer.unobserve(el));
      sections.forEach((section) => sectionObserver.unobserve(section));
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNext = () => {
    const sections = ['hero', 'service', 'app', 'contact'];
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex < sections.length - 1) {
      scrollToSection(sections[currentIndex + 1]);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <h1 className="logo">
              <img src="/yumyum_pickyp_logotype.png" alt="냠냠픽업" />
            </h1>
            <div className="character">
              <img src="/냠냠케릭터.png" alt="냠냠 캐릭터" />
            </div>
          </div>
          <nav className="nav">
            <a href="#service">서비스 소개</a>
            <a href="#app">앱 소개</a>
            <a href="#contact">입점 문의</a>
          </nav>
        </div>
      </header>

      {/* 우측 네비게이션 바 */}
      <nav className="side-nav">
        <button 
          className={`side-nav-dot ${activeSection === 'hero' ? 'active' : ''}`}
          onClick={() => scrollToSection('hero')}
          aria-label="홈으로 이동"
        />
        <button 
          className={`side-nav-dot ${activeSection === 'service' ? 'active' : ''}`}
          onClick={() => scrollToSection('service')}
          aria-label="서비스 소개로 이동"
        />
        <button 
          className={`side-nav-dot ${activeSection === 'app' ? 'active' : ''}`}
          onClick={() => scrollToSection('app')}
          aria-label="앱 소개로 이동"
        />
        <button 
          className={`side-nav-dot ${activeSection === 'contact' ? 'active' : ''}`}
          onClick={() => scrollToSection('contact')}
          aria-label="입점 문의로 이동"
        />
      </nav>

      <main className="main">
        {/* 히어로 섹션 */}
        <section id="hero" className="hero">
          <div className="hero-content">
            <div className="hero-character">
              <img src="/user.png" alt="냠냠 캐릭터" />
            </div>
            <div className="hero-text">
              <h1 className="hero-title">빠르게 주문하고 간편하게 픽업하는</h1>
              <p className="hero-subtitle">냠냠픽업</p>
              <p className="hero-description">음식 주문의 새로운 기준,<br />기다림 없이 바로 픽업하세요.</p>
            </div>
          </div>
          <button className="scroll-down-btn" onClick={scrollToNext} aria-label="다음 섹션으로">
            <span className="arrow-down">↓</span>
          </button>
        </section>

        {/* 사장님 입점문의 섹션 */}
        <section className="feature-section store-inquiry-section">
          <div className="feature-card">
            <div className="feature-image">
              <div className="store-inquiry-image">
                <img src="/store.png" alt="냠냠픽업 상점 입점" />
              </div>
            </div>
            <div className="feature-content">
              <h3 className="feature-title">
                <strong>사장님 입점문의 하기</strong>
              </h3>
              <p className="feature-description">
                냠냠픽업과 함께 성장하실 사장님을 모십니다.<br />
                간편한 주문 관리와 매출 증대의 기회를 경험하세요.
              </p>
              <Link to="/store" className="store-inquiry-button">
                입점 상세보기 →
              </Link>
            </div>
          </div>
        </section>

        {/* 서비스 소개 섹션 */}
        <section id="service" className="feature-section">
          <div className="feature-card">
            <div className="feature-content">
              <h3 className="feature-title">
                기다림없이 빠른!<br /><br /><strong>사전 주문 서비스</strong>
              </h3>
              <p className="feature-description">
                원하는 메뉴를 미리 주문하고<br />도착 시간에 맞춰 픽업하세요.
              </p>
            </div>
            <div className="feature-image">
              <div className="mock-phone app-screenshot">
                <img src="/yumyum_main.png" alt="사전 주문 시스템 화면" className="app-screen-image" />
              </div>
            </div>
          </div>
        </section>

        <section className="feature-section gray">
          <div className="feature-card">
            <div className="feature-image">
              <div className="mock-phone app-screenshot">
                <img src="/Category All.png" alt="다양한 맛집 화면" className="app-screen-image" />
              </div>
            </div>
            <div className="feature-content">
              <h3 className="feature-title">
                <strong>다양한 맛집</strong>을 한곳에서
              </h3>
              <p className="feature-description">
                우리 동네 인기 맛집부터 숨은 맛집까지,<br />리뷰와 평점으로 쉽게 선택하세요.
              </p>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <div className="feature-card">
            <div className="feature-content">
              <h3 className="feature-title">
                다양한 할인 메뉴로<br /><strong>합리적인 가격</strong>
              </h3>
              <p className="feature-description">
                매일 새로운 할인 메뉴와<br />즉시 할인부터 쿠폰까지 다양한 혜택을 받으세요.
              </p>
            </div>
            <div className="feature-image">
              <div className="mock-phone app-screenshot">
                <img src="/yumyum_menu.png" alt="할인 메뉴 선택 화면" className="app-screen-image" />
              </div>
            </div>
          </div>
        </section>

        <section className="feature-section gray">
          <div className="feature-card">
            <div className="feature-image">
              <div className="mock-phone app-screenshot">
                <img src="/yumyum_order.png" alt="실시간 조리 현황 화면" className="app-screen-image" />
              </div>
            </div>
            <div className="feature-content">
              <h3 className="feature-title">
                <strong>실시간 조리 현황</strong> 한눈에 확인
              </h3>
              <p className="feature-description">
                주문부터 조리 완료까지 실시간으로 확인하고<br />정확한 픽업 시간을 알려드립니다.
              </p>
            </div>
          </div>
          <button className="scroll-down-btn" onClick={scrollToNext} aria-label="다음 섹션으로">
            <span className="arrow-down">↓</span>
          </button>
        </section>

        {/* 앱 소개 섹션 */}
        <section id="app" className="app-section">
          <div className="app-content">
            <h2 className="section-title">냠냠픽업 App</h2>
            <div className="app-features">
              <div className="app-feature-item">
                <div className="app-icon"></div>
                <h4>간편한 주문</h4>
                <p>몇 번의 터치만으로<br />손쉽게 주문 완료</p>
              </div>
              <div className="app-feature-item">
                <div className="app-icon"></div>
                <h4>시간 절약</h4>
                <p>기다림 없이<br />바로 픽업</p>
              </div>
              <div className="app-feature-item">
                <div className="app-icon"></div>
                <h4>할인 혜택</h4>
                <p>앱 전용<br />특별 할인</p>
              </div>
              <div className="app-feature-item">
                <div className="app-icon"></div>
                <h4>리워드</h4>
                <p>주문할수록<br />쌓이는 포인트</p>
              </div>
            </div>
          </div>
          <button className="scroll-down-btn scroll-down-light" onClick={scrollToNext} aria-label="다음 섹션으로">
            <span className="arrow-down">↓</span>
          </button>
        </section>

        {/* 앱 다운로드 섹션 */}
        <section id="contact" className="contact-section">
          <div className="contact-content">
            <h2 className="section-title">
              앱 다운로드
            </h2>
            <p className="contact-description">
              iOS와 Android 모두 지원합니다.<br />
              지금 다운로드하고 주문·픽업을 더 편하게 이용하세요.
            </p>
            <div className="contact-benefits">
              <div className="benefit-item">
                <h4>✓ iOS / Android</h4>
                <p>양 플랫폼 완벽 지원</p>
              </div>
              <div className="benefit-item">
                <h4>✓ 실시간 알림</h4>
                <p>주문/준비/픽업 푸시 알림</p>
              </div>
              <div className="benefit-item">
                <h4>✓ 간편한 주문</h4>
                <p>예약 주문·즉시 픽업</p>
              </div>
            </div>
            <div className="app-download-buttons contact-download">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn play"
              >
                <span className="download-btn-text">Google Play에서 받기</span>
              </a>
              <a
                href="https://apps.apple.com/kr/app"
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn app"
              >
                <span className="download-btn-text">App Store에서 받기</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-logo">
              <img src="/yumyum_pickyp_logotype.png" alt="냠냠픽업" />
            </h3>
            <p>© (주)우공이산. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href="#terms">이용약관</a>
            <a href="/privacy.html" target="_blank" rel="noopener noreferrer">개인정보처리방침</a>
            <a href="#support">고객센터</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
