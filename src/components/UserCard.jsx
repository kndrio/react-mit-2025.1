import react from "react";
import { Card } from 'reactstrap';

const isAdmin = (admin) => (admin ? <i>Sim</i> : <i>Não</i>);

const UserCard = ({ user, onClick }) => {
  const styles = {
    card: {
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "15px",
      width: "250px",
      boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "left",
      margin: "10px",
      backgroundColor: user.admin ? "red" : "",
    },
  };

  return (
    //<div style={styles.card} className={user.admin ? "is-admin" : ""}>
    <Card>
      <h3>{user.nome}</h3>
      <h4>Idade:{user.idade}</h4>
      <h4>Profissão:{user.profissao}</h4>
      <h4>Cidade:{user.cidade}</h4>
      <h4>Admin: {isAdmin(user.admin)}</h4>
      <button onClick={onClick} style={{cursor:"pointer"}}>Dados do usuário</button>
      </Card>
    //</div>
  );
};

export default UserCard;
