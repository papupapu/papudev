import { useState } from 'react';

import Header from '@/components/Modal/Templates/header';

function Body({ data }) {
  return (
    <div className="p-4">
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
    </div>
  );
}

export default function HeaderModal({ data, text, text1, text2 }) {
  return (
    <Header 
      header={{
        title: 'Modal Title',
        close: data.close,
      }}
      
      body={
        <Body data={{ text, text1, text2 }} />
      }
    />
  );
}
