import Archive from '../components/Archive/Archive';
import AppearanceSettings from '../components/Appearance Settings/AppearanceSettings';
import HabitEditor from '../components/HabitEditor/HabitEditor';
import Menu from '../components/Menu/Menu';
import Statistics from '../components/Statistics/Statistics';

const modalRoutes = [
	{
		path: 'appearance',
		element: <AppearanceSettings />
	},
	{
		path: 'archive',
		element: <Archive />
	},
	{
		path: 'habitEditor',
		element: <HabitEditor />
	},
	{
		path: 'menu',
		element: <Menu />
	},
	{
		path: 'statistics',
		element: <Statistics />
	}
];

export default modalRoutes;