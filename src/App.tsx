import Introduction from "@features/Introduction";

function App() {
  return (
    <div className="bg-linear-to-br from-[#F9FAFB] to-[#D2D6DB] flex flex-col p-4 h-screen">
      <main className="flex flex-col min-h-full bg-white rounded shadow-sm px-3 py-12 gap-20">
        <div className="space-y-12">
          <div id="" className="space-y-10">
            <Introduction />
            <div id="toggle-container" className="flex gap-4 rounded">
              <button id="monthly-button" className="flex-1 text-base leading-6 text-neutral-600">Monthly</button>
              <button id="annual-button" className="flex-1 gap-1.5 px-4 py-2.5 border-0.5 border-neutral-200 rounded shadow">Annually</button>
            </div>
          </div>
          <div id="tiers-container" className="flex flex-col gap-y-8 justify-center items-center">
            <div className="p-4 space-y-8 rounded-lg border border-neutral-200 shadow-sm">
              <div className="space-y-2">
                <h2>Basic Plan</h2>
                <p>Access to a curated selection of abstract images</p>
              </div>
              <div></div>
              <ul></ul>
              <button></button>
            </div>
          </div>
        </div>
      </main>
  
      <div className="credits">
        A challenge by
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
          >GreatFrontEnd Projects</a
        >. Built by
        <a href="https://www.greatfrontend.com/u/your_username" target="_blank"
          >Fiona D'Mello</a
        >.
      </div>
    </div>
  )
}

export default App
