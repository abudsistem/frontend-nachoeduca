const Note = ({ note,togglePublic, toggleImportance }) => {
    const label = note.important ? 'make not important' : 'make important'
    const textopublic = note.public ? 'make not public' : 'make public'
    return (
      <li className="note">
        <div><h2>{note.user}</h2></div>
        <div><p>{note.fecha}</p></div>
        {note.content}
        <button onClick={togglePublic}>{textopublic}</button>
        <button onClick={toggleImportance}>{label}</button>
      </li>
    )
  }
  
  export default Note