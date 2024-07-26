import SoftBox from 'components/SoftBox'
import React from 'react'
import logo from "../../../../../../assets/websiteasset/img/Wedglobally_icon.png"
export default function Logo() {
    return (
        <>
            <a className="navbar-brand" href="#">
              
                 <SoftBox
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
      <img src={logo} alt="Logo" style={{ height: 120 }} />
    </SoftBox>
            </a>
        </>
    )
}
