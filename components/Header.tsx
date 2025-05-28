import React from "react";
import Logo from "./Logo";
import Container from "./Container";
const Header =()=>{
    return (
        <header className="bg-white border-b -gray-400 py-5">
            <Container className="flex items-center justify-between gap-7 text-lightColor">
                <Logo>Lilie     </Logo>
</Container>
</header>
    )
};
export default Header;