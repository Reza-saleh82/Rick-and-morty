
import { Outlet } from 'react-router';
import NavSite from '../../component/NavSite/NavSite';
import Offcanvans from './Offcanvans/Offcanvans';


function AppLayout() {
  

  return (
    <div>
      <NavSite />
      <div style={{ height: '300px' }}>
        <Outlet />
      </div>
      <Offcanvans/>
    </div>
  );
}

export default AppLayout;