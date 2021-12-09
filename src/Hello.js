import React from 'react';


//jsx
function Hello({ color, name, isSpeacial }) {
  return (
    <div style={{
        color: color,
      }}>
        {isSpeacial && <b>*</b>}
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음',
};

export default Hello;
