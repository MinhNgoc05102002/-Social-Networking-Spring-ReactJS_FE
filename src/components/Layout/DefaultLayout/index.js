import Header from './Header'
import SidebarRight from './SidebarRight';
import SidebarLeft from './SidebarLeft';

function DefaultLayout({ children }) {
    return ( 
        <>
            <Header />
            <SidebarRight />
            <SidebarLeft />
            <>
                { children }
            </>
        </>
     );
}

export default DefaultLayout;