import React from 'react';
import AddEvent from './AddEvent';
import {withTracker} from 'meteor/react-meteor-data';
import {Events} from '../api/events';

class EventApp extends React.Component{
    render(){
        return(
            <div>
                <AddEvent/>
                <pre>DB: Stuff: {JSON.stringify(this.props, null, ' ')}</pre>
            </div>
        );
    }
}

const App = withTracker(() => {
    return {
        events: Events.find({}).fetch()
    }
})(EventApp);

export default App;