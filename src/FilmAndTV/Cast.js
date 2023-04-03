import React, {useState, useEffect} from 'react';
import './FilmAndTV.css'; 
import * as M from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


//<Grid container spacing={2}>
//<Grid item xs={8}>
   // <

function Cast(props) {
    
    const [count, setCount] = useState(Number(10)); 
    const [directors, setDirectors] = useState([]); 
    const [directorIDs, setDirectorIDs] = useState([]); 
    const [writers, setWriters] = useState([]); 
    const [writerIDs, setWriterIDs] = useState([]); 
    const [loaded, setLoaded] = useState(false);

    
       
    useEffect(() => {
        props.cast.crew.map(assignTopCrew)
        setLoaded(true); 

    },[]);



    const assignTopCrew = (item, index) =>{
        if(item.job.toLowerCase() == 'director' && !directorIDs.includes(item.id)){
            let tempDirectors = directors; 
            tempDirectors.push(item); 
            setDirectors(tempDirectors); 

   

            let tempIDs = directorIDs;
            tempIDs.push(item.id)
            setDirectorIDs(tempIDs) 



        }
        
        if(item.job.toLowerCase() == 'writer' && !writerIDs.includes(item.id)){
            let tempWriters = writers; 
            tempWriters.push(item); 
            setWriters(tempWriters)


            let tempIDs = writerIDs;
            tempIDs.push(item.id)
            setWriterIDs(tempIDs) 
        }


    }



    const build_cast = (item, index) => {
        if(index < count){
            return(
                <M.Grid item xs={12} sm={6} className='cast' key={'cast' + index}>
                    <div className='cast__img__container'>
                        <img className='cast__img' 
                            src={'https://image.tmdb.org/t/p/w300'+item.profile_path} 
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
                              }}
                        >

                        </img>
                    </div>
                    <div className='cast__names'>
                        <h3>{item.name}</h3>
                        <h4>{item.character}</h4> 
                    </div>
                </M.Grid>


            )
        }
        if(index == count){
            return(
                <M.Grid item xs={12} onClick={()=>setCount(count+10)} sx={{cursor:'pointer'}}>
                    <div style={{height:'50px'}}>
                        <h3 className="cast__names"  style={{display:'inline'}}>See More Cast</h3>                      

                        <ExpandMoreIcon sx={{color: 'white', paddingTop:'12px', display:'inline'}} /> 


                    </div>
                </M.Grid>
            )
        }


    }


    const build_top_crew = (item, index) =>{
        return (
            <M.Grid item xs={12} sm={6} className='cast' key={'top_crew' + index}>
                    <div className='cast__img__container'>

                        <img className='cast__img' 
                            src={'https://image.tmdb.org/t/p/w300'+item.profile_path} 
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
                              }}
                        >
                        </img>
                    </div>
                    <div className='cast__names'>
                        <h3>{item.name}</h3>
                        <h3>{item.job}</h3>
                    </div>

            </M.Grid>

        )
    }

    const display_writer_director = () => {
        return(
            <div className='accordian'>
            <M.Accordion >
                <M.AccordionSummary   
                    sx={{backgroundColor: 'black'}}       
                    expandIcon={<ExpandMoreIcon sx={{color: 'white'}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <h3 className='cast__names'> Directors</h3>
                    {directors.map((item) => <div style={{marginTop: '13px', marginRight:'14px', color:'white'}}> {item.name}</div>)}
                </M.AccordionSummary>



                <M.AccordionDetails    sx={{backgroundColor: 'black'}}       >
                    <M.Grid container columnSpacing={2} rowSpacing={3} >

                       {directors.map(build_top_crew)}
                    </M.Grid>


                </M.AccordionDetails>

            </M.Accordion>
                <M.Accordion>
                <M.AccordionSummary     
                    sx={{backgroundColor: 'black'}}       
      
                    expandIcon={<ExpandMoreIcon sx={{color: 'white'}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <h3 className='cast__names'> Writers</h3>
                    {writers.map((item) => <div style={{marginTop: '13px', marginRight:'14px', color:'white'}}> {item.name}</div>)}

                </M.AccordionSummary>

                <M.AccordionDetails      sx={{backgroundColor: 'black'}}   >
                    <M.Grid container columnSpacing={2} rowSpacing={3} >

                        {writers.map(build_top_crew)}
                    </M.Grid>

                </M.AccordionDetails>
        
            </M.Accordion>
            </div>

        )

    }




    return (
        <div>
            <M.Grid container columnSpacing={2} rowSpacing={3}> 
                {loaded ? display_writer_director() : null}
            </M.Grid>
            <h1 className="section__header">Cast</h1>


            <M.Grid container columnSpacing={2} rowSpacing={3} >
                {props.cast.cast.map(build_cast)}

            </M.Grid>
        </div>

  )
}

export default Cast