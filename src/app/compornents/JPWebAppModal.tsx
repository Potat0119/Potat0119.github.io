import React from "react";
import Image from 'next/image'

interface WebAppModalJPProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WebAppModalJP({ isOpen, onClose}: WebAppModalJPProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className="ModalGuide">Works/WEBアプリケーション</p>
        <button className="modal-close" onClick={onClose}>
          ×CLOSE
        </button>
        <h1 className="ModalTitle">Web Apps</h1>
        <div className="ModalYearMenu">
          <h2 className="ModalYear" id="2024">2024</h2>
        </div>
        <article className="WorkArticle">
        <Image
              className='ModalArticleImg'
              src="/images/Web202401.png" 
              width={1200}
              height={450}
              layout='responsive'
              alt='WorkPicture'/>
          <div className="WorkArticleDetails">
            <p className="ModalWorkTitle">ポートフォリオサイト</p>
            <p className="ModalWorkDetails">HTML/CSS、Next.jsを使用し作成しました。 <br /> 現在はVercelを使用して公開中。 </p>

          </div>
        </article>
        <article className="WorkArticle">
        <Image
              className='ModalArticleImg'
              src="/images/Web202402.png" 
              width={1200}
              height={450}
              layout='responsive'
              alt='WorkPicture'/>
          <div className="WorkArticleDetails">
            <p className="ModalWorkTitle">Sensei Tool </p>
            <p className="ModalWorkDetails">ブルーアーカイブのプレイヤー向け計算サイトです。HTML/CSS、Next.jsを使用し作成しました。現在も作成中。</p>
          </div>
        </article>
      </div>
    </div>
  );
}
