import React from 'react'


export default function NavBar({status="active"}) {

    const styles = {
        navWrapper: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'black',
          },
          
          navTitleWrapper: {
            padding: '0.5rem',
            margin: '0.5rem',
            display: 'flex',
          },
          navTitle: {
            padding: '0.5rem',
            fontWeight: 600,
            fontSize: '2.25rem' /* 36px */,
            // lineHeight: '2.5rem' /* 40px */,
            color: 'white',
          },
          navItemsOuterWrapper: {
            margin: '0.5rem',
            padding: '0.5rem',
          },
          navItemsInnerWrapper: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'relative',
          },
          navItemWrapper: {
            display: 'flex',
            alignItems: 'center',
            padding: '0.25rem',
          },
          navItemText: {
            padding: '0.5rem',
            fontWeight: 700,
            margin: 10,
            color: status === 'active' ? 'green' : 'red'
          }
          
    }

  return (
    <nav className={styles.navWrapper} style={styles.navWrapper}>
            <div style={styles.navTitleWrapper}>
                <h1 style={styles.navTitle}>GreenBook API</h1>
            </div>
            <div style={styles.navItemsOuterWrapper}>
                <div style={styles.navItemsInnerWrapper}>
                    <div >
                        <div style={styles.navItemWrapper}>
                            <h2 style={styles.navItemText}>{`API is currently ${status}`}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
  )
}
