import Banner from './Banner';
import News from './News';
import News1 from './News1';
import Visual from './Visual';

export default function Main() {
	return (
		<div className='Main'>
			<Visual />
			<News />
			<News1 />
			<Banner />
		</div>
	);
}
