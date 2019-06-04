import React from 'react';

const hangmanBodyPaths = [
    // head
    <circle key="1" cx="25" cy="30" r="5" />,
    // neck
    <path key="2" d="M25 35 L25 45" />,
    // body
    <path key="3" d="M20 45 L30 45 L30 70 L20 70 L20 45" />,
    // left arm
    <path key="4" d="M20 47 L5 65" />,
    // right arm
    <path key="5" d="M30 47 L45 65" />,
    // left leg
    <path key="6" d="M20 70 L10 95" />,
    // right leg
    <path key="7" d="M30 70 L40 95" />
];
export default hangmanBodyPaths;
