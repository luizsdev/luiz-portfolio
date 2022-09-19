import '../styles/playground.css'
import CodeEditor from '@uiw/react-textarea-code-editor'
import SyntaxHighligher from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import axios from 'axios'
import { useState } from 'react'
export const Playground = () => {
  const [url, setUrl] = useState('')
  const [method, setMethod] = useState('GET')
  const [body, setBody] = useState('')
  const [response, setResponse] = useState('')
  function handleBody(e: any) {
    setBody(e.target.value)
    console.log(body)
  }
  function handleSelect(e: any) {
    setMethod(e.target.value)
    console.log(e.target.value)
  }
  function sendRequest(e: any) {
    switch (method) {
      case 'get':
        axios
          .get(url)
          .then((res) => {
            setResponse(res.data)
            console.log(response)
          })
          .catch((err) => console.log(err))
        break
      case 'post':
        axios
          .post(url, body)
          .then((res) => {
            setResponse(JSON.stringify(res.data))
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })

      // INSERT OTHER METHODS
    }
  }
  function getUrl(e: any) {
    setUrl(e.target.value)
    console.log(url)
  }
  return (
    <div className="flex h-screen justify-center items-center ">
      <h1 className="absolute top-5 text-xl">API PLAYGROUND</h1>
      <div className="playground rounded-lg">
        <input
          type="text"
          className="url  input input-bordered"
          onChange={getUrl}
        />
        <button className="btn" onClick={sendRequest}>
          SEND
        </button>
        <div className="method">
          <select className="methods select" onChange={handleSelect}>
            <option disabled selected>
              SELECT THE METHOD
            </option>
            <option value="get">GET</option>
            <option value="post">POST</option>
            <option value="update">UPDATE</option>
            <option value="delete">DELETE</option>
          </select>
        </div>
        <SyntaxHighligher
          style={dracula}
          language="json"
          className="textarea response absolute rounded-lg"
          readOnly
        >
          {JSON.stringify(response, undefined, 4)}
        </SyntaxHighligher>
        <CodeEditor
          language="json"
          className=" textarea body"
          onChange={handleBody}
          placeholder="ENTER JSON"
          style={{
            fontSize: 20,
            fontFamily:
              'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
          }}
        ></CodeEditor>
      </div>
    </div>
  )
}
