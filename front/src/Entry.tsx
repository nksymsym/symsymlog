import React from 'react';
import './common.css';

function Entry() {
  // TODO: バックから取ってくる。取り方とかは検討

  return (
    <div className="Entry">
      <h2 className="EntryHeader">{'記事\nタイトル'}</h2>
      <div className="EntryBody">
        {'記事本文\n記事本文記事本文\n記事本文記事本文記事本文\n記事本文記事本文記事本文記事本文'}
      </div>
      <div className="EntryFooter">
        <div>{'投稿者'}</div>
        <div>{'投稿日時'}</div>
        <div>
          <span>{'新しい投稿'}</span>
          <span>{'古い投稿'}</span>
        </div>
      </div>
    </div>
  );
}

export default Entry;
