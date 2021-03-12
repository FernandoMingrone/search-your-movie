import "./index.scss";
import { useForm } from "react-hook-form";  


function Contact() {
    const {register, errors, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <div className="contact">
            <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="contact__h1">How can we help you?</h1>
                <input 
                    className="name" 
                    placeholder="Name" 
                    name="name" 
                    ref={register({ required: "email required"})}
                />
                <input 
                    className="email" 
                    placeholder="Your email address" 
                    name="email" ref={register} 
                />
                <textarea
                    rows="10"
                    className="textarea"
                    name="message" 
                    ref={register}
                /> 
                {errors.email && <p>Email Required</p>}
                <button>SUBMIT</button>

            </form>
        </div>
    )
};

export default Contact;