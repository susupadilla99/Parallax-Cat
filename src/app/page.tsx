'use client'
import { Parallax, ParallaxLayer } from "@react-spring/parallax"

const MOON = '/moon.png'
const LAND = '/land.png'
const CAT = '/cat.gif'

export default function Home() {
    return (
        <main>
            <Parallax className="bg-black" pages={4}>

                {/* Moon */}
                <ParallaxLayer 
                    className=''
                    offset={0}
                    factor={2}
                    speed={1}>
                    <img src="/moon.png" />
                </ParallaxLayer>

                {/* Land */}
                <ParallaxLayer offset={2.7} speed={1}>
                    <img src="/land.png"/>
                </ParallaxLayer>

                {/* Title Text */}
                <ParallaxLayer offset={0.2} speed={0.05}>
                    <h2 className="text-[150px] text-white font-extrabold text-center uppercase">Hello World</h2>
                </ParallaxLayer>

                {/* Parachuting Cat */}
                <ParallaxLayer
                    sticky={{start: 0.8, end: 2.2}}
                >
                    <img className="w-[40%] mx-auto z-[1]" src='cat.gif' />
                </ParallaxLayer>

                {/* Bottom Text */}
                <ParallaxLayer offset={3.2} speed={2}>
                    <h2 className="text-[150px] text-white font-extrabold text-center uppercase z-[2]">Hi mom!</h2>
                </ParallaxLayer>

            </Parallax>
        </main>
    )
}
