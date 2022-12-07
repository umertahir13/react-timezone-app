import React from 'react';
import './rome.css'
import moment from 'moment-timezone';
import { getDateTime } from '../../services/datetime';
import Datetime from '../../page/datetime';


function Rome() {
    const [datetime, setDateTime] = React.useState()

    async function fetchData() {
        // You can await here
        const response = await getDateTime({ city: 'Rome' });
        // console.log(response)
        // console.log(moment(response.datetime).tz(response.timezone).format("YYYY-MM-DD hh:mm"))
        setDateTime(moment(response.datetime).tz(response.timezone).format("YYYY-MM-DD hh:mm a"))
        // ...
    }

    React.useEffect(() => {

        fetchData();

    }, [])
    return (
        <div>
            <Datetime props={datetime}/>
            <button onClick={fetchData}>update time</button>
        </div>
    );
}

export default Rome;