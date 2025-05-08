
import pic from "../assets/user.jpg";

function UserCard(props){
    
    return(
        <>
        <div class="card" style={{width: "18rem"}}>
            <img src={pic} class="card-img-top" alt="user"/>
            <div class="card-body">
                <h5 class="card-title">User</h5>
                <p class="card-text">{props.user.name}<br></br>{props.user.email}<br></br>{props.user.country}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        

    </>

    );
}
export default UserCard;