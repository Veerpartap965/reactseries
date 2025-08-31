function Profile(){
    return(
        <div>
            <h1>Profile Card Challenge</h1>
            <ProfileCard
            name="Veerpartap singh"
            age ={20} 
            greeting ={    // JSX as a props
                <div>
                    <strong>Hi Veerpartap,have a wonderful day !</strong>   
                </div>
            }
            >
                <p>
                    Hobbies: reading,gym
                </p>
                <button>Contact</button>
</ProfileCard>

            <ProfileCard
            name="Shubhdeep singh"
            age ={29}
            greeting ={
                <div>
                    <strong>Hi Sidhumoosewala ,keep up the great work!</strong>
                </div>
            }
            >
                <p>
                    Hobbies: Singing,farming
                </p>
                  <button>Contact</button>
</ProfileCard>
        </div>
    );
}
// children-- we can get data which inside the tag
export default Profile;

function ProfileCard({name,age,greeting,children}){    // ja ethe props ja fir eh
    // const {name,age,greeting,children} =props;
return(
    <>
    <h2>Name:{name}</h2>
    <p>Age:{age}</p>
    <p>{greeting}</p>
    <div>{children}</div>
    </>
    //   <>
    // <h2>Name:{props.name}</h2>
    // <p>Age:{props.age}</p>
    // <p>{props.greeting}</p>
    // <div>{props.children}</div>
    // </>
);
}