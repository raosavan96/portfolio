import React from 'react'

function FooterIcons(props) {
  return (
    <>
      <a href={props.href} className='footer-socil-icon d-flex justify-content-center align-items-center'>
        <i className={props.anchorClass}></i>
      </a>
    </>
  )
}

export default FooterIcons;
