import NavBar from './components/navBar';
import Footer from './components/footer';
import '../CSS/aboutus.css'
function AboutUs(){
    return (
        <>
            <NavBar/>
            <main className="aboutusContent">
                <div className='aboutme box'>
                    <div className='titlebox'>
                        <h1>About Me</h1>
                    </div>
                    <div className='aboutMeContent contentBox'>
                        <p>
                            I am a Mexican American born and raised in the Bronx, with
                            a Bachelor's degree in Computer Science, and I have been dancing since childhood.

                        </p>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="mission box ">
                    <div className='titlebox'>
                        <h1>Mission</h1>
                    </div>
                    <div className='mission_statement contentBox'>
                        <p>
                            I want to showcase the beauty and artistry of Mexican culture through dance,
                            blending classic music and steps.<br/>
                            I want to bring opportunities not only to talented dancers who are eager to learn, but also
                            to students in Computer Science and UX design, helping them gain experience while improving
                            this current website build.
                        </p>
                        <img src="" alt="" />
                    </div>
                </div>
                <img src="" alt="" />
                <div className="opportunity">
                    <h1>Opportunity</h1>
                    <ul className='opportunity_list '>
                        <div className="opp1 box">
                            <div className='titlebox'>
                                <h1>Dancers</h1>
                            </div>
                            <div className='dancer_dis contentBox'>
                                <p>
                                    Looking for talented individuals who has a 
                                    background folklrico and knowlege of ballet. Being to learn 
                                    various regions such as Jalsico, Gurrero, Veracruz, etc.
                                    We are also look for individuals knows the basic fundements of walts 
                                    dances.
                                </p>
                            </div>
                        </div>
                    </ul>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default AboutUs;
