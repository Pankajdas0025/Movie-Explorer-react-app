import { Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>

    <nav className="navbar">
		<Link className="logo" href="/" data-discover="true">
			<h2>🎦Movie Explorer</h2>
		</Link>
		<Link to="/">Home</Link>
	</nav>

    </div>
  )
}

export default Navbar
