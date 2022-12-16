function ProjectForm  () {
    return (
        <form>
        <div>
            <input type= "text" placeholder="Nome do Corte" />

        </div>
            
 
        <div>

        <input type= "number" placeholder="insira valor" />
        </div>
        <div>
        <select name= "Cortes">
        <option disabled >Selecionar</option>

        </select>
        </div>
        <div>
            <input type= "submit" value= "criando" /> 

        </div>
        </form>
    )
    
}
