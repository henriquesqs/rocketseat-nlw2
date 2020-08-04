import React from "react";
import { Link } from "react-router-dom";
import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";
import "./styles.css";

// This interface is responsible for storing PageHeader's props and its types
interface PageHeaderProps {
    title: string;
    // title?: string; if its a required prop we can use this one instead
}

// Creating PageHeader component and telling it that its a component that has some props
// and this props are listed above in PageHeaderProps.

// const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
const PageHeader = (props: any) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                {/* Creating a link to our homepage */}
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Logo" />
            </div>

            <div className="header-content">
                {/* Here we receive title and headers component content via its props (title and children) */}
                <strong>{props.title}</strong>
                {props.children}
            </div>
        </header>
    );
};

export default PageHeader;
