import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    useColorModeValue,
    Stack
} from '@chakra-ui/react';
import LocationPicker from './locationpicker';
import LocalDatePicker from './datepicker'
import client from './client';

const ControlPanel = () => {
    const [localDate, setLocalDate] = React.useState(new Date());
    const [selectLocation, setSelectLocation] = useState("");
    const [latestLocationForecasts, setLatestLocationForecasts] = useState([]);
    const [historicalLocationForecasts, setHistoricalLocationForecasts] = useState([]);

    const handleLocationSelect = (location) => {
        setSelectLocation(location);
    };

    const handleDateSelect = (date) => {
        setLocalDate(date);
    }

    const fetchForecasts = () => {
        console.log("button clicked");
        console.log(location);
        console.log(localDate);
        console.log(localDate.toISOString().slice(0, 10));
        const basePath = '/location/' + selectLocation + '/date/' + localDate.toISOString().slice(0, 10);
        console.log(basePath);
        client({ method: 'GET', path: '/latest/' + basePath })
            .then(response => { setLatestLocationForecasts(response.entity) });
        console.log(latestLocationForecasts);
        client({ method: 'GET', path: '/historical/' + basePath })
            .then(response => { setHistoricalLocationForecasts(response.entity) });
        console.log(historicalLocationForecasts);
    }

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Stack direction={'row'} spacing={7}>
                    <LocationPicker onSelect={handleLocationSelect} />
                    <LocalDatePicker localDate={localDate} setLocalDate={handleDateSelect} />
                    <Button colorScheme='green' variant='ghost' onClick={fetchForecasts}>
                        Fetch Forecasts
                    </Button>
                </Stack>
            </Box>
        </>
    )
}
export default ControlPanel;