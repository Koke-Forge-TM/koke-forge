'use client'

import {useEffect} from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Waves from '@/components/ui/waves'
import WavesFooter from '@/components/ui/wavesFooter'
import Footer from '@/components/ui/footer'

export default function DefaultLayout({children,}: { children: React.ReactNode }) {

    useEffect(() => {
        AOS.init({
            once: true,
            disable: 'phone',
            duration: 600,
            easing: 'ease-out-sine',
        })
    })

    return (
        <>
            <main className="grow">
                <Waves/>
                {children}
            </main>
            <WavesFooter/>
            <Footer/>
        </>
    )
}
