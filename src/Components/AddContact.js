import React, { useState } from 'react'

function AddContact() {
  const [inputData, setInputdata] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if(!inputData){

    }
    else{
      setItems([...items, inputData]);
      setInputdata('');
    }
  }
  //remove item 

  const removeItem = (id) => {
    const updatedItem = items.filter((ele, ind) => {
      return id !== ind;
    })
    setItems(updatedItem);
  }

  //remove all item

  const removeAll = () => {
    setItems([]);
  }
  
    return (
        <div className="main">
            
            <div class="ui icon input">
              <input type="text" onChange={(e) => setInputdata(e.target.value)} />
              <i class="plus circular link icon" onClick={addItem} ></i>
            </div>
            
            {
              items.map((element, ind) => {
                return(
                  <div class="ui clearing segment" key={ind} >
                    <h3 class="ui right floated header">
                      <i class="trash circular link icon" onClick={()=>removeItem(ind)} ></i>
                    </h3>
                    <h3 class="ui left floated header">
                      <h2> {element} </h2>
                    </h3>
                  </div>
                  
                )
              })
            }

            <button class="ui right labeled icon button" onClick={removeAll} >
              delete all
            </button>

        </div>
    )
}

export default AddContact
