import Header from './component/common/Header';
import Main from './component/main/Main';
import './scss/style.scss';
export default function App() {
	return (
		<div className='wrap'>
			<Header />
			<Main />
		</div>
	);
}
