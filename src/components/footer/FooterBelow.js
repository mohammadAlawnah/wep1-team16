import React from 'react'
import './Footer.css';

function FooterBelow() {
return (
<>
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
</>
)
}

export default FooterBelow
