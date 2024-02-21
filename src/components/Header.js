import classes from './Header.module.css';
import {authActions} from '../Store/index'
import { useSelector,useDispatch } from 'react-redux';
const Header = () => {
  const isAuth=useSelector(state=>state.auth.isAutenticated)
  const dispatch=useDispatch();
  const logginHandler=()=>{
    dispatch(authActions.login())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth &&      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logginHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
 
    </header>
  );
};

export default Header;
