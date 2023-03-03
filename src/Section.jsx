
export default function Section(props){

    return(
        <section>
            <div className="container">
                <div className="location-outer small-screen">
                    <div className="location-inner">
                        <img className="location-icon" src="./src/assets/location-icon.png" />
                        <h3>{props.card.location}</h3>
                        <p className="maps-link"><a target="_blank"  href={props.card.googleMapsUrl}>View on Google Maps</a></p>
                    </div>  
                    <h2>{props.card.title}</h2>
                </div>
                
                <img className="holiday-snap" src={`./src/assets/${props.card.imageUrl}`} />

                <div className="details">
                <div className="location-outer big-screen">
                    <div className="location-inner">
                        <img className="location-icon" src="./src/assets/location-icon.png"/>
                        <h3>{props.card.location}</h3>
                        <p className="maps-link"><a target="_blank" href={props.card.googleMapsUrl}>View on Google Maps</a></p>
                    </div>  
                    <h2>{props.card.title}</h2>
                </div>
                    <h4>{props.card.startDate} - {props.card.endDate}</h4>
                    <p>{props.card.description}</p>
                </div>
            </div>
        </section>
    )
}