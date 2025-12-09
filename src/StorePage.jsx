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
        {/* 실시간 조리 현황 섹션 */}
        <section className="store-feature-section">
          <div className="store-feature-content">
            <div className="store-feature-image">
              <div className="mock-phone">
                <img src="/yumyum_order.png" alt="실시간 조리 현황" />
              </div>
            </div>
            <div className="store-feature-text">
              <h2 className="store-feature-title">
                <strong>실시간 조리 현황</strong> 한눈에 확인
              </h2>
              <p className="store-feature-description">
                주문부터 조리 완료까지 실시간으로 확인하고<br />
                정확한 픽업 시간을 알려드립니다.
              </p>
            </div>
          </div>
        </section>

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

        {/* CTA 섹션 */}
        <section className="store-cta-section">
          <div className="store-cta-content">
            <h2 className="store-cta-title">지금 바로 시작하세요!</h2>
            <p className="store-cta-description">
              냠냠픽업과 함께 매출을 올려보세요
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfW92Mjk0H241vr9hcq4I0T9LE7DCYmFI-VyNnNxg7g1KfDCg/viewform?usp=header" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="store-cta-button-large"
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

