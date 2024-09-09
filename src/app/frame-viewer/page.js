'use client'
import { useActionLog } from '../context/ActionLogContext'
import FrameByFrameViewer from '../../components/FrameByFrameViewer'

export default function FrameViewerPage() {
  const { actionLog } = useActionLog()

  return (
    <div>
      {actionLog.length > 0 ? (
        <FrameByFrameViewer actionLog={actionLog} />
      ) : (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">No Actions Logged</h2>
            <p className="text-gray-600 mb-6">It looks like you haven't made any changes in the editor yet.</p>
            <a href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Go to Editor
            </a>
          </div>
        </div>
      )}
    </div>
  )
}