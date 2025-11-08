import React from "react";
import Image from 'next/image'

interface ModelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModelModal({ isOpen, onClose}: ModelModalProps) {
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
        <div className="ModalYearWrapper">
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
            <p className="ModalWorkTitle">Ka Band SATCOM Antenna</p>
            <p className="ModalWorkDetails">Modeled and textured SATCOM Antenna for Zombie Studio A220 project. Still W.I.P. Currently textureing.</p>
            <p className="UsedSoftwareTitle">Used Softwares</p>
            <ul className="UsedSoftwareList">
              <li className="UsedSoftware">Blender for Modelling</li>
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
            <p className="ModalWorkTitle">Ice Detector</p>
            <p className="ModalWorkDetails">Modeled and textured Ice detector for Zombie Studio A220 project.</p>
            <p className="UsedSoftwareTitle">Used Softwares</p>
            <ul className="UsedSoftwareList">
              <li className="UsedSoftware">Autodesk Maya for modelling</li>
              <li className="UsedSoftware">Blender for UVs</li>
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
            <p className="ModalWorkTitle">AOA Sensors</p>
            <p className="ModalWorkDetails">Modeled and textured missing AOA sensors by default on ToLiss A321.</p>
            <p className="UsedSoftwareTitle">Used Softwares</p>
            <ul className="UsedSoftwareList">
              <li className="UsedSoftware">Autodesk Maya for modelling</li>
              <li className="UsedSoftware">Blender for UVs</li>
            </ul>
              <a className="ModalWorkLink" href="https://forums.x-plane.org/index.php?/files/file/90734-tat-probe-for-flightfactor-b767/" target="_blank" rel="noopener noreferrer">Jump to Link</a>
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
            <p className="ModalWorkTitle">Drain masts</p>
            <p className="ModalWorkDetails">Modeled and textured missing drain masts by default on FlightFactor B767.</p>
            <p className="UsedSoftwareTitle">Used Softwares</p>
            <ul className="UsedSoftwareList">
              <li className="UsedSoftware">Autodesk Maya for modelling</li>
              <li className="UsedSoftware">Blender for UVs</li>
            </ul>
              <p className="ModalWorkLink" >Not available for download</p>
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
            <p className="ModalWorkTitle">TAT Probes</p>
            <p className="ModalWorkDetails">My 1st 3DModel project. <br /> Modeled and textured missing TAT Probe by default on FlightFactor B767.</p>
            <p className="UsedSoftwareTitle">Used Softwares</p>
            <ul className="UsedSoftwareList">
              <li className="UsedSoftware">Autodesk Maya for modelling</li>
              <li className="UsedSoftware">Blender for UVs</li>
            </ul>
              <a className="ModalWorkLink" href="https://forums.x-plane.org/index.php?/files/file/90734-tat-probe-for-flightfactor-b767/" target="_blank" rel="noopener noreferrer">Jump to Link</a>
          </div>
        </article>
        </div>
      </div>
    </div>
  );
}
