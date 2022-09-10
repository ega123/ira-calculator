import './App.css';
import { useState } from 'react';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Household from './Household';

// TODO: create one of these objects in household component
class HouseholdInfo {
  constructor({married, numChildren, zipCode, income}) {
    this.married = married;
    this.numChildren = numChildren;
    this.zipCode = zipCode;
    this.income = income;
  }
}

class ExpenditureInfo{
  constructor({new_clean_vehicle_classification,
  new_clean_vehicle_msrp,
  purchased_qualifying_new_clean_vehicle}){
    this.new_clean_vehicle_classification = new_clean_vehicle_classification;
    this.new_clean_vehicle_msrp = new_clean_vehicle_msrp;
    this.purchased_qualifying_new_clean_vehicle = purchased_qualifying_new_clean_vehicle;
  }
}
function App() {
  // TODO: begin with a null household in the PR that creates Household component.
  // This is just placeholder data for now
  const [household, setHousehold] = useState(new HouseholdInfo({
    married: true,
    numChildren: 3,
    zipCode: 98102,
    income: 50000,
  }));

  return (
    <div>
      <Header />
      <Household household={household} setHousehold={setHousehold} />
    </div>
  );
}

export default App;
