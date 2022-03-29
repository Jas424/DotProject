import { useEffect, useState } from "react";



const Profile = () => {

    const [fullname, setFullname] = useState('andrea sørensen')

    const getProfile = () => {
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        getProfile();
    },[])

    return (
        <div className="user-profile">
            <img id="avatar" src="https://randomuser.me/api/portraits/med/women/6.jpg" alt="" />
            <div id="fullname">{fullname}</div>
            <div id="username">
                goldendog885
            </div>
            <div className="description">
                <div>Email: <span id="email">andrea.sørensen@example.com</span></div>
                <div>City: <span id="city">nr åby</span></div>
            </div>
            <div className="footer">
                <button id="btn">Next User!</button>
            </div>
        </div>
    )
}

export default Profile;