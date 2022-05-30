import React from 'react'


export default function NavBar({status="active", current, setCurr}) {

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
            color: 'white',
            cursor: 'pointer'
          },
          navPingText: {
            padding: '0.5rem',
            fontWeight: 700,
            margin: 10,
            color: status === 'active' ? 'green' : 'red'
          }
          
    }

  return (
    <nav style={styles.navWrapper}>
            <div style={styles.navTitleWrapper}>
                <h1 style={styles.navTitle}>GreenBook API</h1>
            </div>
            <div style={styles.navItemsOuterWrapper}>
                <div style={styles.navItemsInnerWrapper}>
                    <div >
                        <div className='nav-small-wrapper' style={{backgroundColor: current === 'login' ? 'rgb(46, 45, 45)' : '#0e0d0d'}} >
                            <h2 style={styles.navItemText} onClick={() => setCurr('login')}>Login</h2>
                        </div>
                    </div>
                    <div >
                        <div className='nav-small-wrapper' style={{backgroundColor: current === 'location' ? 'rgb(46, 45, 45)' : '#0e0d0d'}}>
                            <h2 style={styles.navItemText} onClick={() => setCurr('location')}>Default Location</h2>
                        </div>
                    </div>
                    <div >
                        <div style={styles.navItemWrapper}>
                            <h2 style={styles.navPingText}>{status === 'active' ? `API is currently ${status}` : 'API is currently inactive'}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
  )
}
