function Hello(){

    let number=21;
    let fulName= () => {
        return 'Vaishnavi Ghute';
    }
    return <p> 
        MassageNo:{number} , I am ur Friend {fulName()}
        </p>
}
export default Hello;