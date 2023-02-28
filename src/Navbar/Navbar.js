import React, {useState, useEffect} from 'react';
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


      function sleep(delay = 0) {
        return new Promise((resolve) => {
          setTimeout(resolve, delay);
        });
      }
    
      /*
    useEffect(() => {
        Search('star wars')
        .then((result) =>{
            console.log(result);
        })
        .catch((err) =>{
            console.log(err)
        })

    }, [])

    */

    useEffect(() => {
        console.log('hey')
        let active = true;

        if (!loading) {
          return undefined;
        }
    
        /*
        (async () => {
          if (active && input != '') {
            Search(input)
            .then((result) =>{
                console.log(result);
                setOptions(result)
            })
            .catch((err) =>{
                console.log(err)
            })
          }
        })();
        */
      

      

    
        return () => {
          active = false;
        };

    }, [input])

    useEffect(() => {
        if (!open) {
          setOptions([]);
        }
    }, [open]);

    const getData = (event, value, reason) => {
        
        if(value != ''){
            console.log(value);
            Search(value)
            .then((result) =>{
                console.log(result);
                setOptions(result.results)
            })
            .catch((err) =>{
                console.log(err)
            })
            
        }

    }


    return (
        <div className = "navbar">
            <Autocomplete
                id="asynch-search"
                sx={{ width: 300 }}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                filterOptions={(x) => x}
                getOptionLabel={(option) => option.title}
                options={options}
                loading={loading}
                onInputChange ={getData}
                renderInput={(params) => (
                    <TextField
                    {...params}
                    label="Asynchronous"
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
