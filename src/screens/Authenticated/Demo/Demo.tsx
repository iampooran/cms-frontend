// Demo file to knoe how to use input field : 

import { Paper } from '@mui/material';
import InputField from '../../../components/inputField';
import { Validators } from '../../../utils/validators';


export const Demo = () => {

    const handleOnchange=(value:string)=>{
        console.log(value)  // here you can access that value
    }
    return (
        // paper is an div which has whitish background
        <Paper>

           <InputField 
                // This are the props which your going to pass
                variant='outlined' 
                label = "Email"
                sx = {{background: '#90ee90'}}
                fullWidth
                autoFocus
                style = {{width : '500px'}}

                // by this function you can access the form value
                onChangeData={handleOnchange} 

                // here you can apply validators
                validators={[{
                    check: Validators.email,
                    message: "Please Enter Valid Email" }]} 
           ></InputField>

            <InputField 

                variant='outlined' label = "Password" sx = {{background: '#90ee90'}}
                fullWidth autoFocus style = {{width : '500px'}} type = "password"

                // by this function you can access the form value
                onChangeData={handleOnchange} 

                // here you can apply validators
                validators={[{
                        check: Validators.password,
                        message: "Please Enter Valid Password" }]} 

           ></InputField>

        </Paper>
    )
}

export default Demo


