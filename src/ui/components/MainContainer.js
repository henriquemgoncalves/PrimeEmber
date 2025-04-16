import BtnHome from "./BtnHome";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function MainContainer({ children }) {
    return (
        <>  
            <NavBar/>
            <div>
                {children}
            </div>
            <BtnHome/>
            <Footer/>
        </>
    );
}