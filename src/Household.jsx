import React from 'react';
import { Radio } from "antd";

export default function Household(props){
    function handleChangeState(evt) {
        const updatedNewInfo = {
          ...props.household,
          [evt.target.name]: evt.target.value
        };
        props.setHousehold(updatedNewInfo);
      }

    return(
        <form>
            <label>Income</label>
            <input type="number" />
            <label>Marital Status</label>
            <Radio.Group name="isMarried" value={props.household.answer} onChange={handleChangeState}>
                <Radio.Button value="single">Single</Radio.Button>
                <Radio.Button value="married">Married</Radio.Button>
            </Radio.Group>
            <label>Number of dependents</label>
            <Radio.Group name="haveChildren" value={props.household.answer} onChange={handleChangeState}>
                <Radio.Button value="0">none</Radio.Button>
                <Radio.Button value="1">1</Radio.Button>
                <Radio.Button value="2">2</Radio.Button>
                <Radio.Button value="3">3</Radio.Button>
                <Radio.Button value="4">4</Radio.Button>
                <Radio.Button value="5">5</Radio.Button>
            </Radio.Group>
            <label>Zipcode</label>
            <input type="number" />
            
        </form>
    )

}