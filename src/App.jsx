import './App.css'
import { useEffect, useState } from 'react'

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
              <img src="/Yamu.png" alt="냠냠 캐릭터 Yamu" />
            </div>
            <div className="hero-text">
              <h1 className="hero-title">빠르게 주문하고 간편하게 픽업하는</h1>
              <p className="hero-subtitle">냠냠픽업</p>
              <p className="hero-description">음식 주문의 새로운 기준, 기다림 없이 바로 픽업하세요.</p>
              <div className="app-download-buttons">
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="download-btn">
                  <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/ko-kr?size=250x83&amp;releaseDate=1301875200" alt="Download on the App Store" />
                </a>
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="download-btn">
                  <img src="https://play.google.com/intl/ko/badges/static/images/badges/ko_badge_web_generic.png" alt="Google Play에서 다운로드" />
                </a>
              </div>
            </div>
          </div>
          <button className="scroll-down-btn" onClick={scrollToNext} aria-label="다음 섹션으로">
            <span className="arrow-down">↓</span>
          </button>
        </section>

        {/* 서비스 소개 섹션 */}
        <section id="service" className="feature-section">
          <div className="feature-card">
            <div className="feature-content">
              <h3 className="feature-title">
                기다림 없이 빠른 <strong>사전 주문 시스템</strong>
              </h3>
              <p className="feature-description">
                원하는 메뉴를 미리 주문하고 도착 시간에 맞춰 픽업하세요.
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
                <strong>다양한 맛집</strong>을 한곳에서
              </h3>
              <p className="feature-description">
                우리 동네 인기 맛집부터 숨은 맛집까지, 리뷰와 평점으로 쉽게 선택하세요.
              </p>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <div className="feature-card">
            <div className="feature-content">
              <h3 className="feature-title">
                다양한 할인 메뉴로 <strong>합리적인 가격</strong>
              </h3>
              <p className="feature-description">
                매일 새로운 할인 메뉴와 즉시 할인부터 쿠폰까지 다양한 혜택을 받으세요.
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
                <strong>실시간 조리 현황</strong> 한눈에 확인
              </h3>
              <p className="feature-description">
                주문부터 조리 완료까지 실시간으로 확인하고 정확한 픽업 시간을 알려드립니다.
              </p>
            </div>
            <div className="feature-image">
              <div className="mock-phone app-screenshot">
                <img src="/주문화면이지미1.png" alt="실시간 조리 현황 화면" className="app-screen-image" />
              </div>
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
            <div className="app-download-buttons">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="download-btn">
                <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/ko-kr?size=250x83&amp;releaseDate=1301875200" alt="Download on the App Store" />
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="download-btn">
                <img src="https://play.google.com/intl/ko/badges/static/images/badges/ko_badge_web_generic.png" alt="Google Play에서 다운로드" />
              </a>
            </div>
          </div>
          <button className="scroll-down-btn scroll-down-light" onClick={scrollToNext} aria-label="다음 섹션으로">
            <span className="arrow-down">↓</span>
          </button>
        </section>

        {/* 입점 문의 섹션 */}
        <section id="contact" className="contact-section">
          <div className="contact-content">
            <h2 className="section-title">
              <img src="/Ceo.png" alt="사장님" className="section-title-icon" />
              입점 문의
            </h2>
            <p className="contact-description">
              냠냠픽업과 함께 성장하실<br />
              사장님을 모십니다.<br />
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
