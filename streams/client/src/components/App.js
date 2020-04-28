import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import SteamShow from "./streams/SteamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import Header from "./Header";

//ClientID:: 273241992234-4l8pj12dosmosji9sdorkqepql1nshhm.apps.googleusercontent.com
//ClientPWD:: _U0_2b1kir1ZDO7nTWRBPnon

const App = () => {
    return (
        <div className="ui container">

            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/streams/new" exact component={StreamCreate}/>
                    <Route path="/streams/edit" exact component={StreamEdit}/>
                    <Route path="/streams/delete" exact component={StreamDelete}/>
                    <Route path="/streams/show" exact component={SteamShow}/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;