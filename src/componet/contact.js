



function contact (prop){

return(
    <div>

    <img src={prop.person.picture.medium} />


    <div>
        <h1>{prop.person.name.first}</h1>
        <h2>{prop.person.name.last}</h2>
        <h3>{prop.person.phone}</h3>
        <h4>{prop.person.cell}</h4>
    </div>


    </div>
    
    
    
    )



}

export default contact