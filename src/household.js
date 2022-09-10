const POLICYENGINE_API = "https://policyengine.org/us/api"

export default class HouseholdData {
    constructor({married, numChildren, zipCode, income}) {
        this.married = married;
        this.numChildren = numChildren;
        this.zipCode = zipCode;
        this.income = income;

        this.capped_heat_pump_rebate = null;
        this.income_tax_before_credits = null;
    }

    getOpenFiscaSituation() {
        let household = {
          tax_units: {
            tax_unit: {
              heat_pump_expenditures: {2023: 10_000},
              high_efficiency_electric_home_rebate_percent_covered: {2023: 1},
              capped_heat_pump_rebate: {2023: null},
              income_tax_before_credits: {2023: null},
              adjusted_gross_income: {2023: this.income}, // This is an approximation
            }
          },
          households: {
            household: {}
          },
          families: {
            family: {}
          },
          marital_units: {},
          people: {},
        }
        let adultNames = [];
        if(this.married) {
          adultNames = ["adult_1", "adult_2"];
        } else {
          adultNames = ["adult_1"];
        }
        let childNames = [];
        for(let i = 0; i < this.numChildren; i++) {
          childNames.push(`child_${i+1}`);
        }
        let allNames = adultNames.concat(childNames);
        household.tax_units.tax_unit.members = allNames;
        household.households.household.members = allNames;
        household.families.family.members = allNames;
        household.people = {};
        for(let name of allNames) {
          household.people[name] = {}
        }
        household.marital_units = {adults: {members: adultNames}}
        for(let name of childNames) {
          household.marital_units[name] = {members: [name]};
        }
        return household;
      }

      calculateResults() {
        return fetch(POLICYENGINE_API + "/calculate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            household: this.getOpenFiscaSituation()
          })
        }).then(response => response.json()).then(data => {
            const capped_heat_pump_rebate = data.tax_units.tax_unit.capped_heat_pump_rebate[2023];
            const income_tax_before_credits = data.tax_units.tax_unit.income_tax_before_credits[2023];
            return {
                capped_heat_pump_rebate: capped_heat_pump_rebate,
                income_tax_before_credits: income_tax_before_credits,
            }
        });
      }
}