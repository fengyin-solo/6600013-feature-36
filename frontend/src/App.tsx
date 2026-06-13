import ArtCanvas from './components/ArtCanvas'
import Sidebar from './components/Sidebar'
import { useDesignStore } from './store/design'

export default function App() {
  const panelCollapsed = useDesignStore(s => s.panelCollapsed)
  const togglePanel = useDesignStore(s => s.togglePanel)

  return (
    <div className="flex w-full h-full relative">
      <div className="flex-1 flex items-center justify-center bg-gray-950 overflow-auto p-4 md:p-6">
        <ArtCanvas />
      </div>

      <div
        className={`
          h-full
          fixed right-0 top-0 z-30
          md:relative md:z-auto md:top-auto md:h-auto
          transition-all duration-300 ease-in-out
          ${panelCollapsed
            ? 'w-72 translate-x-full md:translate-x-0 md:w-0 md:overflow-hidden'
            : 'w-72 translate-x-0 md:w-72'
          }
        `}
      >
        <Sidebar />
      </div>

      {!panelCollapsed && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={togglePanel}
        />
      )}

      {panelCollapsed && (
        <button
          onClick={togglePanel}
          className="fixed right-4 bottom-6 z-40 w-12 h-12 rounded-full bg-indigo-600 shadow-lg shadow-indigo-600/30 flex items-center justify-center text-xl hover:bg-indigo-500 active:scale-95 transition-all"
          aria-label="展开参数面板"
        >
          ⚙️
        </button>
      )}
    </div>
  )
}
