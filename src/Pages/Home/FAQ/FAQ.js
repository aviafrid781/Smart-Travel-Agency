import React, { useEffect, useState } from 'react';
import Faq from "react-faq-component";
import './FAQ.css'
const data = {
    title: "FAQ of Our Company",
    rows: [
        {
            title: "How do we works",
            content: `We can do many of them.we can give you visit visa,hotel booking,picnic booking. `,
        },
        {
            title: "Can We booking AirPlane Ticket?",
            content: " Yes We can also booking AirPlane ticket.We can also booking business class ticket ",
        },
        {
            title: "Is is trasted company??",
            content: `Yes.Our customers are fully trusted our company.We Provise our high Qulality service`,
        },
        {
            title: "How log process to get visa?",
            content: "We can complate all of your process into 1mongth,But are is also emergecne get visa  Service.",
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    margin: "10px"

};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

const FAQ = () => {



    return (
        <div className="fgq-container">
            <div>
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
            </div>

        </div>
    );
};

export default FAQ;