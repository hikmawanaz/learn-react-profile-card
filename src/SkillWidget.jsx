import React from 'react'

export default function SkillWidget(props) {
  return (
    <div style={{backgroundColor: props.color}} className='skill'>{props.name}</div>
  )
}
