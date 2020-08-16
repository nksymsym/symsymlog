import React from 'react';
import './common.css';

function Footer() {
  // TODO: バックから取ってくる。取り方とかは検討

  return (
    <div className="Footer">
      <div className="FooterItems">
        <div className="FooterItem">{'FooterItem1'}</div>
        <div className="FooterItem">{'FooterItem2'}</div>
        <div className="FooterItem">{'FooterItem3'}</div>
      </div>
    </div>
  );
}

export default Footer;
