import Introduction from "@features/Introduction";
import Toggle from "@features/Toggle";
import Tiers from "@features/Tiers";

function App() {
  return (
    <div className="bg-linear-to-br from-[#F9FAFB] to-[#D2D6DB] flex flex-col p-4 min-h-screen">
      <main className="flex flex-col flex-1 bg-white rounded shadow-sm px-3 py-12 gap-20 md:px-4 md:py-16">
        <div className="space-y-12 md:space-y-16">
          <div className="flex flex-col gap-y-10 items-center">
            <Introduction />
            <Toggle />
          </div>
          <Tiers />
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
