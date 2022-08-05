import './App.scss';
import Layout from "./Layout/Layout";
import PackagesProvider from "./Contexts/PackagesContext";
import StepsProvider from "./Contexts/StepsContext";

const App = () => {
  
  return (
    <div className="App">
      <StepsProvider>
        <PackagesProvider>
            <Layout/>
        </PackagesProvider>
      </StepsProvider>
    </div>
  );
}

export default App;
