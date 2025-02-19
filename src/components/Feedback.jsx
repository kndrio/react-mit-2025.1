import React, {useState} from 'react';
import { Card, Input } from 'reactstrap';

  const Feedback = () => {

        const [formData, setFormData] = useState(
            {
            nome: '',
            email: '',
            feedback: '',
            }
        );

        const handleSubmit = (e) => {
            e.preventDefault();

            if(formData.nome === ""){
              alert("Insira o nome.");
              return false;
            }

            if(formData.email === ""){
              alert("Insira o email.");
              return false;
            }

            if(formData.feedback === ""){
              alert("Insira o feedback.");
              return false;
            }

            const confimationMessage = `
            Olá ${formData.nome}, <${formData.email}> seu feedback foi enviado com sucesso!
            `;

            console.log(confimationMessage);
            alert(confimationMessage);

        }
        
    return (
        <div style={{

        }}>
          <h2>Feedback</h2>
          <form onSubmit={handleSubmit} >
          <Card>
            <Input
              name="nome"
              type="text"
              placeholder="Nome"
              value={formData.nome}
              onChange={(e) => setFormData({...formData, nome: e.target.value })}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value })}
              required
            />
            <textarea
              name="nome"
              placeholder="Feedback"
              value={formData.feedback}
              onChange={(e) => setFormData({...formData, feedback: e.target.value })}
              required
            />
            <button type="submit">Enviar</button>
            </Card>
          </form>
        </div>
  
    );
  }

  export default Feedback;