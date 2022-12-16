import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function KitchenSinkExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.myloview.com.br/adesivos/logotipo-de-barbershop-com-poste-de-barbeiro-
      em-estilo-vintage-modelo-de-vetor-700-111431648.jpg" />
      <Card.Body>
        <Card.Title>BARBEARIA ESTILO RJ</Card.Title>
        <Card.Text>
          AGENDE SE HORÁRIO CONOSCO
        </Card.Text>
        
      </Card.Body>
      <FloatingLabel controlId="floatingSelect" label="">
     <form>
        <div>
            <input type= "text" placeholder="Nome do cliente" />

        </div>
            
 
        <div>

        <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            />
        </div>
        <div>
        <select name= "Horario">
        <option>Horario</option>
        <option value="1">10:00</option>
        <option value="2">12:00</option>
        <option value="3">14:00</option>

        </select>
        </div>
        </form>
      <Form.Select aria-label="Floating label select example">
        <option>Nomes dos Cortes</option>
        <option value="1">Jaca</option>
        <option value="2">Americano</option>
        <option value="3">Asa Delta</option>
      </Form.Select>
      <div>
            <input type= "submit" value= "Enter" /> 

        </div>
    </FloatingLabel>
      <Card.Body>
        
      </Card.Body>
    </Card>
    
  );
}

export default KitchenSinkExample;