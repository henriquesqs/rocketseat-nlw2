import React from "react";
import { Link } from "react-router-dom";
import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";

interface PageHeaderProps {
    title: string;
    // title?: string; SE FOR OBRIGATÓRIO COLOCA O "?"
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Voltar" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
            </div>
        </header>
    );
};

export default PageHeader;
