import React from "react";
import Image from 'next/image'

interface TextureModalJPProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TextureModalJP({ isOpen, onClose}: TextureModalJPProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <div className="ModalHeader">
        <p className="ModalGuide">Works/Textures</p>
        <button className="modal-close" onClick={onClose}>
          ×CLOSE
        </button>
        </div>
        <h1 className="ModalTitle">Textures</h1>
        <div className="ModalYearMenu">
          <h2 className="ModalYear" id="2024">2024</h2>
          <a href="#2023" className="ModalYearButton">2023</a>
          <a href="#2022" className="ModalYearButton">2022</a>
          <a href="#2021" className="ModalYearButton">2021</a>
        </div>
        <article className="WorkArticle">
        <Image
              className='ModalArticleImg'
              src="/images/Texture202401.png" 
              width={1200}
              height={450}
              layout='responsive'
              alt='WorkPicture'/>
          <div className="WorkArticleDetails">
            <p className="ModalWorkTitle">Nordwind VP-BJG</p>
            <p className="ModalWorkDetails">FlightFactorB777v2向けのリペイント。デフォルトの4k解像度から8k解像度へのアップスケール、各表示類をロシア語に。</p>
            <p className="UsedSoftwareTitle">使用ソフトウェア</p>
            <ul className="UsedSoftwareList">
              <li className="UsedSoftware">Adobe Photoshop 2023（リペイント）</li>
              <li className="UsedSoftware">Blender（UV確認）</li>
            </ul>
              <a className="ModalWorkLink" href="https://forums.x-plane.org/index.php?/files/file/92424-nordwind-airlines-vp-bjg-for-flightfactor-b777v2/" target="_blank" rel="noopener noreferrer">ダウンロード</a>
          </div>
        </article>

        <article className="WorkArticle">
        <Image
              className='ModalArticleImg'
              src="/images/Texture202402.png" 
              width={1200}
              height={450}
              layout='responsive'
              alt='WorkPicture'/>
          <div className="WorkArticleDetails">
            <p className="ModalWorkTitle">日本航空 JA707J</p>
            <p className="ModalWorkDetails">FlightFactorB777v2向けのリペイント。デフォルトの4k解像度から8k解像度へのアップスケール、各表示類を日本語に。<br /> 機内は現在作成中。</p>
            <p className="UsedSoftwareTitle">使用ソフトウェア</p>
            <ul className="UsedSoftwareList">
              <li className="UsedSoftware">Adobe Photoshop 2023（リペイント）</li>
              <li className="UsedSoftware">Blender（UV確認）</li>
            </ul>
              <a className="ModalWorkLink" href="https://forums.x-plane.org/index.php?/files/file/91157-japan-airlines-ja707j-contrail-livery/" target="_blank" rel="noopener noreferrer">ダウンロード</a>
          </div>
        </article>

        <article className="WorkArticle">
        <Image
              className='ModalArticleImg'
              src="/images/Texture202403.png" 
              width={1200}
              height={450}
              layout='responsive'
              alt='WorkPicture'/>
          <div className="WorkArticleDetails">
            <p className="ModalWorkTitle">日本航空 JA701J 旧塗装 </p>
            <p className="ModalWorkDetails">FlightFactorB777v2向けのリペイント。デフォルトの4k解像度から8k解像度へのアップスケール、各表示類を日本語に。</p>
            <p className="UsedSoftwareTitle">使用ソフトウェア</p>
            <ul className="UsedSoftwareList">
              <li className="UsedSoftware">Adobe Photoshop 2023（リペイント）</li>
              <li className="UsedSoftware">Blender（UV確認）</li>
            </ul>
              <a className="ModalWorkLink" href="https://forums.x-plane.org/index.php?/files/file/91018-japan-airlines-ja701j/" target="_blank" rel="noopener noreferrer">ダウンロード</a>
          </div>
        </article>
        <div className="ModalYearMenu">
          <a href="#2024" className="ModalYearButton">2024</a>
          <h2 className="ModalYear" id="2023">2023</h2>
          <a href="#2022" className="ModalYearButton">2022</a>
          <a href="#2021" className="ModalYearButton">2021</a>
        </div>
        <article className="WorkArticle">
        <Image
              className='ModalArticleImg'
              src="/images/Texture202301.png" 
              width={1200}
              height={450}
              layout='responsive'
              alt='WorkPicture'/>
          <div className="WorkArticleDetails">
            <p className="ModalWorkTitle">PMDG B777 <br /> コクピットパネル</p>
            <p className="ModalWorkDetails">PMDG B777のコクピットのパネルの高解像度化、サーキットブレーカの詳細化、各ライセンス書類の各国対応。</p>
            <p className="UsedSoftwareTitle">使用ソフトウェア</p>
            <ul className="UsedSoftwareList">
              <li className="UsedSoftware">Adobe Photoshop 2023</li>
            </ul>
            <a href="" className="ModalWorkLink">非公開</a>
          </div>
        </article>
        <div className="ModalYearMenu">
          <a href="#2024" className="ModalYearButton">2024</a>
          <a href="#2023" className="ModalYearButton">2023</a>
          <h2 className="ModalYear" id="2022">2022</h2>
          <a href="#2021" className="ModalYearButton">2021</a>
        </div>
      </div>
    </div>
  );
}
