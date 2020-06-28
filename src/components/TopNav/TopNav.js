import React from 'react';
import './TopNav.css'
import  Human_icon  from './img/human.svg';
import Bell_icon from './img/bell.svg';

export const TopNav = () => {
    return (
        <div>
            <div className="siteHeader">
                <div className="left_header">
                    <img  className="header_icon" src = { Human_icon} alt="" />
                    <span className="header_title">company name</span>
                </div>
                <div className="right_header">
                    <img src= { Bell_icon } className="header_icon" id="alert" alt="" />
                    <img src={ Human_icon } className="header_icon" id="right_logo" alt="" />
                </div>

            </div>

            <div className="topMenu">
                <div className="topMenu_left">
                    <div className="topMenu_button menu_selected">
                        Budget
    </div>
                    <div className="topMenu_button">
                        Campaign
    </div>
                    <div className="topMenu_button">
                        Ad set
    </div>
                    <div className="topMenu_button">
                        Ad
    </div>
                </div>
                <div className="topMenu_right">
                    <div className="topMenu_button" id="saveData">
                        Save
    </div>
                    <div className="topMenu_button">
                        Continue
    </div>
                </div>
            </div>

        </div>
    );
}