import { useEffect, useRef, useState } from 'react';
import NavBar from './components/navBar';
import Footer from './components/footer';
import '../CSS/home.css';
import introVideo from '../assets/CorazondeMexico.mp4';
import photo1 from '../photogallary/img1.jpg';
import photo2 from '../photogallary/img2.jpg';
import photo3 from '../photogallary/img3.jpg';
import photo4 from '../photogallary/img4.jpg';
import photo5 from '../photogallary/img5.jpg';
import logo from '../assets/Logo.png';

function Home() {
    const heroVideoRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [activePhoto, setActivePhoto] = useState(0);
    const [isResettingTrack, setIsResettingTrack] = useState(false);
    const photos = [
        { src: photo1, alt: 'Mariachi performance 1' },
        { src: photo2, alt: 'Mariachi performance 2' },
        { src: photo3, alt: 'Mariachi performance 3' },
        { src: photo4, alt: 'Mariachi performance 4' },
        { src: photo5, alt: 'Mariachi performance 5' },
    ];
    const loopedPhotos = [...photos, ...photos];

    useEffect(() => {
        if (!heroVideoRef.current) return;
        heroVideoRef.current.play().catch(() => {});
    }, []);

    useEffect(() => {
        const mobileQuery = window.matchMedia('(max-width: 900px)');
        const handleViewportChange = () => setIsMobile(mobileQuery.matches);

        handleViewportChange();
        mobileQuery.addEventListener('change', handleViewportChange);
        return () => mobileQuery.removeEventListener('change', handleViewportChange);
    }, []);

    useEffect(() => {
        if (!isMobile) {
            setActivePhoto(0);
            setIsResettingTrack(false);
            return;
        }

        const intervalId = window.setInterval(() => {
            setActivePhoto((current) => current + 1);
        }, 2200);

        return () => window.clearInterval(intervalId);
    }, [isMobile, photos.length]);

    const handleMobileTrackTransitionEnd = () => {
        if (!isMobile || activePhoto !== photos.length) return;

        setIsResettingTrack(true);
        setActivePhoto(0);
        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                setIsResettingTrack(false);
            });
        });
    };

    return (
        <div className='homePage'>

            <NavBar />

            <main className='homeContent'>
                <div className='hero'>
                    <video
                        ref={heroVideoRef}
                        className="heroVideo"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    >
                        <source src={introVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <section className='gallerySection'>
                    <div className='gallery'>
                        <p className='galleryTitle'>Galería</p>
                        <p className='brief'>Echa un vistazo a nuestro increíble rendimiento y eventos.</p>
                        <p className='galleryLink'>Ver galería completa</p>
                    </div>
                    <div className='slideShow'>
                        {isMobile ? (
                            <ul
                                className={`photos photosMobile${isResettingTrack ? ' noTrackTransition' : ''}`}
                                style={{ '--photo-count': photos.length, '--active-index': activePhoto }}
                                onTransitionEnd={handleMobileTrackTransitionEnd}
                            >
                                {loopedPhotos.map((photo, index) => (
                                    <li className='pnj' key={`${photo.alt}-mobile-${index}`}>
                                        <img src={photo.src} alt={photo.alt} />
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <ul className='photos' style={{ '--photo-count': photos.length }}>
                                {loopedPhotos.map((photo, index) => (
                                    <li
                                        className={`pnj${index >= photos.length ? ' isDuplicate' : ''}`}
                                        key={`${photo.alt}-${index}`}
                                        aria-hidden={index >= photos.length}
                                    >
                                        <img src={photo.src} alt={index < photos.length ? photo.alt : ''} />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </section>
                <section className='aboutUsSection'>
                    <div className='aboutUs'>
                        <p className='aboutUsTitle'>Quiénes somos</p>
                        <p className="brief">
                            Mariachi Corazón de México lleva el alma y la tradición de México a cada escenario, 
                            compartiendo la pasión del mariachi a través de interpretaciones que honran nuestra 
                            cultura y nuestras raíces.
                        </p>
                    </div>
                </section>
                <section className='informationSection'>
                    <div className='info'>
                        <div className='side_photo'>
                            <img src={photo1} className='side_photo_img' />
                        </div>

                        <div className='service'>
                            <h4>Servicio</h4>

                            <ul className='list'>
                                <li>Eventos</li>
                                <li>Bodas</li>
                                <li>Funerales</li>
                                <li>Serenatas</li>
                            </ul>
                        </div>

                        <div className='Social_Media'>
                            <img src={logo} className='logo' />

                            <ul className='socials'>
                                <li className='icons'>1</li>
                                <li className='icons'>2</li>
                                <li className='icons'>3</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

        </div>
    );
}

export default Home;
