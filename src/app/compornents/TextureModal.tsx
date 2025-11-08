import React from "react";
import Image from 'next/image'

interface TextureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TextureModal({ isOpen, onClose}: TextureModalProps) {
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
        <div className="ModalYearWrapper">
        <div className="ModalYearMenu">
          <h2 className="ModalYear" id="2025">2025</h2>
          <a href="#2024" className="ModalYearButton">2024</a>
          <a href="#2023" className="ModalYearButton">2023</a>
          <a href="#2022" className="ModalYearButton">2022</a>
          <a href="#2021" className="ModalYearButton">2021</a>
        </div>
        <article className="WorkArticle">
        <Image
              className='ModalArticleImg'
              src="/images/Texture202501.webp"
              width={1200}
              height={450}
              layout='responsive'
              alt='WorkPicture'/>
          <div className="WorkArticleDetails">
            <p className="ModalWorkTitle">China Eastern <br className="Large" />
             B-7369</p>
            <p className="ModalWorkDetails">China Eastern Airlines B-7369 for PMDG 777-300ER. <br/> Upscaled to 16k from 4k Textures.</p>
            <p className="UsedSoftwareTitle">Used Softwares</p>
            <ul className="UsedSoftwareList">
              <li className="UsedSoftware">Adobe Photoshop 2023 for Repaint</li>
              <li className="UsedSoftware">Blender for check UVs</li>
            </ul>
              <a className="ModalWorkLink" href="https://flightsim.to/file/86499/china-eastern-b-7369" target="_blank" rel="noopener noreferrer">Jump to Link</a>
          </div>
        </article>
        </div>
        <div className="ModalYearWrapper">
        <div className="ModalYearMenu">
          <a href="#2025" className="ModalYearButton">2025</a>
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
            <p className="ModalWorkTitle">Nordwind Airlines <br className="Large" />
             VP-BJG</p>
            <p className="ModalWorkDetails">Nordwind Airlines VP-BJG for FlightFactor B777v2. Upscaled and edited to 8k from original 4k textures. <br/> Modified stickers to Russian language.</p>
            <p className="UsedSoftwareTitle">Used Softwares</p>
            <ul className="UsedSoftwareList">
              <li className="UsedSoftware">Adobe Photoshop 2023 for Repaint</li>
              <li className="UsedSoftware">Blender for check UVs</li>
            </ul>
              <a className="ModalWorkLink" href="https://forums.x-plane.org/index.php?/files/file/92424-nordwind-airlines-vp-bjg-for-flightfactor-b777v2/" target="_blank" rel="noopener noreferrer">Jump to Link</a>
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
            <p className="ModalWorkTitle">Japan Airlines JA707J</p>
            <p className="ModalWorkDetails">Japan Airlines JA707J for FlightFactor B777v2. <br /> Edited 8k textures. <br/> Modified stickers to Japanese. <br /> Cabin textures are still work in progress.</p>
            <p className="UsedSoftwareTitle">Used Softwares</p>
            <ul className="UsedSoftwareList">
              <li className="UsedSoftware">Adobe Photoshop 2023 for Repaint</li>
              <li className="UsedSoftware">Blender for check UVs</li>
            </ul>
              <a className="ModalWorkLink" href="https://forums.x-plane.org/index.php?/files/file/91157-japan-airlines-ja707j-contrail-livery/" target="_blank" rel="noopener noreferrer">Jump to Link</a>
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
            <p className="ModalWorkTitle">Japan Airlines JA701J (OC) </p>
            <p className="ModalWorkDetails">Japan Airlines JA701J for FlightFactor B777v2. <br /> Edited 8k textures. <br/> Modified stickers to Japanese.</p>
            <p className="UsedSoftwareTitle">Used Softwares</p>
            <ul className="UsedSoftwareList">
              <li className="UsedSoftware">Adobe Photoshop 2023 for Repaint</li>
              <li className="UsedSoftware">Blender for check UVs</li>
            </ul>
              <a className="ModalWorkLink" href="https://forums.x-plane.org/index.php?/files/file/91018-japan-airlines-ja701j/" target="_blank" rel="noopener noreferrer">Jump to Link</a>
          </div>
        </article>
        </div>
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
            <p className="ModalWorkTitle">PMDG B777 Panels</p>
            <p className="ModalWorkDetails">PMDG B777 cockpit upscale and modifies. Circuit brakers, panels and liscences etc...</p>
            <p className="UsedSoftwareTitle">Used Softwares</p>
            <ul className="UsedSoftwareList">
              <li className="UsedSoftware">Adobe Photoshop 2023 for Repaint</li>
            </ul>
            <a href="" className="ModalWorkLink">W.I.P.</a>
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
