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
        <div className="ModalHeader">
        <p className="ModalGuide">Works/Web Design and Web Apps</p>
        <button className="modal-close" onClick={onClose}>
          ×CLOSE
        </button>
        </div>
        <h1 className="ModalTitle">Web Apps</h1>
        <div className="ModalYearWrapper">
        <div className="ModalYearMenu">
          <h2 className="ModalYear" id="2025">2025</h2>
        </div>
        <article className="WorkArticle">
          <Image
              className='ModalArticleImg'
              src="/images/Web202501.webp"
              width={1200}
              height={450}
              layout='responsive'
              alt='WorkPicture'/>
          <div className="WorkArticleDetails">
            <p className="ModalWorkTitle">Eメールアドレス検索Webアプリ</p>
            <p className="ModalWorkDetails">社内向けメールアドレス検索サイトを作成しました。Next.JSで作成し、Ubuntuサーバーで公開。
              <br />ログインを実装し、管理者はユーザーの追加、編集、削除が可能。一度に多くの登録をするためのCSVの書き出し、取り込みが可能。
            </p>
          </div>
        </article>
        </div>
        <div className="ModalYearWrapper">
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
    </div>
  );
}
