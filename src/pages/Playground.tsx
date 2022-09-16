import '../styles/playground.css'
import * as axios from 'axios'
import { useState } from 'react'
export const Playground = () => {
  const [url, setUrl] = useState('')
  const [method, setMethod] = useState('')
  function getUrl(e: any) {
    setUrl(e.target.value)
    console.log(url)
  }
  return (
    <div className="flex h-screen justify-center items-center ">
      <div className="playground rounded-lg">
        <input
          type="text"
          className="url form-control input"
          onChange={getUrl}
        />
      </div>
    </div>
  )
}
