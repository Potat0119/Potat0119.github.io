import Image from 'next/image'
import ProgressBar from './Progress'
import TextureModalJP from './JPTextureModal';
import ModelModalJP from './JPModelModal';
import WebAppModalJP from './JPWebAppModal';
import { useState } from 'react';

export default function HomeJP () {
  const [isModalOpen, setIsModalJPOpen] = useState(false);
  const [isModelOpen, setIsModelJPOpen] = useState(false);
  const [isWebAppOpen, setIsWebAppJPOpen] = useState(false);
  
  const TextureJPOpen = () => {
    setIsModalJPOpen(true);};
  
    const TextureJPClose = () => {
      setIsModalJPOpen(false);};

  const ModelJPOpen = () => {
    setIsModelJPOpen(true);};
  
    const ModelJPClose = () => {
      setIsModelJPOpen(false);};

  const WebAppJPOpen = () => {
    setIsWebAppJPOpen(true);};
  
    const WebAppJPClose = () => {
      setIsWebAppJPOpen(false);};

    return (
      <div className='LoadedMain'>
        <div className="picturetitle">
        <Image src="/images/homepic.png"
        width={1920}
        height={822}
        layout='responsive'
        alt="FF B767"/>
        <div className="overlay"></div>
          <p className="HomeTitle">Hi! I&apos;m REO</p>
          <p className="worktitle">3Dモデルやテクスチャの作成、<br /> Webアプリケーションの作成を行っています</p>
        </div>
        <div className="CategoryWrapper">
          <p className="DivTitle" id='works'>WORKS</p>
          <div className="WorkTileContainer">
            <button className="WorkTile" onClick={TextureJPOpen}>
              <Image
              className='WorkTileImg'
              src="/images/Tile01.png"
              width={800}
              height={600}
              layout='responsive'
              alt='WorkPicture'/>
              <p className="WorkTileTitle">Textures</p>
            </button>
            <button className="WorkTile" onClick={ModelJPOpen}>
              <Image
              className='WorkTileImg'
              src="/images/Tile02.png"
              width={800}
              height={600}
              layout='responsive'
              alt='WorkPicture'/>
              <p className="WorkTileTitle">3D MODELS</p>
            </button>
            <button className="WorkTile" onClick={WebAppJPOpen}>
              <Image
              className='WorkTileImg'
              src="/images/Tile03.png"
              width={800}
              height={600}
              layout='responsive'
              alt='WorkPicture'/>
              <p className="WorkTileTitle">Web Design / Apps</p>
            </button>
          </div>
        </div>
        <div className="CategoryWrapper">
                  <p className="DivTitle" id='skills'>SKILLS</p>
              <div className="SkillsWrapper">
                  <div className="SkillsCategoryWrapper">
                    <p className="DivSecondTitle">Creative</p>
                    <p className="DivSectionTitle">Adobe Photoshop</p>
                    <ProgressBar value={90} />
                    <p className="DivSectionTitle">Blender</p>
                    <ProgressBar value={30}/>
                    <p className="DivSectionTitle">Autodesk Maya</p>
                    <ProgressBar value={40}/>
                  </div>
                  <div className="SkillsCategoryWrapper">
                  <p className="DivSecondTitle">Develop</p>
                    <p className="DivSectionTitle">HTML/CSS</p>
                    <ProgressBar value={70}/>
                    <p className="DivSectionTitle">JavaScript</p>
                    <ProgressBar value={40}/>
                    <p className="DivSectionTitle">Next.js</p>
                    <ProgressBar value={60}/>


                </div>
              </div>
            
        </div>
        <div className="CategoryWrapper">
              <p className="DivTitle" id='about'>ABOUT</p>
              <p className="DivSecondTitle">吉岡 伶旺 <br />2003年生まれ。</p>
              <p className="Divbodytext">中学生のときにフライトシミュレーターに興味を持ち、リペイントを始める。「自然な美しさで現実により近く。」をモットーにテクスチャーを作成している。2024年からはモデリングも始め、よりフライトシミュレーターを現実に近づけるため日々努力している。</p>
              <p className="Divbodytext">Zombie Studio A220 Projectでは、静的オブジェクトの作成を担当している。</p>
              <p className="Divbodytext">2024年にはZeroPlus Webアプリケーションコースを卒業し、Webアプリケーションの作成も行っている。</p>
        </div>
        <TextureModalJP isOpen={isModalOpen} onClose={TextureJPClose}></TextureModalJP>
        <ModelModalJP isOpen={isModelOpen} onClose={ModelJPClose}></ModelModalJP>
        <WebAppModalJP isOpen={isWebAppOpen} onClose={WebAppJPClose}></WebAppModalJP>
      </div>
    )
  }

  