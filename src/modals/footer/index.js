import { useState } from 'react';

import Footer from '@/components/Modal/Templates/footer';

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

export default function FooterModal({ data, text, text1, text2 }) {
  const [confirmed, setConfirmed] = useState(false);
  const handleConfirm = () => {
    setConfirmed(true);
  };

  const footerConfiguration = {
    confirm: {
      text: confirmed ? 'Okok' : 'Confirm',
      onClick: handleConfirm,
    },
  };

  if (!confirmed) {
    footerConfiguration.cancel = {
      text: 'Cancel',
      onClick: () => {
        console.log('Cancel clicked');
        data.close();
      },
    };
  }

  return (
    <Footer 
      body={
        <Body data={{ text, text1, text2 }} />
      }

      footer={footerConfiguration}
    />
  );
}
