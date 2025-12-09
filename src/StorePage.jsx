import './StorePage.css'
import { useNavigate } from 'react-router-dom'

function StorePage() {
  const navigate = useNavigate()

  return (
    <div className="store-page">
      <header className="store-header">
        <div className="store-header-content">
          <button onClick={() => navigate('/')} className="back-button">
            ← 뒤로가기
          </button>
          <div className="store-logo">
            <img src="/yumyum_pickyp_logotype.png" alt="냠냠픽업" />
          </div>
        </div>
      </header>

      <main className="store-main">
        {/* 주문접수 시스템 섹션 */}
        <section className="store-feature-section gray">
          <div className="store-feature-content reverse">
            <div className="store-feature-text">
              <h2 className="store-feature-title">
                편리한 <strong>주문접수 시스템</strong>
              </h2>
              <p className="store-feature-description">
                간단한 클릭으로 주문 접수부터 완료까지<br />
                매출관리도 한번에!
              </p>
            </div>
            <div className="store-feature-image">
              <div className="desktop-screen">
                <img src="/주문접수화면.jpeg" alt="주문접수 시스템" />
              </div>
            </div>
          </div>
        </section>

        {/* 매출관리 섹션 */}
        <section className="store-feature-section">
          <div className="store-feature-content">
            <div className="store-feature-image">
              <div className="desktop-screen">
                <img src="/매출분석1.png" alt="매출관리" />
              </div>
            </div>
            <div className="store-feature-text">
              <h2 className="store-feature-title">
                <strong>매출관리</strong>
              </h2>
              <p className="store-feature-description">
                더 이상 감이 아닌 데이터로 보세요<br /><br />
                가장 잘 팔리는 메뉴부터 시간대별 매출 흐름까지<br />
                사장님이 궁금한 모든 매출 인사이트를 한눈에 보여드립니다.
              </p>
            </div>
          </div>
        </section>

        {/* 입점 문의 섹션 */}
        <section className="store-contact-section">
          <div className="store-contact-content">
            <div className="store-contact-header">
              <img src="/Ceo.png" alt="사장님" className="contact-icon" />
              <h2 className="store-contact-title">입점 문의</h2>
            </div>
            <p className="store-contact-description">
              냠냠픽업과 함께 성장하실 사장님을 모십니다.<br />
              간편한 주문 관리와 매출 증대의 기회를 경험하세요.
            </p>
            <div className="store-contact-benefits">
              <div className="benefit-card">
                <h3>✓ 무료 입점</h3>
                <p>초기 비용 없이 시작</p>
              </div>
              <div className="benefit-card">
                <h3>✓ 간편한 관리</h3>
                <p>직관적인 사장님 앱</p>
              </div>
              <div className="benefit-card">
                <h3>✓ 매출 증대</h3>
                <p>신규 고객 유입</p>
              </div>
            </div>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfW92Mjk0H241vr9hcq4I0T9LE7DCYmFI-VyNnNxg7g1KfDCg/viewform?usp=header" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="store-contact-button"
            >
              입점 신청하기
            </a>
          </div>
        </section>
      </main>

      <footer className="store-footer">
        <div className="store-footer-content">
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

export default StorePage

