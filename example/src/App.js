import React from 'react'

import { Button } from 'ebui'
import 'ebui/dist/index.css'

const App = () => {
  return (
    <div>
      <Button type='primary' text='Primary Button'></Button>
      <Button type='default' text='Default Button'></Button>
      <Button type='dashed' text='Dashed Button'></Button>
      <br />
      <Button type='text' text='Text Button'></Button>
      <Button type='link' text='Link Button'></Button>
    </div>
  )
}

export default App
