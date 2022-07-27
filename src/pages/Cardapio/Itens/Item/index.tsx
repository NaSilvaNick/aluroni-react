import styles from "./Item.module.scss";
import IPrato from "types/IPrato";
import Tags from "components/Tags";
import { useNavigate } from "react-router-dom";

export default function Item(props: IPrato) {

  const { id, title, description, photo } = props;
  const navigate = useNavigate();

  return (
    <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Tags {...props} />
      </div>
    </div>
  );
}