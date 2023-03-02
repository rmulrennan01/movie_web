import React, {useState, useEffect, useRef} from 'react';
import Search from '../TMDB/Search'; 
import * as M from '@mui/material/';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './SearchBar.css'; 

function SearchBar() {
    const [options, setOptions] = useState([])
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState(null); 
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


    const handleSelect = (value) => {
        window.location = '/film/' + String(value.id); 
    }

    const renderOption = (prop, op, state) => {
        if(state.selected == true){
            setSelected(op.title); 
            console.log(op.title); 
        }
        
        console.log(prop);

        return(
            <li onClick={()=> window.location = '/film/' + String(op.id)}>
                <div className='searchBar__li'>
                    <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${op.poster_path}`} className='searchBar__thumbnail'/>


                
                    <div>
                        <div className='searchBar__title'> {op.title} </div>
                        <div className='searchBar__date'> {op.release_date.slice(0,4)}</div>
                    </div>
                </div>
                
                
            </li>
        )
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
                getOptionLabel={(option) => option.title}
                options={options}
                loading={loading}
                loadingText={"Loading..."}
                noOptionsText="No Matches"
                onInputChange ={getData}
                onChange={(e,value) => setSelected(value)}
                renderOption={(props,option, state) => renderOption(props,option,state)}
                
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