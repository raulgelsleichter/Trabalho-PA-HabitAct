import styles from '../../css/Menu.module.css';
import packageJson from '../../../package.json';

// components
import MenuItemList from './MenuItemList';
import MenuItem from './MenuItem';

// utils
import clearLocalStorage from '../../utils/clearLocalStorage';

// icons
import { BsFillDatabaseFill } from "react-icons/bs";
import { FaGithub, FaPaintBrush } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { ImFire } from "react-icons/im";
import { HiArchiveBox } from "react-icons/hi2";

const PUBLIC_URL = process.env.PUBLIC_URL;

function Menu() {
	return (
		<section className={styles.menu}>
			<MenuItemList title="App">
				<MenuItem
					icon={<HiArchiveBox />}
					iconColor="#7b68ee"
					title="Arquivo"
					desc="Veja ou gerencie hábitos arquivados"
					to={`${PUBLIC_URL}/modal/archive`}
					state={{ modalTitle: 'Arquivo' }}
					arrow
				/>

				<MenuItem
					icon={<FaPaintBrush />}
					iconColor="#ffa420"
					title="Aparencia"
					desc="Modifique o visual do app"
					to={`${PUBLIC_URL}/modal/appearance`}
					state={{ modalTitle: 'Aparencia' }}
					arrow
				/>

			</MenuItemList>
			
			<div className={`${styles.category} ${styles.footer}`}>
				<small>Versão: {packageJson.version}</small>
			</div>
		</section>
	);
}

export default Menu;