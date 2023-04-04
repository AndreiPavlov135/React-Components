import { ISearchItem, FormFields } from '../Data/ISearchItem';
import Header from '../Header/Header';
import { SubmitHandler, useForm } from 'react-hook-form';
import { dataCard } from '../Data/Response';
import './Forms.css';

import React from 'react';

export default function Forms() {
  const loadImage = (file: File) => {
    const reader = new FileReader();
    reader.addEventListener('load', function () {
      if (this.result && localStorage) {
        localStorage.setItem(file.name, this.result.toString());
      }
    });
    reader.readAsDataURL(file);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    const cardsInfo: Array<ISearchItem> = localStorage.dataList
      ? JSON.parse(localStorage.dataList)
      : dataCard;

    const files: FileList = data.inputImg;
    const fileListArr = files ? Array.from([...files]) : [];
    const objectImg: File = fileListArr[0];
    loadImage(objectImg);

    cardsInfo.push({
      title: data.title,
      url: objectImg.name,
      date: data.date,
      select: data.select,
      statistics: {
        likeCount: data.inputCheckBox,
        dislikeCount: data.statistics.inputRadio,
      },
    });
    alert('Card in Main page');
    localStorage.dataList = JSON.stringify(cardsInfo);
    reset();
  };

  return (
    <>
      <Header />
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          TITLE:
          <div className="error">{errors?.title && <span>{errors?.title?.message}:</span>}</div>
          <input
            {...register('title', {
              required: 'please enter data',
              maxLength: {
                value: 30,
                message: 'max 30 characters',
              },
            })}
          />
        </label>
        <label>
          DATE:
          <div className="error">{errors?.date && <span>{errors?.date?.message}:</span>}</div>
          <input
            type="date"
            {...register('date', {
              required: 'please enter date',
            })}
          ></input>
        </label>
        <label>
          SKILL:
          <div className="error">{errors?.select && <span>{errors?.select?.message}:</span>}</div>
          <select
            {...register('select', {
              required: 'please enter data',
            })}
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
            <option value="vanilla">Vanilla</option>
          </select>
        </label>
        <label>
          LIKE:
          <div className="error">
            {errors?.inputCheckBox && <span>{errors?.inputCheckBox.message}:</span>}
          </div>
          <input
            {...register('inputCheckBox', {
              required: 'please add like',
            })}
            type="checkbox"
            value="1"
          />
        </label>
        <label>
          DISLIKE:
          <input {...register('statistics.inputRadio')} value="10" type="radio" defaultChecked />
          10
          <input {...register('statistics.inputRadio')} value="100" type="radio" />
          100
        </label>
        <label>
          FILE:
          <div className="error">
            {errors?.inputImg && <span>{errors?.inputImg?.message}:</span>}
          </div>
          <input
            {...register('inputImg', {
              required: 'please add image',
            })}
            type="file"
            className="btn"
          />
        </label>
        <input type="submit" className="btn" value="send" />
      </form>
    </>
  );
}
