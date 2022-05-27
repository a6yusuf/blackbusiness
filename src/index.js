import "./index.scss"

wp.blocks.registerBlockType("makeupnamespace/make-up-block-name", {
  title: "GreenBook",
  icon: "welcome-learn-more",
  category: "common",
  attributes: {
    merchantName: { type: "string" },
    merchantId: { type: "string" },
    apiPassword: { type: "string" },
    schoolFee: { type: "string" },
    classes: { type: "array" },
  },
  edit: EditComponent,
  save: function () {
    return null
  }
})

function EditComponent(props) {

  const style = {
    btn: {
        backgroundColor: 'black',
        borderRadius: 4,
        color: '#fff',
        fontSize: 14,
        height: 30,
        padding: 5,
        textAlign: 'center',
        margin: 5,
        cursor: 'pointer'
    }
}

  return (
    <div className="makeUpYourBlockTypeName">
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <span style={{margin: 5, padding: 5}}>
          <h5>GreenBook API</h5>
          <small>All About The Blacks</small>
        </span>
      </div>
    </div>
  )
}
