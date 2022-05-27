import React from 'react'

export default function Button({bgColor="green", tColor="white", callback, text="button"}) {
    const styles = {
        button: {
            backgroundColor: bgColor,
            color: tColor,
            textTransform: "uppercase",
            fontWeight: 400,
            fontSize: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 8,
            paddingBottom: 8,
            borderRadius: 4,
            marginRight: 4,
            marginTop: 6,
            marginBottom: 4,
            height: 40,
            border: 0,
            transition: "all .15s ease",
            cursor: 'pointer'
        }
    }
  return (
    <button 
        type="button" 
        style={styles.button}
        onClick={callback}
        >
        {text}
    </button>
  )
}
