import React from "react"
import {Link} from "gatsby";

export default function Home() {
  return (
    <div>
      <h1>Welcome!</h1>
      <Link to="/profile">Go to your profile</Link>
    </div>)
}
