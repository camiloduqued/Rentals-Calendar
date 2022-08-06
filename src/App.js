import './App.scss';
import Layout from "./Layout/Layout";
import PackagesProvider from "./Contexts/PackagesContext";
import StepsProvider from "./Contexts/StepsContext";
import SummaryProvider from './Contexts/SummaryContext';

const App = () => {
  
  return (
    <div className="App">
      <StepsProvider>
        <PackagesProvider>
            <SummaryProvider>
              <Layout/>
            </SummaryProvider>
        </PackagesProvider>
      </StepsProvider>
    </div>
  );
}

export default App;
