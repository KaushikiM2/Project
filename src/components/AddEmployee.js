import React from "react";
import '/home/kaushiki.mallick/Desktop/Proj/frontend/src/components/AddEmployee.css'
import handleAddSubmit from './Employeelist'
import handleCancelBtn from './Employeelist'



export default function AddEmployee()
{
   
    return(
        <div className="headername">
        <h1 > Employee Detail</h1>
        
        
        <form type="POST" >
           
            <div>
            ID <input type='text' name='id' />

            </div>
             
           <div>
           Name <input type='text' name='name' />

           </div>

             <div>
             designation<input type='text' name='designation' />
             </div>

             <div>
             email <input type='text' name='email' />
             </div>

             <div>
             contact <input type='text' name='contact' />
             </div>

             <div>
             Department <input type='text' name='dept' />
             </div>

            <div>
            costcenter <input type='text' name='costcenter' />
            </div>

             <div>
             reporting to <input type='text' name='reportinto' />
             </div>

             <div>
             location <input type='text' name='location' />
             </div>

             <div>
             salary <input type='text' name='salary' />
             </div>
                
             
        
            <div>
          
        </div>
        
        <button type = "submit" onSubmit= {handleAddSubmit}>Submit</button>
     <button onClick={handleCancelBtn}>Cancel</button>    
    
                
    </form>
    
   
        </div>
        
    )    

}
