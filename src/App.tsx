import * as THREE from 'three'
import React, { Suspense, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree} from '@react-three/fiber'
import { CameraShake } from '@react-three/drei'
import './App.css'
import { EffectComposer, DepthOfField, Vignette, Glitch } from '@react-three/postprocessing'

import SantaRobot6 from './Santa_robot_v6'
import StudiBuddiRobot from './Studibuddi'
import PyramidNetworkRobot from './PyramidNetworkRobot'

import 'reactjs-popup/dist/index.css';

import MpRobot2 from './Mp_robotv2'
import ZombieRobot7 from './Zombie_robot_v70'
import MetaverseRobot3 from './Metaverse_robotv3'
import MugshotScenev8 from './Mugshot_scenev8'

import zombiePic from './Images/Zombie.png'
import zombiePic2 from './Images/Zombie2.png'
import zombiePic3 from './Images/Zombie3.png'

import arrow from './Images/arrow.png'

import pyramidPic from './Images/Pyramid.png'
import pyramidPic2 from './Images/Pyramid2.png'
import pyramidPic3 from './Images/Pyramid3.png'

import metaversePic from './Images/Metaverse.png'
import metaversePic2 from './Images/Metaverse2.png'
import metaversePic3 from './Images/Metaverse3.png'

import mpPic from './Images/MP.png'
import mpPic2 from './Images/MP2.png'
import mpPic3 from './Images/MP3.png'

import santaPic from './Images/Santa.png'
import santaPic2 from './Images/Santa2.png'
import santaPic3 from './Images/Santa3.png'

import studibuddiPic from './Images/Studibuddi.png'
import studibuddiPic2 from './Images/Studibuddi2.png'
import studibuddiPic4 from './Images/Studibuddi4.png'


