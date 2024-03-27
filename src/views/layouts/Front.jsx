import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Front = () => {
    const navigate = useNavigate();
    // useEffect(() => {
    //     const referrer = document.referrer;
    //     // const isLinkClick = referrer && referrer.startsWith(window.location.origin);
    //     const isManualInput = !referrer || referrer === window.location.href;
    //
    //     if (isManualInput) {
    //         navigate('/')
    //     }
    // }, []);

    return (
        <>
            <div className="App">
                <header id="header">
                    <Header/>
                </header>
                <Outlet />
                <footer id="footer">
                    <Footer/>
                </footer>
            </div>
        </>
    );
};

export default Front;