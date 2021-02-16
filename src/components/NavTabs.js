import React from 'react'
import { Link } from "react-router-dom";

export default function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/about" >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/discover" >
          Discover
        </Link>
        </li>
      <li className="nav-item">
        <Link
          to="/search" >
          Search
        </Link>
        </li>
    </ul>
  )
}
