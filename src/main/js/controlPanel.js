import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Text,
    HStack
} from '@chakra-ui/react';
import LocationPicker from './locationpicker';
import client from './client';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ControlPanel = ({ onFetchForecasts }) => {
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [selectLocation, setSelectLocation] = useState("");
    const [latestLocationForecasts, setLatestLocationForecasts] = useState([]);
    const [historicalLocationForecasts, setHistoricalLocationForecasts] = useState([]);
    const [basePath, setBasePath] = useState("");

    useEffect(() => {
        if (basePath !== "") {
            Promise.all([
                client({ method: 'GET', path: '/locationForecasts/latest' + basePath }),
                client({ method: 'GET', path: '/locationForecasts/historical' + basePath })
            ]).then(responses => {
                setLatestLocationForecasts(responses[0].entity);
                setHistoricalLocationForecasts(responses[1].entity);
                onFetchForecasts(responses[0].entity, responses[1].entity);
            });
        }
    }, [basePath]);

    const handleLocationSelect = (location) => {
        setSelectLocation(location);
    };

    const fetchForecasts = () => {
        setBasePath('/location/' + selectLocation + '/date/' + selectedDate.toISOString().slice(0, 10));
    }

    return (
        <>
            <Box px={4}>
                <HStack spacing='24px'>
                    <Box><Text fontSize='2xl' as='b'>Forecast Parameters</Text></Box>
                    <Box><LocationPicker onSelect={handleLocationSelect} /></Box>
                    <Box borderWidth='1px' borderRadius='lg' p='2' mx='Auto'>
                        <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} dateFormat="yyyy-MM-dd" />
                    </Box>
                    <Box><Button colorScheme='green' variant='solid' onClick={fetchForecasts}>
                        Fetch
                    </Button></Box>
                </HStack>
            </Box>
        </>
    )
}
export default ControlPanel;