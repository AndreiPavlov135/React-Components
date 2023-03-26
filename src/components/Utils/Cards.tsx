import React, { ReactNode } from 'react';
import './Utils-styles/Cards.css';
import { data } from '../Data/Response';
import { ISearchItem } from '../Data/ISearchItem';

export default class Cards extends React.Component {
  render() {
    const dataList: ISearchItem[] = localStorage.dataList ? JSON.parse(localStorage.cards) : data;
    return (
      <div className="items">
        {dataList.map((item, index): ReactNode => {
          return (
            <div key={index} className="items__card">
              <img src={!localStorage[item.url] ? item.url : localStorage[item.url]} alt="img" />
              <div className="items__icons">
                <span>{item.statistics.viewCount}</span>
                <span>{item.statistics.likeCount}</span>
                <span>{item.statistics.dislikeCount}</span>
                <span>{item.statistics.commentCount}</span>
              </div>
              <div className="items__title">{item.title}</div>
              <div>{item.date}</div>
              <div>{item.select}</div>
              <button className="items__btn">more...</button>
            </div>
          );
        })}
      </div>
    );
  }
}
