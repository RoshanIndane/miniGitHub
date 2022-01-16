async function getuser(user){

    try{
        let response= await fetch(`https://api.github.com/users/${user}`)

        let data = await response.json();

        return data;

    }

    catch (err){
        console.log(err);
    }
}

export default getuser