const photo = document.querySelector(".photo");
photo.style.backgroundImage = "url(https://avatars3.githubusercontent.com/u/67822910?s=400&u=821b1c9b795e864eb27dd63c37092c2be4656383&v=4)";
photo.innerHTML = `
    <h3>MERT ULAS</h3>
    <h4>SOFTWARE & ELECTRONICS ENGINEER</h4>`;
    
const profileInfo = document.querySelector(".profile-info");
profileInfo.innerHTML =
    `
    <ul>
        <li>
            <h3>50+</h3>
            <small>projects</small>
        </li>
        <li>
            <h3>157</h3>
            <small>followers</small>
        </li>
        <li>
            <h3>319</h3>
            <small>following</small>
        </li>
    `;

const followMe = document.querySelector(".follow-me");
followMe.innerHTML = 
    `
    <p>
        <a href="https://twitter.com/mertulaas" target="_blank">FOLLOW ME</a>
    <p>
    `;
