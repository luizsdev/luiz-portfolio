import '../styles/playground.css'
import axios from 'axios'
import { useState } from 'react'
export const Playground = () => {
  const [url, setUrl] = useState('')
  const [method, setMethod] = useState('GET')
  function sendRequest(e: any) {
    switch (method) {
      case 'GET':
        axios
          .get(url)
          .then((response) => {
            console.log(response)
          })
          .catch((err) => console.log(err))
    }
  }
  function getUrl(e: any) {
    setUrl(e.target.value)
    console.log(url)
  }
  return (
    <div className="flex h-screen justify-center items-center ">
      <div className="playground rounded-lg">
        <input
          type="text"
          className="url  input input-bordered input-primary "
          onChange={getUrl}
        />
        <button className="btn" onClick={sendRequest}>
          SEND
        </button>
        <div className="method">
          <select className="methods select w-full max-w-xs">
            <option disabled selected>
              SELECT THE METHOD
            </option>
            <option value="get">GET</option>
            <option value="post">POST</option>
            <option value="update">UPDATE</option>
            <option value="delte">DELETE</option>
          </select>
        </div>
        <div className="body rounded-lg"></div>
      </div>
    </div>
  )
}
