import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note"
import "../styles/Home.css"

function Home() {
    const [notes, setNotes] = useState([]);
    const [projectname, setprojectname] = useState("");
    const [projectlist, setprojectlist] = useState("");
    const[certification, setCertification]= useState("")
    const[certificationlist,setCertificationlist]=useState([])

    

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api.get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                getNotes();
            })
            .catch((error) => alert(error));
    };

    const createNote = (e) => {
        e.preventDefault();
        const projectListArray = projectlist.split('\n').filter(project => project.trim() !== '');
        console.log(projectname, projectListArray) 
        
        api
            .post("/api/notes/", { projectname, projectlist: projectListArray })
            .then((res) => {
                if (res.status === 201) alert("Note created!");
                else alert("Failed to make note.");
                getNotes();
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <div>
                <h2>Notes</h2>
                {notes.map((note) => (
                    <Note note={note} onDelete={deleteNote} key={note.id} />
                ))}
            </div>
            <h2>Create a Note</h2>
            <form onSubmit={createNote}>
                <label htmlFor="project_name">Project Name :</label>
                <br />
                <input
                    type="text"
                    id="projectname"
                    name="projectname"
                    required
                    onChange={(e) => setprojectname(e.target.value)}
                    value={projectname}
                />
                <label htmlFor="projectlist">Project list:</label>
                <br />
                <textarea
                id="projectList"
                name="projectList"
                value={projectlist}
                onChange={(e) => setprojectlist(e.target.value)}
                required
            ></textarea>
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Home;