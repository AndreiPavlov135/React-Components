import React, { ReactNode } from 'react';
import './Utils-styles/Cards.css';
import { dataCard } from '../Data/Response';
import { ISearchItem } from '../Data/ISearchItem';

export default class Cards extends React.Component {
  render() {
    const dataList: ISearchItem[] = localStorage.dataList
      ? JSON.parse(localStorage.dataList)
      : dataCard;
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
              <div className="items__title">{item.date}</div>
              <div className="items__title">{item.select}</div>
              <button className="items__btn">more...</button>
            </div>
          );
        })}
      </div>
    );
  }
}
