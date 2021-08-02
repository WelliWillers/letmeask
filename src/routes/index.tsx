
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

//páginas
import { Home } from "../pages/Home/index";
import { NewRoom } from "../pages/NewRoom/index";
import { Room } from '../pages/Room/index';
import { AdminRoom } from '../pages/AdminRoom/index';
import { NotFound } from '../pages/NotFound';
import { OpenRooms } from '../pages/OpenRooms';


export function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/rooms/new" exact component={NewRoom} />
                <Route path="/rooms-open" exact component={OpenRooms} />
                <Route path="/rooms/:id" component={Room} />
                <Route path="/admin/rooms/:id" component={AdminRoom} />
                <Route path="*" component={NotFound} />
            </Switch>
        
            <Toaster 
                position="top-right"
                toastOptions={{
                    duration: 5000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },
                    success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />
        </BrowserRouter>
    );
}