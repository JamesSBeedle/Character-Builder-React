const SelectedClass = ({details}) => {
    return (
        <div>
            <h3>Name: {details.name}</h3>
            <h4>Index: {details.index}</h4>
            <h5>Hit Dice: {details.hit_die}</h5>
            <h5>Subclass: {details.subclasses[0].name}</h5>
        </div>
    );
};

export default SelectedClass;