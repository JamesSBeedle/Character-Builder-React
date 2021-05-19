import {useState, useEffect} from 'react';
import {fetchClasses, getClassDetails} from "../Services/RolesServices"
import SelectedClass from "../Components/SelectedClass"

const RolesContainer = () => {

    const [classes, setClasses] = useState(null)
    const [selectedClass, setSelectedClass] = useState(null)
    const [details, setDetails] = useState(null)

    useEffect(() => {
        fetchClasses()
            .then(data => setClasses(data.results))
    }, [])

    const handleClassClick = (evt) => {
        setSelectedClass(classes[evt.target.value])
    }

    useEffect(() => {
        if (selectedClass){
            getClassDetails(selectedClass.url)
                .then(data => setDetails(data))
        }
    }, [selectedClass])

    const displayClasses = (classes) ? classes.map((entry, index) => {
        return  <button key={index} value={index} onClick={handleClassClick}>{entry.name}</button>
    }) : null

    const displaySelectedClass = details ? <SelectedClass details={details}/> : null

    return (
        <div>
            <h1> Container</h1>
            {displayClasses}
            {displaySelectedClass}
        </div>
    );
};

export default RolesContainer;