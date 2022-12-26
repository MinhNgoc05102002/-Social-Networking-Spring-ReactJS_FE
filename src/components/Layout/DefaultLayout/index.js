import Header from './Header'
import SidebarRight from './SidebarRight';
import SidebarLeft from './SidebarLeft';

function DefaultLayout({ children }) {
    return ( 
        <div>
            <Header />
            <SidebarRight />
            <SidebarLeft />
            <div className = 'content'>
                { children }
            </div>
        </div>
     );
}

export default DefaultLayout;