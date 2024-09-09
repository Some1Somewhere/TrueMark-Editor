'use client'
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from 'next/dynamic'
import { useState, useCallback } from 'react'
import { useActionLog } from './context/ActionLogContext'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const MDEditor = dynamic(
  () => import('@uiw/react-md-editor'),
  { ssr: false }
)

export default function Home() {
  const [value, setValue] = useState("")
  const { actionLog, setActionLog } = useActionLog()

  const logAction = useCallback((action) => {
    setActionLog((prevLog) => [...prevLog, { timestamp: new Date().toISOString(), ...action }])
  }, [])

  const handleChange = useCallback((newValue) => {
    console.log(newValue)
    setValue(newValue)
    logAction({ type: 'change', value: newValue })
  }, [logAction])

  const handleKeyDown = useCallback((event) => {
    logAction({ type: 'keydown', key: event.key })
  }, [logAction])

  return (
    <>
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex flex-row items-center mb-4">
          <Image src='https://framerusercontent.com/images/h04i23gShVd4pD23i3ARbBsIGw.png' alt="TrueMark Logo" width={100} height={100} /><h1 className="text-3xl font-bold ml-4 text-center">TrueMark Editor</h1>
        </div>
        <div className="mb-6">
          <MDEditor
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onPaste={(event) => logAction({ type: 'paste', content: event.clipboardData.getData('text') })}
            height={400}
            className="shadow-lg rounded-lg"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            {value.length} characters | {value.split(/\s+/).length} words
          </div>
          <Link href="/frame-viewer">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Replay Actions
            </Button>
          </Link>
        </div>
      </div>
      {/* <pre>{JSON.stringify(actionLog, null, 2)}</pre>  */}
      </>
  )
}