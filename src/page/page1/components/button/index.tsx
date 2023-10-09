import * as React from 'react'
import style from './index.module.less'

type IProps = {
  name: string
  onClick: () => void
}

const Button: React.FC<IProps> = ({ name, onClick }) => {
  return <div className={style.btn} onClick={onClick}>{name}</div>
}

export default Button