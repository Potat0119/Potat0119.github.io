import React from "react";
import Image from 'next/image'

interface WebAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WebAppModal({ isOpen, onClose}: WebAppModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className="ModalGuide">Works/Web Design and Web Apps</p>
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
            <p className="ModalWorkTitle">This Portfolio Site</p>
            <p className="ModalWorkDetails">Coded and designed this portfolio site with HTML/CSS and Next.js. <br /> Currently published with Vercel. </p>

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
            <p className="ModalWorkDetails">Coded and designed Fan site for Blue Archive with HTML/CSS and Next.js.</p>
          </div>
        </article>
      </div>
    </div>
  );
}
