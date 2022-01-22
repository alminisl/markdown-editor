import React, { useState, useCallback } from 'react'
import { Remarkable } from 'remarkable'
import Editor from './editor'
import Preview from './preview'
import './app.css'
import SimpleMdeReact from './SimpleMdeReact'
import 'easymde/dist/easymde.min.css'

const md = new Remarkable()
md.inline.ruler.enable(['ins', 'mark'])

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('# Hello, World!\n')

  const handleDocChange = useCallback(newDoc => {
    setDoc(newDoc)
  }, [])

  return (
    <div className="container container-narrow">
      <SimpleMdeReact value={doc} onChange={handleDocChange} />
    </div>
  )
}

export default App
