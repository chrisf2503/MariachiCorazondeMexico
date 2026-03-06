import NavBar from './components/navBar';
import Footer from './components/footer';
import '../CSS/home.css'
import introVideo from '../assets/Intro_video.mp4';
function Home(){
    return (
        <div className='homePage'>

            <NavBar/>

            <main className='homeContent'>
                <div className='hero'>
                    <video className="heroVideo" controls>
                        <source src={introVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>
                </div>

                <section className='gallerySection'>
                    <div className='gallery'>
                        <p className='galleryTitle'>Gallery</p>
                        <p className='brief'>Look at our photo gallery</p>
                        <p className='galleryLink'>View full gallery</p>
                    </div>
                    <div className='slideShow'>
                        Slideshow section using animated transitions
                    </div>
                </section>
                <section className='aboutMeSection'>
                    <div className='aboutMe'>
                        <p className='aboutMeTitle'>About Me</p>
                        <p className="brief">
                            Enriching Mexican culture with elegance and classic music and dance steps.
                            <br /><br />
                            Read our story to learn more about our mission and the opportunities we want to provide.
                        </p>
                    </div>
                </section>
                <section className="joinSection">
                    <div className='join'>
                        <p className="joinTitle">Join us</p>
                        <p className="brief">Join our company. We are looking for talented individuals who are willing to learn.</p>
                        <button className='contact'>Contact us</button>
                   </div>
                </section>
            </main>

            <Footer/>

        </div>  
    );
}
export default Home;
