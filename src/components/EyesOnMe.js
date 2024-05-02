// Code EyesOnMe Component Here
 function password () {
    const blur = () => {
        console.log('Hey! Eyes on me!');
    }; 
    const focus = () => {
        console.log('Good!');
    };
    return (
        <button onFocus={focus} onBlur={blur}>Eyes on me</button>
    )
}
 export default password
