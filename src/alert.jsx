import React from 'react'

export default function Alert(props) {

  const capitalize = () => {
    return props.alert.Type[0].toUpperCase() + props.alert.Type.slice(1);
  }
  return (
    props.alert && <div>
        <div className={`alert alert-${props.alert.Type} alert-dismissible fade show`} role="alert">
        <strong>{ capitalize(props.alert.Type)}</strong> : { props.alert.msg}
        </div>
    </div>
  )
}
