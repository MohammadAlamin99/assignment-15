
import React, { useState } from 'react';

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
      <div className='header'>To Do List</div>
      <input type="text" placeholder='add activity' value={activity} onChange={(e)=>{
        setActivity(e.target.value)
      }} />
      <button onClick={addActivity}>add</button>
      <p className='list-heading'>Here is your list:{")"} </p>
      {
        listData!=[] && listData.map((data, i)=>{
          return(
            <>
              <p key={i}>
                <div className='listData'>{data}</div>
                <div className='btn-position'><button onClick={()=>{removectivity(i)}}>remove(-)</button></div>
              </p>
            </>
          )
        })
      }

    </div>
  );
};

export default Content;