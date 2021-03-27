import * as React from 'react';
import "./NavItem.css"

export const NavItem = ({link, itemName}) => (
    <li class="nav-item">
        <a class="nav-link" href={link}>{itemName}</a>
    </li>
);