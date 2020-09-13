import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import './common.css';

// interface Props {
//   id: string,
//   title: string,
//   body: string,
//   published_at: Date,
//   updated_at: Date,
//   previous_id: string,
//   next_id: string,
// }

export default class Entry extends React.Component {
  // constructor(props: Props) {
  //   super(props);
  // }

  private getTestMarkdown() {
    const markdown =
      '# 見出し\n' +
      '記事本文\n' +
      '記事本文\n' +
      '[リンク](https://example.com)\n' +
      '# 見出し 2\n' +
      '記事本文\n' +
      '**記事本文**\n' +
      '```\n' +
      'def\n' +
      '  if\n' +
      '    if\n' +
      'end end end\n' +
      '```\n' +
      '---\n' +
      '- リスト 1\n' +
      '- リスト 2\n';
    return markdown;
  }

  public render() {
    return (
      <div className="Entry">
        <h2 className="EntryHeader">{'記事\nタイトル'}</h2>
        <div className="EntryBody">
          <ReactMarkdown source={this.getTestMarkdown()} />
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
}
