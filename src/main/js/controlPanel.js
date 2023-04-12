import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Text,
    HStack
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
        const basePath = '/location/' + selectLocation + '/date/' + localDate.toISOString().slice(0, 10);
        client({ method: 'GET', path: '/locationForecasts/latest' + basePath })
            .then(response => { setLatestLocationForecasts(response.entity) });
        client({ method: 'GET', path: '/locationForecasts/historical' + basePath })
            .then(response => { setHistoricalLocationForecasts(response.entity) });
    }

    return (
        <>
            <Box px={4}>
                <HStack spacing='24px'>
                    <Box><Text fontSize='2xl' as='b'>Forecast Parameters</Text></Box>
                    <Box><LocationPicker onSelect={handleLocationSelect} /></Box>
                    <Box borderWidth='1px' borderRadius='lg'><LocalDatePicker localDate={localDate} setLocalDate={handleDateSelect} /></Box>
                    <Box><Button colorScheme='green' variant='solid' onClick={fetchForecasts}>
                        Fetch
                    </Button></Box>
                </HStack>
            </Box>
        </>
    )
}
export default ControlPanel;