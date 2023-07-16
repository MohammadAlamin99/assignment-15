
import React, { useState } from 'react';
import Footer from './Footer';

const Content = () => {


  const [activity, setActivity]=useState("");
  const [listData, setListData]=useState([]);

  function addActivity(){
    setListData((listData)=>{
      const updatedList = ([...listData, activity]);
      console.log(updatedList)
      setActivity('')
      return updatedList;
    })

  }


  function removectivity(i){
    const updatedListData = listData.filter((elem, id)=>{
        return i!=id;
    })
    setListData(updatedListData)
  }

  return (
    <div className='container'>
      <input type="text" placeholder='Add Your Activity' value={activity} onChange={(e)=>{
        setActivity(e.target.value)
      }} />
      <button className='btn btn-success' onClick={addActivity}>Add</button>
      <p className='list-heading'>Here is your list:{")"} </p>
      {
        listData!=[] && listData.map((data, i)=>{
          return(
            <>
              <p key={i}>
                <div className='listData'>{data}</div>
                <div className='btn-position'><button className='remov btn btn-danger' onClick={()=>{removectivity(i)}}>remove(-)</button></div>
              </p>
            </>
          )
        })
      }

    </div>
  );
};

export default Content;