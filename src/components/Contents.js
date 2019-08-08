import React from 'react';

const styles = {
  container: {
    width:1000,
    margin: '0 auto',
    padding: 25,
  },
  flexWrap: {
    display: 'flex',
    flexFlow: 'row wrap',
    flexWrap: 'wrap',
  },
  contentItem: {
    // flex: 'auto',
    // width: '33%',
    // maxWidth:320,
    // padding:5,
    // border:'1px solid #f1f1f1',
    width:330,
    height:330,
    display:'flex',
    justifyContent:'center',
    alignItems: 'center'
  },
  contentImage: {
    width:'99%',
    height:'99%'
  }
}

const Contents = () => {
  return (  
    <div style={styles.container}>
      <div style={styles.flexWrap}>
        {[1,2,3,4,5,6,7,8,].map(item => (
          <div style={styles.contentItem}>
            <img style={styles.contentImage} src="https://t1.daumcdn.net/cfile/tistory/265757375760CADC06" alt=""/>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Contents;