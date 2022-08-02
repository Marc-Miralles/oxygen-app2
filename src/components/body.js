import { CompactPicker } from 'react-color';
import { useState } from 'react';
import SavedPalletes from './saved-palletes';


function Body() {

     const [state, setState] = useState({
        background:'#AB149E',
      });

      const handleChangeComplete = (color) => {
        setState({ background: color.hex });
        changeColorSelected(color.hex);
      };

      const changeColorSelected = (color)=> {
        var dsa = document.getElementsByClassName("color-selected");
        for (var i = 0; i<dsa.length;i++){
            dsa[i].style.background = color;
        }
        console.log(dsa)
      }

      const handleColorSelector = event =>{
            
        if (event.currentTarget.classList.contains('color-selected')){
            event.currentTarget.classList.remove('color-selected');
        }else{
            var asd = document.getElementsByClassName("color-selected")
            for (var i = 0; i<asd.length;i++){
                asd[i].classList.remove("color-selected");
            }
            event.currentTarget.classList.add('color-selected');
        }
      }
      

    return (
        <div className="body">
            <div className="container container-body">
                <div className="color-selector">
                    <div className="color" onClick={handleColorSelector}>

                    </div>
                    <div className="color" onClick={handleColorSelector}>
                        
                    </div>
                    <div className="color" onClick={handleColorSelector}>
                        
                    </div>
                    <div className="color" onClick={handleColorSelector}>
                        
                    </div>
                    <div className="color" onClick={handleColorSelector}>
                        
                    </div>
                </div>

                <div className="color-picker">
                    <CompactPicker color={ state.background }
                        onChangeComplete={ handleChangeComplete }/>

                    <div className='palettename'>
                        <label>Name</label>
                        <div>
                            <input type="text" placeholder='Website color scheme'></input>
                            <button className='addbutton'>+</button>
                        </div>
                    </div>
                </div>

                <SavedPalletes/>
                
            </div>
        </div>
    )
}

export default Body;