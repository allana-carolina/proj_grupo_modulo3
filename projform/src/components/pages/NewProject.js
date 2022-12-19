import ProjectForm from '../project/ProjectForm'

import styles from './NewProject.css'

function NewProject () {
    return ( 
    <div className= {styles.newproject_container}>
    <h1>New Formulario</h1>
   <ProjectForm />
    <p>Criar</p>
    </div>
    )
}


export default NewProject
