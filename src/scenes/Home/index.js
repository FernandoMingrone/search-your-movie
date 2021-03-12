import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Section from "../../components/Section";
import Search from "../../components/Search/Search";

// import {Link} from "react-router-dom";


function Home() {



    return (
        <div> 
            <Header />
            <Search />
            <Section />
            <Footer />
        </div>
    );
}

export default Home;

// import { useState } from "react";
// import Footer from "../../components/Footer";
// import Header from "../../components/Header";
// import {Link} from "react-router-dom";
// import Search from "./Search";
// import Services from "./Services";

// function Home() {
// //     const [services1, setServices] = useState([
// //     {
// //         id: 1,
// //         text: "Profesor de Piano",
// //         address: "Crisologo Larralde 1254",
// //         tel: "1184750398",
// //     },
// //     {
// //         id: 2,
// //         text: "Odontólogo Especialista",
// //         address: "Callo 542",
// //         tel: "1156933443",
// //     },
// //     {
// //         id: 3,
// //         text: "Cerrajero",
// //         address: "Cabildo 963",
// //         tel: "1157608354",
// //     },

// // ])

// // Delete Task (for each task filter if the taskid is NOT equal to the id
// // I dont want to show the task with that id that im clicking)
// // const deleteTask = (id) => {
// //     setServices(services1.filter((task) => task.id !== id))
// // }





//     return (
//         <div> 
//             <Header />
//             <div>
//             <Search />
//             {/* <div className="message"> */}
//             {/* {services1.length > 0 ? <Services services2={services1} onDelete={deleteTask} /> : "No tasks To Show"} */}

//             {/* </div> */}

//             </div>
//             <Link to="/details">details</Link>
//             <Footer />
//         </div>
//     );
// }

// export default Home;

