import { ISearchItem } from '../Data/ISearchItem';
import React, { FormEvent } from 'react';
import Header from '../Header/Header';
import { data } from '../Data/Response';
import './Forms.css';

export default class Forms extends React.Component {
  inputTitle: React.RefObject<HTMLInputElement>;
  inputDate: React.RefObject<HTMLInputElement>;
  inputSelect: React.RefObject<HTMLSelectElement>;
  inputCheckBox: React.RefObject<HTMLInputElement>;
  inputRadio10: React.RefObject<HTMLInputElement>;
  inputRadio100: React.RefObject<HTMLInputElement>;
  inputImg: React.RefObject<HTMLInputElement>;
  constructor(props: { [key: string]: string }) {
    super(props);
    this.state = { form: { message: '' } };
    this.inputTitle = React.createRef();
    this.inputDate = React.createRef();
    this.inputSelect = React.createRef();
    this.inputCheckBox = React.createRef();
    this.inputRadio10 = React.createRef();
    this.inputRadio100 = React.createRef();
    this.inputImg = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // uploadImage(file: Blob) {
  //   const reader = new FileReader();
  //   reader.addEventListener('load', function () {
  //     if (this.result && localStorage) {
  //       localStorage.setItem(file.name, this.result.toString());
  //     } else {
  //       alert();
  //     }
  //   });
  //   reader.readAsDataURL(file);
  // }

  handleSubmit(event: FormEvent) {
    const cardsInfo: Array<ISearchItem> = localStorage.dataList
      ? JSON.parse(localStorage.dataList)
      : data;

    // const files: FileList | null | undefined = this.inputImg.current?.files;
    // const fileListAsArray = files ? Array.from([...files]) : [];
    // const objectImg: Blob = fileListAsArray[0];
    // this.uploadImage(objectImg);
    cardsInfo.push({
      title: this.inputTitle.current?.value,
      url: '',
      date: this.inputDate.current?.value,
      select: this.inputSelect.current?.value,
      statistics: {
        likeCount: this.inputCheckBox.current?.checked ? this.inputCheckBox.current?.value : '',
        dislikeCount: this.inputRadio10.current?.checked
          ? this.inputRadio10.current?.value
          : this.inputRadio100.current?.checked
          ? this.inputRadio100.current?.value
          : '',
      },
    });
    alert('Card in Main page');
    event.preventDefault();
  }
  render() {
    return (
      <>
        <Header />
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            TITLE:
            <input type="text" maxLength={30} ref={this.inputTitle} />
          </label>
          <label>
            DATE:
            <input type="date" defaultValue="2023-03-27" ref={this.inputDate}></input>
          </label>
          <label>
            SKILL:
            <select ref={this.inputSelect}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
              <option value="vanilla">Vanilla</option>
            </select>
          </label>
          <label>
            LIKE:
            <input type="checkbox" ref={this.inputCheckBox} value="1" />
          </label>
          <label>
            DISLIKE:
            <input
              className="dislike-10"
              name="radio"
              value="10"
              type="radio"
              ref={this.inputRadio10}
            />
            10
            <input
              className="dislike-100"
              name="radio"
              defaultValue="100"
              type="radio"
              ref={this.inputRadio100}
            />
            100
          </label>
          <label>
            FILE:
            <input type="file" className="btn" />
          </label>
          <input type="submit" className="btn" value="send" />
        </form>
      </>
    );
  }
}
