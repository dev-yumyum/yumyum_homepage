import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <h1 className="logo">냠냠픽업</h1>
            <div className="character">
              <img src="/yumyum-1.png" alt="냠냠 캐릭터" />
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
            <h2 className="hero-subtitle">커뮤니케이션</h2>
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
              <div className="mock-phone">
                <div className="phone-screen">
                  <div className="phone-header">
                    <span className="time">9:41</span>
                    <div className="phone-icons">
                      <span className="bell-icon">🔔</span>
                      <span className="cart-icon">🛒</span>
                    </div>
                  </div>
                  <div className="phone-banner">
                    <span className="banner-emoji">😋</span>
                    <p>친구 추천하면 포인트 쿠폰 받으시는 나도 받아!</p>
                  </div>
                  <div className="phone-categories">
                    <div className="category-item">
                      <div className="category-icon">🍔</div>
                      <span>햄버거</span>
                    </div>
                    <div className="category-item">
                      <div className="category-icon">🍕</div>
                      <span>피자</span>
                    </div>
                    <div className="category-item">
                      <div className="category-icon">🍗</div>
                      <span>치킨</span>
                    </div>
                    <div className="category-item">
                      <div className="category-icon">🍰</div>
                      <span>카페</span>
                    </div>
                  </div>
                  <div className="phone-section-title">
                    <h4>내 주변 님과 맛집</h4>
                  </div>
                  <div className="restaurant-card">
                    <img src="data:image/svg+xml,%3Csvg width='180' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='180' height='100' fill='%23FFE8CC'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23FF6B00' font-size='14' font-family='sans-serif'%3E맛있는 음식%3C/text%3E%3C/svg%3E" alt="음식" />
                    <div className="restaurant-info">
                      <h5>맥도날드 용암점</h5>
                      <p>⭐ 4.8 (24) · 0.3km · 무료 · 배달비무료</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-section gray">
          <div className="feature-card reverse">
            <div className="feature-image">
              <div className="mock-phone">
                <div className="phone-screen discount-screen">
                  <div className="phone-header">
                    <span className="time">9:41</span>
                    <div className="phone-icons">
                      <span>📶</span>
                      <span>❤️</span>
                    </div>
                  </div>
                  <div className="store-detail-header">
                    <img src="data:image/svg+xml,%3Csvg width='100%25' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF6B00;stop-opacity:0.8' /%3E%3Cstop offset='100%25' style='stop-color:%23FFC107;stop-opacity:0.8' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='200' fill='url(%23grad)'/%3E%3C/svg%3E" alt="매장" className="store-banner" />
                    <div className="store-title-section">
                      <h3>픽업그린 문전역점</h3>
                      <div className="store-rating">
                        <span>⭐ 5.0 (400)</span>
                        <span className="store-distance">매장정보·원산지</span>
                      </div>
                      <div className="store-meta">
                        <span>픽업시간</span>
                        <span className="meta-value">10-15분 예상</span>
                      </div>
                      <div className="store-meta">
                        <span>즉시할인</span>
                        <span className="meta-value highlight">2,000원</span>
                      </div>
                    </div>
                  </div>
                  <div className="menu-tabs">
                    <button className="menu-tab">인기메뉴</button>
                    <button className="menu-tab active">신제품</button>
                    <button className="menu-tab">Combo</button>
                    <button className="menu-tab">Single</button>
                  </div>
                  <div className="menu-list">
                    <div className="menu-item">
                      <div className="menu-item-info">
                        <h5>멕시칸 치킨 라이스볼</h5>
                        <p className="menu-ingredients">닭안심, 청미채, 치킨텐더비...</p>
                        <div className="menu-price">
                          <span className="price-current">12,500원</span>
                          <span className="price-original">14,500원</span>
                        </div>
                        <div className="menu-rating">👍 98% (141)</div>
                      </div>
                      <div className="menu-item-image">
                        <img src="data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' fill='%23FFE8CC' rx='8'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-size='32'%3E🥗%3C/text%3E%3C/svg%3E" alt="메뉴" />
                        <button className="cart-add-btn">🛒</button>
                      </div>
                    </div>
                    <div className="menu-item">
                      <div className="menu-item-info">
                        <h5>구운닭가슴살 샐러드</h5>
                        <p className="menu-ingredients">양상추, 적양배추, 옥수수...</p>
                        <div className="menu-price">
                          <span className="price-current">12,500원</span>
                          <span className="price-original">14,500원</span>
                        </div>
                        <div className="menu-rating">👍 88% (23)</div>
                      </div>
                      <div className="menu-item-image">
                        <img src="data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' fill='%23FFE8CC' rx='8'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-size='32'%3E🥗%3C/text%3E%3C/svg%3E" alt="메뉴" />
                        <div className="item-count-badge">10</div>
                      </div>
                    </div>
                  </div>
                  <div className="cart-bottom-bar">
                    <div className="cart-info">
                      <span className="cart-badge">10</span>
                      <span className="cart-total">125,000원</span>
                    </div>
                    <button className="view-cart-btn">카트 보기</button>
                  </div>
                </div>
              </div>
            </div>
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
          </div>
        </section>

        <section className="feature-section">
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
              <div className="mock-phone">
                <div className="phone-screen">
                  <div className="phone-header">
                    <span className="time">9:41</span>
                    <div className="phone-icons">
                      <span className="signal">📶</span>
                    </div>
                  </div>
                  <div className="order-status-header">
                    <button className="back-btn">←</button>
                    <h3>주문 현황</h3>
                    <div className="empty-space"></div>
                  </div>
                  <div className="order-status-content">
                    <div className="order-type">포장 주문</div>
                    <div className="order-main-status">
                      <h4>매장에서 주문 확인중</h4>
                      <p className="time-estimate">⏱ 20분 소요 예상</p>
                    </div>
                    <div className="order-progress-steps">
                      <div className="progress-step active">
                        <div className="step-icon">🛒</div>
                        <span className="step-label">주문확인</span>
                        <span className="step-time">12:21</span>
                      </div>
                      <div className="progress-line"></div>
                      <div className="progress-step">
                        <div className="step-icon inactive">👨‍🍳</div>
                        <span className="step-label">준비중</span>
                      </div>
                      <div className="progress-line"></div>
                      <div className="progress-step">
                        <div className="step-icon inactive">📦</div>
                        <span className="step-label">픽업대기</span>
                      </div>
      </div>
                    <button className="cancel-order-btn">
                      <span>주문취소</span>
                      <small>조리를 시작하면 취소할 수 없습니다.</small>
        </button>
                    <div className="store-info">
                      <div className="store-header">
                        <img src="data:image/svg+xml,%3Csvg width='30' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='15' cy='15' r='15' fill='%23FFC107'/%3E%3C/svg%3E" alt="store" />
                        <span>픽업 그린</span>
                        <span className="store-arrow">›</span>
                        <div className="favorite">♡</div>
                      </div>
                      <div className="store-map">
                        <div className="map-placeholder">지도</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <div className="feature-card">
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
            <div className="feature-image">
              <div className="mock-phone">
                <div className="phone-screen">
                  <div className="search-bar">
                    <input type="text" placeholder="🔍 맛집, 메뉴 검색" />
                  </div>
                  <div className="restaurant-list">
                    <div className="restaurant-list-card">
                      <img src="data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='80' height='80' fill='%23FFE8CC' rx='8'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-size='24'%3E🍔%3C/text%3E%3C/svg%3E" alt="햄버거" />
                      <div className="restaurant-list-info">
                        <h5>맥도날드 용암점</h5>
                        <p>⭐ 4.8 (24)</p>
                        <span className="distance">0.3km · 무료</span>
                      </div>
                    </div>
                    <div className="restaurant-list-card">
                      <img src="data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='80' height='80' fill='%23FFE8CC' rx='8'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-size='24'%3E🍕%3C/text%3E%3C/svg%3E" alt="피자" />
                      <div className="restaurant-list-info">
                        <h5>도미노피자</h5>
                        <p>⭐ 4.5 (18)</p>
                        <span className="distance">0.5km · 무료</span>
                      </div>
                    </div>
                    <div className="restaurant-list-card">
                      <img src="data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='80' height='80' fill='%23FFE8CC' rx='8'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-size='24'%3E🍗%3C/text%3E%3C/svg%3E" alt="치킨" />
                      <div className="restaurant-list-info">
                        <h5>BBQ치킨</h5>
                        <p>⭐ 4.7 (32)</p>
                        <span className="distance">0.7km · 무료</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 앱 소개 섹션 */}
        <section id="app" className="app-section">
          <div className="app-content">
            <h2 className="section-title">냠냠픽업 앱</h2>
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
            <h2 className="section-title">입점 문의</h2>
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
            <button className="contact-btn">입점 신청하기</button>
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
