import './Footer.css';

function Footer() {
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

            <div className="col-sm-6 col-lg-3">
                <h3 className='h3-footer mb-4'>Download</h3>
                <ul className='flex-column list-unstyled'>
                    <li className='li-footer'><svg className='svg-footer' xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/></svg>Web Browser</li>
                    <li className='li-footer'><svg className='svg-footer' xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg>Windows</li>
                    <li className='li-footer'><svg className='svg-footer' xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>macOS</li>
                    <li className='li-footer'><svg className='svg-footer' xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zM192 400a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>iOS & Android</li>
                </ul>
            </div>

            <div className="col-sm-6 col-lg-3">
                <h3 className='h3-footer mb-4'>About</h3>
                <ul className='flex-column list-unstyled'>
                    <li className='li-footer'>About social</li>
                    <li className='li-footer'>Security</li>
                    <li className='li-footer'>Customer Support</li>
                    <li className='li-footer'>Partners</li>
                    <li className='li-footer'>Careers - <b>Join Us!</b></li>
                </ul>
            </div>

            <div className="col-sm-6 col-lg-3">
                <h3 className='h3-footer mb-4'>Resources</h3>
                <ul className=' flex-column list-unstyled'>
                    <li className='li-footer'>Join</li>
                    <li className='li-footer'>Help Center</li>
                    <li className='li-footer'>Developers</li>
                    <li className='li-footer'>Status</li>
                    <li className='li-footer'>Communities</li>
                </ul>
            </div>
        </div>
    </div>

    <hr className="mb-0 mt-5" />

    <div className=" py-3 footer-below">
        <div className="container f">
            <div className="row fr">
                <div className="col-lg-6">
                    <ul className="ul-f justify-content-center justify-content-lg-start lh-1">
                        <li className="li-f list-unstyled">
                            <p className='p-footer text-sm'>Support</p>
                        </li>
                        <li className="li-f list-unstyled">
                            <p className='p-footer text-sm'>Docs</p>
                        </li>
                        <li className="li-f list-unstyled">
                            <p className='p-footer text-sm'>Terms of Use</p>
                        </li>
                        <li className="li-f list-unstyled">
                            <p className='p-footer text-sm'>Privacy & terms</p>
                        </li>
                    </ul>
                </div>

                <div className="col-lg-6">
                    <p className="text-center text-lg-end mb-0">
                        @{new Date().getFullYear()} Website All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </div>
</footer>
</>
);
}

export default Footer;
