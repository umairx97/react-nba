import React from 'react';
import styles from './formfields.module.css'; 


const FormFields =({formdata, change, id})=> { 

    const renderTemplate =()=> { 
        let formTemplate = null;

        switch(formdata.element){ 
            case ('input'): 
                formTemplate = (
                    <div> 
                        input
                    </div>
                )
                break;

            default: 
                formTemplate = null;

        }

        return formTemplate;

    }
    return ( 
        <div> 
            {renderTemplate()}
        </div>
    )
}

export default  FormFields;