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
                <ParallaxLayer offset={2.5} speed={1}>
                    <img src="/land.png"/>
                </ParallaxLayer>

                {/* Title Text */}
                <ParallaxLayer offset={0.2} speed={0.1}>
                    <h2 className="text-9xl text-white font-bold text-center">Hello World</h2>
                </ParallaxLayer>
            </Parallax>
        </main>
    )
}
