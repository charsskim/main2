import Footer from './component/common/Footer';
import Header from './component/common/Header';
import Main from './component/main/Main';
import Department from './component/sub/Department';
import Gallery from './component/sub/Gallery';
import Location from './component/sub/Location';
import Youtube from './component/sub/Youtube';
import './scss/style.scss';
import { Route } from 'react-router-dom';
export default function App() {
	return (
		<div className='wrap'>
			<Header />
			<Route exact path='/' component={Main} />
			<Route path='/department' component={Department} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/location' component={Location} />
			<Route path='/footer' component={Footer} />
		</div>
	);
}
