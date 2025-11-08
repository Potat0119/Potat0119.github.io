import React from "react";
import Image from 'next/image'

interface ModelModalJPProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModelModalJP({ isOpen, onClose}: ModelModalJPProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <div className="ModalHeader">
        <p className="ModalGuide">Works/3D Models</p>
        <button className="modal-close" onClick={onClose}>
          ×CLOSE
        </button>
        </div>
        <h1 className="ModalTitle">3D Models</h1>
        <div className="ModalYearMenu">
          <h2 className="ModalYear" id="2024">2024</h2>
        </div>
        <article className="WorkArticle">
        <Image
              className='ModalArticleImg'
              src="/images/Model2024p2.png" 
              width={1200}
              height={450}
              layout='responsive'
              alt='WorkPicture'/>
          <div className="WorkArticleDetails">
            <p className="ModalWorkTitle">SATCOMアンテナ</p>
            <p className="ModalWorkDetails">Zombie Studio A220 project向けに作成したアンテナ3Dモデル。現在テクスチャを作成中。</p>
            <p className="UsedSoftwareTitle">使用ソフトウェア</p>
            <ul className="UsedSoftwareList">
              <li className="UsedSoftware">Blender</li>
            </ul>
          </div>
        </article>
        <article className="WorkArticle">
        <Image
              className='ModalArticleImg'
              src="/images/Model2024p1.png" 
              width={1200}
              height={450}
              layout='responsive'
              alt='WorkPicture'/>
          <div className="WorkArticleDetails">
            <p className="ModalWorkTitle">氷検出アセンブリ</p>
            <p className="ModalWorkDetails">Zombie Studio A220 project向けに作成したプローブ。</p>
            <p className="UsedSoftwareTitle">使用ソフトウェア</p>
            <ul className="UsedSoftwareList">
              <li className="UsedSoftware">Autodesk Maya（モデリング）</li>
              <li className="UsedSoftware">Blender（UV展開）</li>
            </ul>
          </div>
        </article>
        <article className="WorkArticle">
        <Image
              className='ModalArticleImg'
              src="/images/Model202401.png" 
              width={1200}
              height={450}
              layout='responsive'
              alt='WorkPicture'/>
          <div className="WorkArticleDetails">
            <p className="ModalWorkTitle">AOAセンサー</p>
            <p className="ModalWorkDetails">ToLiss A321 デフォルトでは再現されていないAOAセンサーを作成。</p>
            <p className="UsedSoftwareTitle">使用ソフトウェア</p>
            <ul className="UsedSoftwareList">
            <li className="UsedSoftware">Autodesk Maya（モデリング）</li>
            <li className="UsedSoftware">Blender（UV展開）</li>
            </ul>
              <a className="ModalWorkLink" href="https://forums.x-plane.org/index.php?/files/file/90734-tat-probe-for-flightfactor-b767/" target="_blank" rel="noopener noreferrer">ダウンロード</a>
          </div>
        </article>
        <article className="WorkArticle">
        <Image
              className='ModalArticleImg'
              src="/images/Model202402.png" 
              width={1200}
              height={450}
              layout='responsive'
              alt='WorkPicture'/>
          <div className="WorkArticleDetails">
            <p className="ModalWorkTitle">ドレンマスト</p>
            <p className="ModalWorkDetails">FlightFactor B767 デフォルトでは再現されていないドレンマストを作成。</p>
            <p className="UsedSoftwareTitle">使用ソフトウェア</p>
            <ul className="UsedSoftwareList">
            <li className="UsedSoftware">Autodesk Maya（モデリング）</li>
            <li className="UsedSoftware">Blender（UV展開）</li>
            </ul>
              <p className="ModalWorkLink" >未公開</p>
          </div>
        </article>
        <article className="WorkArticle">
        <Image
              className='ModalArticleImg'
              src="/images/Model202403.png" 
              width={1200}
              height={450}
              layout='responsive'
              alt='WorkPicture'/>
          <div className="WorkArticleDetails">
            <p className="ModalWorkTitle">TATプローブ</p>
            <p className="ModalWorkDetails">初めての3Dモデルプロジェクト。 <br /> FlightFactor B767 デフォルトでは再現されていないTATプローブを作成。</p>
            <p className="UsedSoftwareTitle">使用ソフトウェア</p>
            <ul className="UsedSoftwareList">
            <li className="UsedSoftware">Autodesk Maya（モデリング）</li>
            <li className="UsedSoftware">Blender（UV展開）</li>
            </ul>
              <a className="ModalWorkLink" href="https://forums.x-plane.org/index.php?/files/file/90734-tat-probe-for-flightfactor-b767/" target="_blank" rel="noopener noreferrer">ダウンロード</a>
          </div>
        </article>
      </div>
    </div>
  );
}
