import React, {useContext} from 'react';
import {Context} from "../index";

const Header = () => {
    const {user} = useContext(Context);
    return (
        <div>
            Navigation Header
        </div>
    );
};

export default Header;