import './style.css';
import logo from './logo.svg';


function NavBar() {

    return (
        <div className='wrapper'>
            <div className='nav'>
                <div className='logo'>
                    <img src={logo} alt="math divide image" />
                    <div>
                        <p>Divisors</p>
                    </div>
                </div>

                <div className='list'>
                    <ul>
                        <li>
                            <a href="https://github.com/AliLtRP">GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;