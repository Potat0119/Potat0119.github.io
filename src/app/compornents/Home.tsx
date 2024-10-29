import Image from 'next/image'
import ProgressBar from './Progress'
import TextureModal from './TextureModal';
import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const TextureOpen = () => {
    setIsModalOpen(true);};
  
    const TextureClose = () => {
      setIsModalOpen(false);};

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
          <p className="worktitle">I&apos;M A <br/> TEXTURE AND 3D MODEL ARTIST<br/>FRONTEND ENGINEER<br/>FROM JAPAN</p>
        </div>
        <div className="CategoryWrapper">
          <p className="DivTitle" id='works'>WORKS</p>
          <div className="WorkTileContainer">
            <button className="WorkTile" onClick={TextureOpen}>
              <Image
              className='WorkTileImg'
              src="/images/Tile01.png" 
              width={800}
              height={600}
              layout='responsive'
              alt='WorkPicture'/>
              <p className="WorkTileTitle">Textures</p>
            </button>
            <button className="WorkTile">
              <Image
              className='WorkTileImg'
              src="/images/Tile02.png" 
              width={800}
              height={600}
              layout='responsive'
              alt='WorkPicture'/>
              <p className="WorkTileTitle">3D MODELS</p>
            </button>
            <button className="WorkTile">
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
                    <ProgressBar value={90}/>
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
              <p className="DivTitle">LOREM IPSUM</p>
        </div>
        <div className="CategoryWrapper">
              <p className="DivTitle">ABOUT</p>
              <p className="DivSecondTitle">REO YOSHIOKA <br />Born in 2003. <br />Currently studying at J.F.Oberlin University. </p>
              <p className="Divbodytext">{`In junior high school, interested in flight simulators, from which started repainting. Creating textures with the motto "closer to reality with natural beauty". Also, this year started modelling to bring flight simulators closer to reality.`}</p>
              <p className="Divbodytext">In Zombie Studio A220 project, responsible for the creation of static objects.</p>
        </div>
        <TextureModal isOpen={isModalOpen} onClose={TextureClose}></TextureModal>
      </div>
    )
  }

  