import './App.scss';
import Layout from "./Layout/Layout";
import PackagesProvider from "./Contexts/PackagesContext";
import StepsProvider from "./Contexts/StepsContext";
import SummaryProvider from './Contexts/SummaryContext';
import Confirmation from './components/Confirmation';
import { useState } from 'react';

const App = () => {
  const [paymentCompleted, setPaymentCompleted] = useState(false);
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
