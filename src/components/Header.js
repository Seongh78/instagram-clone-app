import React from 'react';

const styles = {
  container: {
    width:'100%',
    borderBottom: '1px solid #f1f1f1',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  profileImageContainer: {
    width: 200,
    height: 200,
    padding:25
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 100
  },
  profileInfoContainer: {
    width:700,
    padding:25,
  },
  staticInfo: {
    display:'flex',
  },
  staticItem: {
    marginTop:15,
    marginRight:17,
    marginBottom:25
  },
  followButton: {
    width:125,
    padding:15,
    backgroundColor: '#0c7ecf',
    border:'none',
    borderRadius: 5,
    color:'#fff'
  }
}

const Header = () => {
  return (  
    <div style={styles.container}>
      <div style={styles.profileImageContainer}>
        <img style={styles.profileImage} src="https://cdn.ppomppu.co.kr/zboard/data3/2017/0818/20170818095926_xahmceyr.jpg" alt=""/>
      </div>
      <div style={styles.profileInfoContainer}>
        <h1>Name <small style={{color:'#dbdbdb'}}>@yourId</small></h1>
        <p>Non dolor cupidatat in anim ad sint culpa quis magna occaecat. Non labore sit eiusmod excepteur ullamco Lorem do laborum.</p>
        <div style={styles.staticInfo}>
          <h3 style={styles.staticItem}>게시글 24</h3>
          <h3 style={styles.staticItem}>팔로워 180</h3>
          <h3 style={styles.staticItem}>팔로잉 220</h3>
        </div>
        <div>
          <button style={styles.followButton}>Follow</button>
        </div>
      </div>
    </div>
  );
}
 
export default Header;