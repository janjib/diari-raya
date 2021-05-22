import React from 'react'

const AppreciateSection = () => {
    return (
        <div>
            <p className='text-center last-paragraph'>Anything about your Raya ...</p>
            <h1 className='text-center last-headline'>Post it here ...</h1>
            <ul className='d-flex justify-content-center list-unstyled my-5'>
                {/* <li><a href=""><img src="/images/github.svg" className='socmed-icon'alt="" /></a></li>
                <li><a href=""><img src="/images/instagram.svg" className='socmed-icon' alt="" /></a></li>
                <li><a href=""><img src="/images/telegram.svg" className='socmed-icon' alt="" /></a></li> */}
                 <a href="https://www.instagram.com/harjan_04/" rel="noreferrer" target="_blank"><li  className='m-2 socmed-icon '>
                     <img src="/images/github.svg" className='socmed-icon'alt="" /></li></a>
               <a href="https://t.me/RujhanNajib" rel="noreferrer" target="_blank"><li className='m-2 socmed-icon'>
                   <img src="/images/instagram.svg" className='socmed-icon' alt="" /></li></a>
               <a href="https://github.com/janjib" rel="noreferrer" target="_blank"><li className='m-2 socmed-icon'>
                   <img src="/images/telegram.svg" className='socmed-icon' alt="" /></li></a>
            </ul>
        </div>
    )
}

export default AppreciateSection
