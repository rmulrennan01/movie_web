import React, {useState, useEffect, useRef} from 'react';
import Search from '../TMDB/Search'; 
import * as M from '@mui/material/';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function SearchBar() {
    const [options, setOptions] = useState([])
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const prevController = useRef();  

    useEffect(() => {
        let active = true;

        if (!loading) {
          return undefined;
        }
        return () => {
          active = false;
        };

    }, [input])

    useEffect(() => {
        if (!open) {
          setOptions([]);
        }
    }, [open]);


    //FUNCTION TO CALL UPON USER INPUT IN SEARCH BAR. THIS QUERIES RESULTS ON USER INPUT.
    const getData = (event, value, reason) => {
        if (prevController.current) {
            prevController.current.abort();
        }
        const controller = new AbortController();
        const signal = controller.signal; 
        prevController.current = controller; 
        
        if(value != ''){
            console.log(value);
            Search(value, signal)
            .then((result) =>{
                console.log(result);
                setOptions(result.results)
            })
            .catch((err) =>{
                console.log(err)
            })
        }
    }

    function ListboxItem (props) {
        console.log(props);
        return(
            <>
                <ul {...props} />
                
            </>
        );

    }
    return (
        <Autocomplete
                id="asynch-search"
                sx={{ width: 500, backgroundColor: 'white'}}
                freeSolo
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                filterOptions={(x) => x}
                getOptionLabel={(option) => option.title + " " + option.id}
                options={options}
                loading={loading}
                loadingText={"Loading..."}
                noOptionsText="No Matches"
                onInputChange ={getData}
                ListboxComponent={ListboxItem}
                
                renderInput={(params) => (
                    <TextField
                    {...params}
                    label="Search film, tv, and cast"
                 
       
                    />
                    )}
                />        
    )
}

export default SearchBar