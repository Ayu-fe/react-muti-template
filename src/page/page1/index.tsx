import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import Button from './components/button'

import '@/global.less'

type IProps = {
  info?: Array<Record<string, any>>
}

const App: React.FC<IProps> = () => {
  return <div className='pt-6'>page1

    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Button name='click' onClick={() => {
      console.log('button')
    }} />
  </div>
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)

