import { lazy, Suspense } from "react";

import { loadRemoteMain } from "../application/loaders/main";
import { loadRemoteSidebar } from "../application/loaders/sidebar";

import Loading from "./components/loading";

const Main = lazy(() => loadRemoteMain());
const Sidebar = lazy(() => loadRemoteSidebar());

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex h-screen w-screen overflow-hidden">
        <Sidebar />
        <div
          className={"w-full flex flex-col flex-1 transition-all duration-300 ease-in-out"}
        >
          <Main />
        </div>
      </div>
    </Suspense>
  );
}

export default App;