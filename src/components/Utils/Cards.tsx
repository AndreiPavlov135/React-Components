import React, { ReactNode } from 'react';
import './Utils-styles/Cards.css';
import { data } from '../Data/mock-response';

export default class Cards extends React.Component {
  render() {
    return (
      <div className="items">
        {data.map((item, index): ReactNode => {
          return (
            <div key={index} className="items__card">
              <img src={item.snippet.thumbnails.medium.url} alt="img" />
              <div className="items__icons">
                <span>{item.statistics.viewCount}</span>
                <span>{item.statistics.likeCount}</span>
                <span>{item.statistics.dislikeCount}</span>
                <span>{item.statistics.commentCount}</span>
              </div>
              <div className="items__title">{item.snippet.title}</div>
              <button className="items__btn">more...</button>
            </div>
          );
        })}
      </div>
    );
  }
}
