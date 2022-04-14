import React, { lazy, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
const AvatarComponent = lazy(() => import("./AvatarComponent"));
const InfoComponent = lazy(() => import("./InfoComponent"));
const MoreInfoComponent = lazy(() => import("./MoreInfoComponent"));

// case 1:
// function App() {
//   return (
//     <div>
//       <AvatarComponent />
//     </div>
//   );
// }

// case 2:
// const renderLoader = () => <p>Loading</p>;
// function App() {
//   return (
//     <Suspense fallback={renderLoader()}>
//      <AvatarComponent />
//     </Suspense>
//   );
// }

// case 3:
const renderLoader = () => <p>Loading</p>;
function App() {
  return (
    <Suspense fallback={renderLoader()}>
      <AvatarComponent />
      <InfoComponent />
      <MoreInfoComponent />
    </Suspense>
  );
}

export default App;
