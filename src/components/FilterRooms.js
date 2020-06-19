import React from 'react';
import { useContext } from "react";
import { firstContext } from "../context";
import Title from "./Title";

const gerAr = (obji, value) => {
    let samIi = [...new Set(obji.map(itme => itme[value]))];
    return samIi;
};

const FilterRooms = (props) => {
    const context = useContext(firstContext);
    const { handleChange } = context;
    console.log(2, props)
    const heyy = props.samir;
    let types = gerAr(heyy, "type");
    types = ["all", ...types];
    let hello = types.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option> ))
    console.log(1, types);
    

    return (
        <section className="filter-container">
         <Title help="search rooms" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">choose type of room</label>
                    <select
                        name="type"
                        id="type"
                        onChange={e => handleChange(e.target.value)}
                        className="form-control"
                        value={types}>
                    {hello}
                    </select>
                </div>
            </form>

        </section >
    )
}

export default FilterRooms;