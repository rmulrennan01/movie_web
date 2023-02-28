import React, {useState, useEffect, useRef} from 'react';
import './Navbar.css';
import Search from '../TMDB/Search'; 
import * as M from '@mui/material/';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';


function Navbar() {
    const [options, setOptions] = useState([])
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const prevController = useRef();  

      function sleep(delay = 0) {
        return new Promise((resolve) => {
          setTimeout(resolve, delay);
        });
      }
    

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
        <div className = "navbar">
            <Autocomplete
                id="asynch-search"
                sx={{ width: 300, backgroundColor: 'white' }}
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
                 
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                        <React.Fragment>
                            {loading ? <CircularProgress color="inherit" size={5} /> : null}
                            {params.InputProps.endAdornment}
                        </React.Fragment>
                        ),
                    }}
                    />
                    )}
                />        
    </div>
    )
}

export default Navbar
