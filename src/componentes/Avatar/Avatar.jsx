import "./Avatar.css";


const Avatar = ({nome}) => {
    const primeirasLetra = nome.split(' ').map(item=>item[0]).join("").toUpperCase();
    return <div className="Avatar_root">{primeirasLetra}</div>
}
export default Avatar;
