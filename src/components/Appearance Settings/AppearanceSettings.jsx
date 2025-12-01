import styles from '../../css/appearanceSettings.module.css';

// stores
import { useSettingsStore } from '../../stores/settingsStore';

// components
import MenuItemList from '../Menu/MenuItemList';
import MenuItem from '../Menu/MenuItem';
import Switch from '../Selection/Switch';

function AppearanceSettings() {

	const settings = useSettingsStore((s) => s.settings);
	const settingsDispatch = useSettingsStore((s) => s.settingsDispatch);

	return (
		<section className={styles.appearance}>
			<MenuItemList title="Tema de cor">
				<MenuItem
					title="Forçar modo escuro"
					desc={`Atual: ${settings.isDarkSchemeForced ? 'Escuro' : 'Sistema'}`}
					other={
						<Switch
							isActive={settings.isDarkSchemeForced}
							onClick={() => settingsDispatch({
								isDarkSchemeForced: !settings.isDarkSchemeForced
							})}
						/>
					}
				/>
			</MenuItemList>

			<MenuItemList title="Calendario">
				<MenuItem
					title="Calendario compacto"
					desc={`Atual: ${settings.calendarView === 'compact' ? 'Compacto' : 'Padrão'}`}
					other={
						<Switch
							isActive={settings.calendarView === 'compact'}
							onClick={() => settingsDispatch({
								calendarView: settings.calendarView === 'compact'
									? 'default'
									: 'compact'
							})}
						/>
					}
				/>

				<MenuItem
					title="Destacar dia atual"
					desc={(settings.calendarHighlightToday ?? true)
						? 'O dia de hoje está destacado'
						: 'O dia de hoje não está destacado'}
					other={
						<Switch
							isActive={settings.calendarHighlightToday ?? true}
							onClick={() => settingsDispatch({
								calendarHighlightToday: !(settings.calendarHighlightToday ?? true)
							})}
						/>
					}
				/>
			</MenuItemList>
		</section>
	);
}

export default AppearanceSettings;