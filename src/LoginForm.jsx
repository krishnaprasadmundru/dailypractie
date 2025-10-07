import React from "react";
import { useForm } from "react-hook-form";

function LoginForm(){ 

    const { 
      register,
      handleSubmit,
      formState:{errors}
    }=useForm();

    const onSubmit=(data)=>{
        alert(`form is submited sucessfully`);
    }

    return (
        <div style={{justifyContent:"center"}}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>email</label>{" "}
                <input {...register("email", {required:"email is required"})} type="email"/>
                {errors.email && <p>{errors.email.message}</p>}
            </div> 
            <div>
                <label >password</label> {" "}
                <input {...register("password",{required:"enter your password"},)} type="password" />
                 {errors.password && <p>{errors.password.message}</p>}
            </div> 
             <button type="submit">Login</button>
          </form>
        </div>
    )
}

export default LoginForm;