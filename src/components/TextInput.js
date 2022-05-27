import React from 'react'

export default function TextInput({label="label", name="input", type="text", callback}) {

    const styles = {
        wrapper: {
            position: "relative",
            width: "31%",
            marginTop: 20
        },
        label: {
            display: "block",
            textTransform: "uppercase",
            color: "rgba(31,41,55,1)",
            fontSize: 12,
            fontWeight: 700,
            marginBottom: 8
        },
        input: {
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 5,
            paddingBottom: 5,
            color: "rgba(55, 65, 81,1)",
            borderRadius: 4,
            fontSize: "0.875rem",
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0,1)",
            width: "100%",
            transition: "all .15s ease"
        }
    }
  return (
    <div style={styles.wrapper}>
        <label
            style={styles.label}
            htmlFor="grid-password">
            {label}
        </label>
        <input
            type={type}
            style={styles.input}
            name={name}
            onChange={callback}
        />
    </div>
  )
}
