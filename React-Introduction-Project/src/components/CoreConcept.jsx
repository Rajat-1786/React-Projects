export default function CoreConcept({item}){
    return (
        <li>
            <img src={item.image}></img>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </li>
        
    );
}