export default function App() {
  const [zoomActive, setZoomActive] = useState(false)
  const [camPos, setCamPos] = useState(4)

  const takePicture = (event: KeyboardEvent) => {
    if (event.key !== undefined) {
      if (event.key === 'e') {
        if (camPos > 4.45 && camPos < 5.65) {
          setActiveCharacter("zombie")
        }
        else if (camPos > 2.5 && camPos < 3.7) {
          setActiveCharacter("pyramid")
        }
        else if (camPos > 0.43 && camPos < 1.19) {
          setActiveCharacter("metaverse")
        }
        else if (camPos > -1.54 && camPos < -.27) {
          setActiveCharacter("mp")
        }
        else if (camPos > -3.5 && camPos < -2.35) {
          setActiveCharacter("santa")
        }
        else if (camPos > -5.42 && camPos < -4.41) {
          setActiveCharacter("studibuddi")
        }
        setPicTrigger(true)
      }
      if (event.key === 'f') {
        if (zoomActive === false) {
          setZoomActive(true)
        }
      }
    }
  }
  const reset = (event: KeyboardEvent) => {
    setZoomActive(false);
  }

  useEffect(() => { 
    // maybe add escape key for exiting page to hold its place
    window.addEventListener('keydown', takePicture)
    window.addEventListener('keyup', reset)
    return () => {
      window.removeEventListener('keydown', takePicture);
      window.removeEventListener('keyup', reset)
    };
  }, [camPos]);

  function Rig() {
    const [vec] = useState(() => new THREE.Vector3())
    const { camera, mouse } = useThree()
    camera.rotation.set(0, 0, 0)
    useFrame(() => {
      if (zoomActive === true) {
          setZoomTrigger(true)
          camera.position.lerp(vec.set(mouse.x * 10, mouse.y * 2, 0), 0.04) // change alpha value for infinit zoom, e.g., 0.00001, subject to change TODO
            // change alpha value for infinit zoom, e.g., 0.00001, subject to change TODO
        }
      else {
        camera.position.lerp(vec.set(mouse.x * 20, mouse.y * 2, 10), 0.05)
      }
      if (camPos !== camera.position.x) {
        kms(camera.position.x)
      }
    })
    return (
      <CameraShake maxYaw={0.01} maxPitch={0.01} maxRoll={0.01} yawFrequency={0.5} pitchFrequency={0.5} rollFrequency={0.4} />
    )
  }

  function kms(position: number) {
    setCamPos(position)
  }

  const geometry = new THREE.BoxGeometry( 3, 3, 3 );
  const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
  const mesh = new THREE.Mesh( geometry, material );
  mesh.position.set(0,2,0)

  function GoBack() {
    setZoomTrigger(false)
    setPicTrigger(false)
    setZombieArrayPos(0)
    setActiveCharacter("")
    setZombieArrayPos(0)
  }

  function flipImages(direction: string, arrayLength: number) {
    if (direction === "forward") {
      setZombieArrayPos((zombieArrayPos + 1) % arrayLength)
    }
    if (direction === "back") {
      setZombieArrayPos(((zombieArrayPos - 1) * -1) % arrayLength)
    }
  }


  const [zombieArrayPos, setZombieArrayPos] = useState(0)
  const zombiePicArray = [zombiePic, zombiePic2, zombiePic3]
  const pyramidPicArray = [pyramidPic, pyramidPic2, pyramidPic3]
  const metaversePicArray = [metaversePic, metaversePic2, metaversePic3]
  const santaPicArray = [santaPic, santaPic2, santaPic3]
  const studibuddiPicArray = [studibuddiPic, studibuddiPic2, studibuddiPic4]

  const mpPicArray = [mpPic, mpPic2, mpPic3]


  const [activeCharacter, setActiveCharacter] = useState("")

  const [zoomTrigger, setZoomTrigger] = useState(false)
  const [picTrigger, setPicTrigger] = useState(false)

  return (
    <>
      <div className="characterHolder">
        <Canvas dpr={[1, 2]} shadows camera={{ fov: 45, position: [0, 3, 8] }}>
          <color attach="background" args={['#000000']} />
          {/* <fog attach="fog" args={['black', 120, 50]} /> */}
          {/* <OrbitControls /> */}
          <ambientLight intensity={0.92} />
          {/* <spotLight color={'white'} position={[0,4,4]} angle={Math.PI / 12} castShadow shadow-mapSize-height={512} shadow-mapSize-width={512}/> */}
          <Suspense fallback={null}>
            <MpRobot2 castShadow position={[-2,-1.3,-2]}/>
          </Suspense>
          <Suspense fallback={null}>
            <ZombieRobot7 position={[4,-1.3,-2]}/>
          </Suspense>
          <Suspense fallback={null}>
            <MugshotScenev8 receiveShadow position={[10,-1.65,-7]} rotation={[0, -Math.PI / 2 ,0]} scale={[.5,.5,.5]}/>
          </Suspense>
          <Suspense fallback={null}>
            <SantaRobot6 position={[-4,-1.3,-2]}/>
          </Suspense>
          <Suspense fallback={null}>
            <StudiBuddiRobot position={[-6,-1.3,-2]}/>
          </Suspense>
          <Suspense fallback={null}>
            <PyramidNetworkRobot position={[2,-1.3,-2]}/>
          </Suspense>
          <Suspense fallback={null}>
            <MetaverseRobot3 position={[0,-1.3,-2]}/>
          </Suspense>
          <EffectComposer>
            <DepthOfField focusDistance={0} focalLength={0.09} bokehScale={2} height={480} />
            {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} /> */}
            {/* <Noise opacity={.1} /> */}
            <Glitch delay={new THREE.Vector2(1, 2)} duration={new THREE.Vector2(1, 2)} strength={new THREE.Vector2(0.9, 0.1)}/>
            <Vignette eskil={false} offset={0.1} darkness={1.1} opacity={.90}/>
          </EffectComposer>
          <Rig />
        </Canvas> 
      </div>
      { (picTrigger && activeCharacter === "zombie") &&
        <div className="">
          <div className="overlay3">
            <button className="back" onClick={GoBack}>Back</button>
            <div className="divWrapper">
              <div className="overlay3A">
                <div className="arrowForward" onClick={() => { flipImages("forward", 3) }}>
                  <img src={arrow} alt="arrow" width={"50px"}></img>
                </div>
                <div className="arrowBack" onClick={() => { flipImages("back", 3) }}>
                  <img src={arrow} alt="arrow" width={"50px"}></img>
                </div>
                <img src={zombiePicArray[zombieArrayPos]} alt="zombie" width="100%" height="100%"></img>
              </div>
            </div>
            <div className="overlay3B">
              <div className="textContainer">
                <h1 className="title">Zombiegiest</h1>
                <p className="decriptiveText">
                  This game was coded with Decentraland's custom game engine for blockchain-based games. This project came after some of my other 3D developments for Republic, and I loved how this one turned out. If you want to play it, it's a 4x4 in <a className="links" href="https://decentraland.org/">Decentraland</a> at (98,17). Below is the press release for Zombiegiest which I think explains it well:
                </p>
                <p className="decriptiveText">
                  Republic Realm Studios today released
                  their dystopian first-person shooter game Zombiegeist. Set in a post-apocalyptic city, the player
                  must fight hordes of zombies and control the zombie population. Players earn more powerful
                  weapons as the game progresses, but beware because the zombies themselves become
                  increasingly stronger and faster in their mission to turn the user into a zombie, too. Zombiegeist
                  is an in-metaverse game which can be played in Decentraland at the coordinates 98,17.
                  Game design, production and development was led by software engineer Sean Roades.
                  “It meant so much to me to pay homage to Call of Duty World of War, one of my favorite games
                  of all time, and to give people in the metaverse the same feeling I had playing that game,” said
                  Roades.
                </p>
                <p className="decriptiveText">
                  Republic Realm Studios is a subsidiary of Republic Realm, the premier digital real estate
                  investor and developer in the metaverse. Republic Realm is one of the largest landowners in
                  Decentraland, the Sandbox and Axie Infinity, and owns 1700+ parcels of metaverse real estate
                  across 8 metaverses.
                </p>
                <p className="decriptiveText">
                  “The release of Zombiegeist marks the beginning of our ambitious game development
                  pipeline for the metaverse. We believe that the next phase of metaverse adoption is dependent
                  upon high-quality content creation, and Zombiegeist demonstrates our commitment to this
                  priority,” says Janine Yorio, spokesperson for Republic Realm. “Decentraland is such a unique
                  experience, where a user can shop for shoes on one block, play blackjack in a casino on
                  another, and then turn the corner and blow off steam by killing some zombies. This is a taste of
                  how varied and engaging the metaverse experience and landscape is shaping up to be.”
                  Republic Realm Studios anticipates releasing 2 to 3 in-metaverse games each year,
                  either developed in-house or incubated through our innovation platform that seeds
                  up-and-coming game developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      }

      { (picTrigger && activeCharacter === "pyramid") &&
        <div className="">
          <div className="overlay3">
            <button className="back" onClick={GoBack}>Back</button>
            <div className="divWrapper">
              <div className="overlay3A">
                <div className="arrowForward" onClick={() => { flipImages("forward", 3) }}>
                  <img src={arrow} width={"50px"} alt="arrow"></img>
                </div>
                <div className="arrowBack" onClick={() => { flipImages("back", 3) }}>
                  <img src={arrow} width={"50px"} alt="arrow"></img>
                </div>
                <img src={pyramidPicArray[zombieArrayPos]} alt="pyramid" width="100%" height="100%"></img>
              </div>
            </div>
            <div className="overlay3B">
              <div className="textContainer">
                <h1 className="title">The Pyramid Network</h1>
                <p className="decriptiveText">
                  I got tired of seeing people scamming others with the creation of "alt coins", and when I saw SafeMoon, that's what made me decide to make fun of the alt coin rush by creating a literal scam coin.
                </p>
                <p className="decriptiveText">
                  The pyramid network is essentially a pyramid scheme. While you can buy the coin, you're only going to really get a lot of coins by joining the network. To join the network, you must be invited, which requires a two-way confirmation. Once you join you are given 5 coins and as you invite more people you get rewarded in the form of a tree.
                </p>
                <p className="decriptiveText">
                  This is a ethereum smart contract with a web interface (available here: <a className="links" href="https://thepyramid.network/">https://thepyramid.network/</a>). I built The Pyramid Network with solidity for the smart contract and react with typescript to interface with the contract. All actions nessesary to be a part of the network are availible on the site. The contract is verified on Etherscan, and the coin is availible to trade on uniswap.
                </p>
              </div>
            </div>
          </div>
        </div>
      }
      { (picTrigger && activeCharacter === "metaverse") &&
        <div className="">
          <div className="overlay3">
            <button className="back" onClick={GoBack}>Back</button>
            <div className="divWrapper">
              <div className="overlay3A">
                <div className="arrowForward" onClick={() => { flipImages("forward", 3) }}>
                  <img src={arrow} width={"50px"} alt="arrow"></img>
                </div>
                <div className="arrowBack" onClick={() => { flipImages("back", 3) }}>
                  <img src={arrow} width={"50px"} alt="arrow"></img>
                </div>
                <img src={metaversePicArray[zombieArrayPos]} alt="metaverse" width="100%" height="100%"></img>
              </div>
            </div>
            <div className="overlay3B">
              <div className="textContainer">
                <h1 className="title">Metaverse Scraper</h1>
                <p className="decriptiveText">
                  When I started interning at Republic, there was a huge problem in finding virtual land to buy for its new "Republic Realm", an investment vehicle focused on decentralized virtual worlds like <a className="links" href="https://decentraland.org/">Decentraland</a>. Within my first week at Republic I built a webscraper to scrape land listings from several metaverses and compare their prices to find the cheapest listings. But I realized that finding the cheapest listings does not mean we would be finding the best value, and with that I created the first version of the metaverse value scraper. 
                </p>
                <p className="decriptiveText">
                  This scraper served to help the team identify parcels of land that weren't nessearily the most cheap land but instead were more valuable. Based on past tests, the algorithm predicted whether or not a certain land value would rise with an accuracy of over 80%. Over time, there were several iterations, including one I did with some friends for a Hackathon <a className="links" href="https://devpost.com/software/decentradata">https://devpost.com/software/decentradata</a> where we tried a different algorithm. That was a really good time, and overall this series of projects was great to work on. Over time, the model got better, and I ended up using the Etherscan API, which allowed me to scale the model to millions of datapoints across several metaverses.
                </p>
                <p className="decriptiveText">
                  This series of projects was possible by using Python to scrape the data and fetch data over time, using Node JS for the backend to get the data from the database and give it to the frontend, and on the frontend, I used React.
                </p>
              </div>
            </div>
          </div>
        </div>
      }
      { (picTrigger && activeCharacter === "mp") &&
        <div className="">
          <div className="overlay3">
            <button className="back" onClick={GoBack}>Back</button>
            <div className="divWrapper">
              <div className="overlay3A">
                <div className="arrowForward" onClick={() => { flipImages("forward", 3) }}>
                  <img src={arrow} width={"50px"} alt="arrow"></img>
                </div>
                <div className="arrowBack" onClick={() => { flipImages("back", 3) }}>
                  <img src={arrow} width={"50px"} alt="arrow"></img>
                </div>
                <img src={mpPicArray[zombieArrayPos]} alt="mp" width="100%" height="100%"></img>
              </div>
            </div>
            <div className="overlay3B">
              <div className="textContainer">
                <h1 className="title">MP</h1>
                <p className="decriptiveText">
                  The goal of <a className="links" href="https://mpbysean.web.app/">MP</a> is to allow people no matter their programming experience to create trading algorithms using timing, technicals, & predictive measures.                </p>
                <p className="decriptiveText">
                  MP allows users to create algorithms to trade at a certain time during the day, e.g., buy $TSLA at 9:45:00 and sell at 15:45:00 on Monday. The idea here is that users can test whether certain sayings (e.g., Tesla is mostly up on Monday) are true/can they profit from those. Additionally, this step allows for trading based on technical indicators, e.g., buy $AAPL stock when RSI is sub 30 and sell when it is above 70.
                </p>
                <p className="decriptiveText">
                  I built MP using react to handle the frontend, firebase to handle the backend, and data from Alpha Vantage. I call on Alpha advantages API to get CSV files of intraday stock price and volume data over the last 2 years for whatever stock the user puts in. From there, based on what technicals the user wants to trade on (only RSI, SMA, EMA, Time/Date available for now), I calculate the technical values and calculate and display their profit over time as it compares to the stock price of the security they’re trading.
                </p>
              </div>
            </div>
          </div>
        </div>
      }
      { (picTrigger && activeCharacter === "santa") &&
        <div className="">
          <div className="overlay3">
            <button className="back" onClick={GoBack}>Back</button>
            <div className="divWrapper">
              <div className="overlay3A">
                <div className="arrowForward" onClick={() => { flipImages("forward", 3) }}>
                  <img src={arrow} width={"50px"} alt="arrow"></img>
                </div>
                <div className="arrowBack" onClick={() => { flipImages("back", 3) }}>
                  <img src={arrow} width={"50px"} alt="arrow"></img>
                </div>
                <img src={santaPicArray[zombieArrayPos]} alt="santa" width="100%" height="100%"></img>
              </div>
            </div>
            <div className="overlay3B">
              <div className="textContainer">
                <h1 className="title">Secret Santa</h1>
                <p className="decriptiveText">
                  <a className="links" href="https://devpost.com/software/secret-santa-dgqbrm">Secret Santa</a> is a project I did with my friends at Duke's Code For Good Hackathon. Secret Santa connects people who are experiencing homelessness with those who want to help give during the holiday season through a list of items the person wants. Once you sign up, you can send people gifts, and, if you're not signed in, you can browse until you want to!</p>
                <p className="decriptiveText">
                  I worked on the frontend with React and helped with the Firebase database setup and connection to the frontend.
                </p>
              </div>
            </div>
          </div>
        </div>
      }
      { (picTrigger && activeCharacter === "studibuddi") &&
        <div className="">
          <div className="overlay3">
            <button className="back" onClick={GoBack}>Back</button>
            <div className="divWrapper">
              <div className="overlay3A">
                <div className="arrowForward" onClick={() => { flipImages("forward", 3) }}>
                  <img src={arrow} width={"50px"} alt="arrow"></img>
                </div>
                <div className="arrowBack" onClick={() => { flipImages("back", 3) }}>
                  <img src={arrow} width={"50px"} alt="arrow"></img>
                </div>
                <img src={studibuddiPicArray[zombieArrayPos]} alt="studibuddi" width="100%" height="100%"></img>
              </div>
            </div>
            <div className="overlay3B">
              <div className="textContainer">
                <h1 className="title">StudiBuddi</h1>
                <p className="decriptiveText">
                  <a className="links" href="https://studibuddi.org/">StudiBuddi</a> helps you find study partners through a fun survey and lets you decide if you will match with them or not. I developed this with some friends and my role included frontend design, email infastructure, and backend work along with my friends. StudiBuddi only allows harvard.edu emails to sign up, so you may not be able to signup through the link, but I have some photos on the side!</p>
                <p className="decriptiveText">
                  Over 200 people matched on StudiBuddi, and overall people seemed to enjoy it, so I'm happy with how the project turned out. It even helped me find study partners in what felt like a very disconnected semester.
                </p>
              </div>
            </div>
          </div>
        </div>
      }
      { (activeCharacter === "") &&
        <>
          <div className="overlay2"></div>
        </>

      }
      <div className="overlay">
        { !zoomTrigger ?
          <p className="prompt">Try zooming in [F]</p>
          : 
          !picTrigger &&
          <p className="prompt">Try taking a photo now [E]</p>
        }
      </div>
    </>
  )
}