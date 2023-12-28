import { useState } from 'react';
import './Footer.css';
import { useEffect } from 'react';
import { getData } from '../../readData';
import FooterBelow from './FooterBelow'
import LinkComponents from './LinkComponents';

function Footer() {
    const [Download,setDownload] = useState([]);
    const[About,setAbout] = useState([]);
    const[Resources,setResources] = useState([]);
    

    useEffect(()=>{
        DownlodeLink()
        AboutlodeLink()
        ResourcesdeLink()

    },[])

    
    const DownlodeLink = async ()=>{
    const  response = await getData('Download-footer') 
    setDownload(response);
    }

    const AboutlodeLink = async ()=>{
    const  response = await getData('About-footer') 
    setAbout(response);

    }
    const ResourcesdeLink = async ()=>{
    const  response = await getData('Resources-footer') 
    setResources(response);

    }     
    
return (                        
<>    
<footer className="Footer pt-5">
    <div className="container f">
        <div className="row g-4 fr">
            <div className="col-sm-6 col-lg-3">
                <img className='img-footer' src={"./img/landingPageImg/img.png"} alt='img footer' />
                <p className='pp-footer mt-3'>Match way these she avoids 
                        seeing death their fat off.
                </p>
            </div>
            <LinkComponents Data={Download} title={'Download'} icone={
            <svg className='svg-footer' xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zM192 400a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
            </svg>
            }/>
            <LinkComponents Data={About} title = {'About'} />
            <LinkComponents Data={Resources} title = {'Resources'} />
        </div>
    </div>

    <hr className="mb-0 mt-5" />
    <FooterBelow/>
</footer>
</>
);
}

export default Footer;
