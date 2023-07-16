import React, { useState } from 'react';

const Content = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  function addActivity() {
    setListData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity('');
      setIsButtonClicked(true); // Set the button click state to true
      return updatedList;
    });
  }

  function removectivity(i) {
    const updatedListData = listData.filter((elem, id) => {
      return i !== id;
    });
    setListData(updatedListData);
  }

  return (
    <div className='container'>
      <input
        type="text"
        placeholder='Add Your Activity'
        value={activity}
        onChange={(e) => {
          setActivity(e.target.value);
        }}
      />
      <button className='btn btn-success' onClick={addActivity}>Add</button>
      <p className='list-heading'>
        {isButtonClicked ? 'Here is your to do list:' : 'Enter your to do list'}
      </p>
      {listData.length !== 0 && listData.map((data, i) => {
        return (
          <div key={i}>
            <div className='listData'>{data}</div>
            <div className='btn-position'>
              <button
                className='remov btn btn-danger'
                onClick={() => {
                  removectivity(i);
                }}
              >
                remove(-)
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
